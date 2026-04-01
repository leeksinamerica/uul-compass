"use client";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

export interface TaskData {
  id: string;
  title: string;
  status: "todo" | "in_progress" | "blocked" | "review" | "done";
  priority: "critical" | "high" | "medium" | "low";
  assignee?: { name: string; initials: string };
  dueDate?: string;
  workstream: string;
  workstreamColor?: string;
}

const priorityConfig = {
  critical: { label: "Critical", dot: "bg-red-500", badge: "bg-red-50 text-red-700 border-red-200" },
  high: { label: "High", dot: "bg-orange-500", badge: "bg-orange-50 text-orange-700 border-orange-200" },
  medium: { label: "Medium", dot: "bg-sky-500", badge: "bg-sky-50 text-sky-700 border-sky-200" },
  low: { label: "Low", dot: "bg-slate-400", badge: "bg-slate-50 text-slate-600 border-slate-200" },
};

export function TaskCard({ task }: { task: TaskData }) {
  const isOverdue =
    task.dueDate &&
    task.status !== "done" &&
    new Date(task.dueDate + ", 2026") < new Date();
  const p = priorityConfig[task.priority];

  return (
    <div className="bg-card rounded-xl border border-border p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
      {/* Workstream tag */}
      <div className="flex items-center gap-2 mb-2.5">
        <div
          className="h-2 w-2 rounded-full shrink-0"
          style={{ backgroundColor: task.workstreamColor || "#6b7280" }}
        />
        <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider truncate">
          {task.workstream}
        </span>
      </div>

      {/* Title */}
      <p className="text-sm font-medium leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
        {task.title}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={cn("text-[10px] px-1.5 py-0 h-5", p.badge)}
          >
            <span className={cn("w-1.5 h-1.5 rounded-full mr-1", p.dot)} />
            {p.label}
          </Badge>
          {task.dueDate && (
            <span
              className={cn(
                "flex items-center gap-1 text-[10px]",
                isOverdue ? "text-destructive font-semibold" : "text-muted-foreground"
              )}
            >
              <Calendar className="h-2.5 w-2.5" />
              {task.dueDate}
            </span>
          )}
        </div>
        {task.assignee && (
          <Avatar className="h-6 w-6 ring-1 ring-border">
            <AvatarFallback className="text-[9px] font-semibold bg-primary/10 text-primary">
              {task.assignee.initials}
            </AvatarFallback>
          </Avatar>
        )}
      </div>
    </div>
  );
}
