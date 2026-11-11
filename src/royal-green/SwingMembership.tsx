import { useState } from "react";
import { Term, deskPricing, formatPrice, periodSuffix } from "./data";

// Deliberately separate from the shared Membership dropdown/context: the
// Market Timing Lab is its own lab with its own membership, never grouped
// with the other four labs or the All Labs Bundle, so it can never be
// mistaken for something the bundle already includes.
const periods: Term[] = [1, 12];
const pricing = deskPricing.swing;

export const SwingMembership = () => {
    const [term, setTerm] = useState<Term>(1);
    const price = pricing.price[term];
    const link = pricing.link[term];

    return (
        <div id="swing-membership" className="rg-swing-membership">
            <div className="rg-swing-membership-head">
                <span className="rg-eyebrow">Sold on its own · not part of any bundle</span>
                <h3>Market Timing Lab</h3>
                <p>
                    The Market Timing Lab is a standalone lab with its own membership. It is never included
                    in the All Labs Bundle above — join it separately here.
                </p>
            </div>

            <div className="rg-periods" style={{ gridTemplateColumns: `repeat(${periods.length}, 1fr)` }}>
                {periods.map((p) => (
                    <button
                        key={p}
                        className="rg-period-btn"
                        aria-pressed={term === p}
                        onClick={() => setTerm(p)}
                    >
                        {p === 12 ? "1 Year" : "1 Month"}
                    </button>
                ))}
            </div>

            <div className="rg-plan-overview">
                <div>
                    <span className="rg-eyebrow">YOUR SELECTION</span>
                    <h3>Market Timing Lab</h3>
                    <div className="rg-tiny">
                        {term === 12 ? "12-month" : "1-month"} membership · recurring only with explicit
                        consent
                    </div>
                </div>
                <div>
                    <div className="rg-tiny">MEMBERSHIP PRICE</div>
                    {price !== undefined ? (
                        <div className="rg-price">
                            <span className="rg-price-amount">{formatPrice(price)}</span>
                            <span className="rg-price-period">{periodSuffix[term]}</span>
                        </div>
                    ) : (
                        <strong className="rg-price-pending">Price pending for this term</strong>
                    )}
                </div>
            </div>

            {link ? (
                <a className="rg-btn rg-ivory rg-full" href={link} target="_blank" rel="noopener noreferrer">
                    START YOUR JOURNEY →
                </a>
            ) : (
                <button className="rg-btn rg-ivory rg-full" disabled>
                    Price pending →
                </button>
            )}
        </div>
    );
};
