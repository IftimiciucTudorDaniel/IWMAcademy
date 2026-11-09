import { money, tradeExamples } from "./data";
import { TradeChart } from "./TradeChart";
import { useRoyalGreen } from "./context";

const tabs: { key: keyof typeof tradeExamples; label: string }[] = [
    { key: "ai", label: "Large-Cap & AI" },
    { key: "swing", label: "Swing Trade" },
    { key: "small", label: "Small Cap" },
    { key: "earnings", label: "Earnings" },
    { key: "tough", label: "Tough Market" },
];

const timeline = [
    { n: "01", h: "Trade plan published", p: "Direction, exact entry, stop, targets, rationale and risk notes." },
    { n: "02", h: "Entry update", p: "A timestamped update when a stated condition is met or a plan changes." },
    { n: "03", h: "Position management", p: "Any revised stop, target or cancellation is appended to the record." },
    { n: "04", h: "Exit & review", p: "Sell or cover level, reason and closure summary are preserved." },
];

export const SampleTrades = () => {
    const { exampleDesk, setExampleDesk } = useRoyalGreen();
    const t = tradeExamples[exampleDesk];

    return (
        <section className="rg-section" id="sample-trades">
            <div className="rg-container">
                <div className="rg-section-title">
                    <span className="rg-eyebrow">Preview the member experience</span>
                    <h2>This is what a trade looks like inside IWM.</h2>
                    <p>
                        Switch between the five desks. Every example shows the entry, stop loss, targets and
                        sample exit in a clear format you can understand at a glance.
                    </p>
                </div>

                <div className="rg-trade-tabs" role="tablist" aria-label="Choose example trading desk">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            role="tab"
                            className="rg-trade-tab"
                            aria-selected={exampleDesk === tab.key}
                            onClick={() => setExampleDesk(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="rg-sample-layout">
                    <article className="rg-sample-left" aria-live="polite">
                        <div className="rg-sample-header">
                            <strong>{t.desk}</strong>
                            <span className="rg-demo-flag">Synthetic example</span>
                        </div>
                        <div className="rg-sample-label">{t.direction}</div>
                        <h3>{t.title}</h3>
                        <p className="rg-sample-desc">{t.desc}</p>
                        <div className="rg-quote-grid">
                            <div className="rg-quote">
                                <small>{t.short ? "Sell-short entry" : "Buy entry"}</small>
                                <b>{money(t.entry)}</b>
                            </div>
                            <div className="rg-quote rg-red">
                                <small>Stop loss</small>
                                <b>{money(t.stop)}</b>
                            </div>
                            <div className="rg-quote rg-green">
                                <small>{t.short ? "Cover target 1" : "Take profit 1"}</small>
                                <b>{money(t.t1)}</b>
                            </div>
                            <div className="rg-quote rg-green">
                                <small>{t.short ? "Cover target 2" : "Take profit 2"}</small>
                                <b>{money(t.t2)}</b>
                            </div>
                        </div>
                        <div className="rg-summary-rule">
                            <span>{t.short ? "Example buy-to-cover exit" : "Example sell / exit"}</span>
                            <strong>{money(t.exit)}</strong>
                        </div>
                        <div className="rg-summary-rule">
                            <span>Illustrative holding style</span>
                            <strong>{t.hold}</strong>
                        </div>
                        <p className="rg-small-note">
                            The numbers above are entirely fictional, not live levels or historical performance.
                            Members independently choose whether and how to trade.
                        </p>
                    </article>

                    <article className="rg-sample-chart">
                        <div className="rg-chart-top">
                            <h4>Illustrative price path</h4>
                            <span className="rg-demo-flag">Not live market data</span>
                        </div>
                        <TradeChart trade={t} />
                        <div className="rg-chart-foot">
                            <span>Exact prices and changes stay visible in the live member record.</span>
                            <span>{t.short ? "SELL SHORT → BUY TO COVER" : "BUY → SELL"}</span>
                        </div>
                    </article>
                </div>

                <div className="rg-timeline">
                    {timeline.map((step) => (
                        <div className="rg-timecard" key={step.n}>
                            <b>{step.n}</b>
                            <h4>{step.h}</h4>
                            <p>{step.p}</p>
                        </div>
                    ))}
                </div>

                <p className="rg-small-note" style={{ textAlign: "center", marginTop: 29 }}>
                    Trade examples are synthetic demonstrations only. They are not published recommendations,
                    verified results or real trading performance.
                </p>
            </div>
        </section>
    );
};
