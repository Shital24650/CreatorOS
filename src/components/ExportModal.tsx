import React, { useState } from 'react';
import { AnalysisResult } from '../types';
import { X, Download, Copy, Check, FileText, Code, CheckCircle2 } from 'lucide-react';

interface ExportModalProps {
  analysis: AnalysisResult | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ analysis, isOpen, onClose }) => {
  const [format, setFormat] = useState<'markdown' | 'json'>('markdown');
  const [copied, setCopied] = useState(false);

  if (!isOpen || !analysis) return null;

  const generateMarkdown = () => {
    let md = `# CreatorOS Campaign: ${analysis.sourceTitle}\n\n`;
    md += `**Analyzed At:** ${new Date(analysis.analyzedAt).toLocaleString()}\n`;
    md += `**Voice Match Score:** ${analysis.creatorDna.scores.voiceMatchScore}%\n`;
    md += `**Consistency Score:** ${analysis.overallMetrics.semanticConsistency}%\n\n`;

    md += `## 7-Day Coordinated Campaign\n\n`;
    const schedule = analysis.campaign?.schedule || analysis.campaign?.days || [];
    schedule.forEach((day) => {
      md += `### Day ${day.dayNumber}: ${day.dayOfWeek || day.dayName || 'Day'} - ${(day.platform || 'draft').toUpperCase()} (${day.assetType || 'Post'})\n`;
      md += `**Title:** ${day.title}\n`;
      if (day.hook) md += `**Hook:** ${day.hook}\n`;
      md += `\n${day.content}\n\n---\n\n`;
    });

    md += `## Platform Native Assets\n\n`;
    (analysis.platformAssets || []).forEach((asset) => {
      md += `### ${(asset.platform || 'asset').toUpperCase()}\n`;
      if (asset.title) md += `**Title:** ${asset.title}\n`;
      if (asset.hook) md += `**Hook:** ${asset.hook}\n`;
      md += `\n${asset.body}\n\n`;
      if (asset.cta) md += `**CTA:** ${asset.cta}\n`;
      if (asset.hashtags) md += `**Hashtags:** ${asset.hashtags.join(' ')}\n`;
      md += `\n---\n\n`;
    });

    md += `## Content Waste Report (${analysis.wasteReport?.totalOpportunities || 0} Opportunities)\n\n`;
    (analysis.wasteReport?.opportunities || []).forEach((opp) => {
      md += `- [${(opp.category || 'opportunity').toUpperCase()}] **${opp.opportunityTitle}**: "${opp.snippet}" (Angle: ${opp.angle})\n`;
    });

    return md;
  };

  const contentToExport =
    format === 'markdown' ? generateMarkdown() : JSON.stringify(analysis, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(contentToExport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([contentToExport], {
      type: format === 'markdown' ? 'text/markdown' : 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `creatoros-${analysis.sourceTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.${format === 'markdown' ? 'md' : 'json'}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm p-4">
      <div className="max-w-2xl w-full glass-panel p-6 rounded-2xl border border-zinc-700 shadow-2xl space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white tracking-tight">
              Export CreatorOS Campaign & Assets
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFormat('markdown')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              format === 'markdown'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Markdown Bundle (.md)</span>
          </button>

          <button
            onClick={() => setFormat('json')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              format === 'json'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Raw JSON Data (.json)</span>
          </button>
        </div>

        {/* Preview snippet box */}
        <div className="h-64 rounded-xl bg-zinc-900/90 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-y-auto whitespace-pre leading-relaxed">
          {contentToExport}
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-zinc-500">
            {format === 'markdown' ? 'Ready for Notion, Obsidian, or CMS' : 'Structured schema for API integration'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold border border-zinc-700 flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy to Clipboard</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold shadow flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
