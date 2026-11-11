import { useState } from "react";
import { desks } from "./data";

export const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = desks[activeIndex];

    return (
        <section className="rg-hero" id="home">
            <div className="rg-container rg-hero-content">
                <div>
                    <span className="rg-eyebrow">A private online financial learning experience</span>
                    <div className="rg-brand-banner">INFINITE WORLD MARKETS ACADEMY</div>
                    <h1>
                        Master the art of <em>understanding</em> the markets.
                    </h1>
                    <p>
                        A distinguished learning environment for studying stock markets, research methods,
                        financial reports and responsible decision-making. Explore five specialist Learning
                        Labs within one connected Academy.
                    </p>
                    <div className="rg-hero-actions">
                        <a className="rg-btn rg-ivory" href="#learning-labs">
                            Explore Learning Labs ↗
                        </a>
                        <a className="rg-btn rg-outline" href="#membership">
                            View memberships →
                        </a>
                    </div>
                    <div className="rg-hero-proof">
                        <span>
                            <i /> 05 specialist Learning Labs
                        </span>
                        <span>
                            <i /> 2 access options · 1 month / 1 year
                        </span>
                        <span>
                            <i /> One connected ecosystem
                        </span>
                    </div>
                </div>

                <div className="rg-hero-demo" aria-label="IWM Academy learning ecosystem">
                    <div className="rg-demo-header">
                        <strong>IWM ACADEMY / LEARNING ECOSYSTEM</strong>
                        <span className="rg-demo-flag">Five specialist labs</span>
                    </div>
                    <div className="rg-hero-demo-inner">
                        <div className="rg-ecosystem-medallion" aria-hidden="true">
                            <div className="rg-ring rg-ring-outer">
                                <div className="rg-ring rg-ring-mid">
                                    <div className="rg-ring rg-ring-inner">
                                        <span>IWM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rg-ecosystem-caption">
                            <div className="rg-tiny">ONE ACADEMY, FIVE AREAS OF STUDY</div>
                            <h3>
                                Where knowledge <em>connects.</em>
                            </h3>
                            <p className="rg-tiny">
                                Choose a subject to discover how each Learning Lab contributes to your
                                educational journey.
                            </p>
                        </div>
                        <div className="rg-ecosystem-list" role="listbox" aria-label="Select a Learning Lab">
                            {desks.map((d, i) => (
                                <button
                                    key={d.key}
                                    type="button"
                                    role="option"
                                    aria-selected={i === activeIndex}
                                    aria-pressed={i === activeIndex}
                                    className={`rg-ecosystem-row${i === activeIndex ? " rg-active" : ""}`}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    <span className="rg-ecosystem-num">{d.index}</span>
                                    <span className="rg-ecosystem-name">{d.name}</span>
                                    <span aria-hidden="true">↗</span>
                                </button>
                            ))}
                        </div>
                        <div className="rg-ecosystem-detail" aria-live="polite">
                            <div className="rg-tiny">
                                {active.index} / {active.name.toUpperCase()}
                            </div>
                            <p>{active.desc}</p>
                        </div>
                    </div>
                    <div className="rg-demo-bottom">
                        <span>Foundations → Research → Risk</span>
                        <span>EDUCATIONAL ECOSYSTEM</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const Ribbon = () => (
    <div className="rg-ribbon">
        <div className="rg-container rg-ribbon-row">
            <div>
                <b>01</b>
                <span>Discover the learning ecosystem</span>
            </div>
            <div>
                <b>02</b>
                <span>Explore the five Learning Labs</span>
            </div>
            <div>
                <b>03</b>
                <span>Understand through case studies</span>
            </div>
        </div>
    </div>
);
