
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
        <DashboardSidebar 
          userRole={currentRole} 
          currentRole={currentRole}
          onRoleChange={handleRoleChange}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader 
            user={{ ...currentUser, role: currentRole }} 
            currentRole={currentRole}
            onRoleChange={handleRoleChange}
          />
          <main className="flex-1 p-6 overflow-auto">
            {children || <DashboardContent userRole={currentRole} />}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};
