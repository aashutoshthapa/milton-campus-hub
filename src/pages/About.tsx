
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-r from-milton-900 to-milton-800 text-white">
          <div className="container">
            <div className="max-w-3xl space-y-4">
              <div className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                Our Story, Mission, and Values
              </h1>
              <p className="text-xl text-white/80">
                Learn about the history, mission, and values that drive Milton International College's commitment to educational excellence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
                    alt="Milton College Campus" 
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-milton-50 p-4 rounded-lg shadow-lg border">
                    <p className="text-milton-800 font-display text-xl font-bold">Est. 2005</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="inline-block py-1 px-3 rounded-full bg-milton-50 text-milton-800 text-sm font-medium">
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold">A Legacy of Educational Excellence</h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2005, Milton International College began with a vision to create a forward-thinking educational institution that combines academic rigor with innovative teaching approaches.
                </p>
                <p className="text-muted-foreground">
                  What started as a small college with just three programs and 200 students has grown into a comprehensive institution offering over 40 programs to more than 5,000 students from around the world. Our growth reflects our commitment to adapting to the changing needs of students and employers while maintaining our core values of excellence, integrity, and innovation.
                </p>
                <p className="text-muted-foreground">
                  Throughout our history, we have been guided by our founding principle: that education should be transformative, preparing students not just for careers, but for meaningful lives as engaged global citizens.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission and Vision Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block py-1 px-3 rounded-full bg-milton-50 text-milton-800 text-sm font-medium mb-4">
                Our Purpose
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Mission, Vision & Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Milton International College.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide transformative educational experiences that prepare students for success in a rapidly changing world. We accomplish this through rigorous academic programs, supportive learning communities, and partnerships with industry leaders.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be recognized globally as a leader in innovative education that bridges academic excellence with real-world application, producing graduates who are not only skilled professionals but also thoughtful leaders committed to positive change.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg border shadow-sm">
                <h3 className="text-2xl font-display font-bold mb-4">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><span className="font-medium text-milton-700">Excellence:</span> Striving for the highest standards in all we do.</li>
                  <li><span className="font-medium text-milton-700">Integrity:</span> Acting with honesty and ethical conduct.</li>
                  <li><span className="font-medium text-milton-700">Innovation:</span> Embracing new ideas and approaches.</li>
                  <li><span className="font-medium text-milton-700">Diversity:</span> Celebrating and learning from different perspectives.</li>
                  <li><span className="font-medium text-milton-700">Community:</span> Fostering belonging and mutual support.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block py-1 px-3 rounded-full bg-milton-50 text-milton-800 text-sm font-medium mb-4">
                Our Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">College Leadership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated leadership team guiding Milton International College.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                    alt="Dr. Robert Chen" 
                    className="w-48 h-48 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold">Dr. Robert Chen</h3>
                <p className="text-milton-600 font-medium mb-2">President</p>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  With over 20 years in higher education leadership, Dr. Chen brings visionary direction to Milton College.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                    alt="Dr. Sarah Johnson" 
                    className="w-48 h-48 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-milton-600 font-medium mb-2">Vice President, Academic Affairs</p>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Dr. Johnson is committed to curriculum innovation and academic excellence across all programs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="relative mb-4 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" 
                    alt="Michael Williams" 
                    className="w-48 h-48 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold">Michael Williams</h3>
                <p className="text-milton-600 font-medium mb-2">Chief Financial Officer</p>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Mr. Williams manages the financial health of Milton College, ensuring sustainable growth and student accessibility.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/faculty">
                <Button size="lg" className="bg-milton-600 hover:bg-milton-700">
                  Meet Our Full Faculty Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Campus Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block py-1 px-3 rounded-full bg-milton-50 text-milton-800 text-sm font-medium mb-4">
                Our Campus
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Campus Facilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our modern campus designed to support learning, research, and community.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <div className="relative h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
                    alt="Main Academic Building" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Main Academic Building</h3>
                  <p className="text-sm text-muted-foreground">
                    Our flagship building houses state-of-the-art classrooms, lecture halls, and faculty offices.
                  </p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <div className="relative h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2015&auto=format&fit=crop" 
                    alt="Research Center" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Research Center</h3>
                  <p className="text-sm text-muted-foreground">
                    A cutting-edge facility for interdisciplinary research and innovation projects.
                  </p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <div className="relative h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2390&auto=format&fit=crop" 
                    alt="Library" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Central Library</h3>
                  <p className="text-sm text-muted-foreground">
                    Our expansive library provides access to vast physical and digital resources for learning and research.
                  </p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <div className="relative h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2036&auto=format&fit=crop" 
                    alt="Student Center" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Student Center</h3>
                  <p className="text-sm text-muted-foreground">
                    A central hub for student activities, dining, and collaborative spaces.
                  </p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <div className="relative h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1576515652031-fc429bbc9023?q=80&w=2070&auto=format&fit=crop" 
                    alt="Sports Complex" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Sports Complex</h3>
                  <p className="text-sm text-muted-foreground">
                    Our modern athletic facilities support physical wellness and competitive sports programs.
                  </p>
                </div>
              </div>
              
              <div className="overflow-hidden rounded-lg shadow-sm group">
                <div className="relative h-56">
                  <img 
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop" 
                    alt="Residence Halls" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg">Residence Halls</h3>
                  <p className="text-sm text-muted-foreground">
                    Comfortable and modern student housing designed to foster community and support academic success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-milton-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Visit Our Campus</h2>
              <p className="text-white/90 text-lg">
                Experience Milton International College firsthand. Schedule a campus tour to meet our community and explore our facilities.
              </p>
              <div className="pt-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-milton-700 hover:bg-white/90">
                    Schedule a Visit
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

export default About;
