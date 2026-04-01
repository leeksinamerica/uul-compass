import {
  LayoutDashboard,
  Target,
  Ship,
  FileText,
  Users,
  Truck,
  DollarSign,
  Settings,
  CheckSquare,
  FolderOpen,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
  phase?: number;
}

export const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "100-Day Plan", href: "/plan", icon: Target },
  { label: "Shipments", href: "/shipments", icon: Ship, phase: 3 },
  { label: "Quotes", href: "/quotes", icon: FileText, phase: 2 },
  { label: "Customers", href: "/customers", icon: Users, phase: 2 },
  { label: "Carriers", href: "/carriers", icon: Truck, phase: 2 },
  { label: "Finance", href: "/finance", icon: DollarSign, phase: 3 },
  { label: "Decisions", href: "/decisions", icon: CheckSquare },
  { label: "Documents", href: "/documents", icon: FolderOpen, phase: 4 },
  { label: "Settings", href: "/settings", icon: Settings },
];
