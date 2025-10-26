"use client";

import { ContentTable } from "@/components/widgets/content-table";
import { mockContent } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ContentPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">
            Manage all your content in one place.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Content
        </Button>
      </div>

      <ContentTable content={mockContent} />
    </div>
  );
}
