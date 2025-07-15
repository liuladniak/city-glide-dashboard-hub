
import { useState } from "react";
import { 
  Home, 
  Calendar, 
  Users, 
  CreditCard, 
  MessageSquare, 
  BarChart3, 
  Settings,
  MapPin,
  Plane,
  FileText,
  HeadphonesIcon,
  Sun,
  Moon
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { RoleDemo } from "./RoleDemo";

interface DashboardSidebarProps {
  userRole: string;
  currentRole: string;
  onRoleChange: (role: string) => void;
}

const navigationItems = {
  admin: [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Bookings", url: "/bookings", icon: Calendar },
    { title: "Tours", url: "/tours", icon: MapPin },
    { title: "Clients", url: "/clients", icon: Users },
    { title: "Finance", url: "/finance", icon: CreditCard },
    { title: "Support", url: "/support", icon: HeadphonesIcon },
    { title: "Reports", url: "/reports", icon: BarChart3 },
    { title: "Settings", url: "/settings", icon: Settings },
  ],
  agent: [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Bookings", url: "/bookings", icon: Calendar },
    { title: "Tours", url: "/tours", icon: MapPin },
    { title: "Clients", url: "/clients", icon: Users },
    { title: "Itineraries", url: "/itineraries", icon: FileText },
  ],
  support: [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Support Tickets", url: "/support", icon: MessageSquare },
    { title: "Clients", url: "/clients", icon: Users },
    { title: "Knowledge Base", url: "/knowledge", icon: FileText },
  ],
  finance: [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Payments", url: "/payments", icon: CreditCard },
    { title: "Invoices", url: "/invoices", icon: FileText },
    { title: "Reports", url: "/reports", icon: BarChart3 },
  ],
};

export function DashboardSidebar({ userRole, currentRole, onRoleChange }: DashboardSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";
  const [darkMode, setDarkMode] = useState(false);

  const items = navigationItems[userRole as keyof typeof navigationItems] || navigationItems.admin;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = (active: boolean) =>
    active 
      ? "bg-blue-100 text-blue-700 border-r-2 border-blue-500" 
      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} border-r border-gray-200 bg-white shadow-sm`}>
      <SidebarHeader className="border-b border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Plane className="w-4 h-4 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="font-semibold text-gray-900">TourFlow</h1>
              <p className="text-xs text-gray-500 capitalize">{userRole} Panel</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : "text-xs font-medium text-gray-500 px-3 mb-2"}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${getNavCls(isActive(item.url))}`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-200">
        <div className="space-y-2">
          {/* Role Demo */}
          <RoleDemo currentRole={currentRole} onRoleChange={onRoleChange} />
          
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="w-full justify-start gap-2 h-8"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {!isCollapsed && <span className="text-sm">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
