import { useState } from "react";
import { StickyNote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface Props {
  initialNotes: string;
}

const InternalNotes = ({ initialNotes }: Props) => {
  const [notes, setNotes] = useState(initialNotes);

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <StickyNote className="w-4 h-4" />
          Internal Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Staff-only notes..."
          className="min-h-[100px] text-sm resize-none"
        />
        <Button
          size="sm"
          variant="secondary"
          className="w-full"
          onClick={() => toast({ title: "Notes saved", description: "Internal notes updated." })}
        >
          Save Note
        </Button>
      </CardContent>
    </Card>
  );
};

export default InternalNotes;
