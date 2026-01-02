import { Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import Logo from "@/components/ui/Logo";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";
const EMAIL = "redantstaffing@gmail.com";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#jobs" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: `mailto:${EMAIL}`, external: true },
    ],
    services: [
      { label: "BPO Hiring", href: "#partners" },
      { label: "EdTech Hiring", href: "#partners" },
      { label: "Sales Recruitment", href: "#partners" },
      { label: "Customer Support", href: "#partners" },
    ],
    resources: [
      { label: "Job Listings", href: "#jobs" },
      { label: "Career Tips", href: LINKEDIN_URL, external: true },
      { label: "Industry Insights", href: LINKEDIN_URL, external: true },
      { label: "FAQ", href: `mailto:${EMAIL}?subject=FAQ Inquiry`, external: true },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <p className="text-secondary/70 mb-6 max-w-sm leading-relaxed">
              Building stronger teams through trusted staffing solutions. Your partner in growth across BPO, EdTech, Sales & Customer Support.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-secondary/70 hover:text-primary transition-colors duration-200 group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>{EMAIL}</span>
              </a>
              <div className="flex items-center gap-3 text-secondary/70">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => !link.external && scrollToSection(e, link.href)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-secondary/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-secondary/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-secondary mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => !link.external && scrollToSection(e, link.href)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-secondary/70 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-secondary/60 text-sm">
              © {currentYear} RedAnt Staffing. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
};

export default Footer;
