"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type {
  ChartData,
  ChartDataPoint,
  ChartApiResponse,
} from "@/types/chart";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart() {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const url =
          "https://api.sheety.co/33d9ec27f5c7dfb130eb655baacab48d/performance/sheet3";
        const response = await fetch(`${url}?t=${Date.now()}`, {
          cache: "no-store",
          next: { revalidate: 0 },
        });

        if (!response.ok) {
          if (response.status === 402) {
            throw new Error("API quota exceeded. Please try again later.");
          }
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const json: ChartApiResponse = await response.json();

        // Include all entries with dates, even if some values are missing
        const validData = json.sheet3.filter(
          (item) => item.date && item.date.trim() !== ""
        );

        if (validData.length === 0) {
          throw new Error("No valid data found");
        }

        // Sort by date to ensure proper chronological order
        validData.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        // Create labels with only the actual data dates
        const labels = validData.map((item) => item.date);

        // Create data arrays with only actual data
        const btcData = validData.map((item) =>
          typeof item.btc === "number" ? item.btc : null
        );
        const spyData = validData.map((item) =>
          typeof item.spy === "number" ? item.spy : null
        );
        const ztData = validData.map((item) =>
          typeof item.zt === "number" ? item.zt : null
        );

        // Calculate maximum value from all datasets (filter out null values)
        const allValues = [...btcData, ...spyData, ...ztData].filter(
          (value): value is number => value !== null
        );
        const maxValue = allValues.length > 0 ? Math.max(...allValues) : 0.1;
        const yAxisMax = maxValue + maxValue * 0.3; // Add 30% above max value for better visibility

        const data: ChartData = {
          labels,
          datasets: [
            {
              label: "BTC",
              data: btcData,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              tension: 0.1,
            },
            {
              label: "SPY",
              data: spyData,
              borderColor: "rgb(54, 162, 235)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              tension: 0.1,
            },
            {
              label: "ZT",
              data: ztData,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              tension: 0.1,
            },
          ],
        };

        setChartData({
          labels: data.labels,
          datasets: data.datasets,
          yAxisMax: yAxisMax,
        });
      } catch (err) {
        console.error("Error fetching chart data:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load chart data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 40,
        bottom: 15,
        left: 20,
        right: 60,
      },
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          font: {
            size: 12,
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Performance Comparison - BTC, SPY & ZT",
        position: "bottom" as const,
        font: {
          size: 12,
        },
        padding: {
          top: 10,
          bottom: 5,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.parsed.y;
            const percentage = Math.round(value * 100);
            return `${context.dataset.label}: ${percentage}%`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: 11,
          },
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
          font: {
            size: 10,
          },
        },
        grid: {
          display: true,
          color: "rgba(255, 255, 255, 0.1)",
        },
        border: {
          display: true,
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
      y: {
        title: {
          display: true,
          text: "Cumulative Return %",
          font: {
            size: 11,
          },
        },
        ticks: {
          font: {
            size: 10,
          },
          stepSize: 1,
          maxTicksLimit: 20, // Allow more ticks to be shown
          callback: function (value: any) {
            return Math.round(value * 100); // Convert to percentage (0.01 -> 1)
          },
        },
        afterBuildTicks: function (axis: any) {
          // Force all ticks from 0 to 8 to be shown
          const ticks = [];
          for (let i = 0; i <= 8; i++) {
            ticks.push({
              value: i / 100, // Convert back to decimal for internal use
              label: i.toString(),
            });
          }
          axis.ticks = ticks;
        },
        beginAtZero: true,
        max: chartData?.yAxisMax || 0.1, // Use calculated max or default to 0.1
        grid: {
          display: true,
          color: "rgba(255, 255, 255, 0.1)",
        },
        border: {
          display: true,
          color: "rgba(255, 255, 255, 0.3)",
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index" as const,
    },
  };

  if (loading) {
    return (
      <div className="card bg-base-200/40 border border-base-300/40">
        <div className="card-body">
          <div className="flex items-center justify-center h-64">
            <span className="loading loading-spinner loading-lg"></span>
            <span className="ml-2">Loading chart data...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card bg-base-200/40 border border-base-300/40">
        <div className="card-body">
          <div className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <div>
              <h3 className="font-bold">Chart Data Unavailable</h3>
              <div className="text-xs">
                {error.includes("quota exceeded")
                  ? "Data service is temporarily unavailable. Please check back later."
                  : `Error: ${error}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!chartData) {
    return (
      <div className="card bg-base-200/40 border border-base-300/40">
        <div className="card-body">
          <div className="text-center">No data available</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-base-200/40 border border-base-300/40">
      <div className="card-body">
        <div className="h-[460px]">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
