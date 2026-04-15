export interface ChartData {
  name: string;
  bars: string[];
  values: number[];
  comment: (max?: string) => string;
}