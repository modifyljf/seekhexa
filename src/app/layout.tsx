import type {Metadata} from "next";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
    title: "SeekHexa — AI Divination & Spiritual Insights",
    description:
        "SeekHexa is your AI-guided divination space. Ask meaningful questions, explore hexagrams, track emotional trends, and discover clarity through modern spiritual insight.",
    icons: {
        icon: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },

    // Enhanced metadata
    openGraph: {
        title: "SeekHexa — AI Divination & Spiritual Insights",
        description:
            "A calm, personal, and beautifully crafted space for AI divination, journaling, and emotional clarity.",
        url: "https://seekhexa.com",
        siteName: "SeekHexa",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "SeekHexa — AI Divination",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "SeekHexa — AI Divination & Spiritual Insights",
        description:
            "Ask deeper questions. Explore hidden patterns. Find clarity with AI-guided divination.",
        images: ["/og-image.png"],
    },

    themeColor: "#0b0b14",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
        >
        <head>
            {/* Mobile viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            {/* For iOS status bar styling */}
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        </head>

        <body className="antialiased bg-black text-white">
        {/* (Optional) A global wrapper if needed */}
        <div className="min-h-screen flex flex-col">{children}</div>
        </body>
        </html>
    );
}