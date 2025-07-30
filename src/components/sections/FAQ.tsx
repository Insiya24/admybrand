import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer: "Our platform uses advanced machine learning algorithms to analyze your brand, target audience, and market trends. It then generates personalized marketing content, designs, and strategies that align with your business goals. Simply input your requirements, and our AI does the rest."
  },
  {
    question: "Can I try it before purchasing?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, create campaigns, and see the results before making any commitment."
  },
  {
    question: "What types of content can the AI generate?",
    answer: "Our AI can create various types of marketing content including social media posts, blog articles, email campaigns, ad copy, product descriptions, headlines, and visual designs. It adapts to your brand voice and style preferences."
  },
  {
    question: "How accurate are the AI-generated insights?",
    answer: "Our AI models are trained on vast datasets and continuously updated with the latest marketing trends. While we maintain high accuracy rates, we recommend using insights as guidance alongside your marketing expertise for best results."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! We offer integrations with popular platforms like Google Analytics, Facebook Ads, Instagram, LinkedIn, Shopify, WordPress, and many more. Our API also allows for custom integrations with your existing tech stack."
  },
  {
    question: "Is my data secure?",
    answer: "We take data security very seriously. All data is encrypted in transit and at rest, we're SOC 2 compliant, and we never share your data with third parties. Your business information and generated content remain completely private and secure."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including email support for all plans, priority chat support for Professional plans, and dedicated account management for Enterprise customers. We also provide extensive documentation, tutorials, and regular webinars."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties or fees. You'll continue to have access to your account until the end of your current billing period. You can also downgrade or upgrade your plan as needed."
  }
];

export function FAQ() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-accent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Got questions? We've got answers. If you can't find what you're looking for, 
              feel free to reach out to our support team.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={300}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-card border-white/10"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground px-6 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}