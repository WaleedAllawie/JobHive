import React from "react";
import { useInView } from "@/lib/animations";

export default function Hero() {
  const { ref, isInView } = useInView();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative pt-32 pb-20 px-4 md:px-8 lg:px-16 xl:px-20 bg-cover bg-center min-h-screen flex items-center" 
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(254, 248, 244, 0.2), rgba(254, 248, 244, 0.8)), url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" 
      }}
    >
      <div className="container mx-auto text-center max-w-4xl" ref={ref}>
        <div className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-24 w-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 flex items-center justify-center text-white font-bold text-3xl">N</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-wide mb-2">NIRVANA</h1>
          <h2 className="text-lg md:text-xl text-[#a67c52] tracking-widest mb-4">SPA JORDAN</h2>
          <p className="text-xl md:text-2xl mt-4 italic font-serif text-[#333] mb-6">Your Sanctuary of Elegance and Beauty</p>
          <button 
            onClick={scrollToServices}
            className="mt-8 inline-block px-6 py-3 border-2 border-[#a67c52] text-[#a67c52] hover:bg-[#a67c52] hover:text-white transition-all duration-300 rounded-full tracking-wide text-sm md:text-base"
          >
            Explore Services
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            const aboutSection = document.getElementById("about");
            if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
          className="animate-bounce inline-block text-[#a67c52]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
