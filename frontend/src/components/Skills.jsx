import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaPython,
  FaBootstrap,
  FaDocker,
  FaCode,
  FaNetworkWired,
  FaBug,
  FaTools,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiNextdotjs,
  SiNestjs,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "NodeJs", icon: <FaNodeJs className="text-green-500" /> },
  { name: "ExpressJs", icon: <SiExpress className="text-slate-200" /> },
  { name: "RESTful APIs", icon: <FaCode className="text-cyan-300" /> },
  { name: "Nest.js", icon: <SiNestjs className="text-red-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Ajax", icon: <FaCode className="text-teal-300" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-violet-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGit className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-slate-100" /> },
  { name: "CI/CD", icon: <FaTools className="text-amber-400" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500" /> },
  { name: "System Design", icon: <FaCode className="text-cyan-300" /> },
  { name: "DSA", icon: <FaCode className="text-emerald-300" /> },
  { name: "Networking", icon: <FaNetworkWired className="text-sky-300" /> },
  { name: "Debugging", icon: <FaBug className="text-lime-400" /> },
  { name: "Problem Solving", icon: <FaTools className="text-orange-300" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Tools and technologies 
          </h2>
          {/* <p className="text-slate-300/80 max-w-2xl">
            A focused stack for building fast, clean, and scalable products.
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 p-4 text-center shadow-[0_16px_32px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-6"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-3xl transition-transform duration-300 group-hover:scale-110 sm:h-12 sm:w-12 sm:text-4xl">
                {skill.icon}
              </div>
              <p className="text-sm font-semibold tracking-wide text-slate-100">
                {skill.name}
              </p>
              {/* <p className="mt-2 text-xs text-slate-400">
                Proficient
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
