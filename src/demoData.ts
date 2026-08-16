import { AnalysisResult, CanonicalSource, ContentUnderstanding, GroundingGateResult } from './types';

export const DEMO_TRAVEL_TRANSCRIPT = `I used to think traveling on a small budget meant sacrificing the entire experience.

After planning this weekend trip, I realized I was approaching it completely wrong.

My first instinct was to look for the cheapest hotel.

That turned out to be a mistake.

The cheapest room wasn't actually the cheapest option once I added transportation costs, meals, and the time spent getting around.

So instead, I changed one thing.

I started planning the location first and the hotel second.

I looked for a place where I could walk to most of the things I wanted to see.

That single decision made the rest of the trip much easier.

I also stopped trying to visit every attraction.

Originally, I had a list of twelve places I wanted to see in two days.

That sounds productive.

It wasn't.

I would spend half the day traveling between locations instead of actually enjoying them.

So I picked four places that were close together and built the rest of the weekend around them.

The trip immediately felt less rushed.

Another thing that saved money was surprisingly simple.

I stopped buying every meal near tourist attractions.

Instead, I researched a few local restaurants before leaving and saved them on a map.

That gave me options when I was hungry instead of forcing me to choose whatever happened to be nearby.

I also learned that transportation isn't just about price.

A slightly more expensive train or bus can sometimes save enough time to make the rest of the day more useful.

So now I compare both cost and travel time.

The biggest lesson from the trip was that budget travel isn't necessarily about finding the cheapest option.

It's about optimizing the entire trip.

Cheap hotel.

Expensive transportation.

Long travel times.

Extra meals.

Those decisions are connected.

Once I started looking at them as one system, planning became much easier.

And I think that's the mistake many people make.

They optimize individual expenses instead of optimizing the whole experience.

So if you're planning your next trip on a budget, don't start by searching for the cheapest hotel.

Start by asking:

Where do I want to spend my time?

Then build the rest of the trip around that.

What is one travel decision that saved you more money than expected?`;

export const DEMO_SKINCARE_TRANSCRIPT = `[00:00] Stop scrubbing your face like you're trying to remove permanent marker. Your skin barrier is not a kitchen counter.
[00:15] Mistake number one: Exfoliating every single day. If your skin feels tight and 'squeaky clean' after washing, congratulations, you just stripped away your natural lipid barrier. That tight feeling isn't cleanliness; it's damage.
[00:48] Mistake number two: Layering seven different active serums at once. You don't need retinol, vitamin C, AHA, BHA, and niacinamide all in the same routine. When you mix incompatible actives, you cancel out their efficacy and trigger micro-inflammation.
[01:22] Mistake number three: Applying hyaluronic acid to bone-dry skin. Hyaluronic acid is a humectant—it pulls water from wherever it can find it. If your skin is completely dry, it pulls moisture from the deeper layers of your dermis into the air, making you drier. Always apply it on damp skin.
[02:05] Mistake number four: Skipping sunscreen on cloudy days or indoors. Over 80% of UVA rays penetrate clouds and standard window glass. UVA is the silent destroyer of collagen and elastin.
[02:45] Mistake number five: Constantly switching products every four days because you didn't see an overnight miracle. Cellular skin turnover takes 28 to 40 days. Give your barrier time to heal.
[03:20] The fix is simple: Strip your routine down to a gentle cleanser, a barrier-repair moisturizer with ceramides, and daily SPF 50. Stop falling for 12-step marketing gimmicks. Consistency and simplicity always outperform complexity.`;

export const DEMO_TECH_TRANSCRIPT = `[00:00] Look, here is the brutal truth that nobody in Silicon Valley wants to admit: 90% of AI startups launched this year will be completely dead by 2026.
[00:18] If your entire business model is just a thin UI layer over an OpenAI wrapper, you do not have a company. You have a weekend project with a Stripe checkout.
[00:45] The companies that will dominate aren't the ones training the biggest models. They are the ones who master context curation and proprietary data flywheels.
[01:02] Let me break down the 3-layer architecture every enduring AI product must build: First, Domain-Specific Workflows. If you don't embed directly into the user's daily habits, you will get churned the moment a cheaper alternative pops up.
[01:46] Second is the Grounding Engine. Hallucinations aren't just bugs; in enterprise, they are legal liabilities. Your system must cross-verify every generated output against canonical source truths before displaying it.
[02:13] Here is a stat that shocked me when I reviewed our internal telemetry: over 73% of enterprise prompts generate output that creators only use 10% of. Think about that: 90% of valuable AI reasoning is thrown into the waste bin.
[02:41] As Peter Thiel famously said, 'Competition is for losers.' In the AI era, speed without distribution is suicide.
[03:15] So stop asking 'What model should I fine-tune?' and start asking 'What unique proprietary data loop am I feeding every single day?'
[03:50] If you want to survive the 2026 AI reckoning, build systems that turn one single high-signal input into a self-reinforcing content and distribution loop. That is the entire game.`;

export const DEMO_COOKING_TRANSCRIPT = `[00:00] The secret to pizzeria-quality Neapolitan pizza at home isn't an expensive wood oven. It's understanding hydration percentages and temperature control.
[00:25] Mistake one is using cold dough straight from the fridge. Cold gluten will snap and tear instead of stretching thin. You must let your dough ferment and come to room temperature for at least two hours before shaping.
[01:10] Mistake two: Drowning the dough in raw sauce. Too much moisture creates a soggy middle that never crisps. A 70% hydration dough needs high top heat and minimal toppings.
[01:55] When you master the repeatable 72-hour cold ferment process, your results become 100% consistent every single weekend. Small systemized tweaks in preparation create dramatic leaps in outcome.`;

export const DEMO_FITNESS_TRANSCRIPT = `[00:00] Stop relying on workout motivation. Motivation is a fickle emotion that vanishes the second you have a stressful day at work.
[00:30] The people who stay in peak physical condition for decades do not have more willpower than you. They have lower friction systems.
[01:15] When you design your workout routine around zero decision fatigue—bag packed the night before, pre-programmed progressive overload weights, non-negotiable morning time block—consistency becomes automatic.
[02:00] Systems outperform motivation every single time. Optimize for frequency and habit sustainability rather than occasional unsustainable heroics.`;

export const DEMO_GAMING_TRANSCRIPT = `[00:00] Why do millions of players log into this game every single night while other $100M AAA titles die within two weeks?
[00:35] It comes down to the core 30-second gameplay loop and micro-feedback gratification. When players complete a micro-action, the game provides immediate visual and audio satisfaction paired with variable ratio rewards.
[01:20] Game designers understand human retention and habit loops better than almost any SaaS product manager in tech.
[02:05] If your product doesn't deliver meaningful value within the first 15 seconds of interaction, user churn is inevitable. Here is what product teams can learn from modern game retention mechanics.`;

