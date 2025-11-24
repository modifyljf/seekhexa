import React from "react";

// ✦ Divination-Themed Icon Set — English Version
// Replaces clothing-related icons with mystical / spiritual symbols

export const Icons = {
    menu: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    ),

    close: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    ),

    // 🌙 Moon — intention, introspection
    moon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    ),

    // ✧ Sparkles — inspiration, energy, magical feeling
    sparkles: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="M12 3L9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5z" />
            <path d="M20 3L18 8" />
            <path d="M4 21l2-5" />
        </svg>
    ),

    // ★ Star — revelation, insight, outcome
    star: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10" />
        </svg>
    ),

    check: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    ),

    apple: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
            {...props}
            viewBox="0 0 384 512"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C39.2 141.1 0 183.2 0 241.2c0 70.7 60.8 128.5 160.8 128.5 33.7 0 70.1-23.2 85.2-23.2 15.2 0 49.2 23.2 85.2 23.2 72.2 0 122.2-57.2 122.2-121.5.2-39.2-25.2-73.5-61.5-82.1zM120.2 424.1c-35.5-1.2-65.3-24.8-86.2-56.7-20.9-31.8-25.6-71.5-15.6-114.2 20.9 32.4 57.9 58.9 97.2 58.9 39.2 0 75.2-25.2 97.2-58.9 2.2 4.7 4.7 9.7 7.2 14.7-20.9 31.8-56.7 56.7-95.2 56.7-1.2 0-2.5 0-3.7 0z" />
        </svg>
    ),
};