import { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('Admin User');
  const [email, setEmail] = useState('admin@pulse.io');
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-[#94a3b8] text-sm mt-0.5">Manage your account and preferences</p>
      </div>

      {/* Profile */}
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5 space-y-4">
        <h3 className="text-white font-semibold">Profile</h3>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#6366f1] flex items-center justify-center text-white text-xl font-bold">
            AD
          </div>
          <div>
            <p className="text-white font-medium">Admin User</p>
            <p className="text-[#94a3b8] text-sm">Administrator</p>
            <button className="text-xs text-[#0ea5e9] hover:text-[#38bdf8] mt-1 transition-colors">Change avatar</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-[#94a3b8] mb-1.5">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#0ea5e9] transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm text-[#94a3b8] mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className="w-full bg-[#0f172a] border border-[#334155] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#0ea5e9] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5 space-y-4">
        <h3 className="text-white font-semibold">Preferences</h3>
        {[
          { label: 'Email Notifications', desc: 'Receive email alerts for important events', value: notifications, set: setNotifications },
          { label: 'Dark Mode', desc: 'Use dark color scheme across the dashboard', value: darkMode, set: setDarkMode },
        ].map((pref) => (
          <div key={pref.label} className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white">{pref.label}</p>
              <p className="text-xs text-[#94a3b8] mt-0.5">{pref.desc}</p>
            </div>
            <button
              onClick={() => pref.set(!pref.value)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                pref.value ? 'bg-[#0ea5e9]' : 'bg-[#334155]'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                  pref.value ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>

      <button className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm">
        Save Changes
      </button>
    </div>
  );
}
