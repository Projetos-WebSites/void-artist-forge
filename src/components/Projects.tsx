import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "project-1",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting.",
    tech: ["Angular", "Express", "MongoDB", "Socket.io"],
    image: "project-2",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform using machine learning to generate marketing copy and articles.",
    tech: ["React", "Python", "FastAPI", "OpenAI"],
    image: "project-3",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work
          </p>
        </div>

        <div className="relative">
          <div className="glass rounded-2xl p-8 md:p-12 shadow-card">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-accent/30 to-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-muted">
                    {currentIndex + 1}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold mb-3">{currentProject.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-smooth">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full border-border hover:bg-secondary transition-smooth"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full border-border hover:bg-secondary transition-smooth"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-smooth ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
