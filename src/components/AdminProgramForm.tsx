
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useAuth } from '@/context/AuthContext';

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

const AdminProgramForm = () => {
  const { isAuthenticated } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [category, setCategory] = useState('undergraduate');
  const [featured, setFeatured] = useState(false);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  useEffect(() => {
    // Load programs from localStorage
    const storedPrograms = localStorage.getItem('miltonPrograms');
    if (storedPrograms) {
      setPrograms(JSON.parse(storedPrograms));
    }
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !image || !duration || !startDate) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (editingId) {
      // Edit existing program
      const updatedPrograms = programs.map(program => 
        program.id === editingId ? 
          { id: editingId, title, description, image, duration, startDate, category, featured } : 
          program
      );
      
      setPrograms(updatedPrograms);
      localStorage.setItem('miltonPrograms', JSON.stringify(updatedPrograms));
      toast.success('Program updated successfully');
    } else {
      // Add new program
      const newProgram = {
        id: Date.now(),
        title,
        description,
        image,
        duration,
        startDate,
        category,
        featured
      };
      
      const updatedPrograms = [newProgram, ...programs];
      setPrograms(updatedPrograms);
      localStorage.setItem('miltonPrograms', JSON.stringify(updatedPrograms));
      toast.success('Program added successfully');
    }
    
    // Reset form
    resetForm();
  };
  
  const handleEdit = (program: Program) => {
    setTitle(program.title);
    setDescription(program.description);
    setImage(program.image);
    setDuration(program.duration);
    setStartDate(program.startDate);
    setCategory(program.category);
    setFeatured(program.featured);
    setEditingId(program.id);
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDelete = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this program?');
    if (confirmed) {
      const updatedPrograms = programs.filter(program => program.id !== id);
      setPrograms(updatedPrograms);
      localStorage.setItem('miltonPrograms', JSON.stringify(updatedPrograms));
      toast.success('Program deleted successfully');
    }
  };
  
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImage('');
    setDuration('');
    setStartDate('');
    setCategory('undergraduate');
    setFeatured(false);
    setEditingId(null);
  };
  
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-center text-muted-foreground">
          You must be logged in to access this page.
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? 'Edit Program' : 'Add New Program'}</CardTitle>
          <CardDescription>
            Add academic programs offered by Milton International College.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Program Title</Label>
              <Input
                id="title"
                placeholder="Enter program title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter program description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Enter a URL for the program image (e.g., from Unsplash)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Input
                  id="duration"
                  placeholder="e.g. 4 years"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  id="startDate"
                  placeholder="e.g. September 2023"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select 
                value={category} 
                onValueChange={setCategory}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergraduate">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="certificate">Certificate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Switch
                id="featured"
                checked={featured}
                onCheckedChange={setFeatured}
              />
              <Label htmlFor="featured">Featured program (show on homepage)</Label>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancel
            </Button>
            <Button type="submit" className="bg-milton-600 hover:bg-milton-700">
              {editingId ? 'Update Program' : 'Add Program'}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Manage Programs</h3>
        
        {programs.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No programs yet. Add your first program above.</p>
        ) : (
          <div className="space-y-4">
            {programs.map((program) => (
              <Card key={program.id}>
                <div className="flex flex-col sm:flex-row">
                  <div 
                    className="w-full sm:w-32 h-24 bg-cover bg-center"
                    style={{ backgroundImage: `url(${program.image})` }}
                  ></div>
                  <div className="flex-1">
                    <CardHeader className="pb-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <CardTitle className="text-lg">{program.title}</CardTitle>
                          <CardDescription>
                            {program.category.charAt(0).toUpperCase() + program.category.slice(1)} • {program.duration}
                          </CardDescription>
                        </div>
                        {program.featured && (
                          <div className="px-2 py-1 bg-milton-100 text-milton-800 text-xs rounded-full font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">{program.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleEdit(program)}
                      >
                        Edit
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm" 
                        onClick={() => handleDelete(program.id)}
                      >
                        Delete
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProgramForm;
