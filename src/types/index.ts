export type MetricCard = {
  id: string;
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: string;
  color: string;
};

export type Transaction = {
  id: string;
  name: string;
  email: string;
  amount: number;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  avatar: string;
};

export type ChartDataPoint = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
};

export type ActivityItem = {
  id: string;
  user: string;
  action: string;
  time: string;
  type: 'success' | 'info' | 'warning' | 'error';
};

export type NavItem = {
  label: string;
  icon: string;
  path: string;
  badge?: number;
};
