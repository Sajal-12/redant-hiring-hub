const partners = [
  { name: "Tech Mahindra", logo: "Tech Mahindra" },
  { name: "ICICI", logo: "ICICI" },
  { name: "Teleperformance", logo: "Teleperformance" },
  { name: "Athena", logo: "Athena" },
  { name: "Eureka", logo: "Eureka" },
  { name: "Scaler", logo: "Scaler" },
];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs text-muted-foreground tracking-widest mb-4 block">
            Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Companies We Scale
          </h2>
        </div>

        {/* Partners Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-card border border-border/50 h-24"
            >
              <span className="text-muted-foreground font-semibold text-sm">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
