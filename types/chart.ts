export interface ChartDataPoint {
  date: string;
  btc: number;
  spy: number;
  zt: number;
  id: number;
}

export interface ChartApiResponse {
  sheet3: ChartDataPoint[];
}

export interface ChartDataset {
  label: string;
  data: (number | null)[];
  borderColor: string;
  backgroundColor: string;
  tension?: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
  yAxisMax?: number;
}
