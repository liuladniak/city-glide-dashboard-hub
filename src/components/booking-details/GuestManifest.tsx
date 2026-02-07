import { Mail, Phone, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Props {
  contact: { name: string; email: string; phone: string };
  additionalGuests: string[];
}

const GuestManifest = ({ contact, additionalGuests }: Props) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg">Guest Manifest</CardTitle>
    </CardHeader>
    <CardContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-foreground">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-primary" />
                </div>
                {contact.name}
              </div>
            </TableCell>
            <TableCell>
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-sm text-foreground">
                  <Mail className="w-3 h-3 text-muted-foreground" />
                  {contact.email}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-foreground">
                  <Phone className="w-3 h-3 text-muted-foreground" />
                  {contact.phone}
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Badge variant="default" className="text-xs">Primary</Badge>
            </TableCell>
          </TableRow>
          {additionalGuests.map((guest) => (
            <TableRow key={guest}>
              <TableCell className="font-medium text-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  {guest}
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground text-sm">—</TableCell>
              <TableCell className="text-right">
                <Badge variant="secondary" className="text-xs">Guest</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
);

export default GuestManifest;
