import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import NirvanaLogo from "../../assets/nirvana-logo.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#f2e8df] text-[#333]">
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={NirvanaLogo} alt="Nirvana Spa Jordan Logo" className="h-12 w-auto" />
              <div className="ml-3">
                <h2 className="text-lg font-serif font-semibold tracking-wider">NIRVANA</h2>
                <p className="text-xs text-[#a67c52] tracking-widest">SPA JORDAN</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your sanctuary of elegance and beauty in the heart of Jordan. Experience the ultimate in relaxation and rejuvenation.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/nirvanaspajordan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#a67c52] flex items-center justify-center text-white hover:bg-[#d8c0aa] transition-colors"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a 
                href="https://facebook.com/nirvanaspajordan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#a67c52] flex items-center justify-center text-white hover:bg-[#d8c0aa] transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a 
                href="https://twitter.com/nirvanaspajo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#a67c52] flex items-center justify-center text-white hover:bg-[#d8c0aa] transition-colors"
              >
                <FaTwitter className="text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-md font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Our Services
                </button>
              </li>

            </ul>
          </div>

          <div>
            <h3 className="text-md font-serif font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Facial Treatments
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Body Massages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Hair Styling
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Nail Care
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Spa Packages
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-serif font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-sm opacity-80 mb-3">Stay updated with our latest offers and news.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 py-2 px-3 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-[#a67c52] text-white py-2 px-4 rounded-md hover:bg-[#d8c0aa] transition-colors duration-300 text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-center">
          <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Nirvana Spa Jordan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
