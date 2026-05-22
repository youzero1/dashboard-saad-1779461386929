import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Direct', value: 4200, color: '#0ea5e9' },
  { name: 'Organic', value: 3100, color: '#8b5cf6' },
  { name: 'Referral', value: 2400, color: '#10b981' },
  { name: 'Social', value: 1800, color: '#f59e0b' },
];

const total = data.reduce((sum, d) => sum + d.value, 0);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const entry = payload[0];
    return (
      <div className="bg-[#1e293b] border border-[#334155] rounded-lg p-3 shadow-xl">
        <p className="text-white text-sm font-medium">{entry.name}</p>
        <p className="text-[#94a3b8] text-xs">{((entry.value / total) * 100).toFixed(1)}%</p>
      </div>
    );
  }
  return null;
};

export default function DonutChart() {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
      <div className="mb-4">
        <h3 className="text-white font-semibold text-base">Traffic Sources</h3>
        <p className="text-[#94a3b8] text-sm mt-0.5">Where visitors come from</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative flex-shrink-0">
          <ResponsiveContainer width={140} height={140}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={65}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-white font-bold text-lg leading-none">{(total / 1000).toFixed(1)}k</span>
            <span className="text-[#94a3b8] text-xs">total</span>
          </div>
        </div>
        <div className="flex-1 space-y-2.5">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-[#94a3b8]">{item.name}</span>
              </div>
              <span className="text-sm font-medium text-white">{((item.value / total) * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
