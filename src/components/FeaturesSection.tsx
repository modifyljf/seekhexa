import React from "react";

export const FeaturesSection = () => {
    const features = [
        {
            title: "Smart Closet Management",
            description: "Every item gets a digital twin, neatly organized by category, color, and season. Say goodbye to closet chaos.",
        },
        {
            title: "Personalized AI Recommendations",
            description: "Based on weather, occasion, and your personal style, our AI stylist delivers endless outfit inspiration.",
        },
        {
            title: "Rediscover Your Wardrobe",
            description: "Unearth forgotten gems from the back of your closet. AI helps you find new ways to wear them.",
        },
        {
            title: "Outfit Calendar & Collections",
            description: "Save your favorite looks and plan your outfits for the week ahead. Make every morning effortless.",
        },
        {
            title: "Task-Driven Motivation",
            description: "Earn rewards by completing upload tasks. Keep your closet fresh and unlock more advanced features.",
        },
        {
            title: "Demo Closet & Onboarding",
            description: "Try our AI recommendations with a demo closet—no sign-up required. Quickly understand the core value of SeekHexa.",
        },
    ];

    return (
        <section id="features" className="py-20">
            <div className="container mx-auto px-6 sm:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">Powerful features designed for
                        you</h2>
                    <p className="max-w-xl mx-auto mt-4 text-foreground/70">We focus on every detail to provide the
                        ultimate styling experience.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <div key={feature.title}
                             className="p-6 rounded-2xl bg-background border border-solid border-black/[.05] dark:border-white/[.05]">
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-foreground/70">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
