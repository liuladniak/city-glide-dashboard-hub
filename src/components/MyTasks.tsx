
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus,
  Calendar,
  Users,
  Phone
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Follow up with Johnson family",
    description: "Confirm tour details for next week",
    priority: "high",
    dueDate: "Today",
    type: "follow-up",
    icon: Phone
  },
  {
    id: 2,
    title: "Prepare Golden Gate tour itinerary",
    description: "Create detailed schedule for 15-person group",
    priority: "medium",
    dueDate: "Tomorrow",
    type: "planning",
    icon: Calendar
  },
  {
    id: 3,
    title: "Update client preferences",
    description: "Add dietary restrictions to Thompson booking",
    priority: "low",
    dueDate: "This week",
    type: "admin",
    icon: Users
  },
  {
    id: 4,
    title: "Confirm tour guide availability",
    description: "Check Sarah's schedule for weekend tours",
    priority: "medium",
    dueDate: "Today",
    type: "coordination",
    icon: CheckCircle2
  }
];

export function MyTasks() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="w-3 h-3" />;
      case "medium":
        return <Clock className="w-3 h-3" />;
      case "low":
        return <CheckCircle2 className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <Card className="bg-white border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-slate-900">My Tasks</CardTitle>
        <Button size="sm" variant="outline" className="text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add Task
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <div className="mt-1">
              <task.icon className="w-4 h-4 text-slate-500" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-medium text-slate-900 truncate">
                  {task.title}
                </h4>
                <Badge
                  variant="secondary"
                  className={`text-xs px-2 py-0.5 ${getPriorityColor(task.priority)}`}
                >
                  <div className="flex items-center gap-1">
                    {getPriorityIcon(task.priority)}
                    {task.priority}
                  </div>
                </Badge>
              </div>
              <p className="text-xs text-slate-600 mb-2">{task.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">{task.dueDate}</span>
                <Button size="sm" variant="ghost" className="h-6 text-xs px-2">
                  Mark Done
                </Button>
              </div>
            </div>
          </div>
        ))}
        
        <div className="pt-2 border-t border-slate-200">
          <Button variant="ghost" size="sm" className="w-full text-travel-blue-600 hover:text-travel-blue-700 hover:bg-travel-blue-50">
            View All Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
