
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

export const DashboardLayout = () => {
  const [currentRole, setCurrentRole] = useState("admin");
  const [currentUser] = useState({
    name: "Sarah Johnson",
    role: currentRole,
    avatar: "SJ",
    email: "sarah@tourflow.com"
  });

  const handleRoleChange = (newRole: string) => {
    setCurrentRole(newRole);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar userRole={currentRole} />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader 
            user={{ ...currentUser, role: currentRole }} 
            currentRole={currentRole}
            onRoleChange={handleRoleChange}
          />
          <DashboardContent userRole={currentRole} />
        </div>
      </div>
    </SidebarProvider>
  );
};
