import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Trophy, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-teamwork.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#why-choose");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm text-muted-foreground text-xs tracking-widest mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          INDIA'S #1 RECRUITMENT AGENCY
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-foreground leading-none mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          HIRE FASTER.
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary leading-none mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          HIRE SMARTER.
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          We bridge the gap between India's industrial giants and corporate leaders.
          Experience the future of workforce management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Link to="/roles">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-sm font-semibold border-foreground/30 text-foreground hover:bg-foreground hover:text-background transition-all tracking-wider"
            >
              Find Jobs
            </Button>
          </Link>
          <Link to="/talent">
            <Button 
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all tracking-wider"
            >
              Hire Talent
            </Button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="tracking-widest">4.9/5 RATING</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-yellow-500" />
            <span className="tracking-widest">AWARD WINNING</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground text-xs tracking-widest opacity-0 animate-fade-in hover:text-foreground transition-colors cursor-pointer"
        style={{ animationDelay: "0.8s" }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
