import type {Metadata, Viewport} from "next";
import {GeistSans} from "geist/font/sans";
import {GeistMono} from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
    title: "SeekHexa — AI Divination & Spiritual Insights",
    metadataBase: new URL("https://seekhexa.com"),
    description:
        "SeekHexa is your AI-guided divination space. Ask meaningful questions, explore hexagrams, track emotional trends, and discover clarity through modern spiritual insight.",
    icons: {
        icon: "/favicon.png",
        apple: "/apple-touch-icon.png",
    },

    // Enhanced metadata
    openGraph: {
        title: "SeekHexa — AI Divination & Spiritual Insights",
        description: "A calm, personal, and beautifully crafted space for AI divination, journaling, and emotional clarity.",
        url: "https://seekhexa.com",
        siteName: "SeekHexa",
        images: [{
            url: "/og-image.png",
            width: 1200,
            height: 630,
            alt: "SeekHexa — AI Divination",
        }],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "SeekHexa — AI Divination & Spiritual Insights",
        description: "Ask deeper questions. Explore hidden patterns. Find clarity with AI-guided divination.",
        images: ["/og-image.png"],
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "SeekHexa",
    },
};

export const viewport: Viewport = {
    themeColor: "#0b0b14",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
        >
        <body className="antialiased bg-black text-white">
        {/* (Optional) A global wrapper if needed */}
        <div className="min-h-screen flex flex-col">{children}</div>
        </body>
        </html>
    );
}