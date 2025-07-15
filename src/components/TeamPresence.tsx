
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Circle,
  MessageCircle,
  Filter
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
          <div>
            <CardTitle className="text-lg font-semibold text-slate-900">Team ({filteredMembers.length})</CardTitle>
            <p className="text-sm text-slate-600">Who's around today</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant={filter === "available" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("available")}
            >
              Available
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {filteredMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-travel-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">{member.avatar}</span>
              </div>
              <Circle 
                className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${getStatusColor(member.status)} fill-current bg-white rounded-full`}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-slate-900 truncate">
                  {member.name}
                </h4>
                {member.status === "online" && (
                  <button className="p-1 hover:bg-slate-100 rounded-full">
                    <MessageCircle className="w-3 h-3 text-slate-500" />
                  </button>
                )}
              </div>
              <Badge variant="secondary" className="text-xs mt-1">
                {member.role}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
