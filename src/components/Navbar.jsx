import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItem = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Delay closing so scroll isn’t interrupted
      setTimeout(() => setOpen(false), 300);
    }
  };

  const menuItems = ["about", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 backdrop-blur bg-gray-900/90 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-500">
          Ashutosh Portfolio
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <motion.button
              key={item}
              onClick={() => handleScroll(item)}
              variants={navItem}
              whileHover="hover"
              whileTap="tap"
              className="text-white hover:text-blue-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}

          <motion.a
            href="/resume.pdf"
            download
            variants={navItem}
            whileHover="hover"
            whileTap="tap"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-900 px-6 pb-4"
          >
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => handleScroll(item)}
                variants={navItem}
                whileHover="hover"
                whileTap="tap"
                className="block w-full text-left py-3 text-white hover:text-blue-400"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}

            <motion.a
              href="/resume.pdf"
              download
              variants={navItem}
              whileHover="hover"
              whileTap="tap"
              className="block mt-3 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
