
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
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
    return <Navigate to="/auth" replace />;
  }

  if (userRole !== expectedRole) {
    toast.error(`You need ${expectedRole} permissions to access this page`);
    return <Navigate to={`/${userRole}-dashboard`} replace />;
  }

  return <AppLayout role={expectedRole}>{children}</AppLayout>;
};

