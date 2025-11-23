"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  const images = [
    "https://forherhealthwomen.com/wp-content/uploads/2022/01/finally-pregnant-2021-09-01-10-51-31-utc-3-scaled.jpg",
    "https://forherhealthwomen.com/wp-content/uploads/2022/01/excited-friend-touching-belly-bump-of-pregnant-wom-2021-08-27-18-49-24-utc-2-scaled.jpg",
    "https://forherhealthwomen.com/wp-content/uploads/2022/01/closeup-shot-of-young-woman-showing-pregnancy-test-2021-12-14-18-49-08-utc-2-scaled.jpg"
  ];

  const doctorImages = [
    "https://forherhealthwomen.com/wp-content/uploads/2022/01/3-1.png",
    "https://forherhealthwomen.com/wp-content/uploads/2022/01/4-1.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const doctorInterval = setInterval(() => {
      setCurrentDoctorIndex((prevIndex) => (prevIndex + 1) % doctorImages.length);
    }, 5000);

    return () => clearInterval(doctorInterval);
  }, [doctorImages.length]);

  return (
    <div className="relative w-full min-h-screen flex items-center overflow-hidden font-sans bg-white">

      {/* 1. GLOBAL BACKGROUND CAROUSEL */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={img}
            alt={`Background ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient: Transparent/Light on left, Solid white on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white z-10" />
        </div>
      ))}

      {/* 2. MAIN CONTENT CONTAINER */}
      <div className="relative z-20 max-w-[1800px] mx-auto px-6 lg:px-12 w-full pt-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT COLUMN: Logos & Buttons ONLY */}
          <div className="flex flex-col items-start justify-center">

            {/* 1. Main Logo Image */}
            <div className="relative w-full max-w-[500px] h-auto mb-4">
              <Image
                src="https://forherhealthwomen.com/wp-content/uploads/2022/01/cropped-cropped-450logo.png"
                alt="For Her Health Logo"
                width={450}
                height={150}
                priority
                className="object-contain object-left w-full h-auto"
              />
            </div>

            {/* 2. Slogan Image */}
            <div className="relative w-full max-w-[400px] h-auto mb-10 pl-1">
              <Image
                src="https://forherhealthwomen.com/wp-content/uploads/2022/01/small_slogan.png"
                alt="Empowering Women Slogan"
                width={350}
                height={80}
                className="object-contain object-left w-full h-auto"
              />
            </div>

            {/* 3. Buttons / Action Section */}
            <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 w-full">

              <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold hover:bg-pink-700 transition-all duration-300 shadow-lg shadow-pink-600/30 flex items-center gap-2 group/btn text-lg">
                <Calendar size={20} className="text-white" />
                Book Appointment
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-md p-3 pr-6 rounded-full border border-white/50 shadow-md">
                <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-pink-700 font-bold uppercase tracking-wider">
                    Call Us
                  </span>
                  <a
                    href="tel:2248022687"
                    className="text-gray-900 font-bold text-lg hover:text-pink-600 transition-colors"
                  >
                    224-802-2687
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Doctor Image */}
          <div className="relative h-[500px] lg:h-[800px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0 lg:translate-x-15">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDoctorIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center lg:justify-end"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={doctorImages[currentDoctorIndex]}
                    alt={`Doctor ${currentDoctorIndex + 1}`}
                    fill
                    className="object-contain drop-shadow-2xl z-10"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  {/* Gradient Overlay to match reference style */}
                  <div className="absolute inset-0 bg-gradient-to-l from-white/40 via-white/10 to-transparent z-20 pointer-events-none rounded-3xl" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;