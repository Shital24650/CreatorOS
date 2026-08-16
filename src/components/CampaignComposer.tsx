import React, { useState } from 'react';
import { Campaign, CampaignDay, ContentAtom, CreatorDNA, PlatformType } from '../types';
import { SourceLineageModal } from './SourceLineageModal';
import {
  Calendar,
  Sparkles,
  RefreshCw,
  Copy,
  Check,
  Edit3,
  Youtube,
  Video,
  Linkedin,
  Twitter,
  Instagram,
  FileText,
  Mail,
  Clock,
  CheckCircle2,
  Sliders,
  Share2,
  ShieldCheck,
} from 'lucide-react';
import { regenerateCampaignDay } from '../services/api';

interface CampaignComposerProps {
  campaign: Campaign;
  creatorDna: CreatorDNA;
  transcript: string;
  atoms?: ContentAtom[];
  onUpdateDay: (updatedDay: CampaignDay) => void;
}

const PLATFORM_ICONS: Record<PlatformType, any> = {
  youtube: Youtube,
  youtube_shorts: Video,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  blog: FileText,
  newsletter: Mail,
};

const PLATFORM_COLORS: Record<PlatformType, string> = {
  youtube: 'text-red-400 bg-red-500/10 border-red-500/30',
  youtube_shorts: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
  linkedin: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
  twitter: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  instagram: 'text-pink-400 bg-pink-500/10 border-pink-500/30',
  blog: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  newsletter: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
};

const REGEN_ANGLES = [
  'More Provocative & Contrarian',
  'More Technical & Deep',
  'Shorter & Punchier Hook',
  'Focus on Beginner Clarity',
  'Stronger Community CTA',
];

