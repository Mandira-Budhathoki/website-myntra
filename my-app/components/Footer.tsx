'use client';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const shopping = ['Men', 'Women', 'Kids', 'Home & Living', 'Beauty'];
  const policies = ['Contact Us', 'FAQ', 'Shipping', 'Returns', 'Privacy Policy'];
  const stores = ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

  return (
    <footer className="bg-gray-100 text-gray-800 mt-12">
      {/* Centered Brand / Title */}
      <div className="text-center py-4 border-b border-gray-300">
        <h1 className="text-xl font-bold uppercase tracking-wider">MYNTRA</h1>
      </div>

      {/* Footer Links */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
        
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">Online Shopping</h3>
          {shopping.map(item => (
            <Link key={item} href="#" className="text-sm hover:text-pink-500 transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">Customer Policies</h3>
          {policies.map(item => (
            <Link key={item} href="#" className="text-sm hover:text-pink-500 transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold mb-2">Stores</h3>
          {stores.map(item => (
            <Link key={item} href="#" className="text-sm hover:text-pink-500 transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2 items-center sm:items-start">
          <h3 className="text-lg font-bold mb-2">Connect With Me</h3>
          <div className="flex gap-3 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-sky-500">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
        &copy; {new Date().getFullYear()} Myntra. All rights reserved.
      </div>
    </footer>
  );
}
