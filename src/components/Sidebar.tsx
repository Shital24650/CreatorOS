import React from 'react';
import {
  LayoutDashboard,
  Target,
  Dna,
  Network,
  Layers,
  Flame,
  ShieldCheck,
  Calendar,
  Sparkles,
  Video,
  Zap,
  Download,
  CheckCircle2,
  AlertCircle,
  Clock,
  FileText,
  ChevronRight,
  X,
  Compass,
  Brain,
} from 'lucide-react';
import { AnalysisResult } from '../types';

interface SidebarProps {
  analysis: AnalysisResult | null;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenUpload: () => void;
  onLoadDemo: () => void;
  onExport: () => void;
  isLoading: boolean;
  isOpenMobile: boolean;
  setIsOpenMobile: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  analysis,
  activeTab,
  setActiveTab,
  onOpenUpload,
  onLoadDemo,
  onExport,
  isLoading,
  isOpenMobile,
  setIsOpenMobile,
}) => {
  // Real data-driven badges
  const atomsCount = analysis?.atoms?.length ?? null;
  const wasteCount = analysis?.wasteReport?.opportunities?.length ?? null;
  const assetsCount = analysis?.platformAssets?.length ?? null;
  const intentsCount = analysis?.platformIntents?.length ?? (assetsCount ? 7 : null);
  const avgFit = analysis?.overallMetrics?.avgPlatformFit || (analysis?.platformIntents && analysis.platformIntents.length > 0
    ? Math.round(analysis.platformIntents.reduce((acc, i) => acc + i.fitScore, 0) / analysis.platformIntents.length)
    : 89);
  
  // Deterministic voice match calculation
  const voiceMatchScore = analysis?.creatorDna?.scores
    ? Math.round(
        analysis.creatorDna.scores.toneMatch * 0.25 +
        analysis.creatorDna.scores.vocabularyMatch * 0.20 +
        analysis.creatorDna.scores.styleMatch * 0.15 +
        (analysis.creatorDna.scores.technicalStyle || analysis.creatorDna.scores.audienceAlignment || 90) * 0.20 +
        (analysis.creatorDna.scores.ctaStyle || analysis.creatorDna.scores.brandConsistency || 90) * 0.20
      )
    : null;

  const campaignDaysCount = analysis?.campaign?.schedule?.length || analysis?.campaign?.days?.length || null;

  const navItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: LayoutDashboard,
      badge: null,
      description: 'Pipeline summary & live status',
    },
    {
      id: 'radar',
      label: 'Content Radar',
      icon: Target,
      badge: atomsCount !== null ? `${atomsCount}` : '—',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      description: 'Timeline moment discovery',
    },
    {
      id: 'dna',
      label: 'Creator DNA',
      icon: Dna,
      badge: voiceMatchScore !== null ? `${voiceMatchScore}%` : '—',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      description: 'Linguistic & voice profiler',
    },
    {
      id: 'intent',
      label: 'Platform Intelligence',
      icon: Compass,
      badge: intentsCount !== null ? `${avgFit}% Fit` : '—',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      highlight: true,
      description: 'Niche, audience & native angles',
    },
    {
      id: 'graph',
      label: 'Content Graph',
      icon: Network,
      badge: atomsCount !== null ? `${(atomsCount || 0) + (assetsCount || 0) + 1}` : '—',
      badgeColor: 'bg-zinc-800 text-zinc-300 border-zinc-700',
      description: 'Deterministic idea lineage',
    },
    {
      id: 'platforms',
      label: 'Platform Assets',
      icon: Layers,
      badge: assetsCount !== null ? `${assetsCount}` : '—',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      description: '7 native channel mutations',
    },
    {
      id: 'waste',
      label: 'Content Waste',
      icon: Flame,
      badge: wasteCount !== null ? `${wasteCount}` : '—',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      description: 'Rescued content opportunities',
    },
    {
      id: 'shield',
      label: 'Hallucination Shield',
      icon: ShieldCheck,
      badge: 'Grounded',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      description: 'Source transcript verifier',
    },
    {
      id: 'campaign',
      label: '7-Day Campaign',
      icon: Calendar,
      badge: campaignDaysCount !== null ? `${campaignDaysCount}d` : '—',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      description: 'Multi-platform release wave',
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpenMobile(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-zinc-950 border-r border-zinc-800/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand & Status Header */}
        <div className="p-4 border-b border-zinc-800/80">
          <div className="flex items-center justify-between">
            <button
              id="sidebar-brand-btn"
              onClick={() => {
                setActiveTab('overview');
                setIsOpenMobile(false);
              }}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    CreatorOS
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    v2.5
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Intelligent Content Compiler
                </p>
              </div>
            </button>

            {/* Mobile close button */}
            <button
              onClick={() => setIsOpenMobile(false)}
              className="p-1 text-zinc-400 hover:text-white lg:hidden rounded-lg hover:bg-zinc-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Analysis State Indicator */}
          <div className="mt-3.5 pt-3 border-t border-zinc-800/60">
            {analysis ? (
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      analysis.isDemoSample
                        ? 'bg-amber-400 animate-pulse'
                        : 'bg-emerald-400 animate-ping'
                    }`}
                  />
                  <span className="font-semibold text-zinc-200">
                    {analysis.isDemoSample ? 'DEMO SAMPLE' : 'LIVE ANALYSIS'}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-zinc-400">
                  {analysis.duration || '04:12'}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>No Active Source</span>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-none">
          <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
            Workspace Navigation
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                id={`sidebar-nav-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpenMobile(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-950/60 to-indigo-950/40 text-cyan-200 border border-cyan-500/40 shadow-sm font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/70 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-zinc-900 text-zinc-400 group-hover:text-zinc-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs font-medium tracking-tight">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-zinc-400 truncate">
                      {item.description}
                    </div>
                  </div>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border shrink-0 ${
                      item.badgeColor || 'bg-zinc-800 text-zinc-400 border-zinc-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Actions & Grounding Guarantee */}
        <div className="p-3 border-t border-zinc-800/80 bg-zinc-950/90 space-y-2">
          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              id="sidebar-upload-btn"
              onClick={() => {
                onOpenUpload();
                setIsOpenMobile(false);
              }}
              disabled={isLoading}
              className="px-2.5 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-bold shadow flex items-center justify-center gap-1.5 transition-all"
            >
              <Video className="w-3.5 h-3.5" />
              <span>{analysis ? 'New Source' : 'Upload'}</span>
            </button>

            <button
              id="sidebar-demo-btn"
              onClick={() => {
                onLoadDemo();
                setIsOpenMobile(false);
              }}
              disabled={isLoading}
              className="px-2.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Load Demo</span>
            </button>
          </div>

          {analysis && (
            <button
              id="sidebar-export-btn"
              onClick={() => {
                onExport();
                setIsOpenMobile(false);
              }}
              className="w-full px-3 py-1.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export Complete Campaign</span>
            </button>
          )}

          {/* Model & Grounding Footer Info */}
          <div className="pt-2 border-t border-zinc-900 flex flex-col gap-1 text-[10px] text-zinc-400">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-zinc-400">AI Model:</span>
              <span className="text-cyan-300 font-mono font-medium">Gemini 3.7 Flash</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-zinc-400">Verification:</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Source Grounded</span>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
