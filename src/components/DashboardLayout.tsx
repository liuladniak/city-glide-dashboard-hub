
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

export const DashboardLayout = () => {
  const [currentUser] = useState({
    name: "Sarah Johnson",
    role: "admin",
    avatar: "SJ",
    email: "sarah@tourflow.com"
  });

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-slate-50">
        <DashboardSidebar userRole={currentUser.role} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader user={currentUser} />
          <DashboardContent userRole={currentUser.role} />
        </div>
      </div>
    </SidebarProvider>
  );
};
