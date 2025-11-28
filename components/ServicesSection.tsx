"use client";

import Image from "next/image";

// Data extracted and mapped to icons
const services = [
  {
    title: "Obstetrics & High Risk",
    description: "Comprehensive care for expectant mothers, ensuring safe pregnancies and deliveries, including high-risk conditions.",
    image: "/1.png"
  },
  {
    title: "General Gynecology",
    description: "Routine women’s health exams, Pap smears for cervical screening, and personalized birth control counseling.",
    image: "/2.png"
  },
  {
    title: "Abnormal Pap Smears",
    description: "Evaluation and management of abnormal Pap results with expert colposcopy procedures for early detection.",
    image: "/3.png"
  },
  {
    title: "STI Screening",
    description: "Confidential testing and treatment for sexually transmitted infections to protect reproductive health.",
    image: "/4.png"
  },
  {
    title: "PCOS & Infertility",
    description: "Advanced assessment for hormonal imbalances, PCOS, and fertility concerns to support family planning.",
    image: "/5.png"
  },
  {
    title: "Genetic Testing",
    description: "Genetic counseling and testing to identify risks and guide informed decisions before and during pregnancy.",
    image: "/6.png"
  },
  {
    title: "Menopausal Management",
    description: "Personalized care for menopause symptoms and bone health, including prevention of osteoporosis.",
    image: "/7.png"
  },
  {
    title: "Heavy Periods & Fibroids",
    description: "Effective treatments for painful periods, fibroids, and endometriosis through medication or surgery.",
    image: "/8.png"
  },
  {
    title: "Minimally Invasive Surgery",
    description: "Advanced surgical techniques such as laparoscopic hysterectomy for faster recovery and less discomfort.",
    image: "/9.png"
  },
  {
    title: "In-office Ultrasound",
    description: "On-site imaging for accurate, timely evaluation of pregnancy and gynecologic conditions.",
    image: "/10.png"
  },
  {
    title: "In-office Blood Draws",
    description: "Convenient lab services performed within our clinic for quick and comfortable sample collection.",
    image: "/11.png"
  },
  {
    title: "Same Day Lab Results",
    description: "Fast and accurate test results available the same day to support prompt diagnosis and treatment.",
    image: "/12.png"
  },
  {
    title: "In-Office Fetal Monitoring",
    description: "Comprehensive fetal monitoring to ensure the health and well-being of both mother and baby.",
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
          <p className="text-slate-900 text-xl leading-relaxed">
            We strive to provide women of all ages with caring, up-to-date obstetric and gynecological services.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Check if this is the last item (the 13th photo)
            const isLastItem = index === services.length - 1;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 min-h-[400px] flex flex-col ${
                  // Centers the last item if the total count is 13
                  isLastItem ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
              >
                {/* --- Background Image Layer --- */}
                <div className="absolute inset-0 w-full h-full z-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay: Darkens bottom to ensure text box pops, transparent top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>

                {/* --- Content Layer --- */}
                <div className="relative z-20 flex flex-col items-center justify-end w-full h-full p-4">

                  {/* Bottom: Text Box */}
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg w-full text-center transform transition-transform duration-500">
                    <h4 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-slate-700 text-xl font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;