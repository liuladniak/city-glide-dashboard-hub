import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DashboardLayout } from "@/components/DashboardLayout";
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Plus,
  Calendar,
  Users,
  Phone,
  FileText,
  Search,
  Filter,
  MapPin
} from "lucide-react";

const allTasks = [
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
    completed: false,
    assignee: "You"
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
    completed: false,
    assignee: "You"
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
    completed: false,
    assignee: "Sarah"
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
    completed: false,
    assignee: "Michael"
  },
  {
    id: 5,
    title: "Process refund for Martinez booking",
    description: "Handle cancellation and refund request",
    priority: "high",
    dueDate: "Yesterday",
    type: "admin",
    icon: Users,
    relatedBooking: "BK-2024-012",
    notes: "Family emergency - full refund approved by manager",
    completed: true,
    assignee: "You"
  }
];

export default function Tasks() {
  const [tasks, setTasks] = useState(allTasks);
  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    type: "admin",
    notes: "",
    assignee: "You"
  });

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

  const markTaskDone = (taskId: number) => {
    setTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, completed: true }
        : task
    ));
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
      notes: "",
      assignee: "You"
    });
    setIsAddTaskOpen(false);
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === "all" || task.priority === priorityFilter;
    const matchesType = typeFilter === "all" || task.type === typeFilter;
    
    return matchesSearch && matchesPriority && matchesType;
  });

  const activeTasks = filteredTasks.filter(task => !task.completed);
  const completedTasks = filteredTasks.filter(task => task.completed);

  const TaskCard = ({ task }: { task: typeof allTasks[0] }) => {
    const TaskIcon = task.icon;
    
    return (
      <Card className="bg-card border-border hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <TaskIcon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
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
              </div>
              
              <p className="text-xs text-muted-foreground mb-3">{task.description}</p>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Due: {task.dueDate}</span>
                  <span className="text-muted-foreground">Assigned to: {task.assignee}</span>
                </div>
                
                {task.relatedBooking && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Booking:</span>
                    <span className="text-xs font-medium text-primary">{task.relatedBooking}</span>
                  </div>
                )}
                
                {task.notes && (
                  <div className="flex items-start gap-2">
                    <FileText className="w-3 h-3 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Notes:</p>
                      <p className="text-xs text-card-foreground">{task.notes}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {!task.completed && (
                <div className="flex justify-end">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-6 text-xs px-2 text-green-600 hover:text-green-700 hover:bg-green-50"
                    onClick={() => markTaskDone(task.id)}
                  >
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    Mark Done
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Tasks</h1>
            <p className="text-muted-foreground">Manage and track all team tasks</p>
          </div>
          
          <Dialog open={isAddTaskOpen} onOpenChange={setIsAddTaskOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
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
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dueDate">Due Date</Label>
                    <Input
                      id="dueDate"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask(prev => ({ ...prev, dueDate: e.target.value }))}
                      placeholder="e.g., Today, Tomorrow..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="assignee">Assign To</Label>
                    <Select value={newTask.assignee} onValueChange={(value) => setNewTask(prev => ({ ...prev, assignee: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="You">You</SelectItem>
                        <SelectItem value="Sarah">Sarah</SelectItem>
                        <SelectItem value="Michael">Michael</SelectItem>
                        <SelectItem value="Anna">Anna</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search tasks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="follow-up">Follow-up</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="coordination">Coordination</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">
              Active Tasks ({activeTasks.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed ({completedTasks.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="space-y-4">
            {activeTasks.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <CheckCircle2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-card-foreground mb-2">
                      No active tasks
                    </h3>
                    <p className="text-muted-foreground">
                      All caught up! Add a new task to get started.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {activeTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="space-y-4">
            {completedTasks.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="flex items-center justify-center py-8">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-card-foreground mb-2">
                      No completed tasks
                    </h3>
                    <p className="text-muted-foreground">
                      Completed tasks will appear here.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {completedTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}