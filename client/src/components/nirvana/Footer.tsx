import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <h3 className="text-md font-serif font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="text-[#a67c52] mr-2" />
                <a 
                  href="tel:+96265652673" 
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  +962 6 565 2673
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#a67c52] mr-2 mt-0.5" />
                <a 
                  href="https://wego.here.com/directions/mix//Nirvana-Spa,-Culture-Street-13-Shmeisani,-1118-Amman:e-eyJuYW1lIjoiTmlydmFuYSBTcGEiLCJhZGRyZXNzIjoiQ3VsdHVyZSBTdHJlZXQgIzEzIC0gU2htZWlzYW5pLCBBbW1hbiwgSm9yZGFuIiwibGF0aXR1ZGUiOjMxLjk2OTQ1MjU4MzQwMiwibG9uZ2l0dWRlIjozNS44OTg3NzY3OTMzNTIsInByb3ZpZGVyTmFtZSI6ImZhY2Vib29rIiwicHJvdmlkZXJJZCI6MTE2Nzg5NDExNzI5Mzk5fQ==?map=31.96945,35.89878,15,normal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#a67c52] transition-colors"
                >
                  Culture Street #13, Shmeisani, Amman, Jordan
                </a>
              </li>
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


        </div>

        <div className="border-t border-gray-300 mt-10 pt-6 text-center">
          <p className="text-sm opacity-80">&copy; {new Date().getFullYear()} Nirvana Spa Jordan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
