const stats = [
  {
    value: "48h",
    title: "Rapid Turnaround",
    description: "Our AI-driven database ensures you get vetted profiles within 2 days, not 2 weeks.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    value: "98%",
    title: "Retention Rate",
    description: "We don't just match resumes; we match culture. Our candidates stay longer.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    value: "50k+",
    title: "Active Talent Pool",
    description: "From factory workers to CEOs, our database is vast and verified.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Industry Leaders
            <br />
            <span className="text-muted-foreground">Choose RedAnt.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="text-4xl lg:text-5xl font-black text-primary mb-3">
                  {stat.value}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
