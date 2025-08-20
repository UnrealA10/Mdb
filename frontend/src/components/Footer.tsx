import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "/lovable-uploads/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { name: "About MDB", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Join Our School", href: "/join-our-school" },
    { name: "Work at MDB", href: "/work-at-our-school" },
    { name: "Community", href: "/community" },
  ];

  const resources = [
    { name: "Academic Calendar", href: "#calendar" },
    { name: "Policies", href: "#policies" },
    { name: "Safety & Security", href: "#safety" },
    { name: "Transportation", href: "#transport" },
    { name: "Health Services", href: "#health" },
    { name: "Library", href: "#library" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-forest-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="MDB Logo" className="h-12 w-12 mr-3" />
              <div>
                <h3 className="text-xl font-bold">MDB School</h3>
                <p className="text-sm opacity-80">Since 1999</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6 leading-relaxed">
              Taleem, Tarbiyat Aur Taqwa Ka Sangam - Nurturing students with academic excellence,
              moral strength, and spiritual consciousness for a brighter future.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-golden-sand flex-shrink-0" />
                <p className="text-sm opacity-90">
                  MDB School Sagra Sunderpur,<br />
                  Pratapgarh, Uttar Pradesh, India, 230136
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-golden-sand" />
                <p className="text-sm opacity-90">+91 9480041361, 9452504888</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-golden-sand" />
                <p className="text-sm opacity-90">mdbschool23@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden-sand">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-golden-sand transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden-sand">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-golden-sand transition-all duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-golden-sand">Stay Connected</h4>
            <p className="text-sm opacity-90 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <div className="space-y-3 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-golden-sand"
              />
              <Button className="w-full bg-golden-sand text-earth-brown hover:bg-golden-sand/90">
                Subscribe
              </Button>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-golden-sand hover:text-earth-brown transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © 2025 MDB Senior Secondary School. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="opacity-80 hover:opacity-100 hover:text-golden-sand transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="opacity-80 hover:opacity-100 hover:text-golden-sand transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="opacity-80 hover:opacity-100 hover:text-golden-sand transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;