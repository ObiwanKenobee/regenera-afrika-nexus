
import React from 'react';
import { RoleDashboard } from '@/components/dashboard/RoleDashboard';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ResourceUsageChart } from '@/components/dashboard/ResourceUsageChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AdminDashboard = () => {
  const adminStats = [
    { title: 'System Uptime', value: '99.8%', change: '+0.1% from last month', changeType: 'positive' as const },
    { title: 'Active Users', value: '2,543', change: '+105 this month', changeType: 'positive' as const },
    { title: 'API Requests', value: '45.2K', change: '+12% from average', changeType: 'positive' as const },
    { title: 'Error Rate', value: '0.03%', change: '-0.01% from last week', changeType: 'positive' as const }
  ];

  return (
    <RoleDashboard expectedRole="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">System Administration</h1>
          <p className="text-muted-foreground mt-1">
            Monitor and manage platform performance and security
          </p>
        </div>

        <StatsGrid stats={adminStats} />

        <Tabs defaultValue="overview" className="w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ResourceUsageChart 
                  title="System Resource Utilization"
                  data={[
                    { name: '00:00', value: 45 },
                    { name: '04:00', value: 35 },
                    { name: '08:00', value: 70 },
                    { name: '12:00', value: 85 },
                    { name: '16:00', value: 75 },
                    { name: '20:00', value: 55 },
                    { name: '23:59', value: 45 }
                  ]}
                  color="#f97316"
                  unit="%"
                />
              </div>
              <ActivityFeed 
                title="System Events"
                activities={[
                  { id: '1', title: 'Database Backup', timestamp: '1 hour ago', status: 'Completed', type: 'system' },
                  { id: '2', title: 'Security Scan', timestamp: '3 hours ago', status: 'In Progress', type: 'security' },
                  { id: '3', title: 'API Update', timestamp: '1 day ago', status: 'Scheduled', type: 'maintenance' },
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="system">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ProjectCard
                title="Platform Security Audit"
                description="Comprehensive security review of all systems"
                progress={85}
                status="active"
                lastUpdated="Updated 1h ago"
              />
              <ProjectCard
                title="Database Optimization"
                description="Improving data structure and query performance"
                progress={70}
                status="active"
                lastUpdated="Updated 2h ago"
              />
              <ProjectCard
                title="API Integration Framework"
                description="New integration points for partner organizations"
                progress={30}
                status="pending"
                lastUpdated="Updated 3h ago"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </RoleDashboard>
  );
};

export default AdminDashboard;
