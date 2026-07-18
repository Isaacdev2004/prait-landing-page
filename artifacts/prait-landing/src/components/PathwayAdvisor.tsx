import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

type AdvisorAnswers = {
  goal: string;
  location: string;
  timeline: string;
};

type PathwayAdvisorProps = {
  onBookConsultation: () => void;
};

const CTA_LINE =
  "Please scroll down and fill out our Let's Talk form below to book a free consultation with our team!";

function buildRecommendation(answers: AdvisorAnswers): string {
  const { goal, location, timeline } = answers;

  if (goal === "study-intl") {
    return [
      "Based on your answers, the International Student Pathway is your strongest fit.",
      "We recommend starting with Conestoga College admissions support, document preparation, and visa/funding guidance so you can move from interest to a clear application plan.",
      location === "africa"
        ? "As an Africa-based applicant, our cross-border team will tailor next steps to your country and timeline."
        : "We'll map the admissions and landing steps around where you are today.",
      timeline === "asap"
        ? "Since you want to move quickly, prioritize a free consultation this week to lock in deadlines."
        : "We'll pace applications and prep around your preferred start window.",
      "",
      CTA_LINE,
    ].join(" ");
  }

  if (goal === "study-domestic") {
    return [
      "Based on your answers, the Domestic Canada Pathway (career colleges & funded programs) is the best next step.",
      "PRAIT can match you with practical programs for career switchers and immigrants, then guide you through applications and funding options.",
      "",
      CTA_LINE,
    ].join(" ");
  }

  if (goal === "training") {
    return [
      "Based on your answers, Career Training & Bootcamps is your recommended pathway.",
      "Focus areas that typically fit your profile include AI, cybersecurity, digital skills, and Resume/LinkedIn optimization — so you become job-ready for the Canadian market.",
      "",
      CTA_LINE,
    ].join(" ");
  }

  if (goal === "business") {
    return [
      "Based on your answers, Business Growth & AI Consulting is your recommended pathway.",
      "We can help with marketing/SEO, AI tools, grants, and a practical growth plan for your business.",
      "",
      CTA_LINE,
    ].join(" ");
  }

  return [
    "Based on your answers, we recommend a short discovery consultation so we can confirm the best PRAIT pathway for you — Study in Canada, Career Training, or Business Growth.",
    "",
    CTA_LINE,
  ].join(" ");
}

export function PathwayAdvisor({ onBookConsultation }: PathwayAdvisorProps) {
  const [answers, setAnswers] = React.useState<AdvisorAnswers>({
    goal: "",
    location: "",
    timeline: "",
  });
  const [recommendation, setRecommendation] = React.useState<string | null>(null);
  const [error, setError] = React.useState("");

  const findPathway = () => {
    if (!answers.goal || !answers.location || !answers.timeline) {
      setError("Please answer all three questions to get your recommendation.");
      setRecommendation(null);
      return;
    }
    setError("");
    setRecommendation(buildRecommendation(answers));
  };

  return (
    <section id="advisor" className="py-16 md:py-20 bg-muted/40 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Find My Pathway</h2>
          <p className="text-muted-foreground text-lg">
            Answer three quick questions and get a clear next-step recommendation — no account required.
          </p>
        </div>

        <Card className="rounded-2xl border shadow-md overflow-hidden">
          <CardContent className="p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="advisor-goal">What is your primary goal?</Label>
              <Select
                value={answers.goal}
                onValueChange={(goal) => setAnswers((a) => ({ ...a, goal }))}
              >
                <SelectTrigger id="advisor-goal" className="rounded-lg bg-muted/50 border-transparent h-12">
                  <SelectValue placeholder="Select the option that best matches your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="study-domestic">Study or train at a Canadian career college (I am in Canada)</SelectItem>
                  <SelectItem value="study-intl">Study in Canada as an international student</SelectItem>
                  <SelectItem value="training">Get job-ready skills (AI, cybersecurity, digital skills)</SelectItem>
                  <SelectItem value="business">Grow my business with marketing or AI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="advisor-location">Where are you based?</Label>
              <Select
                value={answers.location}
                onValueChange={(location) => setAnswers((a) => ({ ...a, location }))}
              >
                <SelectTrigger id="advisor-location" className="rounded-lg bg-muted/50 border-transparent h-12">
                  <SelectValue placeholder="Select the option that best describes you" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="africa">Africa</SelectItem>
                  <SelectItem value="other">Other / Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="advisor-timeline">When do you want to start?</Label>
              <Select
                value={answers.timeline}
                onValueChange={(timeline) => setAnswers((a) => ({ ...a, timeline }))}
              >
                <SelectTrigger id="advisor-timeline" className="rounded-lg bg-muted/50 border-transparent h-12">
                  <SelectValue placeholder="Select a timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">As soon as possible</SelectItem>
                  <SelectItem value="3-6">In 3–6 months</SelectItem>
                  <SelectItem value="exploring">Just exploring options</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <Button
              type="button"
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-white rounded-full text-base h-12 px-8 shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={findPathway}
              data-testid="advisor-find-pathway"
            >
              Find My Pathway
            </Button>

            {recommendation ? (
              <div
                className="rounded-xl bg-primary/5 border border-primary/15 p-5 md:p-6 text-left space-y-4"
                role="status"
                data-testid="advisor-recommendation"
              >
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Your recommendation</p>
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">{recommendation}</p>
                <Button
                  type="button"
                  className="bg-accent hover:bg-accent/90 text-white rounded-full h-12 px-8"
                  onClick={onBookConsultation}
                >
                  Go to Let's Talk Form
                </Button>
              </div>
            ) : null}

            <p className="text-xs text-muted-foreground">
              Phase 1 uses a guided recommendation engine (no third-party AI API). Live Gemini/OpenAI can replace this later if approved.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
