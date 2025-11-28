import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Data for the 'Services' column
const servicesLinks = [
  { name: 'Gynecology', href: '#' },
  { name: 'Sexual Health', href: '#' },
  { name: 'Preventative Health Care', href: '#' },
  { name: 'Pregnancy Testing', href: '#' },
  { name: 'Family Planning', href: '#' },
  { name: 'Low and High Risk Pregnancy Care & Delivery', href: '#' },
];

// Data for the 'About' column
const aboutLinks = [
  { name: 'Our story', href: '#' },
  { name: 'Experts', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Contact us', href: '#' },
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-pink-300 via-pink-200 to-white text-black pt-16 pb-60 overflow-hidden min-h-[500px] flex flex-col justify-between">
      
      {/* --- CONTENT LAYER (High Z-Index) --- */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Brand & Description */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="relative w-60 h-20 flex-shrink-0">
                 {/* Increased logo size slightly to match larger text */}
                 <Image
                  src="https://forherhealthwomen.com/wp-content/uploads/2022/01/cropped-cropped-450logo.png"
                  alt="For Her Health Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            

            {/* Copyright - Increased to text-base */}
            <p className="text-gray-600 text-base mt-2">
              Copyright © 2025 For her health. Powered by For her health.
            </p>
          </div>

          {/* Right Side: Links Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: Services */}
            <div className="flex flex-col gap-5">
              {/* Headings - Increased to text-2xl */}
              <h3 className="font-bold text-2xl text-black">Services</h3>
              <ul className="flex flex-col gap-3">
                {servicesLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      // Links - Increased to text-base
                      className="text-gray-600 hover:text-black transition-colors text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: About */}
            <div className="flex flex-col gap-5">
              <h3 className="font-bold text-2xl text-black">About</h3>
              <ul className="flex flex-col gap-3">
                {aboutLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-600 hover:text-black transition-colors text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get in touch */}
            <div className="flex flex-col gap-5">
               <h3 className="font-bold text-2xl text-black">Get in touch</h3>
               {/* Contact Info - Increased to text-base */}
               <div className="flex flex-col gap-4 text-base text-gray-600">
                  <p className="leading-relaxed">
                    33 W Higgins Rd Suite 800, South Barrington, IL 60010, USA
                  </p>
                  <div className="flex flex-col gap-1">
                    <p>Phone: 224-802-2687</p>
                    <p>Mobile: 847-305-3645</p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- BACKGROUND WATERMARK LAYER --- */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pointer-events-none select-none">
        <div className="relative w-full max-w-4xl h-48 md:h-64 lg:h-80 opacity-20">
          <Image
            src="https://forherhealthwomen.com/wp-content/uploads/2022/01/cropped-cropped-450logo.png"
            alt="Background Watermark"
            fill
            className="object-contain object-bottom mix-blend-multiply"
            priority
          />
        </div>
      </div>

    </footer>
  );
};

export default Footer;