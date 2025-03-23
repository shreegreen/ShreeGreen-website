
import { MapPin, Phone, Mail } from "lucide-react";

const Locations = () => {
  const location = {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "Industrial Zone 3, Plot 45-C, Dubai",
    phone: "+971 4 123 4567",
    email: "info@ShreeGreen.com",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop",
  };

  return (
    <section id="contact" className="py-8 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
            Contact Us
          </span>
          <h2 className="section-title">
            Our Location
          </h2>
          <p className="section-subtitle mx-auto">
            With our manufacturing facility in Dubai, we're positioned to serve construction projects 
            throughout the Middle East and South Asia.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div 
            className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={location.image} 
                alt={`${location.city} office`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{location.country}</h3>
                <p className="text-white/90">{location.city}</p>
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{location.address}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{location.phone}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{location.email}</span>
              </div>
              
              <a 
                href={`mailto:${location.email}`}
                className="inline-block mt-2 text-primary font-medium text-sm hover:underline"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
