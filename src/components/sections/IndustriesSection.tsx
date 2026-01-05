import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    location: "Industrial Belt",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Corporate IT",
    location: "Pan India",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Logistics",
    location: "Supply Chain & Transport",
    image: "https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Healthcare",
    location: "Hospitals & Labs",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Engineering",
    location: "Civil & Mechanical",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Finance",
    location: "Banking & Accounts",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
  },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Industries We Dominate
            </h2>
            <p className="text-muted-foreground">
              Specialized hiring across key economic sectors.
            </p>
          </div>
          <Link 
            to="/demands" 
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            View All Sectors
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {industry.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
