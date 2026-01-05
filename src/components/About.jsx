import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
      >
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            I am a Computer Science Engineering student from{" "}
            <span className="text-gray-400 font-medium">
              GIFT Autonomous, Bhubaneswar
            </span>
            , with hands-on experience in building modern web applications using
            React, TailwindCSS, Node.js, and MongoDB.
          </p>

        
        </div>

        {/* Image / Illustration */}
      
      </motion.div>
    </section>
  );
}
