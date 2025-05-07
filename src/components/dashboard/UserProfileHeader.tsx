"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  BookOpen,
  BookOpenCheck,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

interface UserProfileHeaderProps {
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function UserProfileHeader({ user = {
  name: "John Doe",
  email: "john.doe@example.com",
} }: UserProfileHeaderProps) {
  const [unreadNotifications] = useState(3); // Demo state for notifications
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    // Simulate logout process
    toast({
      title: "Logging out",
      description: "You have been successfully logged out.",
    });

    // Redirect to home page
    router.push("/");
  };

  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="relative">
            <Bell className="h-4 w-4 mr-1" />
            <span>Notifications</span>
            {unreadNotifications > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                {unreadNotifications}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[300px]">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="max-h-[300px] overflow-auto">
            <DropdownMenuItem className="flex flex-col items-start">
              <div className="flex items-center w-full">
                <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                <span className="font-medium">New course available</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Python for Data Science is now available.</p>
              <span className="text-xs text-gray-400 mt-1 self-end">
                <Clock className="h-3 w-3 inline mr-1" />
                2 hours ago
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start">
              <div className="flex items-center w-full">
                <BookOpenCheck className="h-4 w-4 mr-2 text-green-500" />
                <span className="font-medium">Assignment graded</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Your Java Programming assignment has been graded.</p>
              <span className="text-xs text-gray-400 mt-1 self-end">
                <Clock className="h-3 w-3 inline mr-1" />
                Yesterday
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start">
              <div className="flex items-center w-full">
                <Bell className="h-4 w-4 mr-2 text-blue-500" />
                <span className="font-medium">Live class reminder</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Your Web Development live class starts in 1 hour.</p>
              <span className="text-xs text-gray-400 mt-1 self-end">
                <Clock className="h-3 w-3 inline mr-1" />
                2 days ago
              </span>
            </DropdownMenuItem>
          </div>
          <DropdownMenuSeparator />
          <Link href="/dashboard/notifications" className="w-full">
            <Button variant="ghost" size="sm" className="w-full justify-center">
              View all notifications
            </Button>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="gap-2 flex items-center">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-8 w-8 rounded-full"
                />
              ) : (
                <User className="h-4 w-4 text-primary" />
              )}
            </div>
            <div className="hidden md:block text-sm font-medium text-left">
              <div>{user.name}</div>
              <div className="text-xs text-muted-foreground">{user.email}</div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
