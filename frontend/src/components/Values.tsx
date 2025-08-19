import { Heart, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We foster honesty, respect, and ethical behavior in all aspects of school life."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and forward-thinking approaches to learning and problem-solving."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in academics, character, and personal growth."
    },
    {
      icon: Users,
      title: "Community",
      description: "We build strong connections that support and inspire each member of our diverse community."
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
            Exceptional Values
          </h2>
          <p className="text-lg md:text-xl text-earth-brown/80 max-w-3xl mx-auto leading-relaxed">
            We inspire all of our students to continuous inquiry, empowering them with the skills, 
            courage, optimism, and integrity to pursue their dreams and enhance the lives of others.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-forest-green mb-4">
              OUR KEY VALUES:
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-golden-sand/30"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-4">
                  {value.title}
                </h3>
                <p className="text-earth-brown/70 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-medium border border-golden-sand/20">
            <h3 className="text-3xl md:text-4xl font-bold text-forest-green mb-6">
              Individualized Pathways
            </h3>
            <p className="text-lg md:text-xl text-earth-brown/80 max-w-4xl mx-auto leading-relaxed">
              Students are empowered by dreams, and they are equipped with skills{" "}
              <span className="font-semibold text-forest-green underline decoration-golden-sand decoration-2">
                to become life-long learners
              </span>
              . Our personalized approach ensures every student discovers their unique potential and passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;