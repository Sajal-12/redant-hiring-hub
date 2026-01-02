import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, MessageCircle, HeadphonesIcon, Clock, Award } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Verified Roles",
      description: "Every job listing is thoroughly verified to ensure legitimacy and quality.",
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear, honest updates throughout your hiring journey. No hidden surprises.",
    },
    {
      icon: HeadphonesIcon,
      title: "Strong Recruiter Support",
      description: "Dedicated recruitment experts guide you from application to onboarding.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Our streamlined process ensures quick placements without compromising quality.",
    },
    {
      icon: Award,
      title: "Trusted by Growing Brands",
      description: "Join 100+ companies who trust RedAnt for their staffing needs.",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The <span className="text-gradient">RedAnt Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We're not just another staffing agency. Our commitment to quality, transparency, and reliability sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="bordered"
              className={`group hover:border-primary/30 transition-colors duration-300 opacity-0 animate-fade-in-up ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
