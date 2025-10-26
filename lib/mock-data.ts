import {
  StatCard,
  ChartDataPoint,
  TrafficSource,
  ActivityItem,
  ContentItem,
  DeviceStats,
  ServerMetric,
  Task,
  CalendarEvent,
} from "@/types/dashboard";

export const mockStats: StatCard[] = [
  {
    id: "1",
    label: "Total Revenue",
    value: "$45,231",
    change: 20.1,
    trend: "up",
  },
  {
    id: "2",
    label: "Active Users",
    value: "2,345",
    change: 12.5,
    trend: "up",
  },
  {
    id: "3",
    label: "Total Content",
    value: "1,234",
    change: 8.2,
    trend: "up",
  },
  {
    id: "4",
    label: "Conversion Rate",
    value: "3.24%",
    change: -2.3,
    trend: "down",
  },
];

export const mockRevenueData: ChartDataPoint[] = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
  { name: "Jul", value: 7000 },
];

export const mockTrafficSources: TrafficSource[] = [
  { source: "Organic Search", value: 4250, percentage: 42.5, color: "hsl(var(--chart-1))" },
  { source: "Direct", value: 2850, percentage: 28.5, color: "hsl(var(--chart-2))" },
  { source: "Social Media", value: 1900, percentage: 19.0, color: "hsl(var(--chart-3))" },
  { source: "Referral", value: 1000, percentage: 10.0, color: "hsl(var(--chart-4))" },
];

export const mockActivities: ActivityItem[] = [
  {
    id: "1",
    user: "John Doe",
    action: "Created new article 'Getting Started with Next.js'",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
    type: "create",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "Updated user profile",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    type: "update",
  },
  {
    id: "3",
    user: "Mike Johnson",
    action: "Deleted old content",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: "delete",
  },
  {
    id: "4",
    user: "Sarah Williams",
    action: "Logged in to dashboard",
    timestamp: new Date(Date.now() - 1000 * 60 * 45),
    type: "login",
  },
  {
    id: "5",
    user: "Tom Brown",
    action: "Published article 'Advanced React Patterns'",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    type: "create",
  },
];

export const mockContent: ContentItem[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    status: "published",
    author: "John Doe",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-20"),
    views: 1234,
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    status: "draft",
    author: "Jane Smith",
    createdAt: new Date("2024-01-18"),
    updatedAt: new Date("2024-01-18"),
    views: 0,
  },
  {
    id: "3",
    title: "Building a CMS Dashboard",
    status: "published",
    author: "Mike Johnson",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-22"),
    views: 2345,
  },
  {
    id: "4",
    title: "React Performance Optimization",
    status: "published",
    author: "Sarah Williams",
    createdAt: new Date("2024-01-05"),
    updatedAt: new Date("2024-01-15"),
    views: 3456,
  },
  {
    id: "5",
    title: "Tailwind CSS Best Practices",
    status: "archived",
    author: "Tom Brown",
    createdAt: new Date("2023-12-20"),
    updatedAt: new Date("2024-01-01"),
    views: 987,
  },
];

export const mockDeviceStats: DeviceStats[] = [
  { device: "Desktop", users: 5234, percentage: 52.3, color: "hsl(var(--chart-1))" },
  { device: "Mobile", users: 3421, percentage: 34.2, color: "hsl(var(--chart-2))" },
  { device: "Tablet", users: 1345, percentage: 13.5, color: "hsl(var(--chart-3))" },
];

export const mockServerMetrics: ServerMetric[] = [
  { name: "CPU Usage", value: 45, status: "healthy", unit: "%" },
  { name: "Memory", value: 68, status: "warning", unit: "%" },
  { name: "Disk Space", value: 32, status: "healthy", unit: "%" },
  { name: "Network", value: 89, status: "critical", unit: "Mbps" },
];

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Update landing page",
    description: "Redesign the hero section with new marketing copy",
    status: "in-progress",
    priority: "high",
    assignee: "John Doe",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: "2",
    title: "Fix navigation bug",
    description: "Mobile menu not closing on route change",
    status: "todo",
    priority: "medium",
    assignee: "Jane Smith",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5),
  },
  {
    id: "3",
    title: "Add user authentication",
    description: "Implement JWT-based authentication system",
    status: "todo",
    priority: "high",
    assignee: "Mike Johnson",
  },
  {
    id: "4",
    title: "Write documentation",
    description: "Complete API documentation for all endpoints",
    status: "done",
    priority: "low",
    assignee: "Sarah Williams",
  },
];

export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Team Meeting",
    start: new Date(2024, 0, 25, 10, 0),
    end: new Date(2024, 0, 25, 11, 0),
    color: "hsl(var(--chart-1))",
    description: "Weekly team sync",
  },
  {
    id: "2",
    title: "Product Launch",
    start: new Date(2024, 0, 28, 14, 0),
    end: new Date(2024, 0, 28, 16, 0),
    color: "hsl(var(--chart-2))",
    description: "Launch new feature",
  },
  {
    id: "3",
    title: "Client Call",
    start: new Date(2024, 0, 30, 15, 0),
    end: new Date(2024, 0, 30, 16, 0),
    color: "hsl(var(--chart-3))",
    description: "Quarterly review with client",
  },
];
