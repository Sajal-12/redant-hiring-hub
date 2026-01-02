import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";
const EMAIL = "redantstaffing@gmail.com";

const CTASection = () => {
  const handleApplyClick = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  const handleContactClick = () => {
    const subject = encodeURIComponent("General Inquiry - RedAnt Staffing");
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

I would like to get in touch regarding:

[ ] Job Opportunities
[ ] Hiring Partnership
[ ] General Inquiry
[ ] Other

Details:


Thank you!`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-4 sm:mb-6 opacity-0 animate-fade-in px-4" style={{ animationDelay: "0.1s" }}>
            Opportunities don't wait —{" "}
            <span className="text-gradient">and neither should you.</span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Whether you're looking for your next career move or building your dream team, 
            RedAnt Staffing is here to make it happen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in px-4" style={{ animationDelay: "0.3s" }}>
            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={handleApplyClick}
            >
              <Linkedin size={18} />
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline" 
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={handleContactClick}
            >
              <Mail size={18} />
              Contact Us
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground text-sm">
              <a 
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span>{EMAIL}</span>
              </a>
              <a 
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-muted-foreground text-sm">
              Trusted by <span className="text-foreground font-medium">100+ professionals</span> and{" "}
              <span className="text-foreground font-medium">growing brands</span> across India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
