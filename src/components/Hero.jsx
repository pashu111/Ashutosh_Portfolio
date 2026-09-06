import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from "react-icons/fa6";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/pashu111", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/ashutosh-pradhan-703808258/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "mailto:ashutoshpradhan8013@gmail.com", icon: <FaEnvelope />, label: "Email" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 -left-32 h-72 w-72 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />

      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-24 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-sm text-cyan-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for opportunities
          </motion.div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            <span className="text-slate-100">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              Ashutosh Pradhan
            </span>
          </h1>

          {/* Typewriter */}
          <p className="mt-6 min-h-10 text-lg text-slate-300 sm:text-xl lg:text-2xl">
            I'm a{" "}
            <span className="font-semibold text-cyan-300">
              <Typewriter
                words={["Full Stack Developer", "Software Developer", "Freelancer", "UI/UX Enthusiast"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            I build modern, scalable web applications with clean code and great user experiences.
            Passionate about turning complex problems into simple, elegant solutions.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-8 py-3.5 font-semibold text-slate-900 shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all duration-300 hover:shadow-[0_16px_36px_rgba(56,189,248,0.5)] sm:w-auto"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">Get In Touch</span>
            </motion.button>

            <motion.a
              href="/Ashutosh_Pradhan_Resume.pdf"
              download="Ashutosh_Pradhan_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-semibold text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/40 hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            <span className="text-sm text-slate-500">Find me on</span>
            <div className="h-px w-8 bg-slate-700" />
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lg text-slate-400 transition-all hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-cyan-200"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-300 transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <FaArrowDown className="text-sm" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
