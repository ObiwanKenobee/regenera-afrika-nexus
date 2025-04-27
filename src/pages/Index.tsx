
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userRole = localStorage.getItem('userRole');
    
    if (userRole) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          SlumTech Regenera | Sustainable Innovation for All
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transforming informal settlements through regenerative technology solutions.
          Solar energy, smart sanitation, food forests, and eco-housing for resilient communities.
        </p>
        <p className="mt-4 text-muted-foreground">Redirecting to platform...</p>
      </div>
    </div>
  );
};

export default Index;
