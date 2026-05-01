import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Briefcase, TrendingUp, CheckCircle, Globe, BookOpen, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const viewport = { once: true, amount: 0.22, margin: "-60px 0px" as const };

export default function Home() {
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = React.useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const easeOut = [0.22, 1, 0.36, 1] as const;

  const staggerContainer = React.useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: reduceMotion
          ? { duration: 0.15 }
          : { staggerChildren: 0.09, delayChildren: 0.06 },
      },
    }),
    [reduceMotion],
  );

  const fadeInUp = React.useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.15 : 0.55, ease: easeOut },
      },
    }),
    [reduceMotion],
  );

  const sectionBlock = React.useMemo(
    () => ({
      hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.15 : 0.65, ease: easeOut },
      },
    }),
    [reduceMotion],
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Something went wrong");
      }
      toast({
        title: "Request Received!",
        description: "Thank you — we will be in touch shortly to schedule your free consultation.",
      });
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    } catch (err) {
      toast({
        title: "Submission Failed",
        description: err instanceof Error ? err.message : "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navbar */}
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: easeOut }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")} data-testid="nav-logo">
            <img src="/prait-logo.jpeg" alt="PRAIT Consulting Logo" className="h-12 w-auto object-contain rounded-md transition-transform duration-300 hover:scale-[1.02]" />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollTo("solutions")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-link-solutions">Solutions</button>
            <button onClick={() => scrollTo("process")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-link-process">How It Works</button>
            <button onClick={() => scrollTo("programs")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-link-programs">Programs</button>
            <button onClick={() => scrollTo("testimonials")} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300" data-testid="nav-link-testimonials">Testimonials</button>
          </nav>
          <Button onClick={() => scrollTo("contact")} className="bg-accent hover:bg-accent/90 text-white rounded-full px-6 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]" data-testid="nav-cta">
            Book Consultation
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 hero-gradient-breathe bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Unlock Your Future.<br/> <span className="text-primary">Cross Borders.</span> <span className="text-secondary">Climb Ladders.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Bridging Africa and Canada with premier education, career development, and business consulting for a transformative journey.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white rounded-full text-lg h-14 px-8 shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]" onClick={() => scrollTo("contact")} data-testid="hero-primary-cta">
                Book Free Consultation
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary/5 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" onClick={() => scrollTo("programs")} data-testid="hero-study">Study in Canada</Button>
              <Button variant="outline" className="rounded-full border-secondary/20 hover:bg-secondary/5 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" onClick={() => scrollTo("programs")} data-testid="hero-job">Get Job-Ready</Button>
              <Button variant="outline" className="rounded-full border-accent/20 hover:bg-accent/5 text-accent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" onClick={() => scrollTo("programs")} data-testid="hero-business">Grow Your Business</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="border-y bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center divide-x divide-border/50"
          >
            {[
              { label: "Conestoga", sub: "College Partner", tone: "text-primary" },
              { label: "500+", sub: "Students Placed", tone: "text-secondary" },
              { label: "3", sub: "Countries Served", tone: "text-accent" },
              { label: "10+", sub: "Programs", tone: "text-primary" },
            ].map((stat) => (
              <motion.div key={stat.sub} variants={fadeInUp} className="flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-0.5">
                <span className={`text-3xl font-bold ${stat.tone}`}>{stat.label}</span>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem Awareness */}
      <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div initial="hidden" whileInView="show" viewport={viewport} variants={staggerContainer}>
            <motion.h2 variants={sectionBlock} className="text-3xl md:text-5xl font-bold mb-8">
              You are capable of more, but the path is unclear.
            </motion.h2>
            <motion.p variants={sectionBlock} className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed font-light">
              Career confusion. Credential gaps. Immigration uncertainty. Skills that don't match the modern market.
              The journey to a better life is complex, and navigating it alone is overwhelming.
              <strong className="text-white block mt-4">We've walked this path. We know the way.</strong>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solutions" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Three Pillars of Transformation
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your unique journey and goals.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={sectionBlock}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="rounded-2xl origin-center [transition:box-shadow_0.35s_ease] hover:shadow-xl"
            >
              <Card className="group border-none shadow-lg transition-shadow duration-300 bg-gradient-to-b from-card to-primary/5 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary transition-transform duration-300 group-hover:scale-105">
                    <Globe className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Canada Pathway</h3>
                  <p className="text-muted-foreground mb-6">Expert guidance for domestic and international student recruitment, specializing in prestigious institutions like Conestoga College.</p>
                  <Button variant="ghost" className="mt-auto rounded-full w-full border-primary/20 hover:bg-primary/5 text-primary group" onClick={() => scrollTo("programs")} data-testid="solution-canada-btn">
                    Explore Pathways <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={sectionBlock}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="rounded-2xl origin-center [transition:box-shadow_0.35s_ease] hover:shadow-xl"
            >
              <Card className="group border-none shadow-lg transition-shadow duration-300 bg-gradient-to-b from-card to-secondary/5 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary transition-transform duration-300 group-hover:scale-105">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Career Training</h3>
                  <p className="text-muted-foreground mb-6">Future-proof your skills with intensive bootcamps in AI, Cybersecurity, and Digital Skills designed for the modern workforce.</p>
                  <Button variant="ghost" className="mt-auto rounded-full w-full border-secondary/20 hover:bg-secondary/5 text-secondary group" onClick={() => scrollTo("programs")} data-testid="solution-training-btn">
                    View Bootcamps <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={sectionBlock}
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
              className="rounded-2xl origin-center [transition:box-shadow_0.35s_ease] hover:shadow-xl"
            >
              <Card className="group border-none shadow-lg transition-shadow duration-300 bg-gradient-to-b from-card to-accent/5 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent transition-transform duration-300 group-hover:scale-105">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Growth</h3>
                  <p className="text-muted-foreground mb-6">Strategic consulting and practical solutions to help entrepreneurs scale their operations and enter new global markets.</p>
                  <Button variant="ghost" className="mt-auto rounded-full w-full border-accent/20 hover:bg-accent/5 text-accent group" onClick={() => scrollTo("programs")} data-testid="solution-business-btn">
                    Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Proven Framework for Success
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              We turn complex processes into clear, actionable steps.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8 relative"
          >
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border -z-10 origin-left process-timeline-line" />
            {[
              { step: "01", title: "Discover", desc: "We analyze your background, goals, and map the optimal route.", icon: MapPin },
              { step: "02", title: "Plan", desc: "Develop a concrete strategy for admission, training, or business.", icon: BookOpen },
              { step: "03", title: "Apply & Train", desc: "Execute applications and enroll in vital skill-building programs.", icon: Briefcase },
              { step: "04", title: "Succeed", desc: "Land in Canada, start your new career, and thrive.", icon: CheckCircle },
            ].map((s, i) => (
              <motion.div key={i} variants={sectionBlock} className="flex flex-col items-center text-center relative">
                <motion.div
                  className="h-24 w-24 rounded-full bg-background border-4 border-background shadow-md flex items-center justify-center mb-6 z-10"
                  whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors duration-300">
                    <s.icon className="h-10 w-10" />
                  </div>
                </motion.div>
                <h4 className="text-sm font-bold text-accent mb-2 tracking-widest uppercase">STEP {s.step}</h4>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]" onClick={() => scrollTo("contact")} data-testid="process-cta">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Programs Overview */}
      <section id="programs" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <motion.div variants={sectionBlock} className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Targeted Programs</h2>
              <p className="text-lg text-muted-foreground">Designed specifically for career switchers, immigrants, and ambitious professionals.</p>
            </motion.div>
            <motion.div variants={sectionBlock}>
              <Button variant="outline" className="rounded-full shrink-0 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md" onClick={() => scrollTo("contact")} data-testid="programs-inquire-btn">
                Inquire About Programs
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Career College in Canada", desc: "Domestic placements for Canadian residents seeking practical career advancement.", color: "primary" as const },
              { title: "International Admissions", desc: "End-to-end support for international students applying to Conestoga and other top colleges.", color: "primary" as const },
              { title: "AI & Cybersecurity", desc: "Intensive tech bootcamps to transition into high-demand technology roles.", color: "secondary" as const },
              { title: "Digital Skills Training", desc: "Master modern digital tools, software, and platforms essential for corporate success.", color: "secondary" as const },
              { title: "Resume & LinkedIn", desc: "Optimization services to make you stand out to Canadian and global recruiters.", color: "accent" as const },
              { title: "Business & Marketing", desc: "Consulting packages for entrepreneurs to scale and market their services effectively.", color: "accent" as const },
            ].map((prog, i) => (
              <motion.div key={i} variants={sectionBlock} whileHover={reduceMotion ? undefined : { y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                <Card className="group hover:border-primary/50 transition-all duration-300 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md h-full border-border/80">
                  <CardContent className="p-6">
                    <div
                      className={
                        prog.color === "primary"
                          ? "h-2 w-12 rounded-full mb-6 bg-primary"
                          : prog.color === "secondary"
                            ? "h-2 w-12 rounded-full mb-6 bg-secondary"
                            : "h-2 w-12 rounded-full mb-6 bg-accent"
                      }
                    />
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{prog.title}</h3>
                    <p className="text-muted-foreground">{prog.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Lives Changed. Futures Built.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-primary-foreground/80">
              Don't just take our word for it. Hear from professionals who crossed borders and climbed ladders.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { quote: "PRAIT didn't just help me apply; they completely re-engineered my career trajectory. The transition from nursing in Africa to healthcare IT in Toronto was seamless because of their guidance.", name: "Sarah M.", role: "Healthcare IT Consultant, Toronto" },
              { quote: "The AI bootcamp gave me the exact technical skills I was missing. Within 3 months of completing the program, I landed a junior data role. They are truly invested in your success.", name: "David O.", role: "Data Analyst, Calgary" },
              { quote: "Navigating the international student process for Conestoga felt impossible until I met the PRAIT team. They held my hand through every single step of the process.", name: "Grace K.", role: "International Student, Ontario" },
            ].map((t, i) => (
              <motion.div key={i} variants={sectionBlock} whileHover={reduceMotion ? undefined : { y: -6 }} transition={{ type: "spring", stiffness: 380, damping: 22 }}>
                <Card className="bg-primary-foreground/10 border-none text-primary-foreground rounded-2xl p-8 flex flex-col justify-between h-full transition-shadow duration-300 hover:shadow-lg hover:shadow-black/10">
                  <div className="mb-6">
                    <div className="flex text-accent mb-4 gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <motion.span key={s} initial={{ opacity: 0.3 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: s * 0.05 }}>
                          ★
                        </motion.span>
                      ))}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA / Contact Form */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={sectionBlock}
            className="max-w-5xl mx-auto bg-background rounded-3xl shadow-xl overflow-hidden border"
          >
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
                      <Input id="name" required placeholder="John Doe" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary" data-testid="form-input-name" value={formData.name} onChange={e => setFormData(f => ({ ...f, name: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" required placeholder="john@example.com" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary" data-testid="form-input-email" value={formData.email} onChange={e => setFormData(f => ({ ...f, email: e.target.value }))} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary" data-testid="form-input-phone" value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Area of Interest</Label>
                      <Select required value={formData.interest} onValueChange={val => setFormData(f => ({ ...f, interest: val }))}>
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
                      value={formData.message}
                      onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                    ></textarea>
                  </div>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent hover:bg-accent/90 text-white rounded-full text-lg h-12" data-testid="form-submit-btn">
                    {isSubmitting ? "Sending..." : "Book Free Consultation"}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    Your information is secure. We never share your data with third parties.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
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
                <a href="https://www.linkedin.com/company/prait-consulting-inc/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-linkedin" aria-label="LinkedIn">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/share/1NsoT5BUJL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-facebook" aria-label="Facebook">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/prait_consulting?igsh=MWl1c3lyZ293Zm43OQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-instagram" aria-label="Instagram">
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a href="https://www.tiktok.com/@prait.consulting?_r=1&_t=ZS-95xYccaoDMS" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-tiktok" aria-label="TikTok">
                  <FaTiktok className="h-5 w-5" />
                </a>
                <a href="https://youtube.com/@praitconsulting?si=EJQYQxDudKl9PJ3k" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent transition-colors" data-testid="social-youtube" aria-label="YouTube">
                  <FaYoutube className="h-5 w-5" />
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
