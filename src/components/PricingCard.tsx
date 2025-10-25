import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  onSelect: () => void;
  badge?: string;
}

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted = false,
  onSelect,
  badge,
}: PricingCardProps) {
  return (
    <Card
      className={`relative flex flex-col transition-all duration-300 ${
        highlighted
          ? "shadow-accent border-accent scale-105"
          : "shadow-soft hover:shadow-accent/50"
      }`}
    >
      {badge && (
        <Badge
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground"
        >
          {badge}
        </Badge>
      )}
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onSelect}
          variant={highlighted ? "accent" : "outline"}
          size="lg"
          className="w-full"
        >
          {price === "Free" ? "Get Started" : "Join Waitlist"}
        </Button>
      </CardFooter>
    </Card>
  );
}
