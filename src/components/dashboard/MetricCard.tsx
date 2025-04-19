
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor = "text-st-green",
  className,
}) => {
  const isPositiveChange = change?.startsWith('+');
  const isNegativeChange = change?.startsWith('-');

  return (
    <div className={cn("st-card p-6", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          
          {change && (
            <p className={cn(
              "text-sm font-medium mt-1",
              isPositiveChange && "text-green-600",
              isNegativeChange && "text-red-600"
            )}>
              {change}
            </p>
          )}
        </div>
        
        <div className={cn(
          "rounded-full p-2",
          iconColor === "text-st-green" ? "bg-st-green/10" : 
          iconColor === "text-st-orange" ? "bg-st-orange/10" : 
          iconColor === "text-st-teal" ? "bg-st-teal/10" : 
          iconColor === "text-st-coral" ? "bg-st-coral/10" : 
          "bg-st-ochre/10"
        )}>
          <Icon className={cn("h-5 w-5", iconColor)} />
        </div>
      </div>
    </div>
  );
};
