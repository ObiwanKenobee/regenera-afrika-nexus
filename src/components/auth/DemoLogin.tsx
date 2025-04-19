
import React from 'react';
import { Button } from "@/components/ui/button";
import { demoUsers, type DemoUser } from '@/types/demo';
import { AlertCircle } from 'lucide-react';

interface DemoLoginProps {
  onDemoLogin: (user: DemoUser) => void;
}

export const DemoLogin: React.FC<DemoLoginProps> = ({ onDemoLogin }) => {
  return (
    <div className="space-y-4 mt-8">
      <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
        <AlertCircle className="w-4 h-4 text-yellow-600" />
        <p className="text-sm text-yellow-700">Demo accounts have limited functionality</p>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {Object.values(demoUsers).map((user) => (
          <Button
            key={user.id}
            variant="outline"
            className="h-auto py-4 flex flex-col items-center gap-1"
            onClick={() => onDemoLogin(user)}
          >
            <span className="font-semibold">{user.name}</span>
            <span className="text-xs text-muted-foreground">Preview Account</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
