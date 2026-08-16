import React, { useState } from 'react';
import {
  Brain,
  Compass,
  Sparkles,
  Layers,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowRight,
  TrendingUp,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  BookOpen,
  Mail,
  Video,
  FileText,
  HelpCircle,
  Zap,
  Target,
  Users,
  ShieldCheck,
  Eye,
  Sliders,
  RefreshCw,
  Info,
} from 'lucide-react';
import { AnalysisResult, PlatformIntent, PlatformType } from '../types';

interface PlatformIntelligenceViewProps {
  analysis: AnalysisResult | null;
  onNavigateToAsset?: (platform: string) => void;
  onSelectNichePreset?: (presetKey: string) => void;
}

const PLATFORM_ICONS: Record<string, React.ElementType> = {
  instagram: Instagram,
  youtube: Youtube,
  youtube_shorts: Video,
  twitter: Twitter,
  linkedin: Linkedin,
  blog: BookOpen,
  newsletter: Mail,
};

const PLATFORM_NAMES: Record<string, string> = {
  instagram: 'Instagram',
  youtube: 'YouTube Long-Form',
  youtube_shorts: 'YouTube Shorts',
  twitter: 'X (Twitter)',
  linkedin: 'LinkedIn',
  blog: 'SEO Blog Article',
  newsletter: 'Email Newsletter',
};

const PLATFORM_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  instagram: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    text: 'text-pink-400',
    badge: 'bg-pink-500/20 text-pink-300 border-pink-500/40',
  },
  youtube: {
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
    text: 'text-red-400',
    badge: 'bg-red-500/20 text-red-300 border-red-500/40',
  },
  youtube_shorts: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    text: 'text-rose-400',
    badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
  },
  twitter: {
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/30',
    text: 'text-sky-400',
    badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
  },
  linkedin: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
  },
  blog: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  },
  newsletter: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
  },
};

