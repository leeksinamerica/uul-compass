"use client";

import { Compass, Bell } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-4 lg:px-8 border-b border-border bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      {/* Mobile logo */}
      <div className="flex items-center gap-2.5 lg:hidden">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary">
          <Compass className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <span className="font-semibold text-base">Compass</span>
      </div>

      {/* Desktop — page context */}
      <div className="hidden lg:flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>System Online</span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Day counter pill */}
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10">
          <span className="text-xs font-semibold text-primary">Day 1</span>
          <span className="text-xs text-muted-foreground">of 100</span>
        </div>

        {/* Notifications */}
        <button className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:bg-muted transition-colors">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <Badge className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 text-[9px] bg-destructive text-white border-2 border-white">
            3
          </Badge>
        </button>

        {/* User */}
        <div className="flex items-center gap-2 pl-2 border-l border-border ml-1">
          <Avatar className="h-8 w-8 ring-2 ring-primary/10">
            <AvatarFallback className="text-xs font-semibold bg-primary text-primary-foreground">
              JS
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:block">
            <p className="text-sm font-medium leading-none">Jerry</p>
            <p className="text-[10px] text-muted-foreground">Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
