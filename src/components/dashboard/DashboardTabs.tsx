
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DashboardTabsProps {
  children: React.ReactNode;
}

export const DashboardTabs: React.FC<DashboardTabsProps> = ({ children }) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full overflow-x-auto flex-wrap justify-start">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="utilities">Utilities</TabsTrigger>
        <TabsTrigger value="training">Training</TabsTrigger>
        <TabsTrigger value="community">Community</TabsTrigger>
        <TabsTrigger value="wallet">Wallet</TabsTrigger>
        <TabsTrigger value="calendar">Calendar</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};
