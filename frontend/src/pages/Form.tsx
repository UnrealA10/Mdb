import { FileText, Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FormPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Application Form
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              Take the first step towards joining MDB. Complete the application
              form below to begin your journey to becoming part of our vibrant
              learning community.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Submit Your Application
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Please fill out the form below with accurate information. Our
              admissions team will review your application and reach out with
              next steps.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-brown flex items-center">
                <FileText className="h-6 w-6 text-forest-green mr-2" />
                Application Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Student Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-earth-brown">
                      Student First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="border-golden-sand/50 focus:ring-forest-green"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-earth-brown">
                      Student Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="border-golden-sand/50 focus:ring-forest-green"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="gradeLevel" className="text-earth-brown">
                    Applying for Grade Level
                  </Label>
                  <Input
                    id="gradeLevel"
                    placeholder="e.g., Grade 5"
                    className="border-golden-sand/50 focus:ring-forest-green"
                  />
                </div>

                {/* Parent/Guardian Information */}
                <div>
                  <Label htmlFor="parentName" className="text-earth-brown">
                    Parent/Guardian Name
                  </Label>
                  <Input
                    id="parentName"
                    placeholder="Enter parent/guardian name"
                    className="border-golden-sand/50 focus:ring-forest-green"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-earth-brown">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    className="border-golden-sand/50 focus:ring-forest-green"
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
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <Label htmlFor="message" className="text-earth-brown">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Provide any additional details or questions"
                    className="border-golden-sand/50 focus:ring-forest-green"
                    rows={5}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    className="bg-forest-green text-white hover:bg-forest-green/90 font-semibold px-8 py-6 text-lg"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Submit Application
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white text-forest-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Assistance?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our admissions team is here to help with any questions or concerns
            about the application process.
          </p>
          <a href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-forest-green text-white hover:bg-white hover:border-forest-green hover:text-forest-green"
            >
              Contact Admissions
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormPage;