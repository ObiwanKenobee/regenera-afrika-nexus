
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Activity {
  id: string;
  title: string;
  timestamp: string;
  status: string;
  type: string;
}

interface ActivityFeedProps {
  activities: Activity[];
  title: string;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities, title }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 overflow-auto max-h-[400px]">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between border-b pb-3">
            <div className="flex flex-col">
              <span className="font-medium">{activity.title}</span>
              <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
            </div>
            <Badge variant="outline">
              {activity.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
