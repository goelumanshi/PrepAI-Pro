import React from 'react';

export default function InterviewGenerator({ startInterview }) {
  const tracks = [
    { name: 'Frontend', desc: 'React, State Engines, Styling Matrix, Web Vitals Architecture', icon: '⚛️' },
    { name: 'Backend', desc: 'REST Framework Design, Microservices, Caching Layer Systems', icon: '⚙️' },
    { name: 'Java', desc: 'Concurrency Execution Model, JVM Tuning, Spring Framework ecosystem', icon: '☕' },
    { name: 'DSA', desc: 'Dynamic Programming Arrays, Trees & Graph Structuring Complexities', icon: '🧠' },
    { name: 'HR', desc: 'Behavioral Metrics alignment, Leadership Framework scenarios', icon: '👔' },
    { name: 'UI/UX', desc: 'Figma to Code paradigms, Interaction design paradigms', icon: '🎨' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Select Your Simulation Vector</h2>
        <p className="text-slate-400 mt-1">Our generative AI custom tailors questions dynamically based on your vector profile.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((track, i) => (
          <div key={i} className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl flex flex-col justify-between hover:border-indigo-500/40 transition-all group">
            <div>
              <span className="text-2xl block mb-3 group-hover:scale-115 transition-transform">{track.icon}</span>
              <h3 className="text-lg font-bold text-slate-200">{track.name} Engine</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{track.desc}</p>
            </div>
            <button onClick={() => startInterview(track.name)} className="w-full mt-6 bg-slate-950 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-all">
              Initialize Simulation
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}