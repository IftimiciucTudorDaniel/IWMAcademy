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
                        Private online financial learning environment. Investing and trading involve risk,
                        including loss of principal. This website presents an educational design concept and
                        illustrative case studies, not investment advice, a live brokerage service or
                        real-time market data platform.
                    </p>
                </div>
                <div className="rg-footer-links">
                    <a href="#learning-labs">Learning Labs</a>
                    <a href="#membership">Membership</a>
                    <a href="#faq">FAQ</a>
                </div>
            </div>
            <div className="rg-footer-bottom">
                © 2026 IWM Academy · Illustrative case studies only · Policies and legal
                company details to be supplied by IWM.
            </div>
        </div>
    </footer>
);
