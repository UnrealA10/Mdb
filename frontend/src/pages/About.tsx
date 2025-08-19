import { Award, Globe, Users, BookOpen, Target, Heart, Star, Calendar, Home, School, Book, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Affiliated with Uttar Pradesh Madarsa Education Board, ensuring quality education standards."
    },
    {
      icon: Users,
      title: "Dedicated Faculty",
      description: "Experienced teachers committed to nurturing both academic and spiritual growth."
    },
    {
      icon: Star,
      title: "Islamic Values",
      description: "Integrating Quranic teachings and Islamic principles with modern education."
    },
    {
      icon: Globe,
      title: "Holistic Development",
      description: "Balancing worldly education (Dunya) with spiritual awareness (Akhirah)."
    },
    {
      icon: BookOpen,
      title: "Modern Curriculum",
      description: "Computer education, Science, Mathematics, and multilingual instruction."
    },
    {
      icon: Heart,
      title: "Character Building",
      description: "Focus on Akhlaq (moral conduct), discipline, and community service."
    }
  ];

  const timeline = [
    { year: "1999", event: "Foundation", description: "MDB Senior Secondary School established with the vision of providing quality Islamic education." },
    { year: "2005", event: "Hostel Facility", description: "Introduced residential facilities for outstation students with proper supervision." },
    { year: "2010", event: "Computer Lab", description: "Added modern computer education lab for digital literacy." },
    { year: "2015", event: "Board Affiliation", description: "Officially affiliated with UP Madarsa Education Board, Lucknow." },
    { year: "2020", event: "Entrance Coaching", description: "Started specialized coaching for AMU, Sainik Schools, and other competitive exams." },
    { year: "2025", event: "Continued Excellence", description: "Continuing our mission of Taleem, Tarbiyat Aur Taqwa Ka Sangam." }
  ];

  const stats = [
    { number: "26", label: "Years of Excellence", suffix: "+" },
    { number: "500", label: "Students Enrolled", suffix: "+" },
    { number: "25", label: "Qualified Teachers", suffix: "+" },
    { number: "95", label: "Success Rate", suffix: "%" }
  ];

  const offerings = [
    {
      icon: School,
      title: "Comprehensive Education",
      description: "Education from primary to senior secondary level (Urdu, Arabic, Science streams)"
    },
    {
      icon: Book,
      title: "Balanced Curriculum",
      description: "Combining modern subjects with Islamic values and moral education"
    },
    {
      icon: Home,
      title: "Hostel Facility",
      description: "Focus on discipline, character development, and spiritual growth"
    },
    {
      icon: Shield,
      title: "Qualified Staff",
      description: "Well-qualified and dedicated teachers committed to holistic student development"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-warm relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-6 border-forest-green text-forest-green">
              About MDB School
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Taleem, Tarbiyat Aur
              <span className="text-forest-green block">Taqwa Ka Sangam</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              A premier educational institution located in Sagra Sundarpur, Pratapgarh (U.P.), established in 1999 with the noble vision of providing quality, value-based education to children from all sections of society. Managed by Ruabun Nisha Smarak Dharmarth Chikitsa Sansthan, a registered charitable trust dedicated to education, health, and social welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-golden-sand mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <Card className="bg-white/90 backdrop-blur-sm shadow-strong">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-forest-green mr-3" />
                  <CardTitle className="text-2xl text-forest-green">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-earth-brown leading-relaxed mb-4">
                  At MDB Senior Secondary School, our mission is to provide a holistic education that blends modern academic excellence with the timeless guidance of Islamic values. We strive to nurture students into God-conscious (muttaqi), morally upright, and socially responsible individuals who seek knowledge as an act of worship.
                </p>
                <p className="text-earth-brown leading-relaxed mb-4">
                  We aim to cultivate minds that are sharp, hearts that are pure, and actions that are guided by ilm (knowledge), adab (etiquette), and taqwa (piety).
                </p>
                <blockquote className="border-l-4 border-forest-green pl-4 italic text-forest-green">
                  "The best among you are those who learn the Qur'an and teach it" - Sahih al-Bukhari
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm shadow-strong">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Heart className="h-8 w-8 text-forest-green mr-3" />
                  <CardTitle className="text-2xl text-forest-green">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-earth-brown leading-relaxed mb-4">
                  To become a center of excellence in both worldly education and spiritual development, where students are prepared not only for successful careers but also for meaningful lives devoted to the service of Allah (SWT) and humanity.
                </p>
                <ul className="list-disc pl-5 text-earth-brown mb-4 space-y-2">
                  <li>Education is a means to uplift the Ummah</li>
                  <li>Faith and reason walk hand in hand</li>
                  <li>Character (akhlaq), discipline, and compassion are core to every student's journey</li>
                  <li>Students graduate with a sense of purpose, humility, and community responsibility</li>
                </ul>
                <blockquote className="border-l-4 border-earth-brown pl-4 italic text-earth-brown">
                  "Read in the name of your Lord who created" - Surah Al-'Alaq, 96:1
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive educational programs and facilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, index) => (
              <Card
                key={item.title}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-earth-brown mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by the principles of Ilm (Knowledge), Tarbiyat (Character-building), and Taqwa (God-consciousness)
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-medium">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-forest-green text-4xl font-bold mb-4">Ilm</div>
                <p className="text-earth-brown">(Knowledge)</p>
                <p className="mt-4 text-muted-foreground">
                  Pursuit of both worldly and religious knowledge as an act of worship
                </p>
              </div>
              <div className="text-center">
                <div className="text-forest-green text-4xl font-bold mb-4">Tarbiyat</div>
                <p className="text-earth-brown">(Character-building)</p>
                <p className="mt-4 text-muted-foreground">
                  Developing moral character, discipline, and Islamic etiquette
                </p>
              </div>
              <div className="text-center">
                <div className="text-forest-green text-4xl font-bold mb-4">Taqwa</div>
                <p className="text-earth-brown">(God-consciousness)</p>
                <p className="mt-4 text-muted-foreground">
                  Cultivating awareness of Allah in all aspects of life
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-earth-brown leading-relaxed">
                MDB Senior Secondary School strives to provide an environment where students not only excel academically but also grow into morally upright and socially responsible individuals.
              </p>
              <p className="text-earth-brown leading-relaxed mt-4">
                Today, we are not just a place of learning, but a mission-driven community committed to shaping a brighter, educated, and ethically strong future—all under the guiding light of Ruabun Nisha Smarak Dharmarth Chikitsa Sansthan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Strengths
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes MDB School a beacon of educational excellence in the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={achievement.title}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-earth-brown mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones in our commitment to excellence in Islamic education
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8"
                >
                  <div className="flex-shrink-0">
                    <Badge className="bg-forest-green text-white text-lg px-4 py-2 font-bold">
                      {item.year}
                    </Badge>
                  </div>
                  <Card className="flex-1 bg-white/90 backdrop-blur-sm shadow-medium">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-forest-green mb-2">
                        {item.event}
                      </h3>
                      <p className="text-earth-brown">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-forest-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Principal's Message
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ<br />
                In the Name of Allah, the Most Gracious, the Most Merciful"
              </p>
              <p className="text-base leading-relaxed mb-6">
                At MDB Senior Secondary School, we believe that education is not merely the accumulation of facts,
                but a means to purify the soul, sharpen the intellect, and nurture individuals who live with purpose,
                integrity, and compassion. Our mission is to raise children who are not only well-educated but also
                morally upright, spiritually aware, and socially responsible.
              </p>
              <p className="text-base leading-relaxed mb-6">
                We take pride in our commitment to 'Ilm (knowledge), Tarbiyat (character development), and
                Taqwa (God-consciousness), ensuring that our students excel in both worldly education and spiritual growth.
              </p>
              <div className="text-right">
                <p className="font-semibold">- Tauseeb Ahamad</p>
                <p className="text-sm opacity-90">Principal (MA, M.Ed, LLB)</p>
                <p className="text-sm opacity-90">MDB Senior Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;