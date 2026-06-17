import { motion } from "framer-motion";
import { useState } from "react";

const navItem = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  };

  const navItems = ["about", "skills", "experience", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-950/80 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center gap-4">
        {/* Logo */}
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/ProfilePhoto.jpeg"
            alt="Ashutosh Pradhan"
            className="h-10 w-10 flex-none rounded-full border-2 border-cyan-300/70 object-cover shadow-[0_8px_20px_rgba(59,130,246,0.45)]"
          />
          <h1 className="truncate text-base sm:text-lg font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400">
            Ashutosh Portfolio
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/10 text-slate-100 transition hover:bg-white/10 lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-full bg-current transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-2 h-0.5 w-full bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-4 h-0.5 w-full bg-current transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>

        {/* Navigation Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {navItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleScroll(item)}
              variants={navItem}
              whileHover="hover"
              whileTap="tap"
              className="group px-4 py-2 rounded-full text-sm font-medium tracking-wide text-slate-100/90 hover:text-white bg-white/0 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <span className="relative">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-gradient-to-r from-cyan-300 to-blue-400 transition-transform duration-200 group-hover:scale-x-100" />
              </span>
            </motion.button>
          ))}

          {/* Resume Button */}
          <motion.a
            href="/Ashutosh Pradhan-Resume.pdf"
            download="Ashutosh Pradhan - Resume.pdf"
            variants={navItem}
            whileHover="hover"
            whileTap="tap"
            className="px-4 py-2 rounded-full text-sm font-semibold text-slate-900 bg-gradient-to-r from-cyan-300 to-blue-400 hover:from-cyan-200 hover:to-blue-300 shadow-[0_10px_25px_rgba(56,189,248,0.35)] transition-all duration-200"
          >
            Download Resume
          </motion.a>
        </div>
        </div>

        <div
          className={`grid transition-all duration-300 lg:hidden ${
            menuOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleScroll(item)}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium tracking-wide text-slate-100/90 transition hover:bg-white/10 hover:text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <a
                href="/Ashutosh%20Pradhan%20-%20Resume.pdf"
                download="Ashutosh Pradhan - Resume.pdf"
                className="mt-1 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 px-3 py-2 text-center text-sm font-semibold text-slate-900 transition hover:from-cyan-200 hover:to-blue-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
