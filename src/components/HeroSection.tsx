import React from "react";

export const HeroSection = () => (
    <section className="pt-40 pb-20 text-center">
        <div className="container mx-auto px-6 sm:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
                Stop wondering what to wear.
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    Let AI be your personal stylist.
                </span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-foreground/70">
                Snap photos of your clothes, and SeekHexa will create endless outfits from what you already own. Start
                your smart wardrobe journey now.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#"
                   className="rounded-full bg-foreground text-background font-semibold text-base h-12 px-8 flex items-center justify-center transition-colors hover:bg-foreground/80">
                    Get Started Now
                </a>
                <a href="#how-it-works"
                   className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] font-semibold text-base h-12 px-8 flex items-center justify-center transition-colors hover:bg-black/[.05] dark:hover:bg-white/[.06]">
                    Learn More
                </a>
            </div>
        </div>
    </section>
);
