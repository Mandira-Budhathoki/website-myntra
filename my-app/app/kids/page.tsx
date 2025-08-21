"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/kid1.png", title: "Kids Fashion", subtitle: "Trendy Styles" },
  { src: "/kid2.png", title: "Casual Wear", subtitle: "Everyday Comfort" },
  { src: "/kid3.png", title: "Party Wear", subtitle: "Up to 40% Off" },
  { src: "/kid4.png", title: "Shoes", subtitle: "Best Picks" },
  { src: "/kid5.jpeg", title: "Winter Wear", subtitle: "Stay Warm & Stylish" },
];

const circularImages = [
  "/fb1.png","/fb2.png","/fb3.png","/fb4.png","/fb5.png","/fb6.png","/fb7.png","/fb8.png"
];

export default function KidsPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full flex flex-col items-center space-y-8 px-4 md:px-8 lg:px-16">
      
      {/* Carousel */}
      <div className="relative w-full max-w-[1250px] h-[250px] sm:h-[300px] md:h-[350px] mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-100 flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-2/3 h-2/3 sm:h-full">
          <Image
            src={slides[current].src}
            alt={slides[current].title}
            width={850}
            height={350}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full sm:w-1/3 pl-0 sm:pl-8 mt-4 sm:mt-0 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold">{slides[current].title}</h2>
          <p className="text-md sm:text-lg mt-2 text-gray-700">{slides[current].subtitle}</p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-2"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-2"
        >
          ▶
        </button>

        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${i === current ? "bg-black" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>

      {/* 8 Circular Images */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-[1250px]">
        {circularImages.map((src, i) => (
          <div key={i} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-yellow-400 overflow-hidden flex items-center justify-center">
            <Image src={src} alt={`circle-${i + 1}`} width={80} height={80} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>

      {/* Full Desktop Banner */}
      <div className="w-full h-[150px] sm:h-[200px] md:h-[250px] mt-6">
        <Image
          src="/child.webp"
          alt="Kids Banner"
          width={1800}
          height={200}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Iconic Brands Section */}
      <div className="w-full bg-emerald-600 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8">Iconic Brands</h2>
        <div className="max-w-[1250px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
              <Image src={`/ic${i}.png`} alt={`Brand ${i}`} width={190} height={90} className="object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* 10 Pictures Section */}
      <div className="w-full py-10 flex flex-col items-center gap-8">
        {[ [1,2,3,4,5], [6,7,8,9,10] ].map((row, idx) => (
          <div key={idx} className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {row.map((i) => (
              <div key={i} className="overflow-hidden flex items-center justify-center w-[140px] sm:w-[180px] h-[180px] sm:h-[250px] transition-transform duration-300 ease-in-out hover:scale-105">
                <Image src={`/e${i}.png`} alt={`Pic ${i}`} width={200} height={250} className="object-contain w-full h-full"/>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Staggered Big Images */}
      <div className="w-full flex flex-col gap-8 px-4 sm:px-10 py-10">
        { [ [1,2,3,4], [5,6,7,8] ].map((row, ridx) => (
          <div key={ridx} className="w-full flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-0">
            {row.map((i, idx) => (
              <div key={i} className={`overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ${ridx===0 && (idx===1?'sm:relative sm:top-3':'')} ${ridx===0 && (idx===2?'sm:relative sm:top-4':'')} ${ridx===1 && (idx===0?'sm:relative sm:top-2':'')} ${ridx===1 && (idx===1?'sm:relative sm:top-3':'')} ${ridx===1 && (idx===2?'sm:relative sm:top-2':'')}`}>
                <Image src={`/ex${i}.png`} alt={`Stagger ${i}`} width={200} height={500} className="object-cover sm:w-[250px] sm:h-auto"/>
              </div>
            ))}
          </div>
        )) }
      </div>

      {/* Last Staggered 4 Images */}
      <div className="w-full flex flex-wrap justify-center sm:justify-between px-4 sm:px-10 py-10 gap-4 sm:gap-0">
        {[9,10,11,12].map((i, idx) => (
          <div key={i} className={`overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 ${idx===1?'sm:relative sm:top-3':''} ${idx===2?'sm:relative sm:top-4':''}`}>
            <Image src={`/ex${i}.png`} alt={`Last ${i}`} width={200} height={500} className="object-cover sm:w-[250px] sm:h-auto"/>
          </div>
        ))}
      </div>

      {/* Budget Buy Section */}
      <div className="w-full py-10 px-4 sm:px-10 flex flex-col items-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Budget Buy</h3>
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="overflow-hidden flex items-center justify-center w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] transition-transform duration-300 ease-in-out hover:scale-105">
              <Image src={`/bb${i===4?'4':i}.png`} alt={`Budget ${i}`} width={180} height={180} className="object-cover w-full h-full"/>
            </div>
          ))}
        </div>
      </div>

      {/* Shop More Brands Section */}
      <div className="w-full py-10 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Shop More Brands</h2>
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-full overflow-hidden">
              <Image src={`/sh${i}.png`} alt={`Brand ${i}`} width={170} height={170} className="object-cover w-full h-full"/>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
