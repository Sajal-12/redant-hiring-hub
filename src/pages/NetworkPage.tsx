import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, FileCheck, Briefcase, Target, Clock, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EMAIL = "redantstaffing@gmail.com";

const NetworkPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: "Staffing Solutions",
      description: "End-to-end recruitment services from sourcing to onboarding, tailored to your industry needs.",
      features: ["Volume Hiring", "Temp Staffing", "Permanent Placement", "Contract Staffing"],
    },
    {
      icon: Target,
      title: "Executive Search",
      description: "Specialized headhunting for leadership roles with confidential, targeted approach.",
      features: ["C-Suite Hiring", "Director Level", "Specialized Roles", "Confidential Search"],
    },
    {
      icon: FileCheck,
      title: "RPO Services",
      description: "Outsource your recruitment function entirely and let us manage your talent pipeline.",
      features: ["Full Cycle RPO", "Project RPO", "Hybrid Models", "Talent Analytics"],
    },
    {
      icon: Briefcase,
      title: "BPO Outsourcing",
      description: "Scalable business process outsourcing with trained, managed teams ready to deliver.",
      features: ["Voice Support", "Back Office", "Technical Support", "Quality Assurance"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "We deep dive into your hiring needs, culture, and growth plans.",
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description: "Our team sources and screens candidates from our extensive network.",
    },
    {
      step: "03",
      title: "Vetting & Assessment",
      description: "Rigorous evaluation including skills, background, and culture fit.",
    },
    {
      step: "04",
      title: "Interview Coordination",
      description: "We manage the entire interview process seamlessly.",
    },
    {
      step: "05",
      title: "Offer & Onboarding",
      description: "Support through offer negotiation and smooth onboarding.",
    },
  ];

  const handleServiceInquiry = (service: string) => {
    const subject = encodeURIComponent(`Inquiry: ${service}`);
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

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
        <section className="py-16 sm:py-24 bg-hero-gradient relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-accent-foreground text-sm font-medium mb-6">
                <span className="text-2xl font-bold text-redant-n">N</span>
                <span>— Network</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Comprehensive <span className="text-gradient">Staffing Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                From fresher hiring to executive search, we provide end-to-end talent solutions across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-muted-foreground">
                Tailored staffing solutions for every business need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  variant="elevated"
                  className="group hover-lift opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle size={14} className="text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full group/btn"
                      onClick={() => handleServiceInquiry(service.title)}
                    >
                      Learn More
                      <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground">
                A streamlined approach to finding the right talent for your team.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <div 
                  key={step.step}
                  className="text-center opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-redant-r via-redant-e to-redant-t flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Partner With RedAnt?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Fast Turnaround</h3>
                      <p className="text-muted-foreground text-sm">Average placement time of 7 days for most roles.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quality Assurance</h3>
                      <p className="text-muted-foreground text-sm">Rigorous vetting process ensures only the best candidates.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Dedicated Support</h3>
                      <p className="text-muted-foreground text-sm">Personal account managers for seamless communication.</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="mt-8 bg-gradient-to-r from-redant-r via-redant-e to-redant-t"
                  onClick={() => navigate("/talent")}
                >
                  Start Hiring
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
              <div className="relative">
                <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl sm:text-6xl font-bold text-primary mb-2">100+</div>
                    <div className="text-muted-foreground">Partner Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NetworkPage;
