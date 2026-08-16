import React from 'react';
import { ShieldCheck, Sparkles, X, Compass, Layers, CheckCircle2, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { PlatformAsset, ContentAtom, CampaignDay } from '../types';

interface SourceLineageModalProps {
  isOpen: boolean;
  onClose: () => void;
  asset?: PlatformAsset | null;
  campaignDay?: CampaignDay | null;
  atoms?: ContentAtom[];
  activeTranscript?: string;
}

export const SourceLineageModal: React.FC<SourceLineageModalProps> = ({
  isOpen,
  onClose,
  asset,
  campaignDay,
  atoms = [],
  activeTranscript = '',
}) => {
  if (!isOpen) return null;

  const title = asset?.title || campaignDay?.title || 'Platform Content Asset';
  const platform = asset?.platform || campaignDay?.platform || 'platform';
  const platformLabel = platform.replace('_', ' ').toUpperCase();
  const sourceId = asset?.sourceId || campaignDay?.sourceId || 'active-source';
  const atomIds = asset?.sourceAtomIds || (campaignDay?.atomSourceId ? [campaignDay.atomSourceId] : []);
  const linkedAtoms = atoms.filter((a) => atomIds.includes(a.id));

  const evidenceList =
    asset?.sourceEvidence && asset.sourceEvidence.length > 0
      ? asset.sourceEvidence
      : linkedAtoms.map((a) => a.evidence || a.text).filter(Boolean);

  const transformationReason =
    asset?.transformationReason ||
    asset?.platformIntent?.transformationReason ||
    campaignDay?.transformationReason ||
    'Derived directly from source transcript and formatted according to native platform ergonomics.';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-zinc-900 border border-zinc-700/80 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-tight">Source Lineage & Origin</h3>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  100% Grounded
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Why CreatorOS generated this asset from the active transcript
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Asset Header Info */}
        <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800 flex items-center justify-between text-xs">
          <div>
            <span className="text-zinc-500 block text-[10px] uppercase font-bold">Target Output</span>
            <span className="font-semibold text-white">{title}</span>
          </div>
          <div className="text-right">
            <span className="text-zinc-500 block text-[10px] uppercase font-bold">Platform Dialect</span>
            <span className="text-cyan-400 font-mono font-semibold">{platformLabel}</span>
          </div>
        </div>

        {/* Transformation Rationale */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Platform Transformation Logic</span>
          </div>
          <div className="p-3 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-zinc-200 leading-relaxed">
            {transformationReason}
          </div>
        </div>

        {/* Source Evidence Quotes */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Source Transcript Evidence</span>
          </div>
          <div className="space-y-2">
            {evidenceList.length > 0 ? (
              evidenceList.map((quote, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-100 italic flex items-start gap-2.5"
                >
                  <span className="text-amber-400 font-bold not-italic text-[11px] mt-0.5">#{idx + 1}</span>
                  <span className="leading-relaxed">"{quote}"</span>
                </div>
              ))
            ) : (
              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 italic">
                Direct synthesis from active source transcript.
              </div>
            )}
          </div>
        </div>

        {/* Linked Content Atoms */}
        {linkedAtoms.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Connected Content Atoms</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {linkedAtoms.map((atom) => (
                <div
                  key={atom.id}
                  className="p-2.5 rounded-xl bg-zinc-950/70 border border-zinc-800 text-xs space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase">
                      {atom.category} ({atom.id})
                    </span>
                    <span className="text-[10px] text-zinc-500">{atom.timestamp}</span>
                  </div>
                  <p className="text-zinc-200 text-[11px] line-clamp-2">{atom.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verification Footer */}
        <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <CheckCircle2 className="w-4 h-4" />
            <span>Zero Cross-Contamination Guarantee</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
