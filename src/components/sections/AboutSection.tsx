const AboutSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About RedAnt
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded with a vision to streamline recruitment in India's financial capital. We combine human intuition with data analytics to create perfect professional matches.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-black text-primary mb-2">
                  12+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-black text-primary mb-2">
                  15
                </div>
                <div className="text-muted-foreground">Specialized Recruiters</div>
              </div>
            </div>
          </div>
          
          {/* Image & Quote */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Team"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-card p-6 rounded-xl border border-border/50 max-w-xs shadow-lg">
              <p className="text-foreground text-lg font-medium italic">
                "People First.
                <br />
                <span className="text-primary">Always."</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
