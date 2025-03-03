
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Pencil, Trash2, Plus, X } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  bio: string;
}

const AdminFacultyManager = () => {
  const [facultyMembers, setFacultyMembers] = useState<FacultyMember[]>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem('facultyMembers');
    const defaultMembers = [
      {
        id: '1',
        name: 'Dr. Sarah Johnson',
        title: 'Dean of Computer Science',
        photo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&auto=format&fit=crop&q=60',
        bio: 'Dr. Johnson has over 15 years of experience in computer science education and research.'
      },
      {
        id: '2',
        name: 'Prof. Michael Rodriguez',
        title: 'Head of Business School',
        photo: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&auto=format&fit=crop&q=60',
        bio: 'Professor Rodriguez is an expert in international business with a focus on emerging markets.'
      }
    ];
    
    try {
      return saved ? JSON.parse(saved) : defaultMembers;
    } catch (error) {
      console.error("Error parsing faculty data:", error);
      return defaultMembers;
    }
  });

  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Omit<FacultyMember, 'id'>>({
    name: '',
    title: '',
    photo: '',
    bio: ''
  });
  const { toast } = useToast();

  // Save to localStorage whenever faculty list changes
  useEffect(() => {
    try {
      localStorage.setItem('facultyMembers', JSON.stringify(facultyMembers));
    } catch (error) {
      console.error("Error saving faculty data:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to save faculty data. Please try again.",
      });
    }
  }, [facultyMembers, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddNew = () => {
    setIsAdding(true);
    setFormData({
      name: '',
      title: '',
      photo: '',
      bio: ''
    });
  };

  const handleEditMember = (member: FacultyMember) => {
    setIsEditing(member.id);
    setFormData({
      name: member.name,
      title: member.title,
      photo: member.photo,
      bio: member.bio
    });
  };

  const handleDeleteMember = (id: string) => {
    setFacultyMembers(prev => prev.filter(member => member.id !== id));
    toast({
      title: "Faculty Member Removed",
      description: "The faculty member has been successfully removed.",
    });
  };

  const handleSaveNewMember = () => {
    // Simple validation
    if (!formData.name || !formData.title) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Name and title are required fields.",
      });
      return;
    }

    try {
      const newMember: FacultyMember = {
        ...formData,
        id: Date.now().toString(),
        photo: formData.photo || 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&auto=format&fit=crop&q=60'
      };

      setFacultyMembers(prev => [...prev, newMember]);
      setIsAdding(false);
      setFormData({
        name: '',
        title: '',
        photo: '',
        bio: ''
      });

      toast({
        title: "Faculty Member Added",
        description: "The new faculty member has been successfully added.",
      });
    } catch (error) {
      console.error("Error adding faculty member:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add faculty member. Please try again.",
      });
    }
  };

  const handleUpdateMember = () => {
    if (!isEditing) return;

    // Simple validation
    if (!formData.name || !formData.title) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Name and title are required fields.",
      });
      return;
    }

    try {
      setFacultyMembers(prev => 
        prev.map(member => 
          member.id === isEditing 
            ? { ...member, ...formData } 
            : member
        )
      );
      
      setIsEditing(null);
      toast({
        title: "Faculty Member Updated",
        description: "The faculty member has been successfully updated.",
      });
    } catch (error) {
      console.error("Error updating faculty member:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update faculty member. Please try again.",
      });
    }
  };

  const cancelForm = () => {
    setIsEditing(null);
    setIsAdding(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Faculty Members</h3>
        {!isAdding && !isEditing && (
          <Button onClick={handleAddNew}>
            <Plus className="mr-1" size={16} />
            Add New Faculty
          </Button>
        )}
      </div>

      {/* Form for adding or editing */}
      {(isAdding || isEditing) && (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="text-sm font-medium block mb-1">Title</label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Position/Title"
                  required
                />
              </div>
              <div>
                <label htmlFor="photo" className="text-sm font-medium block mb-1">Photo URL</label>
                <Input
                  id="photo"
                  name="photo"
                  value={formData.photo}
                  onChange={handleInputChange}
                  placeholder="https://example.com/photo.jpg"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Leave empty for default placeholder image
                </p>
              </div>
              <div>
                <label htmlFor="bio" className="text-sm font-medium block mb-1">Biography</label>
                <Textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Short biography"
                  rows={4}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={cancelForm}>
                  <X className="mr-1" size={16} />
                  Cancel
                </Button>
                {isAdding ? (
                  <Button onClick={handleSaveNewMember}>
                    <Plus className="mr-1" size={16} />
                    Add Faculty
                  </Button>
                ) : (
                  <Button onClick={handleUpdateMember}>
                    <Pencil className="mr-1" size={16} />
                    Update Faculty
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Faculty list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facultyMembers.map(member => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 h-40 bg-gray-200">
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
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.title}</p>
                    <p className="text-sm mt-2 line-clamp-3">{member.bio}</p>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleEditMember(member)}
                      disabled={isEditing !== null || isAdding}
                    >
                      <Pencil size={16} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-500 hover:text-red-700" 
                      onClick={() => handleDeleteMember(member.id)}
                      disabled={isEditing !== null || isAdding}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {facultyMembers.length === 0 && !isAdding && (
        <div className="text-center py-8 text-gray-500">
          <p>No faculty members added yet. Click "Add New Faculty" to get started.</p>
        </div>
      )}
    </div>
  );
};

export default AdminFacultyManager;
