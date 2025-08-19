import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ManagementTeam = () => {
  const managementMembers = [
    {
      name: "Tauseeb Ahamad",
      position: "Principal",
      qualifications: "(MA, M.Ed, LLB)",
      organization: "MDB Senior Secondary School",
    },
    {
      name: "Management Member",
      position: "Vice Principal",
      qualifications: "",
      organization: "MDB Senior Secondary School",
    },
    {
      name: "Management Member",
      position: "Secretary",
      qualifications: "",
      organization: "MDB Senior Secondary School",
    },
    {
      name: "Management Member", 
      position: "Treasurer",
      qualifications: "",
      organization: "MDB Senior Secondary School",
    },
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
            Our Management Body
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {managementMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold text-earth-brown mb-2">
                  {member.name}
                </h3>
                {member.qualifications && (
                  <p className="text-sm text-forest-green mb-2">
                    {member.qualifications}
                  </p>
                )}
                <p className="text-forest-green font-semibold mb-1">
                  ({member.position})
                </p>
                <p className="text-earth-brown/70 text-sm">
                  {member.organization}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/about">
            <Button 
              variant="outline" 
              size="lg"
              className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white"
            >
              See Full Management Body
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;