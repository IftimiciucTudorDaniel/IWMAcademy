import { Crest } from "./Crest";

export const Footer = () => (
    <footer className="rg-footer">
        <div className="rg-container">
            <div className="rg-footer-grid">
                <div>
                    <a href="#home" className="rg-brand">
                        <Crest className="rg-crest" style={{ width: 53, height: 53 }} />
                        <span className="rg-wordmark">
                            <strong style={{ fontSize: 23 }}>IWM ACADEMY</strong>
                            <span>INFINITE WORLD MARKETS ACADEMY</span>
                        </span>
                    </a>
                    <p>
                        Private market research and educational trade planning. Investing and trading involve
                        risk, including loss of principal. This website presents a design concept and
                        illustrative examples, not a live membership service or real-time market data
                        platform.
                    </p>
                </div>
                <div className="rg-footer-links">
                    <a href="#desks">Trading desks</a>
                    <a href="#membership">Membership</a>
                    <a href="#faq">FAQ</a>
                </div>
            </div>
            <div className="rg-footer-bottom">
                © 2026 IWM Academy · Illustrative examples only · Policies and legal
                company details to be supplied by IWM.
            </div>
        </div>
    </footer>
);
