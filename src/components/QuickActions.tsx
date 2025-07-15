
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  UserPlus, 
  Calendar, 
  FileText, 
  CreditCard, 
  MessageSquare,
  MapPin,
  Phone
} from "lucide-react";

interface QuickActionsProps {
  userRole: string;
}

const actionsByRole = {
  admin: [
    { label: "New Booking", icon: Plus, color: "bg-travel-blue-500 hover:bg-travel-blue-600" },
    { label: "Add Client", icon: UserPlus, color: "bg-green-500 hover:bg-green-600" },
    { label: "Schedule Tour", icon: Calendar, color: "bg-purple-500 hover:bg-purple-600" },
    { label: "Create Report", icon: FileText, color: "bg-orange-500 hover:bg-orange-600" },
  ],
  agent: [
    { label: "New Booking", icon: Plus, color: "bg-travel-blue-500 hover:bg-travel-blue-600" },
    { label: "Add Client", icon: UserPlus, color: "bg-green-500 hover:bg-green-600" },
    { label: "Plan Tour", icon: MapPin, color: "bg-purple-500 hover:bg-purple-600" },
    { label: "Call Client", icon: Phone, color: "bg-indigo-500 hover:bg-indigo-600" },
  ],
  support: [
    { label: "New Ticket", icon: MessageSquare, color: "bg-travel-blue-500 hover:bg-travel-blue-600" },
    { label: "Call Client", icon: Phone, color: "bg-green-500 hover:bg-green-600" },
    { label: "Create FAQ", icon: FileText, color: "bg-purple-500 hover:bg-purple-600" },
  ],
  finance: [
    { label: "Create Invoice", icon: FileText, color: "bg-travel-blue-500 hover:bg-travel-blue-600" },
    { label: "Record Payment", icon: CreditCard, color: "bg-green-500 hover:bg-green-600" },
    { label: "Generate Report", icon: FileText, color: "bg-purple-500 hover:bg-purple-600" },
  ],
};

export function QuickActions({ userRole }: QuickActionsProps) {
  const actions = actionsByRole[userRole as keyof typeof actionsByRole] || actionsByRole.admin;

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action, index) => (
        <Button
          key={index}
          className={`${action.color} text-white shadow-sm hover:shadow-md transition-all duration-200`}
          size="sm"
        >
          <action.icon className="w-4 h-4 mr-2" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
