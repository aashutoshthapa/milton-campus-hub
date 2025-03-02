
import React from 'react';
import Hero from '@/components/Hero';
import NoticeBoard from '@/components/NoticeBoard';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, HeartHandshake, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NoticeBoard />
        <FeaturedPrograms />
        
        {/* Stats Section */}
        <section className="py-16 bg-milton-900 text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Milton by the Numbers</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Our dedication to academic excellence and student success is reflected in our numbers.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-white">40+</div>
                <p className="text-white/70">Programs Offered</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-white">5,000+</div>
                <p className="text-white/70">Students Enrolled</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-white">300+</div>
                <p className="text-white/70">Faculty Members</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold text-white">95%</div>
                <p className="text-white/70">Graduate Employment Rate</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Milton Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Milton International College</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide a transformative educational experience that prepares students for success in a rapidly changing world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-milton-100 text-milton-700 mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
                <p className="text-muted-foreground">
                  Our rigorous academic programs are designed to challenge students and prepare them for professional success.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-milton-100 text-milton-700 mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovative Curriculum</h3>
                <p className="text-muted-foreground">
                  Our curriculum integrates the latest developments in each field, ensuring students graduate with relevant skills.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-milton-100 text-milton-700 mb-4">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Supportive Community</h3>
                <p className="text-muted-foreground">
                  Our diverse and inclusive community fosters collaboration, personal growth, and lifelong friendships.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-milton-100 text-milton-700 mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                <p className="text-muted-foreground">
                  Our international focus prepares students to succeed in an increasingly interconnected global economy.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More About Milton
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-milton-800 to-milton-900 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to Begin Your Academic Journey?</h2>
              <p className="text-white/80 text-lg">
                Take the first step toward a transformative educational experience at Milton International College.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Link to="/programs">
                  <Button size="lg" className="bg-white text-milton-800 hover:bg-white/90">
                    Explore Programs
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Contact Admissions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
