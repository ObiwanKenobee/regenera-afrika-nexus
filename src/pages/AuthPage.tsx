
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Leaf } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("login");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background st-pattern-bg">
      {/* Left side (branding) */}
      <div className="flex-1 p-10 flex flex-col justify-center items-center md:items-start bg-gradient-to-br from-st-green-400 to-st-teal-500 text-white">
        <div className="max-w-md mx-auto md:mx-0">
          <div className="mb-8 flex items-center">
            <div className="w-12 h-12 rounded-full bg-st-coral flex items-center justify-center">
              <Leaf size={24} className="text-white" />
            </div>
            <h1 className="ml-4 text-3xl font-bold">SlumTech Regenera</h1>
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Transform Communities Through Regenerative Technology</h2>
          
          <p className="text-xl mb-8">
            Join our platform to build sustainable, resilient, and thriving communities through collaborative regenerative projects.
          </p>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4">
              <h3 className="font-bold">Solar Energy</h3>
              <p className="text-sm">Clean, renewable power solutions</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4">
              <h3 className="font-bold">Food Systems</h3>
              <p className="text-sm">Local, sustainable agriculture</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm p-4">
              <h3 className="font-bold">Water Access</h3>
              <p className="text-sm">Clean water management</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side (auth forms) */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold">
              {activeTab === "login" ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-muted-foreground mt-2">
              {activeTab === "login" 
                ? "Sign in to access your dashboard" 
                : "Join the regenerative movement"}
            </p>
          </div>
          
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-8">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
