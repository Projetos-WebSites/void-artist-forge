import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, team chat, and advanced reporting.",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform using machine learning to generate marketing copy and articles.",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with advanced analytics and customizable reports.",
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Social Media Hub",
    description: "Unified social media management tool with scheduling, analytics, and engagement features.",
    gradient: "from-indigo-600 to-purple-600",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my recent work
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="group relative h-[500px] rounded-2xl overflow-hidden shadow-card hover-scale">
                  {/* Background Image/Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-8 z-10">
                    <div className="space-y-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                      <h3 className="text-3xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {project.description}
                      </p>
                      <Button 
                        variant="secondary"
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-smooth"
                      >
                        Ver Projeto
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
