export type WidgetType =
  | 'stats'
  | 'chart'
  | 'traffic'
  | 'activity'
  | 'table'
  | 'map'
  | 'device'
  | 'server'
  | 'tasks'
  | 'calendar';

export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  priority?: 'high' | 'low';
}

export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
  icon?: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  date?: string;
}

export interface TrafficSource {
  source: string;
  value: number;
  percentage: number;
  color: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
  type: 'create' | 'update' | 'delete' | 'login';
}

export interface ContentItem {
  id: string;
  title: string;
  status: 'published' | 'draft' | 'archived';
  author: string;
  createdAt: Date;
  updatedAt: Date;
  views: number;
}

export interface DeviceStats {
  device: string;
  users: number;
  percentage: number;
  color: string;
}

export interface ServerMetric {
  name: string;
  value: number;
  status: 'healthy' | 'warning' | 'critical';
  unit: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: Date;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color?: string;
  description?: string;
}
