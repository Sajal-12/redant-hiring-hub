import { Link } from "react-router-dom";
import Logo from "@/components/ui/Logo";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918123314555";
const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in RedAnt Staffing services.`, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </button>

      <footer className="bg-card border-t border-border/50 py-12">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <Logo className="w-8 h-8" />
                <span className="text-lg font-bold text-foreground">
                  red<span className="text-primary">ant</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">
                India's leading recruitment agency connecting exceptional talent with growing businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/roles" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Find Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/talent" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Hire Talent
                  </Link>
                </li>
                <li>
                  <Link to="/apply" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/experties" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Consulting
                  </Link>
                </li>
                <li>
                  <Link to="/roles" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Recruitment
                  </Link>
                </li>
                <li>
                  <Link to="/network" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Outsourcing
                  </Link>
                </li>
                <li>
                  <Link to="/demands" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Training
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:redantstaffing@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} RedAnt Staffing. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
