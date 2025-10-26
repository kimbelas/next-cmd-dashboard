"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";

export default function MediaPage() {
  const mockImages = [
    { id: 1, name: "hero-image.jpg", size: "2.4 MB", date: "Jan 15, 2024" },
    { id: 2, name: "product-1.png", size: "1.8 MB", date: "Jan 14, 2024" },
    { id: 3, name: "banner.jpg", size: "3.2 MB", date: "Jan 12, 2024" },
    { id: 4, name: "logo.svg", size: "45 KB", date: "Jan 10, 2024" },
    { id: 5, name: "thumbnail.jpg", size: "890 KB", date: "Jan 8, 2024" },
    { id: 6, name: "background.png", size: "4.1 MB", date: "Jan 5, 2024" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
          <p className="text-muted-foreground">
            Manage your images and media files.
          </p>
        </div>
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          Upload Media
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockImages.map((image) => (
          <Card key={image.id} className="overflow-hidden transition-all hover:shadow-md">
            <div className="flex aspect-video items-center justify-center bg-muted">
              <ImageIcon className="h-12 w-12 text-muted-foreground" />
            </div>
            <CardContent className="p-4">
              <p className="font-medium truncate">{image.name}</p>
              <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                <span>{image.size}</span>
                <span>{image.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
