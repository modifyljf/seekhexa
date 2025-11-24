import React from "react";
import Link from "next/link";
import {Icons} from "./Icons";

export const Footer = () => (
    <footer className="mt-auto bg-black pt-12 pb-8 border-t border-white/10">
        <div className="container mx-auto px-6 sm:px-8">
            <div className="grid md:grid-cols-3 gap-8">
                {/* Brand / Intro */}
                <div className="flex flex-col gap-4 items-start">
                    <Link
                        href="/"
                        className="text-xl font-bold tracking-tight text-white"
                    >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-cyan-300">
              SeekHexa
            </span>
                    </Link>
                    <p className="text-sm text-white/60 max-w-sm">
                        Your AI-guided divination space for questions, patterns, and quiet
                        moments of clarity.
                    </p>
                    <Link
                        href="https://apps.apple.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-medium text-sm h-10 px-5 flex items-center justify-center transition hover:brightness-110 gap-2 w-fit shadow-md shadow-indigo-500/30"
                    >
                        <Icons.apple className="w-4 h-4"/>
                        <span>App Store</span>
                    </Link>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 col-span-2">
                    <div>
                        <h4 className="font-semibold mb-4 text-white/90">Experience</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/#features"
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#how-it-works"
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    How It Works
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white/90">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/#contact"
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white/90">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className="text-sm text-white/60 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-white/50">
                <p>
                    &copy; {new Date().getFullYear()} SeekHexa. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);
