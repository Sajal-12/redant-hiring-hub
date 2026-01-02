import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";
const EMAIL = "redantstaffing@gmail.com";

const HeroSection = () => {
  const handleApplyClick = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  const handleHireClick = () => {
    window.location.href = `mailto:${EMAIL}?subject=Hiring Partnership Inquiry&body=Hi RedAnt Staffing Team,%0D%0A%0D%0AI am interested in partnering with you for our hiring needs.%0D%0A%0D%0ACompany Name:%0D%0AContact Person:%0D%0APhone:%0D%0ARequirements:%0D%0A%0D%0AThank you!`;
  };

  const scrollToJobs = () => {
    const element = document.querySelector("#jobs");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

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
        <div className="absolute top-20 right-10 w-20 sm:w-32 h-20 sm:h-32 border border-primary/10 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-10 w-16 sm:w-24 h-16 sm:h-24 border border-primary/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-primary/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: "0.5s" }}></div>
        
        {/* Dotted Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-accent-foreground text-sm font-medium mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Trusted by 100+ Companies
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Hiring Talent That Builds{" "}
              <span className="text-gradient">Stronger Teams.</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Trusted staffing solutions for BPO, EdTech, Sales & Customer Support across India. We connect exceptional talent with growing businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button 
                variant="hero" 
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleApplyClick}
              >
                <Briefcase size={20} />
                Apply for Jobs
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="group w-full sm:w-auto"
                onClick={handleHireClick}
              >
                <Users size={20} />
                Hire Talent
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <button 
                onClick={scrollToJobs}
                className="text-center lg:text-left hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Placements</div>
              </button>
              <button 
                onClick={() => window.open(LINKEDIN_URL, "_blank")}
                className="text-center lg:text-left hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Partners</div>
              </button>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex items-center justify-center opacity-0 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-full max-w-lg">
              {/* Main Circle */}
              <div className="w-64 lg:w-80 h-64 lg:h-80 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center animate-pulse-glow">
                <div className="w-52 lg:w-64 h-52 lg:h-64 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                  <div className="w-40 lg:w-48 h-40 lg:h-48 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                    <div className="w-28 lg:w-32 h-28 lg:h-32 rounded-full bg-primary flex items-center justify-center shadow-glow">
                      {/* Ant Icon */}
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-20 lg:w-24 h-20 lg:h-24"
                      >
                        <ellipse cx="50" cy="65" rx="18" ry="14" fill="white" />
                        <ellipse cx="50" cy="45" rx="14" ry="12" fill="white" />
                        <circle cx="50" cy="28" r="10" fill="white" />
                        <path d="M44 22 Q38 12 32 10" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M56 22 Q62 12 68 10" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
                        <path d="M35 58 Q25 55 20 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M65 58 Q75 55 80 48" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M34 68 Q22 70 18 78" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <path d="M66 68 Q78 70 82 78" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                        <circle cx="45" cy="26" r="2" fill="hsl(var(--primary))" />
                        <circle cx="55" cy="26" r="2" fill="hsl(var(--primary))" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <button 
                onClick={scrollToJobs}
                className="absolute top-4 lg:top-8 -left-4 lg:-left-8 bg-card p-3 lg:p-4 rounded-xl shadow-card animate-float hover:shadow-elevated hover:scale-105 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-accent flex items-center justify-center">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs lg:text-sm font-semibold text-foreground">50+ Jobs</div>
                    <div className="text-xs text-muted-foreground">Active openings</div>
                  </div>
                </div>
              </button>
              
              <div className="absolute bottom-8 lg:bottom-12 -right-2 lg:-right-4 bg-card p-3 lg:p-4 rounded-xl shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 lg:w-10 h-8 lg:h-10 rounded-full bg-accent flex items-center justify-center">
                    <Users size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs lg:text-sm font-semibold text-foreground">Fast Hiring</div>
                    <div className="text-xs text-muted-foreground">7-day average</div>
                  </div>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
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
      <button 
        onClick={scrollToJobs}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in hover:scale-110 transition-transform cursor-pointer" 
        style={{ animationDelay: "0.8s" }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
