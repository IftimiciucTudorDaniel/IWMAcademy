import { caseStudies, desks, pathways } from "./data";
import { useRoyalGreen } from "./context";

const timeline = [
    { n: "01", h: "Lesson published", p: "Scenario, pathway, learning goal and risk notes are documented." },
    { n: "02", h: "Guided discussion", p: "A timestamped update when a stated condition is met or the lesson is extended." },
    { n: "03", h: "Case review", p: "Any revised assumption or scenario change is appended to the lesson record." },
    { n: "04", h: "Outcome & review", p: "The hypothetical outcome and closing takeaway are preserved, favorable or not." },
];

export const CaseStudies = () => {
    const { exampleDesk, setExampleDesk } = useRoyalGreen();
    const study = caseStudies[exampleDesk];

    return (
        <section className="rg-section" id="case-studies">
            <div className="rg-container">
                <div className="rg-section-title">
                    <span className="rg-eyebrow">Educational content</span>
                    <h2>Learn by exploring case studies.</h2>
                    <p>
                        Every Learning Lab draws on three curriculum pathways. Switch between the five labs to
                        see a hypothetical case study — favorable, unfavorable and unfilled scenarios are all
                        preserved.
                    </p>
                </div>

                <div className="rg-timeline" style={{ marginBottom: 46 }}>
                    {pathways.map((p, i) => (
                        <div className="rg-timecard" key={p.key}>
                            <b>{String(i + 1).padStart(2, "0")}</b>
                            <h4>{p.label}</h4>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="rg-trade-tabs" role="tablist" aria-label="Choose a Learning Lab">
                    {desks.map((d) => (
                        <button
                            key={d.key}
                            role="tab"
                            className="rg-trade-tab"
                            aria-selected={exampleDesk === d.key}
                            onClick={() => setExampleDesk(d.key)}
                        >
                            {d.name}
                        </button>
                    ))}
                </div>

                <div className="rg-sample-layout rg-sample-layout-single">
                    <article className="rg-sample-left" aria-live="polite">
                        <div className="rg-sample-header">
                            <strong>{study.lab}</strong>
                            <span className="rg-demo-flag">Hypothetical case study</span>
                        </div>
                        <div className="rg-sample-label">
                            {pathways.find((p) => p.key === study.pathway)?.label.toUpperCase()} PATHWAY
                        </div>
                        <h3>{study.title}</h3>
                        <p className="rg-sample-desc">{study.scenario}</p>
                        <div className="rg-summary-rule">
                            <span>Lesson takeaway</span>
                            <strong style={{ maxWidth: 280, textAlign: "right" }}>{study.takeaway}</strong>
                        </div>
                        <div className="rg-summary-rule">
                            <span>Illustrative outcome</span>
                            <strong>{study.outcome}</strong>
                        </div>
                        <p className="rg-small-note">
                            This case study is entirely fictional, not a live recommendation or verified result.
                            Students independently choose how, or whether, to apply what they learn.
                        </p>
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
                    Case studies are synthetic demonstrations only. They are not published recommendations,
                    verified results or real trading performance.
                </p>
            </div>
        </section>
    );
};
