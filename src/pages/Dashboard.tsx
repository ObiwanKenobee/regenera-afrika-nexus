
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ResourceUsageChart } from '@/components/dashboard/ResourceUsageChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { dashboardMetrics } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarPlus, Download, Filter } from 'lucide-react';

// Sample data for demo purposes
const generateResourceData = (base = 50, count = 7) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Day ${i + 1}`,
    value: base + Math.floor(Math.random() * 30)
  }));
};

const generateActivities = (roleType: string, count = 5) => {
  const types = {
    resident: ['Solar Credit', 'Training', 'Community Event', 'Resource Share'],
    ngo: ['Project Update', 'Community Outreach', 'Resource Allocation', 'Training Session'],
    government: ['Compliance Check', 'Report Submission', 'Policy Update', 'Cluster Review'],
    admin: ['System Update', 'User Management', 'Database Backup', 'Security Audit']
  };
  
  const statusOptions = ['Completed', 'Updated', 'In Progress', 'Scheduled', 'Reviewed'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `activity-${i}`,
    title: `${types[roleType as keyof typeof types][i % types[roleType as keyof typeof types].length]} ${i + 1}`,
    timestamp: `${Math.floor(Math.random() * 24) + 1} hours ago`,
    status: statusOptions[i % statusOptions.length],
    type: types[roleType as keyof typeof types][i % types[roleType as keyof typeof types].length]
  }));
};

const generateProjects = (roleType: string) => {
  const projects = {
    resident: [
      { title: 'Solar Panel Installation', description: 'Community rooftop solar installation project', progress: 65, status: 'active' as const },
      { title: 'Urban Garden Initiative', description: 'Vertical gardening project in community spaces', progress: 30, status: 'pending' as const },
      { title: 'Digital Skills Workshop', description: 'Weekly technology training sessions', progress: 80, status: 'active' as const }
    ],
    ngo: [
      { title: 'Kibera Solar Grid', description: 'Implementing solar microgrids across Kibera', progress: 45, status: 'active' as const },
      { title: 'Water Filtration System', description: 'Clean water solutions for community centers', progress: 70, status: 'active' as const },
      { title: 'Youth Tech Education', description: 'Digital literacy program for youth', progress: 85, status: 'active' as const },
      { title: 'Community Garden Expansion', description: 'Expanding food forests to new areas', progress: 25, status: 'planned' as const }
    ],
    government: [
      { title: 'Regulatory Framework Update', description: 'Updating policies for regenerative housing', progress: 60, status: 'pending' as const },
      { title: 'Slum Electrification Program', description: 'Coordinating off-grid energy solutions', progress: 40, status: 'active' as const },
      { title: 'Sanitation Infrastructure', description: 'Modern sanitation facilities deployment', progress: 55, status: 'active' as const },
      { title: 'Environmental Impact Assessment', description: 'Evaluating ecosystem impacts of initiatives', progress: 90, status: 'completed' as const }
    ],
    admin: [
      { title: 'Platform Security Audit', description: 'Comprehensive security review of all systems', progress: 85, status: 'active' as const },
      { title: 'Database Optimization', description: 'Improving data structure and query performance', progress: 70, status: 'active' as const },
      { title: 'API Integration Framework', description: 'New integration points for partner organizations', progress: 30, status: 'pending' as const },
      { title: 'User Analytics Dashboard', description: 'Enhanced metrics for usage patterns', progress: 50, status: 'active' as const }
    ]
  };
  
  return projects[roleType as keyof typeof projects].map((project, index) => ({
    ...project,
    lastUpdated: `${Math.floor(Math.random() * 7) + 1} days ago`
  }));
};

const roleStats = {
  resident: [
    { title: 'Solar Credits', value: '320 kWh', change: '+12% from last month', changeType: 'positive' as const },
    { title: 'Training Modules Completed', value: '4/12', change: '33% complete', changeType: 'neutral' as const },
    { title: 'Community Events', value: '6', change: '2 upcoming this week', changeType: 'positive' as const },
    { title: 'Resource Savings', value: '$45', change: '+8% from last month', changeType: 'positive' as const }
  ],
  ngo: [
    { title: 'Active Projects', value: '12', change: '+2 from last month', changeType: 'positive' as const },
    { title: 'Beneficiaries', value: '1,243', change: '+89 this month', changeType: 'positive' as const },
    { title: 'Funding Utilized', value: '76%', change: '-3% from target', changeType: 'negative' as const },
    { title: 'Impact Score', value: '8.4/10', change: '+0.6 from last quarter', changeType: 'positive' as const }
  ],
  government: [
    { title: 'Compliance Rate', value: '94%', change: '+2% from last quarter', changeType: 'positive' as const },
    { title: 'Projects Monitored', value: '37', change: '8 pending review', changeType: 'neutral' as const },
    { title: 'Policy Implementation', value: '82%', change: '+5% from target', changeType: 'positive' as const },
    { title: 'Resource Allocation', value: '65%', change: '-10% from budget', changeType: 'negative' as const }
  ],
  admin: [
    { title: 'System Uptime', value: '99.8%', change: '+0.1% from last month', changeType: 'positive' as const },
    { title: 'Active Users', value: '2,543', change: '+105 this month', changeType: 'positive' as const },
    { title: 'API Requests', value: '45.2K', change: '+12% from average', changeType: 'positive' as const },
    { title: 'Error Rate', value: '0.03%', change: '-0.01% from last week', changeType: 'positive' as const }
  ]
};

const Dashboard = () => {
  const [userRole, setUserRole] = useState<'resident' | 'ngo' | 'government' | 'admin'>('resident');
  const [projects, setProjects] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as 'resident' | 'ngo' | 'government' | 'admin';
    
    if (!storedRole) {
      // If no role is found, redirect to auth page
      toast.error("Please sign in to access the dashboard");
      navigate('/');
    } else {
      setUserRole(storedRole);
      // Set demo data based on role
      setProjects(generateProjects(storedRole));
      setActivities(generateActivities(storedRole, 8));
    }
  }, [navigate]);

  // Get metrics for the current user role
  const metrics = dashboardMetrics[userRole];
  
  // Generate resource data based on role
  const resourceData = {
    resident: generateResourceData(40, 7),
    ngo: generateResourceData(65, 14),
    government: generateResourceData(80, 30),
    admin: generateResourceData(120, 30)
  };

  const chartColors = {
    solar: "#10b981",
    water: "#0ea5e9",
    participation: "#f59e0b",
    performance: "#8b5cf6"
  };

  const getWelcomeMessage = () => {
    const messages = {
      resident: "Welcome to your community dashboard. Monitor your resources and stay connected with community activities.",
      ngo: "Welcome to your NGO management console. Track project performance and community engagement.",
      government: "Welcome to your oversight portal. Monitor compliance and impact across urban development initiatives.",
      admin: "Welcome to the system control panel. Monitor all platform activities and manage system resources."
    };
    
    return messages[userRole];
  };

  return (
    <AppLayout role={userRole}>
      <div className="space-y-6">
        {/* Welcome and overview section */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            {getWelcomeMessage()}
          </p>
        </div>
        
        {/* Stats Overview */}
        <StatsGrid stats={roleStats[userRole]} />
        
        {/* Main content area with tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1" />
                Export
              </Button>
              <Button size="sm">
                <CalendarPlus className="h-4 w-4 mr-1" />
                New Entry
              </Button>
            </div>
          </div>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="space-y-6">
            {/* Key metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  title={metric.label}
                  value={metric.value}
                  change={metric.change}
                  icon={metric.icon}
                  iconColor={
                    index === 0 ? "text-st-green" :
                    index === 1 ? "text-st-coral" :
                    index === 2 ? "text-st-teal" :
                    "text-st-ochre"
                  }
                />
              ))}
            </div>

            {/* Charts and Activity Feed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Resource Usage Chart */}
              <div className="md:col-span-2">
                <ResourceUsageChart
                  title={userRole === 'resident' ? "Solar Energy Usage (kWh)" : 
                         userRole === 'ngo' ? "Project Performance" :
                         userRole === 'government' ? "Compliance Metrics" :
                         "System Resource Utilization"}
                  data={resourceData[userRole]}
                  color={chartColors.solar}
                  unit={userRole === 'resident' ? " kWh" : "%"}
                />
              </div>
              
              {/* Recent Activity */}
              <div>
                <ActivityFeed 
                  title={userRole === 'resident' ? "Your Recent Activity" : 
                         userRole === 'ngo' ? "Team Updates" :
                         userRole === 'government' ? "Compliance Events" :
                         "System Events"}
                  activities={activities.slice(0, 5)} 
                />
              </div>
            </div>
            
            {/* Projects Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {userRole === 'resident' ? "Community Projects" : 
                   userRole === 'ngo' ? "Active Projects" :
                   userRole === 'government' ? "Development Initiatives" :
                   "System Projects"}
                </h2>
                <Button variant="link" size="sm">View All</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.slice(0, 3).map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    progress={project.progress}
                    status={project.status}
                    lastUpdated={project.lastUpdated}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Projects Tab Content */}
          <TabsContent value="projects">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  progress={project.progress}
                  status={project.status}
                  lastUpdated={project.lastUpdated}
                />
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab Content */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResourceUsageChart
                title={userRole === 'resident' ? "Solar Energy Usage" : 
                       userRole === 'ngo' ? "Community Engagement" :
                       userRole === 'government' ? "Compliance Metrics" :
                       "System Performance"}
                data={resourceData[userRole]}
                color={chartColors.solar}
                unit={userRole === 'resident' ? " kWh" : "%"}
              />
              
              <ResourceUsageChart
                title={userRole === 'resident' ? "Water Consumption" : 
                       userRole === 'ngo' ? "Resource Utilization" :
                       userRole === 'government' ? "Policy Implementation" :
                       "User Activity"}
                data={generateResourceData(30, 14)}
                color={chartColors.water}
                unit={userRole === 'resident' ? " L" : "%"}
              />
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Performance Insights</CardTitle>
                  <CardDescription>Key metrics and trends over time</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <p className="text-muted-foreground">Detailed analytics visualization will appear here</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Resources Tab Content */}
          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {userRole === 'resident' ? `Community Resource ${item}` : 
                       userRole === 'ngo' ? `Project Resource ${item}` :
                       userRole === 'government' ? `Policy Document ${item}` :
                       `System Resource ${item}`}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {userRole === 'resident' ? 'Access community resources and guides' : 
                       userRole === 'ngo' ? 'Project management documentation and tools' :
                       userRole === 'government' ? 'Regulatory frameworks and guidelines' :
                       'System documentation and resources'}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
