import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed w-full bg-[#fef8f4] ${isScrolled ? 'shadow-md' : 'shadow-sm'} bg-opacity-95 backdrop-blur-sm z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#hero" className="flex items-center" onClick={(e) => { e.preventDefault(); scrollToSection("hero"); }}>
                <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-300 to-pink-400 flex items-center justify-center text-white font-bold text-xl">N</div>
                <span className="ml-2 text-lg font-serif font-semibold tracking-wider">NIRVANA</span>
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#about" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#a67c52] transition-colors duration-200"
                onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
              >
                About
              </a>
              <a 
                href="#services" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#a67c52] transition-colors duration-200"
                onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
              >
                Services
              </a>
              <a 
                href="#gallery" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#a67c52] transition-colors duration-200"
                onClick={(e) => { e.preventDefault(); scrollToSection("gallery"); }}
              >
                Gallery
              </a>
              <a 
                href="#testimonials" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#a67c52] transition-colors duration-200"
                onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#a67c52] transition-colors duration-200"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
              >
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#111] hover:text-[#a67c52] focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#fef8f4] shadow-md">
          <a 
            href="#about" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#a67c52]"
            onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
          >
            About
          </a>
          <a 
            href="#services" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#a67c52]"
            onClick={(e) => { e.preventDefault(); scrollToSection("services"); }}
          >
            Services
          </a>
          <a 
            href="#gallery" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#a67c52]"
            onClick={(e) => { e.preventDefault(); scrollToSection("gallery"); }}
          >
            Gallery
          </a>
          <a 
            href="#testimonials" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#a67c52]"
            onClick={(e) => { e.preventDefault(); scrollToSection("testimonials"); }}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 rounded-md text-base font-medium hover:text-[#a67c52]"
            onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
