const faqs = [
    {
        q: "What exactly do I receive after joining?",
        a: "Access to the research desk(s) included in your paid membership, structured trade-plan records, updates, educational materials and the appropriate private Discord channels, once implemented and enabled.",
    },
    {
        q: "Will each trade show buy, sell and stop-loss levels?",
        a: "The intended member record includes direction, entry, stop loss, targets, changes and closing information. Some plans may be cancelled or never triggered; those outcomes are recorded too. The sample prices on this demo page are entirely fictional.",
    },
    {
        q: "Is Swing Trade available separately?",
        a: "Yes. Swing Trade is its own standalone desk with its own membership and checkout — it is not included in the All Desks Bundle and is never bundled with the other four desks.",
    },
    {
        q: "Can I subscribe monthly, for 6 months or for 1 year?",
        a: "The design supports all three periods. The production checkout must display the exact term, price, whether the plan renews automatically and the next charge date before consent.",
    },
    {
        q: "Can I stop my subscription renewing?",
        a: "The production member dashboard should let you turn off future renewals without contacting support. It must show your paid-through date and explain any refund or access rules accurately.",
    },
    {
        q: "Does IWM execute trades or manage my brokerage account?",
        a: "This concept presents research, educational trade plans and a self-directed trade journal. It does not execute orders, hold funds or manage client accounts. Any additional regulated service would need separate review, implementation and approval.",
    },
];

export const FAQ = () => (
    <section className="rg-section" id="faq">
        <div className="rg-container">
            <div className="rg-section-title">
                <span className="rg-eyebrow">Clarity before commitment</span>
                <h2>Common questions, clear answers.</h2>
            </div>
            <div className="rg-faqs">
                {faqs.map((item) => (
                    <details className="rg-faq" key={item.q}>
                        <summary>{item.q}</summary>
                        <p>{item.a}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
);

export const FinalCTA = () => (
    <section className="rg-last-cta">
        <span className="rg-eyebrow">Research with structure. Decisions with clarity.</span>
        <h2>Join a more organized way to follow the market.</h2>
        <p>Select your desk, review the membership and see everything in one place.</p>
        <a className="rg-btn rg-ivory" href="#membership">
            Choose your membership →
        </a>
    </section>
);
