import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2024",
    description: "Complete web development bootcamp covering frontend and backend technologies",
  },
  {
    title: "Advanced React & Redux",
    issuer: "Coursera",
    date: "2023",
    description: "Advanced course on React, Redux, and modern JavaScript patterns",
  },
  {
    title: "Cloud Architecture",
    issuer: "AWS",
    date: "2023",
    description: "AWS Certified Solutions Architect - Associate certification",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="glass rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth cursor-pointer group"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-accent/30 to-secondary mb-4 flex items-center justify-center group-hover:scale-105 transition-smooth">
                    <Award className="h-16 w-16 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </DialogTrigger>
              <DialogContent className="glass max-w-2xl">
                <div className="space-y-6">
                  <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-accent/30 to-secondary flex items-center justify-center">
                    <Award className="h-24 w-24 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-4">{cert.issuer} • {cert.date}</p>
                    <p className="text-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
