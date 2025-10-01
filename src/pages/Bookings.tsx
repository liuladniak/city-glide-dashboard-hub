import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Users,
  MapPin,
  Clock,
  Search,
  Filter,
  Download,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Phone,
  Trash2,
} from "lucide-react";

const bookingsData = [
  {
    id: "BK-2024-0156",
    client: "Johnson Family",
    tour: "Golden Gate Bridge & Alcatraz",
    date: "2024-07-18",
    time: "09:00 AM",
    guests: 4,
    status: "confirmed",
    guide: "Sarah Johnson",
    amount: "$480",
    phone: "+1 (555) 123-4567",
    email: "johnson@email.com"
  },
  {
    id: "BK-2024-0157",
    client: "Mike & Rachel Chen",
    tour: "Fisherman's Wharf Food Tour",
    date: "2024-07-18",
    time: "11:30 AM",
    guests: 2,
    status: "pending",
    guide: "David Park",
    amount: "$180",
    phone: "+1 (555) 234-5678",
    email: "chen@email.com"
  },
  {
    id: "BK-2024-0158",
    client: "Thompson Group",
    tour: "City Highlights Tour",
    date: "2024-07-19",
    time: "02:00 PM",
    guests: 8,
    status: "confirmed",
    guide: "Emma Wilson",
    amount: "$640",
    phone: "+1 (555) 345-6789",
    email: "thompson@email.com"
  },
  {
    id: "BK-2024-0159",
    client: "Rodriguez Wedding Party",
    tour: "Private Sunset Tour",
    date: "2024-07-20",
    time: "06:00 PM",
    guests: 12,
    status: "confirmed",
    guide: "Lisa Rodriguez",
    amount: "$1,200",
    phone: "+1 (555) 456-7890",
    email: "rodriguez@email.com"
  },
  {
    id: "BK-2024-0160",
    client: "Anderson Corp",
    tour: "Wine Country Adventure",
    date: "2024-07-21",
    time: "10:00 AM",
    guests: 15,
    status: "confirmed",
    guide: "Michael Brown",
    amount: "$1,875",
    phone: "+1 (555) 567-8901",
    email: "anderson@email.com"
  },
  {
    id: "BK-2024-0161",
    client: "Smith Couple",
    tour: "Golden Gate Bridge & Alcatraz",
    date: "2024-07-22",
    time: "01:00 PM",
    guests: 2,
    status: "pending",
    guide: "Sarah Johnson",
    amount: "$240",
    phone: "+1 (555) 678-9012",
    email: "smith@email.com"
  },
  {
    id: "BK-2024-0162",
    client: "Garcia Family",
    tour: "City Highlights Tour",
    date: "2024-07-23",
    time: "03:00 PM",
    guests: 6,
    status: "cancelled",
    guide: "Emma Wilson",
    amount: "$480",
    phone: "+1 (555) 789-0123",
    email: "garcia@email.com"
  },
];

export default function Bookings() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");

  const getStatusVariant = (status: string): "success" | "warning" | "cancelled" | "default" => {
    switch (status) {
      case "confirmed":
        return "success";
      case "pending":
        return "warning";
      case "cancelled":
        return "cancelled";
      default:
        return "default";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const filteredBookings = bookingsData.filter(booking => {
    const matchesSearch = 
      booking.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.tour.toLowerCase().includes(searchQuery.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bookings</h1>
            <p className="text-muted-foreground mt-1">
              Manage all tour bookings and reservations
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="default">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="default">
              <Plus className="w-4 h-4 mr-2" />
              New Booking
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
                  <p className="text-3xl font-bold text-foreground mt-2">{bookingsData.length}</p>
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Confirmed</p>
                  <p className="text-3xl font-bold text-green-600 dark:text-green-500 mt-2">
                    {bookingsData.filter(b => b.status === "confirmed").length}
                  </p>
                </div>
                <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-green-600 dark:text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-500 mt-2">
                    {bookingsData.filter(b => b.status === "pending").length}
                  </p>
                </div>
                <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-yellow-600 dark:text-yellow-500" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-muted-foreground">Total Guests</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    {bookingsData.reduce((sum, b) => sum + b.guests, 0)}
                  </p>
                </div>
                <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-7 h-7 text-purple-600 dark:text-purple-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Search by client, tour, or booking ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-10"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[160px] h-10">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger className="w-full sm:w-[160px] h-10">
                    <SelectValue placeholder="Filter by date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Dates</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">All Bookings</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Booking ID</TableHead>
                    <TableHead className="font-semibold">Client</TableHead>
                    <TableHead className="font-semibold">Tour</TableHead>
                    <TableHead className="font-semibold">Date & Time</TableHead>
                    <TableHead className="font-semibold">Guests</TableHead>
                    <TableHead className="font-semibold">Guide</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                    <TableHead className="text-right font-semibold">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBookings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-12 text-muted-foreground">
                        No bookings found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredBookings.map((booking) => (
                      <TableRow key={booking.id} className="hover:bg-muted/30">
                        <TableCell className="font-mono text-sm font-medium">{booking.id}</TableCell>
                        <TableCell>
                          <div className="min-w-[160px]">
                            <div className="font-medium text-foreground">{booking.client}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{booking.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 min-w-[180px]">
                            <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm">{booking.tour}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="min-w-[130px]">
                            <div className="flex items-center gap-1.5 text-sm">
                              <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                              <span>{formatDate(booking.date)}</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-1">
                              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{booking.time}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium">{booking.guests}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-foreground">{booking.guide}</span>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusVariant(booking.status)} className="capitalize">
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="font-semibold text-foreground">{booking.amount}</span>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                              <DropdownMenuItem>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit Booking
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Phone className="mr-2 h-4 w-4" />
                                Contact Client
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Cancel Booking
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
