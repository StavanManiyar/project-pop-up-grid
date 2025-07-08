import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Mail, Phone, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import workspaceImage from "@/assets/workspace.jpg";

const About = () => {
  const skills = [
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "Three.js", level: 75 },
    { name: "PostgreSQL", level: 82 },
    { name: "Docker", level: 78 }
  ];

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Industries",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Managed a team of 4 developers and delivered 15+ projects.",
      achievements: ["Increased app performance by 40%", "Led migration to microservices", "Mentored junior developers"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      period: "2020 - 2022",
      description: "Specialized in creating responsive web interfaces and interactive user experiences. Collaborated with design teams to implement pixel-perfect designs.",
      achievements: ["Reduced load times by 60%", "Implemented design system", "Built 20+ React components"]
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      description: "Developed web applications using modern JavaScript frameworks. Gained experience in full-stack development and agile methodologies.",
      achievements: ["Delivered first production app", "Learned React & Node.js", "Contributed to open source"]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-subtle pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl font-heading font-bold text-foreground mb-6">
                    Hello, I'm{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Alex Morgan
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                    A passionate full-stack developer and UI designer with 5+ years of experience 
                    creating digital experiences that combine beautiful design with robust functionality.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in React, TypeScript, and modern web technologies. When I'm not coding, 
                    you'll find me exploring new design trends, contributing to open source, or hiking 
                    in the mountains.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Available for projects</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative group">
                  <img
                    src={profileImage}
                    alt="Alex Morgan"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-elegant transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Skills & Expertise
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                Professional Experience
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                My journey in the world of technology and design
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-primary rounded-full shadow-glow" />
                  
                  <div className="bg-gradient-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary" className="mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-heading font-bold text-foreground">
                  Beyond the Code
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not crafting digital experiences, you'll find me exploring the great outdoors, 
                  experimenting with new technologies, or contributing to open-source projects. I believe 
                  that creativity comes from diverse experiences and continuous learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about mentoring upcoming developers and giving back to the tech community. 
                  I regularly speak at local meetups and have contributed to several popular open-source libraries.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {["Photography", "Hiking", "Open Source", "Mentoring", "Travel", "Music"].map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-secondary/50">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={workspaceImage}
                  alt="Workspace"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;