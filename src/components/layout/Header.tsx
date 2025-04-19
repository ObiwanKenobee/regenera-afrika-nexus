
import React from 'react';
import { Bell, Settings, UserCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { roleLabels } from '@/lib/constants';
import { toast } from "sonner";

interface HeaderProps {
  userRole: 'resident' | 'ngo' | 'government' | 'admin';
}

export const Header: React.FC<HeaderProps> = ({ userRole }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      // Clear local storage
      localStorage.removeItem('userRole');
      
      // Show success message
      toast.success("Logged out successfully");
      
      // Redirect to auth page
      navigate('/auth');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center">
        <h2 className="text-lg md:text-xl font-bold hidden md:block">
          {userRole === 'resident' ? 'Community Dashboard' : 
           userRole === 'ngo' ? 'NGO Management Console' :
           userRole === 'government' ? 'Government Oversight Portal' :
           'Admin Control Panel'}
        </h2>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-st-coral"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 md:pr-4">
              <UserCircle className="h-6 w-6" />
              <span className="hidden md:block font-medium">My Account</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col">
                <span>John Doe</span>
                <span className="text-xs text-muted-foreground">{roleLabels[userRole]}</span>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <UserCircle className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

