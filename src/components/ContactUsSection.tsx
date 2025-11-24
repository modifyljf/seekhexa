import React from "react";

export const ContactUsSection = () => (
    <section id="contact" className="py-20 bg-black/[.02] dark:bg-white/[.02]">
        <div className="container mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">
                Get in Touch
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-foreground/70">
                Have a question, feedback, or a partnership inquiry? We&apos;d love to hear from you. Drop us a line and our
                team will get back to you as soon as possible.
            </p>
            <div className="mt-8">
                <a href="mailto:help@seekhexa.com"
                   className="rounded-full bg-foreground text-background font-semibold text-base h-12 px-8 flex items-center justify-center transition-colors hover:bg-foreground/80 mx-auto w-fit"
                >
                    Contact Us
                </a>
            </div>
        </div>
    </section>
);
