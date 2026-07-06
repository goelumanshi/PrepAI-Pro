import React, { useState } from 'react';

export default function CodingRound() {
  const problems = [
    { title: 'Reverse a Linked List Inline', diff: 'Easy', desc: 'Given the head pointer of a singular linked node structure, manipulate pointers dynamically to invert directional outputs.' },
    { title: 'LRU Eviction Strategy Cache', diff: 'Medium', desc: 'Design a highly optimal Least Recently Used cache subsystem providing O(1) reads and write configurations.' },
    { title: 'Merge K Sorted Arrays via Heaps', diff: 'Hard', desc: 'Synthesize optimal pointers inside K arrays leveraging priority min-heap models.' }
  ];

  const [activeProblem, setActiveProblem] = useState(problems[1]);
  const [code, setCode] = useState(`public class Solution {\n    public Node reverseList(Node head) {\n        // Enter your Java DSA structure optimization code here\n        return null;\n    }\n}`);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Side Problem Panel Selector */}
      <div className="lg:col-span-2 space-y-4">
        <h3 className="text-xl font-bold text-white">Java DSA Arena</h3>
        <div className="space-y-2.5">
          {problems.map((prob, idx) => (
            <button
              key={idx}
              onClick={() => setActiveProblem(prob)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                activeProblem.title === prob.title 
                  ? 'bg-indigo-600/10 border-indigo-500 text-white' 
                  : 'bg-slate-900/20 border-slate-900 text-slate-400 hover:border-slate-800'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-sm text-slate-200">{prob.title}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  prob.diff === 'Easy' ? 'bg-emerald-500/10 text-emerald-400' :
                  prob.diff === 'Medium' ? 'bg-amber-500/10 text-amber-400' : 'bg-rose-500/10 text-rose-400'
                }`}>{prob.diff}</span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">{prob.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Editor Panel Display */}
      <div className="lg:col-span-3 flex flex-col bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden min-h-[450px]">
        <div className="bg-slate-950 px-4 py-3 border-b border-slate-900 flex justify-between items-center">
          <span className="text-xs font-mono text-slate-400">Main.java</span>
          <button onClick={() => alert("Simulating structural compilations...")} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-md transition-colors">
            Run Test Cases
          </button>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="flex-1 w-full bg-slate-950/40 p-4 font-mono text-sm text-indigo-300 focus:outline-none resize-none leading-relaxed"
        />
      </div>
    </div>
  );
}