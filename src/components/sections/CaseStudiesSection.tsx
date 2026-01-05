const caseStudies = [
  {
    category: "CASE STUDY: MANUFACTURING",
    title: "Scaling a Factory Workforce by 200%",
    stat1: { value: "150+", label: "Hires" },
    stat2: { value: "14 Days", label: "Time" },
    image: "https://images.unsplash.com/photo-1548088034-2a22735c5e66?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "CASE STUDY: TECH STARTUP",
    title: "Building a Core Dev Team",
    stat1: { value: "12", label: "Senior Devs" },
    stat2: { value: "0%", label: "Attrition" },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Impact & Results
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10]"
            >
              {/* Image */}
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-xs text-primary font-medium tracking-wider mb-2 block">
                  {study.category}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-6">
                  {study.title}
                </h3>
                
                {/* Stats */}
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary">
                      {study.stat1.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {study.stat1.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold text-primary">
                      {study.stat2.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {study.stat2.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
