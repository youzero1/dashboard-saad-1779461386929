import clsx from 'clsx';
import type { ActivityItem } from '@/types';

type ActivityFeedProps = {
  items: ActivityItem[];
};

const typeConfig: Record<ActivityItem['type'], { dot: string; bg: string }> = {
  success: { dot: 'bg-emerald-400', bg: 'bg-emerald-400/10' },
  info: { dot: 'bg-[#0ea5e9]', bg: 'bg-[#0ea5e9]/10' },
  warning: { dot: 'bg-amber-400', bg: 'bg-amber-400/10' },
  error: { dot: 'bg-red-400', bg: 'bg-red-400/10' },
};

export default function ActivityFeed({ items }: ActivityFeedProps) {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-white font-semibold text-base">Activity Feed</h3>
          <p className="text-[#94a3b8] text-sm mt-0.5">Recent system events</p>
        </div>
        <button className="text-sm text-[#0ea5e9] hover:text-[#38bdf8] transition-colors font-medium">Clear all</button>
      </div>
      <div className="space-y-4">
        {items.map((item) => {
          const cfg = typeConfig[item.type];
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className={clsx('mt-1 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0', cfg.bg)}>
                <span className={clsx('w-2 h-2 rounded-full', cfg.dot)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white">
                  <span className="font-medium">{item.user}</span>
                  {' '}
                  <span className="text-[#94a3b8]">{item.action}</span>
                </p>
                <p className="text-xs text-[#94a3b8] mt-0.5">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
