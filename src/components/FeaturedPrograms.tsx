
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, GraduationCap, Clock, Calendar } from 'lucide-react';

// Example program data (in a real app, this would come from a database)
const initialPrograms = [
  {
    id: 1,
    title: 'Bachelor of Science in Computer Science',
    description: 'Gain expertise in algorithms, software development, artificial intelligence, and data science in our comprehensive computer science program.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    duration: '4 years',
    startDate: 'September 2023',
    category: 'undergraduate',
    featured: true
  },
  {
    id: 2,
    title: 'Master of Business Administration',
    description: 'Develop leadership skills and business acumen needed to excel in the global business environment with our industry-focused MBA program.',
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=2074&auto=format&fit=crop',
    duration: '2 years',
    startDate: 'January 2024',
    category: 'graduate',
    featured: true
  },
  {
    id: 3,
    title: 'Certificate in Digital Marketing',
    description: 'Master the latest digital marketing strategies, tools, and techniques with our industry-recognized certificate program.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    duration: '6 months',
    startDate: 'Flexible',
    category: 'certificate',
    featured: true
  },
  {
    id: 4,
    title: 'Bachelor of Arts in Psychology',
    description: 'Explore the human mind and behavior through our comprehensive psychology program that prepares you for careers in counseling, research, and human services.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop',
    duration: '4 years',
    startDate: 'September 2023',
    category: 'undergraduate',
    featured: false
  }
];

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  startDate: string;
  category: string;
  featured: boolean;
}

const FeaturedPrograms = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  
  useEffect(() => {
    // In a real app, you would fetch from an API
    // Load from localStorage if available, otherwise use initialPrograms
    const storedPrograms = localStorage.getItem('miltonPrograms');
    if (storedPrograms) {
      setPrograms(JSON.parse(storedPrograms));
    } else {
      setPrograms(initialPrograms);
    }
  }, []);
  
  // Get only featured programs for the homepage
  const featuredPrograms = programs.filter(program => program.featured).slice(0, 3);
  
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular academic programs designed to prepare you for success in today's competitive global environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPrograms.map((program, index) => (
            <Card key={program.id} className="overflow-hidden card-hover h-full flex flex-col">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${program.image})` }}
              ></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="bg-milton-50 text-milton-700 hover:bg-milton-100">
                    {program.category === 'undergraduate' ? 'Undergraduate' : 
                     program.category === 'graduate' ? 'Graduate' : 'Certificate'}
                  </Badge>
                </div>
                <CardTitle className="line-clamp-2 text-xl font-display">
                  {program.title}
                </CardTitle>
                <CardDescription className="line-clamp-1 flex items-center space-x-4 pt-1">
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {program.duration}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {program.startDate}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {program.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/programs/${program.id}`} className="w-full">
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/programs">
            <Button size="lg" className="bg-milton-600 hover:bg-milton-700">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
