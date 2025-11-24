import React from "react";

export const HeroSection = () => (
    <section className="pt-40 pb-20 text-center bg-gradient-to-b from-black via-indigo-950 to-black text-white">
        <div className="container mx-auto px-6 sm:px-8">
            {/* ✦ Spiritual Hero Section — English Version */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                What is the question in your heart?
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-300">
          Let AI illuminate your path.
        </span>
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-base sm:text-lg text-white/70">
                Ask a question, explore hidden patterns, and receive clarity through modern divination.
                A calm, personal, spiritual space — crafted for your inner journey.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                    href="#"
                    className="rounded-full bg-indigo-500/90 text-white font-semibold text-base h-12 px-8 flex items-center justify-center transition-colors hover:bg-indigo-400/80 shadow-lg shadow-indigo-500/20"
                >
                    Begin Your Reading ✧
                </a>
                <a
                    href="#how-it-works"
                    className="rounded-full border border-white/20 font-semibold text-base h-12 px-8 flex items-center justify-center transition-colors hover:bg-white/10"
                >
                    Learn More
                </a>
            </div>
        </div>
    </section>
);
