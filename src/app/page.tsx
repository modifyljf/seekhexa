import React from "react";
import {FeaturesSection} from "@/components/FeaturesSection";
import {FinalCTASection} from "@/components/FinalCTASection";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {HeroSection} from "@/components/HeroSection";
import {HowItWorksSection} from "@/components/HowItWorksSection";
import {AppPreviewSection} from "@/components/AppPreviewSection";
import {ContactUsSection} from "@/components/ContactUsSection";
export default function Home() {
    return (
        <div className="bg-background text-foreground font-sans">
            <Header/>
            <main>
                <HeroSection/>
                <HowItWorksSection/>
                <FeaturesSection/>
                <ContactUsSection/>
                <FinalCTASection/>
            </main>
            <Footer/>
        </div>
    );
}
