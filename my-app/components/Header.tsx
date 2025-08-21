"use client";
import Image from "next/image";
import { User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Men", "Women", "Kids", "Home"];
  const icons = [
    { icon: <User size={20} />, label: "Profile" },
    { icon: <Heart size={20} />, label: "Wishlist" },
    { icon: <ShoppingBag size={20} />, label: "Bag" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src="/myntra.png" alt="Myntra Logo" width={70} height={40} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-12 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-black hover:text-pink-500 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Search Bar (hide on mobile) */}
        <div className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search for products, brands..."
            className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex space-x-6 items-center">
          {icons.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1 cursor-pointer text-black hover:text-pink-500 transition-colors duration-300"
            >
              {icon}
              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-black hover:text-pink-500 transition-colors duration-300"
              >
                {item}
              </a>
            ))}

            <div className="flex flex-col mt-2 space-y-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
              />
            </div>

            <div className="flex justify-around mt-3">
              {icons.map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center cursor-pointer text-black hover:text-pink-500"
                >
                  {icon}
                  <span className="text-xs mt-1">{label}</span>
                </div>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
