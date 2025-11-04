import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Gradient Transition from top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 shadow-card max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Full Stack Developer with a passion for creating elegant, 
                efficient, and user-friendly web applications. With expertise in 
                modern technologies like React, Node.js, and TypeScript, I bring 
                ideas to life through clean code and thoughtful design.
              </p>
              <p>
                Currently pursuing a Master's in Computer Science, I'm constantly 
                learning and adapting to new technologies and best practices. 
                I believe in writing code that is not only functional but also 
                maintainable and scalable.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge 
                through technical writing and mentoring.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow transition-smooth"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary transition-smooth"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
