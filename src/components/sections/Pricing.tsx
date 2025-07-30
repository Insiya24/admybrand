import { PricingCard } from "@/components/ui/pricing-card";
import { PricingCalculator } from "@/components/ui/pricing-calculator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pricingPlans = [
  {
    title: "Starter",
    price: "$29",
    period: "month",
    description: "Perfect for small businesses and solopreneurs",
    features: [
      { name: "5 AI-generated campaigns per month", included: true },
      { name: "Basic analytics dashboard", included: true },
      { name: "Email support", included: true },
      { name: "1 brand profile", included: true },
      { name: "Social media scheduling", included: true },
      { name: "Advanced AI models", included: false },
      { name: "Custom integrations", included: false },
      { name: "Priority support", included: false }
    ]
  },
  {
    title: "Professional",
    price: "$99",
    period: "month",
    description: "Ideal for growing businesses and marketing teams",
    popular: true,
    features: [
      { name: "Unlimited AI-generated campaigns", included: true },
      { name: "Advanced analytics & insights", included: true },
      { name: "Priority email & chat support", included: true },
      { name: "5 brand profiles", included: true },
      { name: "Social media scheduling", included: true },
      { name: "Advanced AI models", included: true },
      { name: "Basic integrations", included: true },
      { name: "Team collaboration tools", included: true }
    ]
  },
  {
    title: "Enterprise",
    price: "$299",
    period: "month",
    description: "For large organizations with complex needs",
    features: [
      { name: "Unlimited everything", included: true },
      { name: "Custom analytics & reporting", included: true },
      { name: "24/7 dedicated support", included: true },
      { name: "Unlimited brand profiles", included: true },
      { name: "Advanced automation workflows", included: true },
      { name: "All AI models & features", included: true },
      { name: "Custom integrations & API", included: true },
      { name: "White-label solutions", included: true }
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-primary/5 to-background/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business. Upgrade or downgrade at any time.
              All plans include a 14-day free trial.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <ScrollReveal 
              key={plan.title} 
              delay={index * 200}
              direction="up"
            >
              <PricingCard {...plan} />
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing Calculator */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Not sure which plan is right for you?
              </h3>
              <p className="text-lg text-muted-foreground">
                Use our interactive calculator to find the perfect fit for your needs
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-2xl mx-auto">
            <PricingCalculator />
          </div>
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              All plans include SSL security, 99.9% uptime guarantee, and access to our support team.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                No setup fees
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                Cancel anytime
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                14-day free trial
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}