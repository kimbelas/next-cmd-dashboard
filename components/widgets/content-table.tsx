"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContentItem } from "@/types/dashboard";
import { formatDate, formatNumber } from "@/lib/utils/format";

interface ContentTableProps {
  content: ContentItem[];
}

const statusVariants: Record<ContentItem["status"], "default" | "secondary" | "success" | "warning"> = {
  published: "success",
  draft: "warning",
  archived: "secondary",
};

export function ContentTable({ content }: ContentTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-sm text-muted-foreground">
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Author</th>
                <th className="pb-3 font-medium">Views</th>
                <th className="pb-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {content.map((item) => (
                <tr key={item.id} className="border-b last:border-0">
                  <td className="py-3 text-sm font-medium">{item.title}</td>
                  <td className="py-3">
                    <Badge variant={statusVariants[item.status]}>{item.status}</Badge>
                  </td>
                  <td className="py-3 text-sm text-muted-foreground">{item.author}</td>
                  <td className="py-3 text-sm text-muted-foreground">
                    {formatNumber(item.views)}
                  </td>
                  <td className="py-3 text-sm text-muted-foreground">
                    {formatDate(item.updatedAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
