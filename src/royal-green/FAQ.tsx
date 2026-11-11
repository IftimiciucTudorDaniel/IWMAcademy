const faqs = [
    {
        q: "What exactly do I receive after joining?",
        a: "Access to the Learning Lab(s) included in your paid membership, structured case-study lessons, updates, educational materials and the appropriate private Discord learning-community channels, once implemented and enabled.",
    },
    {
        q: "Are the case studies real trade signals?",
        a: "No. Every case study is a clearly labeled, hypothetical scenario used to teach a concept — including losing and unfilled scenarios, not only favorable ones. The sample figures on this site are entirely fictional and are never published as live recommendations.",
    },
    {
        q: "Is the Market Timing Lab available separately?",
        a: "Yes. The Market Timing Lab is its own standalone lab with its own membership and checkout — it is not included in the All Labs Bundle and is never bundled with the other four labs.",
    },
    {
        q: "Can I subscribe monthly or for 1 year?",
        a: "Only two access durations are offered: 1 month and 1 year. The checkout displays the exact term, price, whether the plan renews automatically and the next charge date before you confirm.",
    },
    {
        q: "Can I stop my subscription renewing?",
        a: "The member dashboard lets you turn off future renewals without contacting support. It shows your paid-through date and explains any refund or access rules accurately.",
    },
    {
        q: "Does IWM Academy execute trades or manage my brokerage account?",
        a: "No. IWM Academy presents research, educational case studies and a self-directed learning journal. It does not execute orders, hold funds or manage client accounts. Any additional regulated service would need separate review, licensing and approval.",
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
        <h2>Join a more organized way to study the market.</h2>
        <p>Select your Learning Lab, review the membership and see everything in one place.</p>
        <a className="rg-btn rg-ivory" href="#membership">
            Choose your membership →
        </a>
    </section>
);
