import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, Video } from 'lucide-react';

// Edit this line to set/change the countdown target date & time for the event.
const EVENT_DATE = new Date('2026-10-28T09:00:00-04:00'); // Oct 28, 2026, 09:00 AM Eastern Time
const ZOOM_LINK = 'https://us06web.zoom.us/j/89488436561?pwd=IpFl3eYVGbk8T0HCMbtMVDYxJ4MjFX.1';

const MODAL_SEEN_KEY = 'iwm_live_event_modal_seen';
const DISMISSED_KEY = 'iwm_live_event_dismissed';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const getTimeLeft = (): TimeLeft => {
    const diff = EVENT_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
    };
};

const TimeBox: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 min-w-[56px] sm:min-w-[64px]">
        <span className="text-white text-xl sm:text-2xl font-bold tracking-tight font-['Figtree',sans-serif]">
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-stone-400 text-[10px] sm:text-xs uppercase tracking-wide font-['Figtree',sans-serif]">
            {label}
        </span>
    </div>
);

const LiveEventPopup: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showReminder, setShowReminder] = useState(false);
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let dismissed = false;
        let seen = false;
        try {
            dismissed = sessionStorage.getItem(DISMISSED_KEY) === 'true';
            seen = sessionStorage.getItem(MODAL_SEEN_KEY) === 'true';
        } catch {
            // sessionStorage unavailable (private mode, etc.) — fall back to always showing the popup
        }

        if (dismissed) return;

        if (seen) {
            setShowReminder(true);
        } else {
            const timer = setTimeout(() => setIsModalOpen(true), 1200);
            return () => clearTimeout(timer);
        }
    }, []);

    const closeModal = () => {
        setIsModalOpen(false);
        setShowReminder(true);
        try {
            sessionStorage.setItem(MODAL_SEEN_KEY, 'true');
        } catch {
            // ignore
        }
    };

    const dismissReminder = () => {
        setShowReminder(false);
        try {
            sessionStorage.setItem(DISMISSED_KEY, 'true');
        } catch {
            // ignore
        }
    };

    const reopenModal = () => {
        setShowReminder(false);
        setIsModalOpen(true);
    };

    return (
        <>
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-lg border border-neutral-800 rounded-2xl shadow-2xl shadow-purple-900/30 p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background:
                                'radial-gradient(70% 60% at 50% 0%, rgba(129, 74, 200, 0.25) 0%, rgba(12,10,15,1) 70%), #0c0a0f'
                        }}
                    >
                        <button
                            onClick={closeModal}
                            aria-label="Close"
                            className="absolute top-4 right-4 text-stone-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center gap-4 text-center">
                            <div className="inline-flex bg-purple-700/20 border border-purple-600/40 px-4 py-1.5 rounded-full">
                                <p className="text-purple-300 text-xs font-semibold uppercase tracking-wide font-['Figtree',sans-serif]">
                                    Exclusive Live Session
                                </p>
                            </div>

                            <h2 className="text-white text-[26px] sm:text-[32px] font-bold tracking-tight leading-tight md:tracking-[-1px] font-['Figtree',sans-serif]">
                                Trade Smarter. Invest with Confidence.
                            </h2>
                            <p className="text-stone-300 text-sm sm:text-base font-medium tracking-[-0.3px] leading-6 max-w-sm font-['Figtree',sans-serif]">
                                Join MR B STOCKS live and learn how to spot the right moments in the market.
                            </p>

                            <div className="w-full flex flex-col gap-2.5 bg-black/40 border border-neutral-800 rounded-xl p-4 text-left mt-2">
                                <div className="flex items-center gap-2.5">
                                    <Video className="w-4 h-4 text-purple-300 flex-shrink-0" />
                                    <p className="text-stone-200 text-sm font-medium font-['Figtree',sans-serif]">
                                        MR B STOCKS's Live Meeting
                                    </p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Calendar className="w-4 h-4 text-purple-300 flex-shrink-0" />
                                    <p className="text-stone-200 text-sm font-medium font-['Figtree',sans-serif]">
                                        Oct 28, 2026
                                    </p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Clock className="w-4 h-4 text-purple-300 flex-shrink-0" />
                                    <p className="text-stone-200 text-sm font-medium font-['Figtree',sans-serif]">
                                        09:00 AM Eastern Time (US and Canada)
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-3 mt-2">
                                <TimeBox value={timeLeft.days} label="Days" />
                                <TimeBox value={timeLeft.hours} label="Hours" />
                                <TimeBox value={timeLeft.minutes} label="Min" />
                                <TimeBox value={timeLeft.seconds} label="Sec" />
                            </div>

                            <a
                                href={ZOOM_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center w-full px-4 py-3.5 mt-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] bg-purple-700 hover:bg-purple-600 border border-purple-600 shadow-lg shadow-purple-900/50 hover:shadow-xl hover:shadow-purple-900/60"
                            >
                                <p className="text-white text-[15px] font-semibold tracking-[-0.3px] font-['Figtree',sans-serif] group-hover:scale-105 transition-transform">
                                    Join Live at 9:00 AM ET
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {showReminder && (
                <>
                    {/* Desktop reminder — floating pill, bottom-right corner */}
                    <div className="hidden md:flex fixed bottom-6 right-6 z-[90] items-center gap-3 bg-stone-950/95 border border-purple-700/40 rounded-xl shadow-xl shadow-purple-900/30 pl-4 pr-3 py-3 backdrop-blur-sm max-w-xs">
                        <button onClick={reopenModal} className="flex items-center gap-3 text-left">
                            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
                            </span>
                            <span className="flex flex-col">
                                <span className="text-white text-sm font-semibold font-['Figtree',sans-serif]">
                                    Live Session · Oct 28
                                </span>
                                <span className="text-stone-400 text-xs font-medium font-['Figtree',sans-serif]">
                                    {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h left · Join live
                                </span>
                            </span>
                        </button>
                        <button
                            onClick={dismissReminder}
                            aria-label="Dismiss reminder"
                            className="text-stone-500 hover:text-white transition-colors flex-shrink-0"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Mobile reminder — sticky bottom bar */}
                    <div className="flex md:hidden fixed bottom-0 inset-x-0 z-[90] items-center justify-between gap-3 bg-stone-950/95 border-t border-purple-700/40 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] px-4 py-3 backdrop-blur-sm">
                        <button onClick={reopenModal} className="flex items-center gap-2.5 text-left flex-1 min-w-0">
                            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500" />
                            </span>
                            <span className="flex flex-col min-w-0">
                                <span className="text-white text-sm font-semibold font-['Figtree',sans-serif] truncate">
                                    Live Session · Join at 9:00 AM ET
                                </span>
                                <span className="text-stone-400 text-xs font-medium font-['Figtree',sans-serif]">
                                    {timeLeft.days}d {String(timeLeft.hours).padStart(2, '0')}h left
                                </span>
                            </span>
                        </button>
                        <a
                            href={ZOOM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 bg-purple-700 hover:bg-purple-600 text-white text-xs font-semibold px-3 py-2 rounded-lg font-['Figtree',sans-serif]"
                        >
                            Join
                        </a>
                        <button
                            onClick={dismissReminder}
                            aria-label="Dismiss reminder"
                            className="text-stone-500 hover:text-white transition-colors flex-shrink-0"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default LiveEventPopup;
