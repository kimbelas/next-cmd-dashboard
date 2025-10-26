"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerMetric } from "@/types/dashboard";
import { cn } from "@/lib/utils/cn";
import { AlertCircle, AlertTriangle, CheckCircle } from "lucide-react";

interface ServerStatusProps {
  metrics: ServerMetric[];
}

const statusConfig = {
  healthy: {
    icon: CheckCircle,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
  },
  warning: {
    icon: AlertTriangle,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
  },
  critical: {
    icon: AlertCircle,
    color: "text-red-500",
    bgColor: "bg-red-100 dark:bg-red-900/20",
  },
};

export function ServerStatus({ metrics }: ServerStatusProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics.map((metric) => {
          const config = statusConfig[metric.status];
          const Icon = config.icon;
          return (
            <div key={metric.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("rounded-full p-1", config.bgColor)}>
                    <Icon className={cn("h-3 w-3", config.color)} />
                  </div>
                  <span className="text-sm font-medium">{metric.name}</span>
                </div>
                <span className="text-sm font-bold">
                  {metric.value}{metric.unit}
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className={cn(
                    "h-full transition-all",
                    metric.status === "healthy" && "bg-green-500",
                    metric.status === "warning" && "bg-yellow-500",
                    metric.status === "critical" && "bg-red-500"
                  )}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
