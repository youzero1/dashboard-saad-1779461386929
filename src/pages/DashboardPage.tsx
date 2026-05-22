import StatCard from '@/components/ui/StatCard';
import RevenueChart from '@/components/ui/RevenueChart';
import TransactionsTable from '@/components/ui/TransactionsTable';
import ActivityFeed from '@/components/ui/ActivityFeed';
import TopProducts from '@/components/ui/TopProducts';
import DonutChart from '@/components/ui/DonutChart';
import { metrics, chartData, transactions, activityFeed, topProducts } from '@/lib/data';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6 min-h-full">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-[#94a3b8] text-sm mt-0.5">Welcome back, Admin. Here's what's happening.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#94a3b8]">Last updated:</span>
          <span className="text-sm text-white font-medium">Dec 10, 2024</span>
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <StatCard key={m.id} metric={m} />
        ))}
      </div>

      {/* Revenue chart - full width */}
      <RevenueChart data={chartData} />

      {/* Middle row: Top products + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TopProducts products={topProducts} />
        </div>
        <div>
          <DonutChart />
        </div>
      </div>

      {/* Bottom row: Transactions + Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TransactionsTable transactions={transactions} />
        </div>
        <div>
          <ActivityFeed items={activityFeed} />
        </div>
      </div>
    </div>
  );
}
