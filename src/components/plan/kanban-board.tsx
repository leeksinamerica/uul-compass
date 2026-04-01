"use client";

import { TaskCard, type TaskData } from "./task-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const columns = [
  { key: "todo" as const, label: "To Do", dotColor: "bg-slate-400", bgColor: "bg-slate-50/50" },
  { key: "in_progress" as const, label: "In Progress", dotColor: "bg-sky-500", bgColor: "bg-sky-50/30" },
  { key: "blocked" as const, label: "Blocked", dotColor: "bg-red-500", bgColor: "bg-red-50/30" },
  { key: "review" as const, label: "Review", dotColor: "bg-amber-500", bgColor: "bg-amber-50/30" },
  { key: "done" as const, label: "Done", dotColor: "bg-emerald-500", bgColor: "bg-emerald-50/30" },
];

interface KanbanBoardProps {
  tasks: TaskData[];
}

export function KanbanBoard({ tasks }: KanbanBoardProps) {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-4 min-w-[1000px] pb-4">
        {columns.map((col) => {
          const columnTasks = tasks.filter((t) => t.status === col.key);
          return (
            <div key={col.key} className="flex-1 min-w-[230px]">
              {/* Column header */}
              <div className={cn(
                "flex items-center gap-2 mb-3 px-3 py-2 rounded-lg",
                col.bgColor
              )}>
                <div className={cn("h-2 w-2 rounded-full", col.dotColor)} />
                <span className="text-sm font-semibold">{col.label}</span>
                <span className="text-xs text-muted-foreground ml-auto font-medium">
                  {columnTasks.length}
                </span>
              </div>

              {/* Cards */}
              <div className="space-y-3">
                {columnTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
                {columnTasks.length === 0 && (
                  <div className="rounded-xl border-2 border-dashed border-border/60 p-6 text-center text-xs text-muted-foreground">
                    No tasks
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
