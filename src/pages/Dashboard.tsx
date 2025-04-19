
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { toast } from "sonner";
import { dashboardMetrics } from '@/lib/constants';

const Dashboard = () => {
  const [userRole, setUserRole] = useState<'resident' | 'ngo' | 'government' | 'admin'>('resident');
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('userRole') as 'resident' | 'ngo' | 'government' | 'admin';
    
    if (!storedRole) {
      // If no role is found, redirect to auth page
      toast.error("Please sign in to access the dashboard");
      navigate('/');
    } else {
      setUserRole(storedRole);
    }
  }, [navigate]);

  // Get metrics for the current user role
  const metrics = dashboardMetrics[userRole];

  return (
    <AppLayout role={userRole}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            {userRole === 'resident' 
              ? 'View your community resources and activity'
              : userRole === 'ngo'
              ? 'Monitor project performance and community engagement'
              : userRole === 'government'
              ? 'Track impact metrics and compliance across clusters'
              : 'System overview and management console'}
          </p>
        </div>
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Placeholder charts and content based on user role */}
          <div className="st-card p-6 min-h-[300px]">
            <h3 className="font-bold text-lg mb-4">
              {userRole === 'resident' ? 'Resource Usage' : 
               userRole === 'ngo' ? 'Project Performance' :
               userRole === 'government' ? 'Cluster Comparison' :
               'System Status'}
            </h3>
            <div className="h-[240px] flex items-center justify-center border rounded-lg border-dashed">
              <p className="text-muted-foreground">Chart visualization will appear here</p>
            </div>
          </div>

          <div className="st-card p-6 min-h-[300px]">
            <h3 className="font-bold text-lg mb-4">
              {userRole === 'resident' ? 'Recent Activity' : 
               userRole === 'ngo' ? 'Community Engagement' :
               userRole === 'government' ? 'Compliance Overview' :
               'Recent Actions'}
            </h3>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between border-b pb-2">
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {userRole === 'resident' ? `Activity ${item}` : 
                       userRole === 'ngo' ? `Project Update ${item}` :
                       userRole === 'government' ? `Report ${item}` :
                       `System Event ${item}`}
                    </span>
                    <span className="text-sm text-muted-foreground">2 hours ago</span>
                  </div>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">
                    {userRole === 'resident' ? 'Completed' : 
                     userRole === 'ngo' ? 'Updated' :
                     userRole === 'government' ? 'Submitted' :
                     'Processed'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="st-card p-6">
          <h3 className="font-bold text-lg mb-4">
            {userRole === 'resident' ? 'Community Projects' : 
             userRole === 'ngo' ? 'Active Projects' :
             userRole === 'government' ? 'Cluster Overview' :
             'System Resources'}
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Progress</th>
                  <th className="text-left py-3 px-4">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4">
                      {userRole === 'resident' ? `Solar Grid ${item}` : 
                       userRole === 'ngo' ? `Community Garden ${item}` :
                       userRole === 'government' ? `Kibera Cluster ${item}` :
                       `Database ${item}`}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                        item % 3 === 0 ? 'bg-yellow-100 text-yellow-800' : 
                        item % 2 === 0 ? 'bg-green-100 text-green-800' : 
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {item % 3 === 0 ? 'In Progress' : 
                         item % 2 === 0 ? 'Active' : 
                         'Planned'}
                      </span>
                    </td>
                    <td className="py-3 px-4">{(item * 17) % 100}%</td>
                    <td className="py-3 px-4">2023-04-{10 + item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
