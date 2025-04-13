import React from "react";
import { useInView } from "@/lib/animations";

const services = [
  {
    title: "Facial Treatments",
    description: "Revitalize your skin with our personalized facial treatments using premium organic products.",
    image: "https://images.unsplash.com/photo-1603816771785-3da9751f9de7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1574&q=80"
  },
  {
    title: "Body Massages",
    description: "Experience deep relaxation with our therapeutic massages tailored to your specific needs.",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    title: "Hair Styling",
    description: "Transform your look with our expert styling services for all hair types and preferences.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80"
  },
  {
    title: "Nail Care",
    description: "Pamper your hands and feet with our luxurious manicure and pedicure treatments.",
    image: "https://images.unsplash.com/photo-1607779097040-28d8a56592e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1527&q=80"
  }
];

export default function Services() {
  const { ref, isInView } = useInView();
  
  return (
    <section id="services" className="py-20 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#fef8f4]">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-serif font-semibold mb-4 relative inline-block">
            <span className="inline-block pr-1 relative">
              Our Services
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#a67c52]"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#333] opacity-80">
            Discover our comprehensive range of treatments designed to nurture your body, mind, and spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition duration-500 transform hover:-translate-y-1 ${isInView ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transitionDuration: '700ms'
              }}
            >
              <div className="overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-[#333] opacity-80 mb-4">{service.description}</p>
                <a href="#" className="inline-block text-[#a67c52] hover:text-[#d8c0aa] transition-colors text-sm tracking-wider">
                  LEARN MORE 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="px-6 py-3 bg-[#a67c52] text-white rounded-full hover:bg-[#d8c0aa] transition-colors duration-300 inline-block">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
