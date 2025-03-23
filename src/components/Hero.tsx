
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-10 overflow-hidden" // Changed pt-16 to pt-10
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNhMGI0MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2LTZoLTZ2LTZoNnYtNmgtNnY2aC02djZoNnY2aC02djZoNnY2aDZ2LTZoNnYtNnptMTIgMGg2djZoLTZ2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 -z-10"></div>
      
      <div className="section-container grid md:grid-cols-2 gap-8 md:gap-28 items-center">
        <div 
          className={`space-y-6 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mt-[-2rem]"> {/* Added negative margin to move content up */}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
              Building a <span className="text-primary">Sustainable</span> Future with AAC Technology
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-lg">
            ShreeGreen delivers premium Autoclaved Aerated Concrete solutions across UAE, Oman, and India, combining innovation, sustainability, and exceptional quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="rounded-md h-12 px-6 text-white bg-primary hover:bg-primary/90">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-md h-12 px-6 border-2">
              Contact Us
            </Button>
          </div>
          <div className="pt-8 grid grid-cols-3 gap-4">
            {['15+', '1M+', '3'] .map((stat, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 delay-${500 + (i*200)} ${
                  isLoaded ? "opacity-100" : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat}</p>
                <p className="text-sm text-muted-foreground">
                  {i === 0 ? 'Years Experience' : i === 1 ? 'Blocks Produced' : 'Countries'}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className={`relative transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary/30 mix-blend-multiply z-10"></div>
            {/* Primary image */}
            <img 
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
              alt="AAC blocks construction" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            
            {/* Floating card elements */}
            <div className="absolute bottom-6 left-6 right-6 p-5 bg-gray-200/80 backdrop-blur-md shadow-md rounded-xl z-20 animate-slide-up">
              <h3 className="font-semibold text-lg mb-2">Eco-Friendly Materials</h3>
              <p className="text-sm text-gray-700">
                Our AAC blocks reduce environmental impact with 30% less carbon footprint
              </p>
            </div>
          </div>
          
          <div className="absolute -top-4 -right-4 w-40 h-40 bg-gray-200/90 backdrop-blur-sm shadow-lg rounded-xl p-4 z-10 animate-slide-right hidden md:block">
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Energy Efficient</p>
                <p className="text-2xl font-bold">50%</p>
                <p className="text-xs text-muted-foreground">Lower energy consumption</p>
              </div>
              
              <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 text-background fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