export const PlatformIntelligenceView: React.FC<PlatformIntelligenceViewProps> = ({
  analysis,
  onNavigateToAsset,
  onSelectNichePreset,
}) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'high' | 'linkedin'>('all');

  if (!analysis) {
    return (
      <div className="p-8 text-center bg-zinc-900/40 border border-zinc-800 rounded-2xl">
        <Compass className="w-12 h-12 text-zinc-600 mx-auto mb-3 animate-pulse" />
        <h3 className="text-lg font-medium text-zinc-300">No Analysis Available</h3>
        <p className="text-sm text-zinc-500 mt-1">Upload a video or load a demo to inspect the Platform Intent Intelligence Engine.</p>
      </div>
    );
  }

  const niche = analysis.nicheIntelligence || {
    primaryNiche: 'Technology & AI',
    secondaryNiche: 'Digital Media & Systems',
    audience: 'Founders, creators, and operators seeking high-leverage digital workflows',
    creatorType: 'Systems Engineer & Creator',
    contentIntents: [
      { intent: 'Education', confidence: 94 },
      { intent: 'Systems Thinking', confidence: 88 },
      { intent: 'Tactical Execution', confidence: 82 },
    ],
    primaryIntent: 'Education & Systems Optimization',
    nicheSummary: 'High-signal analysis exploring systems architecture and content leverage.',
  };

  const intents: PlatformIntent[] = analysis.platformIntents || [];

  const filteredIntents = intents.filter((intent) => {
    if (filterMode === 'high') return intent.fitScore >= 85;
    if (filterMode === 'linkedin') return intent.platform === 'linkedin';
    return true;
  });

  const avgFit =
    intents.length > 0
      ? Math.round(intents.reduce((acc, i) => acc + i.fitScore, 0) / intents.length)
      : analysis.overallMetrics?.avgPlatformFit || 89;

  return (
    <div className="space-y-8 pb-12">
      {/* Top Architecture Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-950/40 via-zinc-900/60 to-cyan-950/30 border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Brain className="w-48 h-48 text-indigo-400" />
        </div>

        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Platform Intent Intelligence Engine
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Context-Aware Transformation, Not Generic AI Rewriting
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            CreatorOS does not simply translate text between character limits. It evaluates your source topic, detects creator niche and audience intent, and derives a bespoke, platform-native angle for each channel.
          </p>

          {/* 7-Step Pipeline Diagram */}
          <div className="pt-4 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 min-w-max text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 font-medium flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-cyan-400" />
                Source Content
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <div className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-700/60 text-indigo-300 font-medium flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-indigo-400" />
                Niche & Audience
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <div className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-700/60 text-purple-300 font-medium flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-purple-400" />
                Content Intent
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <div className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-700/60 text-cyan-300 font-medium flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-cyan-400" />
                Platform Purpose
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 font-medium flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Native Angle
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <div className="px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-700/60 text-amber-300 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Verified Asset
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Niche & Audience Detection Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Detected Niche & Target Audience</h3>
                <p className="text-xs text-zinc-400">Extracted from semantic structure of source content</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
              {niche.creatorType}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Primary Niche</span>
                {niche.contentCategory && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {niche.contentCategory}
                  </span>
                )}
              </div>
              <p className="text-base font-bold text-cyan-300">{niche.primaryNiche}</p>
              {niche.subNiche && (
                <div className="text-xs text-indigo-300 font-medium">
                  <span className="text-zinc-500">Sub-Niche: </span>{niche.subNiche}
                </div>
              )}
            </div>

            <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Target Audience</span>
                {niche.audienceExperienceLevel && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {niche.audienceExperienceLevel}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-zinc-200 leading-relaxed">{niche.primaryAudience || niche.audience}</p>
            </div>
          </div>

          {(niche.audiencePainPoints?.length || niche.audienceGoals?.length) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {niche.audiencePainPoints && niche.audiencePainPoints.length > 0 && (
                <div className="bg-rose-950/20 border border-rose-500/20 rounded-xl p-3 space-y-1.5">
                  <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block">
                    Key Audience Pain Points
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {niche.audiencePainPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-rose-400 shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {niche.audienceGoals && niche.audienceGoals.length > 0 && (
                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-xl p-3 space-y-1.5">
                  <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Audience Goals & Outcomes
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-300">
                    {niche.audienceGoals.map((goal, gIdx) => (
                      <li key={gIdx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 shrink-0">•</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="bg-zinc-950/40 border border-zinc-800/60 rounded-xl p-4">
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-1.5">
              Semantic Niche Foundation & Thesis
            </span>
            <p className="text-sm text-zinc-300 leading-relaxed">{niche.nicheSummary}</p>
          </div>
        </div>

        {/* Content Intent Confidence Card */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-4">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Content Intent Profile</h3>
                <p className="text-xs text-zinc-400">Multi-label classification</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {niche.contentIntents.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-300 font-medium">{item.intent}</span>
                    <span className="text-cyan-400 font-mono font-semibold">{item.confidence}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.confidence}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
            <span className="text-zinc-400">Overall Platform Fit:</span>
            <span className="px-2.5 py-0.5 rounded-full font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {avgFit}% Average Fit
            </span>
          </div>
        </div>
      </div>

      {/* Special Rule: The LinkedIn Transformation Intelligence Callout */}
      <div className="bg-gradient-to-r from-blue-950/40 via-zinc-900/80 to-indigo-950/40 border border-blue-500/30 rounded-2xl p-6 space-y-3">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
            <Linkedin className="w-5 h-5" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-white text-base">The LinkedIn Platform Intent Rule</h4>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40">
                Zero Corporate Slop Guarantee
              </span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              LinkedIn does <strong className="text-white">NOT</strong> mean making content blandly formal with generic buzzwords. Instead, CreatorOS determines whether the source has a legitimate professional, business, consumer behavior, or operations angle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              <div className="bg-zinc-950/60 border border-blue-500/20 rounded-lg p-3 text-xs">
                <span className="font-semibold text-pink-400 block mb-1">💄 Beauty / Skincare</span>
                <span className="text-zinc-400">Angle: Consumer Education, Brand Trust & Decision Fatigue</span>
              </div>
              <div className="bg-zinc-950/60 border border-blue-500/20 rounded-lg p-3 text-xs">
                <span className="font-semibold text-amber-400 block mb-1">🍕 Culinary / Cooking</span>
                <span className="text-zinc-400">Angle: Process Optimization & Repeatable Quality Control</span>
              </div>
              <div className="bg-zinc-950/60 border border-blue-500/20 rounded-lg p-3 text-xs">
                <span className="font-semibold text-emerald-400 block mb-1">🏋️ Fitness / Health</span>
                <span className="text-zinc-400">Angle: Behavioral Architecture & Habit Formation Systems</span>
              </div>
              <div className="bg-zinc-950/60 border border-blue-500/20 rounded-lg p-3 text-xs">
                <span className="font-semibold text-purple-400 block mb-1">🎮 Gaming / Dev</span>
                <span className="text-zinc-400">Angle: UX Micro-Rewards & Retention Mechanics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-400" />
            7-Channel Platform Intent Transformations
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Bespoke angles calibrated to platform culture, viewer intent, and reach algorithms
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="filter-intent-all"
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterMode === 'all'
                ? 'bg-zinc-700 text-white'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            All Channels ({intents.length})
          </button>
          <button
            id="filter-intent-high"
            onClick={() => setFilterMode('high')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterMode === 'high'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            High Fit (≥85%)
          </button>
          <button
            id="filter-intent-li"
            onClick={() => setFilterMode('linkedin')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filterMode === 'linkedin'
                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            LinkedIn Only
          </button>
        </div>
      </div>

      {/* 7-Channel Platform Intent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredIntents.map((intent) => {
          const Icon = PLATFORM_ICONS[intent.platform] || Layers;
          const colors = PLATFORM_COLORS[intent.platform] || {
            bg: 'bg-zinc-800/40',
            border: 'border-zinc-700',
            text: 'text-zinc-300',
            badge: 'bg-zinc-800 text-zinc-300 border-zinc-700',
          };
          const platformName = PLATFORM_NAMES[intent.platform] || intent.platform;

          const isHighFit = intent.fitScore >= 85;
          const isModerateFit = intent.fitScore >= 60 && intent.fitScore < 85;
          const isLowFit = intent.fitScore < 60;

          return (
            <div
              key={intent.id || intent.platform}
              id={`intent-card-${intent.platform}`}
              className={`bg-zinc-900/70 border ${colors.border} rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all hover:border-zinc-500/50 hover:shadow-xl hover:shadow-black/40`}
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{platformName}</h4>
                      <p className="text-xs text-zinc-400 font-mono">{intent.contentIntent}</p>
                    </div>
                  </div>

                  {/* Fit Score Badge */}
                  <div className="text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                        isHighFit
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                          : isModerateFit
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      }`}
                    >
                      <TrendingUp className="w-3.5 h-3.5" />
                      {intent.fitScore}% Fit
                    </span>
                    <span className="block text-[11px] text-zinc-500 mt-1">
                      {intent.shouldPublish ? '✓ Recommended Channel' : '⚠ Evaluate Angle'}
                    </span>
                  </div>
                </div>

                {/* Selected Native Angle */}
                <div className="bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5 space-y-1">
                  <span className="text-[11px] text-indigo-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Compass className="w-3 h-3" />
                    Platform-Native Angle
                  </span>
                  <p className="text-sm font-semibold text-zinc-100 leading-snug">
                    {intent.selectedAngle || intent.angle}
                  </p>
                </div>

                {/* Transformation Reasoning */}
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-zinc-500" />
                    Why This Content Exists on {platformName}:
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950/40 rounded-lg p-3 border border-zinc-800/60">
                    {intent.transformationReason}
                  </p>
                </div>

                {/* Target Audience & Purpose */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-zinc-950/40 rounded-lg p-2.5 border border-zinc-800/60">
                    <span className="text-zinc-500 font-medium block mb-1">Platform Culture & Purpose</span>
                    <span className="text-zinc-300">{intent.platformPurpose}</span>
                  </div>
                  <div className="bg-zinc-950/40 rounded-lg p-2.5 border border-zinc-800/60">
                    <span className="text-zinc-500 font-medium block mb-1">Target Audience Context</span>
                    <span className="text-zinc-300">{intent.targetAudience}</span>
                  </div>
                </div>

                {/* Pros and Considerations */}
                <div className="space-y-2">
                  <div className="space-y-1">
                    {intent.fitPros?.map((pro, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-emerald-400/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>

                  {intent.fitCons && intent.fitCons.length > 0 && (
                    <div className="space-y-1 pt-1">
                      {intent.fitCons.map((con, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-amber-400/80">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hook Snippet Preview */}
                {intent.coreHookSnippet && (
                  <div className="bg-zinc-950/60 border border-zinc-800 rounded-lg p-3 text-xs">
                    <span className="text-zinc-500 font-medium block mb-1">Platform Opening Hook Preview:</span>
                    <span className="text-zinc-200 italic">"{intent.coreHookSnippet}"</span>
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="text-xs text-zinc-400 font-mono">
                  Format: <span className="text-zinc-200">{intent.nativeFormatRecommended || 'Platform Native'}</span>
                </div>

                {onNavigateToAsset && (
                  <button
                    id={`btn-view-asset-${intent.platform}`}
                    onClick={() => onNavigateToAsset(intent.platform)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors border border-zinc-700"
                  >
                    Inspect Asset
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
