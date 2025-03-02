
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting Milton International College. We'll get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-milton-900">Contact Us</h1>
          <p className="text-lg mb-8 text-gray-600">
            Have a question or need more information? Reach out to us using any of the methods below.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Address</h2>
                <p className="text-gray-600">
                  123 Education Avenue<br />
                  Academic District<br />
                  Milton, MT 54321
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p className="text-gray-600">
                  <strong>Phone:</strong> (123) 456-7890<br />
                  <strong>Email:</strong> info@milton.edu<br />
                  <strong>Office Hours:</strong> Monday-Friday, 8:00 AM - 5:00 PM
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Admissions</h2>
                <p className="text-gray-600">
                  <strong>Phone:</strong> (123) 456-7891<br />
                  <strong>Email:</strong> admissions@milton.edu
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject of your message" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..." 
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-milton-800 hover:bg-milton-900">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden h-[400px] shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.1696839387707!2d-70.9490727!3d41.5008342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMwJzAzLjAiTiA3MMKwNTYnNTYuNyJX!5e0!3m2!1sen!2sus!4v1647319824222!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Milton International College Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
