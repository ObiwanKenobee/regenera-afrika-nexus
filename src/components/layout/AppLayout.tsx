
import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { ThemeToggle } from '../ui/theme-toggle';

interface AppLayoutProps {
  children: React.ReactNode;
  role?: 'resident' | 'ngo' | 'government' | 'admin';
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, role = 'resident' }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar userRole={role} />
      <div className="flex-1 flex flex-col">
        <Header userRole={role} />
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
