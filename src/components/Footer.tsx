"use client";

import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-0">
      {/* Dashed line separator */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="border-t-2 border-dashed border-border" />
      </div>

      {/* Big statement */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24">
        <ScrollReveal>
          <h2 className="font-[family-name:var(--font-crimson-var)] text-4xl md:text-6xl lg:text-8xl font-light text-center leading-[1.1]">
            Build things with{" "}
            <span className="italic">curiosity</span>
          </h2>
        </ScrollReveal>

        {/* Back to top */}
        <div className="flex justify-center mt-10">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm hover:border-text transition-colors"
          >
            <span>↑</span> Back to top
          </button>
        </div>
      </div>

      {/* Social links */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-10">
        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/in/aymantauhid/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/AmenTauhid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-secondary hover:text-text transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
