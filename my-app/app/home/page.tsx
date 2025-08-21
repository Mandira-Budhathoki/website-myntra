'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const appliances = [
    { name: 'Refrigerator', img: '/h2.PNG' },
    { name: 'Washing Machine', img: '/h3.PNG' },
    { name: 'Microwave', img: '/h4.PNG' },
    { name: 'Air Conditioner', img: '/h5.PNG' },
    { name: 'Vacuum Cleaner', img: '/h6.PNG' },
    { name: 'Dishwasher', img: '/h7.PNG' },
  ];

  const [zoomed, setZoomed] = useState<number | null>(null);
  const handleZoom = (index: number) => setZoomed(zoomed === index ? null : index);

  const homeApplianceNames = [
    'Refrigerator', 'Washing Machine', 'Microwave Oven', 'Air Conditioner', 'Vacuum Cleaner',
    'Dishwasher', 'Water Purifier', 'Coffee Maker', 'Electric Kettle', 'Toaster',
    'Blender', 'Food Processor', 'Rice Cooker', 'Iron', 'Hair Dryer', 'Ceiling Fan',
    'Air Fryer', 'Electric Grill', 'Juicer', 'Water Heater', 'Induction Stove',
    'Bread Maker', 'Slow Cooker', 'Garment Steamer', 'Portable Heater', 'Dehumidifier',
  ];

  return (
    <div>
      {/* Home Banner */}
      <div className="px-4 md:px-12 lg:px-24 mt-16">
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg overflow-hidden mx-auto max-w-[1200px]">
          <Image src="/h1.PNG" alt="Home Appliances Banner" fill className="object-cover" priority />
        </div>
      </div>

      {/* Home Appliances Section */}
      <div className="px-4 md:px-12 lg:px-24 mt-12 max-w-[1200px] mx-auto">
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {/* Images */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-4 lg:w-3/4">
            {appliances.map((item, idx) => (
              <div
                key={idx}
                className={`relative w-[150px] sm:w-[180px] md:w-[220px] lg:w-full h-[180px] md:h-[220px] lg:h-[250px] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-700 ease-in-out ${
                  zoomed === idx ? 'scale-125 z-20 shadow-2xl' : 'scale-100'
                }`}
                onClick={() => handleZoom(idx)}
                style={{ transformOrigin: 'center center' }}
              >
                <Image src={item.img} alt={item.name} fill className="object-cover" priority />
              </div>
            ))}
          </div>

          {/* Text (hide on mobile) */}
          <div className="hidden lg:flex flex-col gap-2 w-[200px]">
            {homeApplianceNames.map((name, idx) => (
              <p
                key={idx}
                className="text-sm md:text-base text-gray-700 underline cursor-pointer hover:text-yellow-500 transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Inspired Section */}
      <div className="px-4 md:px-12 lg:px-24 mt-16 max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-cursive italic mb-2">Get Inspired</h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Trend to Take Home</h3>
        </div>

        {/* Inspired Images - 3 in one row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{img:'/te1.PNG', title:'Wedding Check-List', subtitle:'Drape-It!'},
            {img:'/te2.PNG', title:'Colour of the season', subtitle:'Flaunt Now!'},
            {img:'/te3.PNG', title:'Handcrafted', subtitle:'Beautify your Home'}].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="relative w-full h-[220px] rounded-lg overflow-hidden mb-4">
                <Image src={item.img} alt={item.title} fill className="object-cover" priority />
              </div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <h5 className="text-sm text-gray-600">{item.subtitle}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Brands Section */}
      <div className="px-4 md:px-12 lg:px-24 mt-16 max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6 text-center">Featured Brands</h2>
        <div className="bg-gray-100 rounded-lg p-6 flex flex-wrap justify-center gap-6">
          {['/br1.png','/br2.png','/br3.png','/br4.png','/br5.png'].map((src, idx) => (
            <div key={idx} className="relative w-[120px] h-[120px] rounded-lg overflow-hidden">
              <Image src={src} alt={`Brand ${idx+1}`} fill className="object-contain" priority />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
