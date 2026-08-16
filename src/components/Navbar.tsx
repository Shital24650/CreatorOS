import React from 'react';
import { Sparkles, Video, ShieldCheck, Zap, Download, RefreshCw } from 'lucide-react';
import { AnalysisResult } from '../types';

interface NavbarProps {
  analysis: AnalysisResult | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenUpload: () => void;
  onLoadDemo: () => void;
  onExport: () => void;
  isLoading: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  analysis,
  activeTab,
  setActiveTab,
  onOpenUpload,
  onLoadDemo,
  onExport,
  isLoading,
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'radar', label: 'Content Radar', badge: analysis?.atoms.length },
    { id: 'dna', label: 'Creator DNA', badge: analysis ? `${analysis.creatorDna.scores.voiceMatchScore}%` : undefined },
    { id: 'graph', label: 'Content Graph' },
    { id: 'platforms', label: 'Platform Assets', badge: analysis?.platformAssets.length },
    { id: 'waste', label: 'Content Waste', badge: analysis?.wasteReport.totalOpportunities, highlight: true },
    { id: 'shield', label: 'Hallucination Shield' },
    { id: 'campaign', label: '7-Day Campaign' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Vision */}
          <div className="flex items-center gap-3">
            <button
              id="nav-logo-btn"
              onClick={() => setActiveTab('overview')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    CreatorOS
                  </span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    AI Engine
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400 hidden sm:block">
                  One Video → Structured Campaign
                </p>
              </div>
            </button>
          </div>

          {/* Quick Actions & Demo Banner */}
          <div className="flex items-center gap-2.5">
            {analysis?.isDemoSample && (
              <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                Demo Sample Active
              </span>
            )}

            <button
              id="nav-demo-sample-btn"
              onClick={onLoadDemo}
              disabled={isLoading}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Load</span> Demo Sample
            </button>

            <button
              id="nav-upload-btn"
              onClick={onOpenUpload}
              disabled={isLoading}
              className="px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg shadow-md shadow-cyan-900/20 flex items-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Video className="w-3.5 h-3.5" />
              <span>{analysis ? 'New Content' : 'Upload Video'}</span>
            </button>

            {analysis && (
              <button
                id="nav-export-btn"
                onClick={onExport}
                className="p-1.5 text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 rounded-lg transition-colors"
                title="Export Campaign & Assets"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Tab Navigation (Horizontal scrollable on mobile) */}
        {analysis && (
          <nav className="flex space-x-1 overflow-x-auto pb-2 scrollbar-none border-t border-zinc-800/40 pt-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-zinc-800 text-cyan-300 shadow-sm border border-cyan-500/30'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${
                        item.highlight
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : isActive
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};
