import { transactions } from '@/lib/data';

export default function CustomersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Customers</h1>
          <p className="text-[#94a3b8] text-sm mt-0.5">Manage your customer base</p>
        </div>
        <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
          + Add Customer
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
        {[{ label: 'Total Customers', value: '24,563' }, { label: 'Active This Month', value: '8,241' }, { label: 'New This Week', value: '342' }].map((s) => (
          <div key={s.label} className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
            <p className="text-[#94a3b8] text-sm">{s.label}</p>
            <p className="text-2xl font-bold text-white mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#334155]">
                {['Name', 'Email', 'Total Spent', 'Status'].map((h) => (
                  <th key={h} className="text-left text-xs font-medium text-[#94a3b8] uppercase tracking-wider px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#334155]">
              {transactions.map((tx, idx) => (
                <tr key={tx.id} className="hover:bg-[#334155]/30 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center text-white text-xs font-bold">
                        {tx.avatar}
                      </div>
                      <span className="text-sm font-medium text-white">{tx.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-[#94a3b8]">{tx.email}</td>
                  <td className="px-5 py-3.5 text-sm font-semibold text-white">${(tx.amount * (idx + 2)).toLocaleString()}</td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
