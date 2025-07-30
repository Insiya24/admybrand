import { FeatureCard } from "@/components/ui/feature-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  Brain, 
  Palette, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  Rocket,
  Target
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Content Generation",
    description: "Create compelling copy, headlines, and social media content with our advanced AI engine trained on marketing best practices."
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Smart Design Studio",
    description: "Generate stunning visuals, logos, and brand assets instantly with AI-powered design tools that understand your brand."
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Advanced Analytics",
    description: "Track performance across all channels with real-time insights and predictive analytics to optimize your campaigns."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Audience Targeting",
    description: "Identify and reach your ideal customers with precision targeting powered by machine learning algorithms."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automation Workflows",
    description: "Streamline your marketing operations with intelligent automation that adapts to your business needs."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Brand Protection",
    description: "Monitor your brand across the web and protect your reputation with AI-powered sentiment analysis."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Multi-Platform Sync",
    description: "Manage all your marketing channels from one dashboard with seamless integration across platforms."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Automatically optimize campaigns for maximum ROI with continuous learning and improvement."
  }
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful Features for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Modern Marketing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, launch, and scale your brand with AI-powered tools 
              that work smarter, not harder.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.title} 
              delay={index * 100}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}