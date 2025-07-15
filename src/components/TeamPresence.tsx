
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Circle,
  MessageCircle,
  Phone
} from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Guide",
    status: "online",
    avatar: "SJ",
    lastSeen: "Active now",
    activity: "Leading Golden Gate tour"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Travel Agent",
    status: "online",
    avatar: "MC",
    lastSeen: "Active now",
    activity: "In meeting with clients"
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Support Staff",
    status: "away",
    avatar: "EW",
    lastSeen: "15 min ago",
    activity: "On lunch break"
  },
  {
    id: 4,
    name: "David Park",
    role: "Finance",
    status: "online",
    avatar: "DP",
    lastSeen: "Active now",
    activity: "Processing payments"
  },
  {
    id: 5,
    name: "Lisa Rodriguez",
    role: "Tour Guide",
    status: "busy",
    avatar: "LR",
    lastSeen: "2 hours ago",
    activity: "Leading Alcatraz tour"
  }
];

export function TeamPresence() {
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

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "away":
        return "Away";
      case "busy":
        return "Busy";
      default:
        return "Offline";
    }
  };

  return (
    <Card className="bg-white border-slate-200">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">Team Status</CardTitle>
        <p className="text-sm text-slate-600">See who's available right now</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-travel-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">{member.avatar}</span>
              </div>
              <Circle 
                className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} fill-current`}
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-medium text-slate-900 truncate">
                  {member.name}
                </h4>
                <Badge variant="secondary" className="text-xs px-2 py-0.5">
                  {member.role}
                </Badge>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <Circle className={`w-2 h-2 ${getStatusColor(member.status)} fill-current`} />
                <span className="text-xs text-slate-600">{getStatusText(member.status)}</span>
                <span className="text-xs text-slate-400">• {member.lastSeen}</span>
              </div>
              <p className="text-xs text-slate-500 truncate">{member.activity}</p>
            </div>

            {member.status === "online" && (
              <div className="flex gap-1">
                <button className="p-1 hover:bg-slate-200 rounded-full">
                  <MessageCircle className="w-4 h-4 text-slate-500" />
                </button>
                <button className="p-1 hover:bg-slate-200 rounded-full">
                  <Phone className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
