import { motion } from "framer-motion";
import { FaGithub, FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import drowsinessImage from "../assets/Drowsiness.png";
import memorycard from "../assets/MemoryCard.png";
import shopnestImage from "../assets/Shopnest.png";

const projects = [

  {
    title: "Drowsiness Detection System",
    desc: "A real-time computer vision system that detects driver drowsiness by monitoring eye movements and facial landmarks to help prevent accidents.",
    tech: ["Python", "OpenCV", "Dlib", "NumPy"],
    highlights: [
      "Implemented an alert mechanism that triggers warnings when prolonged eye closure is detected, improving driver safety.",
      "Optimized frame processing for faster detection and real-time performance on standard hardware.",
    ],
    image: drowsinessImage,
    tags: ["Computer Vision", "Python"],
    github: "https://github.com/pashu111",
  },
  
  {
    title: "Memory Card Game",
    desc: "A responsive memory matching game built using HTML, CSS, and JavaScript where players flip cards to find matching pairs with smooth animations and interactive gameplay.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Implemented card shuffling using the Fisher–Yates algorithm to ensure a unique game layout each time.",
      "Built card matching logic, move counter, restart functionality, and responsive UI with smooth flip animations.",
    ],
    image: memorycard,
    tags: ["Frontend", "Game"],
    github: "https://github.com/pashu111",
    live: "https://memory-card-game-delta-three.vercel.app/",
  },

  {
    title: "ShopNest",
    desc: "A full-featured e-commerce platform with product browsing, cart management, and secure checkout built with the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    highlights: [
      "Built RESTful APIs with user authentication, product CRUD, and order management using JWT and bcrypt.",
      "Implemented responsive product grid, search/filter system, and a real-time cart with quantity controls.",
    ],
    image: shopnestImage,
    tags: ["Full Stack", "E-Commerce"],
    github: "https://github.com/pashu111",
    live: "https://shopnest-gold.vercel.app/"
  },

];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-20 sm:py-28 scroll-mt-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.05)_0%,transparent_60%)]" />

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
            Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
         
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_24px_60px_rgba(56,189,248,0.15)]"
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-video w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Hover action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-cyan-300 hover:text-slate-900"
                    aria-label="View on GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                  <motion.a
                    href={p.live || p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-cyan-300 hover:text-slate-900"
                    aria-label="Live demo"
                  >
                    <FaArrowUpRightFromSquare className="text-lg" />
                  </motion.a>
                </div>

                {/* Tags on image */}
                <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-200 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-300/80">
                  {p.desc}
                </p>

                {p.tech?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-cyan-300/15 bg-cyan-300/5 px-2.5 py-1 text-xs font-medium text-cyan-200/90 transition hover:bg-cyan-300/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {p.highlights?.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-300/80">
                    {p.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
        
        </motion.div>
      </div>
    </section>
  );
}
