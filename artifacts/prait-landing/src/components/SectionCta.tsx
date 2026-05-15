import { Button } from "@/components/ui/button";

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
    <section className="py-14 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-y border-border/50">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-8 text-lg">{description}</p>
        <Button
          size="lg"
          onClick={onAction}
          data-testid={testId}
          className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-accent/15"
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
