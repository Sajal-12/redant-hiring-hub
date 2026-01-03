import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";

const ExpertiesPage = () => {
  const testimonials = [
    {
      quote: "RedAnt helped me land my dream job in EdTech within just 2 weeks. The team was incredibly supportive throughout the process. They understood exactly what I was looking for and matched me perfectly.",
      author: "Priya Sharma",
      role: "Academic Counselor",
      company: "Leading EdTech Platform",
      rating: 5,
    },
    {
      quote: "As a hiring partner, RedAnt has been instrumental in scaling our customer support team. Their quality of candidates is consistently excellent. We've reduced our hiring time by 60%.",
      author: "Rahul Mehta",
      role: "HR Manager",
      company: "SaaS Startup",
      rating: 5,
    },
    {
      quote: "The transparency and communication from RedAnt set them apart. They kept me informed at every step of my job search. I never felt lost or confused about the process.",
      author: "Aisha Khan",
      role: "Sales Executive",
      company: "Fast-growing Startup",
      rating: 5,
    },
    {
      quote: "We've partnered with RedAnt for bulk hiring and they've never disappointed. They understand our requirements deeply and always deliver quality candidates on time.",
      author: "Vikram Singh",
      role: "Talent Acquisition Head",
      company: "Fortune 500 BPO",
      rating: 5,
    },
    {
      quote: "From interview prep to salary negotiation, RedAnt was with me every step. They genuinely care about candidate success, not just placements.",
      author: "Neha Gupta",
      role: "Customer Success Manager",
      company: "Tech Unicorn",
      rating: 5,
    },
    {
      quote: "The team at RedAnt goes above and beyond. They found me a role that perfectly matched my skills and career aspirations. Highly recommend!",
      author: "Arjun Patel",
      role: "BDE Executive",
      company: "EdTech Company",
      rating: 5,
    },
  ];

  const expertise = [
    {
      icon: Users,
      title: "500+ Placements",
      description: "Successfully placed candidates across diverse industries",
    },
    {
      icon: Award,
      title: "95% Success Rate",
      description: "High candidate satisfaction and retention",
    },
    {
      icon: TrendingUp,
      title: "7-Day Average",
      description: "Quick turnaround from application to offer",
    },
    {
      icon: CheckCircle,
      title: "100% Verified",
      description: "All roles and candidates thoroughly vetted",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-hero-gradient relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-accent-foreground text-sm font-medium mb-6">
                <span className="text-2xl font-bold text-redant-e">E</span>
                <span>— Experties</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
                Trusted by <span className="text-gradient">Growing Professionals</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Hear from candidates and partners who've experienced the RedAnt difference. 
                Real stories, real success.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise Stats */}
        <section className="py-12 bg-charcoal">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {expertise.map((item, index) => (
                <div 
                  key={item.title}
                  className="text-center p-6 rounded-xl bg-secondary/5 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">{item.title}</div>
                  <div className="text-secondary/60 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Success Stories
              </h2>
              <p className="text-muted-foreground">
                Real feedback from candidates and hiring partners who trust RedAnt.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={testimonial.author}
                  variant="elevated"
                  className="group opacity-0 animate-fade-in-up hover:scale-[1.02] transition-transform cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(LINKEDIN_URL, "_blank")}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-redant-e text-redant-e"
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
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-redant-r via-redant-e to-redant-t flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Join the RedAnt Success Story
              </h2>
              <p className="text-muted-foreground mb-8">
                Be part of our growing community of successful professionals and trusted hiring partners.
              </p>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                Follow us on LinkedIn
                <Star size={16} className="fill-primary" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExpertiesPage;
