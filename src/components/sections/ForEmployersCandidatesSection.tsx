import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const ForEmployersCandidatesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* For Employers */}
          <div className="flex flex-col lg:flex-row gap-6 p-8 rounded-2xl bg-card border border-border/50">
            <div className="flex-1">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                For Employers
              </h3>
              <p className="text-muted-foreground mb-6">
                Struggling with high attrition or slow hiring? We act as your strategic partner to build high-performance teams.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>Custom Hiring Strategies</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>Market Salary Benchmarking</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>Replacement Guarantee</span>
                </li>
              </ul>
              <Link to="/talent">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Partner With Us
                </Button>
              </Link>
            </div>
            <div className="lg:w-48 aspect-square lg:aspect-auto rounded-xl overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80"
                alt="For Employers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* For Candidates */}
          <div className="flex flex-col lg:flex-row gap-6 p-8 rounded-2xl bg-card border border-border/50">
            <div className="lg:w-48 aspect-square lg:aspect-auto rounded-xl overflow-hidden flex-shrink-0 order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80"
                alt="For Candidates"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                For Candidates
              </h3>
              <p className="text-muted-foreground mb-6">
                We don't just find you a job; we build your career. Get access to exclusive roles in top companies.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>Resume Building</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>Interview Coaching</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>Salary Negotiation</span>
                </li>
              </ul>
              <Link to="/roles">
                <Button variant="outline" className="border-foreground/30 text-foreground hover:bg-foreground hover:text-background">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForEmployersCandidatesSection;
