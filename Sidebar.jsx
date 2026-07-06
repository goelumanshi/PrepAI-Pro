import React from 'react';

export default function Sidebar({ currentTab, setCurrentTab, logout }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'resume', label: 'Resume Analyzer', icon: '📄' },
    { id: 'generator', label: 'Interview Room', icon: '🎯' },
    { id: 'coding', label: 'Coding Arena', icon: '💻' },
    { id: 'progress', label: 'Analytics Insights', icon: '📈' },
  ];

  return (
    <aside className="w-64 border-r border-slate-900 bg-slate-900/30 flex flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-900">
        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">PrepAI Pro</span>
      </div>
      <nav className="flex-1 p-4 space-y-1.5">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentTab(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
              currentTab === item.id 
                ? 'bg-indigo-600/10 text-indigo-400 border-l-2 border-indigo-500 pl-3.5' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-900">
        <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-rose-400/80 hover:bg-rose-950/20 hover:text-rose-400 rounded-xl transition-colors">
          <span>🚪</span> Sign Out
        </button>
      </div>
    </aside>
  );
}