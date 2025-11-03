import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-accent flex items-center justify-center text-8xl font-bold shadow-glow">
                  P
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-2xl"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
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
              </div>

              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground glow transition-smooth"
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
