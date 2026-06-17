import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Hi, I'm{" "}
          <span className="block text-blue-500 sm:inline">
            Ashutosh Pradhan
          </span>
        </h1>

        {/* Typing Animation */}
        <p className="mt-4 min-h-8 text-base text-gray-500 sm:text-lg">
          <span className="text-blue-500 font-semibold">
            <Typewriter
              words={["Full Stack Developer","Software Developer" ,"Freelancer"]}
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
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="
              w-full px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg
              hover:bg-blue-500 hover:text-white transition
              sm:w-auto
            "
          >
            Hire Me
          </motion.button>

          <motion.a
            href="/Ashutosh Pradhan-Resume.pdf"
            download="Ashutosh Pradhan - Resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="
              w-full px-6 py-3 border border-blue-500 text-blue-500 font-semibold rounded-lg
              hover:bg-blue-500 hover:text-white transition
              sm:w-auto
            "
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
