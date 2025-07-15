
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-2 px-3 hover:bg-gray-100">
          <span className="text-xs text-gray-600 font-medium">Demo:</span>
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
            className={currentRole === role.value ? "bg-gray-100" : ""}
          >
            <Badge className={role.color}>{role.label}</Badge>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
