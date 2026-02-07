import { CalendarDays, Users, Globe, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Props {
  date: string;
  guests: { total: number; adults: number; children: number };
  language: string;
  guideName: string;
}

const items = (props: Props) => [
  {
    icon: CalendarDays,
    label: "Date & Time",
    value: props.date,
  },
  {
    icon: Users,
    label: "Guests",
    value: `${props.guests.total} Total`,
    sub: `${props.guests.adults} Adults, ${props.guests.children} Child`,
  },
  {
    icon: Globe,
    label: "Language",
    value: props.language,
    flag: "🇬🇧",
  },
  {
    icon: UserCheck,
    label: "Assignment",
    value: props.guideName,
    action: "Reassign",
  },
];

const QuickStatsRibbon = (props: Props) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
    {items(props).map((item) => (
      <Card key={item.label} className="p-3.5 flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
          <item.icon className="w-4 h-4 text-foreground" />
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
          <p className="text-sm font-semibold text-foreground truncate flex items-center gap-1.5">
            {item.flag && <span>{item.flag}</span>}
            {item.value}
          </p>
          {item.sub && (
            <p className="text-xs text-muted-foreground">{item.sub}</p>
          )}
          {item.action && (
            <button className="text-xs text-foreground hover:underline font-medium mt-0.5">
              {item.action}
            </button>
          )}
        </div>
      </Card>
    ))}
  </div>
);

export default QuickStatsRibbon;
