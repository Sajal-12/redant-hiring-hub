const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "HR Manager",
    company: "Tech Corp",
    quote: "RedAnt delivered top-tier professionals within days. Their recruitment model saved us time, cost, and a lot of stress. Highly recommended!",
    avatar: "RK"
  },
  {
    name: "Priya Sharma",
    role: "Operations Director",
    company: "FinServ Ltd",
    quote: "What sets RedAnt apart is their precision in matching candidates to roles. The quality of talent we receive consistently exceeds expectations.",
    avatar: "PS"
  },
  {
    name: "Amit Patel",
    role: "CEO",
    company: "StartupXYZ",
    quote: "We outsourced our support operations to RedAnt, and it transformed our workflow. The team they provided was skilled and aligned perfectly with our culture.",
    avatar: "AP"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Success Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border/50"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold mb-6">
                {testimonial.avatar}
              </div>
              
              {/* Info */}
              <div className="mb-4">
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              
              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
