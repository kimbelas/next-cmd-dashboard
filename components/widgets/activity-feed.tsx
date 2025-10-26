"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ActivityItem } from "@/types/dashboard";
import { formatRelativeTime } from "@/lib/utils/format";
import { FileText, Edit, Trash2, LogIn } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const iconMap = {
  create: FileText,
  update: Edit,
  delete: Trash2,
  login: LogIn,
};

const colorMap = {
  create: "text-green-500",
  update: "text-blue-500",
  delete: "text-red-500",
  login: "text-purple-500",
};

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = iconMap[activity.type];
            return (
              <div key={activity.id} className="flex gap-3">
                <div
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted",
                    colorMap[activity.type]
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatRelativeTime(activity.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
