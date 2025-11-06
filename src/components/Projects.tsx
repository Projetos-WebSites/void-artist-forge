"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
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
]

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!carouselApi) return

    const updateActiveIndex = () => {
      setActiveIndex(carouselApi.selectedScrollSnap())
    }

    carouselApi.on("select", updateActiveIndex)
    carouselApi.on("reInit", updateActiveIndex)
    updateActiveIndex()

    return () => {
      carouselApi.off("select", updateActiveIndex)
      carouselApi.off("reInit", updateActiveIndex)
    }
  }, [carouselApi])

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">A selection of my recent work with stunning depth effects</p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
            containScroll: "trimSnaps",
            skipSnaps: false,
          }}
          setApi={setCarouselApi}
          className="w-full"
        >
          <CarouselContent className="-ml-4 px-4">
            {projects.map((project, index) => {
              const distance = Math.abs(index - activeIndex)
              const isActive = index === activeIndex
              const isNext = (index - activeIndex + projects.length) % projects.length === 1
              const isPrev = (index - activeIndex + projects.length) % projects.length === projects.length - 1

              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 transition-all duration-500">
                  <div
                    className={`transition-all duration-500 transform ${
                      isActive
                        ? "scale-100 opacity-100 z-20"
                        : isNext || isPrev
                          ? "scale-90 opacity-70 z-10"
                          : "scale-75 opacity-40 z-0"
                    }`}
                  >
                    <div
                        className={`group relative h-[500px] rounded-2xl overflow-hidden transition-all duration-500 ease-out ${
                          isActive ? "shadow-2xl ring-2 ring-primary/50" : "shadow-lg hover:shadow-xl"
                        }`}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      {/* Background Image/Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                      {/* Depth layer */}
                      <div
                         className="absolute inset-0 bg-black/20 will-change-transform"
                         style={{
                           transform: isActive ? "translateZ(20px)" : "none",
                           boxShadow: isActive
                             ? "inset 0 0 30px rgba(0, 0, 0, 0.3), 0 20px 40px rgba(0, 0, 0, 0.4)"
                             : "none",
                         }}
                      />

                      {/* Dark Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/40" />

                      {isActive && (
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      )}

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-end p-8 z-10">
                         <div
                         className={`space-y-4 transform transition-all duration-500 ease-out will-change-transform ${
                             isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-80"
                           } group-hover:translate-y-[-8px]`}
                        >
                          <h3
                            className={`font-bold text-white transition-all duration-500 ${
                              isActive ? "text-3xl" : "text-2xl"
                            }`}
                          >
                            {project.title}
                          </h3>

                          <p
                            className={`text-white/90 leading-relaxed transition-all duration-500 ${
                              isActive ? "text-base opacity-100" : "text-sm opacity-75"
                            }`}
                          >
                            {project.description}
                          </p>

                           <div
                             className={`pt-2 transition-all duration-500 flex justify-center ${
                               isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                             }`}
                           >
                            <Button
                              variant="secondary"
                              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-105"
                            >
                              Ver Projeto
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-12">
            <CarouselPrevious className="static translate-y-0 h-10 w-10" />
            <CarouselNext className="static translate-y-0 h-10 w-10" />
          </div>
        </Carousel>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => carouselApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === activeIndex ? "bg-primary w-8" : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
