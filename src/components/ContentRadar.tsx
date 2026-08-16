import React, { useState } from 'react';
import { ContentAtom, AtomCategory, PlatformType } from '../types';
import {
  Flame,
  Lightbulb,
  BookOpen,
  Zap,
  HelpCircle,
  Quote,
  MessageSquare,
  Sparkles,
  Clock,
  ArrowRight,
  Filter,
  CheckCircle2,
  Share2,
} from 'lucide-react';

interface ContentRadarProps {
  atoms: ContentAtom[];
  onSelectAtom?: (atomId: string) => void;
  onGenerateAssetForAtom?: (atom: ContentAtom) => void;
}

const CATEGORY_CONFIG: Record<
  AtomCategory,
  { label: string; icon: any; color: string; badge: string }
> = {
  hook: { label: 'Viral Hook', icon: Flame, color: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
  insight: { label: 'Strategic Insight', icon: Lightbulb, color: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
  educational: { label: 'Educational', icon: BookOpen, color: 'text-indigo-400', badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' },
  surprising: { label: 'Surprising Moment', icon: Zap, color: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30' },
  opinion: { label: 'Bold Opinion', icon: MessageSquare, color: 'text-violet-400', badge: 'bg-violet-500/10 text-violet-300 border-violet-500/30' },
  question: { label: 'Reframing Question', icon: HelpCircle, color: 'text-sky-400', badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30' },
  story: { label: 'Anecdote / Story', icon: Sparkles, color: 'text-purple-400', badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
  quote: { label: 'Strong Quote', icon: Quote, color: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  cta: { label: 'High-Impact CTA', icon: ArrowRight, color: 'text-yellow-400', badge: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30' },
  tutorial: { label: 'Framework / Tutorial', icon: BookOpen, color: 'text-teal-400', badge: 'bg-teal-500/10 text-teal-300 border-teal-500/30' },
};

const PLATFORM_LABELS: Record<PlatformType, string> = {
  youtube: 'YouTube Longform',
  youtube_shorts: 'YouTube Shorts',
  instagram: 'Instagram Reel',
  linkedin: 'LinkedIn Post',
  twitter: 'X / Twitter Thread',
  blog: 'Blog Article',
  newsletter: 'Newsletter Issue',
};

export const ContentRadar: React.FC<ContentRadarProps> = ({ atoms, onSelectAtom, onGenerateAssetForAtom }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAtomId, setExpandedAtomId] = useState<string | null>(atoms[0]?.id || null);

  const categories = Array.from(new Set(atoms.map((a) => a.category))) as AtomCategory[];

  const filteredAtoms = atoms.filter((atom) => {
    const matchesCategory = selectedCategory === 'all' || atom.category === selectedCategory;
    const matchesSearch =
      atom.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      atom.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      atom.timestamp.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header & Radar Concept Explanation */}
      <div className="glass-panel p-5 rounded-2xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h2 className="text-lg font-bold text-white tracking-tight">Content Radar</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
              {atoms.length} High-Signal Moments Discovered
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            Timeline extraction identifying viral hooks, core thesis insights, quotes, and short-form clip candidates.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search moments, quotes, timestamps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Visual Scrubbable Timeline Track */}
      <div className="glass-panel p-4 rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="flex items-center justify-between text-xs text-zinc-400 mb-3 px-1">
          <span className="font-semibold uppercase tracking-wider text-[10px] text-zinc-400">
            Video Timeline Radar
          </span>
          <span className="text-zinc-400">Click any marker to inspect moment</span>
        </div>

        {/* Timeline Bar with Interactive Nodes */}
        <div className="relative py-4 px-2">
          {/* Track Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 bg-gradient-to-r from-cyan-900 via-indigo-900 to-zinc-800 rounded-full" />

          {/* Node Markers */}
          <div className="relative flex justify-between items-center z-10">
            {atoms.map((atom) => {
              const isSelected = expandedAtomId === atom.id;
              const config = CATEGORY_CONFIG[atom.category] || CATEGORY_CONFIG.insight;
              const Icon = config.icon;

              return (
                <button
                  key={atom.id}
                  id={`timeline-marker-${atom.id}`}
                  onClick={() => {
                    setExpandedAtomId(atom.id);
                    onSelectAtom?.(atom.id);
                  }}
                  className={`group relative flex flex-col items-center focus:outline-none transition-transform ${
                    isSelected ? 'scale-125' : 'hover:scale-110'
                  }`}
                  title={`${config.label} @ ${atom.timestamp}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border shadow-md transition-all ${
                      isSelected
                        ? 'bg-cyan-500 border-white text-zinc-950 shadow-cyan-500/50'
                        : 'bg-zinc-900 border-zinc-700 text-zinc-300 group-hover:border-cyan-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span
                    className={`mt-1.5 text-[10px] font-mono whitespace-nowrap px-1 rounded ${
                      isSelected ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-zinc-400'
                    }`}
                  >
                    {atom.timestamp}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
            selectedCategory === 'all'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
          }`}
        >
          All Moments ({atoms.length})
        </button>

        {categories.map((cat) => {
          const config = CATEGORY_CONFIG[cat] || CATEGORY_CONFIG.insight;
          const count = atoms.filter((a) => a.category === cat).length;
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                isSelected
                  ? `${config.badge} font-bold`
                  : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              <span>{config.label}</span>
              <span className="text-[10px] opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Extracted Atoms Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAtoms.map((atom) => {
          const config = CATEGORY_CONFIG[atom.category] || CATEGORY_CONFIG.insight;
          const Icon = config.icon;
          const isExpanded = expandedAtomId === atom.id;

          return (
            <div
              key={atom.id}
              id={`atom-card-${atom.id}`}
              onClick={() => {
                setExpandedAtomId(isExpanded ? null : atom.id);
                onSelectAtom?.(atom.id);
              }}
              className={`glass-panel p-5 rounded-2xl border transition-all cursor-pointer ${
                isExpanded
                  ? 'border-cyan-500/50 bg-zinc-900/90 shadow-xl shadow-cyan-950/40'
                  : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/40'
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold border flex items-center gap-1.5 ${config.badge}`}>
                    <Icon className="w-3.5 h-3.5" />
                    <span>{config.label}</span>
                  </span>

                  <span className="flex items-center gap-1 font-mono text-xs text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    <span>{atom.timestamp}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-zinc-500 text-[11px]">Signal:</span>
                    <span className="font-bold text-cyan-400 font-mono">{atom.importanceScore}%</span>
                  </div>
                </div>
              </div>

              {/* Verbatim / Extracted Text */}
              <blockquote className="text-sm text-zinc-100 font-medium leading-relaxed pl-3 border-l-2 border-cyan-500/40 my-2">
                "{atom.text}"
              </blockquote>

              {/* Reason / Why it matters */}
              <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                <span className="text-zinc-300 font-semibold">Strategic Value: </span>
                {atom.reason}
              </p>

              {/* Expanded details: Suggested Platform & Derived Ideas */}
              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-zinc-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-medium">Recommended Platform:</span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
                      {PLATFORM_LABELS[atom.suggestedPlatform] || atom.suggestedPlatform}
                    </span>
                  </div>

                  {atom.derivedIdeas && atom.derivedIdeas.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                        Derived Content Angles:
                      </span>
                      <ul className="space-y-1 text-xs text-zinc-300">
                        {atom.derivedIdeas.map((idea, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 mt-0.5">•</span>
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {atom.isUsedInCampaign && (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Synthesized into Active 7-Day Campaign</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