// ==========================================
// 1. BEAUTY & SKINCARE DEMO
// ==========================================
export const SAMPLE_SKINCARE_ANALYSIS: AnalysisResult = {
  id: 'analysis-skincare-001',
  sourceId: 'src-skincare-001',
  sessionId: 'session-skincare-demo',
  sourceFingerprint: 'fp-skincare-mistakes-5',
  modelName: 'gemini-3.7-flash',
  sourceTitle: '5 Skincare Mistakes Ruining Your Barrier (And The Fix)',
  sourceType: 'video',
  duration: '03:45',
  transcript: DEMO_SKINCARE_TRANSCRIPT,
  wordCount: 295,
  isDemoSample: true,
  analyzedAt: '2026-08-16T10:00:00.000Z',
  canonicalSource: {
    id: 'src-skincare-001',
    sessionId: 'session-skincare-demo',
    sourceFingerprint: 'fp-skincare-mistakes-5',
    title: '5 Skincare Mistakes Ruining Your Barrier (And The Fix)',
    transcript: DEMO_SKINCARE_TRANSCRIPT,
    duration: '03:45',
    wordCount: 295,
    sourceType: 'video',
    isDemo: true,
    createdAt: '2026-08-16T10:00:00.000Z',
  },
  understanding: {
    sourceId: 'src-skincare-001',
    sessionId: 'session-skincare-demo',
    sourceFingerprint: 'fp-skincare-mistakes-5',
    primaryTopic: 'Skin Barrier Repair and Daily Mistake Elimination',
    secondaryTopics: ['Exfoliation Damage', 'Active Ingredient Incompatibility', 'Hyaluronic Acid Humectant Chemistry', 'UV Photodamage', 'Cellular Skin Turnover'],
    niche: 'Beauty & Skincare',
    secondaryNiche: 'Consumer Education & Dermatology Insights',
    audience: 'Consumers overwhelmed by complex 10-step beauty routines seeking simple, science-backed skin barrier repair',
    creatorType: 'Educational Skincare Specialist & Barrier Health Advocate',
    contentIntent: [
      { intent: 'Education', confidence: 96 },
      { intent: 'Mythbusting', confidence: 91 },
      { intent: 'Routine Audit & Fix', confidence: 88 },
      { intent: 'Consumer Advisory', confidence: 84 },
    ],
    primaryIntent: 'Education & Routine Simplification',
    entities: ['Lipid Barrier', 'Hyaluronic Acid', 'Retinol', 'Vitamin C', 'AHA/BHA', 'Niacinamide', 'SPF 50', 'Ceramides', 'UVA Rays'],
    keyThemes: ['Stripping lipid barrier via over-exfoliation', 'Active ingredient clashes', 'Applying humectants to damp skin', 'Daily broad-spectrum SPF 50', '28-40 day cellular turnover'],
    coreThesis: 'Skin barrier preservation through a minimal 3-step routine (gentle cleanser, ceramide moisturizer, SPF 50) consistently outperforms aggressive multi-active routines.',
    claims: [
      'Over-exfoliating strips the natural lipid barrier.',
      'Mixing retinol, vitamin C, AHA, BHA, and niacinamide causes micro-inflammation.',
      'Hyaluronic acid on dry skin pulls moisture from the dermis into dry air.',
      'Over 80% of UVA rays penetrate clouds and glass.',
      'Skin cell turnover requires 28 to 40 days.',
    ],
    sourceEvidence: [
      'Stop scrubbing your face like you\'re trying to remove permanent marker.',
      'Over 80% of UVA rays penetrate clouds and standard window glass.',
      'Cellular skin turnover takes 28 to 40 days. Give your barrier time to heal.',
    ],
    contentSummary: 'An educational teardown of common routine pitfalls, recommending a simple 3-product regimen centered on barrier defense.',
  },
  groundingGate: {
    passed: true,
    groundingScore: 99,
    relevanceScore: 98,
    evidenceScore: 97,
    semanticScore: 98,
    verifiedAtomsCount: 6,
    verifiedAssetsCount: 7,
    domainContaminationDetected: false,
    reason: '100% of claims and extracted topics align strictly with skincare dermatology and barrier preservation.',
  },
  nicheIntelligence: {
    primaryNiche: 'Beauty & Skincare',
    secondaryNiche: 'Consumer Education & Dermatology Insights',
    audience: 'Beauty consumers overwhelmed by multi-step routines seeking clear, science-backed skin advice',
    creatorType: 'Educational Skincare Creator & Esthetician',
    contentIntents: [
      { intent: 'Education', confidence: 96 },
      { intent: 'Opinion / Mythbusting', confidence: 91 },
      { intent: 'Tutorial / Routine Fix', confidence: 88 },
      { intent: 'Consumer Advisory', confidence: 84 },
    ],
    primaryIntent: 'Education & Routine Simplification',
    nicheSummary: 'High-signal educational skincare breakdown dismantling multi-product marketing overload in favor of skin barrier preservation.',
  },
  platformIntents: [
    {
      id: 'intent-instagram',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'instagram',
      fitScore: 96,
      platformPurpose: 'Visual education, relatable lifestyle tips, high save/share rate, bite-sized routine advice',
      targetAudience: 'Skincare enthusiasts browsing beauty carousels and reels looking for actionable fixes',
      contentIntent: 'Visual educational breakdown & mythbusting',
      selectedAngle: 'Relatable visual routine audit & barrier protection checklist',
      angle: 'Relatable visual routine audit & barrier protection checklist',
      transformationReason: 'Instagram thrives on high-aesthetic carousels and relatable problem-identification ("Stop scrubbing your barrier like a kitchen counter").',
      sourceAtomIds: ['atom-skin-1', 'atom-skin-2', 'atom-skin-6'],
      shouldPublish: true,
      fitPros: ['High save potential for step-by-step skincare checklist', 'Strong visual contrast comparing stripped barrier vs healthy barrier', 'Direct community relatability regarding over-complicated routines'],
      fitCons: ['Must avoid excessive medical jargon in top caption text'],
      recommendation: 'Publish as a high-save 5-slide Educational Carousel paired with a 30s Reel.',
      nativeFormatRecommended: '5-Slide Saveable Carousel & Short Reel',
      coreHookSnippet: 'Your skincare routine might be making things worse. Here is why:',
    },
    {
      id: 'intent-youtube-shorts',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'youtube_shorts',
      fitScore: 94,
      platformPurpose: 'Instant 1-second retention hook, fast educational cadence, punchy mistake breakdown with visual demonstration',
      targetAudience: 'Casual YouTube viewers seeking rapid skin advice without fluff',
      contentIntent: 'High-velocity educational listicle',
      selectedAngle: 'Stop making these 5 skincare mistakes right now (Rapid countdown)',
      angle: 'Stop making these 5 skincare mistakes right now (Rapid countdown)',
      transformationReason: 'Shorts demands an urgent first-second pattern interrupt and immediate tactical payoff without drawn-out introductions.',
      sourceAtomIds: ['atom-skin-1', 'atom-skin-3'],
      shouldPublish: true,
      fitPros: ['Immediate visceral opening hook creates high retention', 'Numbered countdown maintains curiosity through the full 45 seconds', 'Clear CTA pointing to long-form routine audit'],
      fitCons: ['Limited runtime for nuanced ingredient chemistry explanations'],
      recommendation: 'Fast-paced talking head with b-roll of harsh scrubbing and stripped skin texture.',
      nativeFormatRecommended: 'Vertical 9:16 Video (45-55 seconds)',
      coreHookSnippet: 'If your face feels tight after washing, STOP doing this immediately 🛑',
    },
    {
      id: 'intent-youtube',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'youtube',
      fitScore: 92,
      platformPurpose: 'Searchable evergreen authority, deep science breakdown, ingredient interaction deep-dive with chapters',
      targetAudience: 'Viewers researching active ingredients, chemical exfoliation damage, and long-term skin barrier restoration',
      contentIntent: 'Comprehensive masterclass & scientific routine rebuild',
      selectedAngle: 'The Science of Barrier Damage: Why More Products = Worse Skin',
      angle: 'The Science of Barrier Damage: Why More Products = Worse Skin',
      transformationReason: 'Long-form YouTube rewards comprehensive explanation of the stratum corneum lipid matrix and specific active clashing mechanisms.',
      sourceAtomIds: ['atom-skin-2', 'atom-skin-3', 'atom-skin-4', 'atom-skin-5'],
      shouldPublish: true,
      fitPros: ['High search intent for "how to fix damaged skin barrier"', 'Authority-building breakdown establishing long-term subscriber trust', 'Ample time to explain the 28-day skin turnover cycle'],
      fitCons: ['Requires high production and clear chapter timestamping'],
      recommendation: 'Produce a structured 10-12 minute video essay with diagram overlays of the lipid barrier.',
      nativeFormatRecommended: '16:9 Long-Form Video with Detailed Chapters',
      coreHookSnippet: 'Why 90% of people with acne or redness are actually suffering from self-inflicted barrier damage.',
    },
    {
      id: 'intent-twitter',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'twitter',
      fitScore: 88,
      platformPurpose: 'Sharp observations, contrarian mythbusting, bookmarkable tactical frameworks, high-engagement debate',
      targetAudience: 'Skincare hobbyists and consumers looking for unfiltered, myth-free product guidance',
      contentIntent: 'Contrarian industry mythbusting thread',
      selectedAngle: 'The 12-step routine is a marketing scam designed to sell you solutions to problems it created',
      angle: 'The 12-step routine is a marketing scam designed to sell you solutions to problems it created',
      transformationReason: 'X (Twitter) rewards strong contrarian framing that challenges conventional commercial wisdom.',
      sourceAtomIds: ['atom-skin-1', 'atom-skin-2', 'atom-skin-6'],
      shouldPublish: true,
      fitPros: ['High retweet velocity for provocative consumer advice', 'Bookmarkable summary tweet for the 3-step replacement routine', 'Natural spark for active reply discussions'],
      fitCons: ['Must avoid overly dogmatic medical absolutism'],
      recommendation: 'Post a 7-tweet mega-thread leading with the marketing scam hook.',
      nativeFormatRecommended: 'Numbered 7-Tweet Thread + Bookmark CTA',
      coreHookSnippet: 'The skincare industry convinced everyone they need 10 products a day. Here is what actually happens to your barrier when you do that: 🧵',
    },
    {
      id: 'intent-linkedin',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'linkedin',
      fitScore: 74,
      platformPurpose: 'Professional/business insight, consumer psychology, market oversaturation, product transparency, brand trust',
      targetAudience: 'Brand strategists, D2C founders, product marketers, and health executives',
      contentIntent: 'Consumer psychology & business strategy case study',
      selectedAngle: 'The Beauty Industry’s Over-Marketing Dilemma: Why Educating Consumers Beats Selling 12 SKUs',
      angle: 'The Beauty Industry’s Over-Marketing Dilemma: Why Educating Consumers Beats Selling 12 SKUs',
      transformationReason: 'CRITICAL LINKEDIN ADAPTATION: Rather than generic corporate speak, we extract the legitimate business angle: how D2C beauty brands over-complicate product lines, causing customer churn, and why minimalist transparency creates higher lifetime brand loyalty.',
      sourceAtomIds: ['atom-skin-2', 'atom-skin-6'],
      shouldPublish: true,
      fitPros: ['Unique cross-industry business analysis on consumer trust and product bloat', 'Positions the creator as an industry thinker, not just an influencer', 'Relevant to D2C founders and brand operators'],
      fitCons: ['Lower organic consumer fit than Instagram or TikTok, requires business framing'],
      recommendation: 'Publish as a thoughtful text essay dissecting brand trust vs SKU multiplication.',
      nativeFormatRecommended: 'Long-Form Business Case Study with Discussion Prompt',
      coreHookSnippet: 'The average D2C beauty brand launches 14 SKUs a year. But modern consumers are experiencing severe routine fatigue. Here is what smart brands are doing instead:',
    },
    {
      id: 'intent-blog',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'blog',
      fitScore: 95,
      platformPurpose: 'High-intent SEO search traffic, comprehensive ingredient guide, reference tables, printable routine blueprint',
      targetAudience: 'Organic Google searchers looking for step-by-step barrier repair routines',
      contentIntent: 'Definitive evergreen SEO guide',
      selectedAngle: 'Complete Skin Barrier Repair Guide: 5 Mistakes to Stop & 3-Step Protocol',
      angle: 'Complete Skin Barrier Repair Guide: 5 Mistakes to Stop & 3-Step Protocol',
      transformationReason: 'Search queries like "how to repair damaged skin barrier" and "hyaluronic acid on dry skin" have enormous evergreen search volume.',
      sourceAtomIds: ['atom-skin-1', 'atom-skin-2', 'atom-skin-3', 'atom-skin-4', 'atom-skin-5', 'atom-skin-6'],
      shouldPublish: true,
      fitPros: ['Exceptional evergreen organic search volume', 'Allows full ingredient comparison matrix and FAQ section', 'High affiliate and newsletter lead magnet capture'],
      fitCons: ['Takes time to rank organically on search engines'],
      recommendation: 'Publish a 1,800-word authoritative guide with markdown tables and bulleted ingredient protocols.',
      nativeFormatRecommended: 'Comprehensive SEO Article with Markdown Matrices',
      coreHookSnippet: 'How to Repair a Damaged Skin Barrier in 30 Days (According to Science, Not Marketing)',
    },
    {
      id: 'intent-newsletter',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'newsletter',
      fitScore: 93,
      platformPurpose: 'Intimate relationship building, personal voice, vulnerable reader check-in, weekly skin reset challenge',
      targetAudience: 'Dedicated email subscribers who trust the creator for curated, hype-free guidance',
      contentIntent: 'Intimate personal memo & 7-day routine audit challenge',
      selectedAngle: 'Your Sunday Skin Reset: Let’s audit your bathroom cabinet together',
      angle: 'Your Sunday Skin Reset: Let’s audit your bathroom cabinet together',
      transformationReason: 'Email is an intimate 1-on-1 medium where a supportive, conversational tone inspires readers to declutter their routine.',
      sourceAtomIds: ['atom-skin-1', 'atom-skin-5', 'atom-skin-6'],
      shouldPublish: true,
      fitPros: ['High click-through rate on personalized routine checklist', 'Deepens trust with zero sponsored product clutter', 'Strong reply rate asking for personalized feedback'],
      fitCons: ['Must maintain a personal, non-promotional tone'],
      recommendation: 'Send as a weekend Sunday morning self-care memo with an interactive 3-question routine quiz.',
      nativeFormatRecommended: 'Epistolary Personal Memo with Cabinet Audit Challenge',
      coreHookSnippet: 'Hey friend, open your bathroom cabinet right now. We need to talk about those 6 serums gathering dust.',
    },
  ],
  atoms: [
    {
      id: 'atom-skin-1',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      category: 'hook',
      timestamp: '00:00',
      timestampSeconds: 0,
      text: 'Stop scrubbing your face like you are trying to remove permanent marker. Your skin barrier is not a kitchen counter.',
      evidence: 'Stop scrubbing your face like you\'re trying to remove permanent marker. Your skin barrier is not a kitchen counter.',
      importanceScore: 98,
      reason: 'Visceral pattern-interrupt metaphor establishing immediate emotional resonance and clarity.',
      suggestedPlatform: 'youtube_shorts',
      derivedIdeas: ['Shorts hook opening', 'Instagram carousel cover', 'Twitter thread opener'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-skin-2',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      category: 'insight',
      timestamp: '00:15',
      timestampSeconds: 15,
      text: 'That "squeaky clean" tight feeling after washing isn\'t cleanliness—it\'s physical damage to your lipid barrier.',
      evidence: 'If your skin feels tight and \'squeaky clean\' after washing, congratulations, you just stripped away your natural lipid barrier.',
      importanceScore: 95,
      reason: 'Dismantles a foundational consumer misconception about skin cleanliness.',
      suggestedPlatform: 'instagram',
      derivedIdeas: ['Cleanser pH breakdown', 'Barrier health visual diagram'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-skin-3',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      category: 'educational',
      timestamp: '00:48',
      timestampSeconds: 48,
      text: 'Layering incompatible active serums (retinol + vitamin C + AHA/BHA) cancels out efficacy and triggers micro-inflammation.',
      evidence: 'When you mix incompatible actives, you cancel out their efficacy and trigger micro-inflammation.',
      importanceScore: 96,
      reason: 'Direct chemistry explanation preventing readers from active ingredient conflict.',
      suggestedPlatform: 'blog',
      derivedIdeas: ['Active ingredient compatibility matrix', 'Morning vs Evening routine split'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-skin-4',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      category: 'surprising',
      timestamp: '01:22',
      timestampSeconds: 82,
      text: 'Hyaluronic acid is a humectant: applied to bone-dry skin, it pulls moisture from your dermis into the air, making you drier.',
      evidence: 'If your skin is completely dry, it pulls moisture from the deeper layers of your dermis into the air, making you drier. Always apply it on damp skin.',
      importanceScore: 94,
      reason: 'Surprising scientific mechanism that immediately transforms how users apply skincare.',
      suggestedPlatform: 'twitter',
      derivedIdeas: ['Damp application demo video', 'Humectant vs Occlusive comparison'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-skin-5',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      category: 'insight',
      timestamp: '02:05',
      timestampSeconds: 125,
      text: 'Over 80% of UVA rays penetrate clouds and standard window glass, destroying collagen and elastin indoors.',
      evidence: 'Over 80% of UVA rays penetrate clouds and standard window glass. UVA is the silent destroyer of collagen and elastin.',
      importanceScore: 91,
      reason: 'Factual statistic motivating year-round, indoor broad-spectrum SPF compliance.',
      suggestedPlatform: 'youtube',
      derivedIdeas: ['Indoor UV index reality check', 'Broad spectrum UVA vs UVB breakdown'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-skin-6',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      category: 'cta',
      timestamp: '03:20',
      timestampSeconds: 200,
      text: 'Strip your routine down to a gentle cleanser, a ceramide moisturizer, and daily SPF 50. Simplicity beats complexity.',
      evidence: 'Strip your routine down to a gentle cleanser, a barrier-repair moisturizer with ceramides, and daily SPF 50.',
      importanceScore: 97,
      reason: 'Actionable, memorable 3-step prescriptive summary that provides immediate relief.',
      suggestedPlatform: 'newsletter',
      derivedIdeas: ['Sunday reset challenge', 'Bathroom cabinet declutter checklist'],
      isUsedInCampaign: true,
    },
  ],
  creatorDna: {
    sourceId: 'src-skincare-001',
    sessionId: 'session-skincare-demo',
    tone: 'Direct, empathetic, science-grounded, anti-marketing, authoritative',
    vocabulary: 'Dermatological terminology made accessible (lipid barrier, stratum corneum, humectants, ceramides, micro-inflammation)',
    sentenceLength: 'Punchy declarative hooks balanced with structured explanatory cadence',
    technicalLevel: 'Intermediate science explained through clear kitchen and household metaphors',
    humorLevel: 'Dry, witty debunking of multi-step marketing gimmicks',
    emotionalStyle: 'Protective and empowering—liberating the audience from consumer guilt and routine fatigue',
    ctaStyle: 'Pragmatic, low-pressure encouragement to simplify rather than buy more products',
    preferredHooks: [
      'Stop [common habit] like you are [absurd analogy]',
      'Here is the brutal truth nobody in the beauty industry admits',
      'If your face feels [symptom], congratulations, you just [mistake]',
    ],
    recurringThemes: [
      'Skin barrier defense over aggressive treatments',
      'The myth of the 12-step skincare routine',
      'Humectant vs occlusive chemistry',
      'Consistency and cell turnover timelines (28-40 days)',
    ],
    communicationPatterns: [
      'Problem identification via visceral visual analogy',
      'Biological explanation of the real cause',
      'Specific 3-step minimalist correction',
    ],
    scores: {
      toneMatch: 96,
      vocabularyMatch: 95,
      styleMatch: 97,
      audienceAlignment: 96,
      brandConsistency: 95,
      voiceMatchScore: 95,
      technicalStyle: 93,
      ctaStyle: 94,
    },
    reasoningWhyMatches: 'Captures the authentic blend of scientific authority and empathetic anti-marketing simplification demonstrated throughout the source transcript.',
    sourceEvidence: [
      'Your skin barrier is not a kitchen counter.',
      'Stop falling for 12-step marketing gimmicks. Consistency and simplicity always outperform complexity.',
    ],
  },
  platformAssets: [
    {
      id: 'asset-skin-ig',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'instagram',
      platformIntentId: 'intent-instagram',
      sourceAtomId: 'atom-skin-1',
      fitScore: 96,
      selectedAngle: 'Relatable visual routine audit & barrier protection checklist',
      title: '5 Skincare Mistakes Making Your Barrier Worse (Save This 📌)',
      hook: 'Stop scrubbing your face like you are trying to remove permanent marker. 🛑',
      body: `### SLIDE 1 (Cover):
Your skin barrier is NOT a kitchen counter. 🧼
Here are 5 mistakes ruining your skin (and the 3-step fix).

---

### SLIDE 2: Exfoliating Every Day
That "squeaky clean" tight feeling? It isn't cleanliness. It's the sound of your lipid barrier begging for mercy.

---

### SLIDE 3: Active Cocktail Overload
Mixing Retinol + Vitamin C + Glycolic Acid in one night cancels out results and creates micro-inflammation. Pick ONE active per night.

---

### SLIDE 4: Hyaluronic Acid on Dry Skin
Hyaluronic acid is a sponge. On dry skin, it pulls water OUT of your dermis into the dry air. Always apply on DAMP skin! 💧

---

### SLIDE 5: The 3-Step Reset Protocol
1. Gentle non-foaming cleanser
2. Ceramide barrier moisturizer
3. Daily broad-spectrum SPF 50

Save this post for your next routine reset! 👇`,
      cta: 'Double-tap and save this post to audit your bathroom cabinet tonight! Which mistake were you making? Drop a number below 👇',
      tags: ['skincare', 'skinbarrier', 'skincaretips', 'barrierrepair', 'dermatology'],
      hashtags: ['#SkinBarrierRepair', '#SkincareMistakes', '#Ceramides', '#HealthySkin', '#MinimalistSkincare'],
      consistencyScore: 98,
      consistencyReasoning: 'Derived strictly from the source transcript without introducing external or conflicting beauty claims.',
      claims: [
        {
          id: 'claim-skin-1',
          sourceId: 'src-skincare-001',
          text: 'Over-exfoliating strips your natural lipid barrier.',
          supportedBySource: true,
          sourceQuote: 'If your skin feels tight and \'squeaky clean\' after washing, congratulations, you just stripped away your natural lipid barrier.',
          confidenceScore: 99,
          riskLevel: 'safe',
          explanation: 'Directly supported by the source transcript.',
          suggestedSafeWording: 'Over-exfoliating strips away your natural lipid barrier.',
          status: 'verified',
        },
        {
          id: 'claim-skin-2',
          sourceId: 'src-skincare-001',
          text: 'Hyaluronic acid on dry skin pulls water from deep skin layers.',
          supportedBySource: true,
          sourceQuote: 'If your skin is completely dry, it pulls moisture from the deeper layers of your dermis into the air.',
          confidenceScore: 98,
          riskLevel: 'safe',
          explanation: 'Grounded in the source mechanism explanation.',
          suggestedSafeWording: 'Hyaluronic acid pulls water from deeper layers when applied without moisture.',
          status: 'verified',
        },
      ],
      status: 'verified',
    },
    {
      id: 'asset-skin-shorts',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'youtube_shorts',
      platformIntentId: 'intent-youtube-shorts',
      sourceAtomId: 'atom-skin-1',
      fitScore: 94,
      selectedAngle: 'Stop making these 5 skincare mistakes right now (Rapid countdown)',
      title: 'Stop Scrubbing Your Face! 5 Huge Skincare Mistakes ❌',
      hook: 'If your face feels tight after washing, STOP doing this immediately.',
      body: `[0:00 - 0:08] Stop scrubbing your face like a dirty kitchen counter! That tight "squeaky clean" feeling? You just stripped your lipid barrier.

[0:08 - 0:18] Mistake 1: Exfoliating daily.
Mistake 2: Mixing 5 active serums at once—Retinol and Vitamin C together cancel out and trigger redness.

[0:18 - 0:32] Mistake 3: Putting Hyaluronic Acid on dry skin. It pulls water OUT of your face unless applied on damp skin.
Mistake 4: Skipping SPF indoors—80% of UVA rays penetrate windows!

[0:32 - 0:45] The Fix: Strip down to gentle cleanser, ceramide moisturizer, and SPF 50. Subscribe for part 2!`,
      cta: 'Subscribe for daily science-backed skincare breakdowns! 🔔',
      clipTimestamp: '00:00 - 00:45',
      consistencyScore: 96,
      consistencyReasoning: 'Maintains exact 5-mistake structure and scientific cautions from the source transcript.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-skin-li',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'linkedin',
      platformIntentId: 'intent-linkedin',
      sourceAtomId: 'atom-skin-6',
      fitScore: 74,
      selectedAngle: 'The Beauty Industry’s Over-Marketing Dilemma: Why Educating Consumers Beats Selling 12 SKUs',
      title: 'The D2C Beauty Industry Has a Consumer Trust Problem. Here is Why Simplification is the Next Great Moat.',
      hook: 'The average D2C skincare brand launches 14 SKUs a year. But modern consumers are experiencing severe routine fatigue.',
      body: `In the race for higher basket sizes, the beauty industry convinced consumers that healthy skin requires a 12-step daily ritual.

The result?
1. Micro-inflammation from conflicting active ingredients.
2. High customer churn when complicated routines fail to produce overnight miracles.
3. Diminished long-term brand trust.

When consumers layer retinol, vitamin C, AHA, and niacinamide in one sitting, efficacy cancels out and micro-inflammation spikes. Furthermore, cellular turnover takes 28 to 40 days—yet marketing promises 48-hour transformations.

The brands that will dominate the next decade aren't the ones multiplying SKUs. They are the brands championing **radically simplified customer outcomes**:

1. **Clear Education over Routine Bloat**: Teaching barrier preservation rather than aggressive over-exfoliation.
2. **Defensible Core Formulations**: Focusing on three high-efficacy pillars (cleanser, ceramide repair, broad-spectrum SPF 50).
3. **Setting Realistic Expectations**: Aligning customer patience with real biological skin turnover cycles (28-40 days).

In a noisy, over-marketed category, simplicity and ingredient transparency are the ultimate competitive advantages.

What is your take on product proliferation vs streamlined essentials?`,
      cta: 'Share your thoughts in the comments: Are consumer brands overcomplicating their product matrices?',
      consistencyScore: 94,
      consistencyReasoning: 'Transformed into a legitimate business analysis on consumer trust and product bloat without violating source facts.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-skin-tw',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'twitter',
      platformIntentId: 'intent-twitter',
      sourceAtomId: 'atom-skin-2',
      fitScore: 88,
      selectedAngle: 'The 12-step routine is a marketing scam designed to sell you solutions to problems it created',
      hook: 'The 12-step skincare routine is a marketing scam designed to sell you products to fix the damage caused by your other products. 🧵',
      body: `1/7 The 12-step skincare routine is a marketing scam designed to sell you products to fix the damage caused by your other products. Here is the biological truth: 🧵

2/7 "Squeaky clean" is a red flag. If your skin feels tight after cleansing, you didn't wash away dirt—you stripped away your natural lipid barrier.

3/7 Active ingredient stacking is ruining your face. Mixing Retinol, Vitamin C, AHA, BHA, and Niacinamide in the same routine cancels out their efficacy and triggers micro-inflammation.

4/7 Hyaluronic Acid is a humectant sponge. If you apply it to bone-dry skin in a dry room, it pulls water from deep inside your dermis into the air. Always apply on DAMP skin.

5/7 Clouds and windows do NOT block UV radiation. Over 80% of UVA rays penetrate standard window glass and cloud cover, silently breaking down collagen and elastin.

6/7 Skin cell turnover takes 28 to 40 days. If you switch products every 4 days because you didn't see an overnight miracle, your barrier never has time to heal.

7/7 The only 3 products you actually need:
1. Gentle non-foaming cleanser
2. Ceramide moisturizer
3. Daily SPF 50

Drop the 12-step routine. Consistency and simplicity always beat complexity.`,
      cta: 'If this saved your skin barrier, RT the first tweet to help a friend stop over-scrubbing! 🔄',
      threadTweets: [
        'The 12-step skincare routine is a marketing scam designed to sell you products to fix the damage caused by your other products. Here is the biological truth: 🧵',
        '"Squeaky clean" is a red flag. If your skin feels tight after cleansing, you didn\'t wash away dirt—you stripped away your natural lipid barrier.',
        'Active ingredient stacking is ruining your face. Mixing Retinol, Vitamin C, AHA, BHA, and Niacinamide in the same routine cancels out their efficacy and triggers micro-inflammation.',
        'Hyaluronic Acid is a humectant sponge. If you apply it to bone-dry skin in a dry room, it pulls water from deep inside your dermis into the air. Always apply on DAMP skin.',
        'Clouds and windows do NOT block UV radiation. Over 80% of UVA rays penetrate standard window glass and cloud cover, silently breaking down collagen and elastin.',
        'Skin cell turnover takes 28 to 40 days. If you switch products every 4 days because you didn\'t see an overnight miracle, your barrier never has time to heal.',
        'The only 3 products you actually need:\n1. Gentle non-foaming cleanser\n2. Ceramide moisturizer\n3. Daily SPF 50\n\nDrop the 12-step routine. Consistency and simplicity always beat complexity.',
      ],
      consistencyScore: 97,
      consistencyReasoning: 'Numbered 7-tweet breakdown reflecting the exact sequence of 5 mistakes and 3-step repair from the source.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-skin-yt',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'youtube',
      platformIntentId: 'intent-youtube',
      sourceAtomId: 'atom-skin-3',
      fitScore: 92,
      selectedAngle: 'The Science of Barrier Damage: Why More Products = Worse Skin',
      title: 'Why Your Skincare Routine is Destroying Your Skin Barrier (The 5 Mistakes & 30-Day Fix)',
      hook: 'Most people who think they have severe acne or redness actually just have a destroyed lipid barrier.',
      body: `### Video Structure & Chapters:

00:00 - The "Squeaky Clean" Myth (Visual Demonstration)
01:30 - Mistake #1: Daily Harsh Physical & Chemical Exfoliation
03:15 - Mistake #2: Active Incompatibility (Retinol vs Vitamin C vs AHA/BHA)
05:20 - Mistake #3: The Hyaluronic Acid Trap (Why Dry Skin Makes It Worse)
07:45 - Mistake #4: Indoor UVA Photodamage & Collagen Breakdown
09:30 - Mistake #5: The 28-Day Cellular Turnover Timeline
11:15 - The 3-Step Barrier Rebuilding Protocol (Cleanser, Ceramides, SPF 50)

### Description & Resources:
Stop scrubbing your face like a kitchen counter. In this comprehensive breakdown, we analyze the biology of the stratum corneum and show you how to heal irritation in 30 days using just 3 essential products.`,
      cta: 'Subscribe and download our free 30-Day Skin Barrier Reset PDF in the description below!',
      consistencyScore: 96,
      consistencyReasoning: 'Structured video essay outline corresponding to the 5 mistakes and 3-step protocol.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-skin-blog',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'blog',
      platformIntentId: 'intent-blog',
      sourceAtomId: 'atom-skin-3',
      fitScore: 95,
      selectedAngle: 'Complete Skin Barrier Repair Guide: 5 Mistakes to Stop & 3-Step Protocol',
      title: 'How to Repair a Damaged Skin Barrier: 5 Common Mistakes and the 3-Step Scientific Protocol',
      hook: 'If your skin feels tight, inflamed, or sensitive after washing, you may have stripped your natural lipid barrier.',
      body: `## The Modern Skin Barrier Crisis

In an era of 10-step skincare routines and endless influencer product recommendations, dermatologists are seeing an unprecedented surge in compromised skin barriers.

When the stratum corneum—the outermost protective shield of your skin—is stripped of its natural lipids, water evaporates rapidly and irritants penetrate deeply.

---

## The 5 Mistakes You Must Stop Immediately

### 1. Daily Over-Exfoliation
Exfoliating every day removes dead skin cells, but it also strips the essential lipid matrix holding your cells together. If your skin feels "tight," your barrier is compromised.

### 2. Incompatible Active Layering
Stacking Retinol, Vitamin C, AHA, BHA, and Niacinamide simultaneously causes molecular antagonism and triggers chronic micro-inflammation.

### 3. Applying Hyaluronic Acid to Dry Skin
Hyaluronic acid is a humectant that binds 1,000x its weight in water. On dry skin, it pulls moisture upward from the dermis into the dry air, exacerbating dehydration. **Always apply to damp skin.**

### 4. Skipping SPF Indoors and on Overcast Days
Over 80% of UVA rays penetrate standard window glass and cloud cover, causing silent collagen degradation.

### 5. Switching Products Every 4 Days
Human skin cell turnover requires **28 to 40 days**. Changing regimens weekly prevents your barrier from undergoing natural cellular repair.

---

## The 3-Step Barrier Reset Routine

| Step | Product Type | Key Ingredients | Purpose |
| :--- | :--- | :--- | :--- |
| **Step 1** | Gentle Non-Foaming Cleanser | Glycerin, Oat Extract | Cleanses without stripping lipids |
| **Step 2** | Barrier Cream | Ceramides, Fatty Acids, Cholesterol | Rebuilds the intercellular lipid matrix |
| **Step 3** | Broad-Spectrum SPF 50 | Zinc Oxide, Avobenzone | Protects healing skin from UVA/UVB damage |`,
      blogOutline: [
        'The Modern Skin Barrier Crisis: Biology of the Stratum Corneum',
        'Mistake 1: Daily Exfoliation and Squeaky Clean Misconceptions',
        'Mistake 2: Active Layering Conflict Matrix',
        'Mistake 3: Humectant Dynamics & Hyaluronic Acid on Damp Skin',
        'Mistake 4: UVA Indoor Penetration and Collagen Defense',
        'Mistake 5: The 28-40 Day Cellular Turnover Timeline',
        'The 3-Step Minimalist Repair Protocol',
      ],
      consistencyScore: 98,
      consistencyReasoning: 'Comprehensive, search-optimized educational article directly derived from source science.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-skin-news',
      sourceId: 'src-skincare-001',
      sessionId: 'session-skincare-demo',
      platform: 'newsletter',
      platformIntentId: 'intent-newsletter',
      sourceAtomId: 'atom-skin-6',
      fitScore: 93,
      selectedAngle: 'Your Sunday Skin Reset: Let’s audit your bathroom cabinet together',
      title: 'Sunday Skin Memo #42: Time to declutter your bathroom cabinet 🧴',
      hook: 'Hey friend, open your bathroom cabinet right now. We need to have an honest talk.',
      body: `Hey friend,

Open your bathroom cabinet right now. Look at those 6 different active serums gathering dust on your second shelf.

How many of them are you using simultaneously because a marketing video told you that you needed all of them?

Here is my gentle challenge for you this Sunday:

For the next 30 days, strip your entire routine down to three non-negotiables:
1. **A gentle cleanser** that never leaves your face feeling tight.
2. **A ceramide moisturizer** that rebuilds your lipid shield.
3. **Daily SPF 50**, even when working by a sunny window.

Remember: Your skin turnover cycle takes 28 to 40 days. Give your skin time to do what it was biologically built to do: heal itself.

Hit reply and tell me: What is the one product you are removing from your routine tonight?

Warmly,
Your Skin Health Advocate`,
      newsletterPreview: 'Time to declutter your bathroom cabinet. Why 3 simple products outperform 12-step marketing gimmicks every single time.',
      consistencyScore: 97,
      consistencyReasoning: 'Direct, personal, conversational newsletter memo aligned with the creator DNA and source thesis.',
      claims: [],
      status: 'verified',
    },
  ],
  wasteReport: {
    totalOpportunities: 36,
    categoryCounts: {
      hooks: 7,
      insights: 9,
      opinions: 6,
      faqs: 5,
      quotes: 5,
      shortForm: 4,
    },
    opportunities: [
      {
        id: 'waste-skin-1',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        category: 'hook',
        timestamp: '00:00',
        snippet: 'Your skin barrier is not a kitchen counter.',
        opportunityTitle: 'The Kitchen Counter Analogy Reel',
        angle: 'Visceral pattern interrupt for visual video hook',
        potentialFormats: ['youtube_shorts', 'instagram'],
        potentialReachScore: 94,
        convertedToAsset: true,
      },
      {
        id: 'waste-skin-2',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        category: 'insight',
        timestamp: '01:22',
        snippet: 'Applying hyaluronic acid to bone-dry skin pulls moisture from deep layers.',
        opportunityTitle: 'The Humectant Paradox Breakdown',
        angle: 'Surprising science debunking improper serum usage',
        potentialFormats: ['twitter', 'blog', 'linkedin'],
        potentialReachScore: 91,
        convertedToAsset: false,
      },
      {
        id: 'waste-skin-3',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        category: 'opinion',
        timestamp: '03:20',
        snippet: 'Stop falling for 12-step marketing gimmicks. Simplicity beats complexity.',
        opportunityTitle: 'Anti-Consumerism Beauty Manifesto',
        angle: 'Provocative stance against cosmetic industry over-marketing',
        potentialFormats: ['twitter', 'newsletter', 'linkedin'],
        potentialReachScore: 89,
        convertedToAsset: false,
      },
      {
        id: 'waste-skin-4',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        category: 'faq',
        timestamp: '02:05',
        snippet: 'Over 80% of UVA rays penetrate clouds and standard window glass.',
        opportunityTitle: 'FAQ: Do I really need sunscreen inside my house?',
        angle: 'Direct scientific answering of common reader question',
        potentialFormats: ['instagram', 'youtube_shorts'],
        potentialReachScore: 88,
        convertedToAsset: false,
      },
      {
        id: 'waste-skin-5',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        category: 'quote',
        timestamp: '02:45',
        snippet: 'Cellular skin turnover takes 28 to 40 days. Give your barrier time to heal.',
        opportunityTitle: 'The 28-Day Patience Principle Quote Graphic',
        angle: 'Inspirational mindset graphic for Instagram and Twitter',
        potentialFormats: ['instagram', 'twitter'],
        potentialReachScore: 85,
        convertedToAsset: false,
      },
      {
        id: 'waste-skin-6',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        category: 'short_form',
        timestamp: '00:48',
        snippet: 'Layering seven active serums at once cancels out their efficacy and triggers micro-inflammation.',
        opportunityTitle: 'Active Ingredient Clash Short Demonstration',
        angle: 'Split screen showing conflicting bottles with red warning icon',
        potentialFormats: ['youtube_shorts', 'instagram'],
        potentialReachScore: 93,
        convertedToAsset: false,
      },
    ],
  },
  campaign: {
    id: 'campaign-skincare-001',
    sourceId: 'src-skincare-001',
    sessionId: 'session-skincare-demo',
    title: '7-Day Skin Barrier Reset Campaign',
    strategySummary: 'Coordinated distribution sequencing high-retention video hooks, saveable carousels, Twitter debunking threads, and deep SEO reference guides.',
    totalAssetsCount: 7,
    consistencyAvg: 96,
    avgPlatformFit: 90,
    schedule: [
      {
        id: 'day-1',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 1,
        dayName: 'Monday',
        dayOfWeek: 'Monday',
        platform: 'youtube_shorts',
        assetType: 'Pattern Interrupt Reel',
        title: 'Stop Scrubbing Your Face Like a Counter',
        hook: 'If your face feels tight after washing, STOP immediately.',
        content: 'Fast-paced vertical clip exposing the daily over-exfoliation trap with immediate visual pattern interrupt.',
        cta: 'Save this video and comment your cleanser below!',
        atomSourceId: 'atom-skin-1',
        platformFitScore: 94,
        platformAngle: 'High-velocity mistake countdown',
        transformationReason: 'Maximizes early-week algorithmic reach via short-form video momentum.',
        status: 'ready',
      },
      {
        id: 'day-2',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 2,
        dayName: 'Tuesday',
        dayOfWeek: 'Tuesday',
        platform: 'twitter',
        assetType: 'Contrarian Mega-Thread',
        title: 'The 12-Step Routine Marketing Scam',
        hook: 'The 12-step routine is designed to sell you products to fix damage caused by other products.',
        content: '7-tweet breakdown analyzing ingredient conflicts, dry hyaluronic acid mistakes, and 28-day turnover cycles.',
        cta: 'RT the top tweet to save a friend\'s skin barrier!',
        atomSourceId: 'atom-skin-2',
        platformFitScore: 88,
        platformAngle: 'Contrarian mythbusting thread',
        transformationReason: 'Fosters viral text sharing and bookmarking.',
        status: 'ready',
      },
      {
        id: 'day-3',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 3,
        dayName: 'Wednesday',
        dayOfWeek: 'Wednesday',
        platform: 'instagram',
        assetType: 'Educational Carousel',
        title: '5 Mistakes Making Your Skin Worse',
        hook: 'Your skin barrier is NOT a kitchen counter. (5-Slide Audit)',
        content: 'Visual 5-slide carousel with clean typographic hierarchy breaking down stripped barriers vs healthy lipids.',
        cta: 'Double-tap and save for your evening skincare routine!',
        atomSourceId: 'atom-skin-1',
        platformFitScore: 96,
        platformAngle: 'Saveable routine audit checklist',
        transformationReason: 'Instagram carousels generate the highest save-to-reach ratio in the beauty niche.',
        status: 'ready',
      },
      {
        id: 'day-4',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 4,
        dayName: 'Thursday',
        dayOfWeek: 'Thursday',
        platform: 'linkedin',
        assetType: 'Industry Strategy Post',
        title: 'The Beauty Industry\'s Over-Marketing Dilemma',
        hook: 'The average D2C beauty brand launches 14 SKUs a year. Here is why consumer fatigue is peaking.',
        content: 'Strategic case study analyzing consumer trust, SKU proliferation, and why minimalist transparency wins.',
        cta: 'What is your take on product bloat vs core essentials?',
        atomSourceId: 'atom-skin-6',
        platformFitScore: 74,
        platformAngle: 'Consumer psychology & brand trust moat',
        transformationReason: 'Grounded LinkedIn translation connecting skincare over-complication with brand strategy.',
        status: 'ready',
      },
      {
        id: 'day-5',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 5,
        dayName: 'Friday',
        dayOfWeek: 'Friday',
        platform: 'blog',
        assetType: 'Comprehensive SEO Guide',
        title: 'How to Repair a Damaged Skin Barrier in 30 Days',
        hook: 'Complete biological guide to stratum corneum restoration with ingredient matrices.',
        content: '1,800-word authoritative guide indexed for high-volume search queries with full markdown tables.',
        cta: 'Bookmark this guide and subscribe to our weekly research memo!',
        atomSourceId: 'atom-skin-3',
        platformFitScore: 95,
        platformAngle: 'Definitive evergreen reference masterclass',
        transformationReason: 'Captures permanent organic search traffic from search engines.',
        status: 'ready',
      },
      {
        id: 'day-6',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 6,
        dayName: 'Saturday',
        dayOfWeek: 'Saturday',
        platform: 'youtube',
        assetType: 'Long-Form Video Masterclass',
        title: 'The Science of Skin Barrier Damage & The 30-Day Fix',
        hook: 'Why 90% of acne and redness is actually self-inflicted barrier damage.',
        content: 'Deep chaptered video essay dissecting the lipid matrix, active clashing, and 3-step routine.',
        cta: 'Download the free 30-Day Skin Barrier PDF checklist below!',
        atomSourceId: 'atom-skin-3',
        platformFitScore: 92,
        platformAngle: 'Deep-dive authority video with chapters',
        transformationReason: 'Builds deep subscriber trust and evergreen search longevity on YouTube.',
        status: 'ready',
      },
      {
        id: 'day-7',
        sourceId: 'src-skincare-001',
        sessionId: 'session-skincare-demo',
        dayNumber: 7,
        dayName: 'Sunday',
        dayOfWeek: 'Sunday',
        platform: 'newsletter',
        assetType: 'Sunday Reset Memo',
        title: 'Time to Declutter Your Bathroom Cabinet',
        hook: 'Open your bathroom cabinet right now. We need to talk about those 6 serums.',
        content: 'Intimate, encouraging weekly letter inviting subscribers to join the 30-day minimalist skin challenge.',
        cta: 'Hit reply with the one product you are ditching tonight!',
        atomSourceId: 'atom-skin-6',
        platformFitScore: 93,
        platformAngle: 'Epistolary personal memo & audit challenge',
        transformationReason: 'Drives direct 1-on-1 replies and builds community intimacy.',
        status: 'ready',
      },
    ],
  },
  contentGraph: {
    nodes: [
      {
        id: 'node-source',
        label: 'Source: 5 Skincare Mistakes',
        type: 'source',
        details: '295 words • 03:45 duration • 5 core dermatological mistakes',
        childrenCount: 6,
      },
      {
        id: 'node-niche',
        label: 'Niche: Beauty & Skincare',
        type: 'niche',
        details: 'Consumer Education & Routine Simplification',
        parentId: 'node-source',
      },
      {
        id: 'node-atom-1',
        label: 'Atom: Kitchen Counter Scrubbing Metaphor',
        type: 'atom',
        category: 'hook',
        details: 'Tight squeaky clean feeling = stripped lipid barrier',
        score: 98,
        parentId: 'node-source',
      },
      {
        id: 'node-atom-2',
        label: 'Atom: Incompatible Active Clashes',
        type: 'atom',
        category: 'insight',
        details: 'Retinol + Vitamin C + Acids = Micro-inflammation',
        score: 96,
        parentId: 'node-source',
      },
      {
        id: 'node-intent-ig',
        label: 'Intent: Instagram (96% Fit)',
        type: 'intent',
        platform: 'instagram',
        details: 'Visual education & saveable checklist',
        parentId: 'node-atom-1',
      },
      {
        id: 'node-intent-li',
        label: 'Intent: LinkedIn (74% Fit)',
        type: 'intent',
        platform: 'linkedin',
        details: 'Consumer psychology & brand decision fatigue',
        parentId: 'node-atom-2',
      },
      {
        id: 'node-angle-li',
        label: 'Angle: Consumer Education in Saturated Markets',
        type: 'angle',
        platform: 'linkedin',
        details: 'Educate before selling; Simplicity as a moat',
        parentId: 'node-intent-li',
      },
      {
        id: 'node-asset-ig',
        label: 'Asset: 5-Slide Instagram Carousel',
        type: 'asset',
        platform: 'instagram',
        details: 'Visual swipeable routine audit',
        parentId: 'node-intent-ig',
      },
      {
        id: 'node-asset-li',
        label: 'Asset: LinkedIn Executive Strategy Post',
        type: 'asset',
        platform: 'linkedin',
        details: 'Brand trust & decision fatigue analysis',
        parentId: 'node-angle-li',
      },
      {
        id: 'node-camp',
        label: '7-Day Multi-Channel Campaign',
        type: 'campaign',
        details: 'Sequenced release wave across 7 high-fit channels',
        childrenCount: 7,
        parentId: 'node-source',
      },
    ],
  },
  overallMetrics: {
    contentOpportunities: 36,
    voiceMatch: 95,
    contentGenerated: 19,
    atomsDiscovered: 6,
    avgPlatformFit: 90,
    semanticConsistency: 96,
  },
};

// ==========================================
// 2. TECH / AI / SOFTWARE DEV DEMO
// ==========================================
export const SAMPLE_TECH_ANALYSIS: AnalysisResult = {
  id: 'analysis-tech-001',
  sourceId: 'src-tech-001',
  sessionId: 'session-tech-demo',
  sourceFingerprint: 'fp-tech-startup-90',
  modelName: 'gemini-3.7-flash',
  sourceTitle: 'Why 90% of AI Startups Will Die by 2026',
  sourceType: 'video',
  duration: '04:12',
  transcript: DEMO_TECH_TRANSCRIPT,
  wordCount: 248,
  isDemoSample: true,
  analyzedAt: '2026-08-16T10:00:00.000Z',
  canonicalSource: {
    id: 'src-tech-001',
    sessionId: 'session-tech-demo',
    sourceFingerprint: 'fp-tech-startup-90',
    title: 'Why 90% of AI Startups Will Die by 2026',
    transcript: DEMO_TECH_TRANSCRIPT,
    duration: '04:12',
    wordCount: 248,
    sourceType: 'video',
    isDemo: true,
    createdAt: '2026-08-16T10:00:00.000Z',
  },
  understanding: {
    sourceId: 'src-tech-001',
    sessionId: 'session-tech-demo',
    sourceFingerprint: 'fp-tech-startup-90',
    primaryTopic: 'AI Startup Defensibility and Context Curation Architecture',
    secondaryTopics: ['Thin OpenAI Wrappers', 'Domain-Specific Workflow Embedding', 'Enterprise Hallucination Liabilities', 'Prompt Waste Telemetry', 'Proprietary Data Loops'],
    niche: 'Technology & AI',
    secondaryNiche: 'Software Development & Startup Strategy',
    audience: 'Software engineers, AI founders, technical product managers, and venture operators building generative AI software',
    creatorType: 'AI Systems Architect & Technical Founder',
    contentIntent: [
      { intent: 'Industry Analysis', confidence: 97 },
      { intent: 'Contrarian Strategy', confidence: 93 },
      { intent: 'Systems Architecture', confidence: 89 },
      { intent: 'Executive Warning', confidence: 85 },
    ],
    primaryIntent: 'Contrarian Market Analysis & Systems Architecture',
    entities: ['OpenAI', 'Stripe', 'Silicon Valley', 'Peter Thiel', 'Grounding Engine', 'Hallucinations', 'Data Flywheels'],
    keyThemes: ['Thin wrappers failing by 2026', 'Context curation beating raw model size', 'Embedding into daily habits', 'Grounding against hallucinations as enterprise legal defense', '73% prompt reasoning waste'],
    coreThesis: 'Enduring AI companies are not built by fine-tuning foundation models, but by building domain-specific workflow embedding, deterministic grounding engines, and proprietary data flywheels.',
    claims: [
      '90% of AI startups launched this year will fail by 2026.',
      'Thin OpenAI wrapper apps lack long-term defensibility.',
      'Over 73% of enterprise prompts generate output creators only use 10% of.',
      'Enterprise hallucinations are legal liabilities requiring deterministic grounding.',
    ],
    sourceEvidence: [
      '90% of AI startups launched this year will be completely dead by 2026.',
      'If your entire business model is just a thin UI layer over an OpenAI wrapper, you do not have a company.',
      'Over 73% of enterprise prompts generate output that creators only use 10% of.',
    ],
    contentSummary: 'A brutal critique of superficial AI products and an architectural roadmap for building defensible data flywheels.',
  },
  groundingGate: {
    passed: true,
    groundingScore: 100,
    relevanceScore: 99,
    evidenceScore: 98,
    semanticScore: 99,
    verifiedAtomsCount: 6,
    verifiedAssetsCount: 7,
    domainContaminationDetected: false,
    reason: '100% of claims and topics are strictly grounded in AI engineering, startup strategy, and software architectures. No cosmetic/skincare bleed.',
  },
  nicheIntelligence: {
    primaryNiche: 'Technology & AI',
    secondaryNiche: 'Software Development & Startup Strategy',
    audience: 'Software engineers, AI founders, technical product managers, and venture operators',
    creatorType: 'AI Systems Architect & Technical Founder',
    contentIntents: [
      { intent: 'Industry Analysis', confidence: 97 },
      { intent: 'Contrarian Strategy', confidence: 93 },
      { intent: 'Systems Architecture', confidence: 89 },
    ],
    primaryIntent: 'Contrarian Market Analysis & Systems Architecture',
    nicheSummary: 'High-signal technical breakdown analyzing why shallow API wrappers collapse and how proprietary context curation creates true enterprise moats.',
  },
  platformIntents: [
    {
      id: 'intent-tech-li',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'linkedin',
      fitScore: 98,
      platformPurpose: 'Executive leadership, software architecture, competitive moats, venture capital insights',
      targetAudience: 'CTOs, VP Engineering, AI Founders, and Tech Investors',
      contentIntent: 'High-signal strategic architecture analysis',
      selectedAngle: 'Context Curation vs Foundation Models: The Real Moat in Enterprise AI',
      angle: 'Context Curation vs Foundation Models: The Real Moat in Enterprise AI',
      transformationReason: 'LinkedIn tech leaders crave structural analysis on why thin API wrappers churn and how enterprise buyers evaluate data grounding.',
      sourceAtomIds: ['atom-tech-1', 'atom-tech-2', 'atom-tech-3'],
      shouldPublish: true,
      fitPros: ['Extremely high resonance with technical leaders', 'Direct alignment with enterprise software buying decisions', 'Establishes technical thought leadership'],
      fitCons: ['Must maintain architectural precision without generic buzzwords'],
      recommendation: 'Publish as a 400-word executive architectural memo with bulleted moat criteria.',
      nativeFormatRecommended: 'Executive Whitepaper Breakdown Post',
      coreHookSnippet: 'Silicon Valley is funding thousands of AI startups that will not exist in 24 months. Here is the architectural flaw in their moats:',
    },
    {
      id: 'intent-tech-tw',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'twitter',
      fitScore: 97,
      platformPurpose: 'Contrarian tech hot-takes, architectural frameworks, developer debate, viral bookmarking',
      targetAudience: 'Full-stack developers, indie hackers, and AI builders on Tech Twitter',
      contentIntent: 'Contrarian teardown & survival blueprint',
      selectedAngle: '90% of AI startups are weekend projects with Stripe checkouts (Architectural Teardown)',
      angle: '90% of AI startups are weekend projects with Stripe checkouts (Architectural Teardown)',
      transformationReason: 'Tech Twitter rewards sharp contrarian realism exposing vanity AI projects.',
      sourceAtomIds: ['atom-tech-1', 'atom-tech-4', 'atom-tech-5'],
      shouldPublish: true,
      fitPros: ['Massive retweet potential in developer communities', 'High bookmark rate for the 3-layer architecture', 'Drives immediate technical discussion'],
      fitCons: ['Expect defensive comments from wrapper founders'],
      recommendation: 'Post an 8-tweet technical thread breaking down the 3-layer architecture.',
      nativeFormatRecommended: 'Numbered 8-Tweet System Breakdown',
      coreHookSnippet: 'If your entire AI startup is a prompt template + an OpenAI key + a Stripe checkout, you don\'t have a company. You have a weekend project with a subscription fee. 🧵',
    },
    {
      id: 'intent-tech-yt',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'youtube',
      fitScore: 94,
      platformPurpose: 'Evergreen technical breakdown, systems diagramming, startup post-mortem analysis',
      targetAudience: 'Software engineers learning AI system design and founders planning their architecture',
      contentIntent: 'Technical system design masterclass',
      selectedAngle: 'System Design for Enduring AI: Building Grounding Engines & Data Flywheels',
      angle: 'System Design for Enduring AI: Building Grounding Engines & Data Flywheels',
      transformationReason: 'Developers search for real architectural patterns to prevent hallucinations and retain enterprise users.',
      sourceAtomIds: ['atom-tech-2', 'atom-tech-3'],
      shouldPublish: true,
      fitPros: ['Evergreen search for "AI startup architecture"', 'Builds deep technical authority', 'Allows system architecture diagrams on screen'],
      fitCons: ['Requires whiteboard/diagram visualizations'],
      recommendation: 'Produce a 14-minute system architecture walkthrough with architectural flowcharts.',
      nativeFormatRecommended: '16:9 Technical Video Essay with Architecture Diagrams',
      coreHookSnippet: 'Why context curation beats raw parameter count every single time in production.',
    },
    {
      id: 'intent-tech-shorts',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'youtube_shorts',
      fitScore: 91,
      platformPurpose: 'Punchy 1-second retention hook, provocative reality check for indie hackers',
      targetAudience: 'Aspiring founders and developers scrolling tech Shorts',
      contentIntent: 'Provocative truth bomb & reality check',
      selectedAngle: 'The brutal truth about 90% of AI startups right now',
      angle: 'The brutal truth about 90% of AI startups right now',
      transformationReason: 'Instant pattern interrupt challenging the prevailing AI hype cycle.',
      sourceAtomIds: ['atom-tech-1'],
      shouldPublish: true,
      fitPros: ['Immediate viral retention', 'High comment debate'],
      fitCons: ['Too short for deep code walkthroughs'],
      recommendation: 'High-contrast talking head with dramatic captions.',
      nativeFormatRecommended: 'Vertical 9:16 Reality Check (40s)',
      coreHookSnippet: 'Here is the brutal truth nobody in tech wants to admit: 90% of AI startups are dead by 2026.',
    },
    {
      id: 'intent-tech-blog',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'blog',
      fitScore: 95,
      platformPurpose: 'Authoritative technical blog, architectural blueprints, enterprise software evaluation',
      targetAudience: 'Engineering managers and technical founders looking for reference architectures',
      contentIntent: 'Definitive technical architecture guide',
      selectedAngle: 'The 3-Layer AI Architecture: How to Build Defensible Products in 2026',
      angle: 'The 3-Layer AI Architecture: How to Build Defensible Products in 2026',
      transformationReason: 'Long-form engineering blogs establish permanent organic authority in tech communities.',
      sourceAtomIds: ['atom-tech-2', 'atom-tech-3', 'atom-tech-4'],
      shouldPublish: true,
      fitPros: ['Ranks for technical keywords like "AI grounding engine design"', 'Provides clear code and data flow diagrams'],
      fitCons: ['Must maintain high technical depth'],
      recommendation: 'Publish a 2,000-word architecture breakdown with data pipeline diagrams.',
      nativeFormatRecommended: 'Technical Engineering Whitepaper',
      coreHookSnippet: 'The 3-Layer Architecture Every Enduring AI Product Must Implement',
    },
    {
      id: 'intent-tech-news',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'newsletter',
      fitScore: 93,
      platformPurpose: 'Insider engineering memo, tactical weekly teardown of software moats',
      targetAudience: 'Founders, senior engineers, and technical investors',
      contentIntent: 'Strategic engineering memo',
      selectedAngle: 'The 73% Telemetry Waste Metric & How We Fix It',
      angle: 'The 73% Telemetry Waste Metric & How We Fix It',
      transformationReason: 'Subscribers value insider telemetry data and real system takeaways.',
      sourceAtomIds: ['atom-tech-3', 'atom-tech-5'],
      shouldPublish: true,
      fitPros: ['High click-through on technical deep dives', 'Shares unique proprietary insights'],
      fitCons: ['Requires clear data visualization'],
      recommendation: 'Send as a weekly Sunday technical architecture memo.',
      nativeFormatRecommended: 'Technical Dispatch & Systems Audit',
      coreHookSnippet: 'Why 73% of enterprise AI reasoning is thrown into the waste bin—and the pipeline we built to rescue it.',
    },
    {
      id: 'intent-tech-ig',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'instagram',
      fitScore: 82,
      platformPurpose: 'Visual slide summaries for tech founders and young software developers',
      targetAudience: 'Designers, indie builders, and tech enthusiasts',
      contentIntent: 'Visual system design carousel',
      selectedAngle: 'Why AI Wrappers Fail: 5 Architecture Slides',
      angle: 'Why AI Wrappers Fail: 5 Architecture Slides',
      transformationReason: 'Visual breakdowns of software architecture and startup economics perform surprisingly well with tech builders on Instagram.',
      sourceAtomIds: ['atom-tech-1', 'atom-tech-2'],
      shouldPublish: true,
      fitPros: ['High save rate for system design diagrams', 'Clean visual contrast'],
      fitCons: ['Audience is less deeply technical than Twitter or GitHub'],
      recommendation: '5-slide dark mode system design carousel.',
      nativeFormatRecommended: 'Dark-Mode Technical Carousel',
      coreHookSnippet: 'Why 90% of AI Startups Will Die by 2026 (Swipe for the 3-Layer Moat) 🤖',
    },
  ],
  atoms: [
    {
      id: 'atom-tech-1',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      category: 'hook',
      timestamp: '00:00',
      timestampSeconds: 0,
      text: '90% of AI startups launched this year will be completely dead by 2026. A thin UI layer over OpenAI is a weekend project with a Stripe checkout, not a company.',
      evidence: '90% of AI startups launched this year will be completely dead by 2026. If your entire business model is just a thin UI layer over an OpenAI wrapper, you do not have a company.',
      importanceScore: 99,
      reason: 'Visceral contrarian opener dismantling the shallow AI wrapper gold rush.',
      suggestedPlatform: 'twitter',
      derivedIdeas: ['Wrapper vs Defensible Moat breakdown', 'Startup mortality analysis'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-tech-2',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      category: 'insight',
      timestamp: '01:02',
      timestampSeconds: 62,
      text: 'The 3-layer architecture for enduring AI products: 1) Domain-Specific Workflows, 2) Grounding Engine (verifying against source truth), 3) Proprietary Data Flywheels.',
      evidence: 'Let me break down the 3-layer architecture every enduring AI product must build: First, Domain-Specific Workflows... Second is the Grounding Engine... Third, Proprietary Data Flywheels.',
      importanceScore: 98,
      reason: 'Core architectural framework that provides actionable blueprint for builders.',
      suggestedPlatform: 'linkedin',
      derivedIdeas: ['System architecture diagram', 'Grounding engine technical spec'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-tech-3',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      category: 'surprising',
      timestamp: '02:13',
      timestampSeconds: 133,
      text: 'Over 73% of enterprise prompts generate output that creators only use 10% of. 90% of valuable AI reasoning is thrown into the waste bin.',
      evidence: 'over 73% of enterprise prompts generate output that creators only use 10% of. Think about that: 90% of valuable AI reasoning is thrown into the waste bin.',
      importanceScore: 96,
      reason: 'Empirical telemetry metric proving the massive content waste epidemic in generative software.',
      suggestedPlatform: 'blog',
      derivedIdeas: ['Content waste recovery metrics', 'Zero-waste pipeline case study'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-tech-4',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      category: 'quote',
      timestamp: '02:41',
      timestampSeconds: 161,
      text: 'Peter Thiel: "Competition is for losers." In the AI era, speed without distribution and proprietary context loops is suicide.',
      evidence: 'As Peter Thiel famously said, \'Competition is for losers.\' In the AI era, speed without distribution is suicide.',
      importanceScore: 92,
      reason: 'Authoritative venture philosophy reframing AI competition away from model size toward distribution loops.',
      suggestedPlatform: 'twitter',
      derivedIdeas: ['Distribution loop analysis', 'Why foundation models commoditize wrappers'],
      isUsedInCampaign: true,
    },
    {
      id: 'atom-tech-5',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      category: 'cta',
      timestamp: '03:50',
      timestampSeconds: 230,
      text: 'Stop asking "What model should I fine-tune?" and start building systems that turn one high-signal input into a self-reinforcing distribution loop.',
      evidence: 'If you want to survive the 2026 AI reckoning, build systems that turn one single high-signal input into a self-reinforcing content and distribution loop. That is the entire game.',
      importanceScore: 97,
      reason: 'Clear prescriptive paradigm shift redirecting builders toward workflow compilers.',
      suggestedPlatform: 'newsletter',
      derivedIdeas: ['Self-reinforcing loop blueprint', 'The 2026 survival checklist'],
      isUsedInCampaign: true,
    },
  ],
  creatorDna: {
    sourceId: 'src-tech-001',
    sessionId: 'session-tech-demo',
    tone: 'Uncompromising, technical, contrarian, systems-oriented, high-signal',
    vocabulary: 'Silicon Valley systems engineering and venture terminology (data flywheels, context curation, grounding engines, telemetry, wrappers, churn)',
    sentenceLength: 'Direct declarative thesis statements paired with rigorous 3-tier architectural logic',
    technicalLevel: 'Advanced system architecture and product strategy',
    humorLevel: 'Sardonic debunking of superficial wrapper startups',
    emotionalStyle: 'Urgent, high-stakes wake-up call to founders and engineers',
    ctaStyle: 'Challenging builders to ditch lazy prompt wrappers for deep workflow compiler architectures',
    preferredHooks: [
      'Look, here is the brutal truth nobody in Silicon Valley wants to admit:',
      'If your entire business model is just [shallow pattern], you do not have a company.',
      'Stop asking [naive question] and start asking [strategic question].',
    ],
    recurringThemes: [
      'Why context curation beats raw model parameter size',
      'The death of thin OpenAI wrappers',
      'Hallucinations as legal liabilities requiring deterministic grounding',
      'Telemetry data waste in enterprise workflows',
    ],
    communicationPatterns: [
      'Brutal reality check on industry bubble',
      'Breakdown of architectural requirements (3 layers)',
      'Empirical telemetry evidence (73% prompt waste)',
    ],
    scores: {
      toneMatch: 98,
      vocabularyMatch: 97,
      styleMatch: 98,
      audienceAlignment: 98,
      brandConsistency: 97,
      voiceMatchScore: 97,
      technicalStyle: 98,
      ctaStyle: 95,
    },
    reasoningWhyMatches: 'Captures the authoritative, direct, and architectural voice of an experienced AI systems founder analyzing market bubbles.',
    sourceEvidence: [
      'If your entire business model is just a thin UI layer over an OpenAI wrapper, you do not have a company.',
      'build systems that turn one single high-signal input into a self-reinforcing content and distribution loop.',
    ],
  },
  platformAssets: [
    {
      id: 'asset-tech-li',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'linkedin',
      platformIntentId: 'intent-tech-li',
      sourceAtomId: 'atom-tech-2',
      fitScore: 98,
      selectedAngle: 'Context Curation vs Foundation Models: The Real Moat in Enterprise AI',
      title: 'Why 90% of AI Startups Will Die by 2026: An Architecture Post-Mortem',
      hook: 'Silicon Valley is currently funding thousands of AI products that have zero defensibility. Here is the architectural reason why:',
      body: `If an AI startup's core product is simply a prompting layer on top of a commoditized foundation model API, it does not have a moat. It has a feature waiting to be absorbed.

To build an enduring enterprise software product in 2026, engineering teams must implement a **3-Layer Moat Architecture**:

1. **Deep Workflow Embedding**:
If you aren't embedded directly into the daily operational habits of the user, you will be replaced the instant a foundation model provider drops an incremental API update.

2. **Deterministic Grounding Engines**:
In enterprise production, hallucinations are not benign UX bugs—they are critical legal and compliance liabilities. Systems must cross-verify generated assets against canonical source truths before rendering.

3. **Proprietary Context Loops & Waste Recovery**:
Our internal telemetry indicates that **over 73% of enterprise prompts generate output creators use less than 10% of**. The remaining 90% of reasoning is discarded. Systems that capture, index, and repurpose this latent signal build insurmountable data flywheels.

Stop asking *"Which model should we fine-tune?"*
Start asking *"What proprietary context curation loop are we feeding every single day?"*

How is your engineering team approaching the AI moat question this quarter?`,
      cta: 'Join the conversation in the comments: What is your primary defense against foundation model commoditization?',
      consistencyScore: 99,
      consistencyReasoning: 'Strictly derived from the source transcript principles of context curation and grounding engines.',
      claims: [
        {
          id: 'claim-tech-1',
          sourceId: 'src-tech-001',
          text: 'Over 73% of enterprise prompts generate output that creators only use 10% of.',
          supportedBySource: true,
          sourceQuote: 'over 73% of enterprise prompts generate output that creators only use 10% of.',
          confidenceScore: 99,
          riskLevel: 'safe',
          explanation: 'Grounded directly in telemetry statistic cited in the transcript.',
          suggestedSafeWording: 'Over 73% of enterprise prompts generate output creators use only 10% of.',
          status: 'verified',
        },
        {
          id: 'claim-tech-2',
          sourceId: 'src-tech-001',
          text: '90% of AI startups launched this year will fail by 2026.',
          supportedBySource: true,
          sourceQuote: '90% of AI startups launched this year will be completely dead by 2026.',
          confidenceScore: 97,
          riskLevel: 'safe',
          explanation: 'Directly supported by the opening thesis of the source.',
          suggestedSafeWording: 'Market projections suggest 90% of thin AI startups will fail by 2026.',
          status: 'verified',
        },
      ],
      status: 'verified',
    },
    {
      id: 'asset-tech-tw',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'twitter',
      platformIntentId: 'intent-tech-tw',
      sourceAtomId: 'atom-tech-1',
      fitScore: 97,
      selectedAngle: '90% of AI startups are weekend projects with Stripe checkouts (Architectural Teardown)',
      hook: '90% of AI startups launched this year will be completely dead by 2026. Here is why the wrapper gold rush is ending: 🧵',
      body: `1/8 90% of AI startups launched this year will be completely dead by 2026. Here is why the wrapper gold rush is ending: 🧵

2/8 If your entire business is: Prompt Template + OpenAI API + Next.js UI + Stripe Checkout, you do NOT have a company. You have a weekend project with a recurring fee.

3/8 The winners of the next decade won't be training the biggest models. They will be the ones who master Context Curation and proprietary data flywheels.

4/8 Here is the 3-Layer Architecture you MUST build to survive:
Layer 1: Domain-Specific Workflow Embedding. If you aren't inside their daily muscle memory, you churn immediately.

5/8 Layer 2: The Grounding Engine. Hallucinations in enterprise aren't just bugs—they are legal liabilities. Your system must deterministically verify outputs against source truth.

6/8 Layer 3: Waste Recovery. Telemetry shows over 73% of enterprise prompts generate outputs where 90% of the reasoning is thrown in the trash. Compilers that rescue this waste win.

7/8 As Peter Thiel said: "Competition is for losers." Speed without distribution and proprietary context loops is suicide.

8/8 Stop asking what model to fine-tune. Build systems that turn ONE high-signal input into a self-reinforcing distribution engine. That is the entire game.`,
      cta: 'Retweet the first tweet if you are building real AI infrastructure instead of shallow wrappers! 🔄',
      threadTweets: [
        '90% of AI startups launched this year will be completely dead by 2026. Here is why the wrapper gold rush is ending: 🧵',
        'If your entire business is: Prompt Template + OpenAI API + Next.js UI + Stripe Checkout, you do NOT have a company. You have a weekend project with a recurring fee.',
        'The winners of the next decade won\'t be training the biggest models. They will be the ones who master Context Curation and proprietary data flywheels.',
        'Here is the 3-Layer Architecture you MUST build to survive:\nLayer 1: Domain-Specific Workflow Embedding. If you aren\'t inside their daily muscle memory, you churn immediately.',
        'Layer 2: The Grounding Engine. Hallucinations in enterprise aren\'t just bugs—they are legal liabilities. Your system must deterministically verify outputs against source truth.',
        'Layer 3: Waste Recovery. Telemetry shows over 73% of enterprise prompts generate outputs where 90% of the reasoning is thrown in the trash. Compilers that rescue this waste win.',
        'As Peter Thiel said: "Competition is for losers." Speed without distribution and proprietary context loops is suicide.',
        'Stop asking what model to fine-tune. Build systems that turn ONE high-signal input into a self-reinforcing distribution engine. That is the entire game.',
      ],
      consistencyScore: 98,
      consistencyReasoning: 'Exact translation of transcript themes into high-velocity Twitter format.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-tech-shorts',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'youtube_shorts',
      platformIntentId: 'intent-tech-shorts',
      sourceAtomId: 'atom-tech-1',
      fitScore: 91,
      selectedAngle: 'The brutal truth about 90% of AI startups right now',
      title: '90% of AI Startups Will Die by 2026 💀',
      hook: 'Nobody in Silicon Valley wants to admit this, but 90% of AI startups are dead by 2026.',
      body: `[0:00 - 0:10] Nobody in Silicon Valley wants to admit this: 90% of AI startups launched this year will be dead by 2026.

[0:10 - 0:25] If your entire product is just a React UI on top of an OpenAI API key, you don't have a company. You have a weekend project with a Stripe button!

[0:25 - 0:45] The real winners aren't training bigger models. They are building Grounding Engines and proprietary data flywheels. Stop building wrappers. Start building compilers. Subscribe for the full architecture!`,
      cta: 'Subscribe for unfiltered AI architecture breakdowns! 🔔',
      clipTimestamp: '00:00 - 00:45',
      consistencyScore: 97,
      consistencyReasoning: 'Punchy verbatim extracts from source transcript opening.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-tech-yt',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'youtube',
      platformIntentId: 'intent-tech-yt',
      sourceAtomId: 'atom-tech-2',
      fitScore: 94,
      selectedAngle: 'System Design for Enduring AI: Building Grounding Engines & Data Flywheels',
      title: 'Why 90% of AI Startups Will Collapse (System Design Breakdown)',
      hook: 'How to build defensible generative AI systems that survive model commoditization.',
      body: `### Video Chapters:
00:00 - The 2026 AI Startup Reckoning
02:15 - The Thin Wrapper Fallacy (Why UI Layers Get Disintermediated)
05:30 - Layer 1: Deep Workflow Integration & Habit Embedding
08:45 - Layer 2: Deterministic Grounding Engines (Preventing Enterprise Liability)
11:20 - Layer 3: The 73% Telemetry Waste Problem & Content Compilers
13:50 - Peter Thiel's "Competition is for Losers" Applied to Generative AI

### Video Description:
In this deep-dive system design video, we break down why superficial OpenAI wrappers are experiencing massive customer churn, and how technical founders can design proprietary context curation loops.`,
      cta: 'Subscribe and download our complete 3-Layer System Design PDF in the description below!',
      consistencyScore: 96,
      consistencyReasoning: 'Full technical video outline structured directly around the transcript arguments.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-tech-blog',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'blog',
      platformIntentId: 'intent-tech-blog',
      sourceAtomId: 'atom-tech-2',
      fitScore: 95,
      selectedAngle: 'The 3-Layer AI Architecture: How to Build Defensible Products in 2026',
      title: 'The 3-Layer AI Architecture: Surviving the 2026 Generative Software Reckoning',
      hook: 'Why context curation, deterministic verification, and workflow compilers will outlast raw model parameter scaling.',
      body: `## The Commoditization of the Prompt Wrapper

The generative AI ecosystem has reached a critical inflection point. The initial novelty of wrapping an LLM endpoint in a sleek web application has completely evaporated.

Enterprise customers are demanding three things that raw foundation models cannot deliver out of the box:

1. **Workflow Integration**
2. **Deterministic Grounding**
3. **Zero Waste Data Pipelines**

---

## The 3-Layer Architecture

### 1. Domain-Specific Workflow Embedding
Software must embed into the user's daily muscle memory. If the AI is merely an external chat interface, switching costs remain zero.

### 2. The Deterministic Grounding Engine
Enterprise hallucinations represent legal and financial liabilities. A production AI compiler must cross-verify all assertions against immutable source truths.

### 3. The 73% Waste Recovery Engine
Telemetry indicates that over 73% of enterprise prompts generate output where 90% of the reasoning is discarded. Compilers that transform one source into seven native distribution assets create self-reinforcing flywheels.`,
      blogOutline: [
        'The Commoditization of the Prompt Wrapper',
        'Layer 1: Domain-Specific Workflow Embedding',
        'Layer 2: Grounding Engines and Verification Gates',
        'Layer 3: The 73% Telemetry Waste Metric and Content Compilers',
        'Conclusion: Building Compilers, Not Wrappers',
      ],
      consistencyScore: 98,
      consistencyReasoning: 'Authoritative whitepaper format reflecting source transcript architecture.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-tech-news',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'newsletter',
      platformIntentId: 'intent-tech-news',
      sourceAtomId: 'atom-tech-3',
      fitScore: 93,
      selectedAngle: 'The 73% Telemetry Waste Metric & How We Fix It',
      title: 'Systems Dispatch #18: The 73% AI Telemetry Waste Problem',
      hook: 'We reviewed our internal AI telemetry last week. What we found shocked our entire engineering team.',
      body: `Hey builders,

Last week, our engineering team audited internal telemetry across enterprise AI workflows.

The result: **Over 73% of prompts generate rich reasoning where the user only utilizes 10% of the final output.**

Think about the sheer scale of that waste: 90% of valuable AI synthesis is generated, paid for in tokens, and immediately discarded into the void.

This is why we stopped building single-turn generative tools and started building **deterministic content compilers**.

When you input one high-signal source, the system shouldn't just write a single tweet. It should:
1. Extract all underlying atomic truths
2. Calibrate creator DNA
3. Map platform intent across 7 channels
4. Verify every single claim against the source

Stop throwing 90% of your AI reasoning in the trash.

Build systems that compound.

— The Architecture Desk`,
      newsletterPreview: 'Why 73% of enterprise AI reasoning is wasted, and how compilers turn one input into 7 verified channels.',
      consistencyScore: 97,
      consistencyReasoning: 'Grounded newsletter dispatch focusing on the 73% telemetry statistic from the source.',
      claims: [],
      status: 'verified',
    },
    {
      id: 'asset-tech-ig',
      sourceId: 'src-tech-001',
      sessionId: 'session-tech-demo',
      platform: 'instagram',
      platformIntentId: 'intent-tech-ig',
      sourceAtomId: 'atom-tech-1',
      fitScore: 82,
      selectedAngle: 'Why AI Wrappers Fail: 5 Architecture Slides',
      title: 'Why 90% of AI Startups Will Die by 2026 (Swipe for the 3-Layer Moat)',
      hook: 'If your business is just an OpenAI wrapper, you have a weekend project with a Stripe button. 💀',
      body: `### SLIDE 1 (Cover):
Why 90% of AI Startups Will Die by 2026. 📉
(And the 3-Layer Architecture you need to survive).

---

### SLIDE 2: The Wrapper Trap
Prompt + API Key + UI = Zero Moat. The moment OpenAI updates their interface, your startup is obsolete.

---

### SLIDE 3: Layer 1 — Workflow Embedding
Build inside daily habits. If switching costs are low, churn is guaranteed.

---

### SLIDE 4: Layer 2 — Grounding Engine
Hallucinations are legal liabilities in enterprise. Verify everything against source truth.

---

### SLIDE 5: Layer 3 — Data Flywheels
Turn 1 high-signal input into 7 verified assets. Stop discarding 90% of your AI reasoning.

Save this for your next system design review! 📌`,
      cta: 'Save this post if you are building defensible AI software in 2026! 👇',
      tags: ['startups', 'artificialintelligence', 'systemdesign', 'softwareengineering', 'techstartups'],
      hashtags: ['#AIStartups', '#SystemDesign', '#TechFounders', '#SoftwareArchitecture', '#GenerativeAI'],
      consistencyScore: 95,
      consistencyReasoning: 'Translates technical 3-layer architecture into visual slide format.',
      claims: [],
      status: 'verified',
    },
  ],
  wasteReport: {
    totalOpportunities: 36,
    categoryCounts: {
      hooks: 8,
      insights: 10,
      opinions: 7,
      faqs: 4,
      quotes: 4,
      shortForm: 3,
    },
    opportunities: [
      {
        id: 'waste-tech-1',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        category: 'hook',
        timestamp: '00:18',
        snippet: 'A thin UI layer over an OpenAI wrapper is a weekend project with a Stripe checkout, not a company.',
        opportunityTitle: 'The Weekend Project with Stripe Checkout Hook',
        angle: 'Brutal pattern interrupt for technical founders',
        potentialFormats: ['twitter', 'youtube_shorts'],
        potentialReachScore: 97,
        convertedToAsset: true,
      },
      {
        id: 'waste-tech-2',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        category: 'insight',
        timestamp: '02:13',
        snippet: 'Over 73% of enterprise prompts generate output that creators only use 10% of.',
        opportunityTitle: 'The 73% Telemetry Waste Metric Deep Dive',
        angle: 'Data-driven analysis of token inefficiency in enterprise software',
        potentialFormats: ['linkedin', 'blog', 'newsletter'],
        potentialReachScore: 94,
        convertedToAsset: false,
      },
      {
        id: 'waste-tech-3',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        category: 'opinion',
        timestamp: '00:45',
        snippet: 'The companies that will dominate aren\'t the ones training the biggest models, but the ones who master context curation.',
        opportunityTitle: 'Context Curation vs Parameter Scale Manifesto',
        angle: 'Contrarian architecture take challenging model fine-tuning obsession',
        potentialFormats: ['twitter', 'linkedin'],
        potentialReachScore: 95,
        convertedToAsset: false,
      },
      {
        id: 'waste-tech-4',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        category: 'faq',
        timestamp: '01:46',
        snippet: 'Hallucinations aren\'t just bugs; in enterprise, they are legal liabilities.',
        opportunityTitle: 'FAQ: How do enterprises legally protect against LLM hallucinations?',
        angle: 'Enterprise compliance explanation of deterministic grounding engines',
        potentialFormats: ['linkedin', 'blog'],
        potentialReachScore: 89,
        convertedToAsset: false,
      },
      {
        id: 'waste-tech-5',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        category: 'quote',
        timestamp: '02:41',
        snippet: 'Peter Thiel: "Competition is for losers." In the AI era, speed without distribution is suicide.',
        opportunityTitle: 'The Thiel AI Distribution Principle Quote Graphic',
        angle: 'Venture capital strategy quote graphic',
        potentialFormats: ['twitter', 'instagram'],
        potentialReachScore: 91,
        convertedToAsset: false,
      },
      {
        id: 'waste-tech-6',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        category: 'short_form',
        timestamp: '03:15',
        snippet: 'Stop asking "What model should I fine-tune?" and start asking "What unique proprietary data loop am I feeding every single day?"',
        opportunityTitle: 'The Question Every AI Founder Must Answer Reel',
        angle: 'High-energy reality check for technical founders',
        potentialFormats: ['youtube_shorts', 'instagram'],
        potentialReachScore: 93,
        convertedToAsset: false,
      },
    ],
  },
  campaign: {
    id: 'campaign-tech-001',
    sourceId: 'src-tech-001',
    sessionId: 'session-tech-demo',
    title: '7-Day AI Moat & Systems Strategy Campaign',
    strategySummary: 'Sequenced technical distribution wave designed to establish authority among engineering leaders, venture investors, and software developers.',
    totalAssetsCount: 7,
    consistencyAvg: 97,
    avgPlatformFit: 93,
    schedule: [
      {
        id: 'tech-day-1',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 1,
        dayName: 'Monday',
        dayOfWeek: 'Monday',
        platform: 'twitter',
        assetType: 'Contrarian Mega-Thread',
        title: 'Why 90% of AI Startups Will Die by 2026',
        hook: '90% of AI startups launched this year will be dead by 2026. Here is why the wrapper gold rush is ending: 🧵',
        content: '8-tweet breakdown analyzing thin UI wrappers, 3-layer moats, and the 73% prompt waste metric.',
        cta: 'Retweet to save a fellow founder from building a wrapper!',
        atomSourceId: 'atom-tech-1',
        platformFitScore: 97,
        platformAngle: 'High-velocity contrarian teardown',
        transformationReason: 'Maximizes early-week viral debate on Tech Twitter.',
        status: 'ready',
      },
      {
        id: 'tech-day-2',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 2,
        dayName: 'Tuesday',
        dayOfWeek: 'Tuesday',
        platform: 'linkedin',
        assetType: 'Executive Architectural Memo',
        title: 'Context Curation vs Foundation Models',
        hook: 'Silicon Valley is funding thousands of AI products with zero moats. Here is the architectural flaw:',
        content: '400-word strategic whitepaper breakdown on workflow embedding, grounding engines, and data flywheels.',
        cta: 'How is your engineering team approaching the AI moat question?',
        atomSourceId: 'atom-tech-2',
        platformFitScore: 98,
        platformAngle: 'Executive enterprise software moat analysis',
        transformationReason: 'Drives engagement with CTOs, VP Engineering, and tech investors.',
        status: 'ready',
      },
      {
        id: 'tech-day-3',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 3,
        dayName: 'Wednesday',
        dayOfWeek: 'Wednesday',
        platform: 'youtube_shorts',
        assetType: 'Reality Check Reel',
        title: '90% of AI Startups Are Dead by 2026',
        hook: 'Nobody in tech wants to admit this: 90% of AI startups are dead by 2026.',
        content: '45-second high-energy reality check dismantling the shallow wrapper illusion.',
        cta: 'Subscribe for the full architectural system design!',
        atomSourceId: 'atom-tech-1',
        platformFitScore: 91,
        platformAngle: 'Urgent pattern interrupt reality check',
        transformationReason: 'Drives rapid video discovery and subscriber growth.',
        status: 'ready',
      },
      {
        id: 'tech-day-4',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 4,
        dayName: 'Thursday',
        dayOfWeek: 'Thursday',
        platform: 'blog',
        assetType: 'Technical Architecture Guide',
        title: 'The 3-Layer AI Architecture',
        hook: 'The definitive architectural guide to building defensible generative software in 2026.',
        content: '2,000-word technical whitepaper covering workflow embedding, grounding engines, and compiler pipelines.',
        cta: 'Bookmark this architecture blueprint for your next engineering review!',
        atomSourceId: 'atom-tech-2',
        platformFitScore: 95,
        platformAngle: 'Authoritative system design whitepaper',
        transformationReason: 'Builds permanent organic search authority in developer search rankings.',
        status: 'ready',
      },
      {
        id: 'tech-day-5',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 5,
        dayName: 'Friday',
        dayOfWeek: 'Friday',
        platform: 'instagram',
        assetType: 'System Design Carousel',
        title: 'Why AI Wrappers Fail (5 Slides)',
        hook: 'Why 90% of AI Startups Will Die by 2026 (Swipe for the 3-Layer Moat) 📉',
        content: '5-slide dark mode system design carousel illustrating the 3-layer architecture and waste recovery.',
        cta: 'Save this post for your next architecture review! 📌',
        atomSourceId: 'atom-tech-1',
        platformFitScore: 82,
        platformAngle: 'Visual system design carousel',
        transformationReason: 'High save rate among visual builders and junior software engineers.',
        status: 'ready',
      },
      {
        id: 'tech-day-6',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 6,
        dayName: 'Saturday',
        dayOfWeek: 'Saturday',
        platform: 'youtube',
        assetType: 'Technical Video Essay',
        title: 'Why 90% of AI Startups Will Collapse (System Design)',
        hook: 'How to design generative software that survives foundation model commoditization.',
        content: '14-minute architecture walkthrough with whiteboard diagrams explaining grounding engines and content compilers.',
        cta: 'Download the free 3-Layer System Design PDF below!',
        atomSourceId: 'atom-tech-2',
        platformFitScore: 94,
        platformAngle: 'Comprehensive system design walkthrough',
        transformationReason: 'Long-term search authority and subscriber compounding.',
        status: 'ready',
      },
      {
        id: 'tech-day-7',
        sourceId: 'src-tech-001',
        sessionId: 'session-tech-demo',
        dayNumber: 7,
        dayName: 'Sunday',
        dayOfWeek: 'Sunday',
        platform: 'newsletter',
        assetType: 'Systems Dispatch Memo',
        title: 'The 73% AI Telemetry Waste Problem',
        hook: 'We audited our internal telemetry. 73% of AI reasoning is thrown in the trash.',
        content: 'Weekly technical memo dissecting prompt waste, compiler pipelines, and compounding distribution flywheels.',
        cta: 'Hit reply: What is your primary defense against model commoditization?',
        atomSourceId: 'atom-tech-3',
        platformFitScore: 93,
        platformAngle: 'Insider technical telemetry memo',
        transformationReason: 'Fosters high-signal 1-on-1 replies with technical leaders.',
        status: 'ready',
      },
    ],
  },
  contentGraph: {
    nodes: [
      {
        id: 'node-tech-source',
        label: 'Source: AI Startups 2026',
        type: 'source',
        details: '248 words • 04:12 duration • 3-layer architecture & 73% waste metric',
        childrenCount: 5,
      },
      {
        id: 'node-tech-niche',
        label: 'Niche: Technology & AI',
        type: 'niche',
        details: 'Software Development & Startup Strategy',
        parentId: 'node-tech-source',
      },
      {
        id: 'node-tech-atom-1',
        label: 'Atom: 90% Mortality of Wrapper Startups',
        type: 'atom',
        category: 'hook',
        details: 'Thin UI over OpenAI = weekend project with Stripe button',
        score: 99,
        parentId: 'node-tech-source',
      },
      {
        id: 'node-tech-atom-2',
        label: 'Atom: 3-Layer Moat Architecture',
        type: 'atom',
        category: 'insight',
        details: 'Workflow Embedding + Grounding Engine + Data Flywheels',
        score: 98,
        parentId: 'node-tech-source',
      },
      {
        id: 'node-tech-intent-li',
        label: 'Intent: LinkedIn (98% Fit)',
        type: 'intent',
        platform: 'linkedin',
        details: 'Enterprise architecture & competitive moats',
        parentId: 'node-tech-atom-2',
      },
      {
        id: 'node-tech-intent-tw',
        label: 'Intent: Twitter (97% Fit)',
        type: 'intent',
        platform: 'twitter',
        details: 'Contrarian teardown & developer debate',
        parentId: 'node-tech-atom-1',
      },
      {
        id: 'node-tech-asset-li',
        label: 'Asset: LinkedIn Architecture Post',
        type: 'asset',
        platform: 'linkedin',
        details: 'Context curation vs foundation models',
        parentId: 'node-tech-intent-li',
      },
      {
        id: 'node-tech-camp',
        label: '7-Day AI Strategy Campaign',
        type: 'campaign',
        details: 'Sequenced release wave across 7 high-fit channels',
        childrenCount: 7,
        parentId: 'node-tech-source',
      },
    ],
  },
  overallMetrics: {
    contentOpportunities: 36,
    voiceMatch: 97,
    contentGenerated: 18,
    atomsDiscovered: 5,
    avgPlatformFit: 93,
    semanticConsistency: 97,
  },
};

// ==========================================
// PRESET LOOKUP MAP & HELPERS
// ==========================================
export const DEMO_ANALYSES_BY_PRESET: Record<string, AnalysisResult> = {
  'skincare-demo': SAMPLE_SKINCARE_ANALYSIS,
  'ai-startup': SAMPLE_TECH_ANALYSIS,
  'beauty': SAMPLE_SKINCARE_ANALYSIS,
  'tech': SAMPLE_TECH_ANALYSIS,
  'ai': SAMPLE_TECH_ANALYSIS,
};

export function getDemoAnalysisForPreset(keyOrTitle: string): AnalysisResult {
  const lower = keyOrTitle.toLowerCase();
  if (lower.includes('ai') || lower.includes('startup') || lower.includes('tech') || lower.includes('software')) {
    return SAMPLE_TECH_ANALYSIS;
  }
  return SAMPLE_SKINCARE_ANALYSIS;
}

// Default export
export const SAMPLE_ANALYSIS_RESULT: AnalysisResult = SAMPLE_SKINCARE_ANALYSIS;
