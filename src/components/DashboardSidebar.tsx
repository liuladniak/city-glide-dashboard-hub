
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
  HeadphonesIcon
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
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
  useSidebar,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  userRole: string;
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

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const items = navigationItems[userRole as keyof typeof navigationItems] || navigationItems.admin;

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  const getNavCls = (active: boolean) =>
    active 
      ? "bg-travel-blue-100 text-travel-blue-700 border-r-2 border-travel-blue-500" 
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r border-slate-200 bg-white`}>
      <SidebarHeader className="border-b border-slate-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-travel-blue-500 rounded-lg flex items-center justify-center">
            <Plane className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-semibold text-slate-900">TourFlow</h1>
              <p className="text-xs text-slate-500 capitalize">{userRole} Panel</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : "text-xs font-medium text-slate-500 px-3 mb-2"}>
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
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
