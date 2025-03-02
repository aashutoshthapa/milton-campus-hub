
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display font-bold text-2xl">Milton</span>
            <span className="font-display text-milton-600">College</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-milton-600",
                  location.pathname === link.path ? "text-milton-600" : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            {isAuthenticated ? (
              <Link to="/admin">
                <Button variant="ghost" className="text-sm font-medium" size="sm">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/admin-login">
                <Button variant="ghost" className="text-sm font-medium" size="sm">
                  Admin
                </Button>
              </Link>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b animate-fade-in">
          <div className="container py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={cn(
                    "px-2 py-1 text-base font-medium transition-colors hover:text-milton-600",
                    location.pathname === link.path ? "text-milton-600" : "text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <Link to="/admin" className="px-2 py-1 text-base font-medium text-milton-600">
                  Dashboard
                </Link>
              ) : (
                <Link to="/admin-login" className="px-2 py-1 text-base font-medium text-milton-600">
                  Admin
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
