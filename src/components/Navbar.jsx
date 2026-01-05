import { motion } from "framer-motion";

const navItem = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 backdrop-blur bg-gray-800 shadow-lg"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-bold text-blue-500 text-lg">
          Ashutosh Portfolio
        </h1>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          {["about", "skills", "projects", "contact"].map((item) => (
            <motion.button
              key={item}
              onClick={() => handleScroll(item)}
              variants={navItem}
              whileHover="hover"
              whileTap="tap"
              className="px-3 py-2 rounded text-white hover:bg-gray-700 transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            variants={navItem}
            whileHover="hover"
            whileTap="tap"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
