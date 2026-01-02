import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, MessageCircle, HeadphonesIcon, Clock, Award } from "lucide-react";

const EMAIL = "redantstaffing@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";

const WhyChooseSection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Verified Roles",
      description: "Every job listing is thoroughly verified to ensure legitimacy and quality.",
      action: () => document.querySelector("#jobs")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: MessageCircle,
      title: "Transparent Communication",
      description: "Clear, honest updates throughout your hiring journey. No hidden surprises.",
      action: () => window.location.href = `mailto:${EMAIL}?subject=Communication Inquiry`,
    },
    {
      icon: HeadphonesIcon,
      title: "Strong Recruiter Support",
      description: "Dedicated recruitment experts guide you from application to onboarding.",
      action: () => window.location.href = `mailto:${EMAIL}?subject=Recruiter Support Inquiry`,
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Our streamlined process ensures quick placements without compromising quality.",
      action: () => document.querySelector("#jobs")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: Award,
      title: "Trusted by Growing Brands",
      description: "Join 100+ companies who trust RedAnt for their staffing needs.",
      action: () => window.open(LINKEDIN_URL, "_blank"),
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Why Choose Us
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            The <span className="text-gradient">RedAnt Advantage</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            We're not just another staffing agency. Our commitment to quality, transparency, and reliability sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="bordered"
              className={`group hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up cursor-pointer hover:scale-[1.02] ${
                index === 4 ? "lg:col-start-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={feature.action}
            >
              <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
