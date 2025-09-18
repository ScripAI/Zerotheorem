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

        // Filter out entries without btc, spy, or zt values
        const validData = json.sheet3.filter(
          (item) =>
            typeof item.btc === "number" &&
            typeof item.spy === "number" &&
            typeof item.zt === "number"
        );

        if (validData.length === 0) {
          throw new Error("No valid data found");
        }

        // Sort by date to ensure proper chronological order
        validData.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        const labels = validData.map((item) => item.date);
        const btcData = validData.map((item) => item.btc);
        const spyData = validData.map((item) => item.spy);
        const ztData = validData.map((item) => item.zt);

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

        setChartData(data);
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
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Performance Comparison - BTC, SPY & ZT",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: false,
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
        <div className="h-96">
          <Line data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
