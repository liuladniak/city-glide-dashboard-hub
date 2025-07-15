
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Settings } from "lucide-react";

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
        <Button variant="ghost" size="sm" className="w-full justify-start gap-2 h-8">
          <Settings className="w-4 h-4" />
          <span className="text-xs">Demo Role</span>
          <ChevronDown className="w-3 h-3 ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {roles.map((role) => (
          <DropdownMenuItem
            key={role.value}
            onClick={() => onRoleChange(role.value)}
            className={`flex items-center gap-2 ${currentRole === role.value ? "bg-gray-100" : ""}`}
          >
            <Badge className={role.color} variant="secondary">
              {role.label}
            </Badge>
            {currentRole === role.value && (
              <span className="text-xs text-gray-500 ml-auto">Current</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
