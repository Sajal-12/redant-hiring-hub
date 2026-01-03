import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, GraduationCap, Users, Building, ArrowRight, CheckCircle, Phone, Mail } from "lucide-react";

const EMAIL = "redantstaffing@gmail.com";
const WHATSAPP = "+918123314555";

const TalentPage = () => {
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

  const benefits = [
    "Access to pre-vetted talent pool",
    "7-day average placement time",
    "Industry-specific expertise",
    "Dedicated account manager",
    "Flexible hiring models",
    "Replacement guarantee",
    "Pan-India coverage",
    "Transparent pricing",
  ];

  const handlePartnerInquiry = () => {
    const subject = encodeURIComponent("Hiring Partner Application - Website Inquiry");
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

[This inquiry is from your website]

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

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi RedAnt Team, I'm interested in hiring talent through your services. [From Website]");
    window.open(`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
  };

  const handleServiceClick = (service: string) => {
    const subject = encodeURIComponent(`${service} Inquiry - Website`);
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

[This inquiry is from your website]

I am interested in your ${service} services.

Company Name: 
Contact Person: 
Phone Number: 
Email: 
Requirements: 

Thank you!`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }}></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                <span className="text-2xl font-bold text-redant-t">T</span>
                <span>— Talent</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary mb-6">
                Let's Build <span className="text-primary">Winning Teams</span> Together
              </h1>
              <p className="text-lg sm:text-xl text-secondary/70 mb-8">
                Partner with RedAnt Staffing for reliable, scalable hiring solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="hero"
                  onClick={handlePartnerInquiry}
                  className="group"
                >
                  <Mail size={20} />
                  Become a Hiring Partner
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg"
                  variant="hero-outline"
                  onClick={handleWhatsApp}
                  className="group"
                >
                  <Phone size={20} />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                What We Offer
              </h2>
              <p className="text-muted-foreground">
                Comprehensive hiring solutions across industries.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="group hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up cursor-pointer hover:scale-[1.02]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleServiceClick(service.title)}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Partner With RedAnt?
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit}
                      className="flex items-center gap-3 opacity-0 animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-elevated">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Connect</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full justify-start gap-3"
                    variant="outline"
                    onClick={() => window.location.href = `mailto:${EMAIL}`}
                  >
                    <Mail size={20} className="text-primary" />
                    <span>{EMAIL}</span>
                  </Button>
                  <Button 
                    className="w-full justify-start gap-3"
                    variant="outline"
                    onClick={handleWhatsApp}
                  >
                    <Phone size={20} className="text-primary" />
                    <span>{WHATSAPP}</span>
                  </Button>
                </div>
                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-redant-r via-redant-e to-redant-t"
                  size="lg"
                  onClick={handlePartnerInquiry}
                >
                  Get Started
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-secondary/70">Successful Placements</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-secondary/70">Partner Companies</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">7</div>
                <div className="text-secondary/70">Day Avg. Placement</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-secondary/70">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TalentPage;
