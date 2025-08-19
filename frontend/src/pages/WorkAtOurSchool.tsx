import {
  Heart,
  Globe,
  BookOpen,
  Calendar,
  CheckCircle,
  ArrowRight,
  DollarSign,
  GraduationCap,
  Star,
  Mail,
  Phone
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WorkAtOurSchool = () => {
  const [applicationData, setApplicationData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    coverLetter: ""
  });
  const { toast } = useToast();

  const benefits = [
    {
      icon: Heart,
      title: "Comprehensive Health Insurance",
      description: "Full medical, dental, and vision coverage for you and your family"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Ongoing training, conferences, and educational opportunities"
    },
    {
      icon: Globe,
      title: "International Environment",
      description: "Work with colleagues and students from around the world"
    },
    {
      icon: Calendar,
      title: "Work-Life Balance",
      description: "Generous vacation time and flexible working arrangements"
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-leading salaries with annual performance reviews"
    },
    {
      icon: BookOpen,
      title: "Tuition Benefits",
      description: "Significant tuition discounts for employee children"
    }
  ];

  const openPositions = [
    {
      title: "High School Mathematics Teacher",
      department: "Mathematics",
      type: "Full-time",
      level: "Experienced",
      description: "Seeking an experienced IB Mathematics teacher to join our dynamic team",
      requirements: ["Bachelor's degree in Mathematics", "IB teaching certification", "3+ years experience"]
    },
    {
      title: "Elementary Homeroom Teacher",
      department: "Elementary",
      type: "Full-time",
      level: "Entry Level",
      description: "Join our nurturing elementary team to inspire young learners",
      requirements: ["Bachelor's in Education", "Elementary teaching license", "Classroom management skills"]
    },
    {
      title: "School Counselor",
      department: "Student Services",
      type: "Full-time",
      level: "Experienced",
      description: "Support student well-being and academic success in our counseling team",
      requirements: ["Master's in Counseling", "School counseling certification", "Experience with adolescents"]
    },
    {
      title: "IT Support Specialist",
      department: "Technology",
      type: "Full-time",
      level: "Mid-level",
      description: "Maintain and support our technology infrastructure",
      requirements: ["Bachelor's in IT", "Network administration", "Hardware troubleshooting"]
    },
    {
      title: "Librarian/Media Specialist",
      department: "Library",
      type: "Full-time",
      level: "Experienced",
      description: "Lead our learning commons and support research initiatives",
      requirements: ["Master's in Library Science", "Educational technology skills", "Curriculum support experience"]
    },
    {
      title: "Campus Security Officer",
      department: "Operations",
      type: "Full-time",
      level: "Entry Level",
      description: "Ensure campus safety and security for our school community",
      requirements: ["Security certification", "Background check", "Strong communication skills"]
    }
  ];

  const testimonials = [
    {
      quote: "Working at MDB has been the most rewarding experience of my teaching career. The collaborative environment and support for professional growth is exceptional.",
      name: "Sarah Mitchell",
      position: "High School English Teacher",
      years: "5 years at MDB"
    },
    {
      quote: "The international community here is incredible. I've learned so much from my colleagues and students from around the world.",
      name: "Rajesh Kumar",
      position: "Middle School Science Teacher",
      years: "3 years at MDB"
    },
    {
      quote: "MDB truly cares about work-life balance. The administration supports teachers and provides excellent resources for our professional development.",
      name: "Maria Rodriguez",
      position: "Elementary Teacher",
      years: "7 years at MDB"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setApplicationData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!applicationData.fullName || !applicationData.email || !applicationData.position) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Application submitted successfully!",
      description: "Our HR team will review your application and contact you soon."
    });

    setApplicationData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      coverLetter: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Work at MDB
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed animate-slide-up">
              Join our community of passionate educators and professionals dedicated to inspiring
              excellence and shaping the future leaders of tomorrow.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90 font-semibold px-8 py-6 text-lg"
                onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work at ASB */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Why Choose MDB?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the benefits and opportunities that make MDB an exceptional place to build your career in education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-earth-brown mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              Current Openings
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities and join our team of dedicated professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <Card
                key={position.title}
                className="bg-white/90 backdrop-blur-sm shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-forest-green text-white">{position.department}</Badge>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-earth-brown border-earth-brown">
                        {position.type}
                      </Badge>
                      <Badge variant="secondary" className="bg-golden-sand/20 text-earth-brown">
                        {position.level}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-earth-brown">{position.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm text-earth-brown">Requirements:</h4>
                    {position.requirements.map((req) => (
                      <div key={req} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-soft-green flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{req}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-forest-green hover:bg-earth-brown text-white"
                    onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
              What Our Team Says
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from our faculty and staff about their experience working at MDB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-white shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden-sand fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-bold text-earth-brown">{testimonial.name}</div>
                    <div className="text-sm text-forest-green">{testimonial.position}</div>
                    <div className="text-xs text-muted-foreground mt-1">{testimonial.years}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
                Apply Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Submit your application and take the first step towards joining our amazing team.
              </p>
            </div>

            <Card className="bg-white/90 backdrop-blur-sm shadow-strong">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-earth-brown mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={applicationData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-brown mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={applicationData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-earth-brown mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={applicationData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-brown mb-2">
                        Position of Interest *
                      </label>
                      <Select onValueChange={(value) => handleInputChange('position', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a position" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-border shadow-medium z-50">
                          {openPositions.map((position) => (
                            <SelectItem key={position.title} value={position.title}>
                              {position.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Other Position</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-brown mb-2">
                      Years of Experience
                    </label>
                    <Select onValueChange={(value) => handleInputChange('experience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-border shadow-medium z-50">
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-brown mb-2">
                      Cover Letter
                    </label>
                    <Textarea
                      value={applicationData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      placeholder="Tell us why you'd like to work at MDB and what you would bring to our team..."
                      rows={6}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-forest-green hover:bg-earth-brown text-white px-8"
                    >
                      Submit Application
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-8"
                    >
                      Save as Draft
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Working at MDB?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Our Human Resources team is here to answer any questions about careers,
            benefits, or the application process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-5 w-5 text-golden-sand" />
              <span>mdbschool23@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-5 w-5 text-golden-sand" />
              <span>+91 22 6149 8001</span>
            </div>
          </div>
          <Button size="lg" className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90">
            Contact HR Team
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WorkAtOurSchool;