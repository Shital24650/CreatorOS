import React, { useState } from 'react';
import { ContentAtom, PlatformAsset, PlatformIntent, PlatformType } from '../types';
import { SourceLineageModal } from './SourceLineageModal';
import {
  Youtube,
  Video,
  Instagram,
  Linkedin,
  Twitter,
  FileText,
  Mail,
  Copy,
  Check,
  Edit3,
  Sparkles,
  ShieldCheck,
  Hash,
  Clock,
  Send,
  Layers,
  Compass,
  TrendingUp,
  Info,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';

interface PlatformMutationsProps {
  assets: PlatformAsset[];
  platformIntents?: PlatformIntent[];
  atoms?: ContentAtom[];
  onUpdateAsset?: (updatedAsset: PlatformAsset) => void;
  onNavigateToIntent?: () => void;
}

const PLATFORMS: { id: PlatformType; label: string; icon: any; color: string; badge: string }[] = [
  { id: 'youtube', label: 'YouTube Long-Form', icon: Youtube, color: 'text-red-400', badge: 'bg-red-500/10 text-red-300 border-red-500/30' },
  { id: 'youtube_shorts', label: 'YT Shorts / Reels', icon: Video, color: 'text-rose-400', badge: 'bg-rose-500/10 text-rose-300 border-rose-500/30' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, color: 'text-sky-400', badge: 'bg-sky-500/10 text-sky-300 border-sky-500/30' },
  { id: 'twitter', label: 'X / Twitter Thread', icon: Twitter, color: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
  { id: 'instagram', label: 'Instagram Carousel', icon: Instagram, color: 'text-pink-400', badge: 'bg-pink-500/10 text-pink-300 border-pink-500/30' },
  { id: 'blog', label: 'Blog Article', icon: FileText, color: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
  { id: 'newsletter', label: 'Newsletter', icon: Mail, color: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
];

export const PlatformMutations: React.FC<PlatformMutationsProps> = ({
  assets,
  platformIntents = [],
  atoms = [],
  onUpdateAsset,
  onNavigateToIntent,
}) => {
  const [activePlatform, setActivePlatform] = useState<PlatformType>('linkedin');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedBody, setEditedBody] = useState('');
  const [showLineageModal, setShowLineageModal] = useState(false);

  const currentAsset = assets.find((a) => a.platform === activePlatform) || assets[0];
  const currentIntent = platformIntents.find((i) => i.platform === activePlatform) || currentAsset?.platformIntent;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveEdit = () => {
    if (!currentAsset) return;
    const updated = { ...currentAsset, body: editedBody };
    onUpdateAsset?.(updated);
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* Source Lineage Modal */}
      <SourceLineageModal
        isOpen={showLineageModal}
        onClose={() => setShowLineageModal(false)}
        asset={currentAsset}
        atoms={atoms}
      />
      {/* Header */}
      <div className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-tight">Platform Mutation Engine</h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-semibold border border-indigo-500/30">
              7 Native Dialects
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            Transforms the same underlying idea into tailored platform formats with unique hooks, formatting, pacing, and CTAs.
          </p>
        </div>

        {currentAsset && (
          <div className="flex items-center gap-3">
            {currentIntent && (
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" />
                {currentIntent.fitScore}% Platform Fit
              </span>
            )}
            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              {currentAsset.consistencyScore}% Grounded
            </span>
          </div>
        )}
      </div>

      {/* Platform Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {PLATFORMS.map((platform) => {
          const Icon = platform.icon;
          const isSelected = activePlatform === platform.id;
          const assetExists = assets.some((a) => a.platform === platform.id);
          const intentForTab = platformIntents.find((i) => i.platform === platform.id);

          return (
            <button
              key={platform.id}
              id={`platform-tab-${platform.id}`}
              onClick={() => {
                setActivePlatform(platform.id);
                setIsEditing(false);
              }}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 border transition-all ${
                isSelected
                  ? 'bg-zinc-800 text-white border-cyan-500/50 shadow-md shadow-cyan-950/40 scale-[1.02]'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <Icon className={`w-4 h-4 ${platform.color}`} />
              <span>{platform.label}</span>
              {intentForTab && (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300">
                  {intentForTab.fitScore}%
                </span>
              )}
              {assetExists && (
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Asset Render Container */}
      {currentAsset ? (
        <div className="bg-zinc-900/70 p-6 rounded-2xl border border-zinc-800 space-y-6">
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-zinc-800 text-zinc-300 border border-zinc-700">
                  {currentAsset.platform.replace('_', ' ')}
                </span>
                {currentIntent?.selectedAngle && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                    <Compass className="w-3 h-3" />
                    Angle: {currentIntent.selectedAngle}
                  </span>
                )}
                {currentAsset.clipTimestamp && (
                  <span className="flex items-center gap-1 font-mono text-[11px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    <span>Clip: {currentAsset.clipTimestamp}</span>
                  </span>
                )}
              </div>
              {currentAsset.title && (
                <h3 className="text-base font-bold text-white tracking-tight pt-1">
                  {currentAsset.title}
                </h3>
              )}
            </div>

            {/* Actions: Lineage, Copy & Edit */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <button
                id="source-lineage-btn"
                onClick={() => setShowLineageModal(true)}
                className="px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                title="View verbatim source grounding & lineage"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>Why did CreatorOS create this?</span>
              </button>

              <button
                id="edit-asset-btn"
                onClick={() => {
                  if (isEditing) {
                    handleSaveEdit();
                  } else {
                    setEditedBody(currentAsset.body);
                    setIsEditing(true);
                  }
                }}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Save Changes' : 'Edit Text'}</span>
              </button>

              <button
                id="copy-asset-btn"
                onClick={() => handleCopy(currentAsset.body, currentAsset.id)}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all"
              >
                {copiedId === currentAsset.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Post</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Platform Intent & Transformation Intelligence Box */}
          {currentIntent && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-zinc-900/60 to-zinc-950/40 border border-indigo-500/20 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  Platform Intent Intelligence:
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  {currentIntent.fitScore}% Fit ({currentIntent.shouldPublish ? 'Recommended' : 'Angle Caution'})
                </span>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {currentIntent.transformationReason}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                <div className="bg-zinc-950/60 rounded p-2 border border-zinc-800/80">
                  <span className="text-zinc-500 font-medium">Platform Purpose: </span>
                  <span className="text-zinc-300">{currentIntent.platformPurpose}</span>
                </div>
                <div className="bg-zinc-950/60 rounded p-2 border border-zinc-800/80">
                  <span className="text-zinc-500 font-medium">Audience Context: </span>
                  <span className="text-zinc-300">{currentIntent.targetAudience}</span>
                </div>
              </div>
            </div>
          )}

          {/* Hook Highlight */}
          {currentAsset.hook && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                Platform Opening Hook Strategy:
              </span>
              <p className="text-xs font-medium text-amber-200">
                "{currentAsset.hook}"
              </p>
            </div>
          )}

          {/* Special view for X / Twitter Thread */}
          {currentAsset.platform === 'twitter' && currentAsset.threadTweets && currentAsset.threadTweets.length > 0 ? (
            <div className="space-y-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                Multi-Tweet Viral Thread ({currentAsset.threadTweets.length} Tweets):
              </span>
              <div className="space-y-2.5">
                {currentAsset.threadTweets.map((tweet, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-colors relative group"
                  >
                    <div className="flex items-center justify-between text-xs text-zinc-500 mb-1.5">
                      <span className="font-mono font-bold text-cyan-400">Tweet {i + 1} of {currentAsset.threadTweets!.length}</span>
                      <button
                        onClick={() => handleCopy(tweet, `tweet-${i}`)}
                        className="text-zinc-400 hover:text-white p-1"
                        title="Copy single tweet"
                      >
                        {copiedId === `tweet-${i}` ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-100 whitespace-pre-wrap leading-relaxed">
                      {tweet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : isEditing ? (
            /* Editable Textarea */
            <div className="space-y-2">
              <textarea
                rows={12}
                value={editedBody}
                onChange={(e) => setEditedBody(e.target.value)}
                className="w-full p-4 rounded-xl bg-zinc-900 border border-cyan-500 text-sm text-zinc-100 font-mono leading-relaxed focus:outline-none"
              />
            </div>
          ) : (
            /* Formatted Body Content */
            <div className="p-5 rounded-xl bg-zinc-900/70 border border-zinc-800/80">
              <div className="prose prose-invert max-w-none text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed font-sans">
                {currentAsset.body}
              </div>
            </div>
          )}

          {/* Blog outline view if platform is blog */}
          {currentAsset.platform === 'blog' && currentAsset.blogOutline && (
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                Structured Section Architecture:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-300">
                {currentAsset.blogOutline.map((section, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-[11px]">{idx + 1}.</span>
                    <span>{section}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA and Tags footer */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            {currentAsset.cta && (
              <div className="flex items-center gap-2">
                <span className="text-zinc-500 font-semibold">CTA:</span>
                <span className="text-zinc-300 font-medium">{currentAsset.cta}</span>
              </div>
            )}

            {currentAsset.hashtags && currentAsset.hashtags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1.5">
                {currentAsset.hashtags.map((tag, i) => (
                  <span key={i} className="text-[11px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/50">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl border border-zinc-800 text-zinc-500 bg-zinc-900/40">
          No platform asset generated yet.
        </div>
      )}
    </div>
  );
};
