
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Target, 
  Star, 
  Clock,
  DollarSign
} from "lucide-react";

interface CompactKPIsProps {
  userRole: string;
}

const kpiData = {
  admin: [
    { title: "Revenue Target", value: "90%", icon: DollarSign, trend: "up" },
    { title: "Satisfaction", value: "4.8/5", icon: Star, trend: "up" },
    { title: "Bookings", value: "88%", icon: Target, trend: "up" },
  ],
  agent: [
    { title: "My Bookings", value: "42/50", icon: Target, trend: "up" },
    { title: "Client Rating", value: "4.9/5", icon: Star, trend: "up" },
    { title: "Response Time", value: "1.2h", icon: Clock, trend: "down" },
  ],
  support: [
    { title: "Resolution Rate", value: "94%", icon: Target, trend: "up" },
    { title: "Response Time", value: "2.3h", icon: Clock, trend: "up" },
    { title: "Rating", value: "4.7/5", icon: Star, trend: "up" },
  ],
  finance: [
    { title: "Collection", value: "87%", icon: Target, trend: "up" },
    { title: "Processing", value: "1.5d", icon: Clock, trend: "down" },
    { title: "Success Rate", value: "96%", icon: DollarSign, trend: "up" },
  ]
};

export function CompactKPIs({ userRole }: CompactKPIsProps) {
  const kpis = kpiData[userRole as keyof typeof kpiData] || kpiData.admin;

  return (
    <Card className="bg-white border-slate-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-travel-blue-600" />
          Quick KPIs
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center mb-1">
              <kpi.icon className="w-3 h-3 text-slate-500" />
            </div>
            <div className="text-lg font-semibold text-slate-900">{kpi.value}</div>
            <div className="text-xs text-slate-500">{kpi.title}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
