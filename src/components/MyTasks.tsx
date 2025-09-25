
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus,
  Calendar,
  Users,
  Phone,
  ChevronDown,
  ChevronRight,
  MapPin,
  FileText
} from "lucide-react";

const initialTasks = [
  {
    id: 1,
    title: "Follow up with Johnson family",
    description: "Confirm tour details for next week",
    priority: "high",
    dueDate: "Today",
    type: "follow-up",
    icon: Phone,
    relatedBooking: "BK-2024-001",
    notes: "They requested vegetarian options and wheelchair accessibility",
    completed: false
  },
  {
    id: 2,
    title: "Prepare Golden Gate tour itinerary",
    description: "Create detailed schedule for 15-person group",
    priority: "medium",
    dueDate: "Tomorrow",
    type: "planning",
    icon: Calendar,
    relatedBooking: "BK-2024-015",
    notes: "Group includes 3 children under 12, plan accordingly",
    completed: false
  },
  {
    id: 3,
    title: "Update client preferences",
    description: "Add dietary restrictions to Thompson booking",
    priority: "low",
    dueDate: "This week",
    type: "admin",
    icon: Users,
    relatedBooking: "BK-2024-008",
    notes: "Client has severe nut allergy - update all restaurant stops",
    completed: false
  },
  {
    id: 4,
    title: "Confirm tour guide availability",
    description: "Check Sarah's schedule for weekend tours",
    priority: "medium",
    dueDate: "Today",
    type: "coordination",
    icon: CheckCircle2,
    relatedBooking: "BK-2024-022",
    notes: "Preferred language: German. Backup guide: Michael",
    completed: false
  }
];

export function MyTasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [expandedTasks, setExpandedTasks] = useState<number[]>([]);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    type: "admin",
    notes: ""
  });
  const navigate = useNavigate();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "follow-up":
        return Phone;
      case "planning":
        return Calendar;
      case "admin":
        return Users;
      case "coordination":
        return CheckCircle2;
      default:
        return FileText;
    }
  };

  const toggleTaskExpansion = (taskId: number) => {
    setExpandedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const markTaskDone = (taskId: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, completed: true }
        : task
    ));
    
    // Remove completed task after animation
    setTimeout(() => {
      setTasks(prev => prev.filter(task => task.id !== taskId));
    }, 300);
  };

  const addTask = () => {
    if (!newTask.title.trim()) return;
    
    const task = {
      id: Date.now(),
      ...newTask,
      icon: getTypeIcon(newTask.type),
      relatedBooking: "",
      completed: false
    };
    
    setTasks(prev => [task, ...prev]);
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      dueDate: "",
      type: "admin",
      notes: ""
    });
    setIsAddTaskOpen(false);
  };

  const activeTasks = tasks.filter(task => !task.completed);

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-semibold text-card-foreground">My Tasks</CardTitle>
        <Dialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" className="text-xs">
              <Plus className="w-3 h-3 mr-1" />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Task Title</Label>
                <Input
                  id="title"
                  value={newTask.title}
                  onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Enter task title..."
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={newTask.description}
                  onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Brief description..."
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="priority">Priority</Label>
                  <Select value={newTask.priority} onValueChange={(value) => setNewTask(prev => ({ ...prev, priority: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="type">Type</Label>
                  <Select value={newTask.type} onValueChange={(value) => setNewTask(prev => ({ ...prev, type: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="follow-up">Follow-up</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="coordination">Coordination</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="dueDate">Due Date</Label>
                <Input
                  id="dueDate"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask(prev => ({ ...prev, dueDate: e.target.value }))}
                  placeholder="e.g., Today, Tomorrow, This week..."
                />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={newTask.notes}
                  onChange={(e) => setNewTask(prev => ({ ...prev, notes: e.target.value }))}
                  placeholder="Additional notes..."
                  rows={3}
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsAddTaskOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={addTask}>
                  Add Task
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="space-y-3">
        {activeTasks.map((task) => {
          const isExpanded = expandedTasks.includes(task.id);
          const TaskIcon = task.icon;
          
          return (
            <div
              key={task.id}
              className={`transition-all duration-300 ${task.completed ? 'opacity-50 scale-95' : ''}`}
            >
              <Collapsible
                open={isExpanded}
                onOpenChange={() => toggleTaskExpansion(task.id)}
              >
                <div className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors border border-border/50">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <TaskIcon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-sm font-medium text-card-foreground truncate">
                            {task.title}
                          </h4>
                          <Badge
                            variant="secondary"
                            className={`text-xs px-2 py-0.5 border ${getPriorityColor(task.priority)}`}
                          >
                            <div className="flex items-center gap-1">
                              {getPriorityIcon(task.priority)}
                              {task.priority}
                            </div>
                          </Badge>
                          <div className="ml-auto">
                            {isExpanded ? (
                              <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="w-4 h-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{task.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{task.dueDate}</span>
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="pt-3 border-t border-border/50 mt-3">
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Due:</span>
                          <span className="font-medium text-card-foreground">{task.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-3 h-3 text-muted-foreground" />
                          <span className="text-muted-foreground">Priority:</span>
                          <Badge className={`text-xs px-2 py-0.5 border ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </Badge>
                        </div>
                      </div>
                      
                      {task.relatedBooking && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Related booking:</span>
                          <span className="text-xs font-medium text-primary">{task.relatedBooking}</span>
                        </div>
                      )}
                      
                      {task.notes && (
                        <div className="flex items-start gap-2">
                          <FileText className="w-3 h-3 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Notes:</p>
                            <p className="text-xs text-card-foreground bg-muted/20 p-2 rounded border">{task.notes}</p>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-end">
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="h-6 text-xs px-2 text-green-600 hover:text-green-700 hover:bg-green-50"
                          onClick={(e) => {
                            e.stopPropagation();
                            markTaskDone(task.id);
                          }}
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Mark Done
                        </Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            className="w-full text-primary hover:text-primary/80 hover:bg-primary/10"
            onClick={() => navigate('/tasks')}
          >
            View All Tasks
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
