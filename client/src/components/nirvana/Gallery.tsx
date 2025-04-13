import React from "react";
import { useInView } from "@/lib/animations";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1529&q=80",
    alt: "Spa Environment"
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Spa Treatment"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Luxury Spa"
  },
  {
    src: "https://images.unsplash.com/photo-1540760041914-df851b9b3909?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Spa Candles"
  },
  {
    src: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    alt: "Spa Stones"
  },
  {
    src: "https://images.unsplash.com/photo-1531185038189-41815d518784?ixlib=rb-4.0.3&auto=format&fit=crop&w=1544&q=80",
    alt: "Spa Relaxation"
  }
];

export default function Gallery() {
  const { ref, isInView } = useInView();

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#fffaf7]">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-serif font-semibold mb-4 relative inline-block">
            <span className="inline-block pr-1 relative">
              Gallery
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#a67c52]"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#333] opacity-80">
            Explore our serene environment designed for your ultimate relaxation and well-being.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden rounded-lg transition-all duration-700 cursor-pointer ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
