
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, User } from "lucide-react";

interface RoleDemoProps {
  currentRole: string;
  onRoleChange: (role: string) => void;
}

const roles = [
  { value: "admin", label: "Admin", color: "bg-purple-100 text-purple-800" },
  { value: "agent", label: "Travel Agent", color: "bg-blue-100 text-blue-800" },
  { value: "support", label: "Support Staff", color: "bg-green-100 text-green-800" },
  { value: "finance", label: "Finance", color: "bg-orange-100 text-orange-800" },
];

export function RoleDemo({ currentRole, onRoleChange }: RoleDemoProps) {
  const currentRoleData = roles.find(role => role.value === currentRole);

  return (
    <div className="flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-lg">
      <User className="w-4 h-4 text-amber-600" />
      <span className="text-sm text-amber-700 font-medium">Demo Mode:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            <Badge className={currentRoleData?.color}>
              {currentRoleData?.label}
            </Badge>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {roles.map((role) => (
            <DropdownMenuItem
              key={role.value}
              onClick={() => onRoleChange(role.value)}
              className={currentRole === role.value ? "bg-slate-100" : ""}
            >
              <Badge className={role.color}>{role.label}</Badge>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
