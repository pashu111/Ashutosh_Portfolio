import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "SakRobotics Lab Pvt. Ltd.",
      role: "Software Engineer Intern",
      duration: "Oct 2025 - Mar 2026",
      location: "Bhubaneswar, Odisha, India",
      logo: "S",
      color: "from-cyan-500 to-blue-500",
    },
    {
      company: "Striving Squad Pvt Ltd",
      role: "Intern Trainee",
      duration: "Jun 2024 - Jul 2024",
      location: "Bhubaneswar, Odisha, India",
      logo: "S",
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "SDI Bhubaneswar",
      role: "Embedded Systems Analyst Trainee",
      duration: "Jul 2023 - Aug 2023",
      location: "Bhubaneswar, Odisha, India",
      logo: "S",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 scroll-mt-24"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/15 blur-3xl rounded-full" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.35em] text-sm font-semibold">
            Experience
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Building modern web applications, collaborating with teams,
            and creating impactful digital experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Vertical gradient line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start gap-6 group"
              >
                {/* Timeline dot - animated pulse ring */}
                <div className="relative z-10">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-lg shadow-cyan-500/30 ring-4 ring-slate-950 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-cyan-500/50`}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Top */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div
                        className={`h-14 w-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl font-bold shadow-lg transition-transform duration-300 group-hover:scale-105`}
                      >
                        {item.logo}
                      </div>

                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {item.role}
                        </h3>
                        <p className="text-cyan-300 font-medium mt-1">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/20">
                      <CalendarDays className="w-4 h-4" />
                      {item.duration}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mt-5 flex items-center gap-2 text-slate-400">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>

                  {/* Divider */}
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-cyan-500/40 via-blue-500/20 to-transparent" />

                  {/* Description */}
                  <p className="mt-5 text-slate-300 leading-relaxed">
                    Worked on modern web technologies, collaborated with teams,
                    and contributed to building responsive and scalable
                    applications with clean UI/UX experiences.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
