"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  BookOpen,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  User,
  MessageSquare,
  CreditCard,
  GraduationCap,
  Clock,
  Award,
  Layout,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "My Courses",
    icon: BookOpen,
    href: "/dashboard/courses",
    color: "text-violet-500",
  },
  {
    label: "Notes",
    icon: FileText,
    href: "/dashboard/notes",
    color: "text-pink-700",
  },
  {
    label: "Schedule",
    icon: Calendar,
    href: "/dashboard/schedule",
    color: "text-orange-500",
  },
  {
    label: "Progress",
    icon: BarChart3,
    href: "/dashboard/progress",
    color: "text-emerald-500",
  },
  {
    label: "Assignments",
    icon: Clock,
    href: "/dashboard/assignments",
    color: "text-red-500"
  },
  {
    label: "Certificates",
    icon: Award,
    href: "/dashboard/certificates",
    color: "text-yellow-500",
  },
  {
    label: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
    color: "text-blue-500",
    alert: 3,
  },
];

const accountRoutes = [
  {
    label: "Profile",
    icon: User,
    href: "/dashboard/profile",
  },
  {
    label: "Billing",
    icon: CreditCard,
    href: "/dashboard/billing",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

interface DashboardSidebarProps {
  className?: string;
}

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile menu button (always visible on mobile) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-5 right-5 z-50 md:hidden"
        onClick={toggleMobileSidebar}
      >
        {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile sidebar overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "flex flex-col h-full bg-white border-r pt-5 transition-all duration-300 relative",
          isCollapsed ? "w-[70px]" : "w-72",
          isMobileOpen ? "fixed inset-y-0 left-0 z-50" : "hidden md:flex",
          className
        )}
      >
        <div className="px-3 py-2 flex justify-between items-center">
          <div className={cn("flex items-center", isCollapsed && "justify-center w-full")}>
            <Link href="/" className="flex items-center gap-x-2">
              <div className="p-1 bg-primary rounded-md flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              {!isCollapsed && <span className="text-xl font-bold">ByteLearn</span>}
            </Link>
          </div>
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            className="h-7 w-7 p-0 rounded-full hidden md:flex"
          >
            <Layout className="h-4 w-4" />
          </Button>
        </div>

        {/* Main navigation */}
        <div className="flex-1 mt-10 px-3">
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-x-2 text-gray-700 text-sm font-medium py-3 px-3 rounded-lg hover:bg-gray-100 transition-all",
                  pathname === route.href && "bg-gray-100 text-primary",
                  isCollapsed && "flex-col justify-center h-12 px-0"
                )}
              >
                <div className="relative">
                  <route.icon className={cn("h-5 w-5", route.color)} />
                  {route.alert && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                      {route.alert}
                    </span>
                  )}
                </div>
                {!isCollapsed && <span>{route.label}</span>}
                {isCollapsed && route.label && (
                  <span className="text-xs">{route.label}</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Account navigation */}
        <div className="px-3 py-4 border-t">
          <div className="space-y-1">
            {accountRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-x-2 text-gray-500 text-sm font-medium py-3 px-3 rounded-lg hover:bg-gray-100 transition-all",
                  pathname === route.href && "bg-gray-100 text-primary",
                  isCollapsed && "flex-col justify-center h-12 px-0"
                )}
              >
                <route.icon className="h-5 w-5" />
                {!isCollapsed && <span>{route.label}</span>}
                {isCollapsed && route.label && (
                  <span className="text-xs">{route.label}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
