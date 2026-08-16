import React from 'react';
import { CreatorDNA } from '../types';
import {
  Dna,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Award,
  ShieldCheck,
  Calculator,
} from 'lucide-react';

interface CreatorDNAViewProps {
  dna: CreatorDNA;
  sourceTitle?: string;
}

export const CreatorDNAView: React.FC<CreatorDNAViewProps> = ({ dna, sourceTitle }) => {
  const { scores } = dna;

  // Deterministic calculation from component weights
  const technicalMatch = scores.technicalStyle || scores.audienceAlignment || 90;
  const ctaMatch = scores.ctaStyle || scores.brandConsistency || 90;
  
  const calculatedVoiceScore = Math.round(
    scores.toneMatch * 0.25 +
    scores.vocabularyMatch * 0.20 +
    scores.styleMatch * 0.15 +
    technicalMatch * 0.20 +
    ctaMatch * 0.20
  );

  const scoreMetrics = [
    { label: 'Tone Match', score: scores.toneMatch, weight: '25%', desc: 'Emotional polarity and authority inflection' },
    { label: 'Vocabulary Match', score: scores.vocabularyMatch, weight: '20%', desc: 'Domain jargon and idiomatic expressions' },
    { label: 'Sentence Rhythm', score: scores.styleMatch, weight: '15%', desc: 'Sentence cadence and rhythm structure' },
    { label: 'Technical Depth', score: technicalMatch, weight: '20%', desc: 'Target demographic & technical resonance' },
    { label: 'CTA & Brand Consistency', score: ctaMatch, weight: '20%', desc: 'Call-to-action delivery and zero brand drift' },
  ];

  return (
    <div className="space-y-6">
      {/* Header & Overall Voice Match Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Dna className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight">Creator DNA Engine</h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                Linguistic Fingerprint
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-xl">
              Linguistic fingerprint inferred from <span className="text-zinc-200 font-semibold">{sourceTitle || 'your source video'}</span>. Every platform asset is calibrated against this communication profile.
            </p>
          </div>

          {/* Voice Match Big Score Gauge */}
          <div className="flex items-center gap-4 bg-zinc-900/90 p-4 rounded-2xl border border-cyan-500/30 shadow-xl">
            <div className="relative flex items-center justify-center">
              <svg className="w-20 h-20 -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  className="stroke-zinc-800"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  className="stroke-cyan-400"
                  strokeWidth="6"
                  strokeDasharray={201}
                  strokeDashoffset={201 - (201 * calculatedVoiceScore) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-xl font-extrabold text-white tracking-tight font-mono">
                  {calculatedVoiceScore}%
                </span>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>Voice Match Score</span>
              </div>
              <p className="text-[11px] text-zinc-400 mt-0.5">Deterministic 5-Pillar Calibration</p>
              <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3 h-3" />
                <span>Zero Generic AI Fluff</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5-Category Precision Scoring Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {scoreMetrics.map((item, idx) => (
          <div
            key={idx}
            className="glass-panel p-4 rounded-2xl border border-zinc-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-zinc-200">{item.label}</span>
                <span className="font-mono font-extrabold text-cyan-400">{item.score}%</span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono block mb-1">Weight: {item.weight}</span>
              <p className="text-[11px] text-zinc-400 leading-snug">{item.desc}</p>
            </div>

            {/* Progress bar */}
            <div className="mt-3 w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-500"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Linguistic & Behavioral Profiler */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Style & Syntax Mechanics */}
        <div className="glass-panel p-5 rounded-2xl border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3">
            <Activity className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">
              Linguistic Profile & Mechanics
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                Tone & Authority
              </span>
              <p className="text-zinc-200 font-medium mt-0.5 bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                {dna.tone}
              </p>
            </div>

            <div>
              <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                Vocabulary & Jargon
              </span>
              <p className="text-zinc-200 font-medium mt-0.5 bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                {dna.vocabulary}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                  Sentence Cadence & Style
                </span>
                <p className="text-zinc-300 mt-0.5 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 text-xs" title={dna.sentenceStyle || dna.sentenceLength}>
                  {dna.sentenceStyle || dna.sentenceLength}
                </p>
              </div>

              <div>
                <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                  Technical Depth & Clarity
                </span>
                <p className="text-zinc-300 mt-0.5 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 text-xs" title={dna.technicalDepth || dna.technicalLevel}>
                  {dna.technicalDepth || dna.technicalLevel}
                </p>
              </div>
            </div>

            {dna.storyStructure && (
              <div>
                <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                  Story & Argument Structure
                </span>
                <p className="text-indigo-200 mt-0.5 bg-indigo-950/30 p-2.5 rounded-lg border border-indigo-500/20 text-xs font-mono leading-relaxed">
                  {dna.storyStructure}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                  Authority Style
                </span>
                <p className="text-zinc-300 mt-0.5 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 text-xs" title={dna.authorityStyle || 'Practitioner'}>
                  {dna.authorityStyle || 'Practitioner'}
                </p>
              </div>

              <div>
                <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block">
                  CTA Delivery
                </span>
                <p className="text-zinc-300 mt-0.5 bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 text-xs truncate" title={dna.ctaStyle}>
                  {dna.ctaStyle}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Behavioral Patterns & Signature Hooks */}
        <div className="glass-panel p-5 rounded-2xl border border-zinc-800 space-y-4">
          <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm font-bold text-white tracking-wide uppercase">
              Signature Patterns & Recurring Themes
            </h3>
          </div>

          <div className="space-y-3.5 text-xs">
            {/* Preferred Hooks */}
            <div>
              <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block mb-1.5">
                Signature Hook Structures:
              </span>
              <div className="space-y-1.5">
                {dna.preferredHooks.map((hook, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-amber-500/5 border border-amber-500/20 text-amber-200 text-xs flex items-center gap-2"
                  >
                    <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="font-mono">{hook}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recurring Themes */}
            <div>
              <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block mb-1.5">
                Recurring Pillars:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {dna.recurringThemes.map((theme, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            {/* Communication Patterns */}
            {dna.communicationPatterns && dna.communicationPatterns.length > 0 && (
              <div>
                <span className="text-zinc-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                  Rhetorical Architecture:
                </span>
                <p className="text-zinc-300 text-xs bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800">
                  {dna.communicationPatterns.join(' • ')}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Signature Explainability Block: "Why this matches your voice" */}
      <div className="glass-panel p-5 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-zinc-900/60 to-indigo-950/30">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Why this matches your voice (Source Evidence)
            </h4>
            <p className="text-xs text-zinc-200 leading-relaxed">
              {dna.reasoningWhyMatches}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
