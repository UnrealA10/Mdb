import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "/lovable-uploads/hero-school.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/80 to-earth-brown/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Excellence in Education
            <span className="block text-golden-sand">Since 1999</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Taleem, Tarbiyat Aur Taqwa Ka Sangam - A confluence of education, morality, and God-consciousness.
            We nurture students with academic excellence, moral strength, and spiritual consciousness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-golden-sand text-earth-brown hover:bg-golden-sand/90 font-semibold px-8 py-6 text-lg"
            >
              Explore Admissions
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-earth-brown font-semibold px-8 py-6 text-lg"
            >
              Virtual Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </div>

      {/* Notice Badge */}
      <div className="absolute top-20 right-4 md:top-24 md:right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-medium max-w-xs animate-slide-up">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-primary rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-semibold text-earth-brown">NOTICES</span>
        </div>
        <p className="text-sm text-earth-brown/80">
          New admission guidelines #NewsAtMDB
        </p>
      </div>
    </section>
  );
};

export default Hero;