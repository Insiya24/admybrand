import { GradientButton } from "@/components/ui/gradient-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DemoVideo } from "@/components/ui/demo-video";
import { useParallax, useFloatingAnimation } from "@/hooks/use-gsap";
import { ArrowRight, Play, Zap, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-ai-suite.jpg";

export function Hero() {
  const parallaxRef = useParallax();
  const floatingRef = useFloatingAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-0 w-16 h-16 bg-primary-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <ScrollReveal>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full px-4 py-2 mb-6 border border-white/10">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  AI-Powered Marketing Suite
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-hero mb-6 leading-tight">
                Transform Your Brand with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-accent">
                  AI Magic
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-subtitle mb-8 max-w-2xl mx-auto lg:mx-0">
                ADmyBRAND AI Suite revolutionizes your marketing workflow with intelligent automation, 
                stunning visuals, and data-driven insights that drive real results.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <GradientButton variant="hero" size="xl">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </GradientButton>
                <GradientButton variant="ghost" size="xl">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </GradientButton>
              </div>
              
              {/* Demo Video Widget */}
              <div className="lg:hidden mb-12">
                <DemoVideo />
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={800}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={50000} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center">
                    <Users className="w-4 h-4 mr-1" />
                    Active Users
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={300} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    ROI Increase
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    <AnimatedCounter end={24} suffix="/7" />
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-1" />
                    AI Support
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Content - Hero Image & Demo */}
          <div className="space-y-6">
            <ScrollReveal delay={400} direction="right">
              <div className="relative" ref={parallaxRef as React.RefObject<HTMLDivElement>}>
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
                <div ref={floatingRef as React.RefObject<HTMLDivElement>}>
                  <img
                    src={heroImage}
                    alt="ADmyBRAND AI Suite Dashboard"
                    className="relative rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={600} direction="right">
              <div className="hidden lg:block">
                <DemoVideo />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}