import React from "react";
import { Icons } from "./Icons";

export const HowItWorksSection = () => {
    const steps = [
        {
            icon: <Icons.camera className="w-10 h-10 text-blue-500" />,
            title: "1. Snap & Upload",
            description: "Digitize your clothes, shoes, and accessories. Our AI automatically recognizes and categorizes them, effortlessly building your cloud closet.",
        },
        {
            icon: <Icons.sparkles className="w-10 h-10 text-blue-500" />,
            title: "2. Describe the Occasion",
            description: "Tell the AI your needs, like 'a chilly spring picnic tomorrow,' or simply pick an item to get styling ideas.",
        },
        {
            icon: <Icons.shirt className="w-10 h-10 text-blue-500" />,
            title: "3. Get Outfits",
            description: "Instantly receive multiple complete outfits, curated by AI from your own wardrobe. A new look for every day.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 bg-black/[.02] dark:bg-white/[.02]">
            <div className="container mx-auto px-6 sm:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">Reinvent your wardrobe in three simple steps</h2>
                    <p className="max-w-xl mx-auto mt-4 text-foreground/70">From upload to outfit, experience unparalleled convenience and intelligence.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-background p-8 rounded-2xl border border-solid border-black/[.05] dark:border-white/[.05] text-center sm:text-left">
                            <div className="flex justify-center sm:justify-start mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-foreground/70">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
