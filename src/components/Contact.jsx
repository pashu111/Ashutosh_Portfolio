import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        console.log(import.meta.env.VITE_API_URL);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error ❌");
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800"
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800"
          />

          <textarea
            placeholder="Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 rounded bg-gray-200 dark:bg-gray-800"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded font-semibold"
          >
            Send Message
          </motion.button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm text-gray-400">{status}</p>
        )}
      </motion.div>
    </section>
  );
}
