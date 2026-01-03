import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Target, Handshake, Users, Award, TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";

const AboutPage = () => {
  const navigate = useNavigate();

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

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "500+", label: "Successful Placements" },
    { value: "100+", label: "Partner Companies" },
    { value: "15+", label: "Cities Covered" },
  ];

  const team = [
    {
      name: "Team RedAnt",
      role: "Founders & Leadership",
      description: "Passionate professionals with decades of combined experience in recruitment and HR.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-accent-foreground text-sm font-medium mb-6">
                <span className="text-2xl font-bold text-redant-a">A</span>
                <span>— About</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Building Stronger Teams <span className="text-gradient">Together</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
                At RedAnt Staffing, we specialize in connecting exceptional talent with industry-leading companies. 
                Like the precision and teamwork of ants, we build reliable hiring solutions that scale with your business.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    RedAnt Staffing was founded with a simple mission: to revolutionize the way companies hire talent 
                    and how professionals find their dream jobs. We saw the disconnect between exceptional candidates 
                    and growing companies, and we set out to bridge that gap.
                  </p>
                  <p>
                    Our name "RedAnt" symbolizes the qualities we embody — hard work, teamwork, persistence, 
                    and the ability to achieve seemingly impossible goals through collaboration. Just as ants 
                    work together to build remarkable structures, we work with our partners to build remarkable teams.
                  </p>
                  <p>
                    Today, we're proud to have helped over 500 professionals find meaningful careers and 
                    partnered with 100+ companies across India to fulfill their hiring needs.
                  </p>
                </div>
                <Button 
                  className="mt-8 group"
                  onClick={() => window.open(LINKEDIN_URL, "_blank")}
                >
                  Follow Our Journey
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="w-3/4 aspect-square rounded-3xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <div className="w-3/4 aspect-square rounded-3xl bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center shadow-glow">
                      {/* Ant Icon */}
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-1/2 h-1/2"
                      >
                        <ellipse cx="50" cy="65" rx="18" ry="14" fill="hsl(var(--primary))" />
                        <ellipse cx="50" cy="45" rx="14" ry="12" fill="hsl(var(--primary))" />
                        <circle cx="50" cy="28" r="10" fill="hsl(var(--primary))" />
                        <path d="M44 22 Q38 12 32 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M56 22 Q62 12 68 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M35 58 Q25 55 20 48" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M65 58 Q75 55 80 48" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M34 68 Q22 70 18 78" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M66 68 Q78 70 82 78" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <circle cx="45" cy="26" r="2" fill="hsl(var(--background))" />
                        <circle cx="55" cy="26" r="2" fill="hsl(var(--background))" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do at RedAnt Staffing.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={value.title}
                  variant="elevated"
                  className="group hover-lift opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center opacity-0 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-secondary/70 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Join Our Journey?
              </h2>
              <p className="text-muted-foreground mb-8">
                Whether you're looking for your next role or seeking top talent for your team, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/apply")}
                  className="bg-gradient-to-r from-redant-r via-redant-e to-redant-t"
                >
                  Apply for Jobs
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate("/talent")}
                >
                  Hire Talent
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

export default AboutPage;
