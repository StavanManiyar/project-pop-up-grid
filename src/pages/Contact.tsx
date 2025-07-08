import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  MessageSquare,
  Github,
  Linkedin,
  Twitter,
  Coffee
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-blue-400" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-subtle pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Let's Work{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <Badge variant="secondary" className="bg-secondary/50">
              <Clock className="w-4 h-4 mr-2" />
              Usually responds within 24 hours
            </Badge>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-card border-border shadow-elegant">
                  <CardContent className="p-8">
                    <div className="mb-8">
                      <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                        Send me a message
                      </h2>
                      <p className="text-muted-foreground">
                        Fill out the form below and I'll get back to you as soon as possible.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                            className="bg-background/50 border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                            className="bg-background/50 border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="bg-background/50 border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project..."
                          rows={6}
                          required
                          className="bg-background/50 border-border resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full md:w-auto">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                    Get in touch
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-gradient-card rounded-lg border border-border hover:shadow-soft transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-medium">{info.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                    Follow me
                  </h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gradient-card border border-border rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-soft ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-card rounded-lg border border-border p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Coffee Chat?</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and design.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Schedule a call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Quick answers to common questions about working together
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What's your typical project timeline?",
                  a: "Project timelines vary based on complexity, but most web applications take 4-8 weeks from concept to deployment. I'll provide a detailed timeline during our initial consultation."
                },
                {
                  q: "Do you work with international clients?",
                  a: "Absolutely! I work with clients worldwide and am experienced in managing projects across different time zones. Clear communication and project management tools ensure smooth collaboration."
                },
                {
                  q: "What technologies do you specialize in?",
                  a: "I specialize in React, TypeScript, Node.js, and modern web technologies. I'm also proficient in UI/UX design, databases, and cloud deployment platforms."
                },
                {
                  q: "Do you provide ongoing support after project completion?",
                  a: "Yes! I offer various support packages including maintenance, updates, and feature additions. We can discuss the best support plan for your specific needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-card rounded-lg border border-border p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;