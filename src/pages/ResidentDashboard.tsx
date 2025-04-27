
import React from 'react';
import { RoleDashboard } from '@/components/dashboard/RoleDashboard';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ResourceUsageChart } from '@/components/dashboard/ResourceUsageChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ResidentDashboard = () => {
  const residentStats = [
    { title: 'Solar Credits', value: '320 kWh', change: '+12% from last month', changeType: 'positive' as const },
    { title: 'Training Progress', value: '4/12', change: '33% complete', changeType: 'neutral' as const },
    { title: 'Community Events', value: '6', change: '2 upcoming', changeType: 'positive' as const },
    { title: 'Resource Savings', value: '$45', change: '+8%', changeType: 'positive' as const }
  ];

  return (
    <RoleDashboard expectedRole="resident">
      <div className="space-y-4 md:space-y-6 p-4 md:p-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Resident Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Monitor your resources and stay connected with community activities
          </p>
        </div>

        <StatsGrid stats={residentStats} />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full overflow-x-auto flex-wrap justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="utilities">Utilities</TabsTrigger>
            <TabsTrigger value="training">Training</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2 space-y-4">
                <ResourceUsageChart 
                  title="Solar Energy Usage"
                  data={[
                    { name: 'Mon', value: 30 },
                    { name: 'Tue', value: 45 },
                    { name: 'Wed', value: 35 },
                    { name: 'Thu', value: 50 },
                    { name: 'Fri', value: 40 },
                    { name: 'Sat', value: 35 },
                    { name: 'Sun', value: 30 }
                  ]}
                  color="#10b981"
                  unit="kWh"
                />
              </div>
              <div className="w-full">
                <ActivityFeed 
                  title="Recent Activity"
                  activities={[
                    { id: '1', title: 'Solar Credits Earned', timestamp: '2 hours ago', status: 'Completed', type: 'credit' },
                    { id: '2', title: 'Training Module 3', timestamp: '5 hours ago', status: 'In Progress', type: 'training' },
                    { id: '3', title: 'Community Event', timestamp: '1 day ago', status: 'Upcoming', type: 'event' },
                  ]}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="utilities">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <ProjectCard
                title="Solar Panel System"
                description="Your home solar installation and energy production"
                progress={75}
                status="active"
                lastUpdated="Updated 2h ago"
              />
              <ProjectCard
                title="Water Conservation"
                description="Smart water management and usage tracking"
                progress={60}
                status="active"
                lastUpdated="Updated 1h ago"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </RoleDashboard>
  );
};

export default ResidentDashboard;
