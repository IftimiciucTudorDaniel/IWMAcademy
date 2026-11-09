import { bundleDesks, desks } from "./data";
import { useRoyalGreen } from "./context";

export const Desks = () => {
    const { goToMembership } = useRoyalGreen();

    const scrollToSwing = () => {
        document.getElementById("swing-membership")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="rg-section rg-alt" id="desks">
            <div className="rg-container">
                <div className="rg-section-title">
                    <span className="rg-eyebrow">Membership research desks</span>
                    <h2>Find the desk that matches how you trade.</h2>
                    <p>
                        Five clear research experiences. One consistent format for reading a plan, managing
                        risk and understanding the exit.
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
                                    Explore this desk →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="rg-bundle">
                    <div>
                        <span className="rg-eyebrow">For members who want broad coverage</span>
                        <h3>All Desks Membership</h3>
                        <p>One subscription covering exactly these four desks:</p>
                        <div className="rg-bundle-includes">
                            {bundleDesks.map((d) => (
                                <span className="rg-bundle-chip" key={d.key}>
                                    ✓ {d.name}
                                </span>
                            ))}
                            <span className="rg-bundle-chip rg-exclude">✕ Swing Trade — not included</span>
                        </div>
                    </div>
                    <button className="rg-btn rg-ivory" onClick={() => goToMembership("all")}>
                        Explore all desks →
                    </button>
                </div>
            </div>
        </section>
    );
};
