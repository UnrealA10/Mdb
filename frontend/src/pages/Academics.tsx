import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Award, Globe } from "lucide-react";

const Academics = () => {
  const classes = [
    {
      level: "Pre-Nursery to UKG",
      description: "Foundational Stage - Focus on basic literacy, numeracy, moral stories, and character building",
      subjects: ["English", "Hindi", "Urdu", "Basic Math", "Islamic Stories"],
      features: ["Play-based learning", "Activity-centered approach", "Character building"]
    },
    {
      level: "Classes 1 to 8",
      description: "Primary & Middle Level - Comprehensive curriculum with modern subjects and Islamic values",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Urdu", "Arabic", "Computer Education"],
      features: ["Islamic Studies integration", "Computer education from Class 1", "Multilingual approach"]
    },
    {
      level: "Classes 9 to 10",
      description: "Secondary Level - Focus on discipline, exam preparation, and digital literacy",
      subjects: ["English", "Hindi/Urdu", "Mathematics", "Science", "Social Science", "Arabic/Sanskrit", "Computer Applications"],
      features: ["Qur'an recitation", "Hadith studies", "Life skills development"]
    },
    {
      level: "Classes 11 to 12",
      description: "Senior Secondary Level - Specialized streams with career guidance",
      subjects: ["Science (PCB/PCM)", "Urdu", "Arabic", "Sanskrit", "English", "Hindi", "Computer Studies"],
      features: ["Career counseling", "Islamic guidance", "Digital project work"]
    }
  ];

  const specialPrograms = [
    {
      title: "Computer Education",
      description: "Age-appropriate computer learning from Class 1 onwards",
      icon: <Globe className="h-6 w-6" />,
      features: ["Basic typing and MS Office", "Internet safety", "Programming basics", "Digital presentations"]
    },
    {
      title: "Language Learning",
      description: "Multilingual education focusing on Arabic, Urdu, and modern languages",
      icon: <BookOpen className="h-6 w-6" />,
      features: ["Qur'anic Arabic", "Urdu literature", "Sanskrit studies", "English proficiency"]
    },
    {
      title: "Islamic Studies",
      description: "Comprehensive Islamic education integrated with modern curriculum",
      icon: <Award className="h-6 w-6" />,
      features: ["Qur'an recitation", "Hadith studies", "Islamic history", "Moral education"]
    },
    {
      title: "Entrance Exam Coaching",
      description: "Special preparation for prestigious institutions",
      icon: <Users className="h-6 w-6" />,
      features: ["AMU entrance preparation", "Sainik Schools coaching", "NTSE preparation", "Olympiad training"]
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
              Academic Excellence
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive education from Pre-Nursery to Class 12th, integrating modern academics with Islamic values
            </p>
            <Badge variant="secondary" className="text-lg px-6 py-2">
              Affiliated with UP Madarsa Education Board, Lucknow
            </Badge>
          </div>
        </section>

        {/* Board Affiliation */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Board Affiliation</h2>
              <div className="max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-forest-green">
                      Uttar Pradesh Madarsa Education Board, Lucknow
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      MDB Senior Secondary School is officially affiliated with the UP Madarsa Education Board, 
                      a government-recognized body that governs and standardizes Islamic and modern education across the state.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <Badge variant="outline" className="mb-2">Affiliation Status</Badge>
                        <p className="font-semibold">Government Recognized</p>
                      </div>
                      <div className="text-center">
                        <Badge variant="outline" className="mb-2">UDISE Code</Badge>
                        <p className="font-semibold">09430906205</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Class-wise Curriculum */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Class-wise Curriculum</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our curriculum is designed to provide balanced education combining modern subjects with traditional Islamic values
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {classes.map((classInfo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-forest-green">{classInfo.level}</CardTitle>
                    <p className="text-muted-foreground">{classInfo.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Subjects Offered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {classInfo.subjects.map((subject, idx) => (
                          <Badge key={idx} variant="secondary">{subject}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground">
                        {classInfo.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Programs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Special Programs</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Enhanced learning opportunities beyond regular curriculum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialPrograms.map((program, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center mb-4">
                      {program.icon}
                    </div>
                    <CardTitle className="text-lg">{program.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {program.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pedagogy */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Educational Philosophy</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <BookOpen className="h-12 w-12 text-forest-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Ilm (Knowledge)</h3>
                  <p className="text-muted-foreground">
                    Seeking knowledge as an obligation and means of spiritual growth, combining worldly education with divine guidance.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-forest-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Tarbiyat (Character Building)</h3>
                  <p className="text-muted-foreground">
                    Developing moral character, discipline, and ethical values alongside academic excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-forest-green mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Taqwa (God-consciousness)</h3>
                  <p className="text-muted-foreground">
                    Instilling consciousness of Allah in all aspects of life and education, creating responsible citizens.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Academics;