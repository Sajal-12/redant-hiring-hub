import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const jobs = [
  {
    company: "Leading BPO",
    title: "Customer Support Executive",
    location: "Mumbai",
    description: "Opening for customer support executive. Qualification: HSC pass. Good communication skills required. Training provided.",
    salary: "₹2.04 LPA",
    posted: "2 weeks ago"
  },
  {
    company: "EdTech Startup",
    title: "Sales Associate",
    location: "Bangalore",
    description: "Urgently requirement for sales associate. HSC pass, fresher candidates with excellent communication skills welcome.",
    salary: "₹2.29 LPA",
    posted: "2 weeks ago"
  },
  {
    company: "Finance Company",
    title: "Loan Sales Executive",
    location: "Delhi NCR",
    description: "Good opportunity to join our team. Opening for loan sales process. Professional loan sales experience preferred.",
    salary: "₹2.04 LPA",
    posted: "3 weeks ago"
  },
  {
    company: "Insurance Provider",
    title: "Insurance Sales",
    location: "Pune",
    description: "Great opportunity to work on insurance process. Qualification Required: Min. HSC. Any loan & insurance experience.",
    salary: "₹2.35 LPA",
    posted: "3 weeks ago"
  },
  {
    company: "Tech Company",
    title: "CRM Executive",
    location: "Hyderabad",
    description: "We are hiring for multiple Customer Support, CRM, and Sales roles across various processes.",
    salary: "₹3 LPA - ₹4.2 LPA",
    posted: "3 weeks ago"
  },
  {
    company: "Collections Firm",
    title: "Soft Collection Agent",
    location: "Mumbai",
    description: "We do have Daily, weekly plus monthly incentives. Minimum 1000 to Maximum 19,000 INR bonus.",
    salary: "₹1.8 LPA + Incentives",
    posted: "3 weeks ago"
  },
];

const JobsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              We are hiring
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Latest Opportunities
            </h2>
          </div>
          <Link 
            to="/roles" 
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm font-medium"
          >
            View All Jobs
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {jobs.map((job, index) => (
            <Link
              key={index}
              to="/apply"
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs text-muted-foreground">{job.company}</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{job.posted}</span>
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {job.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{job.location}</span>
                <span className="text-sm font-semibold text-primary">{job.salary}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
