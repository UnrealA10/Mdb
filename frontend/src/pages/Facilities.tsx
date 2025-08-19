import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Monitor, 
  TestTube, 
  Bus, 
  Home, 
  Trophy, 
  Building, 
  Heart,
  Star,
  Users,
  Shield,
  Clock
} from "lucide-react";

const Facilities = () => {
  const academicFacilities = [
    {
      title: "Smart Classrooms",
      description: "Equipped with digital boards and audio-visual aids for interactive learning",
      icon: <Monitor className="h-6 w-6" />,
      features: ["Digital whiteboards", "Projectors", "Audio systems", "Interactive learning tools"]
    },
    {
      title: "Well-stocked Library",
      description: "Comprehensive collection of academic and Islamic literature",
      icon: <BookOpen className="h-6 w-6" />,
      features: ["Academic textbooks", "Islamic literature", "Reference materials", "Children's storybooks"]
    },
    {
      title: "Science & Computer Labs",
      description: "Modern laboratories for practical learning and digital literacy",
      icon: <TestTube className="h-6 w-6" />,
      features: ["Physics lab", "Chemistry lab", "Biology lab", "Computer lab with latest systems"]
    },
    {
      title: "Language Learning Center",
      description: "Specialized facility for Arabic, Urdu, and Sanskrit education",
      icon: <Users className="h-6 w-6" />,
      features: ["Qur'anic Arabic classes", "Urdu literature", "Sanskrit studies", "Spoken language practice"]
    }
  ];

  const cocurricularFacilities = [
    {
      title: "Olympiad Preparation",
      description: "Specialized coaching for various competitive examinations",
      icon: <Trophy className="h-6 w-6" />,
      features: ["Mathematics Olympiad", "Science Olympiad", "English Olympiad", "Scholarship exam prep"]
    },
    {
      title: "Entrance Exam Coaching",
      description: "Preparation for prestigious institutions and schools",
      icon: <Star className="h-6 w-6" />,
      features: ["AMU entrance coaching", "Sainik Schools preparation", "RIMC coaching", "RMS preparation"]
    }
  ];

  const sportsRecreation = [
    {
      title: "Outdoor Sports",
      description: "Large playgrounds for various outdoor activities",
      icon: <Trophy className="h-6 w-6" />,
      features: ["Football ground", "Volleyball court", "Cricket pitch", "Athletics track"]
    },
    {
      title: "Indoor Games",
      description: "Facilities for indoor recreational activities",
      icon: <Home className="h-6 w-6" />,
      features: ["Chess", "Carrom", "Table Tennis", "Indoor games room"]
    }
  ];

  const islamicFacilities = [
    {
      title: "Mosque & Prayer Hall",
      description: "Dedicated space for daily prayers and Islamic activities",
      icon: <Building className="h-6 w-6" />,
      features: ["Daily congregational prayers", "Qur'an recitation", "Islamic lectures", "Religious programs"]
    },
    {
      title: "Islamic Studies Center",
      description: "Specialized facility for Islamic education and moral development",
      icon: <BookOpen className="h-6 w-6" />,
      features: ["Hadith studies", "Islamic history", "Moral education", "Seerat-un-Nabi classes"]
    }
  ];

  const hostelFacilities = [
    {
      title: "Separate Hostels",
      description: "Well-maintained separate accommodation for boys and girls",
      icon: <Home className="h-6 w-6" />,
      features: ["Clean dormitories", "Study tables", "Storage facilities", "24/7 supervision"]
    },
    {
      title: "Nutritious Meals",
      description: "Healthy and balanced diet following Islamic dietary guidelines",
      icon: <Heart className="h-6 w-6" />,
      features: ["3-time meals", "Healthy snacks", "Halal food", "Nutritious milk"]
    },
    {
      title: "Safety & Security",
      description: "Round-the-clock security and supervision for student safety",
      icon: <Shield className="h-6 w-6" />,
      features: ["24/7 wardens", "CCTV monitoring", "Medical care", "Emergency response"]
    },
    {
      title: "Study Environment",
      description: "Dedicated study hours with proper supervision and guidance",
      icon: <Clock className="h-6 w-6" />,
      features: ["Supervised study hours", "Academic guidance", "Doubt clearing sessions", "Exam preparation"]
    }
  ];

  const transportFacility = [
    {
      title: "School Transport",
      description: "Safe and reliable transportation covering nearby areas",
      icon: <Bus className="h-6 w-6" />,
      features: ["Experienced drivers", "Safety attendants", "Regular maintenance", "Punctual service"]
    }
  ];

  const FacilitySection = ({ title, subtitle, facilities, bgColor = "bg-background" }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
          {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center mb-4">
                  {facility.icon}
                </div>
                <CardTitle className="text-lg">{facility.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-forest-green rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-forest-green to-earth-brown text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              World-Class Facilities
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Modern infrastructure and comprehensive facilities supporting academic excellence, 
              character development, and spiritual growth
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Academic Excellence
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Moral Guidance
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                Modern Infrastructure
              </Badge>
            </div>
          </div>
        </section>

        {/* Academic Facilities */}
        <FacilitySection 
          title="Academic Facilities"
          subtitle="State-of-the-art learning environment designed for comprehensive education"
          facilities={academicFacilities}
        />

        {/* Co-curricular Facilities */}
        <FacilitySection 
          title="Competitive Exam Preparation"
          subtitle="Specialized coaching for excellence in competitive examinations"
          facilities={cocurricularFacilities}
          bgColor="bg-muted/30"
        />

        {/* Sports & Recreation */}
        <FacilitySection 
          title="Sports & Recreation"
          subtitle="Physical development and recreational activities for holistic growth"
          facilities={sportsRecreation}
        />

        {/* Islamic Facilities */}
        <FacilitySection 
          title="Islamic & Moral Development"
          subtitle="Dedicated facilities for spiritual growth and Islamic education"
          facilities={islamicFacilities}
          bgColor="bg-muted/30"
        />

        {/* Hostel Facilities */}
        <FacilitySection 
          title="Hostel Facilities"
          subtitle="Safe and nurturing residential environment for outstation students"
          facilities={hostelFacilities}
        />

        {/* Transport */}
        <FacilitySection 
          title="Transportation"
          subtitle="Safe and reliable transport services for day scholars"
          facilities={transportFacility}
          bgColor="bg-muted/30"
        />

        {/* Why Choose MDB */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose MDB Facilities?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm opacity-90">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">30+</div>
                <div className="text-sm opacity-90">Qualified Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Safety & Security</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facilities;