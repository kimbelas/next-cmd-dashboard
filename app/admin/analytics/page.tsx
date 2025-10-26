"use client";

import { RevenueChart } from "@/components/widgets/revenue-chart";
import { TrafficSources } from "@/components/widgets/traffic-sources";
import { DeviceBreakdown } from "@/components/widgets/device-breakdown";
import { mockRevenueData, mockTrafficSources, mockDeviceStats } from "@/lib/mock-data";
import { StatsCardWidget } from "@/components/widgets/stats-card";

export default function AnalyticsPage() {
  const analyticsStats = [
    { id: "1", label: "Page Views", value: "124.5K", change: 15.3, trend: "up" as const },
    { id: "2", label: "Bounce Rate", value: "42.3%", change: -5.2, trend: "down" as const },
    { id: "3", label: "Avg Session", value: "3m 24s", change: 8.1, trend: "up" as const },
    { id: "4", label: "New Visitors", value: "8,432", change: 12.7, trend: "up" as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Track your website performance and user behavior.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {analyticsStats.map((stat) => (
          <StatsCardWidget key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart data={mockRevenueData} />
        <TrafficSources data={mockTrafficSources} />
      </div>

      <DeviceBreakdown data={mockDeviceStats} />
    </div>
  );
}
