
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
    { label: "New Booking", icon: Plus, color: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" },
    { label: "Add Client", icon: UserPlus, color: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200" },
    { label: "Schedule Tour", icon: Calendar, color: "bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200" },
    { label: "Create Report", icon: FileText, color: "bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200" },
  ],
  agent: [
    { label: "New Booking", icon: Plus, color: "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200" },
    { label: "Add Client", icon: UserPlus, color: "bg-green-50 hover:bg-green-100 text-green-700 border-green-200" },
    { label: "Plan Tour", icon: MapPin, color: "bg-teal-50 hover:bg-teal-100 text-teal-700 border-teal-200" },
    { label: "Call Client", icon: Phone, color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200" },
  ],
  support: [
    { label: "New Ticket", icon: MessageSquare, color: "bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200" },
    { label: "Call Client", icon: Phone, color: "bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-indigo-200" },
    { label: "Create FAQ", icon: FileText, color: "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200" },
  ],
  finance: [
    { label: "Create Invoice", icon: FileText, color: "bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border-emerald-200" },
    { label: "Record Payment", icon: CreditCard, color: "bg-cyan-50 hover:bg-cyan-100 text-cyan-700 border-cyan-200" },
    { label: "Generate Report", icon: FileText, color: "bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200" },
  ],
};

export function QuickActions({ userRole }: QuickActionsProps) {
  const actions = actionsByRole[userRole as keyof typeof actionsByRole] || actionsByRole.admin;

  return (
    <div className="flex flex-wrap gap-2">
      {actions.map((action, index) => (
        <Button
          key={index}
          className={`${action.color} font-medium shadow-sm hover:shadow-md transition-all duration-200 border`}
          size="sm"
          variant="outline"
        >
          <action.icon className="w-4 h-4 mr-2" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
