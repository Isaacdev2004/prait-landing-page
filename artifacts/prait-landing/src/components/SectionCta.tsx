import { Button } from "@/components/ui/button";
import { primaryCtaClass } from "@/lib/cta-styles";

type SectionCtaProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  onAction: () => void;
  testId?: string;
};

export function SectionCta({
  title,
  description,
  buttonLabel = "Book Free Consultation",
  onAction,
  testId = "section-cta",
}: SectionCtaProps) {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-y border-border/50 overflow-x-hidden">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 text-lg">{description}</p>
        <Button size="lg" onClick={onAction} data-testid={testId} className={primaryCtaClass}>
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
