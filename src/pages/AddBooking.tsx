import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, DollarSign, Phone, Mail, ArrowLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

const AddBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    tourPackage: "",
    date: "",
    time: "",
    guests: "1",
    specialRequests: "",
    emergencyContact: "",
    emergencyPhone: ""
  });

  const tourPackages = [
    { id: "city-tour", name: "City Heritage Tour", duration: "4 hours", price: "$120" },
    { id: "nature-walk", name: "Nature & Wildlife Walk", duration: "6 hours", price: "$180" },
    { id: "cultural-experience", name: "Cultural Experience", duration: "8 hours", price: "$250" },
    { id: "adventure-package", name: "Adventure Package", duration: "Full Day", price: "$350" },
    { id: "sunset-cruise", name: "Sunset Cruise", duration: "3 hours", price: "$95" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Booking submitted:", formData);
    // Navigate back or show success message
  };

  const selectedPackage = tourPackages.find(pkg => pkg.id === formData.tourPackage);

  return (
    <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="hover:bg-accent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Add New Booking</h1>
              <p className="text-muted-foreground mt-1">Create a new tour booking for your customer</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Booking Information
                  </CardTitle>
                  <CardDescription>
                    Fill in the customer and tour details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Customer Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Customer Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="customerName">Full Name *</Label>
                          <Input
                            id="customerName"
                            placeholder="Enter customer name"
                            value={formData.customerName}
                            onChange={(e) => handleInputChange("customerName", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="customer@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="guests">Number of Guests *</Label>
                          <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select guests" />
                            </SelectTrigger>
                            <SelectContent>
                              {[...Array(20)].map((_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString()}>
                                  {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Tour Information */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="text-lg font-semibold text-foreground">Tour Details</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="tourPackage">Tour Package *</Label>
                          <Select value={formData.tourPackage} onValueChange={(value) => handleInputChange("tourPackage", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a tour package" />
                            </SelectTrigger>
                            <SelectContent>
                              {tourPackages.map((pkg) => (
                                <SelectItem key={pkg.id} value={pkg.id}>
                                  <div className="flex items-center justify-between w-full">
                                    <span>{pkg.name}</span>
                                    <span className="text-sm text-muted-foreground ml-4">
                                      {pkg.duration} • {pkg.price}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Tour Date *</Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleInputChange("date", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="time">Preferred Time *</Label>
                          <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="specialRequests">Special Requests</Label>
                          <Textarea
                            id="specialRequests"
                            placeholder="Any dietary restrictions, accessibility needs, or special requests..."
                            value={formData.specialRequests}
                            onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                            className="min-h-[100px]"
                          />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                            <Input
                              id="emergencyContact"
                              placeholder="Emergency contact person"
                              value={formData.emergencyContact}
                              onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                            <Input
                              id="emergencyPhone"
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              value={formData.emergencyPhone}
                              onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                            />
                          </div>
                        </div>
        </div>
      </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 pt-6 border-t border-border">
                      <Button type="submit" className="flex-1">
                        Create Booking
                      </Button>
                      <Button type="button" variant="outline" onClick={() => navigate(-1)}>
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
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Booking Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedPackage ? (
                    <>
                      <div>
                        <h4 className="font-medium text-foreground">{selectedPackage.name}</h4>
                        <p className="text-sm text-muted-foreground">{selectedPackage.duration}</p>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Base price:</span>
                        <span className="font-medium">{selectedPackage.price}</span>
                      </div>
                      {formData.guests && parseInt(formData.guests) > 1 && (
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">
                            × {formData.guests} guests:
                          </span>
                          <span className="font-medium">
                            ${(parseInt(selectedPackage.price.replace('$', '')) * parseInt(formData.guests))}
                          </span>
                        </div>
                      )}
                      <div className="pt-2 border-t border-border">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>
                            ${formData.guests ? 
                              (parseInt(selectedPackage.price.replace('$', '')) * parseInt(formData.guests)) : 
                              selectedPackage.price
                            }
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-muted-foreground text-sm">Select a tour package to see pricing</p>
                  )}
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Booking Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-primary mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Book at least 24 hours in advance for better availability
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="h-4 w-4 text-primary mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Verification call will be made within 2 hours
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail className="h-4 w-4 text-primary mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      Confirmation email sent automatically
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Available Time Slots */}
              {formData.date && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Available Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"].map((time) => (
                        <Badge 
                          key={time}
                          variant={formData.time === time ? "default" : "secondary"}
                          className="justify-center py-1 cursor-pointer"
                          onClick={() => handleInputChange("time", time)}
                        >
                          {time === "09:00" ? "9:00 AM" :
                           time === "10:00" ? "10:00 AM" :
                           time === "11:00" ? "11:00 AM" :
                           time === "14:00" ? "2:00 PM" :
                           time === "15:00" ? "3:00 PM" : "4:00 PM"}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddBooking;