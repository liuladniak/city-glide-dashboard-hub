
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  Target, 
  Star, 
  Clock,
  DollarSign,
  Heart
} from "lucide-react";

interface CompactKPIsProps {
  userRole: string;
}

const kpiData = {
  admin: [
    { title: "Revenue Target", value: "90%", icon: DollarSign, trend: "up", color: "text-emerald-600" },
    { title: "Satisfaction", value: "4.8/5", icon: Star, trend: "up", color: "text-amber-500" },
    { title: "Bookings", value: "88%", icon: Target, trend: "up", color: "text-blue-600" },
  ],
  agent: [
    { title: "My Bookings", value: "42/50", icon: Target, trend: "up", color: "text-blue-600" },
    { title: "Client Rating", value: "4.9/5", icon: Star, trend: "up", color: "text-amber-500" },
    { title: "Response Time", value: "1.2h", icon: Clock, trend: "down", color: "text-emerald-600" },
  ],
  support: [
    { title: "Resolution Rate", value: "94%", icon: Target, trend: "up", color: "text-emerald-600" },
    { title: "Response Time", value: "2.3h", icon: Clock, trend: "up", color: "text-blue-600" },
    { title: "Rating", value: "4.7/5", icon: Star, trend: "up", color: "text-amber-500" },
  ],
  finance: [
    { title: "Collection", value: "87%", icon: Target, trend: "up", color: "text-emerald-600" },
    { title: "Processing", value: "1.5d", icon: Clock, trend: "down", color: "text-blue-600" },
    { title: "Success Rate", value: "96%", icon: DollarSign, trend: "up", color: "text-purple-600" },
  ]
};

export function CompactKPIs({ userRole }: CompactKPIsProps) {
  const kpis = kpiData[userRole as keyof typeof kpiData] || kpiData.admin;

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-slate-900 flex items-center gap-2">
          <Heart className="w-4 h-4 text-pink-500" />
          My Stats
        </CardTitle>
        <p className="text-xs text-slate-600">Your personal performance</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {kpis.map((kpi, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full bg-slate-100`}>
                <kpi.icon className={`w-4 h-4 ${kpi.color}`} />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900">{kpi.title}</div>
                <div className="text-xs text-slate-500">Personal goal</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-slate-900">{kpi.value}</div>
              <div className={`text-xs flex items-center gap-1 ${
                kpi.trend === 'up' ? 'text-emerald-600' : 'text-blue-600'
              }`}>
                <TrendingUp className={`w-3 h-3 ${
                  kpi.trend === 'up' ? '' : 'rotate-180'
                }`} />
                Good
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
