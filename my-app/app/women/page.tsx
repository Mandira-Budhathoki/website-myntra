"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  { src: "/women.PNG", title: "Dresses", subtitle: "Min. 50% Off" },
  { src: "/women1.PNG", title: "Tops & Tees", subtitle: "Starting from ₹400" },
  { src: "/women2.PNG", title: "Saree", subtitle: "Up to 50% Off" },
  { src: "/watch.PNG", title: "Watch", subtitle: "Premium Collection" },
  { src: "/women3.PNG", title: "Sangria", subtitle: "Exclusive Styles" },
];

export default function WomenPage() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Carousel */}
      <div className="relative w-full max-w-[1100px] h-[350px] mx-auto overflow-hidden rounded-lg shadow-lg flex flex-col md:flex-row bg-gray-100 mt-4">
        {/* Left Side Image */}
        <div className="w-full md:w-2/3 h-[200px] md:h-full">
          <Image
            src={slides[current].src}
            alt={slides[current].title}
            width={600}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Right Side Text */}
        <div className="w-full md:w-1/3 h-[150px] md:h-full flex flex-col items-center justify-center bg-white p-4">
          <h2 className="text-xl md:text-2xl font-bold">{slides[current].title}</h2>
          <p className="text-sm md:text-lg mt-2 text-gray-700">{slides[current].subtitle}</p>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-2 md:p-3"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 text-black rounded-full p-2 md:p-3"
        >
          ▶
        </button>

        {/* Dots */}
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

      {/* BIGGEST DEALS ON TOP BRANDS */}
      <div className="px-4 md:px-12 mt-8">
        <h2 className="text-2xl font-bold uppercase mb-8 text-left">BIGGEST DEALS ON TOP BRANDS</h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-between">
          {[
            { img1: "/w1.PNG", label1: "BIBA", img2: "/red (2).PNG", label2: "MIN. 40% Off" },
            { img1: "/black.jpg", label1: "Upto 60% OFF", img2: "/flower.jpeg", label2: "United Colors 40-70% Off" },
            { img1: "/green.PNG", label1: "Up To 50% Off", img2: "/w6.PNG", label2: "Up To 40% Off" },
            { img1: "/w7.PNG", label1: "Up to 50% Off", img2: "/w8.PNG", label2: "Bags" },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 bg-gray-100 p-4 rounded-lg flex flex-col gap-6 min-w-[180px]">
              <div className="rounded-lg overflow-hidden flex justify-center">
                <Image src={item.img1} alt={item.label1} width={180} height={180} className="object-contain w-[180px] h-[180px]" priority />
              </div>
              <p className="text-center font-semibold">{item.label1}</p>
              <div className="rounded-lg overflow-hidden flex justify-center">
                <Image src={item.img2} alt={item.label2} width={180} height={180} className="object-contain w-[180px] h-[180px]" priority />
              </div>
              <p className="text-center font-semibold">{item.label2}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-gray-100 px-4 md:px-12 py-8 mt-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-left">CATEGORIES</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { src: "/kurtas.jpeg", label: "Kurtas" },
            { src: "/saree.jpeg", label: "Sarees" },
            { src: "/flats.jpeg", label: "Flats" },
            { src: "/shortss.jpeg", label: "Shorts" },
            { src: "/1Piece.jpeg", label: "One-piece" },
            { src: "/handbag.jpeg", label: "Bag" },
          ].map((cat, idx) => (
            <div key={idx} className="w-[140px] sm:w-[45%] md:w-36 flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <Image src={cat.src} alt={cat.label} width={144} height={144} className="object-cover w-full h-full" priority />
              </div>
              <p className="text-sm mt-2 text-center font-medium">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MYNTRA LUXE */}
      <div className="px-4 md:px-12 py-8 mt-6">
        <h2 className="text-2xl font-bold mb-6 uppercase">MYNTRA LUXE</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {["/wl1.PNG","/wl2.PNG","/wl3.PNG","/wl5.PNG","/wl6.PNG"].map((img, idx) => (
            <div key={idx} className="flex-1 min-w-[200px] md:max-w-[200px] border-2 border-black rounded-lg overflow-hidden">
              <Image src={img} alt={`Luxe ${idx+1}`} width={320} height={320} className="object-cover w-full h-full" priority />
            </div>
          ))}
        </div>
      </div>

      {/* Function to render any 5-image section with responsive 2-per-row */}
      {[
        { title: "TRENDING IN WESTERN WEAR", images: ["/we1.PNG","/we2.PNG","/we3.PNG","/we4.PNG","/we5.PNG"], labels: ["Moss and Melange","Mod Blocking","Red Tops and Tees","Daily Wear Tees","Eco-Friendly Tees"], sublabels: ["Starting at ₹1,299","Up to 40% Off","Flat 35% Off","Up to 50% Off","Starting at ₹799"] },
        { title: "TRENDING IN INDIAN WEAR", images: ["/i1.PNG","/i2.PNG","/i3.PNG","/i4.PNG","/i5.PNG"], labels: ["Pink paradise","Regal Mustard","Fusion Dresses","Kurta set","Summer Ready"], sublabels: ["Up to 40% Off","Starting at ₹499","Flat 35% Off","Up to 50% Off","Starting at ₹699"] },
        { title: "TRENDING IN FOOTWEAR", images: ["/f1.PNG","/loafer.jpeg","/f3.PNG","/f4.PNG","/f5.PNG"], labels: ["Sneakers","Loafers","Running Shoes","Sandals","Formal Shoes"], sublabels: ["Starting at ₹999","Up to 30% Off","Flat 25% Off","Starting at ₹499","Up to 40% Off"] },
        { title: "TRENDING IN ACCESSORIES", images: ["/a1.PNG","/a2.PNG","/a3.PNG","/a4.PNG","/a5.PNG"], labels: ["Best of Imittires","Mangalsutra Collection","Handcrafted jewellery","Rose Gold watches","White watches"], sublabels: ["Grand Jewellery","Ahead of its time","A classic","A new world","Understand new style"] },
        { title: "TRENDING IN SPORTS WEAR", images: ["/sp1.PNG","/sp2.PNG","/sp3.PNG","/sp4.PNG","/sp5.PNG"], labels: ["Skechers","Under armour styles","Joggers","Apparel","Running shoes"], sublabels: ["Sunset walk encouraged","Pair with pretty","A perfect pick","For all your inspiration","Sprint, in style"] },
      ].map((section, idx) => (
        <div key={idx} className="px-4 md:px-12 py-8 mt-6">
          <h2 className="text-2xl font-bold mb-6 uppercase text-center">{section.title}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {section.images.map((img, i) => (
              <div key={i} className="w-[45%] sm:w-[30%] md:w-[180px] flex flex-col items-center">
                <Image src={img} alt={section.labels[i]} width={180} height={180} className="object-cover w-full h-full rounded-lg" priority />
                <h4 className="mt-2 font-semibold text-center">{section.labels[i]}</h4>
                <h5 className="text-center text-sm text-gray-600">{section.sublabels[i]}</h5>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
