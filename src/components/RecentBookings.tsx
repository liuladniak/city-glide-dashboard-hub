
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar,
  Users,
  MapPin,
  Clock,
  MoreHorizontal,
  Eye,
  Edit,
  Phone
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const bookings = [
  {
    id: "BK-2024-0156",
    client: "Johnson Family",
    tour: "Golden Gate Bridge & Alcatraz",
    date: "2024-07-18",
    time: "09:00 AM",
    guests: 4,
    status: "confirmed",
    guide: "Sarah Johnson",
    amount: "$480"
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
    amount: "$180"
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
    amount: "$640"
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
    amount: "$1,200"
  }
];

export function RecentBookings() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="bg-white border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-slate-900">Recent Bookings</CardTitle>
          <p className="text-sm text-slate-600">Latest tour reservations and updates</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-medium text-slate-900">{booking.client}</h4>
                  <Badge className={`text-xs px-2 py-1 ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </Badge>
                  <span className="text-sm text-slate-500">{booking.id}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{booking.tour}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(booking.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{booking.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{booking.guests} guests</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-600">Guide: <span className="font-medium">{booking.guide}</span></span>
                  <span className="font-medium text-travel-blue-600">{booking.amount}</span>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
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
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
