import { useNavigate } from "react-router-dom";
import BookingDetailsHeader from "@/components/booking-details/BookingDetailsHeader";
import QuickStatsRibbon from "@/components/booking-details/QuickStatsRibbon";
import ExperienceCard from "@/components/booking-details/ExperienceCard";
import GuestManifest from "@/components/booking-details/GuestManifest";
import FinancialSummary from "@/components/booking-details/FinancialSummary";
import StaffingCard from "@/components/booking-details/StaffingCard";
import InternalNotes from "@/components/booking-details/InternalNotes";
import AuditTrail from "@/components/booking-details/AuditTrail";

const bookingData = {
  reference: "BK-1026",
  status: "Confirmed" as const,
  source: "Website",
  date: "Sat, Jan 24 @ 10:30 AM",
  guests: { total: 3, adults: 2, children: 1 },
  language: "English",
  guide: { name: "Ahmet Yilmaz", phone: "+90 532 123 4567", image: "" },
  tour: "Old City Walking Tour",
  tourDescription:
    "Discover centuries of history as you walk through the cobblestone streets of the Old City. Visit iconic landmarks, hidden courtyards, and bustling bazaars with an expert local guide who brings every stone to life.",
  itinerary: [
    { time: "10:30 AM", stop: "Meeting Point – Sultanahmet Square", description: "Gather at the fountain in the center of the square." },
    { time: "10:45 AM", stop: "Blue Mosque Exterior", description: "Explore the architecture and history of the iconic mosque." },
    { time: "11:30 AM", stop: "Hippodrome of Constantinople", description: "Walk through the ancient chariot-racing grounds." },
    { time: "12:00 PM", stop: "Grand Bazaar Entrance", description: "A guided introduction to one of the world's oldest markets." },
    { time: "12:45 PM", stop: "Tour End – Grand Bazaar", description: "Free time to explore the bazaar on your own." },
  ],
  meetingPoint: "Sultanahmet Square, Fatih, Istanbul",
  contact: { name: "Sarah Johnson", email: "sarah.johnson@email.com", phone: "+1 555 0198" },
  additionalGuests: ["Michael Johnson", "Lily Johnson (Child)"],
  pricing: { total: 240, paid: 160, currency: "$" },
  notes: "Client requested extra photo stops. Allergic to nuts – inform guide for any food stops.",
  audit: [
    { date: "Jan 20", event: "Booking created via Website" },
    { date: "Jan 21", event: "Payment of $160.00 received (Credit Card)" },
    { date: "Jan 22", event: "Guide 'Ahmet Yilmaz' assigned by Admin" },
    { date: "Jan 23", event: "Confirmation email sent to client" },
    { date: "Jan 24", event: "Reminder SMS sent to client" },
  ],
};

const BookingDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <BookingDetailsHeader
          reference={bookingData.reference}
          status={bookingData.status}
          source={bookingData.source}
          onBack={() => navigate("/bookings")}
        />

        <QuickStatsRibbon
          date={bookingData.date}
          guests={bookingData.guests}
          language={bookingData.language}
          guideName={bookingData.guide.name}
        />

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <ExperienceCard
              tourName={bookingData.tour}
              description={bookingData.tourDescription}
              itinerary={bookingData.itinerary}
              meetingPoint={bookingData.meetingPoint}
            />
            <GuestManifest
              contact={bookingData.contact}
              additionalGuests={bookingData.additionalGuests}
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <FinancialSummary
              total={bookingData.pricing.total}
              paid={bookingData.pricing.paid}
              currency={bookingData.pricing.currency}
            />
            <StaffingCard guide={bookingData.guide} />
            <InternalNotes initialNotes={bookingData.notes} />
          </div>
        </div>

        <AuditTrail entries={bookingData.audit} />
      </div>
    </div>
  );
};

export default BookingDetails;
