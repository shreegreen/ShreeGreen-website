
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-10 overflow-hidden"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhMGI0MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2LTZoLTZ2LTZoNnYtNmgtNnY2aC02djZoNnY2aC02djZoNnY2aDZ2LTZoNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-10"></div>
      
      <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
        <div 
          className={`space-y-5 sm:space-y-6 max-w-full transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mt-[-1rem] sm:mt-[-2rem]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              Building a <span className="text-primary">Sustainable</span> Future with AAC Technology
            </h1>
          </div>
          <p className="text-base sm:text-lg max-w-lg text-muted-foreground">
            ShreeGreen delivers premium Autoclaved Aerated Concrete solutions across UAE, Oman, and India, combining innovation, sustainability, and exceptional quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-md h-10 sm:h-12 px-4 sm:px-6 text-white bg-primary hover:bg-primary/90">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-md h-10 sm:h-12 px-4 sm:px-6 border-2">
              Contact Us
            </Button>
          </div>
          <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-4">
            {['10+', '1M+', '3'] .map((stat, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 delay-${500 + (i*200)} ${
                  isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{stat}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {i === 0 ? 'Years Experience' : i === 1 ? 'Blocks Produced' : 'Countries'}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {!isMobile && (
          <div 
            className={`relative transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0  z-10"></div>
              {/* Updated image with a more professional construction image */}
              <img 
                src="/public/hp.jpg" 
                alt="Modern construction with sustainable materials" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

          </div>
        )}
        
        {isMobile && (
          <div 
            className={`relative h-64 mt-2 mb-4 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/30 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2000&auto=format&fit=crop"
                alt="Modern construction with sustainable materials" 
                className="w-full h-full object-cover"
              />
              
              {/* Simplified floating card for mobile */}
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-gray-200/90 backdrop-blur-md shadow-md rounded-lg z-20 animate-slide-up">
                <h3 className="font-semibold text-base">Eco-Friendly Materials</h3>
                <p className="text-xs text-gray-700">
                  30% less carbon footprint
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-24 text-background fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
