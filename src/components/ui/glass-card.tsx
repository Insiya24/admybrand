import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blur" | "solid";
  glow?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", glow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-xl border border-white/20 backdrop-blur-xl transition-all duration-300",
          variant === "default" && "bg-gradient-to-br from-white/10 to-white/5",
          variant === "blur" && "bg-white/5 backdrop-blur-2xl",
          variant === "solid" && "bg-secondary/50",
          glow && "shadow-glow",
          className
        )}
        {...props}
      />
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };