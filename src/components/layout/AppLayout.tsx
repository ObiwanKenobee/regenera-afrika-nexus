
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ThemeToggle } from '../ui/theme-toggle';
import { AlertCircle } from 'lucide-react';

interface AppLayoutProps {
  children: React.ReactNode;
  role?: 'resident' | 'ngo' | 'government' | 'admin';
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, role = 'resident' }) => {
  const token = localStorage.getItem('token');
  const isDemo = token?.startsWith('demo-token');

  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={role} />
      <div className="flex-1 flex flex-col">
        <Header userRole={role} />
        {isDemo && (
          <div className="bg-yellow-50 border-b border-yellow-200 py-2">
            <div className="container flex items-center gap-2 text-sm text-yellow-800">
              <AlertCircle className="w-4 h-4" />
              <span>
                Demo Mode Active - Some features are disabled for demonstration purposes
              </span>
            </div>
          </div>
        )}
        <main className="flex-1 p-4 md:p-8 bg-background overflow-y-auto">
          {children}
        </main>
        <footer className="p-4 border-t text-center text-sm text-muted-foreground">
          <div className="flex justify-between items-center">
            <div>
              &copy; {new Date().getFullYear()} SlumTech Regenera
            </div>
            <ThemeToggle />
          </div>
        </footer>
      </div>
    </div>
  );
};
