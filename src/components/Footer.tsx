import React from "react";
import Link from "next/link";
import { Icons } from "./Icons";

export const Footer = () => (
    <footer className="py-12 border-t border-solid border-black/[.05] dark:border-white/[.05]">
        <div className="container mx-auto px-6 sm:px-8">
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4 items-start">
                    <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
                        SeekHexa
                    </Link>
                    <p className="text-sm text-foreground/60">
                        Your personal AI stylist.
                    </p>
                    <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                          className="mt-2 rounded-full bg-foreground text-background font-medium text-sm h-10 px-5 flex items-center justify-center transition-colors hover:bg-foreground/80 gap-2 w-fit">
                        <Icons.apple className="w-4 h-4" />
                        <span>App Store</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 col-span-2">
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#features" className="text-sm text-foreground/70 hover:text-foreground">Features</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#contact" className="text-sm text-foreground/70 hover:text-foreground">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy-policy" className="text-sm text-foreground/70 hover:text-foreground">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="text-sm text-foreground/70 hover:text-foreground">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-solid border-black/[.05] dark:border-white/[.05] text-center text-sm text-foreground/60">
                <p>&copy; {new Date().getFullYear()} SeekHexa. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
