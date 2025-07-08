import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap } from "lucide-react";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { modalProjects, pageProjects, type Project } from "@/data/projects";

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
      <div className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Creative Developer
              </span>
              <br />
              <span className="text-foreground">& UI Designer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting beautiful digital experiences with modern web technologies. 
              Passionate about clean code, elegant design, and seamless user interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-elegant">
                <Code className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                <Palette className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
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
