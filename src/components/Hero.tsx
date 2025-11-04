import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Full Stack
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Specialized in building modern web applications with React, Node.js, 
              and cutting-edge technologies. Passionate about creating elegant solutions 
              to complex problems.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground glow transition-smooth"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-secondary transition-smooth"
              onClick={() => scrollToSection("about")}
            >
              About Me
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

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:bg-accent/10 transition-smooth"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:bg-accent/10 transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 glass rounded-lg hover:bg-accent/10 transition-smooth"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="tel:+1234567890"
              className="p-3 glass rounded-lg hover:bg-accent/10 transition-smooth"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative hidden lg:block">
          <div className="glass rounded-2xl p-8 shadow-card">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-accent flex items-center justify-center text-6xl font-bold">
                  P
                </div>
                <p className="text-muted-foreground">Portfolio Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
