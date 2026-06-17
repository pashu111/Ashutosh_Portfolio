import carRentalImage from "../assets/Car_rental.png";
import drowsinessImage from "../assets/Drowsiness.png";
import foodCoverImage from "../assets/food_cover.png";
import jobPortalImage from "../assets/Job_portal.png";

const projects = [
  {
    title: "Shopnest - Ecommerce Platform",
    desc: "Platform with role-based access for Admin, User, and Delivery Agent workflows, secure authentication, seamless online shopping, and real-time order tracking.",
    tech: ["MongoDB", "React.js", "NodeJs", "Razorpay", "ExpressJs"],
    highlights: [
      "Implemented real-time order tracking using Socket.IO, improving user experience and order transparency.",
      "Designed optimized RESTful APIs and MongoDB schemas for faster data processing and improved backend performance.",
    ],
    image: foodCoverImage,
    tags: ["Full Stack", "Ecommerce"],
  },
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
  },
  {
    title: "Car Rental Application",
    desc: "A responsive frontend web application for browsing and booking rental cars with a clean and user-friendly interface.",
    tech: ["ReactJs", "TailwindCSS"],
    highlights: [
      "Developed a single-page application using React.js with reusable components and efficient state management.",
      "Built interactive car listing, search, and filtering functionality to improve user navigation.",
    ],
    image: carRentalImage,
    tags: ["Frontend", "UX Focused"],
  },
  {
    title: "Job Portal Application",
    desc: "React, Node, MySQL app with JWT auth and role-based dashboards.",
    tech: ["React", "Node.js", "MySQL", "JWT"],
    highlights: [],
    image: jobPortalImage,
    tags: ["Full Stack", "Auth"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-2 mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Projects
          </p>
          {/* <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Crafted end-to-end products
          </h2> */}
          {/* <p className="text-slate-300/80 max-w-2xl">
            A curated selection of builds where I focused on UX polish,
            performance, and real-world workflows.
          </p> */}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:gap-8">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/80 shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              <div className="p-5 sm:p-6">
                {/* Project Title */}
                <h3 className="text-lg font-semibold text-white sm:text-xl">{p.title}</h3>

                {/* Project Description */}
                <p className="text-slate-300/80 mt-2 leading-relaxed">{p.desc}</p>

                {p.tech?.length > 0 && (
                  <p className="mt-3 text-sm font-medium text-cyan-200/80">
                    {p.tech.join(", ")}
                  </p>
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

                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-cyan-200/90">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <a
            href="https://github.com/pashu111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 px-6 py-3 text-center font-semibold text-slate-900 shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition-all duration-300 hover:from-cyan-200 hover:to-blue-300 sm:w-auto"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
