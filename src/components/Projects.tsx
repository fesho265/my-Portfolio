import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "The Wild Oasis",
    description:
      "An Online booking website for the hotel employees, so they can manage booking procedures",
    tech: ["React", "JavaScript", "Styled Components", "Chart.js"],
    github: "https://github.com/fesho265/The-Wild-Oasis",
    live: "https://the-wild-oasis-ecru-three.vercel.app/",
  },{
    title: "Dev Event (under development) ",
    description:
      "Online Hub for developers to check for upcoming events related to tech",
    tech: ["React",'Next.js(v16)', "TypeScript", "Tailwindcss",],
    github: "https://github.com/fesho265/Dev-Events",
    live: "#",
  },


];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-secondary/20">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">
            <span className="text-primary font-mono text-xl">02.</span> Projects
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="h-full bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all hover:-translate-y-2 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
