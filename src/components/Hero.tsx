"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import LetterGlitch from "@/components/ui/LetterGlitch"

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-10"></div>
      {/* Background Glitch Effect */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#a855f7", "#8b5cf6", "#7c3aed"]}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl w-full relative z-10">
        <div className="space-y-8 max-w-3xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Full Stack
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized in building modern web applications with React, Node.js, and cutting-edge technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary transition-smooth"
              onClick={() => scrollToSection("about")}
            >
              About Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-4">
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
            <a href="mailto:contact@example.com" className="p-3 glass rounded-lg hover:bg-accent/10 transition-smooth">
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:bg-accent/10 transition-smooth"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
