import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-light">
            <span className="text-xl font-bold text-primary-foreground">PH</span>
          </div>
          <span className="text-xl font-bold">Proactive Herp</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("community")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Community
          </button>
          <Button
            variant="default"
            size="sm"
            onClick={() => scrollToSection("pricing")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              Community
            </button>
            <Button
              variant="default"
              size="sm"
              onClick={() => scrollToSection("pricing")}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
