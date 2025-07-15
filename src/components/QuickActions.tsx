
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
    { label: "New Booking", icon: Plus, color: "bg-slate-800 hover:bg-slate-900 text-white" },
    { label: "Add Client", icon: UserPlus, color: "bg-slate-700 hover:bg-slate-800 text-white" },
    { label: "Schedule Tour", icon: Calendar, color: "bg-slate-600 hover:bg-slate-700 text-white" },
    { label: "Create Report", icon: FileText, color: "bg-slate-500 hover:bg-slate-600 text-white" },
  ],
  agent: [
    { label: "New Booking", icon: Plus, color: "bg-slate-800 hover:bg-slate-900 text-white" },
    { label: "Add Client", icon: UserPlus, color: "bg-slate-700 hover:bg-slate-800 text-white" },
    { label: "Plan Tour", icon: MapPin, color: "bg-slate-600 hover:bg-slate-700 text-white" },
    { label: "Call Client", icon: Phone, color: "bg-slate-500 hover:bg-slate-600 text-white" },
  ],
  support: [
    { label: "New Ticket", icon: MessageSquare, color: "bg-slate-800 hover:bg-slate-900 text-white" },
    { label: "Call Client", icon: Phone, color: "bg-slate-700 hover:bg-slate-800 text-white" },
    { label: "Create FAQ", icon: FileText, color: "bg-slate-600 hover:bg-slate-700 text-white" },
  ],
  finance: [
    { label: "Create Invoice", icon: FileText, color: "bg-slate-800 hover:bg-slate-900 text-white" },
    { label: "Record Payment", icon: CreditCard, color: "bg-slate-700 hover:bg-slate-800 text-white" },
    { label: "Generate Report", icon: FileText, color: "bg-slate-600 hover:bg-slate-700 text-white" },
  ],
};

export function QuickActions({ userRole }: QuickActionsProps) {
  const actions = actionsByRole[userRole as keyof typeof actionsByRole] || actionsByRole.admin;

  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action, index) => (
        <Button
          key={index}
          className={`${action.color} font-medium shadow-sm hover:shadow-md transition-all duration-200 border-0`}
          size="sm"
        >
          <action.icon className="w-4 h-4 mr-2" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
