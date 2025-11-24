import React from 'react';
import Image from "next/image";

// 1. I changed 'icon' to 'iconSrc' (just the string URL) so we can style the image freely later.
const services = [
  {
    title: "Low and High Risk Pregnancy Care & Delivery",
    href: "https://forherhealthwomen.com/services/care-delivery/",
    iconSrc: "https://forherhealthwomen.com/wp-content/uploads/2022/03/motherhood-100x100.png",
    color: "bg-rose-50",
  },
  {
    title: "Options & Family Planning",
    href: "https://forherhealthwomen.com/services/options/",
    iconSrc: "https://forherhealthwomen.com/wp-content/uploads/2022/03/family-100x100.png",
    color: "bg-blue-50",
  },
  {
    title: "Pregnancy Testing",
    href: "https://forherhealthwomen.com/services/pregnancy-testing-2/",
    iconSrc: "https://forherhealthwomen.com/wp-content/uploads/2022/03/pregnancy-test-100x100.png",
    color: "bg-pink-50",
  },
  {
    title: "Preventative Health Care",
    href: "https://forherhealthwomen.com/services/health-care/",
    iconSrc: "https://forherhealthwomen.com/wp-content/uploads/2022/03/medical-insurance-100x100.png",
    color: "bg-emerald-50",
  },
  {
    title: "Gynecology Services",
    href: "https://forherhealthwomen.com/services/gynecology-services/",
    iconSrc: "https://forherhealthwomen.com/wp-content/uploads/2022/03/uterus-100x100.png",
    color: "bg-orange-50",
  },
  {
    title: "Sexual Health",
    href: "https://forherhealthwomen.com/services/sexual-health/",
    iconSrc: "https://forherhealthwomen.com/wp-content/uploads/2022/03/sex-100x100.png",
    color: "bg-sky-50",
  }
];

export default function HerHealthSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white font-sans">

      {/* LEFT SIDE: Hero Image & Call to Action */}
      <div className="relative w-full lg:w-2/5 h-96 lg:h-auto bg-gray-100 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/herhealthsectionimage.png"
          alt="For Her Health Background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />

        {/* White Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent lg:bg-gradient-to-t" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center p-12 z-10">
          <div className="max-w-md text-right lg:text-left ml-auto lg:ml-0">
            <h3 className="text-gray-500 text-lg uppercase tracking-widest mb-2">Welcome to us</h3>
            <h1 className="text-4xl lg:text-5xl font-serif text-slate-800 mb-8 leading-tight">
              Welcome to <br />
              <span className="text-sky-600">For Her Health</span>
            </h1>

            <button className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-full shadow-lg transition-all transform hover:-translate-y-1">
              Make an Appointment
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Services Grid */}
      <div className="w-full lg:w-3/5 bg-[#EBF8FF] p-8 lg:p-20 flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full">

          {services.map((service, index) => (
            <a 
              key={index}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Icon Circle */}
              <div 
                className="
                  w-24 h-24 rounded-full relative overflow-hidden
                  bg-white shadow-sm mb-6 transition-transform duration-300 
                  group-hover:scale-110 border-4 border-white ring-1 ring-gray-100
                "
              >
                {/* Using 'fill' makes the image take the parent's size.
                   'object-cover' ensures it covers the whole circle without distortion.
                */}
                <Image
                  src={service.iconSrc}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover p-1" // Optional: p-1 adds a tiny white border inside if you want separation
                />
              </div>

              {/* Title */}
              <h3 className="text-slate-800 font-serif text-lg leading-snug px-2 transition-colors duration-300 group-hover:text-pink-400">
                {service.title}
              </h3>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}