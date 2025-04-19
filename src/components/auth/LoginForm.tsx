
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { DemoLogin } from './DemoLogin';
import { type DemoUser } from '@/types/demo';
import { Separator } from '@/components/ui/separator';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, hardcode some users
      if (email.includes('resident')) {
        toast.success("Welcome back, resident!");
        navigate('/dashboard');
        localStorage.setItem('userRole', 'resident');
      } else if (email.includes('ngo')) {
        toast.success("Welcome back, NGO staff!");
        navigate('/dashboard');
        localStorage.setItem('userRole', 'ngo');
      } else if (email.includes('gov')) {
        toast.success("Welcome back, government official!");
        navigate('/dashboard');
        localStorage.setItem('userRole', 'government');
      } else if (email.includes('admin')) {
        toast.success("Welcome back, administrator!");
        navigate('/dashboard');
        localStorage.setItem('userRole', 'admin');
      } else {
        toast.error("Invalid login credentials");
      }
    }, 1000);
  };

  const handleDemoLogin = (demoUser: DemoUser) => {
    localStorage.setItem('userRole', demoUser.role);
    localStorage.setItem('token', demoUser.token);
    toast.success(`Welcome to the demo, ${demoUser.name}!`);
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 st-input"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-10 st-input"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={18} className="text-muted-foreground" />
              ) : (
                <Eye size={18} className="text-muted-foreground" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="flex justify-between text-sm">
          <a href="#" className="text-st-teal hover:underline">
            Forgot password?
          </a>
        </div>
        
        <Button
          type="submit"
          className="w-full st-button st-button-primary"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or try a demo account
          </span>
        </div>
      </div>

      <DemoLogin onDemoLogin={handleDemoLogin} />
    </div>
  );
};
