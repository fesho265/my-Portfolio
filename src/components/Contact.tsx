import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">03. What's Next?</p>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>

          <p className="text-muted-foreground mb-8">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question or just want to say hi, I'll do my
            best to get back to you!
          </p>

          <motion.a
            href="mailto:elfrash10@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all glow-sm"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </motion.a>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Github, href: "https://github.com/fesho265", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/isl-elfrash265", label: "LinkedIn" },

            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
