
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-milton-blue/95 to-milton-blue/85 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop')",
        }}
      ></div>
      
      <div className="container relative z-20 py-20 md:py-32">
        <div className="max-w-3xl space-y-6 text-white">
          <div className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium animate-fade-in">
            Excellence in Education
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Welcome to Milton International College
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Shaping minds, building futures. Join our diverse community of scholars and innovators committed to excellence in education and research.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/programs">
              <Button size="lg" className="bg-milton-red hover:bg-milton-red/90 text-white">
                Explore Programs 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block animate-bounce">
        <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
