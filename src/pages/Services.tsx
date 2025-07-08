import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Smartphone, 
  Globe, 
  Database, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, TypeScript, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern Frameworks"],
      price: "From $3,000",
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using React Native for iOS and Android.",
      features: ["Native Performance", "Cross-Platform", "App Store Deployment", "Push Notifications"],
      price: "From $5,000",
      popular: true
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "From $2,000",
      popular: false
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable backend solutions with databases, APIs, and cloud infrastructure.",
      features: ["API Development", "Database Design", "Cloud Deployment", "Security Implementation"],
      price: "From $4,000",
      popular: false
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management.",
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Analytics"],
      price: "From $6,000",
      popular: false
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing website and improve user experience.",
      features: ["Speed Analysis", "Code Optimization", "CDN Setup", "Monitoring"],
      price: "From $1,500",
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We'll discuss your goals, requirements, and create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and visual designs that align with your brand and goals."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your solution with clean code and thorough testing for quality assurance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support and maintenance."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Alex delivered an exceptional web application that exceeded our expectations. The attention to detail and performance optimization was outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content: "Working with Alex was a pleasure. The project was delivered on time, within budget, and the quality was top-notch.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      content: "The mobile app Alex built for us has been a game-changer. User engagement increased by 300% since launch.",
      rating: 5
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-subtle pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
              Services &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, I provide comprehensive development services 
              to bring your digital vision to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`relative bg-gradient-card border-border hover:shadow-elegant transition-all duration-300 group ${
                    service.popular ? "ring-2 ring-primary/50" : ""
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-primary">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-foreground">{service.price}</span>
                        <span className="text-sm text-muted-foreground">Starting price</span>
                      </div>
                      <Button 
                        variant={service.popular ? "default" : "outline"} 
                        className="w-full"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                How I Work
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My proven process ensures successful project delivery from start to finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                What Clients Say
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Don't just take my word for it - here's what my clients have to say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss your requirements and create something amazing together. 
                I offer free consultations to understand your needs and provide the best solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;