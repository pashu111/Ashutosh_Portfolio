import { motion } from "framer-motion";
import { FaCode, FaRocket, FaUsers, FaAward } from "react-icons/fa6";

const stats = [
  { icon: <FaRocket />, value: "5+", label: "Projects Built" },
  { icon: <FaUsers />, value: "3", label: "Internships" },
  { icon: <FaAward />, value: "5", label: "Certifications" },
];

const techHighlights = [
  "Full Stack","React.js", "Node.js",
  "MongoDB", "Tailwind CSS", "Git", "System Design",
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 scroll-mt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08)_0%,transparent_60%)]" />
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Building{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                digital solutions
              </span>{" "}
              that matter
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              <p>
                Enthusiastic Software Developer for designing, developing and
                maintaining web applications across the entire stack. Strong
                analytical skills and a commitment to creating efficient,
                scalable and user-focused solutions.
              </p>
              <p>
                I thrive on turning complex challenges into simple, elegant
                code. Whether it's building responsive frontends, designing
                robust backends, or optimizing performance, I bring a holistic
                approach to every project.
              </p>
            </div>

            {/* Tech highlights */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold text-slate-400">
                Technologies I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                {techHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-cyan-300/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-cyan-400/30"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-lg text-cyan-200">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
