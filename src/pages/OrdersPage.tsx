import clsx from 'clsx';
import { transactions } from '@/lib/data';

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Orders</h1>
          <p className="text-[#94a3b8] text-sm mt-0.5">Manage and track all orders</p>
        </div>
        <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          + New Order
        </button>
      </div>
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#334155]">
                {['Order ID', 'Customer', 'Amount', 'Status', 'Date'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-[#94a3b8] uppercase tracking-wider px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#334155]">
              {transactions.map((tx, idx) => (
                <tr key={tx.id} className="hover:bg-[#334155]/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm text-[#0ea5e9] font-medium">#ORD-{1000 + idx}</td>
                  <td className="px-5 py-3.5 text-sm text-white">{tx.name}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-white">${tx.amount.toFixed(2)}</td>
                  <td className="px-5 py-3.5">
                    <span className={clsx('text-xs font-medium px-2.5 py-1 rounded-full', {
                      'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20': tx.status === 'completed',
                      'bg-amber-400/10 text-amber-400 border border-amber-400/20': tx.status === 'pending',
                      'bg-red-400/10 text-red-400 border border-red-400/20': tx.status === 'failed',
                    })}>
                      {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#94a3b8]">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
