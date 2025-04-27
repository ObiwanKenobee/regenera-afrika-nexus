
import React from 'react';
import { RoleDashboard } from '@/components/dashboard/RoleDashboard';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ResourceUsageChart } from '@/components/dashboard/ResourceUsageChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NgoDashboard = () => {
  const ngoStats = [
    { title: 'Active Projects', value: '12', change: '+2 this month', changeType: 'positive' as const },
    { title: 'Beneficiaries', value: '1,243', change: '+89 this month', changeType: 'positive' as const },
    { title: 'Funding Used', value: '76%', change: '-3% to target', changeType: 'negative' as const },
    { title: 'Impact Score', value: '8.4/10', change: '+0.6 this quarter', changeType: 'positive' as const }
  ];

  return (
    <RoleDashboard expectedRole="ngo">
      <div className="space-y-4 md:space-y-6 p-4 md:p-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">NGO Dashboard</h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Track project performance and community engagement
          </p>
        </div>

        <StatsGrid stats={ngoStats} />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full overflow-x-auto flex-wrap justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="lg:col-span-2 space-y-4">
                <ResourceUsageChart 
                  title="Project Performance"
                  data={[
                    { name: 'Week 1', value: 85 },
                    { name: 'Week 2', value: 75 },
                    { name: 'Week 3', value: 88 },
                    { name: 'Week 4', value: 92 }
                  ]}
                  color="#8b5cf6"
                  unit="%"
                />
              </div>
              <div className="w-full">
                <ActivityFeed 
                  title="Recent Updates"
                  activities={[
                    { id: '1', title: 'Solar Grid Installation', timestamp: '1 hour ago', status: 'Completed', type: 'project' },
                    { id: '2', title: 'Community Training', timestamp: '3 hours ago', status: 'In Progress', type: 'training' },
                    { id: '3', title: 'Impact Assessment', timestamp: '1 day ago', status: 'Scheduled', type: 'assessment' },
                  ]}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <ProjectCard
                title="Kibera Solar Grid"
                description="Implementing solar microgrids across Kibera"
                progress={45}
                status="active"
                lastUpdated="Updated 1h ago"
              />
              <ProjectCard
                title="Water Filtration"
                description="Clean water solutions for community centers"
                progress={70}
                status="active"
                lastUpdated="Updated 3h ago"
              />
              <ProjectCard
                title="Youth Tech Education"
                description="Digital literacy program for youth"
                progress={85}
                status="active"
                lastUpdated="Updated 2h ago"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </RoleDashboard>
  );
};

export default NgoDashboard;
