import clsx from 'clsx';
import type { Transaction } from '@/types';

type TransactionsTableProps = {
  transactions: Transaction[];
};

const statusConfig: Record<Transaction['status'], { label: string; classes: string }> = {
  completed: { label: 'Completed', classes: 'bg-emerald-400/10 text-emerald-400 border border-emerald-400/20' },
  pending: { label: 'Pending', classes: 'bg-amber-400/10 text-amber-400 border border-amber-400/20' },
  failed: { label: 'Failed', classes: 'bg-red-400/10 text-red-400 border border-red-400/20' },
};

const avatarColors = [
  'from-[#0ea5e9] to-[#6366f1]',
  'from-[#8b5cf6] to-[#ec4899]',
  'from-[#10b981] to-[#0ea5e9]',
  'from-[#f59e0b] to-[#ef4444]',
  'from-[#6366f1] to-[#8b5cf6]',
  'from-[#ec4899] to-[#f59e0b]',
];

export default function TransactionsTable({ transactions }: TransactionsTableProps) {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#334155]">
        <div>
          <h3 className="text-white font-semibold text-base">Recent Transactions</h3>
          <p className="text-[#94a3b8] text-sm mt-0.5">Latest payment activity</p>
        </div>
        <button className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">
          View all
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#334155]">
              {['Customer', 'Amount', 'Status', 'Date'].map((h) => (
                <th key={h} className="text-left text-xs font-medium text-[#94a3b8] uppercase tracking-wider px-5 py-3">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#334155]">
            {transactions.map((tx, idx) => {
              const status = statusConfig[tx.status];
              const avatarColor = avatarColors[idx % avatarColors.length];
              return (
                <tr key={tx.id} className="hover:bg-[#334155]/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div
                        className={clsx(
                          'w-8 h-8 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-xs font-bold flex-shrink-0',
                          avatarColor
                        )}
                      >
                        {tx.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{tx.name}</p>
                        <p className="text-xs text-[#94a3b8]">{tx.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-sm font-semibold text-white">
                      ${tx.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className={clsx('text-xs font-medium px-2.5 py-1 rounded-full', status.classes)}>
                      {status.label}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-sm text-[#94a3b8]">
                      {new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
