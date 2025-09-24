
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus,
  Calendar,
  Users,
  Phone,
  ChevronDown,
  MapPin,
  FileText,
  Check
} from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Follow up with Johnson family",
    description: "Confirm tour details for next week",
    priority: "high",
    dueDate: "Today",
    dueTime: "2:30 PM",
    type: "follow-up",
    icon: Phone,
    relatedBooking: "BK-2024-0156",
    relatedTour: "Historic Old Town Walk",
    notes: "Customer requested vegetarian restaurant options. Confirm meeting point at Sultanahmet Square.",
    assignedBy: "Sarah Chen"
  },
  {
    id: 2,
    title: "Prepare Golden Gate tour itinerary",
    description: "Create detailed schedule for 15-person group",
    priority: "medium",
    dueDate: "Tomorrow",
    dueTime: "10:00 AM",
    type: "planning",
    icon: Calendar,
    relatedBooking: "BK-2024-0158",
    relatedTour: "Bosporus Shoreline Tour",
    notes: "Large group from corporate client. Need to arrange separate guide for photography spots.",
    assignedBy: "Mike Rodriguez"
  },
  {
    id: 3,
    title: "Update client preferences",
    description: "Add dietary restrictions to Thompson booking",
    priority: "low",
    dueDate: "This week",
    dueTime: "End of day",
    type: "admin",
    icon: Users,
    relatedBooking: "BK-2024-0142",
    relatedTour: "Culinary Street Food Tour",
    notes: "Client has gluten sensitivity. Update booking notes and inform tour guide.",
    assignedBy: "Lisa Park"
  },
  {
    id: 4,
    title: "Confirm tour guide availability",
    description: "Check Sarah's schedule for weekend tours",
    priority: "medium",
    dueDate: "Today",
    dueTime: "4:00 PM",
    type: "coordination",
    icon: CheckCircle2,
    relatedBooking: "BK-2024-0161",
    relatedTour: "Private Custom Tour",
    notes: "Weekend tours for VIP clients. Need backup guide in case of conflicts.",
    assignedBy: "Ahmed Yilmaz"
  }
];

export function MyTasks() {
  const [expandedTasks, setExpandedTasks] = useState<Set<number>>(new Set());
  const [completingTasks, setCompletingTasks] = useState<Set<number>>(new Set());

  const toggleExpanded = (taskId: number) => {
    setExpandedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const handleMarkDone = (taskId: number) => {
    setCompletingTasks(prev => new Set(prev).add(taskId));
    // Simulate API call delay
    setTimeout(() => {
      setCompletingTasks(prev => {
        const newSet = new Set(prev);
        newSet.delete(taskId);
        return newSet;
      });
      // Here you would typically remove the task from the list
    }, 800);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800";
      case "low":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800";
      default:
        return "bg-muted text-muted-foreground border-border";
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
    <Card className="bg-card border-border shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground">My Tasks</CardTitle>
        <Button size="sm" variant="outline" className="text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add Task
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        {tasks.map((task) => {
          const isExpanded = expandedTasks.has(task.id);
          const isCompleting = completingTasks.has(task.id);
          
          return (
            <Collapsible
              key={task.id}
              open={isExpanded}
              onOpenChange={() => toggleExpanded(task.id)}
            >
              <div
                className={`rounded-lg border border-border bg-card transition-all duration-200 hover:shadow-sm ${
                  isCompleting ? 'opacity-50 scale-95' : ''
                }`}
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-start gap-3 p-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors">
                    <div className="mt-1 flex-shrink-0">
                      <task.icon className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-card-foreground truncate">
                            {task.title}
                          </h4>
                          <Badge
                            variant="outline"
                            className={`text-xs px-2 py-0.5 border ${getPriorityColor(task.priority)}`}
                          >
                            <div className="flex items-center gap-1">
                              {getPriorityIcon(task.priority)}
                              {task.priority}
                            </div>
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                            isExpanded ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{task.description}</p>
                    </div>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-3 pb-3">
                  <div className="ml-7 space-y-3 border-t border-border pt-3 animate-fade-in">
                    {/* Task Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Due:</span>
                          <span className="text-card-foreground font-medium">{task.dueDate} at {task.dueTime}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Tour:</span>
                          <span className="text-card-foreground font-medium">{task.relatedTour}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <FileText className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Booking:</span>
                          <span className="text-card-foreground font-medium">{task.relatedBooking}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Assigned by:</span>
                          <span className="text-card-foreground font-medium">{task.assignedBy}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Notes */}
                    <div className="bg-muted/30 rounded-md p-3">
                      <div className="flex items-start gap-2">
                        <FileText className="w-3 h-3 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-card-foreground mb-1">Notes</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{task.notes}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs px-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkDone(task.id);
                        }}
                        disabled={isCompleting}
                      >
                        {isCompleting ? (
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                            Completing...
                          </div>
                        ) : (
                          <div className="flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            Mark Done
                          </div>
                        )}
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>
          );
        })}
        
        <div className="pt-3 border-t border-border">
          <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary hover:bg-accent">
            View All Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
