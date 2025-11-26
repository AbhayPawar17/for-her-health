'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Quote, HeartHandshake } from 'lucide-react';

// 1. UPDATE YOUR FILENAMES & QUOTES HERE
const SLIDER_IMAGES = [
  { 
    id: 1,
    src: "/testimonial_1.png", 
    alt: "Caring doctor with patient",
    quote: "For the first time, I felt truly heard. The doctor treated me with compassion, not judgment.",
    author: "Patient"
  },
  { 
    id: 2,
    src: "/2.png", 
    alt: "Modern clinic reception",
    quote: "From the moment I entered, the warmth of the staff made me feel instantly safe and cared for.",
    author: "Patient"
  },
  { 
    id: 3,
    src: "/9.png", 
    alt: "Medical team meeting",
    quote: "Their teamwork gave me confidence that I was in the hands of people who genuinely care.",
    author: "Patient"
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "The care I received was exceptional. The staff made me feel heard and respected throughout the entire process.",
    author: "Sarah J.",
    role: "Patient"
  },
  {
    id: 2,
    text: "Finally, a clinic that judges you on nothing but your health needs. Highly recommended for sensitive care.",
    author: "Michelle T.",
    role: "Patient"
  }
];

export default function HealthCareSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SLIDER_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDER_IMAGES.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [isPaused, currentSlide]);

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4 md:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <div className="text-pink-600 mb-2">
            <HeartHandshake size={48} strokeWidth={1.5} />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-medium text-slate-900 leading-tight">
            Because We See People, <br/>
            <span className="text-pink-600 italic">Not Just Patients</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            We offer confidential, non-judgmental sexual and reproductive health care 
            with people of any gender, age, and nationality. We are here to listen 
            and help.
          </p>

          <button className="group flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
            Meet the Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Testimonial Block */}
          <div className="lg:col-span-5 bg-[#e4f2fd] rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
            <Quote className="absolute top-8 left-8 text-blue-200 w-24 h-24 z-0 opacity-50" />
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-sm font-bold tracking-wider text-blue-800 uppercase mb-4">
                Patient Stories
              </h3>
              
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-serif text-slate-800 leading-normal">
                  &quot;{TESTIMONIALS[0].text}&quot;
                </p>
                <div className="pt-4 border-t border-blue-200">
                  <p className="font-bold text-slate-900">{TESTIMONIALS[0].author}</p>
                  <p className="text-slate-600 text-sm">{TESTIMONIALS[0].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image Slider */}
          <div 
            className="lg:col-span-7 relative group rounded-3xl overflow-hidden h-[400px] md:h-[500px] shadow-xl bg-slate-100"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {SLIDER_IMAGES.map((slide, index) => (
               <div
                 key={slide.id}
                 className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                   index === currentSlide ? 'opacity-100' : 'opacity-0'
                 }`}
               >
                 <Image
                   src={slide.src}
                   alt={slide.alt}
                   fill
                   className="object-cover"
                   priority={index === 0} 
                 />
                 
                 {/* Dark Overlay Gradient */}
                 <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                 {/* --- NEW: Slide Text Overlay --- */}
                 <div className="absolute bottom-16 left-8 right-20 z-20 max-w-lg">
                    <p className="text-white text-xl md:text-2xl font-serif leading-relaxed drop-shadow-md">
                      &quot;{slide.quote}&quot;
                    </p>
                    <p className="text-white/80 text-sm font-bold uppercase tracking-widest mt-3">
                      — {slide.author}
                    </p>
                 </div>
               </div>
            ))}

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-30">
              <button 
                onClick={prevSlide}
                className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 text-slate-900" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full shadow-lg text-white transition-all hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-6 left-8 flex gap-2 z-30">
              {SLIDER_IMAGES.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-8 bg-pink-500' : 'w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}