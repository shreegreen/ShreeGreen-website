import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Building, ArrowRight, Upload, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const Projects = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: ""
  });
  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is PDF or DOC
      const fileType = file.type;
      if (fileType === "application/pdf" || 
          fileType === "application/msword" || 
          fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setResume(file);
      } else {
        alert("Please upload a PDF or Word document");
        e.target.value = null;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form Data:", formData);
      console.log("Resume:", resume);
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Optional: Reset form after submission
      // setFormData({
      //   fullName: "",
      //   email: "",
      //   phone: "",
      //   position: "",
      //   experience: "",
      //   coverLetter: ""
      // });
      // setResume(null);
      
      toast({
        title: "Application Submitted",
        description: "Thank you for your application. We will contact you soon.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary/5 py-20 mt-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Career Portal</h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                Apply for job opportunities and join our team of talented professionals.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {isSuccess ? (
              <Card className="max-w-3xl mx-auto">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Application Submitted Successfully!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for applying. Our team will review your application and contact you soon.
                  </p>
                  <Button onClick={() => setIsSuccess(false)}>Submit Another Application</Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="max-w-3xl mx-auto">
                <CardHeader>
                  <CardTitle>Job Application Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to apply for an open position
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input 
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input 
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Your contact number"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="position">Position Applying For *</Label>
                          <Select 
                            name="position" 
                            onValueChange={(value) => setFormData(prev => ({...prev, position: value}))}
                            required
                          >
                            <SelectTrigger id="position">
                              <SelectValue placeholder="Select position" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="software-engineer">Software Engineer</SelectItem>
                              <SelectItem value="product-manager">Product Manager</SelectItem>
                              <SelectItem value="ux-designer">UX Designer</SelectItem>
                              <SelectItem value="data-scientist">Data Scientist</SelectItem>
                              <SelectItem value="marketing-specialist">Marketing Specialist</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="experience">Years of Experience *</Label>
                          <Select 
                            name="experience" 
                            onValueChange={(value) => setFormData(prev => ({...prev, experience: value}))}
                            required
                          >
                            <SelectTrigger id="experience">
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5-10">5-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="resume">Resume/CV (PDF or DOC) *</Label>
                        <div className="mt-1 border-2 border-dashed rounded-md p-6 flex justify-center">
                          <div className="space-y-2 text-center">
                            {resume ? (
                              <div className="text-sm text-green-600 flex items-center justify-center">
                                <CheckCircle className="h-5 w-5 mr-2" />
                                {resume.name}
                              </div>
                            ) : (
                              <>
                                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                                <div className="flex text-sm justify-center">
                                  <label htmlFor="file-upload" className="relative cursor-pointer bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90">
                                    <span>Upload a file</span>
                                    <Input 
                                      id="file-upload" 
                                      name="resume" 
                                      type="file" 
                                      className="sr-only"
                                      onChange={handleResumeUpload}
                                      accept=".pdf,.doc,.docx"
                                      required
                                    />
                                  </label>
                                </div>
                                <p className="text-xs text-muted-foreground">PDF or DOC up to 10MB</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                        <Textarea 
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          placeholder="Tell us why you're interested in this position and what makes you a good fit"
                          rows={5}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;