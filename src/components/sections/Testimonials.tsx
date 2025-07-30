import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechStart Inc",
    content: "ADmyBRAND AI Suite has completely transformed our marketing workflow. We've seen a 300% increase in engagement and our campaigns are more effective than ever.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "GrowthLab",
    content: "The AI-powered insights have helped us understand our audience like never before. Our ROI has doubled since we started using this platform.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Creative Director",
    company: "BrandForce",
    content: "I was skeptical about AI design tools, but this platform creates visuals that perfectly match our brand aesthetic. It's like having a team of designers at your fingertips.",
    rating: 5
  },
  {
    name: "David Park",
    role: "Founder",
    company: "LocalBiz Pro",
    content: "As a small business owner, I needed something powerful yet affordable. This tool gives me enterprise-level capabilities at a fraction of the cost.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    role: "Marketing Manager",
    company: "E-commerce Plus",
    content: "The automation features have saved us countless hours. What used to take days now happens in minutes, and the results are consistently excellent.",
    rating: 5
  },
  {
    name: "James Mitchell",
    role: "Brand Strategist",
    company: "Creative Studios",
    content: "The analytics and insights provided are incredibly detailed and actionable. We can now make data-driven decisions that actually move the needle.",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= testimonials.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);
  if (visibleTestimonials.length < itemsPerView) {
    visibleTestimonials.push(...testimonials.slice(0, itemsPerView - visibleTestimonials.length));
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Customers Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of businesses that have transformed their marketing with AI
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal delay={300}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${currentIndex}-${index}`}
                  {...testimonial}
                  className="animate-fade-in-up"
                />
              ))}
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={500}>
            <div className="flex justify-center items-center space-x-4">
              <GradientButton
                variant="ghost"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </GradientButton>
              
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsPerView)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      Math.floor(currentIndex / itemsPerView) === index
                        ? 'bg-primary scale-125'
                        : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <GradientButton
                variant="ghost"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </GradientButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}