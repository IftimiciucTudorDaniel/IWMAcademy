import "@/royal-green.css";
import { RoyalGreenProvider } from "@/royal-green/context";
import { Navbar } from "@/royal-green/Navbar";
import { Hero, Ribbon } from "@/royal-green/Hero";
import { LearningLabs } from "@/royal-green/LearningLabs";
import { CaseStudies } from "@/royal-green/CaseStudies";
import { TradeVideos } from "@/royal-green/TradeVideos";
import { StudentPortal } from "@/royal-green/StudentPortal";
import { Membership } from "@/royal-green/Membership";
import { FAQ, FinalCTA } from "@/royal-green/FAQ";
import { Footer } from "@/royal-green/Footer";
import { MobileCTA } from "@/royal-green/MobileCTA";
import { JoinModal } from "@/royal-green/JoinModal";

export const App = () => {
    return (
        <RoyalGreenProvider>
            <div className="rg-page">
                <div className="rg-prebar">
                    IWM ACADEMY &nbsp;•&nbsp; THE LEARNING ECOSYSTEM
                </div>
                <Navbar />
                <main>
                    <Hero />
                    <Ribbon />
                    <LearningLabs />
                    <CaseStudies />
                    <TradeVideos />
                    <StudentPortal />
                    <Membership />
                    <FAQ />
                    <FinalCTA />
                </main>
                <Footer />
                <MobileCTA />
                <JoinModal />
            </div>
        </RoyalGreenProvider>
    );
};
