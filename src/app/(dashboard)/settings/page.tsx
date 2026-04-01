import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const teamMembers = [
  { name: "Jerry Shi", nameZh: "施嘉懋", role: "owner", title: "Owner & Board Chair", entity: "UUL", email: "jerryshi@synergiscap.com" },
  { name: "Alic Ge", nameZh: "葛总", role: "board", title: "Board Director", entity: "UUL", email: "" },
  { name: "Billy", nameZh: "大哥", role: "board", title: "Board Director", entity: "UUL", email: "" },
  { name: "Season", nameZh: "", role: "board", title: "Board Director, Finance", entity: "UUL", email: "" },
  { name: "Jason Likens", nameZh: "", role: "executive", title: "CEO, US Operations", entity: "UUL", email: "" },
  { name: "Josh Foster", nameZh: "", role: "executive", title: "COO, US Operations", entity: "UUL", email: "" },
  { name: "Serena Lin", nameZh: "林静", role: "executive", title: "CFO", entity: "UUL", email: "" },
  { name: "David Wu", nameZh: "", role: "operator", title: "Engineer", entity: "UUL", email: "" },
];

const roleColors: Record<string, string> = {
  owner: "bg-purple-100 text-purple-800",
  board: "bg-blue-100 text-blue-800",
  executive: "bg-green-100 text-green-800",
  operator: "bg-gray-100 text-gray-800",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">
          Team management and system configuration
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {teamMembers.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-3 py-2 border-b border-border last:border-0"
              >
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="text-xs bg-muted">
                    {m.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{m.name}</p>
                    {m.nameZh && (
                      <span className="text-xs text-muted-foreground">
                        {m.nameZh}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{m.title}</p>
                </div>
                <Badge
                  variant="secondary"
                  className={roleColors[m.role] || ""}
                >
                  {m.role}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Entities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {["UUL Global", "Meihang (美航)", "Star Nav (星航)", "Sage Line"].map(
              (e) => (
                <div
                  key={e}
                  className="border border-border rounded-lg p-3 text-sm font-medium text-center"
                >
                  {e}
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
