import React, { useState } from 'react';
import { ContentWasteReport, ContentOpportunity, CreatorDNA } from '../types';
import {
  Flame,
  Lightbulb,
  MessageSquare,
  HelpCircle,
  Quote,
  Video,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
  Clock,
  Wand2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContentWasteDetectorProps {
  wasteReport: ContentWasteReport;
  creatorDna: CreatorDNA;
  transcript: string;
  onConvertOpportunity: (opportunity: ContentOpportunity) => void;
  onGenerateAllWaste: () => void;
}

export const ContentWasteDetector: React.FC<ContentWasteDetectorProps> = ({
  wasteReport,
  creatorDna,
  transcript,
  onConvertOpportunity,
  onGenerateAllWaste,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [convertedIds, setConvertedIds] = useState<Set<string>>(new Set());
  const [isGeneratingAll, setIsGeneratingAll] = useState(false);

  const opportunities = wasteReport?.opportunities || [];
  const totalOpportunities = opportunities.length;

  // Real data-driven counts from the opportunities array
  const countByCategory = (cat: string) => opportunities.filter((o) => o.category === cat).length;

  const categories = [
    { id: 'all', label: 'All Opportunities', count: totalOpportunities, icon: Sparkles, color: 'text-cyan-400' },
    { id: 'hook', label: 'Viral Hooks', count: countByCategory('hook'), icon: Flame, color: 'text-amber-400' },
    { id: 'insight', label: 'Untapped Insights', count: countByCategory('insight'), icon: Lightbulb, color: 'text-cyan-400' },
    { id: 'opinion', label: 'Bold Opinions', count: countByCategory('opinion'), icon: MessageSquare, color: 'text-violet-400' },
    { id: 'faq', label: 'High-Value FAQs', count: countByCategory('faq'), icon: HelpCircle, color: 'text-sky-400' },
    { id: 'quote', label: 'Impact Quotes', count: countByCategory('quote'), icon: Quote, color: 'text-emerald-400' },
    { id: 'short_form', label: 'Short-Form Clips', count: countByCategory('short_form'), icon: Video, color: 'text-rose-400' },
  ];

  const filteredOpportunities = opportunities.filter(
    (opp) => activeCategory === 'all' || opp.category === activeCategory
  );

  const handleConvertSingle = (opp: ContentOpportunity) => {
    setConvertedIds((prev) => new Set([...prev, opp.id]));
    onConvertOpportunity(opp);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#6366f1', '#10b981'],
    });
  };

  const handleBatchGenerate = () => {
    setIsGeneratingAll(true);
    setTimeout(() => {
      const allIds = new Set(opportunities.map((o) => o.id));
      setConvertedIds(allIds);
      setIsGeneratingAll(false);
      onGenerateAllWaste();
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#ec4899', '#f59e0b', '#10b981'],
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Signature Banner: Content Waste Report */}
      <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-950/20 via-zinc-900 to-indigo-950/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                Content Waste Detector
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Zero-Waste Pipeline
              </span>
            </div>

            <p className="text-sm font-semibold text-amber-200">
              Your source video contains <span className="text-white font-extrabold underline decoration-amber-400 font-mono">{totalOpportunities} additional content opportunities</span> left unused on the table.
            </p>

            <p className="text-xs text-zinc-400 max-w-xl">
              Most creators discard 90% of their best ideas after a single upload. CreatorOS rescues every single hook, quote, FAQ, and clip candidate directly from the source material.
            </p>
          </div>

          {/* Big Batch Action */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              id="generate-all-waste-btn"
              onClick={handleBatchGenerate}
              disabled={isGeneratingAll || convertedIds.size === opportunities.length || totalOpportunities === 0}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-zinc-950 font-bold text-xs shadow-xl shadow-amber-950/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
            >
              <Zap className="w-4 h-4 fill-zinc-950" />
              <span>{isGeneratingAll ? 'Synthesizing All Drafts...' : `Generate All ${totalOpportunities} Drafts`}</span>
            </button>
          </div>
        </div>

        {/* Category Count Summary Badges */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {categories.slice(1).map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-2.5"
              >
                <Icon className={`w-4 h-4 ${cat.color}`} />
                <div>
                  <div className="text-sm font-extrabold text-white font-mono">{cat.count}</div>
                  <div className="text-[10px] text-zinc-400 font-medium truncate">{cat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 border transition-all ${
                isSelected
                  ? 'bg-amber-500/20 text-amber-200 border-amber-500/40 shadow-sm font-bold'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${cat.color}`} />
              <span>{cat.label}</span>
              <span className="text-[10px] font-mono opacity-80">({cat.count})</span>
            </button>
          );
        })}
      </div>

      {/* Opportunities Grid */}
      {filteredOpportunities.length === 0 ? (
        <div className="glass-panel p-8 text-center rounded-2xl border border-zinc-800 text-zinc-400 text-xs">
          No opportunities found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredOpportunities.map((opp) => {
            const isConverted = convertedIds.has(opp.id);
            return (
              <div
                key={opp.id}
                id={`opp-card-${opp.id}`}
                className={`glass-panel p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isConverted
                    ? 'border-emerald-500/40 bg-emerald-950/10'
                    : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/60'
                }`}
              >
                <div className="space-y-2">
                  {/* Header */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {opp.category.replace('_', ' ')}
                      </span>
                      {opp.timestamp && (
                        <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-500" />
                          <span>{opp.timestamp}</span>
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-amber-400">
                      <TrendingUp className="w-3 h-3" />
                      <span>Potential: {opp.potentialReachScore || 90}%</span>
                    </div>
                  </div>

                  {/* Title & Snippet */}
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {opp.opportunityTitle}
                  </h4>

                  <p className="text-xs text-zinc-300 italic pl-3 border-l-2 border-amber-500/40">
                    "{opp.snippet}"
                  </p>

                  <p className="text-xs text-zinc-400">
                    <strong className="text-zinc-300">Angle:</strong> {opp.angle}
                  </p>
                </div>

                {/* Action Bar */}
                <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-1 text-[10px] text-zinc-400">
                    <span>Formats:</span>
                    {opp.potentialFormats.map((fmt, i) => (
                      <span key={i} className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300">
                        {fmt.replace('_', ' ')}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`convert-opp-btn-${opp.id}`}
                    onClick={() => handleConvertSingle(opp)}
                    disabled={isConverted}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      isConverted
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 cursor-default'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-500/30 hover:border-amber-400 shadow-sm'
                    }`}
                  >
                    {isConverted ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Draft Generated</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-3.5 h-3.5" />
                        <span>Convert to Asset</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
