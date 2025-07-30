import { useState } from "react";
import { GlassCard } from "./glass-card";
import { GradientButton } from "./gradient-button";
import { Label } from "./label";
import { Slider } from "./slider";
import { Badge } from "./badge";
import { ScrollReveal } from "./scroll-reveal";
import { Calculator, Users, Zap, TrendingUp } from "lucide-react";

interface PricingCalculatorProps {
  className?: string;
}

export function PricingCalculator({ className }: PricingCalculatorProps) {
  const [teamSize, setTeamSize] = useState([5]);
  const [campaigns, setCampaigns] = useState([10]);
  const [integrations, setIntegrations] = useState([3]);

  const calculatePrice = () => {
    const basePrice = 29;
    const teamMultiplier = teamSize[0] * 10;
    const campaignMultiplier = campaigns[0] * 2;
    const integrationMultiplier = integrations[0] * 5;
    
    return Math.min(basePrice + teamMultiplier + campaignMultiplier + integrationMultiplier, 299);
  };

  const calculateSavings = () => {
    const traditionalCost = teamSize[0] * 200 + campaigns[0] * 50 + integrations[0] * 100;
    const ourPrice = calculatePrice();
    return Math.max(traditionalCost - ourPrice, 0);
  };

  const getRecommendedPlan = () => {
    const price = calculatePrice();
    if (price <= 50) return "Starter";
    if (price <= 150) return "Professional";
    return "Enterprise";
  };

  return (
    <ScrollReveal>
      <GlassCard className={`p-8 ${className}`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-accent-foreground" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Pricing Calculator</h3>
          <p className="text-muted-foreground">
            Customize your plan based on your specific needs
          </p>
        </div>

        <div className="space-y-8">
          {/* Team Size */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-foreground flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Team Size
              </Label>
              <Badge variant="secondary">{teamSize[0]} users</Badge>
            </div>
            <Slider
              value={teamSize}
              onValueChange={setTeamSize}
              max={50}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 user</span>
              <span>50+ users</span>
            </div>
          </div>

          {/* Campaigns */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-foreground flex items-center">
                <Zap className="w-4 h-4 mr-2 text-primary" />
                Monthly Campaigns
              </Label>
              <Badge variant="secondary">{campaigns[0]} campaigns</Badge>
            </div>
            <Slider
              value={campaigns}
              onValueChange={setCampaigns}
              max={100}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 campaign</span>
              <span>100+ campaigns</span>
            </div>
          </div>

          {/* Integrations */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-foreground flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                Integrations
              </Label>
              <Badge variant="secondary">{integrations[0]} integrations</Badge>
            </div>
            <Slider
              value={integrations}
              onValueChange={setIntegrations}
              max={20}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 integration</span>
              <span>20+ integrations</span>
            </div>
          </div>

          {/* Results */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">
                ${calculatePrice()}<span className="text-lg text-muted-foreground">/month</span>
              </div>
              <Badge className="bg-gradient-primary text-primary-foreground">
                Recommended: {getRecommendedPlan()}
              </Badge>
            </div>

            <div className="flex justify-between items-center p-4 glass rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground">Monthly Savings vs Traditional Tools</p>
                <p className="text-2xl font-bold text-success">${calculateSavings().toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Annual Savings</p>
                <p className="text-xl font-bold text-success">${(calculateSavings() * 12).toLocaleString()}</p>
              </div>
            </div>

            <GradientButton variant="hero" size="lg" className="w-full">
              Start {getRecommendedPlan()} Plan
            </GradientButton>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}