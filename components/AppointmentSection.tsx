import React from 'react';
import { MapPin, Clock, Phone, Printer, Mail } from 'lucide-react';

const AppointmentSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT COLUMN: Info */}
          <div>
            {/* Header */}
            <h4 className="text-md font-bold text-rose-500 uppercase tracking-[0.2em] mb-4">
              What are you waiting for...
            </h4>
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6">
              Make an appointment
            </h2>
            <p className="text-gray-900 mb-10 text-md leading-relaxed">
              <span className="font-bold text-gray-800">Please note:</span> This is a request for appointment. 
              We will confirm your appointment by phone.
            </p>

            {/* Location Block */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-6 h-6 text-rose-500" />
                <h3 className="text-md font-bold text-gray-800 uppercase tracking-widest">
                  Our Location
                </h3>
              </div>
              <p className="text-gray-900 pl-6 text-md leading-relaxed">
                33 West Higgins Road, Suite 800,<br />
                South Barrington, IL 60010
              </p>
            </div>

            {/* Divider */}
            <hr className="border-gray-200 my-8" />

            {/* Bottom Grid: Hours & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-6 h-6 text-rose-500" />
                  <h3 className="text-md font-bold text-gray-800 uppercase tracking-widest">
                    Opening Hours
                  </h3>
                </div>
                <div className="pl-6 text-md text-gray-900 space-y-1">
                  <p>Mon-Fri: 6am-10pm</p>
                  <p>Sat-Sun: 8am-2pm</p>
                </div>
              </div>

              {/* Contact */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone className="w-6 h-6 text-rose-500" />
                  <h3 className="text-md font-bold text-gray-800 uppercase tracking-widest">
                    Contact
                  </h3>
                </div>
                <div className="pl-6 text-md text-gray-900 space-y-1">
                  <p>Phone: (224) 802-2687</p>
                  <p>Fax: (847)-227-2270</p>
                  <p className="text-lg text-rose-500 hover:underline cursor-pointer">
                    info@forherhealthwomen.com
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="relative">
            {/* Top decorative line */}
            <div className="w-12 h-0.5 bg-rose-400 mb-8"></div>

            <form className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-rose-500 focus:border-rose-500 block p-3.5 outline-none transition-all"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-rose-500 focus:border-rose-500 block p-3.5 outline-none transition-all"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-rose-500 focus:border-rose-500 block p-3.5 outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#0B132B] hover:bg-gray-800 text-white text-sm font-bold tracking-wide uppercase transition-colors duration-200"
                >
                  Save up to 50% today
                </button>
              </div>
              
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;