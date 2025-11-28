import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Baby, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-teal-600" />,
      title: "Call Us Now",
      description: (
        <>
          <p>+1 (555) 123-4567</p>
          <p className="text-md text-slate-500 mt-1">Mon-Fri: 9am - 5pm</p>
        </>
      ),
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-600" />,
      title: "Visit Our Office",
      description: (
        <>
          <p>123 Healthcare Blvd, Suite 400</p>
          <p>Cityville, ST 12345</p>
        </>
      ),
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-600" />,
      title: "Send A Message",
      description: (
        <>
          <a href="mailto:info@forherhealthwomen.com" className="hover:text-teal-600 transition-colors">
            info@forherhealthwomen.com
          </a>
          <p className="text-md text-slate-500 mt-1">We reply within 24 hours</p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col">
      
      {/* SECTION 1: Contact Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold tracking-widest text-lg uppercase mb-3 block">
              Contact Our Clinic
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Contact Us Now
            </h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((item, index) => (
              <div 
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-teal-50 transition-colors border border-slate-100">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>
                <div className="text-xl text-slate-600 leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Baby Names CTA Banner */}
      <section className="bg-gradient-to-r from-pink-50 to-white py-16 border-t border-pink-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 rounded-full mb-6">
            <Baby className="w-8 h-8 text-pink-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-slate-800 mb-4 leading-tight">
            Looking for baby names, advice, <br className="hidden md:block"/>
            meanings and popularity?
          </h2>
          
          <Link 
            href="https://www.babycenter.com/baby-names"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            Click here for baby names
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default ContactSection;