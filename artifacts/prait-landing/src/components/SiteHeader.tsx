import React from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PATHWAYS, type PathwayId } from "@/lib/site-content";

type SiteHeaderProps = {
  onNavigateSection?: (id: string) => void;
  className?: string;
};

export function SiteHeader({ onNavigateSection, className = "" }: SiteHeaderProps) {
  const [open, setOpen] = React.useState(false);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "";

  const goSection = (id: string) => {
    setOpen(false);
    if (onNavigateSection) {
      onNavigateSection(id);
      return;
    }
    window.location.href = `${base}/#${id}`;
  };

  const pathwayLinks = (Object.keys(PATHWAYS) as PathwayId[]).map((key) => PATHWAYS[key]);
  const navButtonClass =
    "text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300";

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="nav-logo">
          <img src="/prait-logo.jpeg" alt="PRAIT Consulting Logo" className="h-12 w-auto object-contain rounded-md" />
        </Link>

        <nav className="hidden lg:flex gap-6 items-center">
          <div className="flex gap-5 items-center border-r border-border/60 pr-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pathways</span>
            {pathwayLinks.map((p) => (
              <Link key={p.slug} href={p.slug} className={navButtonClass}>
                {p.navLabel}
              </Link>
            ))}
          </div>
          <button type="button" onClick={() => goSection("process")} className={navButtonClass} data-testid="nav-link-process">
            How It Works
          </button>
          <button type="button" onClick={() => goSection("advisor")} className={navButtonClass} data-testid="nav-link-advisor">
            Find My Pathway
          </button>
          <button type="button" onClick={() => goSection("programs")} className={navButtonClass} data-testid="nav-link-programs">
            Programs
          </button>
          <button type="button" onClick={() => goSection("testimonials")} className={navButtonClass} data-testid="nav-link-testimonials">
            Testimonials
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => goSection("contact")}
            className="hidden sm:inline-flex bg-accent hover:bg-accent/90 text-white rounded-full px-6 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
            data-testid="nav-cta"
          >
            Book Consultation
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden rounded-full" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pathways</p>
                {pathwayLinks.map((p) => (
                  <Link key={p.slug} href={p.slug} className="text-left font-medium hover:text-primary" onClick={() => setOpen(false)}>
                    {p.navLabel}
                  </Link>
                ))}
                <hr className="border-border/60" />
                <button type="button" className="text-left font-medium hover:text-primary" onClick={() => goSection("process")}>
                  How It Works
                </button>
                <button type="button" className="text-left font-medium hover:text-primary" onClick={() => goSection("advisor")}>
                  Find My Pathway
                </button>
                <button type="button" className="text-left font-medium hover:text-primary" onClick={() => goSection("programs")}>
                  Programs
                </button>
                <button type="button" className="text-left font-medium hover:text-primary" onClick={() => goSection("testimonials")}>
                  Testimonials
                </button>
                <Button className="mt-4 bg-accent hover:bg-accent/90 text-white rounded-full w-full" onClick={() => goSection("contact")}>
                  Book Consultation
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
