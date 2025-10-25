import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { PlanBuilder } from "@/components/PlanBuilder";
import { PricingCard } from "@/components/PricingCard";
import { EmailCapture } from "@/components/EmailCapture";
import { ArrowRight, Activity, Brain, Shield, TrendingUp, Users, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-reptile.jpg";
import dashboardImage from "@/assets/dashboard-preview.jpg";
import forestBg from "@/assets/forest-background.jpg";

const Index = () => {
  const [showBuilder, setShowBuilder] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"hatchling" | "keeper" | "curator">("keeper");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlanSelect = (plan: "hatchling" | "keeper" | "curator") => {
    setSelectedPlan(plan);
    setEmailDialogOpen(true);
  };

  const handleBuilderComplete = (plan: "keeper" | "curator") => {
    setSelectedPlan(plan);
    setShowBuilder(false);
    setEmailDialogOpen(true);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${forestBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 to-background/95" />
        
        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  From Reactive to{" "}
                  <span className="text-gradient">Proactive Reptile Care</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Proactive Herp uses predictive AI to forecast health risks, giving you time to
                  act. Stop worrying, start preventing.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="accent"
                  onClick={scrollToPricing}
                  className="gap-2"
                >
                  Find Your Plan
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    const communitySection = document.getElementById("community");
                    if (communitySection) {
                      communitySection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="gap-2"
                >
                  <Users className="h-5 w-5" />
                  Join the Community
                </Button>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Data secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Real-time monitoring</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={heroImage}
                  alt="Healthy bearded dragon in well-maintained terrarium"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Don't Just Track Your Reptile's Health. <span className="text-gradient">Forecast It.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Our machine learning models analyze patterns in your reptile's environment and behavior
              to predict health risks before they become emergencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Predictive AI Engine",
                description:
                  "Machine learning models trained on herpetology data forecast health risks days in advance.",
              },
              {
                icon: <Activity className="h-8 w-8" />,
                title: "Real-Time Alerts",
                description:
                  "Get notified immediately when temperature, humidity, or behavior patterns indicate potential issues.",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Trend Analysis",
                description:
                  "Visualize long-term patterns and understand how your care routines affect your reptile's wellbeing.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-background shadow-soft hover:shadow-accent/30 transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-background/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={dashboardImage}
                alt="Proactive Herp dashboard showing health analytics"
                className="rounded-xl shadow-soft"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold">
                Learn Herpetology <span className="text-gradient">Through Data</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every alert is a teaching moment. Our platform explains the biology behind each
                prediction, helping you become a more knowledgeable and confident reptile keeper.
              </p>
              <ul className="space-y-3">
                {[
                  "Prevent respiratory infections with humidity forecasting",
                  "Catch early signs of illness through behavior analysis",
                  "Optimize feeding schedules with appetite tracking",
                  "Species-specific care recommendations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Plan Builder */}
      {showBuilder && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="text-center max-w-2xl mb-12">
                <h2 className="text-4xl font-bold mb-4">Find Your Perfect Plan</h2>
                <p className="text-lg text-muted-foreground">
                  Answer a few quick questions and we'll recommend the ideal plan for your needs.
                </p>
              </div>
              <PlanBuilder onComplete={handleBuilderComplete} />
            </div>
          </div>
        </section>
      )}

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground">
              Start free or unlock the full power of predictive AI. All plans include our core
              commitment to proactive reptile care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              name="Hatchling"
              price="Free"
              description="Perfect for getting started with basic tracking"
              features={[
                "Manual habitat logging",
                "Basic care articles",
                "Generic health alerts",
                "Community forum access",
              ]}
              onSelect={() => handlePlanSelect("hatchling")}
            />
            <PricingCard
              name="Keeper"
              price="$9.99"
              description="The core predictive AI experience"
              features={[
                "Full predictive AI engine",
                "Personalized health risk alerts",
                "All educational content",
                "Species-specific models",
                "Priority support",
              ]}
              highlighted
              badge="Most Popular"
              onSelect={() => handlePlanSelect("keeper")}
            />
            <PricingCard
              name="Curator"
              price="$11.99"
              description="Complete automation with sensors"
              features={[
                "Everything in Keeper",
                "Physical sensor kit ($50 one-time)",
                "Automated habitat monitoring",
                "Advanced analytics",
                "Early access to new features",
              ]}
              onSelect={() => handlePlanSelect("curator")}
            />
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Annual plans save 17% • All paid plans include 14-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Join Our <span className="text-gradient">Community</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect with fellow reptile enthusiasts, share experiences, and learn from experts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl bg-card shadow-soft hover:shadow-accent/30 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Community Forum</h3>
                <p className="text-muted-foreground mb-6">
                  Ask questions, share your setup, and get advice from experienced keepers and veterinarians
                </p>
                <Button variant="outline" className="gap-2">
                  Join Forum
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="p-8 rounded-xl bg-card shadow-soft hover:shadow-accent/30 transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
                <p className="text-muted-foreground mb-6">
                  Real-time discussions with the community. Get quick answers and make friends who share your passion
                </p>
                <Button variant="outline" className="gap-2">
                  Start Chatting
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">Ready to Transform Your Reptile Care?</h2>
            <p className="text-xl opacity-90">
              Join the waitlist for early access to the beta launch in the Philadelphia area.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                setSelectedPlan("keeper");
                setEmailDialogOpen(true);
              }}
              className="gap-2"
            >
              Join the Waitlist for Early Access
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Email Capture Dialog */}
      <EmailCapture
        open={emailDialogOpen}
        onOpenChange={setEmailDialogOpen}
        plan={selectedPlan}
      />
    </div>
  );
};

export default Index;
