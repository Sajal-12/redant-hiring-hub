import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, GraduationCap, Users, Building, ArrowRight } from "lucide-react";

const EMAIL = "redantstaffing@gmail.com";

const PartnersSection = () => {
  const services = [
    {
      icon: Headphones,
      title: "BPO Hiring",
      description: "Voice and non-voice process specialists for domestic and international operations.",
      subject: "BPO Hiring Partnership Inquiry",
    },
    {
      icon: GraduationCap,
      title: "EdTech Hiring",
      description: "Counselors, educators, and sales professionals for the education sector.",
      subject: "EdTech Hiring Partnership Inquiry",
    },
    {
      icon: Users,
      title: "Bulk & Volume Hiring",
      description: "Large-scale recruitment solutions with fast turnaround times.",
      subject: "Bulk Hiring Partnership Inquiry",
    },
    {
      icon: Building,
      title: "Vendor Partnerships",
      description: "Strategic staffing partnerships for continuous talent supply.",
      subject: "Vendor Partnership Inquiry",
    },
  ];

  const handleServiceClick = (subject: string) => {
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

I am interested in your ${subject.replace(" Inquiry", "")} services.

Company Name: 
Contact Person: 
Phone Number: 
Email: 
Requirements: 

Thank you!`);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handlePartnerClick = () => {
    const subject = encodeURIComponent("Hiring Partner Application");
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

I would like to become a hiring partner with RedAnt Staffing.

Company Name: 
Industry: 
Contact Person: 
Phone Number: 
Email: 
Website: 
Hiring Volume (monthly): 
Services Interested In: 

Thank you!`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="partners" className="py-16 sm:py-20 lg:py-28 bg-charcoal relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            For Employers
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary mb-4 sm:mb-6">
            Let's Build <span className="text-primary">Winning Teams</span> Together
          </h2>
          <p className="text-base sm:text-lg text-secondary/70 px-4">
            Partner with RedAnt Staffing for reliable, scalable hiring solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-secondary/5 border-secondary/10 group hover:bg-secondary/10 transition-all duration-300 opacity-0 animate-fade-in-up cursor-pointer hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleServiceClick(service.subject)}
            >
              <CardContent className="p-5 sm:p-6 flex items-start gap-4">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 sm:w-7 h-6 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-secondary/70 text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-secondary/50 group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={handlePartnerClick}
            className="group w-full sm:w-auto"
          >
            Become a Hiring Partner
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
