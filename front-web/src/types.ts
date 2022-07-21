export type Store = {
  id: number;
  name: string;
};

export type SalesSummaryData = {
  sum: number | 0;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};

export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: Gender;
  sum: number;
};
