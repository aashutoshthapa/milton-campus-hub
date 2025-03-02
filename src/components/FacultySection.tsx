
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { UserRound } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

const FacultySection = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load faculty members from localStorage
    const saved = localStorage.getItem('facultyMembers');
    if (saved) {
      setFacultyMembers(JSON.parse(saved));
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="py-12 text-center">Loading faculty...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Faculty</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our distinguished faculty members bring years of academic excellence and professional experience
            to provide students with the highest quality education.
          </p>
        </div>

        {facultyMembers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.slice(0, 3).map((member) => (
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
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-3">{member.title}</p>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-4">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 bg-white rounded-lg shadow-sm">
            <UserRound className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <h3 className="text-lg font-medium text-gray-900">No Faculty Members Yet</h3>
            <p className="mt-1 text-sm text-gray-500">Faculty members will appear here once added by administrators.</p>
          </div>
        )}

        {facultyMembers.length > 3 && (
          <div className="mt-10 text-center">
            <Link to="/faculty">
              <Button variant="outline" size="lg">
                View All Faculty Members
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacultySection;
