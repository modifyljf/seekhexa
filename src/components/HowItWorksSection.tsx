import React from "react";
import {Icons} from "./Icons";

// ✦ Updated for AI 占卜 App — "How It Works" 转化为 spiritual 卜卦流程

export const HowItWorksSection = () => {
    const steps = [
        {
            icon: <Icons.moon className="w-10 h-10 text-indigo-400"/>, // 可换更神秘的图标
            title: "1. Clarify Your Intention",
            description:
                "Write down what you truly want to know, or generate a refined question from your journal. Your intention is the source of the reading.",
        },
        {
            icon: <Icons.sparkles className="w-10 h-10 text-indigo-400"/>,
            title: "2. Choose or Auto‑Select a Method",
            description:
                "The system automatically selects the most suitable method—such as Liu Yao, Plum Blossom, or Qimen—based on your question. Switch manually anytime.",
        },
        {
            icon: <Icons.star className="w-10 h-10 text-indigo-400"/>,
            title: "3. Receive Your Reading",
            description:
                "Get a multi‑layered reading: symbolism, trends, timing, and actionable guidance—helping you navigate life with clarity.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="py-24 bg-gradient-to-b from-black to-indigo-950 text-white"
        >
            <div className="container mx-auto px-6 sm:px-8">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        How Divination Works — Three Steps to Clarity
                    </h2>
                    <p className="max-w-xl mx-auto mt-4 text-white/70">
                        From intention → hexagram → insight. A calm and intentional spiritual flow designed for you.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center sm:text-left shadow-xl shadow-black/20 hover:shadow-indigo-500/20 transition"
                        >
                            <div className="flex justify-center sm:justify-start mb-5">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-indigo-200 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
