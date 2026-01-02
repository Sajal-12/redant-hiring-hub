import { Card, CardContent } from "@/components/ui/card";
import { Zap, Target, Handshake } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";

const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: "Fast Hiring",
      description: "Our streamlined process ensures you get matched with the right opportunities within days, not weeks.",
      action: () => {
        const element = document.querySelector("#jobs");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
    {
      icon: Target,
      title: "Quality Talent",
      description: "Every candidate is thoroughly vetted to ensure they meet our high standards and your specific requirements.",
      action: () => window.open(LINKEDIN_URL, "_blank"),
    },
    {
      icon: Handshake,
      title: "Reliable Partnerships",
      description: "We build lasting relationships based on trust, transparency, and mutual growth with all our partners.",
      action: () => {
        const element = document.querySelector("#partners");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Who We Are
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Your Trusted Partner in{" "}
            <span className="text-gradient">Scalable Hiring</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            At RedAnt Staffing, we specialize in connecting exceptional talent with industry-leading companies. 
            Like the precision and teamwork of ants, we build reliable hiring solutions that scale with your business — 
            from ambitious startups to established enterprises.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <Card
              key={value.title}
              variant="elevated"
              className="group hover-lift bg-card-gradient opacity-0 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onClick={value.action}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-accent flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-charcoal rounded-2xl shadow-elevated">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <button 
              onClick={() => window.open(LINKEDIN_URL, "_blank")}
              className="text-center hover:scale-105 transition-transform"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Years Experience</div>
            </button>
            <button 
              onClick={() => document.querySelector("#jobs")?.scrollIntoView({ behavior: "smooth" })}
              className="text-center hover:scale-105 transition-transform"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Successful Placements</div>
            </button>
            <button 
              onClick={() => document.querySelector("#partners")?.scrollIntoView({ behavior: "smooth" })}
              className="text-center hover:scale-105 transition-transform"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Partner Companies</div>
            </button>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-secondary/70 text-xs sm:text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
