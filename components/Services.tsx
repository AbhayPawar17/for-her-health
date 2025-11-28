import React from 'react';
import { Heart, Baby, Sparkles, ArrowRight } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

const services: ServiceItem[] = [
  {
    title: "Prenatal Health",
    description: "Comprehensive care for women’s health issues, including menstrual disorders, pelvic pain, and hormonal imbalances, with personalized diagnosis and treatment for overall well-being.",
    icon: Heart, // Representing general care/wellness (Note: Your text describes Gynecology here, but I kept your title)
  },
  {
    title: "Gynecology",
    description: "Focused care to support a healthy pregnancy through regular checkups, nutritional guidance, and monitoring to ensure the well-being of both mother and baby.",
    icon: Baby, // Representing pregnancy (Note: Your text describes Prenatal here, but I kept your title)
  },
  {
    title: "Preparation for Birth",
    description: "Guidance and support for expecting mothers through childbirth education, relaxation techniques, and personalized care to ensure a confident and safe delivery experience.",
    icon: Sparkles,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-lg font-semibold text-rose-500 uppercase tracking-widest">
            Our Expertise
          </h2>
          <h3 className="mt-3 text-3xl font-serif text-gray-900 sm:text-4xl">
             compassionate care for every stage
          </h3>
          <div className="w-24 h-1 bg-rose-300 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-rose-100 hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-rose-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose-400 transition-colors duration-300">
                <service.icon 
                  className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors duration-300" 
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-lg text-gray-900 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Interactive Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-medium text-rose-500 group-hover:text-rose-700 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;