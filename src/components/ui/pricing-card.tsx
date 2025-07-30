import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";
import { GradientButton } from "./gradient-button";
import { Check, X } from "lucide-react";

interface Feature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: Feature[];
  popular?: boolean;
  buttonText?: string;
  className?: string;
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular = false,
  buttonText = "Get Started",
  className
}: PricingCardProps) {
  return (
    <GlassCard 
      className={cn(
        "p-8 relative h-full",
        popular && "ring-2 ring-primary shadow-glow",
        className
      )}
      glow={popular}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-semibold text-primary-foreground">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">/{period}</span>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            {feature.included ? (
              <Check className="w-5 h-5 text-success flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            )}
            <span className={cn(
              "text-sm",
              feature.included ? "text-foreground" : "text-muted-foreground"
            )}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>

      <GradientButton 
        variant={popular ? "hero" : "primary"}
        size="lg"
        className="w-full"
      >
        {buttonText}
      </GradientButton>
    </GlassCard>
  );
}