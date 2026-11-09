export const Hero = () => (
    <section className="rg-hero" id="home">
        <div className="rg-container rg-hero-content">
            <div>
                <span className="rg-eyebrow">A more considered approach to the markets</span>
                <div className="rg-brand-banner">INFINITE WORLD MARKETS ACADEMY</div>
                <h1>
                    Every trade begins with <em>a plan.</em>
                </h1>
                <p>
                    See the entry. Understand the risk. Follow the updates. Review the exit. IWM Academy
                    brings market research, educational trade plans and your member experience into one
                    clear place.
                </p>
                <div className="rg-hero-actions">
                    <a className="rg-btn rg-ivory" href="#sample-trades">
                        See an example trade ↗
                    </a>
                    <a className="rg-btn rg-outline" href="#membership">
                        Explore memberships →
                    </a>
                </div>
                <div className="rg-hero-proof">
                    <span>
                        <i /> Defined trade levels
                    </span>
                    <span>
                        <i /> Structured updates
                    </span>
                    <span>
                        <i /> 5 specialized desks
                    </span>
                </div>
            </div>

            <div className="rg-hero-demo" aria-label="Illustrative trade ticket">
                <div className="rg-demo-header">
                    <strong>IWM PRIVATE RESEARCH TERMINAL</strong>
                    <span className="rg-demo-flag">Illustrative demo</span>
                </div>
                <div className="rg-hero-demo-inner">
                    <div className="rg-eyebrow">EXAMPLE TRADE · LARGE-CAP &amp; AI DESK</div>
                    <h3>A plan you can actually follow.</h3>
                    <div className="rg-tiny">Hypothetical long-side setup · Sample prices only</div>
                    <div className="rg-numbers">
                        <div className="rg-num">
                            <span>Buy entry</span>
                            <strong>$182.40</strong>
                        </div>
                        <div className="rg-num rg-stop">
                            <span>Stop loss</span>
                            <strong>$176.90</strong>
                        </div>
                        <div className="rg-num rg-target">
                            <span>Target 1</span>
                            <strong>$191.20</strong>
                        </div>
                    </div>
                    <div className="rg-progress-bars">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="rg-tiny" style={{ marginTop: 15 }}>
                        Full example includes target 2, a sell/exit example, thesis and update log.
                    </div>
                </div>
                <div className="rg-demo-bottom">
                    <span>Plan → Entry → Management → Exit</span>
                    <span>DEMONSTRATION ONLY</span>
                </div>
            </div>
        </div>
    </section>
);

export const Ribbon = () => (
    <div className="rg-ribbon">
        <div className="rg-container rg-ribbon-row">
            <div>
                <b>01</b>
                <span>Know the entry before the trade</span>
            </div>
            <div>
                <b>02</b>
                <span>See the stop loss and targets</span>
            </div>
            <div>
                <b>03</b>
                <span>Follow each update through the exit</span>
            </div>
        </div>
    </div>
);
