import { Code2, Database, Globe, Server, Cpu, Lock } from "lucide-react"

const technologies = [
  { name: ".NET", icon: Code2, color: "from-purple-500 to-purple-600" },
  { name: "C#", icon: Code2, color: "from-blue-500 to-blue-600" },
  { name: "HTML", icon: Globe, color: "from-orange-500 to-orange-600" },
  { name: "CSS", icon: Globe, color: "from-blue-400 to-blue-500" },
  { name: "JavaScript", icon: Code2, color: "from-yellow-400 to-yellow-500" },
  { name: "TypeScript", icon: Code2, color: "from-blue-500 to-blue-600" },
  { name: "Angular", icon: Globe, color: "from-red-500 to-red-600" },
  { name: "Node.js", icon: Server, color: "from-green-500 to-green-600" },
  { name: "PostgreSQL", icon: Database, color: "from-blue-600 to-blue-700" },
  { name: "MySQL", icon: Database, color: "from-blue-400 to-blue-500" },
  { name: "JWT", icon: Lock, color: "from-pink-500 to-pink-600" },
  { name: "Python", icon: Cpu, color: "from-yellow-500 to-blue-500" },
]

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <div key={tech.name} className="flex flex-col items-center gap-1 sm:gap-2 group cursor-pointer">
                <div
                  className={`p-2 sm:p-3 md:p-4 rounded-lg bg-gradient-to-br ${tech.color} group-hover:scale-110 transition-smooth w-full aspect-square flex items-center justify-center`}
                >
                  <Icon className="h-5 w-5 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-white" />
                </div>
                <h3 className="font-semibold text-center text-[10px] sm:text-xs md:text-sm leading-tight">{tech.name}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack
