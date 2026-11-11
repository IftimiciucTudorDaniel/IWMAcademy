// Content source: IWM Academy — Royal Green 2.0 Engineer Blueprint,
// "The Learning Ecosystem" (Design Release 02, new template/New iwm.pdf).
// Internal keys, prices and checkout links are carried over unchanged from
// the live catalogue — only the public names, descriptions and framing
// below have been rewritten to the approved educational positioning.
// All case-study content is clearly fictional demonstration data only.

export type DeskKey = "ai" | "swing" | "small" | "earnings" | "tough" | "all";

export const deskNames: Record<DeskKey, string> = {
    ai: "Portfolio Growth Lab",
    swing: "Market Timing Lab",
    small: "Small-Cap Opportunity Lab",
    earnings: "Earnings Analysis Lab",
    tough: "Defensive Strategy Lab",
    all: "All Labs Bundle",
};

export interface Desk {
    key: Exclude<DeskKey, "all">;
    index: string;
    tag: string;
    name: string;
    aka: string;
    desc: string;
    footer: string;
    cmsKey: string;
    existingId: string;
    spotlight?: boolean;
}

// The five specialist Learning Labs (PDF p.5 — Program Directory).
// cmsKey / existingId are the internal mapping used to migrate existing
// memberships and Discord permissions; public copy must describe the
// actual subjects and services available, never a trading-signal pitch.
export const desks: Desk[] = [
    {
        key: "ai",
        index: "01",
        tag: "FOUNDATIONS",
        name: "Portfolio Growth Lab",
        aka: "Large-cap & technology study",
        desc: "Portfolio structure, allocation, diversification, review and risk awareness, with a focus on major technology, AI and liquid large-cap companies.",
        footer: "Structured, long-horizon study",
        cmsKey: "portfolio",
        existingId: "200K",
    },
    {
        key: "swing",
        index: "02",
        tag: "RESEARCH",
        name: "Market Timing Lab",
        aka: "Multi-day position study",
        desc: "Price behaviour, time horizons, scenario evaluation and risk considerations across multi-day position studies.",
        footer: "Multi-day case studies",
        cmsKey: "timing",
        existingId: "Swing",
        spotlight: true,
    },
    {
        key: "small",
        index: "03",
        tag: "RESEARCH",
        name: "Small-Cap Opportunity Lab",
        aka: "Company research study",
        desc: "Company research, liquidity, filings and analytical limitations specific to fast-moving small-cap names.",
        footer: "Intraday case studies",
        cmsKey: "smallcap",
        existingId: "Small Cap",
    },
    {
        key: "earnings",
        index: "04",
        tag: "RESEARCH",
        name: "Earnings Analysis Lab",
        aka: "Corporate results study",
        desc: "Financial statements, corporate results, reports and market context around earnings announcements.",
        footer: "Event-focused study",
        cmsKey: "earnings",
        existingId: "Earnings",
    },
    {
        key: "tough",
        index: "05",
        tag: "RISK",
        name: "Defensive Strategy Lab",
        aka: "Downside-planning study",
        desc: "Market uncertainty, downside planning, resilience and decision-making when conditions are unsettled.",
        footer: "Risk-first study",
        cmsKey: "defensive",
        existingId: "Tough Market",
    },
];

// The exact four labs covered by the All Labs Bundle — rendered as an
// explicit list wherever the bundle is shown, so there is never any doubt
// about what is (and, pointedly, what is not: the Market Timing Lab)
// included.
export const bundleDesks = desks.filter((d) => d.key !== "swing");

// The Market Timing Lab is deliberately NOT listed here. It is sold as its
// own, standalone membership (see SwingMembership.tsx) so it can never be
// mistaken for something included in the All Labs Bundle.
export const deskSelectOptions: { value: Exclude<DeskKey, "swing">; label: string }[] = [
    { value: "ai", label: "Portfolio Growth Lab (200K)" },
    { value: "small", label: "Small-Cap Opportunity Lab" },
    { value: "earnings", label: "Earnings Analysis Lab" },
    { value: "tough", label: "Defensive Strategy Lab" },
    { value: "all", label: "All Labs Bundle" },
];

// Three curriculum pathways every Learning Lab draws on (PDF p.3/p.8).
export type Pathway = "foundations" | "research" | "risk";

export const pathways: { key: Pathway; label: string; desc: string }[] = [
    {
        key: "foundations",
        label: "Foundations",
        desc: "Core concepts: how markets, orders and positions actually work before any case study is introduced.",
    },
    {
        key: "research",
        label: "Research",
        desc: "Reading company filings, reports and price behaviour to form a documented, structured view.",
    },
    {
        key: "risk",
        label: "Risk",
        desc: "Position sizing, invalidation points and scenario planning — including losses and unfilled plans.",
    },
];

export interface CaseStudy {
    lab: string;
    pathway: Pathway;
    title: string;
    scenario: string;
    takeaway: string;
    outcome: "Hypothetical favorable outcome" | "Hypothetical unfavorable outcome" | "Hypothetical unfilled plan";
}

