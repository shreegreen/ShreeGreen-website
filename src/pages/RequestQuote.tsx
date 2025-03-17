
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Send, Building, FileText } from "lucide-react";

type QuoteFormValues = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  location: string;
  message: string;
};

const RequestQuote = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      location: "",
      message: ""
    }
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      console.log("Form data submitted:", data);
      
      // Simulate delay for API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Quote request submitted successfully. We'll contact you soon!");
      form.reset();
      
      // Optional: redirect to homepage or thank you page
      // navigate('/');
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary/5 py-20 mt-16">
          <div className="container mx-auto px-4">
            <AnimateOnScroll>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Request a Quote</h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                Get in touch with our team for detailed pricing and information about our premium AAC building solutions.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <AnimateOnScroll>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <Card>
                      <CardContent className="p-6">
                        <Tabs defaultValue="uae">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="uae">UAE</TabsTrigger>
                            <TabsTrigger value="oman">Oman</TabsTrigger>
                            <TabsTrigger value="india">India</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="uae" className="space-y-4 mt-4">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Dubai Office</p>
                                <p className="text-muted-foreground text-sm">
                                  BlockCrete Building Materials LLC<br />
                                  Industrial Area 2, Dubai, UAE
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground text-sm">+971 4 123 4567</p>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="oman" className="space-y-4 mt-4">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Muscat Office</p>
                                <p className="text-muted-foreground text-sm">
                                  BlockCrete Oman LLC<br />
                                  Industrial Estate, Muscat, Oman
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground text-sm">+968 2 123 4567</p>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="india" className="space-y-4 mt-4">
                            <div className="flex items-start gap-3">
                              <MapPin className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Mumbai Office</p>
                                <p className="text-muted-foreground text-sm">
                                  BlockCrete India Pvt Ltd<br />
                                  MIDC Industrial Area, Mumbai, India
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="h-5 w-5 text-primary mt-0.5" />
                              <div>
                                <p className="font-medium">Phone</p>
                                <p className="text-muted-foreground text-sm">+91 22 1234 5678</p>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6 flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-muted-foreground text-sm">info@blockcrete.com</p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg font-semibold">What happens next?</h3>
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">1</div>
                          <p className="text-muted-foreground text-sm pt-0.5">We'll review your request within 24 hours</p>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">2</div>
                          <p className="text-muted-foreground text-sm pt-0.5">Our team will contact you for additional details if needed</p>
                        </li>
                        <li className="flex gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">3</div>
                          <p className="text-muted-foreground text-sm pt-0.5">You'll receive a detailed quote for your project</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Quote Request Form */}
              <div className="lg:col-span-2">
                <AnimateOnScroll delay={200}>
                  <Card>
                    <CardContent className="p-6 sm:p-8">
                      <h2 className="text-2xl font-bold mb-6">Get Your Personalized Quote</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name*</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" required {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email*</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="john@example.com" required {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number*</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+1 (555) 123-4567" required {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="company"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Company</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your company name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="projectType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Project Type*</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="Residential, Commercial, etc."
                                      required
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="location"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Project Location*</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="City, Country"
                                      required
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details*</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Please provide details about your project requirements, dimensions, quantity needed, etc."
                                    className="min-h-32"
                                    required
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex justify-end">
                            <Button 
                              type="submit" 
                              size="lg"
                              disabled={isSubmitting}
                              className="gap-2"
                            >
                              {isSubmitting ? (
                                <>Processing<span className="loading loading-spinner loading-xs"></span></>
                              ) : (
                                <>
                                  Submit Request
                                  <Send className="h-4 w-4" />
                                </>
                              )}
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>

                  <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Download Product Catalog</p>
                        <p className="text-muted-foreground text-sm mb-2">
                          Get detailed specifications and technical information about our AAC products.
                        </p>
                        <Button variant="outline" size="sm" className="gap-1">
                          <FileText className="h-4 w-4" />
                          Download Catalog
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestQuote;
