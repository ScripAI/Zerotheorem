export interface ChartDataPoint {
  date: string;
  btc: number;
  ztc: number;
  "3Rd": number;
  id: number;
}

export interface ChartApiResponse {
  sheet3: ChartDataPoint[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  tension?: number;
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}
