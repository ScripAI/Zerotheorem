import Image from "next/image";
import SEOMeta from "@/components/SEOMeta";
import Header from "@/components/Header";
import FooterBig from "@/components/FooterBig";
import { Suspense } from "react";

interface MetricItem {
  label: string;
  value: string;
  helper?: string;
}

interface ApiRow {
  [key: string]: unknown;
}

async function getMetrics(): Promise<MetricItem[]> {
  const url = "https://api.sheety.co/277b72d8965eafe86b5880836f10c1a1/performance/sheet1";

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch metrics: ${res.status}`);
    const json = (await res.json()) as { sheet1?: ApiRow[] };
    const row = json.sheet1?.[0] ?? {};

    const pct = (v: unknown): string => {
      if (typeof v !== "number" || Number.isNaN(v)) return "-";
      return `${(v * 100).toFixed(0)}%`;
    };

    const num = (v: unknown): string => {
      if (typeof v !== "number" || Number.isNaN(v)) return "-";
      return `${v}`;
    };

    const metrics: MetricItem[] = [
      { label: "Return to Date (Aug.2025)", value: pct(row["returnToDate (aug2025)"]) },
      { label: "Est. Annualised Return", value: pct(row["estAnnualisedReturn"]) },
      { label: "Est. Sharpe Ratio", value: num(row["estSharpeRatio"]) },
      { label: "Est. Sortino Ratio", value: num(row["estSortinoRatio"]) },
      { label: "Maximum Drawdown Exp.", value: `${(typeof row["maximumDrawdownExp"] === "number" ? (row["maximumDrawdownExp"] as number) * 100 : NaN).toFixed(2)}%`.replace("NaN%", "-") },
      { label: "Recovery Time Exp.", value: typeof row["recoveryTimeExp"] === "string" ? (row["recoveryTimeExp"] as string) : "-" },
      { label: "Win Rate Exp", value: typeof row["winRateExp"] === "number" ? `${(row["winRateExp"] as number).toFixed(1)}%` : "-" },
      { label: "Est. Beta", value: num(row["estBeta"]) },
      { label: "Standard Deviation Exp.", value: num(row["standardDeviationExp"]) },
      { label: "BTC Rolling Volatility", value: num(row["btcRollingVolatility"]) },
      { label: "BTC Return (Aug.2025)", value: pct(row["btcReturn (aug2025)"]) },
      { label: "Est. Alpha", value: num(row["estAlpha"]) },
    ];

    return metrics;
  } catch (error) {
    // Fallback to static placeholders if API fails
    return [
      { label: "Return to Date (Aug.2025)", value: "-" },
      { label: "Est. Annualised Return", value: "-" },
      { label: "Est. Sharpe Ratio", value: "-" },
      { label: "Est. Sortino Ratio", value: "-" },
      { label: "Maximum Drawdown Exp.", value: "-" },
      { label: "Recovery Time Exp.", value: "-" },
      { label: "Win Rate Exp", value: "-" },
      { label: "Est. Beta", value: "-" },
      { label: "Standard Deviation Exp.", value: "-" },
      { label: "BTC Rolling Volatility", value: "-" },
      { label: "BTC Return (Aug.2025)", value: "-" },
      { label: "Est. Alpha", value: "-" },
    ];
  }
}

export default async function PerformancePage() {
  const metrics = await getMetrics();
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main className="container mx-auto px-4 py-10 md:py-16">
        <SEOMeta
          title="Historical Performance | Zerotheorem"
          description="Strategy performance metrics including returns, risk statistics, and benchmark comparisons."
          slug="/performance"
        />

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((item) => (
              <div
                key={item.label}
                className="card bg-base-200/40 border border-base-300/40"
              >
                <div className="card-body p-5 md:p-6">
                  <p className="text-sm opacity-80">{item.label}</p>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {item.value}
                  </h3>
                  {item.helper ? (
                    <span className="text-xs opacity-60">{item.helper}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterBig />
    </>
  );
}
