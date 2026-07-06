import React from 'react';

export default function Dashboard({ changeTab, startInterview }) {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-indigo-900/40 via-purple-900/20 to-transparent p-6 rounded-2xl border border-indigo-500/10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Welcome back, Engineer!</h2>
          <p className="text-slate-400 mt-1">Your overall technical assessment index is up 14% this week.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800 text-center">
            <span className="block text-xs text-slate-400 uppercase tracking-wider">Current Streak</span>
            <span className="text-xl font-bold text-amber-400">🔥 6 Days</span>
          </div>
          <div className="bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800 text-center">
            <span className="block text-xs text-slate-400 uppercase tracking-wider">Avg Accuracy</span>
            <span className="text-xl font-bold text-emerald-400">88.4%</span>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Upcoming AI Mock Sessions</h3>
            <div className="space-y-3">
              {[
                { title: 'Full-stack System Design Mock', dynamicTime: 'Tomorrow at 10:00 AM', track: 'Backend' },
                { title: 'Behavioral Round with HR Copilot', dynamicTime: 'Oct 14, 2026 at 2:30 PM', track: 'HR' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-900 hover:border-slate-800 transition-colors">
                  <div>
                    <h4 className="font-medium text-slate-200">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-0.5">⏱️ {item.dynamicTime}</p>
                  </div>
                  <button onClick={() => startInterview(item.track)} className="bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white transition-colors">
                    Launch Room
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Recent Completed Sessions</h3>
            <div className="space-y-3">
              {[
                { title: 'Advanced Java Architecture', score: '9.1/10', state: 'Excellent' },
                { title: 'React Hooks & State Optimization', score: '7.8/10', state: 'Good' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-950/20 rounded-xl border border-slate-900">
                  <div>
                    <h4 className="font-medium text-slate-300">{item.title}</h4>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{item.state}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-md font-bold text-slate-200">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Analytics Metric Column */}
        <div className="space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Skill Matrix Coverage</h3>
              <div className="space-y-4">
                {[
                  { name: 'Core DSA', value: 85, color: 'bg-indigo-500' },
                  { name: 'System Design', value: 62, color: 'bg-purple-500' },
                  { name: 'Frontend Eng.', value: 92, color: 'bg-emerald-500' }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs font-medium mb-1 text-slate-400">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden">
                      <div className={`${skill.color} h-full rounded-full`} style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={() => changeTab('resume')} className="w-full mt-6 text-center border border-slate-800 hover:bg-slate-900 text-slate-300 py-2.5 rounded-xl text-xs font-medium transition-colors">
              Analyze New Resume Stack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}