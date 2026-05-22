import { Search, Bell, Sun, RefreshCw } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <header className="h-16 bg-[#1e293b] border-b border-[#334155] flex items-center justify-between px-6 flex-shrink-0">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
        <input
          type="text"
          placeholder="Search anything..."
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
          className="w-full bg-[#0f172a] border border-[#334155] rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-[#94a3b8] focus:outline-none focus:border-[#0ea5e9] transition-colors"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-4">
        <button className="p-2 rounded-lg text-[#94a3b8] hover:bg-[#334155] hover:text-white transition-colors">
          <RefreshCw size={16} />
        </button>
        <button className="p-2 rounded-lg text-[#94a3b8] hover:bg-[#334155] hover:text-white transition-colors">
          <Sun size={16} />
        </button>
        <div className="relative">
          <button className="p-2 rounded-lg text-[#94a3b8] hover:bg-[#334155] hover:text-white transition-colors">
            <Bell size={16} />
          </button>
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#0ea5e9] rounded-full" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center text-white text-xs font-bold ml-2 cursor-pointer">
          AD
        </div>
      </div>
    </header>
  );
}
