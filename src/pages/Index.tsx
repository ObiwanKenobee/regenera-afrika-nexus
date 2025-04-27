
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const userRole = localStorage.getItem('userRole');
    
    if (userRole) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleGetStarted = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background relative">
      <div className="absolute top-4 left-4 flex items-center">
        <div className="w-10 h-10 rounded-full bg-st-coral flex items-center justify-center">
          <Leaf size={20} className="text-white" />
        </div>
        <span className="ml-2 font-bold text-xl">SlumTech Regenera</span>
      </div>
      
      <div className="text-center max-w-3xl px-6 py-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Sustainable Innovation for All Communities
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transforming informal settlements through regenerative technology solutions.
          Solar energy, smart sanitation, food forests, and eco-housing for resilient communities
          in Kibera, Makoko, Khayelitsha and beyond.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Solar Energy</h3>
            <p className="text-sm text-muted-foreground">Affordable microgrids powering communities sustainably</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Smart Sanitation</h3>
            <p className="text-sm text-muted-foreground">Innovative waste-to-resource systems for better health</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Food Forests</h3>
            <p className="text-sm text-muted-foreground">Urban agriculture providing nutrition and livelihoods</p>
          </div>
          <div className="p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Eco Housing</h3>
            <p className="text-sm text-muted-foreground">Sustainable materials creating resilient communities</p>
          </div>
        </div>
        
        <Button size="lg" onClick={handleGetStarted} className="gap-2">
          Access Platform <ArrowRight size={16} />
        </Button>
        
        <p className="mt-8 text-sm text-muted-foreground">
          Empowering communities across Africa's largest informal settlements through
          regenerative technology and sustainable innovation.
        </p>
      </div>
    </div>
  );
};

export default Index;
