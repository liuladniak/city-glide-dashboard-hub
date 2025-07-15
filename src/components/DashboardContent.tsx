
import { OverviewCards } from "./OverviewCards";
import { WeatherWidget } from "./WeatherWidget";
import { QuickActions } from "./QuickActions";
import { MyTasks } from "./MyTasks";
import { TeamPresence } from "./TeamPresence";
import { RecentBookings } from "./RecentBookings";
import { PerformanceKPIs } from "./PerformanceKPIs";

interface DashboardContentProps {
  userRole: string;
}

export function DashboardContent({ userRole }: DashboardContentProps) {
  return (
    <main className="flex-1 p-6 bg-slate-50 overflow-auto">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
            <p className="text-slate-600">Welcome back! Here's what's happening with your tours today.</p>
          </div>
          <div className="flex items-center gap-3">
            <WeatherWidget />
          </div>
        </div>

        {/* Quick Actions */}
        <QuickActions userRole={userRole} />

        {/* Overview Cards */}
        <OverviewCards userRole={userRole} />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <RecentBookings />
            <PerformanceKPIs userRole={userRole} />
          </div>
          
          <div className="space-y-6">
            <MyTasks />
            <TeamPresence />
          </div>
        </div>
      </div>
    </main>
  );
}
