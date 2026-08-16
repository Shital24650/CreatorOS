export type AtomCategory =
  | 'hook'
  | 'insight'
  | 'educational'
  | 'surprising'
  | 'opinion'
  | 'question'
  | 'story'
  | 'quote'
  | 'cta'
  | 'tutorial';

export type PlatformType =
  | 'youtube'
  | 'youtube_shorts'
  | 'instagram'
  | 'linkedin'
  | 'twitter'
  | 'blog'
  | 'newsletter';

export interface CanonicalSource {
  id: string;
  sessionId: string;
  sourceFingerprint: string;
  title: string;
  transcript: string;
  duration: string;
  wordCount: number;
  sourceType: 'video' | 'audio' | 'transcript' | 'text' | 'demo';
  isDemo: boolean;
  createdAt: string;
}

export interface ContentUnderstanding {
  sourceId: string;
  sessionId: string;
  sourceFingerprint: string;
  primaryTopic: string;
  secondaryTopics: string[];
  niche: string;
  subNiche?: string;
  contentCategory?: string;
  secondaryNiche?: string;
  audience: string;
  primaryAudience?: string;
  audiencePainPoints?: string[];
  audienceGoals?: string[];
  audienceExperienceLevel?: string;
  creatorType: string;
  contentIntent: Array<{ intent: string; confidence: number }>;
  primaryIntent: string;
  entities: string[];
  keyThemes: string[];
  coreThesis: string;
  claims: string[];
  sourceEvidence: string[];
  contentSummary: string;
}

export interface GroundingGateResult {
  passed: boolean;
  groundingScore: number;
  relevanceScore: number;
  evidenceScore: number;
  semanticScore: number;
  verifiedAtomsCount: number;
  verifiedAssetsCount: number;
  domainContaminationDetected: boolean;
  contaminationReport?: string;
  reason: string;
  semanticValidationDetails?: {
    nicheAccurate: boolean;
    audienceLogical: boolean;
    atomsPresent: boolean;
    assetsSourceAligned: boolean;
    campaignTailored: boolean;
    claimsGrounded: boolean;
    contaminationFree: boolean;
  };
}

export interface ContentAtom {
  id: string;
  sourceId?: string;
  sessionId?: string;
  sourceFingerprint?: string;
  category: AtomCategory;
  timestamp: string; // e.g., "00:18", "01:02" or "Timestamp unavailable"
  timestampSeconds?: number | null;
  text: string;
  evidence?: string;
  importanceScore: number; // 0 - 100
  reason: string;
  suggestedPlatform: PlatformType;
  derivedIdeas: string[];
  isUsedInCampaign?: boolean;
}

export interface CreatorDNA {
  sourceId?: string;
  sessionId?: string;
  sourceFingerprint?: string;
  tone: string;
  vocabulary: string;
  sentenceLength: string;
  sentenceStyle?: string;
  storyStructure?: string;
  technicalLevel: string;
  technicalDepth?: string;
  humorLevel: string;
  emotionalStyle: string;
  authorityStyle?: string;
  ctaStyle: string;
  preferredHooks: string[];
  recurringThemes: string[];
  communicationPatterns: string[];
  scores: {
    toneMatch: number;
    vocabularyMatch: number;
    styleMatch: number;
    audienceAlignment: number;
    brandConsistency: number;
    voiceMatchScore: number;
    technicalStyle?: number;
    ctaStyle?: number;
  };
  reasoningWhyMatches: string;
  sourceEvidence?: string[];
}

export interface Claim {
  id: string;
  sourceId?: string;
  text: string;
  supportedBySource: boolean;
  claimType?: 'fact' | 'opinion' | 'prediction' | 'inference';
  groundingClassification?: 'SUPPORTED' | 'INFERENCE' | 'UNSUPPORTED';
  sourceQuote?: string;
  confidenceScore: number; // 0 - 100
  riskLevel: 'safe' | 'warning' | 'unsupported';
  explanation: string;
  suggestedSafeWording?: string;
  status: 'original' | 'corrected' | 'verified';
  sourceSupportStatus?: 'Supported' | 'Inference' | 'Unsupported';
  externalVerificationStatus?: string;
  statusLabel?: 'Source Grounded' | 'Logical Inference' | 'Unsupported Claim';
}

export interface NicheIntelligence {
  primaryNiche: string;
  subNiche?: string;
  contentCategory?: string;
  secondaryNiche: string;
  audience: string;
  primaryAudience?: string;
  audiencePainPoints?: string[];
  audienceGoals?: string[];
  audienceExperienceLevel?: string;
  creatorType: string;
  contentIntents: Array<{ intent: string; confidence: number }>;
  primaryIntent: string;
  nicheSummary: string;
}

