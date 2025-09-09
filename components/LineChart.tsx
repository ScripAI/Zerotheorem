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
import type { ChartData, ChartDataPoint, ChartApiResponse } from "@/types/chart";

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
        
        const url = 'https://api.sheety.co/277b72d8965eafe86b5880836f10c1a1/performance/sheet2';
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        
        const json: ChartApiResponse = await response.json();
        
        // Filter out entries without btc or ztc values
        const validData = json.sheet2.filter(item => 
          typeof item.btc === 'number' && typeof item.ztc === 'number'
        );
        
        if (validData.length === 0) {
          throw new Error('No valid data found');
        }
        
        // Sort by date to ensure proper chronological order
        validData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        
        const labels = validData.map(item => item.date);
        const btcData = validData.map(item => item.btc);
        const ztcData = validData.map(item => item.ztc);
        
        const data: ChartData = {
          labels,
          datasets: [
            {
              label: 'BTC',
              data: btcData,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              tension: 0.1,
            },
            {
              label: 'ZTC',
              data: ztcData,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              tension: 0.1,
            },
          ],
        };
        
        setChartData(data);
      } catch (err) {
        console.error('Error fetching chart data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load chart data');
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
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'BTC vs ZTC Performance Comparison',
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value',
        },
        beginAtZero: false,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
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
          <div className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Error loading chart: {error}</span>
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
