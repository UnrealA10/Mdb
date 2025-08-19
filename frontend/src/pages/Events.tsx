import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Sports Day 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      venue: "School Playground",
      description: "Inter-house sports competition featuring athletics, football, volleyball, and traditional games",
      category: "Sports",
      participants: "All Students",
      image: "/src/assets/hero-school.jpg"
    },
    {
      title: "Science Exhibition",
      date: "March 22, 2024",
      time: "10:00 AM - 2:00 PM",
      venue: "School Hall",
      description: "Student projects showcasing scientific innovations and environmental solutions",
      category: "Academic",
      participants: "Classes 6-12",
      image: "/src/assets/hero-school.jpg"
    },
    {
      title: "Milad-un-Nabi Celebration",
      date: "March 28, 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "School Auditorium",
      description: "Special program featuring Naat, speeches, and cultural performances honoring Prophet Muhammad (PBUH)",
      category: "Religious",
      participants: "Entire School Community",
      image: "/src/assets/hero-school.jpg"
    }
  ];

  const recentEvents = [
    {
      title: "Annual Day Celebration 2024",
      date: "February 20, 2024",
      description: "Grand celebration featuring cultural performances, awards, and principal's annual report",
      category: "Cultural",
      highlights: ["Student performances", "Academic awards", "Principal's address", "Parent appreciation"],
      image: "/src/assets/hero-school.jpg"
    },
    {
      title: "Inter-School Quiz Competition",
      date: "February 10, 2024",
      description: "Regional quiz competition on Islamic history and general knowledge",
      category: "Academic",
      highlights: ["1st position in Islamic Studies", "2nd position in General Knowledge", "Certificate of participation"],
      image: "/src/assets/hero-school.jpg"
    },
    {
      title: "Republic Day Celebration",
      date: "January 26, 2024",
      description: "Patriotic celebration with flag hoisting, parade, and cultural program",
      category: "National",
      highlights: ["Flag hoisting ceremony", "March past", "Patriotic songs", "Speech competition"],
      image: "/src/assets/hero-school.jpg"
    }
  ];

  const regularActivities = [
    {
      title: "Weekly Islamic Classes",
      schedule: "Every Friday",
      time: "2:00 PM - 3:00 PM",
      description: "Special classes on Qur'an, Hadith, and Islamic values for moral development"
    },
    {
      title: "Olympiad Preparation",
      schedule: "Monday to Wednesday",
      time: "4:00 PM - 5:00 PM",
      description: "Intensive coaching for Mathematics, Science, and English Olympiads"
    },
    {
      title: "Entrance Exam Coaching",
      schedule: "Thursday to Saturday",
      time: "4:00 PM - 6:00 PM",
      description: "Specialized preparation for AMU, Sainik Schools, and other entrance exams"
    },
    {
      title: "Sports Training",
      schedule: "Daily",
      time: "3:30 PM - 4:30 PM",
      description: "Physical training and sports activities for overall development"
    }
  ];

  const academicCalendar = [
    { event: "Session Begins", date: "April 1, 2024", type: "academic" },
    { event: "First Term Exams", date: "July 15-25, 2024", type: "examination" },
    { event: "Parent-Teacher Meeting", date: "August 10, 2024", type: "meeting" },
    { event: "Mid-Term Break", date: "September 20-30, 2024", type: "holiday" },
    { event: "Annual Day", date: "February 20, 2025", type: "cultural" },
    { event: "Final Exams", date: "March 1-15, 2025", type: "examination" },
    { event: "Result Declaration", date: "March 30, 2025", type: "academic" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-forest-green to-earth-brown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Events & Activities
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stay updated with our vibrant school life through academic events, cultural celebrations, 
              sports competitions, and religious observances
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Building Memories, Creating Excellence
            </Badge>
          </div>
        </section>

        {/* Event Categories Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="recent">Recent Events</TabsTrigger>
                <TabsTrigger value="regular">Regular Activities</TabsTrigger>
                <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
              </TabsList>

              {/* Upcoming Events */}
              <TabsContent value="upcoming">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Upcoming Events</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Mark your calendars for these exciting upcoming events and activities
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingEvents.map((event, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className="absolute top-4 right-4 bg-forest-green text-white">
                          {event.category}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {event.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {event.venue}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{event.description}</p>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-forest-green" />
                          <span className="text-sm font-medium">{event.participants}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Recent Events */}
              <TabsContent value="recent">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Recent Events</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Highlights from our recent celebrations and achievements
                  </p>
                </div>

                <div className="space-y-6">
                  {recentEvents.map((event, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex flex-col lg:flex-row">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full lg:w-1/3 h-48 lg:h-auto object-cover"
                        />
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                              <div className="flex items-center text-sm text-muted-foreground mb-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                {event.date}
                              </div>
                              <Badge variant="outline">{event.category}</Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          <div>
                            <h4 className="font-semibold mb-2">Highlights:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {event.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Regular Activities */}
              <TabsContent value="regular">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Regular Activities</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Our ongoing programs and activities that enhance student development
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularActivities.map((activity, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg">{activity.title}</CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {activity.schedule}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {activity.time}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{activity.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Academic Calendar */}
              <TabsContent value="calendar">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Academic Calendar 2024-25</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Important academic dates and deadlines for the current session
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {academicCalendar.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border-l-4 border-forest-green bg-muted/30 rounded-r">
                            <div>
                              <h3 className="font-semibold">{item.event}</h3>
                              <p className="text-sm text-muted-foreground">{item.date}</p>
                            </div>
                            <Badge variant="outline" className="capitalize">
                              {item.type}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Event Registration CTA */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on any of our events and activities. Stay updated with our latest announcements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-forest-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Subscribe to Newsletter
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-forest-green transition-colors">
                Contact for Events
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;