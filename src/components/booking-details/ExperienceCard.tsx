import { MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface ItineraryStop {
  time: string;
  stop: string;
  description: string;
}

interface Props {
  tourName: string;
  description: string;
  itinerary: ItineraryStop[];
  meetingPoint: string;
}

const ExperienceCard = ({ tourName, description, itinerary, meetingPoint }: Props) => (
  <Card>
    <CardHeader className="pb-3">
      <CardTitle className="text-lg">{tourName}</CardTitle>
    </CardHeader>
    <CardContent>
      <Tabs defaultValue="overview">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </TabsContent>

        <TabsContent value="itinerary" className="mt-4">
          <div className="relative pl-6 space-y-5">
            {/* Timeline line */}
            <div className="absolute left-[9px] top-1 bottom-1 w-px bg-border" />

            {itinerary.map((stop, i) => (
              <div key={i} className="relative">
                {/* Dot */}
                <div className={`absolute -left-6 top-0.5 w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                  i === 0 ? "border-primary bg-primary" : "border-border bg-card"
                }`}>
                  {i === 0 && <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-medium text-muted-foreground">{stop.time}</span>
                  </div>
                  <p className="text-sm font-semibold text-foreground mt-0.5">{stop.stop}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stop.description}</p>
                </div>

                {i < itinerary.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="location" className="mt-4">
          <div className="rounded-lg border bg-muted/50 h-48 flex flex-col items-center justify-center gap-2">
            <MapPin className="w-8 h-8 text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground font-medium">Map Placeholder</p>
            <p className="text-xs text-muted-foreground">{meetingPoint}</p>
          </div>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
);

export default ExperienceCard;
