import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Handshake } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: "Fast Hiring",
      description: "Our streamlined process ensures you get matched with the right opportunities within days, not weeks.",
    },
    {
      icon: Target,
      title: "Quality Talent",
      description: "Every candidate is thoroughly vetted to ensure they meet our high standards and your specific requirements.",
    },
    {
      icon: Handshake,
      title: "Reliable Partnerships",
      description: "We build lasting relationships based on trust, transparency, and mutual growth with all our partners.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Partner in{" "}
            <span className="text-gradient">Scalable Hiring</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At RedAnt Staffing, we specialize in connecting exceptional talent with industry-leading companies. 
            Like the precision and teamwork of ants, we build reliable hiring solutions that scale with your business — 
            from ambitious startups to established enterprises.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              variant="elevated"
              className="group hover-lift bg-card-gradient opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 p-8 bg-charcoal rounded-2xl shadow-elevated">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-secondary/70 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary/70 text-sm">Successful Placements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-secondary/70 text-sm">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary/70 text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
