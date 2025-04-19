
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";

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

  return (
    <form onSubmit={handleLogin} className="space-y-4 w-full max-w-sm">
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
      
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t"></div>
        </div>
        <div className="relative bg-background px-4 text-sm text-muted-foreground">
          Or continue with
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="st-button-outline">
          Google
        </Button>
        <Button variant="outline" className="st-button-outline">
          M-Pesa
        </Button>
      </div>
    </form>
  );
};
