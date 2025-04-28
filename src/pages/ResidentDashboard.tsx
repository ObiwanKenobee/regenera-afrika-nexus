
import React from 'react';
import { RoleDashboard } from '@/components/dashboard/RoleDashboard';
import { StatsGrid } from '@/components/dashboard/StatsGrid';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { ResourceUsageChart } from '@/components/dashboard/ResourceUsageChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wallet, Users, BookOpen, Leaf, CalendarDays } from "lucide-react";

const ResidentDashboard = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
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
            <TabsTrigger value="wallet">Wallet</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-green-500" />
                    Solar Panel System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Daily Production</span>
                      <Badge variant="secondary">8.2 kWh</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monthly Savings</span>
                      <Badge variant="secondary">$45.00</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <ProjectCard
                title="Water Conservation"
                description="Smart water management system"
                progress={75}
                status="active"
                lastUpdated="Updated 2h ago"
              />
              
              <ProjectCard
                title="Energy Monitor"
                description="Real-time energy consumption tracking"
                progress={60}
                status="active"
                lastUpdated="Updated 1h ago"
              />
            </div>
          </TabsContent>

          <TabsContent value="training">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    Current Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Completed Modules</span>
                      <Badge>4/12</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Next Module</span>
                      <Badge variant="secondary">Solar Maintenance</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ProjectCard
                title="Solar Panel Basics"
                description="Learn about solar energy fundamentals"
                progress={100}
                status="completed"
                lastUpdated="Completed"
              />

              <ProjectCard
                title="Water Conservation"
                description="Water-saving techniques and practices"
                progress={80}
                status="in-progress"
                lastUpdated="In Progress"
              />
            </div>
          </TabsContent>

          <TabsContent value="community">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-500" />
                    Community Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Upcoming Events</span>
                      <Badge>2</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Your Participation</span>
                      <Badge variant="secondary">Active Member</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ProjectCard
                title="Community Garden"
                description="Join our sustainable gardening initiative"
                progress={40}
                status="active"
                lastUpdated="Updated today"
              />

              <ProjectCard
                title="Recycling Drive"
                description="Monthly community recycling event"
                progress={0}
                status="upcoming"
                lastUpdated="Starts next week"
              />
            </div>
          </TabsContent>

          <TabsContent value="wallet">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-yellow-500" />
                    Solar Credits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Available Credits</span>
                      <Badge>320 kWh</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Monthly Earnings</span>
                      <Badge variant="secondary">+45 kWh</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <ProjectCard
                title="Credit History"
                description="View your earning history"
                progress={100}
                status="viewable"
                lastUpdated="Real-time"
              />

              <ProjectCard
                title="Marketplace"
                description="Trade or redeem your credits"
                progress={100}
                status="active"
                lastUpdated="Real-time"
              />
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-blue-500" />
                    Community Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border w-full"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <ActivityFeed 
                    title=""
                    activities={[
                      { id: '1', title: 'Community Meeting', timestamp: 'Tomorrow, 2 PM', status: 'Upcoming', type: 'event' },
                      { id: '2', title: 'Solar Workshop', timestamp: 'Next Week', status: 'Scheduled', type: 'training' },
                      { id: '3', title: 'Garden Day', timestamp: 'In 2 weeks', status: 'Scheduled', type: 'event' },
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </RoleDashboard>
  );
};

export default ResidentDashboard;
