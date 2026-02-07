import { History } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  entries: { date: string; event: string }[];
}

const AuditTrail = ({ entries }: Props) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-base flex items-center gap-2">
        <History className="w-4 h-4" />
        Audit Trail
      </CardTitle>
    </CardHeader>
    <CardContent>
      <ScrollArea className="h-36">
        <div className="space-y-2.5">
          {entries.map((entry, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <span className="text-xs font-medium text-muted-foreground whitespace-nowrap min-w-[50px]">
                {entry.date}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-border mt-1.5 shrink-0" />
              <span className="text-foreground">{entry.event}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
);

export default AuditTrail;
