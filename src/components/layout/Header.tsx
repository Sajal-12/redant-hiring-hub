import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { Menu, X } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";
const EMAIL = "redantstaffing@gmail.com";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { letter: "R", label: "Roles", href: "/roles", colorClass: "text-redant-r" },
    { letter: "E", label: "Experties", href: "/experties", colorClass: "text-redant-e" },
    { letter: "D", label: "Demands", href: "/demands", colorClass: "text-redant-d" },
    { letter: "A", label: "About", href: "/about", colorClass: "text-redant-a" },
    { letter: "N", label: "Network", href: "/network", colorClass: "text-redant-n" },
    { letter: "T", label: "Talent", href: "/talent", colorClass: "text-redant-t" },
  ];

  const handleContactClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleApplyClick = () => {
    navigate("/apply");
    setIsMenuOpen(false);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="group hover:opacity-90 transition-opacity"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation - REDANT */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.letter}
                to={link.href}
                className={`group flex items-center gap-1.5 font-medium transition-all duration-300 hover:scale-105 ${
                  isActive(link.href) ? "scale-105" : ""
                }`}
              >
                <span
                  className={`text-xl font-bold ${link.colorClass} transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-lg`}
                >
                  {link.letter}
                </span>
                <span
                  className={`text-sm text-muted-foreground group-hover:text-foreground transition-colors ${
                    isActive(link.href) ? "text-foreground font-semibold" : ""
                  }`}
                >
                  — {link.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleContactClick}
              className="hover:bg-accent"
            >
              Contact Us
            </Button>
            <Button 
              size="sm"
              onClick={handleApplyClick}
              className="bg-gradient-to-r from-redant-r via-redant-e to-redant-t hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.letter}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-accent transition-colors duration-200 ${
                    isActive(link.href) ? "bg-accent" : ""
                  }`}
                >
                  <span
                    className={`text-2xl font-bold ${link.colorClass}`}
                  >
                    {link.letter}
                  </span>
                  <span className="text-foreground font-medium">
                    — {link.label}
                  </span>
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleContactClick}
                >
                  Contact Us
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-redant-r via-redant-e to-redant-t"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
