import { activityFeed } from '@/lib/data';
import clsx from 'clsx';

const typeConfig: Record<string, { dot: string; bg: string; label: string }> = {
  success: { dot: 'bg-emerald-400', bg: 'bg-emerald-400/10', label: 'Success' },
  info: { dot: 'bg-[#0ea5e9]', bg: 'bg-[#0ea5e9]/10', label: 'Info' },
  warning: { dot: 'bg-amber-400', bg: 'bg-amber-400/10', label: 'Warning' },
  error: { dot: 'bg-red-400', bg: 'bg-red-400/10', label: 'Error' },
};

export default function NotificationsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Notifications</h1>
          <p className="text-[#94a3b8] text-sm mt-0.5">System alerts and user activity</p>
        </div>
        <button className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">Mark all as read</button>
      </div>
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] divide-y divide-[#334155]">
        {activityFeed.map((item) => {
          const cfg = typeConfig[item.type];
          return (
            <div key={item.id} className="flex items-start gap-4 px-5 py-4 hover:bg-[#334155]/20 transition-colors">
              <div className={clsx('mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', cfg.bg)}>
                <span className={clsx('w-2 h-2 rounded-full', cfg.dot)} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-white">
                    <span className="font-medium">{item.user}</span>{' '}
                    <span className="text-[#94a3b8]">{item.action}</span>
                  </p>
                  <span className={clsx('text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0', cfg.bg, {
                    'text-emerald-400': item.type === 'success',
                    'text-[#0ea5e9]': item.type === 'info',
                    'text-amber-400': item.type === 'warning',
                    'text-red-400': item.type === 'error',
                  })}>
                    {cfg.label}
                  </span>
                </div>
                <p className="text-xs text-[#94a3b8] mt-1">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
