import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "RedAnt helped me land my dream job in EdTech within just 2 weeks. The team was incredibly supportive throughout the process.",
      author: "Priya Sharma",
      role: "Academic Counselor",
      company: "Leading EdTech Platform",
      rating: 5,
    },
    {
      quote: "As a hiring partner, RedAnt has been instrumental in scaling our customer support team. Their quality of candidates is consistently excellent.",
      author: "Rahul Mehta",
      role: "HR Manager",
      company: "SaaS Startup",
      rating: 5,
    },
    {
      quote: "The transparency and communication from RedAnt set them apart. They kept me informed at every step of my job search.",
      author: "Aisha Khan",
      role: "Sales Executive",
      company: "Fast-growing Startup",
      rating: 5,
    },
  ];

  const stats = [
    { value: "500+", label: "Professionals Placed" },
    { value: "100+", label: "Partner Companies" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "7 Days", label: "Average Placement Time" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by <span className="text-gradient">Growing Professionals</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from candidates and partners who've experienced the RedAnt difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.author}
              variant="elevated"
              className="group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                  <p className="text-foreground leading-relaxed pl-4">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-card shadow-soft opacity-0 animate-scale-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
