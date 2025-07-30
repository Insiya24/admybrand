import { useState } from "react";
import { GlassCard } from "./glass-card";
import { GradientButton } from "./gradient-button";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DemoVideoProps {
  className?: string;
}

export function DemoVideo({ className }: DemoVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={cn("relative", className)}>
      {!isPlaying ? (
        <GlassCard className="relative group cursor-pointer overflow-hidden" onClick={() => setIsPlaying(true)}>
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-primary-foreground ml-1" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Watch Demo</h3>
              <p className="text-muted-foreground">See ADmyBRAND AI Suite in action</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </GlassCard>
      ) : (
        <div className="relative">
          <GlassCard className="overflow-hidden">
            <div className="aspect-video bg-black/90 flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-lg">Demo Video Loading...</p>
                <p className="text-sm text-white/70 mt-2">Interactive demo coming soon</p>
              </div>
              
              <GradientButton
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 rounded-full"
                onClick={() => setIsPlaying(false)}
              >
                <X className="w-5 h-5" />
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
}