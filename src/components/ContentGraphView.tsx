import React, { useState } from 'react';
import { ContentGraphNode, ContentAtom, PlatformAsset, PlatformIntent } from '../types';
import { SourceLineageModal } from './SourceLineageModal';
import {
  Network,
  Video,
  Target,
  Lightbulb,
  Layers,
  Sparkles,
  ArrowDown,
  CheckCircle2,
  Filter,
  Eye,
  ExternalLink,
  Compass,
  Brain,
  TrendingUp,
} from 'lucide-react';

interface ContentGraphViewProps {
  nodes: ContentGraphNode[];
  atoms: ContentAtom[];
  assets: PlatformAsset[];
  platformIntents?: PlatformIntent[];
  onSelectAsset?: (assetId: string) => void;
}

export const ContentGraphView: React.FC<ContentGraphViewProps> = ({
  nodes,
  atoms,
  assets,
  platformIntents = [],
  onSelectAsset,
}) => {
  const [selectedAtomId, setSelectedAtomId] = useState<string | null>(null);
  const [inspectingAsset, setInspectingAsset] = useState<PlatformAsset | null>(null);

  // Group into logical hierarchical tiers
  const sourceNode = nodes.find((n) => n.type === 'source') || {
    id: 'source-1',
    label: 'Source Video (04:12)',
    type: 'source' as const,
    details: 'Uploaded Creator Material',
  };

  const selectedAtom = atoms.find((a) => a.id === selectedAtomId);
  const filteredAssets = selectedAtomId
    ? assets.filter((a) => a.sourceAtomId === selectedAtomId || a.sourceAtomIds?.includes(selectedAtomId))
    : assets;

  return (
    <div className="space-y-6">
      {/* Lineage Modal */}
      <SourceLineageModal
        isOpen={Boolean(inspectingAsset)}
        onClose={() => setInspectingAsset(null)}
        asset={inspectingAsset}
        atoms={atoms}
      />
      {/* Graph Header */}
      <div className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Network className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">Internal Content Lineage Graph</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
              Deterministic Lineage
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            Source Video → Content Atoms → Platform Intent Intelligence → Native Angles → 7-Day Campaign.
          </p>
        </div>

        {selectedAtomId && (
          <button
            onClick={() => setSelectedAtomId(null)}
            className="px-3 py-1.5 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
          >
            Reset Filter (Show All Lineages)
          </button>
        )}
      </div>

      {/* Visual Hierarchical Node Canvas */}
      <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 space-y-8 relative overflow-hidden">
        {/* Tier 1: Root Source Video */}
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-950 via-zinc-900 to-indigo-950 border-2 border-cyan-500/60 shadow-lg shadow-cyan-950/60 max-w-md w-full">
            <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Video className="w-4 h-4" />
              <span>Root Source Node</span>
            </div>
            <div className="text-sm font-extrabold text-white tracking-tight">
              {sourceNode.label}
            </div>
            <div className="text-[11px] text-zinc-400 mt-0.5 font-mono">
              {sourceNode.details}
            </div>
          </div>

          <div className="w-0.5 h-6 bg-gradient-to-b from-cyan-500 to-zinc-700 my-1" />
        </div>

        {/* Tier 2: Content Atoms (Interactive) */}
        <div className="relative z-10">
          <div className="text-center mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
              Tier 2: Extracted Content Atoms ({atoms.length} Core Units)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {atoms.map((atom) => {
              const isSelected = selectedAtomId === atom.id;
              return (
                <button
                  key={atom.id}
                  id={`graph-atom-node-${atom.id}`}
                  onClick={() => setSelectedAtomId(isSelected ? null : atom.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-900/40 scale-[1.02]'
                      : 'bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 text-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono font-bold text-cyan-400">{atom.timestamp}</span>
                    <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                      {atom.category}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-zinc-200 line-clamp-2 leading-snug">
                    "{atom.text}"
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400">
                    <span>Score: {atom.importanceScore}%</span>
                    <span className="text-cyan-400 font-semibold">
                      {isSelected ? 'Filtering Assets ↓' : 'Click to trace →'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-zinc-700" />
        </div>

        {/* Tier 2.5: Platform Intent Transformation Layer */}
        {platformIntents.length > 0 && (
          <div className="relative z-10">
            <div className="text-center mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
                Tier 2.5: Platform Intent Intelligence Filters ({platformIntents.length} Channels)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {platformIntents.slice(0, 4).map((intent) => (
                <div
                  key={intent.id || intent.platform}
                  className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-300 uppercase text-[10px]">
                      {intent.platform.replace('_', ' ')}
                    </span>
                    <span className="font-mono text-emerald-400 text-[10px] font-bold">
                      {intent.fitScore}% Fit
                    </span>
                  </div>
                  <p className="text-zinc-300 text-[11px] font-medium line-clamp-2">
                    Angle: {intent.selectedAngle || intent.angle}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <div className="w-0.5 h-6 bg-zinc-700" />
            </div>
          </div>
        )}

        {/* Tier 3: Platform Adaptations & Derived Assets */}
        <div className="relative z-10">
          <div className="text-center mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
              Tier 3: Generated Platform Adaptations ({filteredAssets.length} Connected Outputs)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                onClick={() => setInspectingAsset(asset)}
                className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/50 hover:bg-zinc-900 flex flex-col justify-between cursor-pointer transition-all hover:scale-[1.01]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2 py-0.5 rounded uppercase font-bold text-[10px] bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      {asset.platform.replace('_', ' ')}
                    </span>
                    <span className="text-emerald-400 font-mono text-[11px] font-bold">
                      {asset.consistencyScore}% Grounded
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white line-clamp-1 mb-1">
                    {asset.title || asset.hook || 'Platform Output'}
                  </h4>

                  <p className="text-[11px] text-zinc-400 line-clamp-3 leading-relaxed">
                    {asset.body}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500">Source: {asset.sourceAtomId}</span>
                  <span className="text-cyan-400 font-medium flex items-center gap-1 hover:underline">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Inspect Lineage →</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
