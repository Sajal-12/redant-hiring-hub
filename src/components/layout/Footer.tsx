import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Facebook, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";
const EMAIL = "redantstaffing@gmail.com";
const WHATSAPP = "+91 81233 14555";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { label: "Roles", href: "/roles", letter: "R", color: "text-redant-r" },
      { label: "Experties", href: "/experties", letter: "E", color: "text-redant-e" },
      { label: "Demands", href: "/demands", letter: "D", color: "text-redant-d" },
      { label: "About", href: "/about", letter: "A", color: "text-redant-a" },
      { label: "Network", href: "/network", letter: "N", color: "text-redant-n" },
      { label: "Talent", href: "/talent", letter: "T", color: "text-redant-t" },
    ],
    resources: [
      { label: "Apply Now", href: "/apply" },
      { label: "LinkedIn", href: LINKEDIN_URL, external: true },
      { label: "Contact Us", href: `mailto:${EMAIL}`, external: true },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/redantstaffing", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/redantstaffing", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/redantstaffing", label: "Facebook" },
  ];

  return (
    <footer className="bg-charcoal text-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-secondary/70 mb-6 leading-relaxed">
              Building stronger teams through trusted staffing solutions across India.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-secondary/70 hover:text-primary transition-colors duration-200 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{EMAIL}</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary/70 hover:text-primary transition-colors duration-200 group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="text-sm">{WHATSAPP}</span>
              </a>
              <div className="flex items-center gap-3 text-secondary/70">
                <MapPin size={18} />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          {/* REDANT Navigation */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-secondary/70 hover:text-primary transition-colors duration-200"
                  >
                    <span className={`font-bold ${link.color}`}>{link.letter}</span>
                    <span>— {link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-secondary/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary/10">
          <p className="text-secondary/60 text-sm text-center">
            © {currentYear} RedAnt Staffing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
