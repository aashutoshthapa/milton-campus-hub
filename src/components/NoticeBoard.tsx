
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Bell, Clock } from 'lucide-react';

// Example notice data (in a real app, this would come from a database)
const initialNotices = [
  {
    id: 1,
    title: 'Fall Semester Registration Opens',
    date: '2023-07-15',
    content: 'Registration for the Fall 2023 semester begins on August 1st. All students must register through the student portal.',
    category: 'academic',
    time: '9:00 AM'
  },
  {
    id: 2,
    title: 'Campus Closure - National Holiday',
    date: '2023-07-21',
    content: 'The campus will be closed on July 21st for the National Holiday. All classes and administrative services will resume on July 22nd.',
    category: 'administrative',
    time: '8:00 AM'
  },
  {
    id: 3,
    title: 'Guest Lecture: Dr. Sarah Johnson',
    date: '2023-07-25',
    content: 'Join us for a special guest lecture by Dr. Sarah Johnson on "Advances in Artificial Intelligence" at the Main Auditorium.',
    category: 'event',
    time: '2:00 PM'
  },
  {
    id: 4,
    title: 'Library Hours Extended for Finals',
    date: '2023-08-05',
    content: 'The library will extend its operating hours from 8:00 AM to midnight during the final exam period (August 10-20).',
    category: 'academic',
    time: '10:30 AM'
  },
  {
    id: 5,
    title: 'International Students Orientation',
    date: '2023-08-15',
    content: 'Mandatory orientation for all new international students will be held at the International Center.',
    category: 'event',
    time: '9:30 AM'
  }
];

interface Notice {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  time: string;
}

const NoticeBoard = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  useEffect(() => {
    // In a real app, you would fetch from an API
    // Load from localStorage if available, otherwise use initialNotices
    const storedNotices = localStorage.getItem('miltonNotices');
    if (storedNotices) {
      setNotices(JSON.parse(storedNotices));
    } else {
      setNotices(initialNotices);
    }
  }, []);
  
  const filteredNotices = selectedCategory === 'all' 
    ? notices 
    : notices.filter((notice) => notice.category === selectedCategory);
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Latest Notices & Announcements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest information, events, and important announcements from Milton International College.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all" onClick={() => setSelectedCategory('all')}>All</TabsTrigger>
            <TabsTrigger value="academic" onClick={() => setSelectedCategory('academic')}>Academic</TabsTrigger>
            <TabsTrigger value="administrative" onClick={() => setSelectedCategory('administrative')}>Administrative</TabsTrigger>
            <TabsTrigger value="event" onClick={() => setSelectedCategory('event')}>Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-6">
            {filteredNotices.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}
          </TabsContent>
          
          <TabsContent value="academic" className="space-y-6">
            {filteredNotices.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}
          </TabsContent>
          
          <TabsContent value="administrative" className="space-y-6">
            {filteredNotices.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}
          </TabsContent>
          
          <TabsContent value="event" className="space-y-6">
            {filteredNotices.map((notice) => (
              <NoticeItem key={notice.id} notice={notice} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const NoticeItem = ({ notice }: { notice: Notice }) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md group">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <Bell className="h-4 w-4 text-milton-600" />
              <CardDescription>
                {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
              </CardDescription>
            </div>
            <CardTitle className="text-xl group-hover:text-milton-600 transition-colors">
              {notice.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          {notice.content}
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {formatDate(notice.date)}
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {notice.time}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeBoard;
