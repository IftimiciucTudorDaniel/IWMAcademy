// Content source: IWM Academy — Royal Green 2.0 Engineer Blueprint
// and the Trading Examples Developer Guide (new template/*.pdf).
// All prices and trade paths below are synthetic demonstration data only.

export type DeskKey = "ai" | "swing" | "small" | "earnings" | "tough" | "all";

export const deskNames: Record<DeskKey, string> = {
    ai: "Large-Cap & AI Desk",
    swing: "Swing Trading Desk",
    small: "Small Cap Desk",
    earnings: "Earnings Desk",
    tough: "Tough Market Desk",
    all: "All Desks Bundle",
};

export interface TradeExample {
    desk: string;
    title: string;
    desc: string;
    direction: string;
    entry: number;
    stop: number;
    t1: number;
    t2: number;
    exit: number;
    hold: string;
    short: boolean;
    path: number[];
}

export const tradeExamples: Record<Exclude<DeskKey, "all">, TradeExample> = {
    ai: {
        desk: "LARGE-CAP & AI DESK",
        title: "Example: AI sector setup",
        desc: "Sample long-side research plan using a made-up security and entirely fictional numbers.",
        direction: "LONG / BUY",
        entry: 182.4,
        stop: 176.9,
        t1: 191.2,
        t2: 198.0,
        exit: 191.2,
        hold: "Intraday / short term",
        short: false,
        path: [181, 182.5, 180.7, 184, 185, 183.7, 188, 186.7, 190.5, 191.2],
    },
    swing: {
        desk: "SWING TRADING DESK",
        title: "Example: Multi-day position",
        desc: "Illustrates a swing-trade setup with a planned buy, an invalidation point and a documented sell.",
        direction: "LONG / BUY",
        entry: 124.5,
        stop: 118.75,
        t1: 133.0,
        t2: 140.2,
        exit: 133.0,
        hold: "Multi-day / swing",
        short: false,
        path: [123, 124.5, 121.9, 126.8, 125.7, 129.3, 128.1, 132.7, 131.5, 133],
    },
    small: {
        desk: "SMALL CAP DESK",
        title: "Example: Momentum setup",
        desc: "A hypothetical intraday small-cap trade where risk and rapid execution conditions are visible.",
        direction: "LONG / BUY",
        entry: 8.2,
        stop: 7.78,
        t1: 8.95,
        t2: 9.65,
        exit: 8.95,
        hold: "Intraday",
        short: false,
        path: [8.1, 8.2, 7.98, 8.36, 8.27, 8.55, 8.4, 8.75, 8.65, 8.95],
    },
    earnings: {
        desk: "EARNINGS DESK",
        title: "Example: Post-event short",
        desc: "Illustrates a short-side plan: sell short, define the stop and buy to cover at the example exit.",
        direction: "SHORT / SELL SHORT",
        entry: 74.5,
        stop: 77.1,
        t1: 70.2,
        t2: 66.8,
        exit: 70.2,
        hold: "Event-driven / short term",
        short: true,
        path: [75.3, 74.5, 75.6, 73.8, 74.2, 72.5, 73.1, 71.8, 71.2, 70.2],
    },
    tough: {
        desk: "TOUGH MARKET DESK",
        title: "Example: Defensive short",
        desc: "A hypothetical selective short setup for uncertain conditions, including a defined stop above entry.",
        direction: "SHORT / SELL SHORT",
        entry: 96.8,
        stop: 100.2,
        t1: 91.3,
        t2: 88.2,
        exit: 91.3,
        hold: "Short term / selective",
        short: true,
        path: [97.1, 96.8, 98.3, 95.8, 96.4, 94.5, 95.4, 93.7, 92.8, 91.3],
    },
};

export interface Desk {
    key: Exclude<DeskKey, "all">;
    index: string;
    tag: string;
    name: string;
    aka: string;
    desc: string;
    footer: string;
    spotlight?: boolean;
}

export const desks: Desk[] = [
    {
        key: "ai",
        index: "DESK 01",
        tag: "DAILY MARKET FOCUS",
        name: "Large-Cap & AI",
        aka: "Existing name: 200K Group",
        desc: "Daily research on major technology, AI and liquid large-cap stocks, with structured entry and exit plans.",
        footer: "Short-term focus",
    },
    {
        key: "swing",
        index: "DESK 02",
        tag: "POSITION TRADING",
        name: "Swing Trade",
        aka: "Swing Trading Desk",
        desc: "Multi-day trade setups with exact proposed entries, invalidation levels, targets and follow-through updates over the holding period.",
        footer: "Multi-day setups",
        spotlight: true,
    },
    {
        key: "small",
        index: "DESK 03",
        tag: "MOMENTUM",
        name: "Small Cap",
        aka: "Small Cap Group",
        desc: "Fast-moving small-cap opportunities, emphasizing clear triggers, volatility awareness and disciplined risk limits.",
        footer: "Intraday focus",
    },
    {
        key: "earnings",
        index: "DESK 04",
        tag: "EVENT-DRIVEN",
        name: "Earnings",
        aka: "Earnings Group",
        desc: "Research around earnings announcements, guidance, price gaps and defined post-event setups.",
        footer: "Event-focused",
    },
    {
        key: "tough",
        index: "DESK 05",
        tag: "DEFENSIVE DISCIPLINE",
        name: "Tough Market",
        aka: "Tough Market Group",
        desc: "Selective setups with clearly defined risk and measured decision-making when markets are unsettled.",
        footer: "Risk-first research",
    },
];

export const deskSelectOptions: { value: DeskKey; label: string }[] = [
    { value: "ai", label: "Large-Cap & AI Desk (200K)" },
    { value: "swing", label: "Swing Trading Desk" },
    { value: "small", label: "Small Cap Desk" },
    { value: "earnings", label: "Earnings Desk" },
    { value: "tough", label: "Tough Market Desk" },
    { value: "all", label: "All Desks Bundle" },
];

export type Term = 1 | 6 | 12;

export const termLabels: Record<Term, string> = {
    1: "1-month",
    6: "6-month",
    12: "12-month",
};

export const money = (n: number) => `$${n.toFixed(2)}`;

// Real pricing + Revolut checkout links, carried over from the previously
// live subscription catalogue (src/sections/PricingCards, pre Royal Green
// rebuild). Intentionally omitted wherever no verified price/link exists —
// per the blueprint's no-price rule, a visitor should never reach a missing
// or mismatched quote.
export interface DeskPricing {
    price: Partial<Record<Term, number>>;
    link: Partial<Record<Term, string>>;
}

export const deskPricing: Record<DeskKey, DeskPricing> = {
    // The 6-month term has been discontinued across every desk — only
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
