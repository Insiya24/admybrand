import { useState } from "react";
import { GlassCard } from "./glass-card";
import { GradientButton } from "./gradient-button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <GlassCard className={`p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Get in Touch</h3>
        <p className="text-muted-foreground">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">Name *</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="glass border-white/20 focus:border-primary"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="glass border-white/20 focus:border-primary"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground">Company</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="glass border-white/20 focus:border-primary"
            placeholder="Your company name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="glass border-white/20 focus:border-primary resize-none"
            placeholder="Tell us about your project or ask us anything..."
          />
        </div>

        <GradientButton
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </GradientButton>
      </form>
    </GlassCard>
  );
}