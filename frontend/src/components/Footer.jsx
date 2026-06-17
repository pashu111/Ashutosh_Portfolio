import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
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
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-8 border-t border-white/10 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
          <div>
            {/* <div className="flex items-center gap-3">
              <img
                src="/ProfilePhoto.jpeg"
                alt="Ashutosh Pradhan"
                className="h-12 w-12 rounded-full border-2 border-cyan-300/70 object-cover shadow-[0_10px_24px_rgba(56,189,248,0.25)]"
              />
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Ashutosh Pradhan
                </h2>
                <p className="text-sm text-cyan-200/80">
                  Software Engineer
                </p>
              </div>
            </div> */}
            {/* <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Building responsive interfaces, practical backend APIs, and
              polished web experiences with a focus on clean execution.
            </p> */}
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Explore
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleScroll(link)}
                  className="w-fit rounded-lg px-0 py-1 text-sm font-medium capitalize text-slate-400 transition hover:text-cyan-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Connect
            </p>
            <div className="mt-4 flex gap-3">
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
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white"
            >
              <FaArrowUp className="text-xs" />
              Back to top
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {year} Ashutosh Pradhan. All rights reserved.</p>
          {/* <p>Designed and built with React and Tailwind CSS.</p> */}
        </div>
      </div>
    </footer>
  );
}
