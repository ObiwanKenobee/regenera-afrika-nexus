
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userRole = localStorage.getItem('userRole');
    
    if (userRole) {
      // If logged in, redirect to dashboard
      navigate('/dashboard');
    } else {
      // If not logged in, redirect to auth page
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">SlumTech Regenera</h1>
        <p className="text-xl text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
};

export default Index;
