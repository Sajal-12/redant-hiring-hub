import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, GraduationCap, TrendingUp, Building, ShoppingCart, Heart, Laptop, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DemandsPage = () => {
  const navigate = useNavigate();

  const industries = [
    {
      icon: Headphones,
      title: "BPO & Call Centers",
      description: "Voice and non-voice process specialists for domestic and international operations. We cover inbound, outbound, technical support, and back-office operations.",
      demand: "High",
      roles: ["Voice Process Associate", "Team Lead", "Quality Analyst", "Training Manager"],
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Counselors, educators, sales professionals, and content creators for the booming education technology sector.",
      demand: "Very High",
      roles: ["Academic Counselor", "BDE", "Content Writer", "Product Specialist"],
    },
    {
      icon: TrendingUp,
      title: "Sales & Business Development",
      description: "Inside sales, field sales, and business development professionals for B2B and B2C companies.",
      demand: "High",
      roles: ["Inside Sales", "Field Sales", "Key Account Manager", "Sales Manager"],
    },
    {
      icon: Building,
      title: "BFSI",
      description: "Banking, financial services, and insurance professionals for leading institutions.",
      demand: "Moderate",
      roles: ["Relationship Manager", "Credit Analyst", "Insurance Advisor", "Collection Executive"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Customer service, operations, and logistics professionals for the retail sector.",
      demand: "High",
      roles: ["Customer Service", "Operations Executive", "Warehouse Manager", "Delivery Manager"],
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Medical representatives, healthcare support staff, and administrative professionals.",
      demand: "Growing",
      roles: ["Medical Representative", "Healthcare Coordinator", "Admin Staff", "Patient Care"],
    },
    {
      icon: Laptop,
      title: "IT & Tech Support",
      description: "Technical support engineers, help desk analysts, and IT operations professionals.",
      demand: "Very High",
      roles: ["Tech Support Engineer", "Help Desk Analyst", "System Admin", "Network Engineer"],
    },
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case "Very High":
        return "text-redant-r";
      case "High":
        return "text-redant-e";
      case "Growing":
        return "text-redant-t";
      default:
        return "text-muted-foreground";
    }
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
                <span className="text-2xl font-bold text-redant-d">D</span>
                <span>— Demands</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Industries We <span className="text-gradient">Serve</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                18+ years of combined experience placing talent across India's leading industries. 
                Discover opportunities in your sector.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <Card
                  key={industry.title}
                  variant="elevated"
                  className="group hover-lift opacity-0 animate-fade-in-up cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate("/roles")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <industry.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                      <span className={`text-sm font-semibold ${getDemandColor(industry.demand)}`}>
                        {industry.demand} Demand
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Popular Roles:</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.roles.map((role) => (
                          <span 
                            key={role}
                            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      variant="ghost" 
                      className="w-full mt-4 group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/roles");
                      }}
                    >
                      Explore Roles
                      <ArrowRight size={14} className="ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-secondary/70 mb-8">
                We're constantly expanding our reach. Contact us to discuss your specific hiring needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  variant="hero"
                  onClick={() => navigate("/talent")}
                >
                  Partner With Us
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button 
                  size="lg"
                  variant="hero-outline"
                  onClick={() => navigate("/apply")}
                >
                  Apply for Jobs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DemandsPage;
