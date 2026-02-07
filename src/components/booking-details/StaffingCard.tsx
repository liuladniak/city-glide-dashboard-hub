import { Phone, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  guide: { name: string; phone: string; image: string };
}

const StaffingCard = ({ guide }: Props) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg">Assigned Guide</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex items-center gap-3">
        <Avatar className="w-11 h-11">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {guide.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold text-foreground">{guide.name}</p>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
            <Phone className="w-3 h-3" />
            {guide.phone}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default StaffingCard;
