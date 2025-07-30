import { GradientButton } from "@/components/ui/gradient-button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Integrations", href: "#integrations" },
    { name: "API", href: "#api" },
    { name: "Changelog", href: "#changelog" }
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Press", href: "#press" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" }
  ],
  resources: [
    { name: "Blog", href: "#blog" },
    { name: "Documentation", href: "#docs" },
    { name: "Help Center", href: "#help" },
    { name: "Community", href: "#community" },
    { name: "Webinars", href: "#webinars" }
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
    { name: "Security", href: "#security" }
  ]
};

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
  { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
  { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" }
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <ScrollReveal>
          <div className="py-16 text-center border-b border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses using ADmyBRAND AI Suite to create 
              stunning campaigns and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton variant="hero" size="xl">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </GradientButton>
              <GradientButton variant="ghost" size="xl">
                Schedule Demo
              </GradientButton>
            </div>
          </div>
        </ScrollReveal>

        {/* Links Section */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2">
                  ADmyBRAND
                </h4>
                <p className="text-muted-foreground mb-6">
                  AI-powered marketing suite that helps businesses create, 
                  manage, and optimize their brand presence across all digital channels.
                </p>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-accent" />
                    <span>hello@admybrand.ai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Product Links */}
          <ScrollReveal delay={100}>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Product</h5>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Company Links */}
          <ScrollReveal delay={200}>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Company</h5>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Resources Links */}
          <ScrollReveal delay={300}>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Resources</h5>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Legal Links */}
          <ScrollReveal delay={400}>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Legal</h5>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <ScrollReveal direction="left">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 ADmyBRAND AI Suite. All rights reserved.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/20 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}