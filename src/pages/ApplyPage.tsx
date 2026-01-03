import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { Upload, Send, CheckCircle, Phone, Mail, ArrowLeft } from "lucide-react";

const EMAIL = "redantstaffing@gmail.com";
const WHATSAPP = "+918123314555";

interface JobState {
  job?: {
    title: string;
    company: string;
    location: string;
  };
}

const ApplyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const jobState = location.state as JobState;
  const job = jobState?.job;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    totalExperience: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    preferredRole: job?.title || "",
    resume: null as File | null,
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmitViaEmail = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name, Email, and Phone are required",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const subject = encodeURIComponent(`Job Application from Website: ${formData.preferredRole || "Open Position"}`);
    const body = encodeURIComponent(`
===========================================
🔴 JOB APPLICATION - REDIRECTED FROM WEBSITE
===========================================

APPLICANT DETAILS:
------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Current Location: ${formData.currentLocation}

PROFESSIONAL DETAILS:
--------------------
Total Experience: ${formData.totalExperience}
Current CTC: ${formData.currentCTC}
Expected CTC: ${formData.expectedCTC}
Notice Period: ${formData.noticePeriod}
Preferred Role: ${formData.preferredRole}

${job ? `
APPLIED FOR:
-----------
Position: ${job.title}
Company: ${job.company}
Location: ${job.location}
` : ''}

COVER LETTER / ADDITIONAL INFO:
------------------------------
${formData.coverLetter || 'Not provided'}

===========================================
⚠️ Please attach resume when replying
===========================================
`);

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Opening email client...",
        description: "Please send the email with your resume attached",
      });
    }, 500);
  };

  const handleSubmitViaWhatsApp = () => {
    if (!formData.fullName || !formData.phone) {
      toast({
        title: "Please fill required fields",
        description: "Name and Phone are required",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const message = encodeURIComponent(`
🔴 *JOB APPLICATION - FROM WEBSITE*

*APPLICANT DETAILS:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.currentLocation}

*PROFESSIONAL DETAILS:*
Experience: ${formData.totalExperience}
Current CTC: ${formData.currentCTC}
Expected CTC: ${formData.expectedCTC}
Notice Period: ${formData.noticePeriod}
Preferred Role: ${formData.preferredRole}

${job ? `*APPLIED FOR:* ${job.title} at ${job.company}` : ''}

_I will share my resume in the next message._
`);

    window.open(`https://wa.me/${WHATSAPP.replace(/[^0-9]/g, '')}?text=${message}`, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Opening WhatsApp...",
        description: "Please send your resume in the chat",
      });
    }, 500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="py-20 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Application Submitted!
                </h1>
                <p className="text-muted-foreground mb-8">
                  Thank you for applying! Our team will review your application and get back to you within 2-3 business days.
                  Make sure to send your resume via the channel you chose.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => navigate("/roles")} variant="outline">
                    <ArrowLeft size={16} className="mr-2" />
                    Browse More Jobs
                  </Button>
                  <Button onClick={() => navigate("/")} className="bg-gradient-to-r from-redant-r via-redant-e to-redant-t">
                    Back to Home
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 sm:py-16 bg-hero-gradient relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 text-accent-foreground text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Apply Now
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {job ? `Apply for ${job.title}` : "Submit Your Application"}
              </h1>
              {job && (
                <p className="text-muted-foreground">
                  {job.company} • {job.location}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Card variant="elevated" className="shadow-elevated">
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Personal Information</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentLocation">Current Location</Label>
                          <Input
                            id="currentLocation"
                            name="currentLocation"
                            placeholder="City, State"
                            value={formData.currentLocation}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Professional Information */}
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Professional Details</h2>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="totalExperience">Total Experience</Label>
                          <Select
                            value={formData.totalExperience}
                            onValueChange={(value) => handleSelectChange("totalExperience", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select experience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fresher">Fresher (0-1 years)</SelectItem>
                              <SelectItem value="1-2">1-2 years</SelectItem>
                              <SelectItem value="2-4">2-4 years</SelectItem>
                              <SelectItem value="4-6">4-6 years</SelectItem>
                              <SelectItem value="6-10">6-10 years</SelectItem>
                              <SelectItem value="10+">10+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="noticePeriod">Notice Period</Label>
                          <Select
                            value={formData.noticePeriod}
                            onValueChange={(value) => handleSelectChange("noticePeriod", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select notice period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate</SelectItem>
                              <SelectItem value="15days">15 Days</SelectItem>
                              <SelectItem value="30days">30 Days</SelectItem>
                              <SelectItem value="60days">60 Days</SelectItem>
                              <SelectItem value="90days">90 Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currentCTC">Current CTC (LPA)</Label>
                          <Input
                            id="currentCTC"
                            name="currentCTC"
                            placeholder="e.g., 5 LPA"
                            value={formData.currentCTC}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expectedCTC">Expected CTC (LPA)</Label>
                          <Input
                            id="expectedCTC"
                            name="expectedCTC"
                            placeholder="e.g., 7 LPA"
                            value={formData.expectedCTC}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="preferredRole">Preferred Role / Position</Label>
                          <Input
                            id="preferredRole"
                            name="preferredRole"
                            placeholder="e.g., Customer Support, Sales, BPO"
                            value={formData.preferredRole}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Resume Upload Info */}
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Resume</h2>
                      <div className="p-6 border-2 border-dashed border-border rounded-xl bg-muted/30 text-center">
                        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground text-sm">
                          Your resume will be shared via Email or WhatsApp in the next step
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Supported formats: PDF, DOC, DOCX (Max 5MB)
                        </p>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h2 className="text-lg font-semibold text-foreground mb-4">Additional Information</h2>
                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter / Message (Optional)</Label>
                        <Textarea
                          id="coverLetter"
                          name="coverLetter"
                          placeholder="Tell us why you'd be a great fit..."
                          rows={4}
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground mb-4 text-center">
                        Choose how you'd like to submit your application:
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          className="flex-1 bg-gradient-to-r from-redant-r via-redant-e to-redant-t"
                          size="lg"
                          onClick={handleSubmitViaEmail}
                          disabled={isSubmitting}
                        >
                          <Mail size={20} />
                          Submit via Email
                          <Send size={16} />
                        </Button>
                        <Button
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          size="lg"
                          onClick={handleSubmitViaWhatsApp}
                          disabled={isSubmitting}
                        >
                          <Phone size={20} />
                          Submit via WhatsApp
                          <Send size={16} />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 text-center">
                        By submitting, you agree to our terms and conditions. Your data will only be used for recruitment purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApplyPage;
