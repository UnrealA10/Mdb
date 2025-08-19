import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Using placeholder images since we don't have actual gallery images
  const galleryImages = [
    "/lovable-uploads/DJI_20230621_101744_868.jpg",
    "/lovable-uploads/DJI_20230621_102411_874.jpg",
    "/lovable-uploads/DJI_20230621_102439_406.jpg",
    "/lovable-uploads/IMG_0912.jpg",
    "/lovable-uploads/IMG_0925.jpg",
    "/lovable-uploads/IMG_1003.jpg",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-earth-brown mb-6">
            Our Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-105"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/community">
            <Button
              size="lg"
              className="bg-forest-green hover:bg-earth-brown text-white font-semibold px-8 py-3"
            >
              See More Images
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;