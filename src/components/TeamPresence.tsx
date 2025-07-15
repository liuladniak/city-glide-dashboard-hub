
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Circle,
  Users
} from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Guide",
    status: "online",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Travel Agent",
    status: "online",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Support Staff",
    status: "away",
    avatar: "EW",
  },
  {
    id: 4,
    name: "David Park",
    role: "Finance",
    status: "online",
    avatar: "DP",
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    role: "Tour Guide",
    status: "busy",
    avatar: "LR",
  },
  {
    id: 6,
    name: "Tom Anderson",
    role: "Support Staff",
    status: "online",
    avatar: "TA",
  }
];

export function TeamPresence() {
  const [filter, setFilter] = useState<"all" | "available">("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "text-green-500";
      case "away":
        return "text-yellow-500";
      case "busy":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  const filteredMembers = teamMembers.filter(member => 
    filter === "all" || (filter === "available" && member.status === "online")
  );

  return (
    <Card className="bg-white border-slate-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-600" />
            <CardTitle className="text-lg font-semibold text-slate-900">Team ({filteredMembers.length})</CardTitle>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="text-xs"
            >
              All
            </Button>
            <Button
              variant={filter === "available" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("available")}
              className="text-xs"
            >
              Available
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="relative">
              <div className="w-9 h-9 bg-travel-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{member.avatar}</span>
              </div>
              <Circle 
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(member.status)} fill-current bg-white rounded-full`}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-slate-900 truncate mb-1">
                {member.name}
              </h4>
              <Badge variant="secondary" className="text-xs">
                {member.role}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
