import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, IndianRupee, Building2, Home, Users, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const LINKEDIN_URL = "https://www.linkedin.com/company/redantstaffing/";
const EMAIL = "redantstaffing@gmail.com";

type JobType = "all" | "WFH" | "WFO" | "Hybrid";
type Department = "all" | "BPO" | "EdTech" | "Sales" | "Customer Support";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  experience: string;
  salary: string;
  type: "WFH" | "WFO" | "Hybrid";
  department: Department;
  featured?: boolean;
}

const JobsSection = () => {
  const [selectedType, setSelectedType] = useState<JobType>("all");
  const [selectedDept, setSelectedDept] = useState<Department>("all");

  const jobs: Job[] = [
    {
      id: 1,
      title: "Customer Support Executive",
      company: "Leading EdTech Startup",
      location: "Bangalore",
      experience: "0-2 years",
      salary: "₹3-5 LPA",
      type: "WFH",
      department: "Customer Support",
      featured: true,
    },
    {
      id: 2,
      title: "Inside Sales Representative",
      company: "Fast-growing SaaS Company",
      location: "Mumbai",
      experience: "1-3 years",
      salary: "₹4-7 LPA",
      type: "Hybrid",
      department: "Sales",
    },
    {
      id: 3,
      title: "Voice Process Associate",
      company: "International BPO",
      location: "Hyderabad",
      experience: "0-1 years",
      salary: "₹2.5-4 LPA",
      type: "WFO",
      department: "BPO",
    },
    {
      id: 4,
      title: "Academic Counselor",
      company: "Top EdTech Platform",
      location: "Delhi NCR",
      experience: "2-4 years",
      salary: "₹5-8 LPA",
      type: "Hybrid",
      department: "EdTech",
      featured: true,
    },
    {
      id: 5,
      title: "Team Lead - Customer Success",
      company: "Enterprise SaaS",
      location: "Pune",
      experience: "4-6 years",
      salary: "₹8-12 LPA",
      type: "WFO",
      department: "Customer Support",
    },
    {
      id: 6,
      title: "Business Development Executive",
      company: "EdTech Unicorn",
      location: "Chennai",
      experience: "1-2 years",
      salary: "₹3.5-6 LPA",
      type: "WFH",
      department: "Sales",
    },
  ];

  const jobTypes: { value: JobType; label: string; icon: React.ReactNode }[] = [
    { value: "all", label: "All Types", icon: <Briefcase size={16} /> },
    { value: "WFH", label: "Work from Home", icon: <Home size={16} /> },
    { value: "WFO", label: "Work from Office", icon: <Building2 size={16} /> },
    { value: "Hybrid", label: "Hybrid", icon: <Users size={16} /> },
  ];

  const departments: Department[] = ["all", "BPO", "EdTech", "Sales", "Customer Support"];

  const filteredJobs = jobs.filter((job) => {
    const typeMatch = selectedType === "all" || job.type === selectedType;
    const deptMatch = selectedDept === "all" || job.department === selectedDept;
    return typeMatch && deptMatch;
  });

  const getTypeIcon = (type: "WFH" | "WFO" | "Hybrid") => {
    switch (type) {
      case "WFH":
        return <Home size={14} />;
      case "WFO":
        return <Building2 size={14} />;
      case "Hybrid":
        return <Users size={14} />;
    }
  };

  const handleApplyJob = (job: Job) => {
    const subject = encodeURIComponent(`Job Application: ${job.title}`);
    const body = encodeURIComponent(`Hi RedAnt Staffing Team,

I am interested in applying for the following position:

Position: ${job.title}
Company: ${job.company}
Location: ${job.location}
Experience Required: ${job.experience}

Please find my details below:

Full Name: 
Phone Number: 
Email: 
Current Location: 
Total Experience: 
Current CTC: 
Expected CTC: 
Notice Period: 

I have attached my resume for your review.

Thank you!`);
    
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: `Applying for ${job.title} position`,
    });
  };

  const handleViewAllJobs = () => {
    window.open(LINKEDIN_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="jobs" className="py-16 sm:py-20 lg:py-28 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Current Openings
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Find Your <span className="text-gradient">Dream Role</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Explore verified job opportunities across leading companies. Your next career move is just a click away.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 sm:mb-10 space-y-4">
          {/* Job Type Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {jobTypes.map((type) => (
              <Button
                key={type.value}
                variant={selectedType === type.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(type.value)}
                className="gap-2 text-xs sm:text-sm"
              >
                {type.icon}
                <span className="hidden sm:inline">{type.label}</span>
                <span className="sm:hidden">{type.value === "all" ? "All" : type.value}</span>
              </Button>
            ))}
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDept === dept ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedDept(dept)}
                className="text-xs sm:text-sm"
              >
                {dept === "all" ? "All Departments" : dept}
              </Button>
            ))}
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredJobs.map((job, index) => (
            <Card
              key={job.id}
              variant="elevated"
              className={`group hover-lift opacity-0 animate-fade-in-up cursor-pointer ${
                job.featured ? "ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => handleApplyJob(job)}
            >
              <CardContent className="p-4 sm:p-6">
                {job.featured && (
                  <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20">
                    Featured
                  </Badge>
                )}
                
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 sm:mb-4">{job.company}</p>

                <div className="space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <MapPin size={14} className="text-primary shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <Clock size={14} className="text-primary shrink-0" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <IndianRupee size={14} className="text-primary shrink-0" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="gap-1 text-xs">
                    {getTypeIcon(job.type)}
                    {job.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">{job.department}</Badge>
                </div>

                <Button 
                  className="w-full mt-4 sm:mt-6 group/btn" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApplyJob(job);
                  }}
                >
                  Apply Now
                  <ExternalLink size={14} className="ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No jobs found matching your criteria.</p>
            <Button variant="outline" onClick={() => { setSelectedType("all"); setSelectedDept("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={handleViewAllJobs}
            className="group"
          >
            View All Openings on LinkedIn
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
