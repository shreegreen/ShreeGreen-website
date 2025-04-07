import { MapPin, Phone, Mail } from "lucide-react";

const Locations = () => {
  const location = {
    country: "India",
    address: "Survey # 316/317, Village Mhasa, Tal, Murbad, Maharashtra 421401",
    phone: "+919421325914",
    email: "shreegreen",
    image: "/cc.jpg", // This path will be used correctly now
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Location
          </h2>
          <p className="text-gray-600 mx-auto">
            With our manufacturing facility in Thane, we're positioned to serve construction projects 
            throughout the world.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Area */}
              <div className="h-64 lg:h-auto relative">
                <img 
                  src={location.image}
                  alt="Facility in India" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{location.country}</h3>
                  <p className="text-white/80 text-sm">Manufacturing Facility</p>
                </div>
              </div>
              
              {/* Contact Info Area */}
              <div className="p-8">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-1 bg-primary mr-3"></span>
                      Contact Details
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Address</p>
                          <p className="text-gray-600">{location.address}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Phone</p>
                          <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-primary">
                            {location.phone}
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-primary/10 p-3 rounded-lg mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700 mb-1">Email</p>
                          <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-primary">
                            {location.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <a 
                      href={`mailto:${location.email}`}
                      className="inline-block w-full px-6 py-3 bg-primary text-white font-medium rounded-lg text-center hover:bg-primary/90 transition-colors"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;