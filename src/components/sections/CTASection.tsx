import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Opportunities don't wait —{" "}
            <span className="text-gradient">and neither should you.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Whether you're looking for your next career move or building your dream team, 
            RedAnt Staffing is here to make it happen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl" className="group">
              <Mail size={18} />
              Contact Us
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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
