import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useInView } from "@/lib/animations";

export default function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be implemented here
    // For now, just log the data
    console.log("Form submitted", formData);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      service: "",
      message: ""
    });
    
    // Show success message (in a real implementation)
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 xl:px-20 bg-[#fffaf7]">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-serif font-semibold mb-4 relative inline-block">
            <span className="inline-block pr-1 relative">
              Connect with Us
              <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#a67c52]"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#333] opacity-80">
            Book your appointment or inquire about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-serif font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-[#333] mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition" 
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-[#333] mb-1">Service Interest</label>
                <select 
                  id="service" 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition"
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="facial">Facial Treatments</option>
                  <option value="massage">Body Massages</option>
                  <option value="hair">Hair Styling</option>
                  <option value="nail">Nail Care</option>
                  <option value="other">Other Services</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-[#333] mb-1">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent transition" 
                  placeholder="Tell us about your inquiry or preferred appointment times"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-[#a67c52] text-white rounded-md hover:bg-[#d8c0aa] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div>
            <div className={`bg-white p-8 rounded-lg shadow-md mb-8 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-serif font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-[#a67c52] text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-[#333] opacity-80">123 Serenity Avenue, Amman, Jordan</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-[#a67c52] text-xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-[#333] opacity-80">+962 7 9000 0000</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-[#a67c52] text-xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-[#333] opacity-80">info@nirvanaspajordan.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-[#a67c52] text-xl">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-[#333] opacity-80">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p className="text-[#333] opacity-80">Sunday: 12:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <a 
                  href="https://instagram.com/nirvanaspajordan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#a67c52] flex items-center justify-center text-white hover:bg-[#d8c0aa] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://facebook.com/nirvanaspajordan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#a67c52] flex items-center justify-center text-white hover:bg-[#d8c0aa] transition-colors"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>

            <div className={`bg-white p-8 rounded-lg shadow-md overflow-hidden transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-serif font-semibold mb-4">Our Location</h3>
              <div className="rounded-md overflow-hidden h-64 bg-gray-200">
                {/* This would be a Google Map in a real implementation */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-[#a67c52] mb-2 mx-auto" />
                    <p className="text-sm text-[#333] opacity-80">Map integration would appear here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
