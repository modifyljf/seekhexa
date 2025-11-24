"use client"; // 👈 This makes it a Client Component, so we can use state and interactions.

import React, {useState} from "react";
import Image from "next/image";

// 🖼️ Array of your app screenshots.
// Make sure you have these images in your /public/app/ directory.
const screenshots = [
    "/app/screenshot-1.png",
    "/app/screenshot-2.png",
    "/app/screenshot-3.png",
];

export const AppPreviewSection = () => {
    // 🧠 State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState(0);

    // ➡️ Function to go to the next slide
    const goToNext = () => {
        const isLastSlide = currentIndex === screenshots.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // ⬅️ Function to go to the previous slide
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? screenshots.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section id="preview" className="py-20 bg-black/[.02] dark:bg-white/[.02]">
            <div className="container mx-auto px-6 sm:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter">A Glimpse Inside the App</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-foreground/70">
                        Intuitive, elegant, and powerful. See for yourself how SeekHexa makes managing your closet and
                        daily
                        outfits simpler than ever.
                    </p>
                </div>

                {/* 📱 Phone Mockup Container */}
                <div
                    className="relative mx-auto border-gray-800 dark:border-gray-700 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    {/* 🤳 Mockup UI elements (notch, buttons) */}
                    <div
                        className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                    {/* 🖥️ Screen with Carousel */}
                    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-black relative group">
                        {/* 🎠 Carousel Wrapper */}
                        <div className="h-full w-full whitespace-nowrap transition-transform duration-500 ease-in-out"
                             style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                            {screenshots.map((src, index) => (
                                <div key={index} className="inline-block h-full w-full">
                                    <Image
                                        src={src}
                                        alt={`SeekHexa App screenshot ${index + 1}`}
                                        width={300}
                                        height={600}
                                        className="w-full h-full object-cover"
                                        priority={index === 0} // ⚡ Prioritize loading the first image
                                    />
                                </div>
                            ))}
                        </div>

                        {/* ⬅️ Previous Button */}
                        <button onClick={goToPrevious}
                                className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-opacity opacity-0 group-hover:opacity-100 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>

                        {/* ➡️ Next Button */}
                        <button onClick={goToNext}
                                className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/30 text-white rounded-full hover:bg-black/50 transition-opacity opacity-0 group-hover:opacity-100 z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                            </svg>
                        </button>

                        {/* 🔵 Dots for navigation */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {screenshots.map((_, index) => (
                                <div key={index}
                                     onClick={() => setCurrentIndex(index)}
                                     className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
