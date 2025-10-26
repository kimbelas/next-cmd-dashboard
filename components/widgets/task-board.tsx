"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/types/dashboard";
import { cn } from "@/lib/utils/cn";

interface TaskBoardProps {
  tasks: Task[];
}

const priorityColors = {
  low: "secondary",
  medium: "warning",
  high: "destructive",
} as const;

const statusLabels = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

export function TaskBoard({ tasks }: TaskBoardProps) {
  const groupedTasks = tasks.reduce((acc, task) => {
    if (!acc[task.status]) {
      acc[task.status] = [];
    }
    acc[task.status].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Board</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(statusLabels).map(([status, label]) => (
            <div key={status} className="space-y-3">
              <h4 className="font-semibold text-sm text-muted-foreground">{label}</h4>
              <div className="space-y-2">
                {groupedTasks[status]?.map((task) => (
                  <div
                    key={task.id}
                    className="rounded-lg border bg-card p-3 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-sm font-medium">{task.title}</h5>
                      <Badge variant={priorityColors[task.priority]} className="text-xs">
                        {task.priority}
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {task.description}
                    </p>
                    {task.assignee && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                          {task.assignee.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="text-xs text-muted-foreground">{task.assignee}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
