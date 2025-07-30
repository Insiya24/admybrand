import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  className 
}: FeatureCardProps) {
  return (
    <GlassCard className={cn(
      "p-6 text-center hover:scale-105 transition-all duration-300 group",
      className
    )}>
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground group-hover:animate-pulse-glow transition-all">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </GlassCard>
  );
}