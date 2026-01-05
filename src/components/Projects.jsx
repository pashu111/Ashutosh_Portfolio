export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg
                       hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              className="
                w-full
                h-48 sm:h-56 md:h-60
                object-cover
              "
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {p.title}
              </h3>

              <p className="text-gray-400 mt-2 text-sm md:text-base">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/pashu111"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6 py-3
            bg-blue-500 text-white
            rounded-full font-semibold
            hover:bg-blue-600
            transition
            shadow-lg
          "
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
}
