import { ArrowLeft, Pencil, Printer, Send, ChevronDown, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {
  reference: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  source: string;
  onBack: () => void;
}

const statusVariant: Record<string, "success" | "warning" | "cancelled"> = {
  Confirmed: "success",
  Pending: "warning",
  Cancelled: "cancelled",
};

const BookingDetailsHeader = ({ reference, status, source, onBack }: Props) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    <div className="flex items-center gap-3">
      <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
        <ArrowLeft className="w-4 h-4" />
      </Button>
      <div className="flex items-center gap-3 flex-wrap">
        <h1 className="text-2xl font-bold text-foreground tracking-tight">{reference}</h1>
        <Badge variant={statusVariant[status]}>{status}</Badge>
        <Badge variant="secondary">{source}</Badge>
      </div>
    </div>

    <div className="flex items-center gap-2 ml-auto sm:ml-0">
      <Button variant="outline" size="sm" className="gap-1.5">
        <Pencil className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Edit Booking</span>
      </Button>
      <Button variant="outline" size="sm" className="gap-1.5">
        <Printer className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Print Voucher</span>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" className="gap-1.5">
            <Send className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Send Reminder</span>
            <ChevronDown className="w-3 h-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="gap-2">
            <Mail className="w-4 h-4" /> Email
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2">
            <MessageSquare className="w-4 h-4" /> SMS
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);

export default BookingDetailsHeader;
