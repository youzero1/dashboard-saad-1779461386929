import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart } from 'lucide-react';
import clsx from 'clsx';
import type { MetricCard } from '@/types';

type StatCardProps = {
  metric: MetricCard;
};

const iconMap: Record<string, any> = {
  DollarSign,
  Users,
  ShoppingCart,
  TrendingUp,
};

const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
  brand: { bg: 'bg-[#0ea5e9]/10', text: 'text-[#0ea5e9]', icon: 'text-[#0ea5e9]' },
  violet: { bg: 'bg-[#8b5cf6]/10', text: 'text-[#8b5cf6]', icon: 'text-[#8b5cf6]' },
  amber: { bg: 'bg-[#f59e0b]/10', text: 'text-[#f59e0b]', icon: 'text-[#f59e0b]' },
  emerald: { bg: 'bg-[#10b981]/10', text: 'text-[#10b981]', icon: 'text-[#10b981]' },
};

export default function StatCard({ metric }: StatCardProps) {
  const Icon = iconMap[metric.icon] || DollarSign;
  const colors = colorMap[metric.color] || colorMap['brand'];
  const isPositive = metric.change >= 0;

  return (
    <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5 flex flex-col gap-4 hover:border-[#475569] transition-colors">
      <div className="flex items-center justify-between">
        <p className="text-sm text-[#94a3b8] font-medium">{metric.title}</p>
        <div className={clsx('w-10 h-10 rounded-lg flex items-center justify-center', colors.bg)}>
          <Icon size={18} className={colors.icon} />
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{metric.value}</p>
        <div className="flex items-center gap-1.5 mt-1">
          {isPositive ? (
            <TrendingUp size={14} className="text-emerald-400" />
          ) : (
            <TrendingDown size={14} className="text-red-400" />
          )}
          <span className={clsx('text-sm font-medium', isPositive ? 'text-emerald-400' : 'text-red-400')}>
            {isPositive ? '+' : ''}{metric.change}%
          </span>
          <span className="text-xs text-[#94a3b8]">{metric.changeLabel}</span>
        </div>
      </div>
    </div>
  );
}
