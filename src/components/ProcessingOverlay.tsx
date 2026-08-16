import React, { useEffect, useState } from 'react';
import { Sparkles, CheckCircle2, Loader2, Brain, Target, Dna, FileText, ShieldCheck } from 'lucide-react';

interface ProcessingOverlayProps {
  isVisible: boolean;
  videoTitle?: string;
}

export const ProcessingOverlay: React.FC<ProcessingOverlayProps> = ({ isVisible, videoTitle }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Understanding content architecture & timestamps', icon: Brain },
    { label: 'Finding content opportunities & atom discovery', icon: Target },
    { label: 'Building Creator DNA & communication profile', icon: Dna },
    { label: 'Preparing 7 platform-native mutations', icon: FileText },
    { label: 'Checking semantic consistency & Hallucination Shield', icon: ShieldCheck },
  ];

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/85 backdrop-blur-md px-4">
      <div className="max-w-md w-full glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-cyan-500/30 text-center relative overflow-hidden">
        {/* Animated Glow Backdrop */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-cyan-500/10">
          <Sparkles className="w-7 h-7 text-cyan-400 animate-pulse" />
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight">
          Compiling Creator Content
        </h3>
        <p className="text-xs text-zinc-400 mt-1 max-w-xs mx-auto truncate">
          {videoTitle || 'Processing source transcript and media...'}
        </p>

        {/* Multi-tier processing step checklist */}
        <div className="mt-6 space-y-3 text-left">
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStep;
            const isCurrent = idx === currentStep;
            const Icon = step.icon;

            return (
              <div
                key={idx}
                className={`flex items-center justify-between p-2.5 rounded-xl border transition-all duration-300 ${
                  isCurrent
                    ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200'
                    : isCompleted
                    ? 'bg-zinc-900/60 border-zinc-800 text-zinc-300'
                    : 'bg-zinc-900/20 border-transparent text-zinc-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isCurrent
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : isCompleted
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-zinc-800 text-zinc-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium">{step.label}</span>
                </div>

                <div>
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-zinc-700 mx-1" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Powered by Gemini 3.7 Flash & Hallucination Shield</span>
        </div>
      </div>
    </div>
  );
};
