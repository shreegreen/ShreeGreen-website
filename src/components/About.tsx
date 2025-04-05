import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Factory, Award, Users, ChevronLeft, ChevronRight, Shield, CheckCircle } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentSlide, setCurrentSlide] = useState(0);
  
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

  // Team members slideshow
  const teamMembers = [
    { name: "", position: "", image: "/tm2.jpg" },
    { name: "", position: "", image: "/tm3.jpg" },
    { name: "", position: "", image: "/tm4.jpg" },
    { name: "", position: "", image: "/tm5.jpg" }
    ];

  // Client logos
  const clients = [
    { name: "Client 1", logo: "/Miral.png" },
    { name: "Client 2", logo: "/Airport.png" },
    { name: "Client 3", logo: "/EcoFirst.png" },
    { name: "Client 4", logo: "/Shirke.png" },
    { name: "Client 5", logo: "/Vaastu.png" },
    { name: "Client 6", logo: "/neel.jpg" }
  ];

  const managementTeam = [
    {
      name: "Mr. Pradeep Mhatre",
      position: "Founder & Chairman",
      bio: "With over 15 years of industry experience, Jane leads our company with strategic vision and operational excellence.",
      photo: "/ph.jpg"
    },
    {
      name: "Mr. Sandip Mhatre",
      position: "Director",
      bio: "Michael ensures our day-to-day operations run smoothly while implementing innovative processes for continuous improvement.",
      photo: "/sm.jpg"  // Updated to use direct public path
    },
    {
      name: "Mr. Santosh Patil",
      position: "Director",
      bio: "Sarah drives our technological initiatives forward, keeping us at the cutting edge of industry developments.",
      photo: "/sp.jpg"  // Updated to use direct public path
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  // Auto-advance slides for team members
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

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
      description: "Over 200 professionals dedicated to excellence in AAC manufacturing"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-8 bg-white overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full inline-block mb-4">
            About ShreeGreen
          </span>
          <h2 className="section-title">
            Building Excellence Since 2017
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
                src="/ab.jpg" 
                  alt="ShreeGreen factory" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 rounded-xl p-6 animate-on-scroll" style={{ transitionDelay: '500ms' }}>
                <p className="text-3xl font-bold text-primary">10+</p>
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
              <b>
              <p className="text-muted-foreground mb-4">
              Shreerang GreenConcept AAC Blocks Pvt. Ltd. is a leading manufacturer of high-quality, eco-friendly AAC blocks in Murbad,
               Maharashtra. With advanced technology and a high-tech laboratory, we ensure superior strength, insulation, and sustainability.
              </p>
              <p className="text-muted-foreground">
              Backed by experienced professionals, we deliver durable and cost-effective solutions tailored for modern construction needs.
               Our commitment to innovation, quality, and customer satisfaction makes us a trusted name in the industry.
              </p>
              </b>
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
        

{/* Our Management Section */}
<section id="ourmanagement">
  <div className="mt-24 animate-on-scroll" style={{ transitionDelay: '900ms' }}>
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h3 className="text-2xl font-bold mb-4">Our Management</h3>
      <p className="text-muted-foreground">
        Meet our leadership team dedicated to excellence and innovation.
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {managementTeam.map((member, index) => (
        <div 
          key={index}
          className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll" 
          style={{ transitionDelay: `${1000 + index * 100}ms` }}
        >
          <div className="flex justify-center mb-6">
            <img 
              src={member.photo} 
              alt={member.name}
              className="h-48 w-48 object-cover rounded-full"
            />
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-lg">{member.name}</h4>
            <p className="text-primary font-medium mb-3">{member.position}</p>
          </div>
          <p className="text-sm text-muted-foreground">{member.bio}</p>
        </div>
      ))}
    </div>
  </div>
</section>



        {/* Our Team Section */}
        <section id="ourteam">
        <div className="mt-24 animate-on-scroll" style={{ transitionDelay: '700ms' }}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Team</h3>
            <p className="text-muted-foreground">
              Meet the dedicated professionals who drive our vision of sustainable construction forward.
            </p>
          </div>
          
          <div className="relative mt-12 max-w-2xl mx-auto">
            {/* Slideshow container */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <div className="relative h-96">
                {teamMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                      <h4 className="text-xl font-bold">{member.name}</h4>
                      <p>{member.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-lg z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        </section>
        
        {/* Our Clients Section - Truly Infinite Scrolling Carousel */}
        <section id="ourclients">
          <div className="mt-24 animate-on-scroll" style={{ transitionDelay: '800ms' }}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4">Our Clients</h3>
              <p className="text-muted-foreground">
                Trusted by leading companies and organizations across multiple industries.
              </p>
            </div>
            
            <div className="relative w-full max-w-7xl mx-auto">
              {/* Infinite scrolling carousel */}
              <div className="overflow-hidden py-4">
                <div className="infinite-carousel-container">
                  <div className="infinite-carousel-inner">
                    {/* Display each client logo twice to ensure seamless looping */}
                    {[...clients, ...clients, ...clients].map((client, index) => (
                      <div 
                        key={index}
                        className="infinite-carousel-item bg-gray-50 rounded-xl p-6 flex items-center justify-center h-28 shadow-sm" 
                      >
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </section>
  );
};

export default About;