export const CampaignComposer: React.FC<CampaignComposerProps> = ({
  campaign,
  creatorDna,
  transcript,
  atoms = [],
  onUpdateDay,
}) => {
  const [activeDayNumber, setActiveDayNumber] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedContent, setEditedContent] = useState<string>('');
  const [selectedAngle, setSelectedAngle] = useState<string>(REGEN_ANGLES[0]);
  const [isRegenerating, setIsRegenerating] = useState<boolean>(false);
  const [showLineageModal, setShowLineageModal] = useState<boolean>(false);

  const schedule = campaign.schedule || campaign.days || [];
  const currentDay = schedule.find((d) => d.dayNumber === activeDayNumber) || schedule[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRegenerate = async () => {
    if (!currentDay) return;
    setIsRegenerating(true);
    try {
      const regenerated = await regenerateCampaignDay({
        day: currentDay,
        creatorDna,
        transcript,
        customAngle: selectedAngle,
      });
      onUpdateDay(regenerated);
    } catch (err) {
      console.error(err);
    } finally {
      setIsRegenerating(false);
    }
  };

  const handleSaveEdit = () => {
    if (!currentDay) return;
    const updated = { ...currentDay, content: editedContent };
    onUpdateDay(updated);
    setIsEditing(false);
  };

  const Icon = PLATFORM_ICONS[currentDay?.platform] || Calendar;
  const colorClass = PLATFORM_COLORS[currentDay?.platform] || 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';

  return (
    <div className="space-y-6">
      {/* Source Lineage Modal */}
      <SourceLineageModal
        isOpen={showLineageModal}
        onClose={() => setShowLineageModal(false)}
        campaignDay={currentDay}
        atoms={atoms}
        activeTranscript={transcript}
      />
      {/* Header Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-bold text-white tracking-tight">
              {campaign.title || '7-Day Multi-Channel Content Campaign'}
            </h2>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
              Coordinated Pipeline
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            {campaign.strategySummary || 'Sequenced distribution maximizing viral reach, high-signal retention, and newsletter conversion.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">Schedule:</span>
          <span className="px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700 text-xs font-semibold">
            Mon → Sun Release Wave
          </span>
        </div>
      </div>

      {/* 7-Day Visual Timeline Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
        {schedule.map((day) => {
          const isSelected = activeDayNumber === day.dayNumber;
          const DayIcon = PLATFORM_ICONS[day.platform] || Calendar;
          const dayColor = PLATFORM_COLORS[day.platform];

          return (
            <button
              key={day.id || `day-${day.dayNumber}`}
              id={`campaign-day-${day.dayNumber}`}
              onClick={() => {
                setActiveDayNumber(day.dayNumber);
                setIsEditing(false);
              }}
              className={`p-3 rounded-2xl text-left border transition-all duration-200 relative ${
                isSelected
                  ? 'bg-zinc-800 border-cyan-400 shadow-xl shadow-cyan-950/50 scale-[1.03] z-10'
                  : 'bg-zinc-900/60 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-zinc-200 font-mono">Day {day.dayNumber}</span>
                <span className={`p-1 rounded-lg border ${dayColor}`}>
                  <DayIcon className="w-3 h-3" />
                </span>
              </div>

              <div className="text-xs font-bold text-white line-clamp-1 mb-0.5">
                {day.dayOfWeek || day.dayName || `Day ${day.dayNumber}`}
              </div>

              <div className="text-[11px] text-zinc-400 truncate">
                {day.assetType || 'Post'}
              </div>

              {isSelected && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-cyan-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Day Detail Composer */}
      {currentDay && (
        <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-6">
          {/* Day Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold border flex items-center gap-1.5 ${colorClass}`}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{(currentDay.platform || 'draft').toUpperCase().replace('_', ' ')}</span>
                </span>
                <span className="font-mono text-xs text-zinc-400 font-semibold">
                  {currentDay.dayOfWeek || currentDay.dayName || `Day ${currentDay.dayNumber}`} • {currentDay.assetType || 'Post'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                  {(currentDay.status || 'ready').toUpperCase()}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {currentDay.title}
              </h3>
            </div>

            {/* Action buttons: Lineage, Copy & Edit */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <button
                id="campaign-lineage-btn"
                onClick={() => setShowLineageModal(true)}
                className="px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                title="View verbatim source grounding & lineage"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
                <span>Why did CreatorOS create this?</span>
              </button>

              <button
                id="edit-day-btn"
                onClick={() => {
                  if (isEditing) {
                    handleSaveEdit();
                  } else {
                    setEditedContent(currentDay.content);
                    setIsEditing(true);
                  }
                }}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Save' : 'Edit Text'}</span>
              </button>

              <button
                id="copy-day-btn"
                onClick={() => handleCopy(currentDay.content, currentDay.id)}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md flex items-center gap-1.5 transition-all"
              >
                {copiedId === currentDay.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Day Content</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Hook Showcase */}
          {currentDay.hook && (
            <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                Scheduled Strategic Hook:
              </span>
              <p className="text-xs font-medium text-cyan-200">
                "{currentDay.hook}"
              </p>
            </div>
          )}

          {/* Day Content Area */}
          {isEditing ? (
            <textarea
              rows={12}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full p-4 rounded-xl bg-zinc-900 border border-cyan-500 text-sm text-zinc-100 font-mono leading-relaxed focus:outline-none"
            />
          ) : (
            <div className="p-5 rounded-xl bg-zinc-900/80 border border-zinc-800">
              <div className="text-xs sm:text-sm text-zinc-200 whitespace-pre-wrap leading-relaxed font-sans">
                {currentDay.content}
              </div>
            </div>
          )}

          {/* 1-Click AI Regenerate Day Controls */}
          <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>1-Click AI Regeneration Studio</span>
              </span>
              <span className="text-[11px] text-zinc-500">
                Select an angle to recompile this specific day with Gemini
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {REGEN_ANGLES.map((angle) => (
                <button
                  key={angle}
                  onClick={() => setSelectedAngle(angle)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                    selectedAngle === angle
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                      : 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-zinc-700/60'
                  }`}
                >
                  {angle}
                </button>
              ))}

              <button
                id="regenerate-day-btn"
                onClick={handleRegenerate}
                disabled={isRegenerating}
                className="ml-auto px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 shadow transition-all disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin' : ''}`} />
                <span>{isRegenerating ? 'Refining Day...' : 'Regenerate Day'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
