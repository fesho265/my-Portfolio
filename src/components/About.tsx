import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <div className="w-24 h-px bg-primary/30 mb-8" />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a fresh frontend developer with a passion for
                creating clean, user-friendly web applications. My journey into
                web development started when I discovered the magic of turning
                ideas into interactive experiences.
              </p>
              <p>
                I recently completed my studies and have been actively building
                projects to sharpen my skills. I love working with modern
                technologies and am always eager to learn new things.
              </p>
              <p>Here are some technologies I've been working with:</p>

              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {[
                  "JavaScript (ES6+)",
                  "React.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "HTML & CSS",
                  "Git & GitHub",
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              <div className="relative bg-card rounded-lg overflow-hidden border border-border">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
