import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Home className="h-6 w-6" />
              <span>Premier Properties</span>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your trusted partner in finding the perfect home. Excellence in real estate since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/listings" className="hover:text-secondary transition-colors">Browse Properties</Link></li>
              <li><Link to="/agents" className="hover:text-secondary transition-colors">Our Agents</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/listings?type=house" className="hover:text-secondary transition-colors">Houses</Link></li>
              <li><Link to="/listings?type=apartment" className="hover:text-secondary transition-colors">Apartments</Link></li>
              <li><Link to="/listings?type=villa" className="hover:text-secondary transition-colors">Villas</Link></li>
              <li><Link to="/listings?type=townhouse" className="hover:text-secondary transition-colors">Townhouses</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Real Estate Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-secondary transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@premierproperties.com" className="hover:text-secondary transition-colors">info@premierproperties.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-sm text-center text-primary-foreground/60">
          <p>&copy; 2024 Premier Properties. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