export interface PlatformIntent {
  id: string;
  sourceId?: string;
  sessionId?: string;
  sourceFingerprint?: string;
  platform: PlatformType | string;
  fitScore: number; // 0 - 100
  platformPurpose: string;
  targetAudience: string;
  contentIntent: string;
  selectedAngle: string;
  angle: string;
  transformationReason: string;
  sourceAtomIds: string[];
  shouldPublish: boolean;
  fitPros: string[];
  fitCons: string[];
  recommendation: string;
  nativeFormatRecommended?: string;
  coreHookSnippet?: string;
  sourceEvidence?: string[];
}

export interface PlatformAsset {
  id: string;
  sourceId?: string;
  sessionId?: string;
  sourceFingerprint?: string;
  platform: PlatformType;
  assetType?: string;
  sourceAtomId?: string;
  sourceAtomIds?: string[];
  platformIntentId?: string;
  platformIntent?: PlatformIntent;
  fitScore?: number;
  selectedAngle?: string;
  angle?: string;
  transformationReason?: string;
  title?: string;
  hook?: string;
  body: string;
  cta?: string;
  tags?: string[];
  hashtags?: string[];
  clipTimestamp?: string;
  threadTweets?: string[];
  newsletterPreview?: string;
  blogOutline?: string[];
  consistencyScore: number;
  consistencyReasoning: string;
  claims: Claim[];
  status: 'ready' | 'flagged' | 'verified';
  groundingScore?: number;
  semanticConsistencyScore?: number;
  verificationStatus?: string;
  sourceEvidence?: string[];
}

export interface ContentOpportunity {
  id: string;
  sourceId?: string;
  sessionId?: string;
  category: 'hook' | 'insight' | 'opinion' | 'faq' | 'quote' | 'short_form' | 'educational';
  timestamp?: string;
  snippet: string;
  opportunityTitle: string;
  angle: string;
  potentialFormats: PlatformType[];
  potentialReachScore: number;
  reason?: string;
  priority?: 'high' | 'medium' | 'low';
  convertedToAsset?: boolean;
  generatedAssetId?: string;
  sourceEvidence?: string;
}

export interface ContentWasteReport {
  totalOpportunities: number;
  categoryCounts: {
    hooks: number;
    insights: number;
    opinions: number;
    faqs: number;
    quotes: number;
    shortForm: number;
  };
  opportunities: ContentOpportunity[];
}

export interface CampaignDay {
  id?: string;
  sourceId?: string;
  sessionId?: string;
  dayNumber: number; // 1 to 7
  dayName?: string;
  dayOfWeek?: string;
  platform: PlatformType;
  assetType: string;
  title: string;
  hook?: string;
  content: string;
  cta?: string;
  atomSourceId?: string;
  assetId?: string;
  platformFitScore?: number;
  platformAngle?: string;
  transformationReason?: string;
  status?: 'scheduled' | 'draft' | 'verified' | 'ready' | string;
  isRegenerating?: boolean;
}

export interface Campaign {
  id: string;
  sourceId?: string;
  sessionId?: string;
  name?: string;
  title?: string;
  strategySummary?: string;
  schedule?: CampaignDay[];
  days?: CampaignDay[];
  totalAssetsCount?: number;
  consistencyAvg?: number;
  avgPlatformFit?: number;
}

export interface ContentGraphNode {
  id: string;
  label: string;
  type: 'source' | 'niche' | 'atom' | 'intent' | 'angle' | 'idea' | 'adaptation' | 'asset' | 'campaign';
  details: string;
  parentId?: string;
  category?: string;
  score?: number;
  platform?: PlatformType | string;
  childrenCount?: number;
}

export interface AnalysisResult {
  id: string;
  sourceId?: string;
  sessionId?: string;
  sourceFingerprint?: string;
  modelName?: string;
  canonicalSource?: CanonicalSource;
  understanding?: ContentUnderstanding;
  groundingGate?: GroundingGateResult;
  sourceTitle: string;
  sourceType: 'video' | 'audio' | 'transcript' | 'text';
  duration: string;
  transcript: string;
  wordCount: number;
  nicheIntelligence?: NicheIntelligence;
  platformIntents?: PlatformIntent[];
  atoms: ContentAtom[];
  creatorDna: CreatorDNA;
  platformAssets: PlatformAsset[];
  wasteReport: ContentWasteReport;
  campaign: Campaign;
  contentGraph?: {
    nodes: ContentGraphNode[];
  };
  graphNodes?: ContentGraphNode[];
  overallMetrics: {
    contentOpportunities: number;
    voiceMatch: number;
    contentGenerated: number;
    atomsDiscovered: number;
    semanticConsistency?: number;
    avgPlatformFit?: number;
  };
  isDemoSample?: boolean;
  analyzedAt: string;
}
