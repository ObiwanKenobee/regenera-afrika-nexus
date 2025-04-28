
import React from 'react';

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mt-1 text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};
