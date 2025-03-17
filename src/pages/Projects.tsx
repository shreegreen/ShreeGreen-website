
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Building, ArrowRight } from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "infrastructure", label: "Infrastructure" }
  ];

  const projects = [
    {
      id: 1,
      title: "Emerald Towers",
      location: "Dubai, UAE",
      year: "2022",
      category: "residential",
      image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b5?q=80&w=2574&auto=format&fit=crop",
      description: "Luxury residential towers featuring AAC blocks for thermal efficiency and sound insulation."
    },
    {
      id: 2,
      title: "Horizon Business Park",
      location: "Abu Dhabi, UAE",
      year: "2021",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2670&auto=format&fit=crop",
      description: "Modern commercial complex utilizing AAC panels for rapid construction and energy savings."
    },
    {
      id: 3,
      title: "Palm Residences",
      location: "Muscat, Oman",
      year: "2023",
      category: "residential",
      image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=2670&auto=format&fit=crop",
      description: "High-end residential community built with AAC blocks for superior thermal insulation."
    },
    {
      id: 4,
      title: "City Central Mall",
      location: "Mumbai, India",
      year: "2022",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1533029030467-904d7d01bb92?q=80&w=2670&auto=format&fit=crop",
      description: "Large-scale retail development utilizing AAC panels for fire resistance and acoustic performance."
    },
    {
      id: 5,
      title: "Coastal Highway Bridge",
      location: "Salalah, Oman",
      year: "2021",
      category: "infrastructure",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2670&auto=format&fit=crop",
      description: "Infrastructure project using specialized AAC products for lightweight structural components."
    },
    {
      id: 6,
      title: "Tech Park Campus",
      location: "Bangalore, India",
      year: "2023",
      category: "commercial",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2669&auto=format&fit=crop",
      description: "IT campus complex constructed with AAC blocks and panels for sustainable design."
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary/5 py-20 mt-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Projects</h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                Explore our portfolio of successful projects across UAE, Oman, and India where BlockCrete's premium AAC solutions have made a significant impact.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Projects Gallery */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-2xl mx-auto">
                  {projectCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="text-center">
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </AnimateOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <AnimateOnScroll key={project.id} delay={index * 100}>
                  <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="aspect-video w-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                          {project.year}
                        </span>
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <Building className="h-4 w-4" aria-hidden="true" />
                        {project.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </CardContent>
                  </Card>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="flex justify-center mt-16">
              <AnimateOnScroll>
                <Button 
                  onClick={() => navigate("/request-quote")} 
                  className="group"
                  size="lg"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </AnimateOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
