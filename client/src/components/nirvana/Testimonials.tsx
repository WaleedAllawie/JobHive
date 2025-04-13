import React, { useState, useRef, useEffect } from "react";
import { useInView } from "@/lib/animations";

const testimonials = [
  {
    text: "My experience at Nirvana was nothing short of exceptional. The facial treatment left my skin glowing, and the ambiance was so peaceful. I'll definitely be returning!",
    name: "Sarah F.",
    title: "Regular Client",
    initials: "SF"
  },
  {
    text: "The deep tissue massage at Nirvana was exactly what I needed. The therapist was attentive and addressed all my problem areas. I left feeling completely renewed.",
    name: "Michael J.",
    title: "New Client",
    initials: "MJ"
  },
  {
    text: "I've been to many spas, but Nirvana truly stands out. The attention to detail, from the aromatic welcome to the personalized treatments, makes every visit special.",
    name: "Leila A.",
    title: "Monthly Member",
    initials: "LA"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { ref, isInView } = useInView();

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      setCurrentIndex(index);
      
      // Get the container width and scroll to the current testimonial
      const slideWidth = sliderRef.current.offsetWidth / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
      sliderRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToSlide(newIndex);
  };

  // Handle responsive slider
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current && currentIndex > 0) {
        scrollToSlide(currentIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#fef8f4]">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-serif font-semibold mb-4 relative inline-block">
            <span className="inline-block pr-1 relative">
              Client Experiences
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#a67c52]"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#333] opacity-80">
            Hear what our valued clients have to say about their time at Nirvana.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-70 focus:outline-none transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#a67c52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={sliderRef}
            className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4 snap-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="flex items-center mb-4">
                    <div className="text-[#a67c52]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="italic text-[#333] mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#a67c52] text-white flex items-center justify-center">
                      <span className="font-semibold">{testimonial.initials}</span>
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-xs text-[#333] opacity-70">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-70 focus:outline-none transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#a67c52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#a67c52]' : 'bg-gray-300'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
