"use client";

import { StatsCardWidget } from "@/components/widgets/stats-card";
import { RevenueChart } from "@/components/widgets/revenue-chart";
import { TrafficSources } from "@/components/widgets/traffic-sources";
import { ActivityFeed } from "@/components/widgets/activity-feed";
import { ContentTable } from "@/components/widgets/content-table";
import { DeviceBreakdown } from "@/components/widgets/device-breakdown";
import { ServerStatus } from "@/components/widgets/server-status";
import { TaskBoard } from "@/components/widgets/task-board";
import {
  mockStats,
  mockRevenueData,
  mockTrafficSources,
  mockActivities,
  mockContent,
  mockDeviceStats,
  mockServerMetrics,
  mockTasks,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your platform today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat) => (
          <StatsCardWidget key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart data={mockRevenueData} />
        <TrafficSources data={mockTrafficSources} />
      </div>

      {/* Activity and Devices */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ActivityFeed activities={mockActivities} />
        </div>
        <DeviceBreakdown data={mockDeviceStats} />
      </div>

      {/* Content Table */}
      <ContentTable content={mockContent} />

      {/* Server Status and Task Board */}
      <div className="grid gap-6 lg:grid-cols-3">
        <ServerStatus metrics={mockServerMetrics} />
        <div className="lg:col-span-2">
          <TaskBoard tasks={mockTasks} />
        </div>
      </div>
    </div>
  );
}
