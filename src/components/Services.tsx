
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, ShieldCheck, Clock, Truck, HardHat, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const services = [
    {
      icon: <HardHat className="h-6 w-6" />,
      title: "Technical Consulting",
      description: "Expert guidance on AAC applications, specifications, and construction methodologies"
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Logistics & Delivery",
      description: "Efficient supply chain management with timely deliveries across all locations"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored AAC products for special architectural and construction requirements"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Site Training",
      description: "Comprehensive training for contractors and workers on AAC installation techniques"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Rigorous testing and certification for all products ensuring consistent quality"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and technical assistance for all clients"
    }
  ];

  return (
    <section id="services" className="py-12 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
            Our Services
          </span>
          <h2 className="section-title">
            Comprehensive AAC Solutions
          </h2>
          <p className="section-subtitle mx-auto">
            Beyond manufacturing, we provide end-to-end services to ensure successful implementation
            of our AAC products in your construction projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 animate-on-scroll",
              )}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl overflow-hidden shadow-xl animate-on-scroll">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Expert Guidance?</h3>
              <p className="mb-6 text-white/90">
                Our team of AAC specialists is ready to help with your construction project.
                Get personalized support and solutions tailored to your specific needs.
              </p>
              <Button variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Request Consultation
              </Button>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=2000&auto=format&fit=crop" 
                alt="Construction consultation" 
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
