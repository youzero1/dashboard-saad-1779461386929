import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '@/lib/data';

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Analytics</h1>
        <p className="text-[#94a3b8] text-sm mt-0.5">Detailed performance metrics and insights</p>
      </div>
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
        <h3 className="text-white font-semibold mb-4">Monthly Revenue vs Expenses</h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="month" tick={{ fill: '#94a3b8', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              labelStyle={{ color: '#94a3b8' }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar dataKey="revenue" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            <Bar dataKey="expenses" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[{ label: 'Avg Monthly Revenue', value: '$71,750', color: '#0ea5e9' }, { label: 'Avg Monthly Expenses', value: '$37,583', color: '#8b5cf6' }, { label: 'Avg Monthly Profit', value: '$34,167', color: '#10b981' }].map((stat) => (
          <div key={stat.label} className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
            <p className="text-[#94a3b8] text-sm">{stat.label}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: stat.color }}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
