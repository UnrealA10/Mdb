import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  User,
  Building
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Phone Numbers",
      icon: <Phone className="h-6 w-6" />,
      details: [
        { label: "Primary", value: "9480041361" },
        { label: "Secondary", value: "9452504888" }
      ]
    },
    {
      title: "Email Address",
      icon: <Mail className="h-6 w-6" />,
      details: [
        { label: "General Inquiries", value: "mdbschool23@gmail.com" },
        { label: "Principal", value: "tauseebahamad888@gmail.com" }
      ]
    },
    {
      title: "School Address",
      icon: <MapPin className="h-6 w-6" />,
      details: [
        { label: "Full Address", value: "MDB School Sagra Sunderpur, Pratapgarh, Uttar Pradesh, India, 230136" }
      ]
    },
    {
      title: "School Timings",
      icon: <Clock className="h-6 w-6" />,
      details: [
        { label: "School Hours", value: "7:30 AM to 12:30 PM" },
        { label: "Office Hours", value: "8:00 AM to 2:00 PM" }
      ]
    }
  ];

  const socialMedia = [
    {
      platform: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      handle: "9480041361",
      url: "https://wa.me/919480041361",
      color: "text-green-600"
    },
    {
      platform: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      handle: "@mdbschool",
      url: "https://instagram.com/mdbschool",
      color: "text-pink-600"
    },
    {
      platform: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      handle: "mdbschool",
      url: "https://facebook.com/mdbschool",
      color: "text-blue-600"
    }
  ];

  const departments = [
    {
      name: "Principal's Office",
      contact: "Principal - Tauseeb Ahmad (MA, M.Ed, LLB)",
      phone: "9480041361",
      email: "tauseebahamad888@gmail.com",
      timing: "9:00 AM - 1:00 PM"
    },
    {
      name: "Admissions Office",
      contact: "Admission Coordinator",
      phone: "9452504888",
      email: "mdbschool23@gmail.com",
      timing: "8:00 AM - 2:00 PM"
    },
    {
      name: "Hostel Office",
      contact: "Hostel Warden",
      phone: "9480041361",
      email: "mdbschool23@gmail.com",
      timing: "24/7 Available"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-forest-green to-earth-brown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get in touch with us for admissions, inquiries, or any assistance.
              We're here to help you on your educational journey.
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              "Taleem, Tarbiyat Aur Taqwa Ka Sangam"
            </Badge>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We welcome your inquiries and are committed to providing prompt responses to all your questions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="mb-2">
                        {detail.label && (
                          <p className="text-sm font-medium text-muted-foreground">{detail.label}</p>
                        )}
                        <p className="text-sm">{detail.value}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input id="subject" placeholder="Enter message subject" />
                      </div>

                      <div>
                        <Label htmlFor="inquiry">Inquiry Type</Label>
                        <select className="w-full p-2 border border-input rounded-md" id="inquiry">
                          <option value="">Select inquiry type</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="hostel">Hostel Information</option>
                          <option value="academics">Academic Information</option>
                          <option value="facilities">Facilities Query</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Enter your message here..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <Button className="w-full bg-forest-green hover:bg-earth-brown">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Quick Contact */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Find Us</h2>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      {/* Google Maps Embed */}
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="h-12 w-12 text-forest-green mx-auto mb-2" />
                          <p className="text-muted-foreground">Interactive Map</p>
                          <p className="text-sm text-muted-foreground">
                            Sagra Sunderpur, Pratapgarh, UP 230136
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Contact Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-forest-green mr-3" />
                        <span>Call Now</span>
                      </div>
                      <Button variant="outline" size="sm">
                        9480041361
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span>WhatsApp</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Message
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-forest-green mr-3" />
                        <span>Email</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Department Contacts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Reach out to specific departments for targeted assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center mb-4">
                      <Building className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{dept.contact}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-forest-green" />
                        <span>{dept.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-2 text-forest-green" />
                        <span className="text-xs">{dept.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-forest-green" />
                        <span>{dept.timing}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Follow Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay connected with us on social media for latest updates and announcements
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              {socialMedia.map((social, index) => (
                <Card key={index} className="w-48 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${social.color} bg-background border-2`}>
                      {social.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{social.platform}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{social.handle}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
            <p className="text-xl mb-8 opacity-90">
              Experience our facilities and meet our faculty. Schedule a visit to see why MDB is the right choice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-forest-green hover:bg-gray-100">
                Schedule Campus Tour
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-forest-green text-white hover:bg-white hover:text-forest-green">
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;