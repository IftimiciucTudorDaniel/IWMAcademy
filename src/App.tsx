import "@/royal-green.css";
import { RoyalGreenProvider } from "@/royal-green/context";
import { Navbar } from "@/royal-green/Navbar";
import { Hero, Ribbon } from "@/royal-green/Hero";
import { SampleTrades } from "@/royal-green/SampleTrades";
import { TradeVideos } from "@/royal-green/TradeVideos";
import { Desks } from "@/royal-green/Desks";
import { MemberTerminal } from "@/royal-green/MemberTerminal";
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
                    IWM ACADEMY &nbsp;•&nbsp; PRIVATE TRADING RESEARCH &amp; EDUCATION
                </div>
                <Navbar />
                <main>
                    <Hero />
                    <Ribbon />
                    <SampleTrades />
                    <TradeVideos />
                    <Desks />
                    <MemberTerminal />
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
