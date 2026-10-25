import React, { useState, useEffect, useRef } from 'react';
import { Check, TrendingUp } from 'lucide-react';

const PRICE = 587;
// Put the Revolut checkout link here once it's ready.
const CHECKOUT_LINK = 'https://checkout.revolut.com/subscription/a2ac11b7-b68d-485e-9511-4d441d4465fb';

const features: string[] = [
    '2–4x Live Trading Sessions Every Month',
    'Mr B Exclusive Swing Watchlist',
    'Weekly Market & Swing Setup Updates',
    'Private Trade & Portfolio Reviews',
    'Private Mr B Trading Community'
];

const SwingTradingSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="swing-trading"
            ref={sectionRef}
            className="relative w-full bg-black text-white px-4 py-16 sm:px-6 md:px-10 md:py-24 lg:py-28 overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div
                    className={`flex flex-col items-center gap-6 mb-16 md:mb-20 text-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                >
                    {/* Badge */}
                    <div className="inline-flex bg-stone-950/80 border border-neutral-800 px-4 py-2 rounded-lg">
                        <p className="text-white text-sm font-medium tracking-wide font-['Figtree',sans-serif]">
                            Swing Trading
                        </p>
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col gap-4 items-center max-w-4xl px-4">
                        <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[56px] font-bold tracking-tight leading-tight md:tracking-[-2px] md:leading-[55px] lg:leading-[62px] font-['Figtree',sans-serif]">
                            Swing Trade at the Right Price
                        </h2>
                        <p className="text-stone-300 text-base md:text-lg font-medium tracking-[-0.32px] md:tracking-[-0.36px] leading-6 md:leading-[27px] max-w-2xl font-['Figtree',sans-serif]">
                            A monthly plan built for traders who want to catch multi-day moves with clear setups and guidance
                        </p>
                    </div>
                </div>

                {/* Pricing Banner — full-width rectangle, high-contrast */}
                <div
                    className={`relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-2xl md:rounded-3xl border-2 border-purple-400/70 shadow-[0_0_100px_rgba(168,85,247,0.4)] transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{
                        background:
                            'linear-gradient(120deg, rgba(168,85,247,0.95) 0%, rgba(88,28,135,0.95) 45%, rgba(10,8,14,1) 100%)'
                    }}
                >
                    {/* Glow blobs for extra pop */}
                    <div className="absolute -top-24 -left-24 w-72 h-72 bg-fuchsia-500/40 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-600/40 rounded-full blur-[100px] pointer-events-none" />

                    {/* Popular ribbon */}
                    <div className="absolute top-0 right-0 z-20">
                        <div className="bg-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-bl-xl shadow-lg">
                            <p className="text-purple-900 text-xs sm:text-sm font-bold tracking-wide uppercase font-['Figtree',sans-serif]">
                                Most Popular
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 p-6 sm:p-8 md:p-10 lg:p-12">
                        {/* Left: info + features */}
                        <div className="flex flex-col gap-5 lg:gap-6 flex-1">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 border border-white/30 backdrop-blur-sm">
                                    <TrendingUp className="w-6 h-6 text-white" strokeWidth={2.2} />
                                </div>
                                <h3 className="text-white text-2xl md:text-[28px] font-bold tracking-[-0.5px] leading-tight font-['Figtree',sans-serif]">
                                    Swing Trading
                                </h3>
                            </div>

                            <p className="text-purple-50 text-base md:text-lg font-medium tracking-[-0.32px] leading-6 md:leading-[27px] max-w-xl font-['Figtree',sans-serif]">
                                Multi-day swing setups, live sessions, and a private community built around catching the bigger moves.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-1">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 group/feature">
                                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <p className="flex-1 text-white text-sm md:text-[15px] font-semibold tracking-[-0.3px] leading-[21px] font-['Figtree',sans-serif]">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: price + CTA, high-contrast white panel */}
                        <div className="flex flex-col items-center justify-center gap-5 bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:w-[300px] shrink-0 shadow-2xl">
                            <div className="flex flex-col items-center gap-1 text-center">
                                <span className="text-purple-900 text-5xl md:text-[52px] font-extrabold tracking-[-1.5px] leading-[1.1] font-['Figtree',sans-serif]">
                                    ${PRICE}
                                </span>
                                <span className="text-stone-500 text-sm font-semibold uppercase tracking-wide font-['Figtree',sans-serif]">
                                    per month
                                </span>
                            </div>

                            <a
                                href={CHECKOUT_LINK}
                                className="group flex items-center justify-center w-full px-4 py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] bg-purple-700 hover:bg-purple-800 shadow-lg shadow-purple-900/30"
                            >
                                <p className="text-white text-[15px] font-bold tracking-[-0.3px] leading-[18px] text-center font-['Figtree',sans-serif] group-hover:scale-105 transition-transform">
                                    Join Swing Trading
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SwingTradingSection;
