"use client";

import Image from "next/image";

type TrendingItem = {
  img: string;
  title: string;
  subtitle: string;
};

function TrendingSection({ title, items }: { title: string; items: TrendingItem[] }) {
  return (
    <div className="mt-12 px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 uppercase text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[45%] sm:w-[30%] md:w-[180px] flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={180}
              height={180}
              className="object-cover w-full h-[180px] rounded-lg"
              priority
            />
            <h4 className="mt-2 font-semibold text-center">{item.title}</h4>
            <h5 className="text-center text-sm text-gray-600">{item.subtitle}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenPage() {
  const indianWear: TrendingItem[] = [
    { img: "/white.PNG", title: "Kurta Set White", subtitle: "Starting at ₹1,299" },
    { img: "/handpicked.PNG", title: "Ethnic Casuals", subtitle: "Up to 40% Off" },
    { img: "/normal.PNG", title: "Everyday Wear", subtitle: "Flat 35% Off" },
    { img: "/ethnic.PNG", title: "Printed Kurta Set", subtitle: "Up to 50% Off" },
    { img: "/cotton.jpeg", title: "Everyday Kurtas", subtitle: "Starting at ₹799" },
  ];

  const sportsWear: TrendingItem[] = [
    { img: "/sports1.PNG", title: "Tracksuit", subtitle: "Up to 40% Off" },
    { img: "/sports2.PNG", title: "Sports T-shirt", subtitle: "Starting at ₹499" },
    { img: "/sports3.PNG", title: "Gym Shorts", subtitle: "Flat 35% Off" },
    { img: "/sports4.PNG", title: "Hoodie", subtitle: "Up to 50% Off" },
    { img: "/sports5.PNG", title: "Leggings", subtitle: "Starting at ₹699" },
  ];

  const footwear: TrendingItem[] = [
    { img: "/shoes1.PNG", title: "Sneakers", subtitle: "Starting at ₹999" },
    { img: "/shoes2.PNG", title: "Loafers", subtitle: "Up to 30% Off" },
    { img: "/shoes3.PNG", title: "Running Shoes", subtitle: "Flat 25% Off" },
    { img: "/shoes4.PNG", title: "Sandals", subtitle: "Starting at ₹499" },
    { img: "/shoes5.PNG", title: "Formal Shoes", subtitle: "Up to 40% Off" },
  ];

  const accessories: TrendingItem[] = [
    { img: "/acc1.PNG", title: "Wireless headphones", subtitle: "Tangled Wires" },
    { img: "/acc2.PNG", title: "Sporty watches", subtitle: "Ahead of its time" },
    { img: "/acc3.PNG", title: "White watches", subtitle: "A classic" },
    { img: "/acc4.PNG", title: "Best of fasttrack", subtitle: "A new world" },
    { img: "/acc5.jpeg", title: "Minimalist watches", subtitle: "Understand new style" },
  ];

  return (
    <div className="pt-24 px-4 md:px-12 lg:px-24">
      {/* Banner Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1 h-[250px] md:h-[300px] lg:h-[350px]">
          <Image
            src="/men-2nd-pic.png"
            alt="CR7 Banner"
            width={900}
            height={300}
            className="object-cover w-full h-full rounded-lg"
            priority
          />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2 p-4 md:p-6">
          <h1 className="text-4xl md:text-5xl font-bold">CR7</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Flat 35% Off</h2>
          <p className="text-lg md:text-xl">Own your signature scents</p>
        </div>
      </div>

      {/* BIGGEST DEALS Section */}
      {/* (Use the same flex-wrap + justify-center pattern if needed) */}

      {/* Trending Sections */}
      <TrendingSection title="TRENDING IN INDIAN WEAR" items={indianWear} />
      <TrendingSection title="TRENDING IN SPORTS WEAR" items={sportsWear} />
      <TrendingSection title="TRENDING IN FOOTWEAR" items={footwear} />
      <TrendingSection title="TRENDING IN ACCESSORIES" items={accessories} />
    </div>
  );
}
