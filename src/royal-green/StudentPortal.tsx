import { useRoyalGreen } from "./context";

const checklist = [
    "Browse lessons from the Learning Labs you subscribed to.",
    "Open each case study to view the scenario, updates and closing takeaway.",
    "Maintain your own private self-directed learning journal.",
    "Manage renewal dates, invoices and cancellation in a few clicks.",
];

const portalRows = [
    { label: "Learning Overview", detail: "Progress and educational modules" },
    { label: "My Lessons", detail: "Course material, replays and resources" },
    { label: "Learning Community", detail: "Role-gated Discord learning access, where included" },
    { label: "Membership & Billing", detail: "Term, next renewal, receipts and cancellations" },
];

export const StudentPortal = () => {
    const { openModal } = useRoyalGreen();

    return (
        <section className="rg-section rg-light" id="experience">
            <div className="rg-container rg-member-layout">
                <div className="rg-member-copy">
                    <span className="rg-eyebrow">From enrollment to learning</span>
                    <h2>Your entire learning experience. Finally organized.</h2>
                    <p>
                        Discord remains a communications channel. The IWM Student Portal becomes the
                        permanent, structured home for every lesson, update, case-study record and billing
                        detail.
                    </p>
                    {checklist.map((item) => (
                        <div className="rg-checkline" key={item}>
                            <span>✓</span>
                            <div>{item}</div>
                        </div>
                    ))}
                    <div style={{ marginTop: 29 }}>
                        <button className="rg-btn rg-outline" onClick={() => openModal("terminal")}>
                            Preview student portal →
                        </button>
                    </div>
                </div>

                <div className="rg-member-panel">
                    <div className="rg-app-head">
                        <b style={{ letterSpacing: ".13em" }}>STUDENT PORTAL</b>
                        <span className="rg-demo-flag">Concept preview</span>
                    </div>
                    <div className="rg-app-body">
                        <aside className="rg-app-menu">
                            <span className="rg-selected">▣ Overview</span>
                            <span>◫ My lessons</span>
                            <span>▤ Learning community</span>
                            <span>◇ My journal</span>
                            <span>⚙ Membership</span>
                        </aside>
                        <div className="rg-app-main">
                            <h3>Good to see you.</h3>
                            <p>Student portal overview · Concept preview</p>
                            <div style={{ overflowX: "auto" }}>
                                <table className="rg-mini-table">
                                    <thead>
                                        <tr>
                                            <th>Section</th>
                                            <th>What it shows</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {portalRows.map((row) => (
                                            <tr key={row.label}>
                                                <td>{row.label}</td>
                                                <td>{row.detail}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ marginTop: 21 }}>
                                A centralized record helps students distinguish lessons from later updates, and
                                see their billing status at a glance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
