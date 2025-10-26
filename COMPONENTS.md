# Component Reference Guide

## UI Components (`components/ui/`)

### Button
**File**: `components/ui/button.tsx`

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="md">Click Me</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>
<Button isLoading>Loading...</Button>
```

**Props**:
- `variant`: `"default" | "secondary" | "outline" | "ghost" | "destructive"`
- `size`: `"sm" | "md" | "lg"`
- `isLoading`: `boolean`

---

### Card
**File**: `components/ui/card.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer actions
  </CardFooter>
</Card>
```

---

### Badge
**File**: `components/ui/badge.tsx`

```tsx
import { Badge } from "@/components/ui/badge";

<Badge variant="default">Default</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="destructive">Error</Badge>
```

**Props**:
- `variant`: `"default" | "secondary" | "success" | "warning" | "destructive"`

---

### Skeleton
**File**: `components/ui/skeleton.tsx`

```tsx
import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-12 w-full" />
<Skeleton className="h-4 w-[250px]" />
```

---

## Dashboard Widgets (`components/widgets/`)

### Stats Card
**File**: `components/widgets/stats-card.tsx`

```tsx
import { StatsCardWidget } from "@/components/widgets/stats-card";

const stat = {
  id: "1",
  label: "Total Revenue",
  value: "$45,231",
  change: 20.1,
  trend: "up",
};

<StatsCardWidget stat={stat} />
```

**Data Type**:
```ts
interface StatCard {
  id: string;
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
}
```

---

### Revenue Chart
**File**: `components/widgets/revenue-chart.tsx`

```tsx
import { RevenueChart } from "@/components/widgets/revenue-chart";

const data = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  // ...
];

<RevenueChart data={data} />
```

**Data Type**:
```ts
interface ChartDataPoint {
  name: string;
  value: number;
}
```

---

### Traffic Sources
**File**: `components/widgets/traffic-sources.tsx`

```tsx
import { TrafficSources } from "@/components/widgets/traffic-sources";

const data = [
  { source: "Organic", value: 4250, percentage: 42.5, color: "hsl(221.2 83.2% 53.3%)" },
  // ...
];

<TrafficSources data={data} />
```

---

### Activity Feed
**File**: `components/widgets/activity-feed.tsx`

```tsx
import { ActivityFeed } from "@/components/widgets/activity-feed";

const activities = [
  {
    id: "1",
    user: "John Doe",
    action: "Created new article",
    timestamp: new Date(),
    type: "create",
  },
];

<ActivityFeed activities={activities} />
```

**Activity Types**: `"create" | "update" | "delete" | "login"`

---

### Content Table
**File**: `components/widgets/content-table.tsx`

```tsx
import { ContentTable } from "@/components/widgets/content-table";

const content = [
  {
    id: "1",
    title: "Article Title",
    status: "published",
    author: "John Doe",
    createdAt: new Date(),
    updatedAt: new Date(),
    views: 1234,
  },
];

<ContentTable content={content} />
```

**Status Types**: `"published" | "draft" | "archived"`

---

### Device Breakdown
**File**: `components/widgets/device-breakdown.tsx`

```tsx
import { DeviceBreakdown } from "@/components/widgets/device-breakdown";

const data = [
  { device: "Desktop", users: 5234, percentage: 52.3, color: "hsl(221.2 83.2% 53.3%)" },
  // ...
];

<DeviceBreakdown data={data} />
```

---

### Server Status
**File**: `components/widgets/server-status.tsx`

```tsx
import { ServerStatus } from "@/components/widgets/server-status";

const metrics = [
  { name: "CPU Usage", value: 45, status: "healthy", unit: "%" },
  { name: "Memory", value: 68, status: "warning", unit: "%" },
];

<ServerStatus metrics={metrics} />
```

**Status Types**: `"healthy" | "warning" | "critical"`

---

### Task Board
**File**: `components/widgets/task-board.tsx`

```tsx
import { TaskBoard } from "@/components/widgets/task-board";

