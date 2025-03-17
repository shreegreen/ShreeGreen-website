
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Factory, Award, Users } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  useEffect(() => {
    const animateElements = () => {
      if (!sectionRef.current) return;
      
      const targets = sectionRef.current.querySelectorAll('.animate-on-scroll');
      
      targets.forEach((target) => {
        if (isInView) {
          target.classList.add('visible');
        }
      });
    };
    
    animateElements();
  }, [isInView]);

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Presence",
      description: "Operating across UAE, Oman, and India with state-of-the-art manufacturing facilities"
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Advanced Technology",
      description: "Using cutting-edge German technology for superior AAC production"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified with rigorous quality control protocols"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Over 500 professionals dedicated to excellence in AAC manufacturing"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-12 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
            About BlockCrete
          </span>
          <h2 className="section-title">
            Building Excellence Since 2007
          </h2>
          <p className="section-subtitle mx-auto">
            Pioneering sustainable construction with premium AAC building materials that 
            combine innovation, performance, and environmental responsibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-primary/10 animate-on-scroll" style={{ transitionDelay: '200ms' }}></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-primary/5 animate-on-scroll" style={{ transitionDelay: '300ms' }}></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-xl animate-on-scroll" style={{ transitionDelay: '400ms' }}>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop" 
                  alt="BlockCrete factory" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-xl p-6 animate-on-scroll" style={{ transitionDelay: '500ms' }}>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Years of Excellence</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 animate-on-scroll" style={{ transitionDelay: '600ms' }}>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="text-muted-foreground mb-4">
                Founded in 2007, BlockCrete has grown from a single manufacturing facility to become
                a leading provider of AAC building solutions across the Middle East and South Asia.
              </p>
              <p className="text-muted-foreground">
                Our mission is to revolutionize construction through sustainable, high-performance 
                building materials that reduce environmental impact while delivering superior structural integrity.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 animate-on-scroll"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
