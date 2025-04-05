
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const products = [
    {
      name: "AAC Blocks",
      description: "Lightweight, fire-resistant building blocks with superior thermal insulation",
      image: "/aabb2.jpg", 

      features: [
        "Excellent thermal insulation",
        "Lightweight & easy to handle",
        "Fire resistant",
        "Sound absorption & acoustic insulation",
        "Precise dimensions for faster construction",
        "Environmentally friendly"
      ],
      specs: {
        density: "560-640 kg/m³",
        strength: "≥ 3.5 N/mm2 for Grade - 2 & ≥ 4.0 N/mm2 for Grade-1",
        sizes: "Multiple sizes available",
        thermalConductivity: "0.16-0.21 W/mK"
      }
    },
    {
      name: "Block Joining Mortar",
      description: "Reinforced autoclaved aerated concrete panels for floors, roofs and walls",
      image: "/as.jpg", 
      features: [
        "Spans up to 6m without intermediate supports",
        "High load-bearing capacity",
        "Excellent thermal and acoustic insulation",
        "Quick and easy installation",
        "Fire resistant for up to 6 hours",
        "Suitable for all climatic conditions"
      ],
      specs: {
        
       
      }
    }
  ];

  return (
    <section id="products" className="bg-gray-50 py-12 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
            Our Products
          </span>
          <h2 className="section-title">
            Premium AAC Solutions for Modern Construction
          </h2>
          <p className="section-subtitle mx-auto">
            Discover our range of high-quality autoclaved aerated concrete products 
            designed for superior performance, sustainability, and innovation.
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2" ref={containerRef}>
          <div className="inline-flex bg-gray-100 rounded-lg p-1 shadow-sm">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-6 py-3 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-300",
                  activeTab === index 
                    ? "bg-white shadow-sm text-primary" 
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 animate-on-scroll">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">{products[activeTab].name}</h3>
              <p className="text-muted-foreground">{products[activeTab].description}</p>
              
              <div>
                <h4 className="font-semibold mb-3">Key Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {products[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="h-5 w-5 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Technical Specifications</h4>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  {Object.entries(products[activeTab].specs).map(([key, value], index) => (
                    <div key={index} className="flex py-2 border-b last:border-0 border-gray-100">
                      <span className="text-sm font-medium w-1/3 text-gray-500 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm flex-1">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                Request Product Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-on-scroll">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                <img 
                  src={products[activeTab].image} 
                  alt={products[activeTab].name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="glass-card py-3 px-4 inline-block rounded-lg">
                    <span className="text-sm font-semibold text-primary">{products[activeTab].name}</span>
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

export default Products;
