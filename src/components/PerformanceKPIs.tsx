
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Star, 
  Clock,
  Users,
  DollarSign
} from "lucide-react";

interface PerformanceKPIsProps {
  userRole: string;
}

const kpiData = {
  admin: [
    {
      title: "Monthly Revenue Target",
      current: 54240,
      target: 60000,
      unit: "$",
      progress: 90,
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Customer Satisfaction",
      current: 4.8,
      target: 5.0,
      unit: "/5",
      progress: 96,
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Bookings This Month",
      current: 247,
      target: 280,
      unit: "",
      progress: 88,
      icon: Target,
      color: "text-travel-blue-600"
    }
  ],
  agent: [
    {
      title: "Monthly Bookings",
      current: 42,
      target: 50,
      unit: "",
      progress: 84,
      icon: Target,
      color: "text-travel-blue-600"
    },
    {
      title: "Client Satisfaction",
      current: 4.9,
      target: 5.0,
      unit: "/5",
      progress: 98,
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Response Time",
      current: 1.2,
      target: 2.0,
      unit: "h",
      progress: 40,
      icon: Clock,
      color: "text-green-600"
    }
  ],
  support: [
    {
      title: "Ticket Resolution Rate",
      current: 94,
      target: 95,
      unit: "%",
      progress: 99,
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Avg Response Time",
      current: 2.3,
      target: 4.0,
      unit: "h",
      progress: 58,
      icon: Clock,
      color: "text-travel-blue-600"
    },
    {
      title: "Customer Rating",
      current: 4.7,
      target: 5.0,
      unit: "/5",
      progress: 94,
      icon: Star,
      color: "text-yellow-600"
    }
  ],
  finance: [
    {
      title: "Collection Efficiency",
      current: 87,
      target: 90,
      unit: "%",
      progress: 97,
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Invoice Processing",
      current: 1.5,
      target: 2.0,
      unit: "days",
      progress: 75,
      icon: Clock,
      color: "text-travel-blue-600"
    },
    {
      title: "Payment Success Rate",
      current: 96,
      target: 98,
      unit: "%",
      progress: 98,
      icon: DollarSign,
      color: "text-purple-600"
    }
  ]
};

export function PerformanceKPIs({ userRole }: PerformanceKPIsProps) {
  const kpis = kpiData[userRole as keyof typeof kpiData] || kpiData.admin;

  const formatValue = (value: number, unit: string) => {
    if (unit === "$") return `$${value.toLocaleString()}`;
    if (unit === "/5") return value.toFixed(1);
    if (unit === "h") return `${value}h`;
    if (unit === "days") return `${value} days`;
    if (unit === "%") return `${value}%`;
    return value.toString();
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return "bg-green-500";
    if (progress >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className="bg-white border-slate-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <div>
          <CardTitle className="text-lg font-semibold text-slate-900">Performance KPIs</CardTitle>
          <p className="text-sm text-slate-600">Track your key metrics and goals</p>
        </div>
        <TrendingUp className="w-5 h-5 text-travel-blue-600" />
      </CardHeader>
      <CardContent className="space-y-6">
        {kpis.map((kpi, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
                <span className="text-sm font-medium text-slate-900">{kpi.title}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-slate-900">
                  {formatValue(kpi.current, kpi.unit)}
                </span>
                <span className="text-xs text-slate-500 ml-1">
                  / {formatValue(kpi.target, kpi.unit)}
                </span>
              </div>
            </div>
            
            <div className="space-y-1">
              <Progress 
                value={kpi.progress} 
                className="h-2"
              />
              <div className="flex justify-between text-xs text-slate-500">
                <span>{kpi.progress}% of target</span>
                <span className={kpi.progress >= 90 ? "text-green-600" : kpi.progress >= 70 ? "text-yellow-600" : "text-red-600"}>
                  {kpi.progress >= 90 ? "On track" : kpi.progress >= 70 ? "Needs attention" : "Behind target"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