// Clearly fictional, hypothetical lesson scenarios — not published
// recommendations, verified results or real research performance. Every
// entry preserves a losing or unfilled scenario, not only favorable ones.
export const caseStudies: Record<Exclude<DeskKey, "all">, CaseStudy> = {
    ai: {
        lab: "PORTFOLIO GROWTH LAB",
        pathway: "foundations",
        title: "Case study: sizing a position within a portfolio",
        scenario:
            "A hypothetical large-cap technology holding is sized against the rest of a sample portfolio, with a documented thesis and a defined review point.",
        takeaway: "How allocation and diversification limits shape a single position, independent of its outcome.",
        outcome: "Hypothetical favorable outcome",
    },
    swing: {
        lab: "MARKET TIMING LAB",
        pathway: "research",
        title: "Case study: a multi-day scenario walkthrough",
        scenario:
            "A hypothetical multi-day setup is documented from plan to review, including a stated invalidation level and a later update when conditions changed.",
        takeaway: "How a documented plan is revised or closed out as new information arrives, across several sessions.",
        outcome: "Hypothetical unfavorable outcome",
    },
    small: {
        lab: "SMALL-CAP OPPORTUNITY LAB",
        pathway: "research",
        title: "Case study: liquidity and filing limitations",
        scenario:
            "A hypothetical small-cap name is reviewed for filing transparency and liquidity constraints before any scenario is considered.",
        takeaway: "Why liquidity and disclosure quality change how a small-cap scenario should be sized and reviewed.",
        outcome: "Hypothetical unfilled plan",
    },
    earnings: {
        lab: "EARNINGS ANALYSIS LAB",
        pathway: "research",
        title: "Case study: reading a post-results reaction",
        scenario:
            "A hypothetical post-earnings price reaction is examined against the underlying results and guidance, with a documented, scenario-based view.",
        takeaway: "How to separate the reported numbers from the market's reaction before forming a view.",
        outcome: "Hypothetical favorable outcome",
    },
    tough: {
        lab: "DEFENSIVE STRATEGY LAB",
        pathway: "risk",
        title: "Case study: planning for an unsettled market",
        scenario:
            "A hypothetical defensive scenario sets a measured risk limit and a review trigger ahead of an uncertain market period.",
        takeaway: "How a pre-defined risk limit changes decision-making when conditions turn volatile.",
        outcome: "Hypothetical unfavorable outcome",
    },
};

export type Term = 1 | 6 | 12;

export const termLabels: Record<Term, string> = {
    1: "1-month",
    6: "6-month",
    12: "12-month",
};

export const money = (n: number) => `$${n.toFixed(2)}`;

// Real pricing + Revolut checkout links, carried over unchanged from the
// live subscription catalogue. Intentionally omitted wherever no verified
// price/link exists — a visitor should never reach a missing or
// mismatched quote.
export interface DeskPricing {
    price: Partial<Record<Term, number>>;
    link: Partial<Record<Term, string>>;
}

export const deskPricing: Record<DeskKey, DeskPricing> = {
    // The 6-month term has been discontinued across every lab — only
    // 1-month and 1-year memberships are offered now.
    ai: {
        price: { 1: 386, 12: 4486 },
        link: {
            1: "https://checkout.revolut.com/subscription/2367d0a9-2b00-400f-94ea-67b63a18d83e",
            12: "https://checkout.revolut.com/subscription/6408948c-c682-40b9-be48-ae05423b2c37",
        },
    },
    small: {
        price: { 1: 386, 12: 4486 },
        link: {
            1: "https://checkout.revolut.com/subscription/6844af7e-4df3-4c48-a886-6aa45f394c60",
            12: "https://checkout.revolut.com/subscription/8edc6f51-3c91-46b2-af31-e6f51ab062e9",
        },
    },
    earnings: {
        price: { 1: 386, 12: 4486 },
        link: {
            1: "https://checkout.revolut.com/subscription/ee7536e5-faba-429c-84a3-885bfafa8f27",
            12: "https://checkout.revolut.com/subscription/18b22483-3075-459a-8d34-a016a73c4ed3",
        },
    },
    tough: {
        price: { 1: 386, 12: 4486 },
        link: {
            1: "https://checkout.revolut.com/subscription/9cec03e2-ff4c-4259-bcbc-e0502123af42",
            12: "https://checkout.revolut.com/subscription/ee0444c5-08c5-4947-990d-902fc0e280d7",
        },
    },
    swing: {
        price: { 1: 587, 12: 6122 },
        link: {
            1: "https://checkout.revolut.com/subscription/a2ac11b7-b68d-485e-9511-4d441d4465fb",
            12: "https://checkout.revolut.com/subscription/819ece08-82f9-444d-a450-8c1e30b03ed7",
        },
    },
    all: {
        price: { 12: 12389 },
        link: {
            12: "https://checkout.revolut.com/subscription/b06352ca-7091-4892-9239-22cc0598a847",
        },
        // The bundle is 1-year only; its old 1-month/6-month links were literal
        // "#" placeholders and were never actually wired up.
    },
};

export const formatPrice = (n: number) => `$${n.toLocaleString("en-US")}`;

export const periodSuffix: Record<Term, string> = {
    1: "/month",
    6: "/6 months",
    12: "/year",
};
