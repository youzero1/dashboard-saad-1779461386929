import clsx from 'clsx';
import { TrendingUp, TrendingDown } from 'lucide-react';

type Product = {
  name: string;
  revenue: number;
  units: number;
  growth: number;
};

type TopProductsProps = {
  products: Product[];
};

export default function TopProducts({ products }: TopProductsProps) {
  const maxRevenue = Math.max(...products.map((p) => p.revenue));

  return (
    <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-white font-semibold text-base">Top Products</h3>
          <p className="text-[#94a3b8] text-sm mt-0.5">Best performing this month</p>
        </div>
      </div>
      <div className="space-y-4">
        {products.map((product, idx) => {
          const barWidth = (product.revenue / maxRevenue) * 100;
          const isPositive = product.growth >= 0;
          return (
            <div key={product.name} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#94a3b8] w-4">{idx + 1}</span>
                  <span className="text-sm font-medium text-white">{product.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#94a3b8]">{product.units} units</span>
                  <div className={clsx('flex items-center gap-0.5 text-xs font-medium', isPositive ? 'text-emerald-400' : 'text-red-400')}>
                    {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {isPositive ? '+' : ''}{product.growth}%
                  </div>
                  <span className="text-sm font-semibold text-white w-16 text-right">
                    ${(product.revenue / 1000).toFixed(1)}k
                  </span>
                </div>
              </div>
              <div className="h-1.5 bg-[#334155] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] transition-all duration-700"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
