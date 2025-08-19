import { BookOpen, Users, Heart, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AcademicPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Academics at MDB
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              Discover an education rooted in knowledge, character, and faith. At MDB Senior Secondary School, we foster academic excellence, spiritual growth, and moral integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Principal’s Message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Principal’s Message
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A vision for education that nurtures the mind, soul, and character.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Principal’s Image and Info */}
                <div className="flex flex-col items-center">
                  <img
                    src="/path/to/principal-image.jpg" // Placeholder for Principal’s image
                    alt="Principal Tauseeb Ahamad"
                    className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-golden-sand"
                  />
                  <h3 className="text-xl font-bold text-forest-green">Tauseeb Ahamad</h3>
                  <p className="text-sm text-muted-foreground">MA, M.Ed, LLB</p>
                  <p className="text-sm text-muted-foreground">Principal, MDB Senior Secondary School</p>
                </div>

                {/* Message Content */}
                <div className="md:col-span-2">
                  <p className="text-2xl font-semibold text-right text-earth-brown mb-4" dir="rtl">
                    بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                  </p>
                  <p className="text-lg font-medium text-earth-brown mb-4">
                    In the Name of Allah, the Most Gracious, the Most Merciful
                  </p>
                  <p className="text-lg text-forest-green mb-4">
                    Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu,
                  </p>
                  <p className="text-muted-foreground mb-4">
                    It is with heartfelt gratitude to Allah Subhanahu wa Ta’ala that I welcome you all—students, parents, staff members, and hostel residents—to MDB Senior Secondary School, an institution built upon the noble foundations of <em>‘Ilm</em> (knowledge), <em>Tarbiyat</em> (character development), and <em>Taqwa</em> (God-consciousness).
                  </p>
                  <p className="text-muted-foreground mb-4">
                    At MDB, we believe that education is not merely the accumulation of facts, but a means to purify the soul, sharpen the intellect, and nurture individuals who live with purpose, integrity, and compassion. As the Prophet Muhammad ﷺ said:
                    <br />
                    <span className="italic text-forest-green">
                      “Seeking knowledge is an obligation upon every Muslim.” (Sunan Ibn Majah)
                    </span>
                  </p>

                  {/* To Our Students */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-earth-brown flex items-center">
                      <BookOpen className="h-5 w-5 text-forest-green mr-2" />
                      To Our Students
                    </h4>
                    <p className="text-muted-foreground">
                      Dear children, you are the future of our Ummah. Let your journey of learning be guided by both worldly excellence (<em>dunya</em>) and spiritual wisdom (<em>akhirah</em>). Respect your teachers, honor your parents, and never hesitate to strive for excellence—because every step towards knowledge is a step closer to Allah’s pleasure.
                    </p>
                  </div>

                  {/* To Our Staff */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-earth-brown flex items-center">
                      <Users className="h-5 w-5 text-forest-green mr-2" />
                      To Our Staff
                    </h4>
                    <p className="text-muted-foreground">
                      You are the pillars of this institution. May your teaching be a form of <em>ibadah</em>, and your guidance be a beacon for our young generation. Let your hearts be filled with patience, wisdom, and sincerity as you mold the future with your character and knowledge.
                    </p>
                  </div>

                  {/* To Our Respected Parents */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-earth-brown flex items-center">
                      <Heart className="h-5 w-5 text-forest-green mr-2" />
                      To Our Respected Parents
                    </h4>
                    <p className="text-muted-foreground">
                      We deeply value your trust in us. Together, let us raise children who are not only well-educated but also morally upright, spiritually aware, and socially responsible. Your role in their success is irreplaceable, and your involvement is essential.
                    </p>
                  </div>

                  {/* To Our Hostel Students */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-earth-brown flex items-center">
                      <Home className="h-5 w-5 text-forest-green mr-2" />
                      To Our Hostel Students
                    </h4>
                    <p className="text-muted-foreground">
                      You are away from home, but not away from care. Consider the hostel a place of discipline, brotherhood, and spiritual growth. Use this opportunity to strengthen your faith, your studies, and your character.
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Let us remind ourselves that true success is not in marks alone, but in living as righteous, honest, and compassionate human beings, serving humanity with humility and aiming to please our Creator.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    May Allah (SWT) bless our efforts, guide our intentions, and make MDB Senior Secondary School a source of light (<em>noor</em>) for generations to come.
                  </p>
                  <p className="text-lg text-forest-green mb-4">
                    Jazakum Allahu Khairan.
                    <br />
                    Wassalamu Alaikum Wa Rahmatullahi Wa Barakatuhu
                  </p>
                  <p className="text-muted-foreground">
                    – Tauseeb Ahamad, Principal
                    <br />
                    MDB Senior Secondary School, Sagra Sundarpur, Pratapgarh
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Academic Community</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Embark on a journey of knowledge and faith at MDB Senior Secondary School. Contact our admissions team to learn more about our programs.
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

export default AcademicPage;