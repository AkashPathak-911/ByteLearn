"use client";

import { Toaster } from "@/components/ui/toaster";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { UserProfileHeader } from "@/components/dashboard/UserProfileHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="h-full flex">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header className="h-16 border-b shadow-sm bg-white flex items-center justify-end px-4 sm:px-6">
            <UserProfileHeader />
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
