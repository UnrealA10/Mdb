import { Calendar, FileText, Users, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Admissions = () => {
  const admissionSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete our online application form with all required documentation",
      timeline: "Rolling admissions"
    },
    {
      step: 2,
      title: "Document Review",
      description: "Our admissions team reviews transcripts, recommendations, and essays",
      timeline: "1-2 weeks"
    },
    {
      step: 3,
      title: "Assessment & Interview",
      description: "Age-appropriate assessments and family interviews",
      timeline: "2-3 weeks"
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive notification of admission status and next steps",
      timeline: "1 week"
    }
  ];

  const gradeLevels = [
    {
      level: "Pre-K to Grade 2",
      program: "Early Years",
      description: "Play-based learning with focus on social-emotional development",
      requirements: ["Age-appropriate readiness", "Parent interview", "Observation session"]
    },
    {
      level: "Grades 3-5",
      program: "Elementary",
      description: "Inquiry-based learning with strong foundation in core subjects",
      requirements: ["Previous school records", "English proficiency", "Math assessment"]
    },
    {
      level: "Grades 6-8",
      program: "Middle School",
      description: "Preparatory program building towards IB Middle Years Programme",
      requirements: ["Academic transcripts", "Teacher recommendations", "Writing sample"]
    },
    {
      level: "Grades 9-10",
      program: "IB MYP",
      description: "International Baccalaureate Middle Years Programme",
      requirements: ["Strong academic record", "English proficiency test", "Subject assessments"]
    },
    {
      level: "Grades 11-12",
      program: "IB Diploma",
      description: "International Baccalaureate Diploma Programme",
      requirements: ["Excellent academic record", "TOEFL/IELTS", "Subject prerequisites"]
    }
  ];

  const importantDates = [
    { date: "December 1", event: "Application Opens", status: "upcoming" },
    { date: "February 15", event: "Priority Deadline", status: "important" },
    { date: "March 30", event: "Regular Deadline", status: "regular" },
    { date: "April 15", event: "Decision Notifications", status: "regular" },
    { date: "May 1", event: "Enrollment Confirmation", status: "important" },
  ];

  const tuitionFees = [
    { grade: "Pre-K", fee: "₹8,50,000", description: "Half-day program available" },
    { grade: "K-Grade 2", fee: "₹12,50,000", description: "Full academic program" },
    { grade: "Grades 3-5", fee: "₹15,00,000", description: "Enhanced curriculum" },
    { grade: "Grades 6-8", fee: "₹17,50,000", description: "MYP preparation" },
    { grade: "Grades 9-12", fee: "₹20,00,000", description: "IB Programme" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Admissions
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              Begin your journey with MDB. We welcome students from diverse backgrounds who are
              ready to embrace our culture of inquiry, integrity, and global citizenship.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90 font-semibold px-8 py-6 text-lg">
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Admission Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our admission process is designed to understand each student's unique strengths and potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <Card
                key={step.step}
                className="relative group hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-forest-green text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl text-earth-brown">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <Badge variant="secondary" className="bg-golden-sand/20 text-earth-brown">
                    {step.timeline}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Programs by Grade Level
            </h2>
          </div>

          <div className="space-y-8">
            {gradeLevels.map((grade, index) => (
              <Card
                key={grade.level}
                className="bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-forest-green mb-2">{grade.level}</h3>
                      <Badge className="bg-earth-brown text-white mb-4">{grade.program}</Badge>
                      <p className="text-muted-foreground">{grade.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-earth-brown mb-3">Admission Requirements:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {grade.requirements.map((req) => (
                          <div key={req} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-soft-green flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dates */}
            <div>
              <h2 className="text-3xl font-bold text-earth-brown mb-8">Important Dates</h2>
              <div className="space-y-4">
                {importantDates.map((item, index) => (
                  <Card key={item.date} className="hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Calendar className="h-5 w-5 text-forest-green" />
                          <div>
                            <div className="font-semibold text-earth-brown">{item.event}</div>
                            <div className="text-sm text-muted-foreground">{item.date}</div>
                          </div>
                        </div>
                        <Badge
                          className={
                            item.status === 'important'
                              ? 'bg-earth-brown text-white'
                              : item.status === 'upcoming'
                              ? 'bg-forest-green text-white'
                              : 'bg-muted text-muted-foreground'
                          }
                        >
                          {item.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tuition Fees */}
            <div>
              <h2 className="text-3xl font-bold text-earth-brown mb-8">Tuition Fees</h2>
              <div className="space-y-4">
                {tuitionFees.map((item) => (
                  <Card key={item.grade} className="hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-earth-brown">{item.grade}</div>
                          <div className="text-sm text-muted-foreground">{item.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-forest-green">{item.fee}</div>
                          <div className="text-sm text-muted-foreground">per year</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-6 p-4 bg-golden-sand/20 rounded-lg">
                <p className="text-sm text-earth-brown">
                  * Fees include tuition, technology, and most activities. Additional costs may apply for field trips and optional programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-forest-green to-earth-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your MDB Journey?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our community of learners and start your path to becoming a global citizen.
            Our admissions team is here to guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90">
              Apply Now
            </Button>
            <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-white hover:text-forest-green">
              Schedule a Tour
            </Button>
            <Button variant="outline" size="lg" className="border-white bg-forest-green text-white hover:bg-white hover:text-forest-green">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;