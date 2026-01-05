import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-500">Ashutosh Pradhan</span>
        </h1>

        {/* Typing Animation */}
        <p className="mt-4 text-base sm:text-lg text-gray-500">
          <span className="text-blue-500 font-semibold">
            <Typewriter
              words={["Full Stack Developer", "Freelancer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="
              px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg
              hover:bg-blue-500 hover:text-white transition
            "
          >
            Hire Me
          </motion.button>

          {/* ✅ FIXED RESUME LINK */}
          <motion.a
            href="/Ashutosh_Pradhan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg
              hover:bg-blue-500 hover:text-white transition
            "
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
