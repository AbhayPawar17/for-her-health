import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, ArrowRight } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* PART 1: The "Action" CTA Section (from the first shortcode) */}
        <div className="bg-teal-50 rounded-2xl p-8 mb-16 flex flex-col md:flex-row items-center justify-between border border-teal-100 shadow-sm">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Do You Have Any Questions?
            </h3>
            <p className="text-slate-600 text-lg">
              We’re here to help! Call us today or make an appointment online.
            </p>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row w-full md:w-auto">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-teal-700 font-semibold rounded-full border border-teal-200 hover:bg-teal-50 transition-colors shadow-sm">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </button>
            <Link 
              href="/appointment" 
              className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition-all shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Make an Appointment</span>
            </Link>
          </div>
        </div>

        {/* PART 2: The "Services" Feature Section (from the second shortcode) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-md font-bold uppercase tracking-wider">
                Find Useful Information
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Birth Control <span className="text-teal-600">Methods</span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide comprehensive counseling and a partial list of options tailored to your lifestyle. Your health and comfort are our priority. Click below to explore your options or speak with a specialist.
            </p>

            <ul className="space-y-3 pt-2">
              {['Hormonal Options', 'Long-Acting Reversible Contraception', 'Barrier Methods'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link 
                href="/services/birth-control"
                className="group inline-flex items-center gap-2 text-teal-700 font-bold text-lg hover:text-teal-900 transition-colors"
              >
                Learn more details
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Image */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
            {/* NOTE: Replace the src below with your actual image path or the uploaded file.
              I am using a placeholder from Unsplash that matches the "Couple looking at phone" vibe.
            */}
            <Image
              src="https://forherhealthwomen.com/wp-content/uploads/2022/03/couple-2021-08-29-14-32-18-utc-1-545x667.jpg"
              alt="Couple looking at phone together happily"
              // UPDATED: Removed 'fill', added intrinsic width/height to show full image without cropping
              width={545}
              height={667}
              // UPDATED: Changed class to w-full h-auto for responsive scaling
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
            
            {/* Decorative Overlay Gradient (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;