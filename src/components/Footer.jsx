import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/pashu111",
    label: "GitHub profile",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/ashutosh-pradhan-703808258/",
    label: "LinkedIn profile",
    icon: <FaLinkedin />,
  },
  {
    href: "mailto:ashutoshpradhan8013@gmail.com",
    label: "Email Ashutosh",
    icon: <FaEnvelope />,
  },
];

const footerLinks = ["about", "skills", "experience", "projects", "contact"];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-200">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main content grid */}
        <div className="grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <h2 className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
              Ashutosh Pradhan
            </h2>
            <p className="mt-2 text-sm text-cyan-200/80">
              Software Developer
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Building responsive interfaces, practical backend APIs, and
              polished web experiences with a focus on clean execution.
            </p> */}
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Explore
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleScroll(link)}
                  className="group w-fit rounded-lg px-0 py-1.5 text-sm font-medium text-slate-400 transition-all hover:text-cyan-200"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-0.5 w-0 bg-cyan-300 transition-all duration-300 group-hover:w-3" />
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Connect
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition-all hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white hover:shadow-[0_8px_20px_rgba(56,189,248,0.25)]"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
            >
              <FaArrowUp className="text-xs" />
              Back to top
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-white/10 py-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} Ashutosh Pradhan. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1">
            Built with <FaHeart className="text-cyan-300" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
