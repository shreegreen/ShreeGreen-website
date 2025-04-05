import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  // Helper function to handle section links
  const handleSectionLink = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (isHomePage) {
      // If already on home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home page with the section in the URL
      navigate(`/#${sectionId}`);
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">ShreeGreen</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Leading manufacturer of premium AAC building solutions across India.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                  href="https://www.linkedin.com/company/shreergreen" 
                  className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                <Linkedin className="h-5 w-5" />
              </a>

              <a href="#" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "about" },
                { name: "Products", path: "products" },
                { name: "Services", path: "services" },
                { name: "Carrer", path: "/projects" },
                { name: "Contact Us", path: "contact" }
              ].map((item) => (
                <li key={item.name}>
                  {item.path.startsWith('/') ? (
                    <Link 
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors hover:underline"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a 
                      href={`#${item.path}`}
                      className="text-gray-400 hover:text-white transition-colors hover:underline"
                      onClick={(e) => handleSectionLink(e, item.path)}
                    >
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              {[
                "AAC Blocks", 
                "Block Joining Mortar", 
                "Special Solutions"

              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#products"
                    className="text-gray-400 hover:text-white transition-colors hover:underline"
                    onClick={(e) => handleSectionLink(e, "products")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Survey # 316/317, Village Mhasa, Tal, Murbad, Maharashtra 421401</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">+91 9892034592</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">info@ShreeGreen.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} ShreeGreen. All rights reserved.
            </p>
            
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
