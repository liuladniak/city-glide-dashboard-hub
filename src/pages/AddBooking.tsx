import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Calendar, Users, Clock, DollarSign, Phone, Mail, User, MapPin, CreditCard, FileText, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";

const AddBooking= () => {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState("admin");
  const [currentUser] = useState({
    name: "Sarah Johnson",
    role: currentRole,
    avatar: "SJ",
    email: "sarah@tourflow.com"
  });

  const handleRoleChange = (newRole: string) => {
    setCurrentRole(newRole);
  };

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    nationality: "",
    tourPackage: "",
    customTourTitle: "",
    customDuration: "",
    customNotes: "",
    date: "",
    time: "",
    guests: "1",
    language: "english",
    paymentMethod: "",
    amount: "",
    paymentStatus: "pending",
    notes: ""
  });

  const tourPackages = [
    { id: "historic-old-town", name: "Historic Old Town Walk", duration: "3 hours", price: 45, description: "Explore Sultanahmet's iconic landmarks" },
    { id: "bosporus-shoreline", name: "Bosporus Shoreline Tour", duration: "4 hours", price: 65, description: "Scenic waterfront walking tour" },
    { id: "culinary-street-food", name: "Culinary Street Food Tour", duration: "3.5 hours", price: 55, description: "Taste authentic Istanbul flavors" },
    { id: "grand-bazaar-spice", name: "Grand Bazaar & Spice Market", duration: "2.5 hours", price: 40, description: "Shopping and cultural experience" },
    { id: "galata-tower-beyoglu", name: "Galata Tower & Beyoğlu Walk", duration: "3 hours", price: 50, description: "Modern Istanbul exploration" },
    { id: "princes-islands", name: "Princes' Islands Day Trip", duration: "8 hours", price: 120, description: "Ferry ride and island exploration" },
    { id: "asian-side-kadikoy", name: "Asian Side Kadıköy Tour", duration: "4 hours", price: 60, description: "Local neighborhoods and culture" },
    { id: "sunset-golden-horn", name: "Sunset Golden Horn Walk", duration: "2 hours", price: 35, description: "Evening scenic tour" },
    { id: "byzantine-churches", name: "Byzantine Churches Tour", duration: "5 hours", price: 80, description: "Historical religious sites" },
    { id: "private-custom", name: "Private Custom Tour", duration: "Flexible", price: 0, description: "Tailored experience for your group" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    // Navigate back to dashboard
    navigate("/");
  };

  const selectedPackage = tourPackages.find(pkg => pkg.id === formData.tourPackage);
  const isCustomTour = formData.tourPackage === "private-custom";
  const calculateTotal = () => {
    if (isCustomTour) return formData.amount ? parseFloat(formData.amount) : 0;
    if (!selectedPackage) return 0;
    return selectedPackage.price * parseInt(formData.guests);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar 
          userRole={currentRole} 
          currentRole={currentRole}
          onRoleChange={handleRoleChange}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader 
            user={{ ...currentUser, role: currentRole }} 
            currentRole={currentRole}
            onRoleChange={handleRoleChange}
          />
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-foreground">Add New Booking</h1>
              <p className="text-muted-foreground mt-1">Create a new tour booking for your customer</p>
            </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Customer Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <User className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Customer Information</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Full Name *</Label>
                      <Input
                        id="customerName"
                        placeholder="Enter customer full name"
                        value={formData.customerName}
                        onChange={(e) => handleInputChange("customerName", e.target.value)}
                        required
                        className="focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Input
                        id="nationality"
                        placeholder="e.g., Turkish, American"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange("nationality", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="customer@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+90 555 123 4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Tour Selection */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Tour Selection</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tourPackage">Select Tour *</Label>
                      <Select value={formData.tourPackage} onValueChange={(value) => handleInputChange("tourPackage", value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose a tour or select custom" />
                        </SelectTrigger>
                        <SelectContent>
                          {tourPackages.map((tour) => (
                            <SelectItem key={tour.id} value={tour.id}>
                              <div className="flex items-center justify-between w-full">
                                <div>
                                  <div className="font-medium">{tour.name}</div>
                                  <div className="text-sm text-muted-foreground">{tour.description}</div>
                                </div>
                                <div className="text-right ml-4">
                                  <div className="text-sm font-medium">
                                    {tour.price === 0 ? "Custom" : `€${tour.price}`}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{tour.duration}</div>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {isCustomTour && (
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
                        <div className="space-y-2">
                          <Label htmlFor="customTourTitle">Custom Tour Title *</Label>
                          <Input
                            id="customTourTitle"
                            placeholder="Enter tour title"
                            value={formData.customTourTitle}
                            onChange={(e) => handleInputChange("customTourTitle", e.target.value)}
                            required={isCustomTour}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="customDuration">Duration *</Label>
                          <Input
                            id="customDuration"
                            placeholder="e.g., 4 hours"
                            value={formData.customDuration}
                            onChange={(e) => handleInputChange("customDuration", e.target.value)}
                            required={isCustomTour}
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="customNotes">Custom Tour Notes</Label>
                          <Textarea
                            id="customNotes"
                            placeholder="Special requirements, locations, activities..."
                            value={formData.customNotes}
                            onChange={(e) => handleInputChange("customNotes", e.target.value)}
                            className="min-h-[80px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <Separator />

                {/* Tour Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Tour Details</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Tour Date *</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Start Time *</Label>
                      <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select start time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="09:00">9:00 AM</SelectItem>
                          <SelectItem value="09:30">9:30 AM</SelectItem>
                          <SelectItem value="10:00">10:00 AM</SelectItem>
                          <SelectItem value="10:30">10:30 AM</SelectItem>
                          <SelectItem value="11:00">11:00 AM</SelectItem>
                          <SelectItem value="14:00">2:00 PM</SelectItem>
                          <SelectItem value="14:30">2:30 PM</SelectItem>
                          <SelectItem value="15:00">3:00 PM</SelectItem>
                          <SelectItem value="15:30">3:30 PM</SelectItem>
                          <SelectItem value="16:00">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger className="pl-10">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[...Array(15)].map((_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="turkish">Turkish</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="italian">Italian</SelectItem>
                          <SelectItem value="russian">Russian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Payment Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Payment Details</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="paymentMethod">Payment Method *</Label>
                      <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="stripe">Stripe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (€) {isCustomTour && "*"}</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="amount"
                          type="number"
                          step="0.01"
                          placeholder="0.00"
                          value={formData.amount}
                          onChange={(e) => handleInputChange("amount", e.target.value)}
                          className="pl-10"
                          required={isCustomTour}
                          disabled={!isCustomTour}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="paymentStatus">Payment Status</Label>
                      <Select value={formData.paymentStatus} onValueChange={(value) => handleInputChange("paymentStatus", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paid">Paid</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="partial">Partial Payment</SelectItem>
                          <SelectItem value="refunded">Refunded</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Notes */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Notes & Special Requests</h3>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Comments</Label>
                    <Textarea
                      id="notes"
                      placeholder="Special requests, dietary restrictions, accessibility needs, or any other important information..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange("notes", e.target.value)}
                      className="min-h-[120px] resize-none"
                    />
                  </div>
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 pt-8">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    Save Booking
                  </Button>
                  <Button type="button" variant="outline" onClick={() => navigate("/")} className="px-8">
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Booking Summary */}
        <div className="space-y-6">
          {/* Booking Summary */}
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-5 w-5 text-primary" />
                Booking Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Customer Summary */}
              {formData.customerName && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Customer</h4>
                  <div>
                    <p className="font-medium">{formData.customerName}</p>
                    {formData.email && <p className="text-sm text-muted-foreground">{formData.email}</p>}
                    {formData.phone && <p className="text-sm text-muted-foreground">{formData.phone}</p>}
                  </div>
                </div>
              )}

              {/* Tour Summary */}
              {selectedPackage && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Tour</h4>
                  <div>
                    <p className="font-medium">
                      {isCustomTour ? formData.customTourTitle || "Custom Tour" : selectedPackage.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {isCustomTour ? formData.customDuration || "Custom Duration" : selectedPackage.duration}
                    </p>
                  </div>
                </div>
              )}

              {/* Date & Time */}
              {(formData.date || formData.time) && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Schedule</h4>
                  <div className="space-y-1">
                    {formData.date && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{new Date(formData.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    )}
                    {formData.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {formData.time === "09:00" ? "9:00 AM" :
                           formData.time === "09:30" ? "9:30 AM" :
                           formData.time === "10:00" ? "10:00 AM" :
                           formData.time === "10:30" ? "10:30 AM" :
                           formData.time === "11:00" ? "11:00 AM" :
                           formData.time === "14:00" ? "2:00 PM" :
                           formData.time === "14:30" ? "2:30 PM" :
                           formData.time === "15:00" ? "3:00 PM" :
                           formData.time === "15:30" ? "3:30 PM" :
                           formData.time === "16:00" ? "4:00 PM" : formData.time}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Guests & Language */}
              {(formData.guests || formData.language !== "english") && (
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Details</h4>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{formData.guests} {parseInt(formData.guests) === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                    {formData.language && formData.language !== "english" && (
                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 text-center text-xs">🌍</span>
                        <span className="text-sm capitalize">{formData.language}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Pricing */}
              {selectedPackage && (
                <div className="space-y-3 pt-4 border-t border-border">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">Pricing</h4>
                  {!isCustomTour ? (
                    <>
                      <div className="flex justify-between text-sm">
                        <span>Base price per person:</span>
                        <span>€{selectedPackage.price}</span>
                      </div>
                      {parseInt(formData.guests) > 1 && (
                        <div className="flex justify-between text-sm">
                          <span>× {formData.guests} guests:</span>
                          <span>€{selectedPackage.price * parseInt(formData.guests)}</span>
                        </div>
                      )}
                      <div className="flex justify-between font-semibold pt-2 border-t border-border">
                        <span>Total:</span>
                        <span className="text-primary">€{calculateTotal()}</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between font-semibold">
                      <span>Custom Amount:</span>
                      <span className="text-primary">€{formData.amount || "0"}</span>
                    </div>
                  )}

                  {/* Payment Status */}
                  {formData.paymentStatus && (
                    <div className="flex justify-between text-sm">
                      <span>Payment Status:</span>
                      <span className={`capitalize ${
                        formData.paymentStatus === 'paid' ? 'text-green-600' : 
                        formData.paymentStatus === 'pending' ? 'text-yellow-600' : 
                        'text-muted-foreground'
                      }`}>
                        {formData.paymentStatus}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {!selectedPackage && (
                <div className="text-center py-8">
                  <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm">Select a tour to see booking preview</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AddBooking;