const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your requirements, culture, and technical needs.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=500&q=80"
  },
  {
    number: "02",
    title: "Screening",
    description: "Rigorous vetting via our 50k+ database to find top talent.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80"
  },
  {
    number: "03",
    title: "Placement",
    description: "Seamless onboarding and post-hiring support for retention.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&q=80"
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-gradient-to-r from-border to-transparent translate-x-1/2" />
              )}
              
              <div className="flex flex-col items-center text-center">
                {/* Number */}
                <div className="text-6xl lg:text-7xl font-black text-secondary mb-6">
                  {step.number}
                </div>
                
                {/* Image */}
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-6">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.number}. {step.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
