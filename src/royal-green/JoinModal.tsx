import { useEffect, useRef, useState } from "react";
import { deskNames } from "./data";
import { useRoyalGreen } from "./context";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const JoinModal = () => {
    const { modalMode, closeModal, selectedDesk, term } = useRoyalGreen();
    const isOpen = modalMode !== null;
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState("");
    const closeRef = useRef<HTMLButtonElement>(null);
    const priorFocus = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;
        priorFocus.current = document.activeElement as HTMLElement;
        setStep(modalMode === "terminal" ? 3 : 0);
        setError("");
        setAgree(false);
        document.body.classList.add("rg-modal-open");
        closeRef.current?.focus();
        return () => {
            document.body.classList.remove("rg-modal-open");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, modalMode]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleClose = () => {
        closeModal();
        priorFocus.current?.focus?.();
    };

    if (!isOpen) return null;

    const summary = (
        <div className="rg-modal-summary">
            <div className="rg-eyebrow">Selected membership</div>
            <strong>{deskNames[selectedDesk]}</strong>
            <div className="rg-detail">
                <span>Term</span>
                <b>{term === 12 ? "1 Year" : `${term} Month${term > 1 ? "s" : ""}`}</b>
            </div>
            <div className="rg-detail">
                <span>Amount due</span>
                <b>Not configured in prototype</b>
            </div>
            <div className="rg-detail">
                <span>Auto-renewal</span>
                <b>Only with explicit consent</b>
            </div>
        </div>
    );

    const stepper = (
        <div className="rg-stepper" aria-hidden="true">
            <span className="rg-done" />
            <span className={step > 0 ? "rg-done" : ""} />
            <span className={step > 1 ? "rg-done" : ""} />
        </div>
    );

    const continueFromEmail = () => {
        const trimmed = email.trim();
        if (!emailPattern.test(trimmed)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        setStep(1);
    };

    const continueFromReview = () => {
        if (!agree) {
            setError("Please confirm that you understand this is a demo.");
            return;
        }
        setError("");
        setStep(2);
    };

    return (
        <div
            className="rg-modal rg-open"
            role="dialog"
            aria-modal="true"
            aria-label="Membership demonstration"
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
        >
            <div className="rg-modal-box">
                <div className="rg-modal-header">
                    <strong>IWM ACADEMY · STUDENT JOURNEY</strong>
                    <button className="rg-close" ref={closeRef} aria-label="Close preview" onClick={handleClose}>
                        ×
                    </button>
                </div>
                <div className="rg-modal-main">
                    {step === 0 && (
                        <>
                            {stepper}
                            <span className="rg-eyebrow">1 / 3 · Your account</span>
                            <h2>Join with your email.</h2>
                            <p>
                                No long registration forms. On the real website, a one-time email verification
                                link securely signs you in; you can create your password later if needed.
                            </p>
                            <div className="rg-form-field">
                                <label htmlFor="rgEmailInput">Email address</label>
                                <input
                                    type="email"
                                    id="rgEmailInput"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="rg-error" aria-live="polite">
                                {error}
                            </div>
                            {summary}
                            <div className="rg-modal-actions">
                                <button className="rg-btn rg-ivory" onClick={continueFromEmail}>
                                    Continue →
                                </button>
                                <button className="rg-link-btn" onClick={handleClose}>
                                    Back to website
                                </button>
                            </div>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            {stepper}
                            <span className="rg-eyebrow">2 / 3 · Review</span>
                            <h2>Everything, clearly explained.</h2>
                            <p>
                                One Learning Lab, one term, a transparent renewal policy. A production website must
                                display the exact verified amount and charge date before enabling payment.
                            </p>
                            {summary}
                            <div className="rg-detail">
                                <span>Email</span>
                                <b>{email}</b>
                            </div>
                            <div className="rg-notice">
                                This is an interface demonstration. Live billing must stay disabled until the
                                server returns an approved price, taxes, renewal amount and payment terms.
                            </div>
                            <label className="rg-checkbox-row">
                                <input
                                    type="checkbox"
                                    checked={agree}
                                    onChange={(e) => setAgree(e.target.checked)}
                                />
                                <span>
                                    I understand this is a demonstration and no payment or subscription will be
                                    created.
                                </span>
                            </label>
                            <div className="rg-error" aria-live="polite">
                                {error}
                            </div>
                            <div className="rg-modal-actions">
                                <button className="rg-btn rg-ivory" onClick={continueFromReview}>
                                    Continue to checkout preview →
                                </button>
                                <button className="rg-link-btn" onClick={() => setStep(0)}>
                                    Back
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            {stepper}
                            <span className="rg-eyebrow">3 / 3 · Payment handoff</span>
                            <h2>A calm, secure checkout.</h2>

                            <p>
                                The live product will open a verified, payment-provider-hosted checkout.
                                Payment details are never collected by this prototype. Access activates only
                                after the backend verifies payment and subscription state.
                            </p>
                            <div className="rg-notice">
                                LIVE PAYMENT NOT CONNECTED · No card data is collected · No order is placed · No
                                payment is simulated as real.
                            </div>
                            {summary}
                            <div className="rg-modal-actions">
                                <button className="rg-btn rg-ivory" onClick={() => setStep(3)}>
                                    See student portal demo →
                                </button>
                                <button className="rg-link-btn" onClick={() => setStep(1)}>
                                    Back
                                </button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <span className="rg-eyebrow">Student portal · preview only</span>
                            <h2>Welcome to your lab.</h2>
                            <p>
                                On the real site, this view is unlocked only after verified payment. Here, it is
                                a public demonstration of the experience.
                            </p>
                            <div className="rg-demo-dashboard">
                                <span className="rg-demo-flag">Sample dashboard · no account created</span>
                                <h3>{deskNames[selectedDesk]}</h3>
                                <div className="rg-dashboard-row">
                                    <span>Lessons</span>
                                    <b>Case studies with full scenario, pathway and takeaway</b>
                                </div>
                                <div className="rg-dashboard-row">
                                    <span>Updates</span>
                                    <b>Timestamped changes &amp; commentary</b>
                                </div>
                                <div className="rg-dashboard-row">
                                    <span>Lesson archive</span>
                                    <b>Review and outcome history</b>
                                </div>
                                <div className="rg-dashboard-row">
                                    <span>Discord</span>
                                    <b>Connect after confirmed membership</b>
                                </div>
                                <div className="rg-dashboard-row">
                                    <span>Billing</span>
                                    <b>Renewal · invoices · cancellation</b>
                                </div>
                            </div>
                            <div className="rg-notice">
                                The finished student portal will use real educational content and
                                server-enforced lab permissions. It will not execute brokerage orders or
                                manage students' investment funds.
                            </div>
                            <div className="rg-modal-actions">
                                <button className="rg-btn rg-ivory" onClick={handleClose}>
                                    Close preview →
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
