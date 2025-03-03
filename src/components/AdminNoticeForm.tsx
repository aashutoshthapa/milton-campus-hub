
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  time: string;
}

const AdminNoticeForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('academic');
  const [notices, setNotices] = useState<Notice[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Load notices from localStorage
    const storedNotices = localStorage.getItem('miltonNotices');
    if (storedNotices) {
      setNotices(JSON.parse(storedNotices));
    }
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !content || !date || !time) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }
    
    if (editingId) {
      // Edit existing notice
      const updatedNotices = notices.map(notice => 
        notice.id === editingId ? 
          { id: editingId, title, content, date, time, category } : 
          notice
      );
      
      setNotices(updatedNotices);
      localStorage.setItem('miltonNotices', JSON.stringify(updatedNotices));
      toast({
        title: "Notice Updated",
        description: "The notice has been successfully updated.",
      });
    } else {
      // Add new notice
      const newNotice = {
        id: Date.now(),
        title,
        content,
        date,
        time,
        category
      };
      
      const updatedNotices = [newNotice, ...notices];
      setNotices(updatedNotices);
      localStorage.setItem('miltonNotices', JSON.stringify(updatedNotices));
      toast({
        title: "Notice Added",
        description: "The new notice has been successfully added.",
      });
    }
    
    // Reset form
    resetForm();
  };
  
  const handleEdit = (notice: Notice) => {
    setTitle(notice.title);
    setContent(notice.content);
    setDate(notice.date);
    setTime(notice.time);
    setCategory(notice.category);
    setEditingId(notice.id);
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDelete = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this notice?');
    if (confirmed) {
      const updatedNotices = notices.filter(notice => notice.id !== id);
      setNotices(updatedNotices);
      localStorage.setItem('miltonNotices', JSON.stringify(updatedNotices));
      toast({
        title: "Notice Deleted",
        description: "The notice has been successfully deleted.",
      });
    }
  };
  
  const resetForm = () => {
    setTitle('');
    setContent('');
    setDate('');
    setTime('');
    setCategory('academic');
    setEditingId(null);
  };
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>{editingId ? 'Edit Notice' : 'Add New Notice'}</CardTitle>
          <CardDescription>
            Add important announcements for students and faculty.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter notice title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Enter notice content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  placeholder="e.g. 9:00 AM"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
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
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="administrative">Administrative</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={resetForm}>
              Cancel
            </Button>
            <Button type="submit" className="bg-milton-600 hover:bg-milton-700">
              {editingId ? 'Update Notice' : 'Add Notice'}
            </Button>
          </CardFooter>
        </form>
      </Card>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Manage Notices</h3>
        
        {notices.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">No notices yet. Add your first notice above.</p>
        ) : (
          <div className="space-y-4">
            {notices.map((notice) => (
              <Card key={notice.id}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                    <div className="text-sm font-medium text-muted-foreground">
                      {new Date(notice.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardDescription>
                    Category: {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{notice.content}</p>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleEdit(notice)}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(notice.id)}
                  >
                    Delete
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminNoticeForm;
