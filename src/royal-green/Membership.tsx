import {
    DeskKey,
    Term,
    bundleDesks,
    deskNames,
    deskPricing,
    deskSelectOptions,
    formatPrice,
    periodSuffix,
    termLabels,
} from "./data";
import { useRoyalGreen } from "./context";
import { SwingMembership } from "./SwingMembership";

// The 6-month term has been discontinued across every lab.
const periods: Term[] = [1, 12];

export const Membership = () => {
    const { selectedDesk, setSelectedDesk, term, setTerm, openModal } = useRoyalGreen();
    const pricing = deskPricing[selectedDesk];
    const price = pricing.price[term];
    const link = pricing.link[term];
    const isBundle = selectedDesk === "all";
    const visiblePeriods = isBundle ? ([12] as Term[]) : periods;

    return (
        <section className="rg-section rg-alt" id="membership">
            <div className="rg-container">
                <div className="rg-section-title">
                    <span className="rg-eyebrow">A simpler way to join</span>
                    <h2>Choose your lab. Choose your term. You're ready.</h2>
                    <p>
                        Just one Learning Lab choice, one membership-period choice and a clear secure
                        checkout. Nothing unnecessary. The lab picker below covers the Portfolio Growth,
                        Small-Cap Opportunity, Earnings Analysis and Defensive Strategy Labs and the bundle
                        built from them — the Market Timing Lab has its own separate membership further down
                        this section.
                    </p>
                </div>

                <div className="rg-pricing-container">
                    <div className="rg-pricing-grid">
                        <div>
                            <label htmlFor="rgDeskSelect">1. Your Learning Lab</label>
                            <select
                                id="rgDeskSelect"
                                value={selectedDesk}
                                onChange={(e) => setSelectedDesk(e.target.value as DeskKey)}
                            >
                                {deskSelectOptions.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label>2. Your membership period</label>
                            <div
                                className="rg-periods"
                                role="group"
                                aria-label="Choose billing period"
                                style={{ gridTemplateColumns: `repeat(${visiblePeriods.length}, 1fr)` }}
                            >
                                {visiblePeriods.map((p) => (
                                    <button
                                        key={p}
                                        className="rg-period-btn"
                                        aria-pressed={term === p}
                                        onClick={() => setTerm(p)}
                                    >
                                        {p === 12 ? "1 Year" : `${p} Month${p > 1 ? "s" : ""}`}
                                    </button>
                                ))}
                            </div>
                            {isBundle && (
                                <p className="rg-tiny" style={{ marginTop: 10 }}>
                                    The All Labs Bundle is offered as a 1-year membership only.
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="rg-plan-overview">
                        <div>
                            <span className="rg-eyebrow">YOUR SELECTION</span>
                            <h3>{deskNames[selectedDesk]}</h3>
                            <div className="rg-tiny">
                                {termLabels[term]} membership · recurring only with explicit consent
                            </div>
                            {isBundle && (
                                <div className="rg-bundle-includes" style={{ marginTop: 12 }}>
                                    {bundleDesks.map((d) => (
                                        <span className="rg-bundle-chip" key={d.key}>
                                            ✓ {d.name}
                                        </span>
                                    ))}
                                    <span className="rg-bundle-chip rg-exclude">
                                        ✕ Market Timing Lab — not included
                                    </span>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="rg-tiny">MEMBERSHIP PRICE</div>
                            {price !== undefined ? (
                                <div className="rg-price">
                                    <span className="rg-price-amount">{formatPrice(price)}</span>
                                    <span className="rg-price-period">{periodSuffix[term]}</span>
                                </div>
                            ) : (
                                <strong className="rg-price-pending">Price pending for this lab / term</strong>
                            )}
                        </div>
                    </div>

                    <div className="rg-pricing-actions">
                        <p className="rg-fineprint" style={{ maxWidth: 460, margin: 0 }}>
                            {link
                                ? "You'll complete payment securely on Revolut's hosted checkout. Membership renews automatically for the selected term unless cancelled."
                                : "This lab / term combination isn't connected to a verified price and checkout yet. Preview the student journey below, or choose a different lab or term."}
                        </p>
                        {link ? (
                            <a
                                className="rg-btn rg-ivory"
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                START YOUR JOURNEY →
                            </a>
                        ) : (
                            <button className="rg-btn rg-ivory" onClick={() => openModal("checkout")}>
                                Preview joining this lab →
                            </button>
                        )}
                    </div>
                </div>

                <SwingMembership />
            </div>
        </section>
    );
};
