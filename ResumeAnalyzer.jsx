import React, { useState } from 'react';

export default function ResumeAnalyzer() {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUpload = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setFileUploaded(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">AI Engine Resume Analyzer</h2>
        <p className="text-slate-400 mt-1">Get precise ATS-level optimization insights instantly.</p>
      </div>

      {!fileUploaded && !analyzing && (
        <div className="border border-dashed border-slate-800 bg-slate-900/20 rounded-2xl p-12 text-center transition-all hover:border-indigo-500/40">
          <span className="text-4xl block mb-4">📁</span>
          <p className="text-slate-300 font-medium mb-1">Upload your resume here</p>
          <p className="text-slate-500 text-xs mb-4">Supports PDF, DOCX up to 10MB</p>
          <button onClick={handleUpload} className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-colors">
            Select Document
          </button>
        </div>
      )}

      {analyzing && (
        <div className="border border-slate-900 bg-slate-900/20 rounded-2xl p-12 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500 mx-auto mb-4" />
          <p className="text-slate-300 font-medium">Parsing syntax & analyzing structural dependencies...</p>
        </div>
      )}

      {fileUploaded && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
          <div className="bg-slate-900/40 border border-slate-950 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-emerald-400">
              <span>🛡️</span><h4 className="font-semibold text-white">Identified Strengths</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
              <li>Robust modern Web API designs</li>
              <li>Strong production Java ecosystem metrics</li>
              <li>Clean implementation of modern UI patterns</li>
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-950 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-amber-400">
              <span>⚠️</span><h4 className="font-semibold text-white">Structural Weaknesses</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
              <li>Low quantity of quantified business metrics</li>
              <li>Unoptimized cloud systems exposure architecture</li>
            </ul>
          </div>

          <div className="bg-slate-900/40 border border-slate-950 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-3 text-rose-400">
              <span>🛑</span><h4 className="font-semibold text-white">Missing Critical Skills</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-400 list-disc list-inside">
              <li>Distributed systems caching (Redis)</li>
              <li>CI/CD workflow orchestrations</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}