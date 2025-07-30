import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";

interface FloatingNavProps {
  items: {
    name: string;
    href: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export function FloatingNav({ items, className }: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300",
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0",
      className
    )}>
      <GlassCard className="px-6 py-3">
        <nav className="flex items-center space-x-6">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </GlassCard>
    </div>
  );
}