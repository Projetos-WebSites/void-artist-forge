import { Code2, Database, Globe, Server, Cpu, Lock } from "lucide-react";

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
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="glass rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth group cursor-pointer"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${tech.color} group-hover:scale-110 transition-smooth`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-center">{tech.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
