
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Code, Flask, PieChart, Globe } from 'lucide-react';

const ProgramCard = ({ 
  title, 
  description, 
  duration, 
  level, 
  icon: Icon
}: { 
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: React.ElementType;
}) => (
  <Card className="h-full hover:shadow-md transition-shadow">
    <CardHeader>
      <div className="flex items-center gap-2">
        <div className="rounded-full bg-milton-100 p-2 text-milton-800">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </div>
      <CardDescription>{level} • {duration}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline" className="w-full">
        Learn More
      </Button>
    </CardFooter>
  </Card>
);

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Business Administration",
      description: "A comprehensive program that covers management, marketing, finance, and entrepreneurship, preparing students for leadership roles in the business world.",
      duration: "4 Years",
      level: "Undergraduate",
      icon: PieChart
    },
    {
      title: "Bachelor of Computer Science",
      description: "Gain practical skills in programming, software development, algorithms, and data structures. Specialize in AI, cybersecurity, or web development.",
      duration: "4 Years",
      level: "Undergraduate",
      icon: Code
    },
    {
      title: "Master of Education",
      description: "Advanced study in educational theory and practice, designed for teachers seeking to enhance their qualifications and instructional expertise.",
      duration: "2 Years",
      level: "Graduate",
      icon: BookOpen
    },
    {
      title: "PhD in Environmental Science",
      description: "Research-focused program examining environmental challenges and developing innovative solutions for sustainability and conservation.",
      duration: "3-5 Years",
      level: "Doctorate",
      icon: Flask
    },
    {
      title: "Master of International Relations",
      description: "Study global politics, economics, and diplomacy. Prepare for careers in government, NGOs, or international organizations.",
      duration: "2 Years",
      level: "Graduate",
      icon: Globe
    },
    {
      title: "Bachelor of Liberal Arts",
      description: "A flexible program allowing students to explore diverse subjects across humanities, arts, and social sciences, developing critical thinking and communication skills.",
      duration: "4 Years",
      level: "Undergraduate",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-milton-900">Our Programs</h1>
          <p className="text-lg mb-12 text-gray-600 max-w-3xl">
            Milton International College offers a diverse range of undergraduate and graduate programs designed to prepare students for successful careers and meaningful lives.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
            <p className="mb-6 text-gray-600">
              We welcome applications from students around the world. Our admissions process is designed to identify passionate, dedicated individuals who will thrive in our academic community.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="rounded-full bg-milton-100 text-milton-800 h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold">Review Program Requirements</h3>
                  <p className="text-gray-600">Carefully check the specific requirements for your chosen program.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="rounded-full bg-milton-100 text-milton-800 h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold">Prepare Your Documents</h3>
                  <p className="text-gray-600">Gather transcripts, recommendation letters, and prepare your personal statement.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="rounded-full bg-milton-100 text-milton-800 h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold">Submit Your Application</h3>
                  <p className="text-gray-600">Complete the online application form and pay the application fee.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="rounded-full bg-milton-100 text-milton-800 h-8 w-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold">Interview (if required)</h3>
                  <p className="text-gray-600">Some programs may require an interview as part of the selection process.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 bg-milton-800 hover:bg-milton-900">
              Start Your Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
