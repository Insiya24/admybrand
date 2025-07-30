import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  prefix = "",
  suffix = "",
  className
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          
          const increment = (end - start) / (duration / 16);
          let current = start;
          
          const timer = setInterval(() => {
            current += increment;
            
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.querySelector(`[data-counter="${end}"]`);
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, [end, start, duration, hasAnimated]);

  return (
    <span 
      data-counter={end}
      className={cn("font-bold text-primary", className)}
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}