
import React from 'react';
import { Button } from "@/components/ui/button";
import { demoUsers, type DemoUser } from '@/types/demo';
import { AlertCircle, Home, Users, Building, Shield } from 'lucide-react';

interface DemoLoginProps {
  onDemoLogin: (user: DemoUser) => void;
}

export const DemoLogin: React.FC<DemoLoginProps> = ({ onDemoLogin }) => {
  const roleDescriptions = {
    resident: "Access community resources, solar credits, and educational content",
    ngo: "Manage projects, track impact metrics, and coordinate community initiatives",
    government: "Monitor regulatory compliance and urban development initiatives",
    admin: "Full system access with complete platform management capabilities"
  };

  const roleIcons = {
    resident: Home,
    ngo: Users,
    government: Building,
    admin: Shield
  };

  return (
    <div className="space-y-4 mt-8">
      <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
        <AlertCircle className="w-4 h-4 text-yellow-600" />
        <p className="text-sm text-yellow-700">Demo accounts have limited functionality</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Object.values(demoUsers).map((user) => {
          const Icon = roleIcons[user.role];
          return (
            <Button
              key={user.id}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center gap-2"
              onClick={() => onDemoLogin(user)}
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-1">
                <Icon className="w-5 h-5" />
              </div>
              <span className="font-semibold">{user.name}</span>
              <p className="text-xs text-muted-foreground text-center px-2">
                {roleDescriptions[user.role]}
              </p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
