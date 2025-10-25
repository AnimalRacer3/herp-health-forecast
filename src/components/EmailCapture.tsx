import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

interface EmailCaptureProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: "hatchling" | "keeper" | "curator";
}

const planDetails = {
  hatchling: {
    title: "Join the Hatchling Plan Waitlist",
    description: "Get started with basic reptile health tracking for free.",
  },
  keeper: {
    title: "Join the Keeper Plan Waitlist",
    description: "Unlock predictive AI and personalized health alerts for $9.99/month.",
  },
  curator: {
    title: "Join the Curator Plan Waitlist",
    description: "Get the complete package with automated sensors for $11.99/month + $50 hardware.",
  },
};

export function EmailCapture({ open, onOpenChange, plan }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to Proactive Herp!",
      description: "You're on the waitlist. We'll notify you when the beta launches.",
    });

    setEmail("");
    setName("");
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const details = planDetails[plan];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{details.title}</DialogTitle>
          <DialogDescription>{details.description}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            <Mail className="mr-2 h-4 w-4" />
            {isSubmitting ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
