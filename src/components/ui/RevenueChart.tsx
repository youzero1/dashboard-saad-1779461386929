import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import type { ChartDataPoint } from '@/types';

type RevenueChartProps = {
  data: ChartDataPoint[];
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-3 shadow-xl">
        <p className="text-[#94a3b8] text-xs mb-2 font-medium">{label}</p>
        {payload.map((entry: any) => (
          <div key={entry.name} className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-[#94a3b8] capitalize">{entry.name}:</span>
            <span className="text-white font-medium">${(entry.value / 1000).toFixed(0)}k</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function RevenueChart({ data }: RevenueChartProps) {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-white font-semibold text-base">Revenue Overview</h3>
          <p className="text-[#94a3b8] text-sm mt-0.5">Monthly performance breakdown</p>
        </div>
        <div className="flex gap-2">
          {['1M', '3M', '6M', '1Y'].map((range) => (
            <button
              key={range}
              className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                range === '1Y'
                  ? 'bg-[#0ea5e9] text-white'
                  : 'text-[#94a3b8] hover:bg-[#334155] hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${v / 1000}k`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '16px' }}
            formatter={(value) => <span style={{ color: '#94a3b8', fontSize: '12px' }}>{value}</span>}
          />
          <Area type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} fill="url(#colorRevenue)" />
          <Area type="monotone" dataKey="expenses" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorExpenses)" />
          <Area type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={2} fill="url(#colorProfit)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
