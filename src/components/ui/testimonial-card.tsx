import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
  className
}: TestimonialCardProps) {
  return (
    <GlassCard className={cn("p-6 h-full", className)}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
            {avatar ? (
              <img 
                src={avatar} 
                alt={name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              name.charAt(0)
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-4 h-4",
                  i < rating 
                    ? "text-accent fill-accent" 
                    : "text-muted-foreground"
                )}
              />
            ))}
          </div>
          <p className="text-foreground/90 mb-4 leading-relaxed">
            "{content}"
          </p>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}