import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-hero-gradient"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ant Path Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-10 w-24 h-24 border border-primary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Dotted Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-accent-foreground text-sm font-medium mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Trusted by 100+ Companies
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hiring Talent That Builds{" "}
              <span className="text-gradient">Stronger Teams.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Trusted staffing solutions for BPO, EdTech, Sales & Customer Support across India. We connect exceptional talent with growing businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl" className="group">
                <Briefcase size={20} />
                Apply for Jobs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Users size={20} />
                Hire Talent
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Placements</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Partners</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg">
              {/* Main Circle */}
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-pulse-glow">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center shadow-glow">
                      <span className="text-6xl font-bold text-primary-foreground">R</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-8 -left-8 bg-card p-4 rounded-xl shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">50+ Jobs</div>
                    <div className="text-xs text-muted-foreground">Active openings</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-12 -right-4 bg-card p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                    <Users size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Fast Hiring</div>
                    <div className="text-xs text-muted-foreground">7-day average</div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <path
                  d="M50 200 Q 100 100 200 200 T 350 200"
                  fill="none"
                  stroke="hsl(var(--primary) / 0.2)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="animate-march"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
