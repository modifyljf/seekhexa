"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icons } from "./Icons";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/#features", label: "Features" },
        { href: "/#how-it-works", label: "How It Works" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10"
        >
            <div className="container mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center"
                    aria-label="Back to homepage"
                >
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-cyan-300">
              SeekHexa
            </span>
          </span>
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Link
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-medium text-sm h-10 px-5 flex items-center justify-center gap-2 transition hover:brightness-110 shadow-lg shadow-indigo-500/30"
                    >
                        <Icons.apple className="w-4 h-4" />
                        <span>App Store</span>
                    </Link>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <Icons.close className="w-6 h-6" />
                    ) : (
                        <Icons.menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
                    <nav className="container mx-auto px-6 sm:px-8 flex flex-col items-center gap-6 py-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-white/80 hover:text-white transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            href="https://apps.apple.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-medium text-base h-12 px-8 flex items-center justify-center gap-2 w-full max-w-xs transition hover:brightness-110 shadow-lg shadow-indigo-500/30"
                        >
                            <Icons.apple className="w-5 h-5" />
                            <span>App Store</span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};