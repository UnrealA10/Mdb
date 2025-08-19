import {
  Camera,
  Calendar,
  BookOpen,
  Heart,
  Dumbbell,
  Home,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  const galleryItems = [
    {
      title: "Smart Classrooms in Action",
      description:
        "Students engaging in interactive learning with digital boards and audio-visual aids.",
      icon: BookOpen,
      image: "/images/gallery/smart-classroom.jpg",
    },
    {
      title: "Islamic Studies and Namaz",
      description:
        "Daily prayers and Qur’an recitation sessions fostering spiritual growth.",
      icon: Heart,
      image: "/images/gallery/islamic-studies.jpg",
    },
    {
      title: "Sports and Athletics",
      description:
        "Students participating in football, cricket, and athletics on our playgrounds.",
      icon: Dumbbell,
      image: "/images/gallery/sports.jpg",
    },
    {
      title: "Science and Computer Labs",
      description:
        "Hands-on experiments and digital literacy sessions in our modern labs.",
      icon: BookOpen,
      image: "/images/gallery/science-lab.jpg",
    },
    {
      title: "Hostel Life",
      description:
        "A glimpse into the disciplined and supportive environment of our boys’ and girls’ hostels.",
      icon: Home,
      image: "/images/gallery/hostel.jpg",
    },
    {
      title: "Co-curricular Events",
      description:
        "Students excelling in Olympiads, Islamic quizzes, and entrance exam coaching.",
      icon: Calendar,
      image: "/images/gallery/co-curricular.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-6 border-forest-green text-forest-green"
            >
              Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Moments at MDB
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              Explore the vibrant life at MDB Senior Secondary School through
              our gallery, showcasing academic excellence, spiritual growth, and
              holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Our Vibrant Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Capturing the essence of learning, faith, and community at MDB
              Senior Secondary School.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card
                key={item.title}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4 bg-forest-green text-white p-2 rounded-full">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-earth-brown mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience MDB in Person
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Visit our campus to witness our vibrant community and facilities.
            Contact us to schedule a tour or inquire about admissions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/form">
              <Button
                size="lg"
                className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90"
              >
                Apply Now
              </Button>
            </a>
            <a href="tel:+919480041361">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-forest-green"
              >
                Schedule a Tour
              </Button>
            </a>
            <a href="mailto:tauseebahamad888@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-forest-green"
              >
                Contact Admissions
              </Button>
            </a>
          </div>
          <p className="text-sm opacity-90 mt-4">
            Phone: 9452504888 / 9480041361 | Visit: School Office, Sagra
            Sundarpur, Pratapgarh (U.P.)
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
