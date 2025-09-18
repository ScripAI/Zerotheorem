import Image from "next/image";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import LineChart from "@/components/LineChart";
import { Suspense } from "react";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import type { Metadata } from "next";

interface MetricItem {
  label: string;
  value: string;
  helper?: string;
}

interface ApiRow {
  [key: string]: unknown;
}

const transformLabel = (fieldName: string): string => {
  // Do spacing first, then handle parentheses
  let result = fieldName
    .replace(/([a-zA-Z]+)(\d+)/g, "$1 $2") // Sep2025 -> Sep 2025
    .replace(/([A-Z])/g, " $1") // Add space before capitals
    .replace(/\(/g, " (") // Add space before parentheses
    .replace(/\s+/g, " ") // Clean spaces
    .trim()
    .replace(/\(btc\)/gi, "(BTC)") // Fix BTC after spacing
    .replace(/\(spy\)/gi, "(SPY)"); // Fix SPY after spacing

  // Process words but skip already correct ones
  return result
    .split(" ")
    .map((word) => {
      if (word === "(BTC)" || word === "(SPY)") return word;

      const lower = word.toLowerCase();
      const specialWords: Record<string, string> = {
        btc: "BTC",
        spy: "SPY",
        est: "Est",
        avg: "Avg",
        max: "Max",
        min: "Min",
        std: "Std",
        dev: "Dev",
        cagr: "CAGR",
        start: "Start",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
      };

      return (
        specialWords[lower] ||
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    })
    .join(" ");
};

async function getMetrics(): Promise<MetricItem[]> {
  const url =
    "https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/performance/sheet1";

  try {
    const res = await fetch(`${url}?t=${Date.now()}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      if (res.status === 402) {
        console.warn("API quota exceeded for metrics data");
        throw new Error("API quota exceeded");
      }
      throw new Error(`Failed to fetch metrics: ${res.status}`);
    }
    const json = (await res.json()) as { sheet1?: ApiRow[] };
    const row = json.sheet1?.[0] ?? {};

    const pct = (v: unknown): string => {
      if (typeof v !== "number" || Number.isNaN(v)) return "-";
      return `${(v * 100).toFixed(2)}%`;
    };

    const num = (v: unknown): string => {
      if (typeof v !== "number" || Number.isNaN(v)) return "-";
      return `${v}`;
    };

    // Define field mappings with their value formatters
    const fieldMappings: Array<{
      field: string;
      formatter: (value: unknown) => string;
    }> = [
      { field: "returnToDate (startSep2025)", formatter: pct },
      { field: "estCagr", formatter: pct },
      { field: "30DAvgReturn", formatter: pct },
      { field: "30DAvgStdev", formatter: pct },
      { field: "estSharpeRatio", formatter: num },
      {
        field: "maxDrawdown",
        formatter: (v: unknown) => {
          if (typeof v !== "number" || Number.isNaN(v)) return "-";
          return `${(v * 100).toFixed(2)}%`;
        },
      },
      {
        field: "maxDrawdownDuration",
        formatter: (v: unknown) => (typeof v === "string" ? v : "-"),
      },
      {
        field: "averageWinRate",
        formatter: (v: unknown) => {
          if (typeof v !== "number" || Number.isNaN(v)) return "-";
          return `${(v * 100).toFixed(1)}%`;
        },
      },
      { field: "30DAvgBeta (btc)", formatter: num },
      { field: "30DAvgBeta (spy)", formatter: num },
      { field: "totalAlpha (btc)", formatter: pct },
      { field: "totalAlpha (spy)", formatter: pct },
    ];

    const metrics: MetricItem[] = fieldMappings.map(({ field, formatter }) => ({
      label: transformLabel(field),
      value: formatter(row[field]),
    }));

    return metrics;
  } catch (error) {
    // Fallback to static placeholders if API fails
    const fallbackFields = [
      "returnToDate (startSep2025)",
      "estCagr",
      "30DAvgReturn",
      "30DAvgStdev",
      "estSharpeRatio",
      "maxDrawdown",
      "maxDrawdownDuration",
      "averageWinRate",
      "30DAvgBeta (btc)",
      "30DAvgBeta (spy)",
      "totalAlpha (btc)",
      "totalAlpha (spy)",
    ];

    return fallbackFields.map((field) => ({
      label: transformLabel(field),
      value: "-",
    }));
  }
}

// Enhanced SEO metadata for the performance page
export const metadata: Metadata = getSEOTags({
  title:
    "ZeroTheorem Performance Metrics - Bitcoin Tail Risk Investment Returns",
  description:
    "View ZeroTheorem's Bitcoin tail risk investment performance metrics including returns, Sharpe ratio, risk statistics, and benchmark comparisons. Transparent reporting on our quantitative investment strategy.",
  keywords: [
    "bitcoin investment performance",
    "tail risk performance",
    "investment returns",
    "Sharpe ratio",
    "risk metrics",
    "bitcoin tail risk",
    "quantitative investment",
    "performance tracking",
    "investment analytics",
    "risk-adjusted returns",
    "benchmark comparison",
    "asymmetric returns",
    "portfolio performance",
    "investment strategy results",
    "financial performance",
  ],
  canonicalUrlRelative: "/performance",
  openGraph: {
    title:
      "ZeroTheorem Performance Metrics - Bitcoin Tail Risk Investment Returns",
    description:
      "View ZeroTheorem's Bitcoin tail risk investment performance metrics including returns, Sharpe ratio, and risk statistics with transparent reporting.",
    url: "https://zerotheorem.com/performance",
  },
  extraTags: {
    "article:author": "ZeroTheorem Investment Team",
    "article:section": "Performance",
    "article:tag": [
      "Performance",
      "Investment Returns",
      "Bitcoin",
      "Risk Metrics",
    ],
  },
});

export default async function PerformancePage() {
  const metrics = await getMetrics();
  return (
    <>
      {renderSchemaTags("performance")}
      <Suspense>
        <Header />
      </Suspense>
      <main className="container  max-w-6xl mx-auto px-4 py-10">
        <section className="mb-7">
          <LineChart />
        </section>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="card bg-base-200/40 border border-base-300/40"
              >
                <div className="card-body p-4">
                  <p className="text-xs opacity-80 mb-2">{item.label}</p>
                  <h3 className="text-xl font-bold">{item.value}</h3>
                  {item.helper ? (
                    <span className="text-xs opacity-60">{item.helper}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-2 mt-4">
          <div className="font-bold opacity-80"> Disclaimer: </div>
          <div className="text-justify opacity-80">
            The information provided here is for educational and illustrative
            purposes only and does not constitute an offer to sell, a
            solicitation to buy, or a recommendation of any security or
            investment strategy. Zero Theorem is a private investment firm and
            does not market, solicit, or provide investment services to external
            investors. Performance information presented herein solely for
            informational purposes. Past performance is not indicative of, and
            in no way guarantees, future results. All investments involve risk,
            including the potential loss of principal.
          </div>
        </section>
      </main>
      <FooterBig />
    </>
  );
}
