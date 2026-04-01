import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const decisions = [
  {
    date: "Mar 23, 2026",
    meeting: "Board Sync — Jerry, Alic, Billy",
    items: [
      "New sales rule: collect payment before shipping for all new contracts",
      "Silfab Plan A: demand 30% prepayment before port arrival",
      "Board structure: Jerry (Chair), Alic, Billy, Season",
      "Jason Likens appointed CEO US, Josh Foster appointed COO US",
      "Three business pillars confirmed: Logistics, SCF, Compliance & Sourcing",
    ],
  },
  {
    date: "Mar 25, 2026",
    meeting: "Operations & Cash Flow Review",
    items: [
      "VP Finance hire approved at RMB 250-300K/year",
      "$20K marketing budget approved",
      "Bridge financing: Jerry to provide $300K if needed Apr-May",
      "Supply chain finance partnerships: Standard Chartered + Klear",
    ],
  },
  {
    date: "Mar 26, 2026",
    meeting: "Board Decision",
    items: [
      "Shenzhen warehouse expansion approved",
      "Hiring 3 operations managers in Q2",
    ],
  },
  {
    date: "Mar 31, 2026",
    meeting: "Strategy Call",
    items: [
      "Exploring logistics stablecoin for on-chain factoring",
      "LC Warehouse + Packsmith WMS integration approved",
      "Ben Fogarty hired for corporate deck rewrite ($4K)",
    ],
  },
];

export default function DecisionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Decisions</h1>
        <p className="text-sm text-muted-foreground">
          Board and leadership decisions tracked across all meetings
        </p>
      </div>

      <div className="space-y-4">
        {decisions.map((d, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-sm font-medium">
                  {d.meeting}
                </CardTitle>
                <Badge variant="outline" className="text-[10px] shrink-0">
                  {d.date}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1.5">
                {d.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <span className="text-muted-foreground shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
