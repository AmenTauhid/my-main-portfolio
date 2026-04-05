"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FORMSPREE_URL = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`;

export default function ContactForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [honeypot, setHoneypot] = useState("");
  const [loadTime] = useState(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Bot check 1: honeypot field filled
    if (honeypot) return;

    // Bot check 2: submitted too fast (under 3 seconds)
    if (Date.now() - loadTime < 3000) return;

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    // Bot check 3: empty required fields
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Bot check 4: basic email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full max-w-md bg-bg border border-border rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold">
                Get in touch
              </h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface transition-colors text-text-secondary"
              >
                ✕
              </button>
            </div>

            {status === "sent" ? (
              <div className="py-8 text-center">
                <p className="text-accent text-2xl mb-2">✓</p>
                <p className="font-[family-name:var(--font-jakarta-var)] font-medium">
                  Message sent
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-5 py-2.5 rounded-full border border-border text-sm hover:border-text transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot - hidden from humans, visible to bots */}
                <input
                  type="text"
                  name="_gotcha"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div>
                  <label htmlFor="name" className="block text-sm text-text-secondary mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-text-secondary mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm text-text placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-2.5 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent hover:text-accent-dark transition-all duration-300 disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "error" && (
                  <p className="text-sm text-red-500 text-center">
                    Something went wrong. Try again or email me directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
