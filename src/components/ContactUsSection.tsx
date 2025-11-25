import React from "react";

export const ContactUsSection = () => (
    <section
        id="contact"
        className="py-24 bg-gradient-to-b from-indigo-950 to-black text-white"
    >
        <div className="container mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Connect With Us
            </h2>

            <p className="max-w-xl mx-auto mt-4 text-white/70">
                Questions, feedback, or collaboration ideas? We&apos;re here to listen.
                Step into this quiet space and let us know how we can support your journey.
            </p>

            <div className="mt-10">
                <a
                    href="mailto:contact@seekhexa.com"
                    className="rounded-full bg-indigo-500/90 text-white font-semibold text-base h-12 px-10 flex items-center justify-center transition-colors hover:bg-indigo-400/80 shadow-lg shadow-indigo-500/20 mx-auto w-fit"
                >
                    Contact Us ✧
                </a>
            </div>
        </div>
    </section>
);