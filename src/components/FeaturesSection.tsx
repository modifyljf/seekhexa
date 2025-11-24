import React from "react";

export const FeaturesSection = () => {
    const features = [
        {
            title: "Intention-Based Questions",
            description:
                "Craft meaningful questions guided by your thoughts, emotions, and daily experiences. The clearer the intention, the clearer the reading.",
        },
        {
            title: "Multiple Divination Systems",
            description:
                "Automatically select or manually choose from Liu Yao, Plum Blossom, Qimen, Six Lines, or other methods—adapted to the nature of your question.",
        },
        {
            title: "Deep Hexagram Interpretation",
            description:
                "Receive layered insights including symbolism, movement, timing, and possible outcomes—all written with clarity and spiritual calmness.",
        },
        {
            title: "Insights From Your Journal",
            description:
                "Your emotions and daily notes become sources of divination context, allowing more accurate trend readings and deeper understanding.",
        },
        {
            title: "Long-Term Destiny Trends",
            description:
                "View emotional waves, five-element balance curves, and shifting life patterns through your personalized fate dashboard.",
        },
        {
            title: "Privacy-First Spiritual Space",
            description:
                "Vault mode protects your most private entries and readings—FaceID locked, fully encrypted, never used for prediction datasets.",
        },
    ];

    return (
        <section id="features"
                 className="py-24 bg-black text-white bg-gradient-to-b from-black via-indigo-950 to-black">
            <div className="container mx-auto px-6 sm:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        Powerful Features for Your Inner Journey
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-white/70">
                        A divination experience designed with intention, clarity, and spiritual depth.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl shadow-black/20 hover:shadow-indigo-500/20 transition"
                        >
                            <h3 className="text-lg font-semibold text-indigo-200 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-white/70 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};