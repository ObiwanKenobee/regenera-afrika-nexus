
import React from 'react';
import { RoleDashboard } from '@/components/dashboard/RoleDashboard';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ResourceUsageChart } from '@/components/dashboard/ResourceUsageChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GovernmentDashboard = () => {
  const governmentStats = [
    { title: 'Compliance Rate', value: '94%', change: '+2% this quarter', changeType: 'positive' as const },
    { title: 'Projects Monitored', value: '37', change: '8 pending review', changeType: 'neutral' as const },
    { title: 'Policy Implementation', value: '82%', change: '+5% to target', changeType: 'positive' as const },
    { title: 'Resource Allocation', value: '65%', change: '-10% from budget', changeType: 'negative' as const }
  ];

  return (
    <RoleDashboard expectedRole="government">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Government Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor compliance and impact across urban development initiatives
          </p>
        </div>

        <StatsGrid stats={governmentStats} />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ResourceUsageChart 
                  title="Compliance Metrics"
                  data={[
                    { name: 'Q1', value: 88 },
                    { name: 'Q2', value: 92 },
                    { name: 'Q3', value: 94 },
                    { name: 'Q4', value: 96 }
                  ]}
                  color="#0ea5e9"
                  unit="%"
                />
              </div>
              <ActivityFeed 
                title="Compliance Events"
                activities={[
                  { id: '1', title: 'Policy Review', timestamp: '2 hours ago', status: 'Completed', type: 'review' },
                  { id: '2', title: 'Inspection', timestamp: '1 day ago', status: 'Scheduled', type: 'inspection' },
                  { id: '3', title: 'Report Filing', timestamp: '3 days ago', status: 'Pending', type: 'report' },
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="initiatives">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard
                title="Urban Planning Reform"
                description="Implementing sustainable urban planning guidelines"
                progress={60}
                status="active"
                lastUpdated="Updated today"
              />
              <ProjectCard
                title="Green Infrastructure"
                description="Eco-friendly infrastructure development"
                progress={45}
                status="active"
                lastUpdated="Updated 2d ago"
              />
              <ProjectCard
                title="Digital Integration"
                description="Smart city technology implementation"
                progress={75}
                status="active"
                lastUpdated="Updated 1d ago"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </RoleDashboard>
  );
};

export default GovernmentDashboard;
