import { bundleDesks, desks } from "./data";
import { useRoyalGreen } from "./context";

export const LearningLabs = () => {
    const { goToMembership } = useRoyalGreen();

    const scrollToSwing = () => {
        document.getElementById("swing-membership")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="rg-section rg-alt" id="learning-labs">
            <div className="rg-container">
                <div className="rg-section-title">
                    <span className="rg-eyebrow">Program directory</span>
                    <h2>Five specialist Learning Labs.</h2>
                    <p>
                        Five clear learning experiences. One consistent format for reading a case study,
                        understanding risk and following the educational curriculum.
                    </p>
                </div>

                <div className="rg-desks">
                    {desks.map((desk) => (
                        <article className={`rg-desk${desk.spotlight ? " rg-spotlight" : ""}`} key={desk.key}>
                            <div className="rg-desk-index">
                                <span>{desk.index}</span>
                                <span>{desk.tag}</span>
                            </div>
                            <h3>{desk.name}</h3>
                            <div className="rg-aka">{desk.aka}</div>
                            <p>{desk.desc}</p>
                            <div className="rg-desk-footer">
                                <span>{desk.footer}</span>
                                <button
                                    className="rg-text-link"
                                    onClick={() =>
                                        desk.key === "swing" ? scrollToSwing() : goToMembership(desk.key)
                                    }
                                >
                                    Explore this lab →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="rg-bundle">
                    <div>
                        <span className="rg-eyebrow">For students who want broad coverage</span>
                        <h3>All Labs Bundle</h3>
                        <p>One membership covering exactly these four Learning Labs:</p>
                        <div className="rg-bundle-includes">
                            {bundleDesks.map((d) => (
                                <span className="rg-bundle-chip" key={d.key}>
                                    ✓ {d.name}
                                </span>
                            ))}
                            <span className="rg-bundle-chip rg-exclude">
                                ✕ Market Timing Lab — not included
                            </span>
                        </div>
                    </div>
                    <button className="rg-btn rg-ivory" onClick={() => goToMembership("all")}>
                        Explore all labs →
                    </button>
                </div>
            </div>
        </section>
    );
};
