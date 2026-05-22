import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  Users,
  Settings,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Zap,
} from 'lucide-react';
import clsx from 'clsx';

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Analytics', icon: BarChart3, path: '/analytics', badge: 3 },
  { label: 'Orders', icon: ShoppingCart, path: '/orders', badge: 12 },
  { label: 'Customers', icon: Users, path: '/customers' },
  { label: 'Notifications', icon: Bell, path: '/notifications', badge: 5 },
  { label: 'Settings', icon: Settings, path: '/settings' },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'flex flex-col h-screen bg-[#1e293b] border-r border-[#334155] transition-all duration-300 relative z-20',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className={clsx('flex items-center gap-3 px-4 py-5 border-b border-[#334155]', collapsed && 'justify-center px-2')}>
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#0ea5e9] flex items-center justify-center">
          <Zap size={16} className="text-white" />
        </div>
        {!collapsed && (
          <div>
            <span className="font-bold text-white text-lg leading-none">Pulse</span>
            <span className="block text-[11px] text-[#94a3b8] leading-tight">Analytics Suite</span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group relative',
                    isActive
                      ? 'bg-[#0ea5e9] text-white shadow-lg'
                      : 'text-[#94a3b8] hover:bg-[#334155] hover:text-white'
                  )
                }
              >
                <item.icon size={18} className="flex-shrink-0" />
                {!collapsed && <span className="flex-1">{item.label}</span>}
                {!collapsed && item.badge && (
                  <span className="bg-white/20 text-white text-xs rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none">
                    {item.badge}
                  </span>
                )}
                {collapsed && item.badge && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#0ea5e9] rounded-full" />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="border-t border-[#334155] p-2">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin User</p>
              <p className="text-xs text-[#94a3b8] truncate">admin@pulse.io</p>
            </div>
            <button className="text-[#94a3b8] hover:text-white transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        )}
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[#94a3b8] hover:bg-[#334155] hover:text-white transition-colors text-sm"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </aside>
  );
}
