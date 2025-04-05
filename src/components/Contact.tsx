import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Company information
  const companyInfo = {
    country: "India",
    address: "Survey # 316/317, Village Mhasa, Tal, Murbad, Maharashtra 421401",
    phone: "+91 9892034592",
    email: "info@shreegreen.com",
    whatsapp: "+91 9892034592",
    image: "/cc.jpg",
  };

  // Format address to properly display multiline content
  const formatAddress = (address) => {
    // First replace the escaped newlines with actual newlines
    const processedAddress = address.replace(/\\n/g, '\n');
    // Then split by newline and map to spans
    return processedAddress.split('\n').map((line, index) => (
      <span key={index} className="block text-sm leading-relaxed">{line}</span>
    ));
  };
  
  // Improved loading state management
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally send data to your API
      // const response = await fetch("/api/contact", {...})
      
      // Show success message (implement your toast/notification here)
      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      // Show error message
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      {/* Reduced padding at the top from py-16 to py-6 */}
      <section id="contact" className="py-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-600 mx-auto">
              Have questions or need assistance? We're here to help. Reach out to our team using any of the contact methods below.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
          </div>

          {/* Contact Information Cards */}
          <div className="mb-12">
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 h-32 animate-pulse shadow-sm"
                  ></div>
                ))}
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    links: [
                      { text: companyInfo.email, href: `mailto:${companyInfo.email}` },
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    links: [
                      { text: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                    ],
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    links: [
                      {
                        text: companyInfo.whatsapp,
                        href: `https://wa.me/${companyInfo.whatsapp.replace(/[+\s]/g, '')}`,
                      },
                    ],
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    address: companyInfo.address,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                    className="bg-white rounded-lg p-5 flex flex-col items-center text-center hover:shadow-md transition-all duration-200 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-medium mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    {item.links ? (
                      <div className="space-y-1">
                        {item.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.href}
                            className="block text-sm text-gray-600 hover:text-primary transition-colors"
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <address className="not-italic text-sm text-gray-600 mt-1">
                        {formatAddress(item.address)}
                      </address>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Contact Form + Location */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Form Section */}
              <div className="p-8 order-2 lg:order-1">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-1 bg-primary mr-3"></span>
                      Send Us a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1 text-gray-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          required
                          className="w-full h-10 text-sm rounded-md border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 px-3 py-2 transition-all"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1 text-gray-700"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full h-10 text-sm rounded-md border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 px-3 py-2 transition-all"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-1 text-gray-700"
                        >
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full text-sm rounded-md border border-gray-200 focus:border-primary focus:ring focus:ring-primary/30 px-3 py-2 transition-all resize-y min-h-[100px]"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                          {!isSubmitting && (
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              
              {/* Image and Map Section */}
              <div className="order-1 lg:order-2">
                <div className="h-64 lg:h-full min-h-[300px] relative">
                  {/* Image with overlay */}
                  <img 
                    src={companyInfo.image}
                    alt="Facility in India" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  
                  {/* Location information overlay */}
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{companyInfo.country}</h3>
                    <p className="text-white/80 text-sm mb-4">Manufacturing Facility</p>
                    
                    {/* Map link */}
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors text-sm"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>View on Map</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Google Map Embed */}
          <div className="mt-12">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg h-[400px] border border-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.2655574291013!2d73.22845367587729!3d19.14142535206471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ed7bb42bb5%3A0xca9c3001e3c4c19!2sMurbad%2C%20Maharashtra%20421401!5e0!3m2!1sen!2sin!4v1712087255433!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        
        </div>
      </section>
      {/* Added padding-top to create space between content and footer */}
      <div className="pt-12"></div>
      <Footer />
    </>
  );
};

export default Contact;