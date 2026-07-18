import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { GraduationCap, Briefcase, TrendingUp, CheckCircle, BookOpen, MapPin, Users, Plane } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionCta } from "@/components/SectionCta";
import { PathwayAdvisor } from "@/components/PathwayAdvisor";
import { AUDIENCE_TAGS, PATHWAYS, type PathwayId } from "@/lib/site-content";
import { pathCardCtaClass, primaryCtaClass } from "@/lib/cta-styles";
import { readUtmParams, type UtmParams } from "@/lib/utm";

const viewport = { once: true, amount: 0.22, margin: "-60px 0px" as const };

export default function Home() {
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    profileType: "",
    interest: "",
    message: "",
  });
  const [utm, setUtm] = React.useState<UtmParams>(() => readUtmParams());
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
    if (!formData.profileType) {
      toast({
        title: "Profile Type required",
        description: "Please select the option that best describes you.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, ...utm }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Something went wrong");
      }
      toast({
        title: "Request Received!",
        description: "Thank you — we will be in touch shortly to schedule your free consultation.",
      });
      setFormData({ name: "", email: "", phone: "", profileType: "", interest: "", message: "" });
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

  React.useEffect(() => {
    setUtm(readUtmParams());
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      requestAnimationFrame(() => scrollTo(hash));
    }
    const interest = new URLSearchParams(window.location.search).get("interest");
    if (interest) {
      setFormData((f) => ({ ...f, interest }));
    }
  }, []);

  const pathwayOrder: PathwayId[] = ["canada", "training", "business"];
  const pathwayButtonStyles: Record<PathwayId, string> = {
    canada: "border-primary/20 hover:bg-primary/5 text-primary",
    training: "border-secondary/20 hover:bg-secondary/5 text-secondary",
    business: "border-accent/20 hover:bg-accent/5 text-accent",
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SiteHeader onNavigateSection={scrollTo} />

      {/* Hero Section */}
      <section id="hero" className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 hero-gradient-breathe bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.p variants={fadeInUp} className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              Canada ↔ Africa · Education & Career Development
            </motion.p>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Unlock Your Future.<br/> <span className="text-primary">Cross Borders.</span> <span className="text-secondary">Climb Ladders.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              A conversion-focused pathway for study in Canada, job-ready training, and business growth — choose your route in seconds.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-base text-muted-foreground/90 mb-10 max-w-xl mx-auto">
              Domestic recruitment · International students · Bootcamps · Business consulting
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className={`w-full sm:w-auto ${primaryCtaClass} text-lg h-14`} onClick={() => scrollTo("contact")} data-testid="hero-primary-cta">
                Book Free Consultation
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              {pathwayOrder.map((id, i) => (
                <Link key={id} href={PATHWAYS[id].slug}>
                  <Button
                    variant="outline"
                    className={`rounded-full w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${pathwayButtonStyles[id]}`}
                    data-testid={i === 0 ? "hero-study" : i === 1 ? "hero-job" : "hero-business"}
                  >
                    {PATHWAYS[id].heroLabel}
                  </Button>
                </Link>
              ))}
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

      {/* Audience segmentation */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-4 font-medium">
            Tailored support for every stage of your journey
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {AUDIENCE_TAGS.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full text-sm font-medium bg-muted/60 text-foreground/80 border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
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

      <SectionCta
        title="Not sure which pathway fits you?"
        description="Book a free consultation — we'll map the right route for study, training, or business growth."
        onAction={() => scrollTo("contact")}
        testId="cta-after-problem"
      />

      {/* Four Paths */}
      <section id="solutions" className="py-16 md:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Four Paths. One Clear Destination.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Choose the route that matches your goals — then book a consultation for a personalized plan.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0"
          >
            {[
              {
                title: "Domestic Recruitment",
                desc: "Career colleges and funded programs in Canada for career switchers, immigrants, and working adults.",
                href: "/canada-pathway",
                icon: Users,
                testId: "path-domestic-btn",
                cta: "Explore Domestic Path",
              },
              {
                title: "International Students",
                desc: "Admissions, visa, and funding support for African students — including Conestoga College pathways.",
                href: "/canada-pathway",
                icon: Plane,
                testId: "path-intl-btn",
                cta: "Explore International Path",
              },
              {
                title: "Career Training",
                desc: "AI, cybersecurity, digital skills, and Resume/LinkedIn programs designed for job-ready outcomes.",
                href: "/career-training",
                icon: GraduationCap,
                testId: "path-training-btn",
                cta: "View Training Paths",
              },
              {
                title: "Business Growth",
                desc: "Marketing, SEO, AI tools, and consulting for entrepreneurs ready to scale with confidence.",
                href: "/business-growth",
                icon: TrendingUp,
                testId: "path-business-btn",
                cta: "Explore Business Path",
              },
            ].map((path) => (
              <motion.div
                key={path.title}
                variants={sectionBlock}
                className="min-w-0 rounded-2xl"
              >
                <Card className="group border border-border/60 shadow-md hover:shadow-lg transition-shadow duration-300 bg-card rounded-2xl overflow-hidden h-full min-w-0">
                  <CardContent className="p-6 md:p-8 flex flex-col items-start text-left h-full min-w-0">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary shrink-0">
                      <path.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 break-words">{path.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-1 break-words">{path.desc}</p>
                    <Button className={pathCardCtaClass} asChild data-testid={path.testId}>
                      <Link href={path.href}>{path.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionCta
        title="Ready to explore your pathway?"
        description="Speak with an advisor about Canada study, career training, or business growth — free consultation."
        onAction={() => scrollTo("contact")}
        testId="cta-after-solutions"
      />

      <PathwayAdvisor onBookConsultation={() => scrollTo("contact")} />

      {/* How It Works */}
      <section id="process" className="py-16 md:py-20 bg-muted/30 overflow-x-hidden">
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

      {/* High-Demand Focus Areas */}
      <section id="programs" className="py-16 md:py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6"
          >
            <motion.div variants={sectionBlock} className="max-w-2xl min-w-0">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">High-Demand Focus Areas</h2>
              <p className="text-lg text-muted-foreground">
                Built for career switchers, immigrants, and ambitious professionals — easier to scan, clearer next steps.
              </p>
            </motion.div>
            <motion.div variants={sectionBlock}>
              <Button
                className={primaryCtaClass}
                onClick={() => scrollTo("contact")}
                data-testid="programs-inquire-btn"
              >
                Inquire About Programs
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 md:gap-8 min-w-0"
          >
            {[
              {
                title: "Canada Study Pathways",
                color: "primary" as const,
                left: ["Career College in Canada", "Funded program matching"],
                right: ["International Admissions", "Conestoga partner support"],
              },
              {
                title: "Tech & Digital Skills",
                color: "secondary" as const,
                left: ["AI Bootcamps", "Cybersecurity foundations"],
                right: ["Digital Skills Training", "Workplace tools mastery"],
              },
              {
                title: "Career Branding",
                color: "accent" as const,
                left: ["Resume optimization", "Canadian market targeting"],
                right: ["LinkedIn makeover", "Recruiter-ready profiles"],
              },
              {
                title: "Business & Growth",
                color: "accent" as const,
                left: ["Marketing & SEO", "AI tools for operators"],
                right: ["Growth consulting", "Grants & funding guidance"],
              },
            ].map((prog) => (
              <motion.div
                key={prog.title}
                variants={sectionBlock}
                whileHover={reduceMotion ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="min-w-0"
              >
                <Card className="group hover:border-primary/40 transition-all duration-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md h-full border-border/80 min-w-0">
                  <CardContent className="p-6 md:p-8 min-w-0">
                    <div
                      className={
                        prog.color === "primary"
                          ? "h-2 w-12 rounded-full mb-5 bg-primary"
                          : prog.color === "secondary"
                            ? "h-2 w-12 rounded-full mb-5 bg-secondary"
                            : "h-2 w-12 rounded-full mb-5 bg-accent"
                      }
                    />
                    <h3 className="text-xl font-bold mb-5 group-hover:text-primary transition-colors duration-300 break-words">
                      {prog.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 min-w-0">
                      <ul className="space-y-3 text-muted-foreground min-w-0">
                        {prog.left.map((item) => (
                          <li key={item} className="flex gap-2 items-start break-words">
                            <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-3 text-muted-foreground min-w-0">
                        {prog.right.map((item) => (
                          <li key={item} className="flex gap-2 items-start break-words">
                            <CheckCircle className="h-4 w-4 text-secondary shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionCta
        title="Find the program that fits your goals"
        description="Tell us your interest and we'll recommend the right PRAIT pathway and next steps."
        onAction={() => scrollTo("contact")}
        testId="cta-after-programs"
      />

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-20 bg-primary text-primary-foreground overflow-x-hidden">
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
      <section id="contact" className="py-16 md:py-20 bg-muted/30 overflow-x-hidden">
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
                  <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
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
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="rounded-lg bg-muted/50 border-transparent focus-visible:border-primary h-12" data-testid="form-input-phone" value={formData.phone} onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="profileType">Profile Type</Label>
                      <Select required value={formData.profileType} onValueChange={val => setFormData(f => ({ ...f, profileType: val }))}>
                        <SelectTrigger id="profileType" className="rounded-lg bg-muted/50 border-transparent h-12" data-testid="form-select-profile">
                          <SelectValue placeholder="Select the option that best describes you" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="career-switcher">Career switcher in Canada</SelectItem>
                          <SelectItem value="immigrant">Immigrant seeking a career path</SelectItem>
                          <SelectItem value="intl-student">International student (Africa focus)</SelectItem>
                          <SelectItem value="upskilling">Professional seeking upskilling</SelectItem>
                          <SelectItem value="business-owner">Small business owner / entrepreneur</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select required value={formData.interest} onValueChange={val => setFormData(f => ({ ...f, interest: val }))}>
                      <SelectTrigger id="interest" className="rounded-lg bg-muted/50 border-transparent h-12" data-testid="form-select-interest">
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="domestic">Domestic Career College (Canada)</SelectItem>
                        <SelectItem value="international">International Student Pathway</SelectItem>
                        <SelectItem value="study">Study or Work in Canada</SelectItem>
                        <SelectItem value="train">Job-Ready Skills & Training</SelectItem>
                        <SelectItem value="business">Business Growth & AI</SelectItem>
                      </SelectContent>
                    </Select>
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
                  <Button type="submit" size="lg" disabled={isSubmitting} className={`w-full ${primaryCtaClass} text-lg`} data-testid="form-submit-btn">
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
      <footer className="bg-foreground text-background py-10 overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-8">
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
              <h4 className="font-bold text-lg mb-6">Pathways</h4>
              <ul className="space-y-3">
                <li><Link href="/canada-pathway" className="text-background/70 hover:text-white transition-colors">Canada Pathway</Link></li>
                <li><Link href="/career-training" className="text-background/70 hover:text-white transition-colors">Career Training</Link></li>
                <li><Link href="/business-growth" className="text-background/70 hover:text-white transition-colors">Business Growth</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-3 text-background/70">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0" />
                  Canada
                </li>
                <li>
                  <a href="mailto:admin@praitconsulting.ca" className="hover:text-white transition-colors break-all">
                    admin@praitconsulting.ca
                  </a>
                </li>
                <li className="mt-4">
                  <Button variant="outline" className="w-full rounded-full border-background/20 text-background hover:bg-background/10 hover:text-white mt-4 h-12" onClick={() => scrollTo("contact")}>
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
