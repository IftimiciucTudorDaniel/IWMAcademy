import { useState } from "react";
import { Crest } from "./Crest";
import { useRoyalGreen } from "./context";

const navItems = [
    { href: "#sample-trades", label: "Trade examples" },
    { href: "#desks", label: "Trading desks" },
    { href: "#experience", label: "Member terminal" },
    { href: "#membership", label: "Membership" },
];

const mobileNavItems = [
    { href: "#sample-trades", label: "Explore trade examples" },
    { href: "#desks", label: "Browse trading desks" },
    { href: "#experience", label: "Member terminal" },
    { href: "#membership", label: "Choose membership" },
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
                        Join the Academy →
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
