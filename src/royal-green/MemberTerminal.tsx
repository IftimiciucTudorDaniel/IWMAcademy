import { useRoyalGreen } from "./context";

const checklist = [
    "Browse research from the desks you subscribed to.",
    "Open each trade record to view levels, updates and closing notes.",
    "Maintain your own private self-directed trade journal.",
    "Manage renewal dates, invoices and cancellation in a few clicks.",
];

const logRows = [
    { desk: "Large-Cap & AI", entry: "$182.40", stop: "$176.90", exit: "$191.20" },
    { desk: "Swing Trade", entry: "$124.50", stop: "$118.75", exit: "$133.00" },
    { desk: "Earnings", entry: "Short $74.50", stop: "$77.10", exit: "Cover $70.20" },
];

export const MemberTerminal = () => {
    const { openModal } = useRoyalGreen();

    return (
        <section className="rg-section rg-light" id="experience">
            <div className="rg-container rg-member-layout">
                <div className="rg-member-copy">
                    <span className="rg-eyebrow">Beyond Discord alerts</span>
                    <h2>Your entire research experience. Finally organized.</h2>
                    <p>
                        Discord remains a communications channel. The IWM member terminal becomes the
                        permanent, structured home for every plan, update, trade record and billing detail.
                    </p>
                    {checklist.map((item) => (
                        <div className="rg-checkline" key={item}>
                            <span>✓</span>
                            <div>{item}</div>
                        </div>
                    ))}
                    <div style={{ marginTop: 29 }}>
                        <button className="rg-btn rg-outline" onClick={() => openModal("terminal")}>
                            Preview member terminal →
                        </button>
                    </div>
                </div>

                <div className="rg-member-panel">
                    <div className="rg-app-head">
                        <b style={{ letterSpacing: ".13em" }}>IWM MEMBER TERMINAL</b>
                        <span className="rg-demo-flag">Concept preview</span>
                    </div>
                    <div className="rg-app-body">
                        <aside className="rg-app-menu">
                            <span className="rg-selected">▣ Overview</span>
                            <span>◫ My desks</span>
                            <span>▤ Trade log</span>
                            <span>◇ My journal</span>
                            <span>⚙ Membership</span>
                        </aside>
                        <div className="rg-app-main">
                            <h3>Good to see you.</h3>
                            <p>Example trade log · Synthetic demonstration</p>
                            <div style={{ overflowX: "auto" }}>
                                <table className="rg-mini-table">
                                    <thead>
                                        <tr>
                                            <th>Research desk</th>
                                            <th>Entry</th>
                                            <th>Stop</th>
                                            <th>Exit example</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {logRows.map((row) => (
                                            <tr key={row.desk}>
                                                <td>{row.desk}</td>
                                                <td>{row.entry}</td>
                                                <td>{row.stop}</td>
                                                <td>{row.exit}</td>
                                                <td>
                                                    <span className="rg-status">Closed · demo</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ marginTop: 21 }}>
                                A centralized record helps members distinguish initial plans from later updates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
