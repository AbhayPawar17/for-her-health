"use client";

import React from "react";
import { 
  Stethoscope, 
  Baby, 
  Activity, 
  Microscope, 
  Dna, 
  Syringe, 
  ShieldCheck, 
  FileText, 
  HeartPulse,
  Scan,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

// Data extracted from the image
const services = [
  {
    title: "Obstetrics",
    description: "Including high risk pregnancies",
    icon: <Baby className="w-8 h-8 text-rose-500" />,
    image: "/1.png" 
  },
  {
    title: "General Gynecology",
    description: "Pap smears, contraception",
    icon: <Stethoscope className="w-8 h-8 text-teal-500" />,
    image: "/2.png"
  },
  {
    title: "Abnormal Pap Smears",
    description: "Colposcopy services",
    icon: <FileText className="w-8 h-8 text-indigo-500" />,
    image: "/3.png"
  },
  {
    title: "STI Screening",
    description: "Comprehensive testing and care",
    icon: <Activity className="w-8 h-8 text-red-500" />,
    image: "/4.png"
  },
  {
    title: "PCOS & Infertility",
    description: "Evaluation and management",
    icon: <Dna className="w-8 h-8 text-purple-500" />,
    image: "/5.png"
  },
  {
    title: "Genetic Testing",
    description: "Preconceptual/fetal and hereditary cancer screening",
    icon: <Microscope className="w-8 h-8 text-blue-500" />,
    image: "/6.png"
  },
  {
    title: "Menopausal Management",
    description: "Osteoporosis counseling and care",
    icon: <HeartPulse className="w-8 h-8 text-pink-500" />,
    image: "/7.png"
  },
  {
    title: "Menstrual Treatment",
    description: "Medical & surgical treatment of heavy periods",
    icon: <Syringe className="w-8 h-8 text-emerald-500" />,
    image: "/8.png"
  },
  {
    title: "Minimally Invasive Surgery",
    description: "Including hysterectomy",
    icon: <ShieldCheck className="w-8 h-8 text-slate-500" />,
    image: "/9.png"
  },
  {
    title: "In-office Ultrasound*",
    description: "Convenient imaging services",
    icon: <Scan className="w-8 h-8 text-cyan-600" />,
    image: "/10.png"
  },
  {
    title: "In-office Blood Draws",
    description: "Laboratory services on site",
    icon: <Syringe className="w-8 h-8 text-orange-500" />,
    image: "/11.png"
  },
  {
    title: "Same Day Lab Results*",
    description: "Quick turnaround for critical tests",
    icon: <Activity className="w-8 h-8 text-green-600" />,
    image: "/12.png"
  },
  {
    title: "Fetal Monitoring",
    description: "In-office fetal assessment",
    icon: <Baby className="w-8 h-8 text-rose-400" />,
    image: "/13.png"
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-teal-600 font-semibold tracking-wide uppercase text-xl mb-2">
            Services We Provide
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Health Care Services
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We strive to provide women of all ages with caring, up-to-date obstetric and gynecological services.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 min-h-[350px] flex flex-col items-center justify-center text-center p-4 ${
                index === services.length - 1 ? "lg:col-start-2" : ""
              }`}
            >
              {/* --- Background Image Layer --- */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image 
                   src={service.image} 
                   alt={service.title}
                   fill
                   className="object-cover transition-all duration-700 ease-in-out blur-none md:blur-[2px] group-hover:blur-none"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* --- Content Layer --- */}
              <div className="relative z-20 flex flex-col items-center w-full">
                {/* Icon Circle - sits above the text box */}
                <div className="mb-4 p-4 bg-white rounded-full shadow-md inline-block transform group-hover:scale-110 transition-transform duration-300 relative z-30">
                  {service.icon}
                </div>
                
                {/* --- NEW: White Background Box for Text --- */}
                <div className="bg-white/95 rounded-xl p-2 shadow-sm mx-2 backdrop-blur-sm w-full max-w-[90%]">
                    <h4 className="text-xl font-extrabold text-slate-900 mb-2">
                    {service.title}
                    </h4>
                    <p className="text-slate-800 font-bold leading-tight">
                    {service.description}
                    </p>

                </div>
                    <button className="flex items-center mt-4 gap-2 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold py-2 px-6 rounded-full transition-colors duration-300 shadow-md ">
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;