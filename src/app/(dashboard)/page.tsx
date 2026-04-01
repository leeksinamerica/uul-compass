import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  AlertTriangle,
  CalendarCheck,
  Activity,
  ArrowUpRight,
  Clock,
  TrendingUp,
} from "lucide-react";

const stats = {
  completionPercent: 8,
  totalTasks: 52,
  completedTasks: 4,
  overdueTasks: 3,
  dayNumber: 1,
  daysRemaining: 99,
};

const upcomingMilestones = [
  { name: "VP Finance Hire Approved", workstream: "Finance", dueDate: "Apr 4", status: "at_risk" as const, color: "#ef4444" },
  { name: "Silfab 30% AR Prepayment", workstream: "Finance", dueDate: "Apr 7", status: "in_progress" as const, color: "#ef4444" },
  { name: "Target Account List Complete", workstream: "Sales", dueDate: "Apr 5", status: "not_started" as const, color: "#3b82f6" },
  { name: "Corporate Deck v2 Draft", workstream: "Marketing", dueDate: "Apr 2", status: "in_progress" as const, color: "#8b5cf6" },
];

const recentActivity = [
  { action: "created task", target: "VP Finance job posting", actor: "Jerry", initials: "JS", time: "2h ago" },
  { action: "completed", target: "Board seat assignments", actor: "Jerry", initials: "JS", time: "3h ago" },
  { action: "commented on", target: "Silfab AR collection plan", actor: "Jerry", initials: "JS", time: "5h ago" },
  { action: "created workstream", target: "Technology & AI", actor: "Jerry", initials: "JS", time: "1d ago" },
];

const statusConfig = {
  not_started: { label: "Not Started", className: "bg-slate-100 text-slate-600 border-slate-200" },
  in_progress: { label: "In Progress", className: "bg-sky-50 text-sky-700 border-sky-200" },
  at_risk: { label: "At Risk", className: "bg-amber-50 text-amber-700 border-amber-200" },
  completed: { label: "Completed", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Post-Merger Integration &middot; Day {stats.dayNumber} of 100
        </p>
      </div>

      {/* Hero progress card */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-lg shadow-primary/20">
        <CardContent className="pt-6 pb-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-primary-foreground/70 text-sm font-medium">100-Day Plan Progress</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl font-bold">{stats.completionPercent}%</span>
                <span className="text-primary-foreground/60 text-sm">complete</span>
              </div>
              <p className="text-primary-foreground/50 text-xs mt-1">
                {stats.completedTasks} of {stats.totalTasks} tasks &middot; {stats.daysRemaining} days remaining
              </p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{stats.overdueTasks}</div>
                <div className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">Overdue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">6</div>
                <div className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">Active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">22</div>
                <div className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">Open</div>
              </div>
            </div>
          </div>
          <Progress
            value={stats.completionPercent}
            className="mt-4 h-2 bg-primary-foreground/20 [&>div]:bg-primary-foreground/90"
          />
        </CardContent>
      </Card>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard
          icon={<Target className="h-4 w-4" />}
          label="Workstreams"
          value="6"
          sub="all active"
          trend="+2 this week"
          trendUp
        />
        <KpiCard
          icon={<AlertTriangle className="h-4 w-4" />}
          label="Overdue"
          value={String(stats.overdueTasks)}
          sub="tasks need attention"
          className="border-l-2 border-l-destructive"
        />
        <KpiCard
          icon={<CalendarCheck className="h-4 w-4" />}
          label="This Week"
          value="4"
          sub="milestones due"
        />
        <KpiCard
          icon={<Activity className="h-4 w-4" />}
          label="Blocked"
          value="1"
          sub="needs resolution"
          trend="Shenzhen WH"
        />
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Milestones — wider */}
        <Card className="lg:col-span-3 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">This Week&apos;s Milestones</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {upcomingMilestones.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-3 px-2 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
              >
                <div
                  className="w-1 h-8 rounded-full shrink-0"
                  style={{ backgroundColor: m.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{m.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {m.workstream} &middot; Due {m.dueDate}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`text-[10px] shrink-0 ${statusConfig[m.status].className}`}
                >
                  {statusConfig[m.status].label}
                </Badge>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activity — narrower */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Activity</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-1">
            {recentActivity.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 py-2.5 px-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-semibold shrink-0 mt-0.5">
                  {a.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-snug">
                    <span className="font-medium">{a.actor}</span>{" "}
                    <span className="text-muted-foreground">{a.action}</span>{" "}
                    <span className="font-medium">{a.target}</span>
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function KpiCard({
  icon,
  label,
  value,
  sub,
  trend,
  trendUp,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}) {
  return (
    <Card className={`shadow-sm hover:shadow-md transition-shadow ${className || ""}`}>
      <CardContent className="pt-5 pb-4 px-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          {icon}
          <span className="text-xs font-medium uppercase tracking-wider">{label}</span>
        </div>
        <div className="text-3xl font-bold tracking-tight">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{sub}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-2 text-xs">
            {trendUp && <TrendingUp className="h-3 w-3 text-emerald-600" />}
            <span className={trendUp ? "text-emerald-600" : "text-muted-foreground"}>
              {trend}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
