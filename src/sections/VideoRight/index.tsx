import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const AIAssistantSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setIsVisible(true);
                        setHasAnimated(true);
                        if (videoRef.current) {
                            videoRef.current.play().catch(err => console.log('Autoplay prevented:', err));
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="bg-black text-white py-5 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className={`space-y-6 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="inline-flex items-center gap-2 bg-stone-950/80 border border-neutral-800 rounded-md px-3 py-2">
                            <span className="text-sm font-medium text-white">AI Assistant</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-medium text-white leading-tight">
                            Delegate Daily Tasks
                        </h3>

                        <p className="text-base text-stone-300 leading-relaxed max-w-md">
                            From managing calendars to drafting emails and summarizing meetings, our AI assistants work around the clock to keep your business running smarter and faster.
                        </p>

                        <div className="flex flex-wrap gap-2.5">
                            <div className="bg-stone-950 border border-neutral-800 rounded-md px-3 py-2">
                                <span className="text-sm font-medium text-white">Summaries</span>
                            </div>
                            <div className="bg-stone-950 border border-neutral-800 rounded-md px-3 py-2">
                                <span className="text-sm font-medium text-white">Scheduling</span>
                            </div>
                            <div className="bg-stone-950 border border-neutral-800 rounded-md px-3 py-2">
                                <span className="text-sm font-medium text-white">Many more</span>
                            </div>
                        </div>
                    </div>

                    {/* VIDEO BOX WITH CLIMBING ANIMATION */}
                    <div className="relative">
                        <div className="bg-stone-950/80 rounded-[22px] overflow-hidden border border-neutral-800 p-3 md:p-6">

                            {/* Video container with mask and climbing effect */}
                            <div className="relative overflow-hidden rounded-[14px]">
                                {/* Climbing video animation */}
                                <div
                                    className={`transition-all duration-[1500ms] ease-out ${
                                        isVisible ? 'translate-y-0' : 'translate-y-full'
                                    }`}
                                >
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source
                                            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>

                                {/* Bottom fade to black gradient overlay */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"></div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="absolute inset-0 cursor-pointer"
                            aria-label="Expand video"
                        />
                    </div>

                </div>
            </div>

            {isVideoOpen && (
                <div
                    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <video
                            className="w-full h-full"
                            controls
                            autoPlay
                            onClick={(e) => e.stopPropagation()}
                        >
                            <source
                                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AIAssistantSection;