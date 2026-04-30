import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Briefcase, TrendingUp, CheckCircle, Globe, BookOpen, HeartHandshake, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Requested",
      description: "We will be in touch with you shortly to schedule your free consultation.",
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")} data-testid="nav-logo">
            <img src="/prait-logo.jpeg" alt="PRAIT Consulting Logo" className="h-12 w-auto object-contain rounded-md" />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollTo("solutions")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-link-solutions">Solutions</button>
            <button onClick={() => scrollTo("process")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-link-process">How It Works</button>
            <button onClick={() => scrollTo("programs")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-link-programs">Programs</button>
            <button onClick={() => scrollTo("testimonials")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" data-testid="nav-link-testimonials">Testimonials</button>
          </nav>
          <Button onClick={() => scrollTo("contact")} className="bg-accent hover:bg-accent/90 text-white rounded-full px-6" data-testid="nav-cta">
            Book Consultation
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Unlock Your Future.<br/> <span className="text-primary">Cross Borders.</span> <span className="text-secondary">Climb Ladders.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bridging Africa and Canada with premier education, career development, and business consulting for a transformative journey.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white rounded-full text-lg h-14 px-8 shadow-lg shadow-accent/20" onClick={() => scrollTo("contact")} data-testid="hero-primary-cta">
                Book Free Consultation
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary" onClick={() => scrollTo("programs")} data-testid="hero-study">Study in Canada</Button>
              <Button variant="outline" className="rounded-full border-secondary/20 hover:bg-secondary/5 text-secondary" onClick={() => scrollTo("programs")} data-testid="hero-job">Get Job-Ready</Button>
              <Button variant="outline" className="rounded-full border-accent/20 hover:bg-accent/5 text-accent" onClick={() => scrollTo("programs")} data-testid="hero-business">Grow Your Business</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="border-y bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center divide-x divide-border/50">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-primary">Conestoga</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">College Partner</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-secondary">500+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Students Placed</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-accent">3</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Countries Served</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-primary">10+</span>
              <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">You are capable of more, but the path is unclear.</h2>
          <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-light">
            Career confusion. Credential gaps. Immigration uncertainty. Skills that don't match the modern market. 
            The journey to a better life is complex, and navigating it alone is overwhelming. 
            <strong className="text-white block mt-4">We've walked this path. We know the way.</strong>
          </p>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Three Pillars of Transformation</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions tailored to your unique journey and goals.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-card to-primary/5 rounded-2xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Canada Pathway</h3>
                <p className="text-muted-foreground mb-6">Expert guidance for domestic and international student recruitment, specializing in prestigious institutions like Conestoga College.</p>
                <Button variant="ghost" className="mt-auto rounded-full w-full border-primary/20 hover:bg-primary/5 text-primary group" onClick={() => scrollTo("programs")} data-testid="solution-canada-btn">
                  Explore Pathways <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-card to-secondary/5 rounded-2xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Training</h3>
                <p className="text-muted-foreground mb-6">Future-proof your skills with intensive bootcamps in AI, Cybersecurity, and Digital Skills designed for the modern workforce.</p>
                <Button variant="ghost" className="mt-auto rounded-full w-full border-secondary/20 hover:bg-secondary/5 text-secondary group" onClick={() => scrollTo("programs")} data-testid="solution-training-btn">
                  View Bootcamps <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-card to-accent/5 rounded-2xl overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">Business Growth</h3>
                <p className="text-muted-foreground mb-6">Strategic consulting and practical solutions to help entrepreneurs scale their operations and enter new global markets.</p>
                <Button variant="ghost" className="mt-auto rounded-full w-full border-accent/20 hover:bg-accent/5 text-accent group" onClick={() => scrollTo("programs")} data-testid="solution-business-btn">
                  Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A Proven Framework for Success</h2>
            <p className="text-lg text-muted-foreground">We turn complex processes into clear, actionable steps.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border -z-10"></div>
            
            {[
              { step: "01", title: "Discover", desc: "We analyze your background, goals, and map the optimal route.", icon: MapPin },
              { step: "02", title: "Plan", desc: "Develop a concrete strategy for admission, training, or business.", icon: BookOpen },
              { step: "03", title: "Apply & Train", desc: "Execute applications and enroll in vital skill-building programs.", icon: Briefcase },
              { step: "04", title: "Succeed", desc: "Land in Canada, start your new career, and thrive.", icon: CheckCircle },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="h-24 w-24 rounded-full bg-background border-4 border-background shadow-md flex items-center justify-center mb-6 z-10">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <s.icon className="h-10 w-10" />
                  </div>
                </div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-widest uppercase">STEP {s.step}</h4>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8" onClick={() => scrollTo("contact")} data-testid="process-cta">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Targeted Programs</h2>
              <p className="text-lg text-muted-foreground">Designed specifically for career switchers, immigrants, and ambitious professionals.</p>
            </div>
            <Button variant="outline" className="rounded-full shrink-0" onClick={() => scrollTo("contact")} data-testid="programs-inquire-btn">Inquire About Programs</Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Career College in Canada", desc: "Domestic placements for Canadian residents seeking practical career advancement.", color: "primary" },
              { title: "International Admissions", desc: "End-to-end support for international students applying to Conestoga and other top colleges.", color: "primary" },
              { title: "AI & Cybersecurity", desc: "Intensive tech bootcamps to transition into high-demand technology roles.", color: "secondary" },
              { title: "Digital Skills Training", desc: "Master modern digital tools, software, and platforms essential for corporate success.", color: "secondary" },
              { title: "Resume & LinkedIn", desc: "Optimization services to make you stand out to Canadian and global recruiters.", color: "accent" },
              { title: "Business & Marketing", desc: "Consulting packages for entrepreneurs to scale and market their services effectively.", color: "accent" },
            ].map((prog, i) => (
              <Card key={i} className="group hover:border-primary/50 transition-colors rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md">
                <CardContent className="p-6">
                  <div className={`h-2 w-12 rounded-full mb-6 bg-${prog.color}`}></div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{prog.title}</h3>
                  <p className="text-muted-foreground">{prog.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lives Changed. Futures Built.</h2>
            <p className="text-lg text-primary-foreground/80">Don't just take our word for it. Hear from professionals who crossed borders and climbed ladders.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "PRAIT didn't just help me apply; they completely re-engineered my career trajectory. The transition from nursing in Africa to healthcare IT in Toronto was seamless because of their guidance.", name: "Sarah M.", role: "Healthcare IT Consultant, Toronto" },
              { quote: "The AI bootcamp gave me the exact technical skills I was missing. Within 3 months of completing the program, I landed a junior data role. They are truly invested in your success.", name: "David O.", role: "Data Analyst, Calgary" },
              { quote: "Navigating the international student process for Conestoga felt impossible until I met the PRAIT team. They held my hand through every single step of the process.", name: "Grace K.", role: "International Student, Ontario" }
            ].map((t, i) => (
              <Card key={i} className="bg-primary-foreground/10 border-none text-primary-foreground rounded-2xl p-8 flex flex-col justify-between">
                <div className="mb-6">
                  <div className="flex text-accent mb-4">
                    {[1,2,3,4,5].map(s => <span key={s}>★</span>)}
                  </div>
                  <p className="text-lg font-medium leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="flex items-center gap-4 border-t border-primary-foreground/20 pt-6">
                  <div className="h-12 w-12 rounded-full bg-primary-foreground/20 flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm text-primary-foreground/70">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Form */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-background rounded-3xl shadow-xl overflow-hidden border">
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
                  <p className="text-primary-foreground/80 mb-8">Take the first step towards your new future. Book a free, no-obligation consultation with our experts.</p>
                  <ul className="space-y-4 mb-12">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-accent h-5 w-5" />
                      <span>Personalized pathway assessment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-accent h-5 w-5" />
                      <span>Clear actionable next steps</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="text-accent h-5 w-5" />
                      <span>Answers to all your questions</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 bg-white rounded-md p-2">
                    <img src="/prait-logo.jpeg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <p className="font-bold">PRAIT Consulting Inc.</p>
                    <p className="text-sm text-primary-foreground/70">Canada</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3 p-10">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" required placeholder="John Doe" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary" data-testid="form-input-name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary" data-testid="form-input-email" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary" data-testid="form-input-phone" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select required>
                        <SelectTrigger id="interest" className="rounded-lg bg-muted/50 border-transparent" data-testid="form-select-interest">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="study">Study in Canada</SelectItem>
                          <SelectItem value="train">Career Training / Bootcamp</SelectItem>
                          <SelectItem value="business">Business Consulting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information (Optional)</Label>
                    <textarea 
                      id="message" 
                      className="flex w-full rounded-lg border border-transparent bg-muted/50 px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px] resize-none" 
                      placeholder="Tell us a bit about your current situation..."
                      data-testid="form-input-message"
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white rounded-full text-lg h-12" data-testid="form-submit-btn">
                    Book Free Consultation
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your information is secure. We never share your data with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6 bg-white p-2 rounded-md inline-block w-fit">
                <img src="/prait-logo.jpeg" alt="PRAIT Consulting Logo" className="h-8 w-auto object-contain" />
              </div>
              <p className="text-background/70 max-w-md mb-6 leading-relaxed">
                Bridging Africa and Canada through premium education, transformative career training, and strategic business consulting. Your future, our expertise.
              </p>
              <div className="flex gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-linkedin" aria-label="LinkedIn">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-twitter" aria-label="X (Twitter)">
                  <FaXTwitter className="h-4 w-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-facebook" aria-label="Facebook">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-instagram" aria-label="Instagram">
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><button onClick={() => scrollTo("hero")} className="text-background/70 hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollTo("solutions")} className="text-background/70 hover:text-white transition-colors">Solutions</button></li>
                <li><button onClick={() => scrollTo("programs")} className="text-background/70 hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => scrollTo("testimonials")} className="text-background/70 hover:text-white transition-colors">Testimonials</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-background/70">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Canada
                </li>
                <li className="mt-4">
                  <Button variant="outline" className="w-full rounded-full border-background/20 text-background hover:bg-background/10 hover:text-white mt-4" onClick={() => scrollTo("contact")}>
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>&copy; {new Date().getFullYear()} PRAIT Consulting Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors" data-testid="footer-privacy-link">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors" data-testid="footer-terms-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
