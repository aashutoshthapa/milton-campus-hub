
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Milton International College</h3>
            <p className="text-muted-foreground text-sm">
              Providing quality education and creating future leaders since 2005.
              Our commitment is to excellence in education and holistic development.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-milton-600 transition-colors" 
                 aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-milton-600 transition-colors" 
                 aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-milton-600 transition-colors" 
                 aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Faculty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Programs */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Undergraduate
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Graduate
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  International Exchange
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Online Learning
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  Certificate Courses
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-milton-600 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 College Avenue, Milton City, MC 12345
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-milton-600" />
                <a href="tel:+11234567890" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-milton-600" />
                <a href="mailto:info@milton.edu" className="text-sm text-muted-foreground hover:text-milton-600 transition-colors">
                  info@milton.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {currentYear} Milton International College. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
