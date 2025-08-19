import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Gallery = () => {
  const galleryCategories = [
    {
      id: "campus",
      title: "Campus & Buildings",
      description: "Modern infrastructure and beautiful campus",
      images: [
        {
          src: "/public/lovable-uploads/IMG_7730.jpg",
          alt: "School Building",
          caption: "Main School Building",
        },
        {
          src: "/public/lovable-uploads/IMG_7718.jpg",
          alt: "School Campus",
          caption: "Campus Overview",
        },
        {
          src: "/public/lovable-uploads/IMG_3645.jpg",
          alt: "School Building",
          caption: "Main School Building",
        },
        {
          src: "/public/lovable-uploads/IMG_3647.jpg",
          alt: "School Campus",
          caption: "Campus Overview",
        },
        {
          src: "/public/lovable-uploads/IMG_3648.jpg",
          alt: "School Campus",
          caption: "Campus Overview",
        },
        {
          src: "/public/lovable-uploads/IMG_4428.jpg",
          alt: "School Building",
          caption: "Main School Building",
        },
        {
          src: "/public/lovable-uploads/IMG_3639.jpg",
          alt: "School Campus",
          caption: "Campus Overview",
        },
        // Add more campus images
      ],
    },
    {
      id: "classrooms",
      title: "Classrooms & Labs",
      description: "Smart classrooms and modern laboratories",
      images: [
        {
          src: "/public/lovable-uploads/IMG_3605.jpg",
          alt: "Classroom",
          caption: "Classroom",
        },
        {
          src: "/public/lovable-uploads/IMG_3612.jpg",
          alt: "Computer Lab",
          caption: "Classroom",
        },
        {
          src: "/public/lovable-uploads/IMG_3672.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_3678.jpg",
          alt: "Computer Lab",
          caption: "Classroom",
        },
        {
          src: "/public/lovable-uploads/IMG_4503.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_4505.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_3617.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_3618.jpg",
          alt: "Computer Lab",
          caption: "Classroom",
        },
        {
          src: "/public/lovable-uploads/IMG_3629.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_4503.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_4505.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_4500.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        // Add more classroom images
      ],
    },
    {
      id: "events",
      title: "Events & Activities",
      description: "Annual celebrations and academic activities",
      images: [
        {
          src: "/public/lovable-uploads/IMG_4557.jpg",
          alt: "Annual Day",
          caption: "Annual Day Celebration",
        },
        {
          src: "/public/lovable-uploads/IMG_4935.jpg",
          alt: "Sports Day",
          caption: "Sports Day Activities",
        },
        {
          src: "/public/lovable-uploads/IMG_4089.jpg",
          alt: "Annual Day",
          caption: "Yoga day",
        },
        {
          src: "/public/lovable-uploads/IMG_4936.jpg",
          alt: "Sports Day",
          caption: "Sports Day Activities",
        },
        {
          src: "/public/lovable-uploads/IMG_4086.jpg",
          alt: "Classroom",
          caption: "Smart Classroom with Digital Board",
        },
        {
          src: "/public/lovable-uploads/IMG_4088.jpg",
          alt: "Annual Day",
          caption: "Annual Day Celebration",
        },
        {
          src: "/public/lovable-uploads/IMG_6937.jpg",
          alt: "Sports Day",
          caption: "Sports Day Activities",
        },
        {
          src: "/public/lovable-uploads/IMG_4146.jpg",
          alt: "Annual Day",
          caption: "Yoga day",
        },
        {
          src: "/public/lovable-uploads/IMG_4935.jpg",
          alt: "Sports Day",
          caption: "Sports Day Activities",
        },
        // Add more event images
      ],
    },
    {
      id: "Trips",
      title: "Trips",
      description: "Recognition and accomplishments",
      images: [
        {
          src: "/public/lovable-uploads/IMG_6971.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_6937.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7109.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7124.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7214.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7220.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7224.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_0912.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_0925.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_1003.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_1017.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_1049.jpg",
          alt: "Sports Day",
        },
        // Add more achievement images
      ],
    },
    {
      id: "More",
      title: "More Images",
      description: "More Images of our school",
      images: [
        {
          src: "/public/lovable-uploads/IMG_4557.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_6815.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_6819.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7224.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7214.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7220.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_7224.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_0912.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_0925.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_1003.jpg",
          alt: "Annual Day",
        },
        {
          src: "/public/lovable-uploads/IMG_1017.jpg",
          alt: "Sports Day",
        },
        {
          src: "/public/lovable-uploads/IMG_1049.jpg",
          alt: "Sports Day",
        },
        // Add more achievement images
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-forest-green to-earth-brown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Explore our vibrant school life through images showcasing our facilities, events,
              achievements, and the journey of our students
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Capturing Moments of Excellence
            </Badge>
          </div>
        </section>

        {/* Gallery Tabs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="campus" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
                {galleryCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs lg:text-sm"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {galleryCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.images.map((image, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="relative group">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                              <p className="text-white font-medium">{image.caption}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Load More Button (for future implementation) */}
                  <div className="text-center mt-8">
                    <button className="bg-forest-green text-white px-6 py-2 rounded-md hover:bg-earth-brown transition-colors">
                      Load More Images
                    </button>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Featured Highlights */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Featured Highlights</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Special moments and achievements that define our school's journey
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/src/assets/hero-school.jpg"
                    alt="Annual Day Celebration"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Annual Day 2024</h3>
                    <p className="text-muted-foreground">
                      A magnificent celebration showcasing student talents and achievements
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/src/assets/hero-school.jpg"
                    alt="Academic Excellence"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Academic Excellence Awards</h3>
                    <p className="text-muted-foreground">
                      Recognizing outstanding performance in academics and character development
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Virtual Tour CTA */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a visit to experience our facilities and campus life firsthand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-forest-green px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Schedule Campus Tour
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-forest-green transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;