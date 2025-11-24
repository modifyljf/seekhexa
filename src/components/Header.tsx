"use client"; // Declares this as a Client Component because we're using state (useState).

import React, {useState} from "react";
import Link from "next/link";
import {Icons} from "./Icons";

export const Header = () => {
    // 📱 State to manage the mobile menu's visibility.
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 🗺️ An array to hold our navigation links for easy mapping and maintenance.
    const navLinks = [
        {href: "/#features", label: "Features"},
        {href: "/#how-it-works", label: "How It Works"},
        {href: "/#contact", label: "Contact"},
    ];


    return (
        // 💈 The main header element, fixed to the top with a blur effect.
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-solid border-black/[.05] dark:border-white/[.05]">
            <div className="container mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
                {/* 🏠 Logo and link to the homepage. */}
                <Link href="/" className="flex items-center" aria-label="Back to homepage">
                    {/* 🖼️ Logo image was not suitable. Reverted to text logo. */}
                    {/* To use an image logo, ensure it is rectangular with a transparent background. */}
                    {/* <Image src="/logo.png" alt="SeekHexa Logo" width={120} height={30} priority /> */}
                    <span className="text-2xl font-bold tracking-tighter text-foreground">SeekHexa</span>
                </Link>

                {/* 🖥️ Desktop navigation links. */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}
                              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* 🛒 Desktop "App Store" call-to-action button. */}
                <div className="hidden md:flex">
                    <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                          className="rounded-full bg-foreground text-background font-medium text-sm h-10 px-5 flex items-center justify-center transition-colors hover:bg-foreground/80 gap-2">
                        <Icons.apple className="w-4 h-4"/>
                        <span>App Store</span>
                    </Link>
                </div>

                {/* 🍔 Mobile menu toggle button. */}
                <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu">
                    {isMenuOpen ? <Icons.close className="w-6 h-6"/> : <Icons.menu className="w-6 h-6"/>}
                </button>
            </div>

            {/* 📖 The collapsible mobile menu panel, shown only when isMenuOpen is true. */}
            {isMenuOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-sm">
                    <nav className="container mx-auto px-6 sm:px-8 flex flex-col items-center gap-6 py-8">
                        {/* 🧭 Mobile navigation links. */}
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href}
                                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                                // 👇 Close the menu when a link is clicked for a better user experience.
                                  onClick={() => setIsMenuOpen(false)}>
                                {link.label}
                            </Link>
                        ))}
                        {/* 🛒 Mobile "App Store" call-to-action button. */}
                        <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                              className="mt-4 rounded-full bg-foreground text-background font-medium text-base h-12 px-8 flex items-center justify-center transition-colors hover:bg-foreground/80 gap-2 w-full max-w-xs">
                            <Icons.apple className="w-5 h-5"/>
                            <span>App Store</span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
