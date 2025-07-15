
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  Users, 
  DollarSign, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

interface OverviewCardsProps {
  userRole: string;
}

const cardData = {
  admin: [
    {
      title: "Total Bookings",
      value: "247",
      change: "+12%",
      trend: "up",
      icon: Calendar,
      color: "text-travel-blue-600"
    },
    {
      title: "Active Clients",
      value: "1,340",
      change: "+8%",
      trend: "up", 
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Monthly Revenue",
      value: "$54,240",
      change: "+23%",
      trend: "up",
      icon: DollarSign,
      color: "text-purple-600"
    },
    {
      title: "Support Tickets",
      value: "12",
      change: "-4%",
      trend: "down",
      icon: MessageSquare,
      color: "text-orange-600"
    }
  ],
  agent: [
    {
      title: "My Bookings",
      value: "42",
      change: "+5%",
      trend: "up",
      icon: Calendar,
      color: "text-travel-blue-600"
    },
    {
      title: "Pending Tasks",
      value: "8",
      change: "-2%",
      trend: "down",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Completed Tours",
      value: "156",
      change: "+18%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Client Follow-ups",
      value: "23",
      change: "+3%",
      trend: "up",
      icon: Users,
      color: "text-purple-600"
    }
  ],
  support: [
    {
      title: "Open Tickets",
      value: "12",
      change: "-8%",
      trend: "down",
      icon: MessageSquare,
      color: "text-travel-blue-600"
    },
    {
      title: "Resolved Today",
      value: "34",
      change: "+15%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Avg Response Time",
      value: "2.3h",
      change: "-12%",
      trend: "down",
      icon: Clock,
      color: "text-purple-600"
    },
    {
      title: "Urgent Issues",
      value: "3",
      change: "+1%",
      trend: "up",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  ],
  finance: [
    {
      title: "Monthly Revenue",
      value: "$54,240",
      change: "+23%",
      trend: "up",
      icon: DollarSign,
      color: "text-travel-blue-600"
    },
    {
      title: "Pending Payments",
      value: "$8,450",
      change: "-5%",
      trend: "down",
      icon: Clock,
      color: "text-orange-600"
    },
    {
      title: "Invoices Sent",
      value: "89",
      change: "+12%",
      trend: "up",
      icon: CheckCircle,
      color: "text-green-600"
    },
    {
      title: "Profit Margin",
      value: "32%",
      change: "+2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ]
};

export function OverviewCards({ userRole }: OverviewCardsProps) {
  const cards = cardData[userRole as keyof typeof cardData] || cardData.admin;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} className="card-hover bg-white border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              {card.title}
            </CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{card.value}</div>
            <div className="flex items-center text-xs text-slate-600 mt-1">
              <TrendingUp className={`w-3 h-3 mr-1 ${
                card.trend === 'up' ? 'text-green-500' : 'text-red-500 rotate-180'
              }`} />
              <span className={
                card.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }>
                {card.change}
              </span>
              <span className="ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
