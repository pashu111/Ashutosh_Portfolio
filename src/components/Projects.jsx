const projects = [
  {
    title: "Car Rental Web Application",
    desc: "MERN stack app with authentication, booking system, admin & customer panels.",
    image: "../src/assets/Car_rental.png", // Replace with actual image path
  },
  {
    title: "Online Food Ordering System",
    desc: "Full-stack MERN app with cart, orders, authentication, and real-time tracking.",
    image: "../src/assets/food_cover.png",
  },
  {
    title: "Job Portal Application",
    desc: "React, Node, MySQL app with JWT auth and role-based dashboards.",
    image: "../src/assets/job_portal.png",
  },
  {
    title: "Drowsiness Detection System",
    desc: "Python, OpenCV, Dlib based real-time driver drowsiness detection system.",
    image: "../src/assets/drowsiness.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 shadow-lg"
          >
            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>

              {/* Project Description */}
              <p className="text-gray-400 mt-2">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

        {/* View More Projects Button */}
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
            transition-colors duration-300
            shadow-lg
          "
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
}
