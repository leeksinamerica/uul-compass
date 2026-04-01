"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "./nav-items";
import { Compass } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-sidebar text-sidebar-foreground">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 h-16 border-b border-sidebar-border">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sidebar-primary">
          <Compass className="h-4.5 w-4.5 text-sidebar-primary-foreground" />
        </div>
        <div>
          <span className="font-semibold text-base tracking-tight">Compass</span>
          <p className="text-[10px] text-sidebar-foreground/50 leading-tight">UUL Global</p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">
          Main
        </p>
        {navItems.slice(0, 2).map((item) => renderNavItem(item, pathname))}

        <div className="pt-4 pb-1">
          <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">
            Operations
          </p>
        </div>
        {navItems.slice(2, 7).map((item) => renderNavItem(item, pathname))}

        <div className="pt-4 pb-1">
          <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-foreground/40">
            System
          </p>
        </div>
        {navItems.slice(7).map((item) => renderNavItem(item, pathname))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-sidebar-foreground/60">Day 1 of 100</span>
        </div>
        <p className="text-[10px] text-sidebar-foreground/40 mt-1">
          Apr 1 — Jul 10, 2026
        </p>
      </div>
    </aside>
  );
}

function renderNavItem(
  item: { label: string; href: string; icon: React.ComponentType<{ className?: string }>; phase?: number },
  pathname: string
) {
  const isActive =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  const Icon = item.icon;
  const isDisabled = item.phase && item.phase > 1;

  return (
    <Link
      key={item.href}
      href={isDisabled ? "#" : item.href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150",
        isActive
          ? "bg-sidebar-accent text-sidebar-primary font-medium"
          : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground",
        isDisabled && "opacity-30 pointer-events-none"
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span className="flex-1">{item.label}</span>
      {isDisabled && (
        <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-sidebar-foreground/10">
          P{item.phase}
        </span>
      )}
    </Link>
  );
}
