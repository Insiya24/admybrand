import { ContactForm } from "@/components/ui/contact-form";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Mail, Phone, MapPin, MessageCircle, Headphones, Clock } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Send us an email and we'll respond within 24 hours",
    contact: "hello@admybrand.ai",
    action: "Send Email"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Speak directly with our support team",
    contact: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Live Chat",
    description: "Get instant help with our live chat support",
    contact: "Available 24/7",
    action: "Start Chat"
  }
];

const supportFeatures = [
  {
    icon: <Headphones className="w-5 h-5 text-primary" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need it"
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: "Quick Response",
    description: "Average response time under 2 hours"
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    title: "Global Reach",
    description: "Support teams across multiple time zones"
  }
];

export function Contact() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Touch
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about ADmyBRAND AI Suite? We're here to help you succeed. 
              Reach out to our team and let's discuss how we can transform your marketing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <ScrollReveal direction="left">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Options</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <GlassCard key={method.title} className="p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className="text-primary font-medium">{method.contact}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>

              {/* Support Features */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Why Choose Our Support?</h4>
                <div className="space-y-3">
                  {supportFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start space-x-3">
                      {feature.icon}
                      <div>
                        <p className="font-medium text-foreground text-sm">{feature.title}</p>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={300} direction="right">
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>

        {/* Office Info */}
        <ScrollReveal delay={500}>
          <GlassCard className="p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Visit Our Office</h3>
              <p className="text-muted-foreground mb-6">
                Located in the heart of San Francisco's tech district, our team is always ready to meet 
                and discuss your marketing needs in person.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">123 Innovation Street, San Francisco, CA 94105</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Mon-Fri: 9AM-6PM PST</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}