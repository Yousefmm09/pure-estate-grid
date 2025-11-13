import { Link } from "react-router-dom";
import { Home, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Home className="h-6 w-6" />
            <span>Premier Properties</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/listings" className="text-foreground hover:text-primary transition-colors">
              Listings
            </Link>
            <Link to="/agents" className="text-foreground hover:text-primary transition-colors">
              Agents
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:+1234567890" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              (123) 456-7890
            </a>
            <Button variant="default" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              List Property
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
