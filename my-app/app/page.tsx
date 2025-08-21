"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  // Featured Brands Slideshow
  const brandImages = [
    { src: "/ho1.png",  text: "Discover Style" },
    { src: "/kitchen.PNG", text: "Comfort at Home" },
    { src: "/womenn.png", text: "Innovation Everyday" },
    { src: "/menn.png", text: "Trusted Quality" },
    { src: "/cute.PNG", text: "Make It Yours" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % brandImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [brandImages.length]);

  // Shop by Category Images - 15 slots
  const categoryImages = [
    "/c1.png","/c2.png","/c3.png","/c4.png","/c5.png","/c6.png",
    "/c7.png","/c8.png","/c9.png","/c10.png","/c11.png","/c12.png",
    "/c13.png","/c14.png","/c15.png",
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 mt-12">
      {/* Featured Brands Slideshow */}
      <h2 className="text-2xl font-bold mb-6 uppercase text-center">
        FEATURED BRANDS
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
        {/* Left Side: Slideshow */}
        <div className="relative w-full md:w-2/3 h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
          <Image
            src={brandImages[current].src}
            alt={`Brand ${current + 1}`}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold italic text-gray-800">
            {brandImages[current].text}
          </h3>
          <p className="mt-4 text-gray-600 text-sm sm:text-base text-center md:text-left leading-relaxed">
            Explore the best from our featured brands. New styles, trusted
            comfort, and everything you love — all in one place.
          </p>
        </div>
      </div>

      {/* Shop by Category Section */}
      <div className="mt-12 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-6 uppercase text-center">
          SHOP BY CATEGORY
        </h2>

        {/* First Row - 6 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
          {categoryImages.slice(0, 6).map((src, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 bg-gray-100"
            >
              <Image
                src={src}
                alt={`Category ${idx + 1}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>

        {/* Second Row - 6 images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-4">
          {categoryImages.slice(6, 12).map((src, idx) => (
            <div
              key={idx + 6}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 bg-gray-100"
            >
              <Image
                src={src}
                alt={`Category ${idx + 7}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>

        {/* Third Row - 3 images centered */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
          {categoryImages.slice(12).map((src, idx) => (
            <div
              key={idx + 12}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 bg-gray-100"
            >
              <Image
                src={src}
                alt={`Category ${idx + 13}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
