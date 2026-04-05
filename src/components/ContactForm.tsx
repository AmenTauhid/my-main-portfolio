"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [state, handleFormspreeSubmit] = useForm("xjgozkdk");
  const [honeypot, setHoneypot] = useState("");
  const [loadTime] = useState(Date.now());
  const formRef = useRef<HTMLFormElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // Lock body scroll + focus management
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Move focus into dialog
      setTimeout(() => {
        const firstInput = dialogRef.current?.querySelector("input");
        if (firstInput) (firstInput as HTMLElement).focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) return;
    if (Date.now() - loadTime < 3000) return;

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    await handleFormspreeSubmit(e);
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
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            onKeyDown={handleKeyDown}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="w-full max-w-md bg-bg border border-border rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                id="contact-title"
                className="font-[family-name:var(--font-jakarta-var)] text-lg font-semibold"
              >
                Get in touch
              </h2>
              <button
                onClick={onClose}
                aria-label="Close contact form"
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface transition-colors text-text-secondary"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="1" y1="1" x2="13" y2="13" />
                  <line x1="13" y1="1" x2="1" y2="13" />
                </svg>
              </button>
            </div>

            {state.succeeded ? (
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
                <input
                  type="text"
                  name="_gotcha"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="contact-name" className="block text-sm text-text-secondary mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm text-text placeholder:text-text-secondary/70 focus:outline-none focus:border-accent transition-colors"
                    placeholder="Your name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm text-text-secondary mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm text-text placeholder:text-text-secondary/70 focus:outline-none focus:border-accent transition-colors"
                    placeholder="you@example.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm text-text-secondary mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-sm text-text placeholder:text-text-secondary/70 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-2.5 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent hover:text-accent-dark transition-all duration-300 disabled:opacity-50"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                </button>

                <ValidationError errors={state.errors} className="text-sm text-red-500 text-center" />
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
