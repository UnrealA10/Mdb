import { Calendar, Heart, BookOpen, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HistoryPage = () => {
  const historyMilestones = [
    {
      year: "1999",
      title: "Foundation",
      description: "MDB Senior Secondary School was established with a small room and a grand vision to provide quality education rooted in moral and spiritual values to children in rural areas."
    },
    {
      year: "Early 2000s",
      title: "Growth Under Charitable Trust",
      description: "Under the guidance of the Ruabun Nisha Smarak Dharmarth Chikitsa Sansthan, the school began expanding its facilities and curriculum, focusing on both academic and character development."
    },
    {
      year: "2010s",
      title: "Modernization",
      description: "Introduction of modern subjects like computer education, science, and mathematics, alongside Islamic values, creating a balanced curriculum for holistic education."
    },
    {
      year: "Present",
      title: "Beacon of Hope",
      description: "Today, MDB Senior Secondary School stands as a respected institution, offering education up to the senior secondary level, with a nurturing environment for day scholars and hostel students."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-forest-green text-forest-green">
              Our History
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our Journey
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              From humble beginnings to a beacon of hope, MDB Senior Secondary School has been shaping futures with <em>Ilm</em> (Knowledge), <em>Tarbiyat</em> (Character), and <em>Taqwa</em> (God-consciousness) since 1999.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              The Story of MDB Senior Secondary School
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A legacy of faith, education, and service, built on the vision of illuminating lives through knowledge and values.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                The journey of MDB Senior Secondary School, located in Sagra Sundarpur, Pratapgarh, is a reflection of sincere efforts, unwavering faith, and a deep commitment to the cause of education. Established in the year 1999, the school began with just a small room, limited resources, and a big vision — to illuminate the lives of children in rural and underserved areas through quality education rooted in moral and spiritual values.
              </p>
              <p className="text-muted-foreground mb-6">
                What started as a modest initiative has, by the grace of Allah Subhanahu wa Ta’ala, grown into a well-respected educational institution, known for its discipline, academic progress, and character development. This remarkable transformation was made possible under the visionary guidance and continued support of the <strong>Ruabun Nisha Smarak Dharmarth Chikitsa Sansthan</strong> — a charitable trust dedicated to social welfare, education, and healthcare in rural India.
              </p>
              <p className="text-muted-foreground mb-6">
                Under the Sansthan’s leadership, the school expanded its facilities, introduced a modern curriculum, and created a nurturing environment for both day scholars and hostel students. Today, MDB Senior Secondary School stands as a beacon of hope and learning in the region — offering education up to the senior secondary level, integrating both modern subjects and Islamic values, and instilling in students a sense of responsibility, discipline, and service to society.
              </p>
              <p className="text-muted-foreground">
                We take pride in our roots, stay committed to our mission, and continue our journey to shape bright futures — with <em>Ilm</em> (Knowledge), <em>Tarbiyat</em> (Character), and <em>Taqwa</em> (God-consciousness) at our core.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Key Milestones
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A timeline of our growth and commitment to educational excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {historyMilestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"
                >
                  <div className="flex-shrink-0">
                    <Badge className="bg-forest-green text-white text-lg px-4 py-2 font-bold">
                      {milestone.year}
                    </Badge>
                  </div>
                  <Card className="flex-1 bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest-green mb-2 flex items-center">
                        <Calendar className="h-5 w-5 text-forest-green mr-2" />
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Legacy</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join MDB Senior Secondary School and contribute to our mission of fostering knowledge, character, and faith. Contact us to learn more about our programs and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90"
            >
              Apply Now
            </Button>
            <a href="tel:+919480041361">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-forest-green"
              >
                Schedule a Tour
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-forest-green"
            >
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HistoryPage;