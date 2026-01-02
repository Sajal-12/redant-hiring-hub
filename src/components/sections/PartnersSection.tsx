import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, GraduationCap, Users, Building } from "lucide-react";

const PartnersSection = () => {
  const services = [
    {
      icon: Headphones,
      title: "BPO Hiring",
      description: "Voice and non-voice process specialists for domestic and international operations.",
    },
    {
      icon: GraduationCap,
      title: "EdTech Hiring",
      description: "Counselors, educators, and sales professionals for the education sector.",
    },
    {
      icon: Users,
      title: "Bulk & Volume Hiring",
      description: "Large-scale recruitment solutions with fast turnaround times.",
    },
    {
      icon: Building,
      title: "Vendor Partnerships",
      description: "Strategic staffing partnerships for continuous talent supply.",
    },
  ];

  return (
    <section id="partners" className="py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            For Employers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Let's Build <span className="text-primary">Winning Teams</span> Together
          </h2>
          <p className="text-lg text-secondary/70">
            Partner with RedAnt Staffing for reliable, scalable hiring solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-secondary/5 border-secondary/10 group hover:bg-secondary/10 transition-colors duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-secondary/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            Become a Hiring Partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
