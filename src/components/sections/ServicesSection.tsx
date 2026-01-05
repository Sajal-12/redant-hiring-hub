import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Consulting",
    description: "Strategic HR planning and policy formulation for startups and established firms.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    href: "/experties"
  },
  {
    number: "02",
    title: "Recruitment",
    description: "End-to-end hiring: Sourcing, screening, interviewing, and offer management.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    href: "/roles"
  },
  {
    number: "03",
    title: "Outsourcing",
    description: "Contract staffing and payroll management for bulk requirements.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
    href: "/talent"
  },
  {
    number: "04",
    title: "Training",
    description: "Skill gap analysis and career guidance workshops for candidates.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80",
    href: "/network"
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive Solutions
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service) => (
            <Link
              key={service.number}
              to={service.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              {/* Number */}
              <div className="p-6 pb-3">
                <span className="text-primary font-bold text-lg">{service.number}.</span>
                <h3 className="text-xl font-bold text-foreground mt-1">{service.title}</h3>
              </div>
              
              {/* Description */}
              <div className="px-6 pb-4 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
