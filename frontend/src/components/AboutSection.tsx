import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import mdbLogo from "@/assets/logo.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Logo and Content */}
          <div>
            <div className="flex items-center mb-6">
              <img src={mdbLogo} alt="MDB Logo" className="h-16 w-16 mr-4" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-earth-brown">
                  About MDB Senior Secondary School
                </h2>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              MDB Senior Secondary School is a beacon of hope and transformation, inspired by the divine teachings of Islam.
              Our mission is to create a harmonious society where cultural values, spiritual growth, and community service
              thrive hand-in-hand. With unwavering dedication, we strive to preserve our rich heritage, uplift the
              underprivileged, and inspire individuals to lead lives filled with compassion, purpose, and integrity.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through our collective efforts, we aim to bring a "Navyug" (a new era) where every individual contributes
              to a more vibrant, united, and prosperous society.
            </p>

            <Link to="/about">
              <Button
                size="lg"
                className="bg-forest-green hover:bg-earth-brown text-white font-semibold px-8 py-3"
              >
                Know More About Us
              </Button>
            </Link>
          </div>

          {/* Goals Grid */}
          <div>
            <h3 className="text-2xl font-bold text-earth-brown mb-8 text-center">
              Goals Of MDB Senior Secondary School
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                "Youth Empowerment",
                "Women Empowerment",
                "Rural Empowerment",
                "Environmental Help",
                "Education Empowerment",
                "Health Empowerment"
              ].map((goal, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-forest-green text-sm">
                      {goal}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-warm rounded-lg">
              <p className="text-earth-brown text-center leading-relaxed">
                Our goals are aligned with our vision of creating an equitable, just, and sustainable society.
                We focus on areas where we can make the most significant impact, ensuring that our efforts
                bring about real and lasting change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;