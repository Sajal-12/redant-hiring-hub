import { Mail, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#jobs" },
      { label: "Partners", href: "#partners" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "BPO Hiring", href: "#" },
      { label: "EdTech Hiring", href: "#" },
      { label: "Sales Recruitment", href: "#" },
      { label: "Customer Support", href: "#" },
    ],
    resources: [
      { label: "Job Listings", href: "#jobs" },
      { label: "Career Tips", href: "#" },
      { label: "Industry Insights", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-charcoal text-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-secondary">
                Red<span className="text-primary">Ant</span>
              </span>
            </div>
            <p className="text-secondary/70 mb-6 max-w-sm leading-relaxed">
              Building stronger teams through trusted staffing solutions. Your partner in growth across BPO, EdTech, Sales & Customer Support.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:redantstaffing@gmail.com"
                className="flex items-center gap-3 text-secondary/70 hover:text-primary transition-colors duration-200"
              >
                <Mail size={18} />
                <span>redantstaffing@gmail.com</span>
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
                    className="text-secondary/70 hover:text-primary transition-colors duration-200"
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
                    className="text-secondary/70 hover:text-primary transition-colors duration-200"
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
                    className="text-secondary/70 hover:text-primary transition-colors duration-200"
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
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
