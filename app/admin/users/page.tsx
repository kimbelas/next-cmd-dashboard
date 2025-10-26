"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";

export default function UsersPage() {
  const mockUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "admin", status: "active", lastLogin: "2 hours ago" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "editor", status: "active", lastLogin: "5 hours ago" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "editor", status: "active", lastLogin: "1 day ago" },
    { id: 4, name: "Sarah Williams", email: "sarah@example.com", role: "viewer", status: "active", lastLogin: "2 days ago" },
    { id: 5, name: "Tom Brown", email: "tom@example.com", role: "viewer", status: "inactive", lastLogin: "1 week ago" },
  ];

  const roleColors: Record<string, "default" | "secondary" | "success"> = {
    admin: "destructive",
    editor: "default",
    viewer: "secondary",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage user accounts and permissions.
          </p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-sm text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Email</th>
                  <th className="pb-3 font-medium">Role</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Last Login</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b last:border-0">
                    <td className="py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                          {user.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{user.email}</td>
                    <td className="py-3">
                      <Badge variant={roleColors[user.role]}>{user.role}</Badge>
                    </td>
                    <td className="py-3">
                      <Badge variant={user.status === "active" ? "success" : "secondary"}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{user.lastLogin}</td>
                    <td className="py-3">
                      <Button variant="ghost" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
