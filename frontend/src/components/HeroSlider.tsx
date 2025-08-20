import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mdbLogo from "/lovable-uploads/logo.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome To",
      subtitle: "MDB Senior Secondary School",
      description: "Together, we are building a brighter tomorrow, inspired by the timeless values of Islamic education.",
      image: "/lovable-uploads/dae80b83-df7f-4657-b0c0-c12d54185616.png",
    },
    {
      title: "Transforming Rural Communities",
      subtitle: "Quality Education for All",
      description: "Our innovative teaching methods make learning accessible, engaging, and impactful for all students.",
      image: "/lovable-uploads/dae80b83-df7f-4657-b0c0-c12d54185616.png",
    },
    {
      title: "Empowering Students",
      subtitle: "Taleem, Tarbiyat Aur Taqwa",
      description: "We are committed to creating opportunities, providing skills, and building confidence to help students lead dignified lives.",
      image: "/lovable-uploads/dae80b83-df7f-4657-b0c0-c12d54185616.png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-earth-brown/70"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <img src={mdbLogo} alt="MDB Logo" className="h-20 w-20 mx-auto mb-6" />
          </div>

          <div className="animate-fade-in">
            <h3 className="text-lg md:text-xl mb-2 opacity-90">
              {slides[currentSlide].title}
            </h3>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {slides[currentSlide].subtitle}
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              {slides[currentSlide].description}
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
                className="border-white bg-forest-green text-white hover:bg-white hover:text-earth-brown font-semibold px-8 py-6 text-lg"
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;