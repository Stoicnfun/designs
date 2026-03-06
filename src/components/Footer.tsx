import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[0.15em] mb-4">STRUCTURES</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Transforming Spaces with Elegance & Innovation. Premium interior design services for residential, commercial, and luxury spaces.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-primary-foreground/60 hover:text-gold text-sm tracking-wide transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <div className="flex flex-col gap-3">
              {["Residential Design", "Commercial Design", "Office Interiors", "Space Planning", "3D Visualization", "Renovation"].map((item) => (
                <span key={item} className="text-primary-foreground/60 text-sm tracking-wide">{item}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+919560585099" className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                <Phone size={16} />
                +91 9560585099
              </a>
              <a href="mailto:info@structures.in" className="flex items-center gap-3 text-primary-foreground/60 hover:text-gold text-sm transition-colors">
                <Mail size={16} />
                info@structures.in
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/60 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                New Delhi, India
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © {new Date().getFullYear()} Structures. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Transforming Spaces with Elegance & Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
