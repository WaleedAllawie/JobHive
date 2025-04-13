import React from "react";
import { useInView } from "@/lib/animations";

export default function About() {
  const { ref, isInView } = useInView();
  
  return (
    <section id="about" className="py-12 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#fffaf7]">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <img 
              src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1529&q=80" 
              alt="Spa environment" 
              className="rounded-lg shadow-md w-full h-auto object-cover" 
              style={{ maxHeight: "500px" }}
            />
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 relative">
              <span className="inline-block pr-1 relative">
                About Us
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#a67c52]"></span>
              </span>
            </h2>
            <p className="text-[#333] mb-6 leading-relaxed">At Nirvana, we believe that true beauty begins from within. Our mission is to nurture both body and spirit, creating a harmonious retreat from the demands of everyday life.</p>
            <p className="text-[#333] mb-6 leading-relaxed">Founded in 2015, Nirvana Spa Jordan has established itself as a premier destination for women seeking exceptional experiences of refined care and luxury.</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#d8c0aa] flex items-center justify-center mr-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Award-winning therapists</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#d8c0aa] flex items-center justify-center mr-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Organic products</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#d8c0aa] flex items-center justify-center mr-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                </div>
                <span>Luxury experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
