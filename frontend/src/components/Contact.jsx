import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const contactLinks = [
    {
      label: "Email",
      value: "ashutoshpradhan8013@gmail.com",
      href: "mailto:ashutoshpradhan8013@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/ashutosh-pradhan-703808258/",
      icon: <FaLinkedin />,
    },
    {
      label: "GitHub",
      value: "View projects and code",
      href: "https://github.com/pashu111",
      icon: <FaGithub />,
    },
  ];

  const isSending = status === "Sending...";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("loading");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("Message sent successfully");
        setStatusType("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message");
        setStatusType("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error");
      setStatusType("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 scroll-mt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto px-4 sm:px-6"
      >
        <div className="mb-10 flex flex-col gap-2">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something useful
          </h2>
          <p className="max-w-2xl text-slate-300/80">
            Have an opportunity, collaboration, or project idea? Send a message
            and I&apos;ll get back to you soon.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950 p-6 shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500" />
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-xl text-cyan-200">
                  <FaPaperPlane />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Open to work and freelance work
                </h3>
                {/* <p className="mt-4 leading-relaxed text-slate-300/80">
                  I enjoy building responsive interfaces, practical backend
                  APIs, and products that feel simple for real users.
                </p> */}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4">
                  <span className="mt-1 text-cyan-300">
                    <FaLocationDot />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Based in India
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Available for remote and on-site opportunities.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-lg text-cyan-200 transition group-hover:text-white">
                        {link.icon}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-white">
                          {link.label}
                        </span>
                        <span className="block truncate text-sm text-slate-400">
                          {link.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-950/90 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:p-6 lg:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  Your name
                </span>
                <input
                  type="text"
                  placeholder="Ashutosh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none ring-cyan-300/20 transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-4"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-200">
                  Email address
                </span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none ring-cyan-300/20 transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-4"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm font-semibold text-slate-200">
                Message
              </span>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-40 w-full resize-y rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-base text-white outline-none ring-cyan-300/20 transition placeholder:text-slate-500 focus:border-cyan-300/40 focus:ring-4"
              />
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-300 to-blue-400 px-5 py-3 font-semibold text-slate-950 shadow-[0_12px_28px_rgba(56,189,248,0.3)] transition hover:from-cyan-200 hover:to-blue-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                <FaPaperPlane className="text-sm" />
                {isSending ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <p
                  className={`text-sm font-medium ${
                    statusType === "success"
                      ? "text-emerald-300"
                      : statusType === "error"
                        ? "text-red-300"
                        : "text-slate-300"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
