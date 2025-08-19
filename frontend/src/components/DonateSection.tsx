import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Leaf, Scale, Users } from "lucide-react";

const DonateSection = () => {
  const donationCauses = [
    {
      title: "Help For Education",
      icon: GraduationCap,
      description: "Support quality education for underprivileged students",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Help For Medical Emergency",
      icon: Heart,
      description: "Provide medical assistance to those in need",
      color: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
      title: "Help For Environment Help",
      icon: Leaf,
      description: "Support environmental conservation projects",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "Help For Legal Help",
      icon: Scale,
      description: "Provide legal assistance to the community",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "Help For Social Reforms",
      icon: Users,
      description: "Support social development initiatives",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
            Donate For Smile
          </h2>
          <p className="text-lg text-earth-brown/80 max-w-3xl mx-auto">
            Your generous donations help us continue our mission of providing quality education and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donationCauses.map((cause, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <CardContent className={`p-8 text-center text-white ${cause.color} h-full flex flex-col justify-between`}>
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <cause.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {cause.title}
                  </h3>
                  <p className="text-white/90 mb-6">
                    {cause.description}
                  </p>
                </div>
                <Button 
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30 hover:bg-white hover:text-earth-brown"
                >
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DonateSection;