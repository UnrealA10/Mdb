import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Award, Users, BookOpen, Target } from "lucide-react";

const Achievements = () => {
  const academicAchievements = [
    {
      title: "100% Board Exam Success Rate",
      description: "Consistent excellent results in UP Madarsa Board examinations",
      year: "2024",
      icon: <Trophy className="h-6 w-6" />,
      category: "Academic Excellence"
    },
    {
      title: "State Level Olympiad Winners",
      description: "Multiple students qualified for state-level Mathematics and Science Olympiads",
      year: "2024",
      icon: <Star className="h-6 w-6" />,
      category: "Competitive Exams"
    },
    {
      title: "AMU Entrance Exam Success",
      description: "15+ students successfully cleared AMU entrance examinations",
      year: "2023-24",
      icon: <Target className="h-6 w-6" />,
      category: "Entrance Exams"
    }
  ];

  const institutionalAchievements = [
    {
      title: "Best Islamic School Award",
      description: "Recognized by the District Education Department for excellence in Islamic education",
      year: "2023",
      icon: <Award className="h-6 w-6" />,
      category: "Institutional Recognition"
    },
    {
      title: "Clean School Campaign Winner",
      description: "First prize in district-level cleanliness and hygiene competition",
      year: "2024",
      icon: <Trophy className="h-6 w-6" />,
      category: "Environmental"
    },
    {
      title: "Community Service Recognition",
      description: "Honored for outstanding community service during COVID-19 pandemic",
      year: "2022",
      icon: <Users className="h-6 w-6" />,
      category: "Social Impact"
    }
  ];

  const studentAchievements = [
    {
      title: "National Essay Competition",
      description: "Students won 1st and 2nd positions in national-level Urdu essay competition",
      year: "2024",
      icon: <BookOpen className="h-6 w-6" />,
      category: "Literary"
    },
    {
      title: "Qur'an Recitation Competition",
      description: "State-level winners in Qur'an recitation and Naat competitions",
      year: "2024",
      icon: <Star className="h-6 w-6" />,
      category: "Islamic Arts"
    },
    {
      title: "Science Project Excellence",
      description: "Regional science fair winners with innovative environmental projects",
      year: "2023",
      icon: <Trophy className="h-6 w-6" />,
      category: "Innovation"
    }
  ];

  const alumniTestimonials = [
    {
      name: "Dr. Ahmad Hassan",
      batch: "Batch 2015",
      achievement: "MBBS from AMU, Currently pursuing MD",
      testimonial: "MDB provided me with strong academic foundation and moral values that guided my medical career.",
      image: "/src/assets/hero-school.jpg"
    },
    {
      name: "Eng. Fatima Khatoon",
      batch: "Batch 2018",
      achievement: "B.Tech from JMI, Software Engineer at Tech Company",
      testimonial: "The computer education from Class 1 and excellent teaching prepared me for engineering success.",
      image: "/src/assets/hero-school.jpg"
    },
    {
      name: "Prof. Mohammed Ibrahim",
      batch: "Batch 2012",
      achievement: "MA in Arabic Literature, Teaching at University",
      testimonial: "MDB's emphasis on Arabic and Islamic studies shaped my academic career in Islamic literature.",
      image: "/src/assets/hero-school.jpg"
    }
  ];

  const statistics = [
    { number: "95%", label: "Students in Higher Education", icon: <BookOpen className="h-8 w-8" /> },
    { number: "50+", label: "University Admissions", icon: <Target className="h-8 w-8" /> },
    { number: "25+", label: "Government Job Holders", icon: <Users className="h-8 w-8" /> },
    { number: "100+", label: "Successful Alumni", icon: <Star className="h-8 w-8" /> }
  ];

  const AchievementSection = ({ title, achievements, bgColor = "bg-background" }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-forest-green text-white rounded-full flex items-center justify-center">
                    {achievement.icon}
                  </div>
                  <Badge variant="outline">{achievement.year}</Badge>
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <Badge variant="secondary" className="w-fit">{achievement.category}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{achievement.description}</p>
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
              Our Achievements
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Celebrating excellence in academics, character development, and community service. 
              Our achievements reflect our commitment to holistic education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-6 py-2">
                25+ Years of Excellence
              </Badge>
              <Badge variant="secondary" className="text-lg px-6 py-2">
                100+ Successful Alumni
              </Badge>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Success by Numbers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our achievements reflected in the success of our alumni and students
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-forest-green mx-auto mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-forest-green mb-2">{stat.number}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Achievements */}
        <AchievementSection 
          title="Academic Excellence"
          achievements={academicAchievements}
        />

        {/* Institutional Achievements */}
        <AchievementSection 
          title="Institutional Recognition"
          achievements={institutionalAchievements}
          bgColor="bg-muted/30"
        />

        {/* Student Achievements */}
        <AchievementSection 
          title="Student Accomplishments"
          achievements={studentAchievements}
        />

        {/* Alumni Testimonials */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Alumni Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our alumni are making their mark in various fields, carrying forward the values and education they received at MDB
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alumniTestimonials.map((alumni, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={alumni.image} 
                        alt={alumni.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg">{alumni.name}</h3>
                        <p className="text-sm text-muted-foreground">{alumni.batch}</p>
                        <Badge variant="outline" className="text-xs mt-1">{alumni.achievement}</Badge>
                      </div>
                    </div>
                    <blockquote className="text-muted-foreground italic">
                      "{alumni.testimonial}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition Wall */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Recognition Wall</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Certificates, awards, and recognitions that highlight our institutional excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img 
                      src="/src/assets/hero-school.jpg" 
                      alt={`Award Certificate ${item}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">Excellence Award {item}</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognition for outstanding contribution to education and community development
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16 bg-gradient-to-r from-forest-green to-earth-brown text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Future Goals</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              We continue to strive for excellence and aim to achieve even greater milestones in the coming years
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Digital Excellence</div>
                <div className="text-sm opacity-90">Complete digitization of campus and learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">100% Success Rate</div>
                <div className="text-sm opacity-90">Higher education placement for all graduates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Community Impact</div>
                <div className="text-sm opacity-90">Expanding our social service initiatives</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Achievements;