import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left: Name/Brand */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg text-blue-500">
            Ashutosh Portfolio
          </h2>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} Ashutosh Pradhan. All rights reserved.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-xl">
          <motion.a
            href="https://github.com/pashu111"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-500 transition-colors"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ashutosh-pradhan-703808258/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            href="mailto:ashutoshpradhan8013@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="hover:text-blue-500 transition-colors"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
