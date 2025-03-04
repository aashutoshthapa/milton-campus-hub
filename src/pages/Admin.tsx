
import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import AdminFacultyManager from '@/components/AdminFacultyManager';
import AdminNoticeForm from '@/components/AdminNoticeForm';
import Logo from '@/components/Logo';

const Admin = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    
    if (!success) {
      setLoginError(true);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardTitle className="text-2xl text-milton-blue">Admin Portal</CardTitle>
            <CardDescription>
              Login to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setLoginError(false);
                  }}
                  placeholder="Enter your email"
                  className={loginError ? "border-red-500" : ""}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">Password</label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLoginError(false);
                  }}
                  placeholder="Enter your password"
                  className={loginError ? "border-red-500" : ""}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-milton-blue hover:bg-milton-600 text-white">Login</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-3xl font-bold text-milton-blue">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={handleLogout} className="border-milton-blue text-milton-blue hover:bg-milton-blue/5">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="faculty">
          <TabsList className="mb-4 bg-milton-100">
            <TabsTrigger value="notices" className="data-[state=active]:bg-milton-blue data-[state=active]:text-white">
              Manage Notices
            </TabsTrigger>
            <TabsTrigger value="programs" className="data-[state=active]:bg-milton-blue data-[state=active]:text-white">
              Manage Programs
            </TabsTrigger>
            <TabsTrigger value="faculty" className="data-[state=active]:bg-milton-blue data-[state=active]:text-white">
              Manage Faculty
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="notices">
            <Card>
              <CardHeader>
                <CardTitle>Notices Management</CardTitle>
                <CardDescription>Add, edit or remove notices that appear on the homepage</CardDescription>
              </CardHeader>
              <CardContent>
                <AdminNoticeForm />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>Programs Management</CardTitle>
                <CardDescription>Manage the programs and courses offered by the college</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Will implement program management later */}
                <p>Programs management will be implemented here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faculty" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Faculty Management</CardTitle>
                <CardDescription>
                  Add, edit or remove faculty members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AdminFacultyManager />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
