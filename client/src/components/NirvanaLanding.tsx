import React from "react";
import Navbar from "./nirvana/Navbar";
import Hero from "./nirvana/Hero";
import About from "./nirvana/About";
import Services from "./nirvana/Services";
import Gallery from "./nirvana/Gallery";
import Testimonials from "./nirvana/Testimonials";
import Contact from "./nirvana/Contact";
import Footer from "./nirvana/Footer";
import { useScrollToTop } from "@/lib/animations";

export default function NirvanaLanding() {
  useScrollToTop();
  
  return (
    <div className="bg-[#fef8f4] text-[#111] font-serif min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        id="scrollToTop"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-[#a67c52] text-white shadow-lg hover:bg-[#b88a60] transition-all duration-300 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