const tasks = [
  {
    id: "1",
    title: "Fix bug",
    description: "Fix login issue",
    status: "in-progress",
    priority: "high",
    assignee: "John Doe",
  },
];

<TaskBoard tasks={tasks} />
```

**Status Types**: `"todo" | "in-progress" | "done"`
**Priority Types**: `"low" | "medium" | "high"`

---

## Layout Components (`components/layouts/`)

### Sidebar
**File**: `components/layouts/sidebar.tsx`

```tsx
import { Sidebar } from "@/components/layouts/sidebar";

<Sidebar />
```

**Features**:
- Auto-collapses on mobile
- Overlay on mobile
- Navigation with active states
- User profile section

---

### Header
**File**: `components/layouts/header.tsx`

```tsx
import { Header } from "@/components/layouts/header";

<Header />
```

**Features**:
- Search bar
- Notification bell with indicator
- Sticky positioning

---

## Custom Hooks (`lib/hooks/`)

### useMediaQuery
**File**: `lib/hooks/use-media-query.ts`

```tsx
import { useIsMobile, useIsTablet, useIsDesktop } from "@/lib/hooks/use-media-query";

const isMobile = useIsMobile();    // < 768px
const isTablet = useIsTablet();    // 769px - 1024px
const isDesktop = useIsDesktop();  // > 1024px
```

---

### useDebounce
**File**: `lib/hooks/use-debounce.ts`

```tsx
import { useDebounce } from "@/lib/hooks/use-debounce";

const [search, setSearch] = useState("");
const debouncedSearch = useDebounce(search, 500);
```

---

### useIntersectionObserver
**File**: `lib/hooks/use-intersection.ts`

```tsx
import { useIntersectionObserver } from "@/lib/hooks/use-intersection";

const [ref, isIntersecting] = useIntersectionObserver({
  threshold: 0.1,
  freezeOnceVisible: true,
});

<div ref={ref}>
  {isIntersecting && <ExpensiveComponent />}
</div>
```

---

## Utility Functions (`lib/utils/`)

### cn (className merger)
**File**: `lib/utils/cn.ts`

```tsx
import { cn } from "@/lib/utils/cn";

<div className={cn("base-class", isActive && "active-class", className)} />
```

---

### Format Functions
**File**: `lib/utils/format.ts`

```tsx
import { formatNumber, formatCurrency, formatPercentage, formatDate, formatRelativeTime } from "@/lib/utils/format";

formatNumber(1234)           // "1.2K"
formatCurrency(1234.56)      // "$1,234.56"
formatPercentage(12.5)       // "+12.5%"
formatDate(new Date())       // "Jan 26, 2024"
formatRelativeTime(date)     // "2 hours ago"
```

---

## State Management (`store/`)

### Dashboard Store
**File**: `store/dashboard-store.ts`

```tsx
import { useDashboardStore } from "@/store/dashboard-store";

const { sidebarOpen, toggleSidebar, setSidebarOpen } = useDashboardStore();

// Toggle sidebar
toggleSidebar();

// Set sidebar state
setSidebarOpen(false);

// Get current state
const isOpen = sidebarOpen;
```

---

## TypeScript Types (`types/`)

All types are exported from:
- `types/dashboard.ts` - Dashboard widgets and data
- `types/api.ts` - API responses and user types

```tsx
import type { StatCard, ChartDataPoint, ActivityItem } from "@/types/dashboard";
import type { User, ApiResponse } from "@/types/api";
```

---

## Best Practices

1. **Always use TypeScript types** for props
2. **Import cn utility** for conditional classNames
3. **Use custom hooks** instead of raw window APIs
4. **Wrap async widgets** in Suspense boundaries
5. **Use format utilities** for consistent formatting
6. **Leverage Zustand** for global state
7. **Follow naming conventions** (PascalCase for components)
8. **Add displayName** to forwardRef components

---

**This reference covers all reusable components in the application.**
