import React from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionCta } from "@/components/SectionCta";
import { PATHWAYS, type PathwayId } from "@/lib/site-content";

type PathwayPageProps = {
  pathwayId: PathwayId;
};

export default function PathwayPage({ pathwayId }: PathwayPageProps) {
  const pathway = PATHWAYS[pathwayId];
  const reduceMotion = useReducedMotion();
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  const goConsultation = () => {
    window.location.href = `${base}/?interest=${pathway.interestValue}#contact`;
  };

  const fade = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.15 : 0.55 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 hero-gradient-breathe bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.p variants={fade} className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
              {pathway.heroLabel}
            </motion.p>
            <motion.h1 variants={fade} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {pathway.title}
            </motion.h1>
            <motion.p variants={fade} className="text-xl text-muted-foreground mb-10 leading-relaxed">
              {pathway.subtitle}
            </motion.p>
            <motion.div variants={fade} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white rounded-full h-14 px-8"
                onClick={goConsultation}
              >
                Book Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" onClick={goConsultation}>
                Talk to an Advisor
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Who this pathway is for</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {pathway.audiences.map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {pathway.highlights.map((item) => (
              <Card key={item} className="rounded-xl border-border/80 shadow-sm">
                <CardContent className="p-5 flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-6">Programs in this pathway</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pathway.programs.map((prog) => (
              <Card key={prog.title} className="rounded-xl hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-2">{prog.title}</h4>
                  <p className="text-muted-foreground">{prog.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="flex justify-center text-accent mb-4 gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s}>★</span>
            ))}
          </div>
          <p className="text-xl font-medium leading-relaxed mb-8">"{pathway.testimonial.quote}"</p>
          <p className="font-bold">{pathway.testimonial.name}</p>
          <p className="text-primary-foreground/70 text-sm">{pathway.testimonial.role}</p>
        </div>
      </section>

      <SectionCta
        title="Ready to take the next step?"
        description="Book a free consultation and get a personalized plan for your goals."
        onAction={goConsultation}
        testId={`pathway-cta-${pathwayId}`}
      />

      <footer className="py-8 border-t text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} PRAIT Consulting Inc.</p>
        <Link href="/" className="text-primary hover:underline mt-2 inline-block">
          Return to homepage
        </Link>
      </footer>
    </div>
  );
}
