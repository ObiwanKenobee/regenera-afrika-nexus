
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { toast } from 'sonner';

interface RoleDashboardProps {
  expectedRole: 'resident' | 'ngo' | 'government' | 'admin';
  children: React.ReactNode;
}

export const RoleDashboard: React.FC<RoleDashboardProps> = ({ expectedRole, children }) => {
  const location = useLocation();
  const userRole = localStorage.getItem('userRole');
  
  if (!userRole) {
    toast.error("Please sign in to access the dashboard");
    return <Redirect to="/auth" />;
  }

  if (userRole !== expectedRole) {
    toast.error(`You need ${expectedRole} permissions to access this page`);
    return <Redirect to={`/${userRole}-dashboard`} />;
  }

  return <AppLayout role={expectedRole}>{children}</AppLayout>;
};
