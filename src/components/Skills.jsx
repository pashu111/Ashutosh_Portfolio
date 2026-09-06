import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub,
  FaPython, FaBootstrap, FaDocker, FaCode, FaNetworkWired, FaBug, FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiRedux, SiNextdotjs, SiNestjs, SiKubernetes,
} from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-violet-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    label: "Backend & Database",
    skills: [
      { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
      { name: "ExpressJs", icon: <SiExpress className="text-slate-200" /> },
      { name: "Nest.js", icon: <SiNestjs className="text-red-500" /> },
      { name: "RESTful APIs", icon: <FaCode className="text-cyan-300" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    label: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
      { name: "CI/CD", icon: <FaTools className="text-amber-400" /> },
      { name: "Git", icon: <FaGit className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-slate-100" /> },
    ],
  },
  {
    label: "Core CS & Other",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "Ajax", icon: <FaCode className="text-teal-300" /> },
      { name: "System Design", icon: <FaCode className="text-cyan-300" /> },
      { name: "DSA", icon: <FaCode className="text-emerald-300" /> },
      { name: "Networking", icon: <FaNetworkWired className="text-sky-300" /> },
      { name: "Debugging", icon: <FaBug className="text-lime-400" /> },
      { name: "Problem Solving", icon: <FaTools className="text-orange-300" /> },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 scroll-mt-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Tools &{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A focused stack for building fast, clean, and scalable products
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-lg font-semibold text-slate-200">
                  {category.label}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-300/30 to-transparent" />
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 p-4 text-center shadow-[0_16px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-cyan-400/30 sm:p-5"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Animated border gradient */}
                    <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 translate-y-[-100%] transition-transform duration-300 group-hover:translate-y-0" />

                    <div className="relative mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-3xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] sm:h-12 sm:w-12 sm:text-4xl">
                      {skill.icon}
                    </div>
                    <p className="relative text-sm font-semibold tracking-wide text-slate-100">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
