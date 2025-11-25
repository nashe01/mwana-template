import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import logo from "@/assets/asset55.png";

const Footer = () => {
  const links = {
    company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
    segments: [
      { label: "MwanaWev Tech", href: "#segment-tech" },
      { label: "PayWega", href: "#segment-paywega" },
      { label: "SkyGiants", href: "#segment-skygiants" },
    ],
    resources: [
      { label: "Blog", href: "#newsletter" },
      { label: "Impact Reports", href: "#impact" },
      { label: "Privacy Policy", href: "#contact" },
    ],
  };

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground border-t border-primary-foreground/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center mb-4" aria-label="MwanaWev home">
              <img src={logo} alt="MwanaWev" className="h-12 w-auto" />
            </a>
            <p className="text-primary-foreground/80 leading-relaxed">
              Technology for meaningful impact and sustainable change.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Segments</h4>
            <ul className="space-y-2">
              {links.segments.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} MwanaWev. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
