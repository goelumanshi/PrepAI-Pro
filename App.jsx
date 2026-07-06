import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import InterviewGenerator from './components/InterviewGenerator';
import MockInterview from './components/MockInterview';
import CodingRound from './components/CodingRound';
import ProgressDashboard from './components/ProgressDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentTab, setCurrentTab] = useState('dashboard');
  const [selectedTrack, setSelectedTrack] = useState(null);
  
  // Simulated Auth Form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-2xl shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">PrepAI Pro</h1>
            <p className="text-slate-400 mt-2">Elevate your technical interview performance</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
              <input type="email" required defaultValue="developer@prepaipro.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <input type="password" required defaultValue="••••••••" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2.5 rounded-lg transition-colors shadow-lg shadow-indigo-600/20 mt-6">
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Application Layout after Login
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} logout={() => setIsLoggedIn(false)} />
      <main className="flex-1 min-w-0 p-6 md:p-10 overflow-y-auto max-h-screen">
        {currentTab === 'dashboard' && <Dashboard changeTab={setCurrentTab} startInterview={(track) => { setSelectedTrack(track); setCurrentTab('mock'); }} />}
        {currentTab === 'resume' && <ResumeAnalyzer />}
        {currentTab === 'generator' && <InterviewGenerator startInterview={(track) => { setSelectedTrack(track); setCurrentTab('mock'); }} />}
        {currentTab === 'mock' && <MockInterview track={selectedTrack || 'Frontend'} completeInterview={() => setCurrentTab('progress')} />}
        {currentTab === 'coding' && <CodingRound />}
        {currentTab === 'progress' && <ProgressDashboard />}
      </main>
    </div>
  );
}