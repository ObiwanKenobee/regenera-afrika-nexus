
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { ResourceUsageChart } from '../ResourceUsageChart';
import { ActivityFeed } from '../ActivityFeed';

export const OverviewTab: React.FC = () => {
  return (
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
  );
};
