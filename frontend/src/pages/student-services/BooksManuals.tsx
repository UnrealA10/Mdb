// src/pages/student-services/BooksManuals.jsx
import React, { useState } from "react";
import { FileText, Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BooksManuals = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    enrollmentNumber: "",
    email: "",
    phone: "",
    bookManualName: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const constructMessage = () => {
    return `Request for Books and Manuals\n\nFull Name: ${formData.fullName}\nEnrollment Number: ${formData.enrollmentNumber}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBook/Manual Name: ${formData.bookManualName}\nPurpose: ${formData.purpose}\nAdditional Message: ${formData.message}`;
  };

  const handleEmail = () => {
    const body = encodeURIComponent(constructMessage());
    window.location.href = `mailto:admin@example.com?subject=Request for Books and Manuals&body=${body}`;
  };

  const handleWhatsapp = () => {
    const body = encodeURIComponent(constructMessage());
    window.location.href = `https://wa.me/9343418163?text=${body}`;
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Books and Manuals
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              Submit your request for books and manuals. Provide the necessary
              details below.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Submit Your Request
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Please fill out the form below with accurate information.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-brown flex items-center">
                <FileText className="h-6 w-6 text-forest-green mr-2" />
                Request Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName" className="text-earth-brown">
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Enter full name"
                      className="border-golden-sand/50 focus:ring-forest-green"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="enrollmentNumber"
                      className="text-earth-brown"
                    >
                      Enrollment Number
                    </Label>
                    <Input
                      id="enrollmentNumber"
                      placeholder="Enter enrollment number"
                      className="border-golden-sand/50 focus:ring-forest-green"
                      value={formData.enrollmentNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-earth-brown">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      className="border-golden-sand/50 focus:ring-forest-green"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-earth-brown">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      className="border-golden-sand/50 focus:ring-forest-green"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="bookManualName" className="text-earth-brown">
                    Book/Manual Name
                  </Label>
                  <Input
                    id="bookManualName"
                    placeholder="Enter book/manual name"
                    className="border-golden-sand/50 focus:ring-forest-green"
                    value={formData.bookManualName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="purpose" className="text-earth-brown">
                    Purpose
                  </Label>
                  <Input
                    id="purpose"
                    placeholder="Enter purpose"
                    className="border-golden-sand/50 focus:ring-forest-green"
                    value={formData.purpose}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-earth-brown">
                    Additional Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Provide any additional details"
                    className="border-golden-sand/50 focus:ring-forest-green"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-between">
                  <Button
                    type="button"
                    onClick={handleEmail}
                    className="bg-forest-green text-white hover:bg-forest-green/90 font-semibold px-8 py-6 text-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Send to Email
                  </Button>
                  <Button
                    type="button"
                    onClick={handleWhatsapp}
                    className="bg-forest-green text-white hover:bg-forest-green/90 font-semibold px-8 py-6 text-lg"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Send to WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BooksManuals;
