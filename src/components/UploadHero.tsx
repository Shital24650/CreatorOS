import React, { useState, useRef } from 'react';
import {
  Upload,
  FileText,
  Sparkles,
  Check,
  Clock,
  ArrowRight,
  Zap,
  Play,
  Clipboard,
  ClipboardCheck,
  X,
  Type,
  AlertCircle
} from 'lucide-react';
import {
  DEMO_TRAVEL_TRANSCRIPT,
  DEMO_SKINCARE_TRANSCRIPT,
  DEMO_TECH_TRANSCRIPT,
  DEMO_COOKING_TRANSCRIPT,
  DEMO_FITNESS_TRANSCRIPT,
  DEMO_GAMING_TRANSCRIPT,
} from '../demoData';

interface UploadHeroProps {
  onAnalyze: (data: { title: string; transcript: string; duration: string; sourceType: 'video' | 'audio' | 'transcript' | 'text' }) => void;
  onLoadDemo: () => void;
  isLoading: boolean;
}

const PRESET_SAMPLES = [
  {
    id: 'travel-demo',
    niche: 'Travel / Budget Travel',
    icon: '✈️',
    label: 'How to Plan a Budget Trip Without Sacrificing Experience',
    duration: '03:30',
    type: 'transcript' as const,
    transcript: DEMO_TRAVEL_TRANSCRIPT,
    angleSnippet: 'LinkedIn: Systems Optimization & Whole-Experience Planning',
  },
  {
    id: 'skincare-demo',
    niche: 'Beauty & Skincare',
    icon: '💄',
    label: '5 Skincare Mistakes Ruining Your Barrier',
    duration: '03:45',
    type: 'video' as const,
    transcript: DEMO_SKINCARE_TRANSCRIPT,
    angleSnippet: 'LinkedIn: Consumer Education & Brand Trust in Saturated Markets',
  },
  {
    id: 'ai-startup',
    niche: 'Tech & AI',
    icon: '🤖',
    label: 'Why 90% of AI Startups Will Die by 2026',
    duration: '04:12',
    type: 'video' as const,
    transcript: DEMO_TECH_TRANSCRIPT,
    angleSnippet: 'LinkedIn: Context Curation vs Model Size Moats',
  },
  {
    id: 'cooking-demo',
    niche: 'Culinary & Cooking',
    icon: '🍕',
    label: 'How I Make the Perfect Homemade Pizza',
    duration: '03:15',
    type: 'video' as const,
    transcript: DEMO_COOKING_TRANSCRIPT,
    angleSnippet: 'LinkedIn: Process Optimization & Repeatable Systems',
  },
  {
    id: 'fitness-demo',
    niche: 'Fitness & Health',
    icon: '🏋️',
    label: 'How I Stay Consistent with Workouts',
    duration: '03:30',
    type: 'video' as const,
    transcript: DEMO_FITNESS_TRANSCRIPT,
    angleSnippet: 'LinkedIn: Habit Architecture & Friction Reduction',
  },
  {
    id: 'gaming-demo',
    niche: 'Gaming & Dev',
    icon: '🎮',
    label: 'Why This Game Keeps Players Coming Back',
    duration: '03:20',
    type: 'video' as const,
    transcript: DEMO_GAMING_TRANSCRIPT,
    angleSnippet: 'LinkedIn: UX Micro-Rewards & Product Retention',
  },
];

export const UploadHero: React.FC<UploadHeroProps> = ({ onAnalyze, onLoadDemo, isLoading }) => {
  const [title, setTitle] = useState('');
  const [transcript, setTranscript] = useState('');
  const [duration, setDuration] = useState('03:45');
  const [sourceType, setSourceType] = useState<'video' | 'audio' | 'transcript' | 'text'>('video');
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Paste feedback state indicators
  const [pastedField, setPastedField] = useState<'title' | 'duration' | 'transcript' | null>(null);
  const [pasteNotice, setPasteNotice] = useState<string | null>(null);

  const titleInputRef = useRef<HTMLInputElement>(null);
  const durationInputRef = useRef<HTMLInputElement>(null);
  const transcriptTextareaRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = transcript.trim() ? transcript.trim().split(/\s+/).length : 0;

  const showTemporaryNotice = (msg: string) => {
    setPasteNotice(msg);
    setTimeout(() => {
      setPasteNotice(null);
    }, 4000);
  };

  // Dedicated paste handler with clipboard API and graceful fallback
  const handlePasteToField = async (field: 'title' | 'duration' | 'transcript') => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text && text.trim()) {
          if (field === 'title') {
            setTitle(text.trim());
            setPastedField('title');
            showTemporaryNotice('✓ Title successfully pasted from clipboard!');
          } else if (field === 'duration') {
            setDuration(text.trim());
            setPastedField('duration');
            showTemporaryNotice('✓ Duration successfully pasted from clipboard!');
          } else if (field === 'transcript') {
            setTranscript(text);
            setPastedField('transcript');
            const words = text.trim().split(/\s+/).length;
            showTemporaryNotice(`✓ Transcript successfully pasted from clipboard (${words} words)!`);
          }
          setTimeout(() => setPastedField(null), 2500);
          return;
        }
      }
      throw new Error('Empty or blocked clipboard');
    } catch (err) {
      // Fallback: focus the input element and show helpful shortcut message
      if (field === 'title') {
        titleInputRef.current?.focus();
        showTemporaryNotice('📋 Please press Ctrl+V (or ⌘+V) to paste your title.');
      } else if (field === 'duration') {
        durationInputRef.current?.focus();
        showTemporaryNotice('📋 Please press Ctrl+V (or ⌘+V) to paste your duration.');
      } else if (field === 'transcript') {
        transcriptTextareaRef.current?.focus();
        showTemporaryNotice('📋 Please press Ctrl+V (or ⌘+V) to paste your transcript.');
      }
    }
  };

  const handleSelectPreset = (preset: typeof PRESET_SAMPLES[0]) => {
    setActivePreset(preset.id);
    setTitle(preset.label);
    setTranscript(preset.transcript);
    setDuration(preset.duration);
    setSourceType(preset.type);
    showTemporaryNotice(`Loaded "${preset.label}" preset (${preset.niche})`);
  };

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setTranscript(text);
      if (!title) {
        setTitle(file.name.replace(/\.[^/.]+$/, ''));
      }
      showTemporaryNotice(`✓ File "${file.name}" loaded successfully!`);
    };
    reader.readAsText(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transcript.trim()) {
      showTemporaryNotice('⚠️ Please paste or enter a transcript to analyze.');
      transcriptTextareaRef.current?.focus();
      return;
    }

    onAnalyze({
      title: title.trim() || 'Untitled Video Analysis',
      transcript: transcript.trim(),
      duration: duration || '03:30',
      sourceType,
    });
  };

  return (
    <div className="py-6 sm:py-10 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Hero Headline */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Platform Intent Intelligence Engine</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Turn One Piece of Content Into a{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
            Complete Content Campaign
          </span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
          Understand niche & audience. Derive platform-native angles. Preserve creator voice. Verify factual claims. Zero generic AI slop.
        </p>

        {/* Value Pipeline Visual Formula */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] font-mono text-zinc-400">
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-cyan-300">1 SOURCE</span>
          <span>→</span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-indigo-300">NICHE & AUDIENCE</span>
          <span>→</span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-purple-300">PLATFORM INTENT</span>
          <span>→</span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-amber-300">NATIVE ANGLE</span>
          <span>→</span>
          <span className="px-2 py-0.5 rounded bg-zinc-900 border border-emerald-500/30 text-emerald-300 font-bold">CAMPAIGN</span>
        </div>
      </div>

      {/* Dynamic Toast / Notice Bar */}
      {pasteNotice && (
        <div className="mt-6 max-w-xl mx-auto p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-200 text-xs font-medium flex items-center justify-between shadow-lg shadow-cyan-950/50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{pasteNotice}</span>
          </div>
          <button
            type="button"
            onClick={() => setPasteNotice(null)}
            className="p-1 hover:bg-cyan-900/50 rounded text-cyan-300"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Preset Multi-Niche Starters */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Test Niche-to-Platform Presets</span>
          </label>
          <span className="text-[11px] text-zinc-500">Select any niche to populate</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PRESET_SAMPLES.map((preset) => {
            const isSelected = activePreset === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                id={`preset-${preset.id}`}
                onClick={() => handleSelectPreset(preset)}
                className={`p-3 rounded-xl text-left border transition-all duration-200 ${
                  isSelected
                    ? 'bg-cyan-950/40 border-cyan-500/50 shadow-md shadow-cyan-950/50 text-cyan-100'
                    : 'bg-zinc-900/60 border-zinc-800/90 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-semibold truncate flex items-center gap-1.5">
                    <span>{preset.icon}</span>
                    <span className="text-zinc-200">{preset.niche}</span>
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 ml-1" />}
                </div>
                <p className="text-xs text-zinc-300 font-medium truncate mb-1.5">{preset.label}</p>
                <p className="text-[10px] text-indigo-400 truncate mb-1">🎯 {preset.angleSnippet}</p>
                <div className="flex items-center gap-2 text-[11px] text-zinc-500">
                  <Clock className="w-3 h-3" />
                  <span>{preset.duration}</span>
                  <span>•</span>
                  <span>{preset.transcript.split(/\s+/).length} words</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Intake Form */}
      <form onSubmit={handleSubmit} className="mt-6 bg-zinc-900/70 rounded-2xl p-6 border border-zinc-800 shadow-xl relative">
        <div className="space-y-4">
          {/* Title & Duration Bar with Dedicated Paste Options */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {/* Title Field + Paste Button */}
            <div className="sm:col-span-3 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="content-title" className="font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Content Title / Video Topic</span>
                </label>
                <div className="flex items-center gap-1.5">
                  {title && (
                    <button
                      type="button"
                      onClick={() => setTitle('')}
                      className="text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      Clear
                    </button>
                  )}
                  <button
                    type="button"
                    id="paste-title-btn"
                    onClick={() => handlePasteToField('title')}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-cyan-300 hover:text-cyan-200 text-[11px] font-medium transition-colors cursor-pointer"
                    title="Paste title from clipboard"
                  >
                    {pastedField === 'title' ? (
                      <>
                        <ClipboardCheck className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Pasted!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard className="w-3 h-3" />
                        <span>Paste Title</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="relative">
                <input
                  ref={titleInputRef}
                  id="content-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., 5 Skincare Mistakes Ruining Your Barrier (or click 'Paste Title')"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            {/* Duration / Time Field + Paste Button */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label htmlFor="content-duration" className="font-semibold text-zinc-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Est. Time</span>
                </label>
                <button
                  type="button"
                  id="paste-duration-btn"
                  onClick={() => handlePasteToField('duration')}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-amber-300 hover:text-amber-200 text-[11px] font-medium transition-colors cursor-pointer"
                  title="Paste time from clipboard"
                >
                  {pastedField === 'duration' ? (
                    <>
                      <ClipboardCheck className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Pasted!</span>
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-3 h-3" />
                      <span>Paste</span>
                    </>
                  )}
                </button>
              </div>

              <div className="relative">
                <input
                  ref={durationInputRef}
                  id="content-duration"
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="03:45"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Quick Time Selector Chips */}
              <div className="flex items-center gap-1 pt-0.5">
                {['03:30', '05:00', '10:00'].map((timePreset) => (
                  <button
                    key={timePreset}
                    type="button"
                    onClick={() => setDuration(timePreset)}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 border border-zinc-700/50"
                  >
                    {timePreset}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Transcript / Content Area with High-Visibility "Paste Here" Toolbar */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
              <label htmlFor="content-transcript" className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Transcript / Source Text</span>
                <span className="text-[11px] text-zinc-500 font-normal">(With or without timestamps)</span>
              </label>

              {/* Quick Actions Header for Transcript */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-400 font-mono text-[11px]">
                  {wordCount} words {wordCount > 0 ? `(~${Math.ceil(wordCount / 130)} min read)` : ''}
                </span>

                {transcript && (
                  <button
                    type="button"
                    onClick={() => setTranscript('')}
                    className="text-[11px] text-zinc-500 hover:text-rose-400 transition-colors px-1.5 py-0.5 rounded hover:bg-zinc-800"
                  >
                    Clear Box
                  </button>
                )}

                {/* Prominent Paste Transcript Button */}
                <button
                  type="button"
                  id="paste-transcript-btn"
                  onClick={() => handlePasteToField('transcript')}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-500/50 text-cyan-300 hover:text-cyan-100 text-xs font-bold transition-all shadow-sm cursor-pointer"
                  title="Click to paste transcript from clipboard"
                >
                  {pastedField === 'transcript' ? (
                    <>
                      <ClipboardCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Pasted from Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Clipboard className="w-3.5 h-3.5" />
                      <span>📋 Paste Transcript Here</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Textarea Container with Drag-and-Drop + Upload File */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                if (e.dataTransfer.files?.[0]) {
                  handleFileUpload(e.dataTransfer.files[0]);
                }
              }}
              className={`relative rounded-xl border transition-all ${
                isDragOver
                  ? 'border-cyan-400 bg-cyan-950/30'
                  : 'border-zinc-700/80 bg-zinc-900/90'
              }`}
            >
              <textarea
                ref={transcriptTextareaRef}
                id="content-transcript"
                rows={8}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                placeholder="Paste video transcript, podcast audio notes, script, or drag and drop a .txt / .vtt / .srt file here...

Tip: You can use the '📋 Paste Transcript Here' button above or press Ctrl+V (⌘+V)."
                className="w-full p-4 bg-transparent text-zinc-100 placeholder:text-zinc-500 text-sm focus:outline-none resize-y font-mono leading-relaxed"
                required
              />

              {/* Bottom bar inside textarea with Upload File & Quick Paste shortcut */}
              <div className="p-2.5 bg-zinc-950/60 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                  <span className="inline-flex items-center gap-1 text-zinc-500">
                    <span>Shortcut:</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-[10px]">Ctrl+V</kbd>
                    <span>/</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-[10px]">⌘+V</kbd>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <label
                    htmlFor="file-upload-input"
                    className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-600/60 text-zinc-300 text-xs font-medium cursor-pointer flex items-center gap-1.5 transition-colors"
                  >
                    <Upload className="w-3 h-3" />
                    <span>Upload .txt/.srt/.vtt</span>
                    <input
                      id="file-upload-input"
                      type="file"
                      accept=".txt,.vtt,.srt,.md"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          handleFileUpload(e.target.files[0]);
                        }
                      }}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Full-Stack Gemini 3.7 Flash Analysis</span>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                id="hero-instant-demo-btn"
                onClick={onLoadDemo}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-600/80 transition-colors flex items-center justify-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 text-amber-400" />
                <span>Default Showcase</span>
              </button>

              <button
                type="submit"
                id="hero-compile-content-btn"
                disabled={isLoading || !transcript.trim()}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-cyan-900/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isLoading ? 'Compiling Engine...' : 'Compile Content Engine'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

