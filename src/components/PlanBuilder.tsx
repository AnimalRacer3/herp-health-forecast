import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface PlanBuilderProps {
  onComplete: (plan: "keeper" | "curator") => void;
}

const questions = [
  {
    id: 1,
    question: "How do you want to log your reptile's habitat data?",
    options: [
      { value: "manual", label: "I'll log it myself", plan: "keeper" },
      { value: "automated", label: "I want it automated with sensors (coming soon)", plan: "curator" },
    ],
  },
  {
    id: 2,
    question: "What is your main goal?",
    options: [
      { value: "basics", label: "Peace of mind and learning the basics", plan: "keeper" },
      { value: "optimize", label: "Optimize everything with the best tech", plan: "curator" },
    ],
  },
  {
    id: 3,
    question: "Ready to move from reactive to proactive care?",
    options: [
      { value: "yes", label: "Yes, let's do this!", plan: null },
    ],
  },
];

export function PlanBuilder({ onComplete }: PlanBuilderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>("");

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
      setAnswers(newAnswers);

      if (isLastQuestion) {
        // Determine recommended plan based on answers
        const recommendedPlan = 
          newAnswers[1] === "automated" || newAnswers[2] === "optimize" 
            ? "curator" 
            : "keeper";
        onComplete(recommendedPlan);
      } else {
        setCurrentStep(currentStep + 1);
        setSelectedOption("");
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[questions[currentStep - 1].id] || "");
    }
  };

  return (
    <Card className="w-full max-w-2xl shadow-soft">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            Question {currentStep + 1} of {questions.length}
          </span>
          <div className="flex gap-1">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  idx <= currentStep ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
        <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
        <CardDescription>
          {isLastQuestion
            ? "Choose your plan based on your answers"
            : "Help us recommend the perfect plan for you"}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-start space-x-3">
                <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                <Label
                  htmlFor={option.value}
                  className="flex-1 cursor-pointer text-base font-normal leading-relaxed"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>

        <div className="flex justify-between pt-4">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
            className="gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            variant={isLastQuestion ? "accent" : "default"}
            size="lg"
            className="gap-1"
          >
            {isLastQuestion ? "Get My Recommendation" : "Next"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
