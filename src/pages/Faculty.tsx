
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { UserRound } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface FacultyMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

const Faculty = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load faculty members from localStorage
    const saved = localStorage.getItem('facultyMembers');
    if (saved) {
      try {
        setFacultyMembers(JSON.parse(saved));
      } catch (error) {
        console.error("Error parsing faculty data:", error);
      }
    }
    setLoading(false);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-milton-blue text-white">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
              <p className="text-lg text-white/80">
                Meet our distinguished faculty members who bring years of academic 
                and professional experience to Milton International College.
              </p>
            </div>
          </div>
        </section>

        {/* Faculty Members List */}
        <section className="py-16">
          <div className="container">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <p>Loading faculty members...</p>
              </div>
            ) : facultyMembers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyMembers.map((member) => (
                  <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-64 bg-gray-200 relative">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Use fallback image if the specified one fails to load
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&auto=format&fit=crop&q=60';
                        }}
                      />
                      <Badge className="absolute top-3 right-3 bg-milton-red text-white border-none">
                        Faculty
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                      <p className="text-gray-600 mb-3">{member.title}</p>
                      <p className="text-sm text-gray-500">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <UserRound className="mx-auto h-12 w-12 text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">No Faculty Members Yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Faculty information will appear here once added by administrators.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Faculty;
