import { useState } from "react";
import { Crest } from "./Crest";
import { useRoyalGreen } from "./context";

const navItems = [
    { href: "#learning-labs", label: "Learning Labs" },
    { href: "#case-studies", label: "Case studies" },
    { href: "#experience", label: "Student portal" },
    { href: "#membership", label: "Access plans" },
];

const mobileNavItems = [
    { href: "#learning-labs", label: "Browse Learning Labs" },
    { href: "#case-studies", label: "Explore case studies" },
    { href: "#experience", label: "Student portal" },
    { href: "#membership", label: "Choose access plan" },
    { href: "#faq", label: "Questions" },
];

export const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { goToMembership } = useRoyalGreen();

    return (
        <header className="rg-header">
            <div className="rg-container rg-nav">
                <a href="#home" className="rg-brand" aria-label="IWM Academy home">
                    <Crest className="rg-crest" />
                    <span className="rg-wordmark">
                        <strong>IWM ACADEMY</strong>
                        <span>INFINITE WORLD MARKETS ACADEMY</span>
                    </span>
                </a>
                <nav className="rg-navlinks" aria-label="Main navigation">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href}>
                            {item.label}
                        </a>
                    ))}
                    <button className="rg-btn rg-small" onClick={() => goToMembership()}>
                        Explore access →
                    </button>
                </nav>
                <button
                    className="rg-mobile-menu"
                    aria-expanded={mobileOpen}
                    aria-controls="rgMobileNav"
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    Menu ☰
                </button>
            </div>
            <nav
                id="rgMobileNav"
                className={`rg-mobile-nav${mobileOpen ? " rg-open" : ""}`}
                aria-label="Mobile navigation"
            >
                {mobileNavItems.map((item) => (
                    <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                    </a>
                ))}
            </nav>
        </header>
    );
};
