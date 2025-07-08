import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Zap, Users, Star, Coffee, Download } from "lucide-react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { modalProjects, pageProjects, type Project } from "@/data/projects";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-secondary/50 mb-6">
                <Star className="w-4 h-4 mr-2" />
                Available for new projects
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-heading font-bold mb-8 leading-tight">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Creative Developer
              </span>
              <br />
              <span className="text-foreground">& Digital Craftsman</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              I'm Alex Morgan, a passionate full-stack developer and UI designer based in San Francisco. 
              I create beautiful, functional digital experiences that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="shadow-elegant group" asChild>
                <Link to="/projects">
                  <Code className="w-5 h-5 mr-2" />
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  <Coffee className="w-5 h-5 mr-2" />
                  Let's Talk
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "5+", label: "Years Experience" },
                { number: "30+", label: "Happy Clients" },
                { number: "99%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects (Modal) */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Interactive showcase of my recent work. Click to explore detailed project information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* More Projects Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                More Projects
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Discover additional projects with comprehensive case studies and development insights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {pageProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-accent transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/projects">
                  <Zap className="w-5 h-5 mr-2" />
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                What I Do
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Full-stack development services to bring your vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  description: "Modern, responsive websites and web applications built with React, TypeScript, and cutting-edge technologies."
                },
                {
                  icon: Palette,
                  title: "UI/UX Design",
                  description: "Beautiful, user-centered designs that convert visitors into customers with attention to every detail."
                },
                {
                  icon: Zap,
                  title: "Performance Optimization",
                  description: "Lightning-fast websites that rank well in search engines and provide exceptional user experiences."
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group p-8 bg-gradient-card rounded-xl border border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/services">
                  <Users className="w-5 h-5 mr-2" />
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Ready to bring your ideas to life? I'm always excited to work on new projects 
                and collaborate with fellow creators and innovators.
              </p>
              <Button size="lg" className="shadow-elegant">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Index;
