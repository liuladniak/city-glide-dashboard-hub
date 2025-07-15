
import { WeatherWidget } from "./WeatherWidget";
import { QuickActions } from "./QuickActions";
import { MyTasks } from "./MyTasks";
import { TeamPresence } from "./TeamPresence";
import { RecentBookings } from "./RecentBookings";
import { CompactKPIs } from "./CompactKPIs";
import { OverviewCards } from "./OverviewCards";

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

        {/* Priority Actions */}
        <QuickActions userRole={userRole} />

        {/* Main Content Grid - Prioritized Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Primary Work Area */}
          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <MyTasks />
              <CompactKPIs userRole={userRole} />
            </div>
            <RecentBookings />
          </div>
          
          {/* Right Column - Secondary Info */}
          <div className="space-y-6">
            <TeamPresence />
            {userRole === 'admin' && (
              <div className="pt-4">
                <h3 className="text-sm font-medium text-slate-700 mb-4">Admin Overview</h3>
                <OverviewCards userRole={userRole} />
              </div>
            )}
          </div>
        </div>

        {/* Stats for non-admin roles in a separate section */}
        {userRole !== 'admin' && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">My Performance</h3>
            <OverviewCards userRole={userRole} />
          </div>
        )}
      </div>
    </main>
  );
}
