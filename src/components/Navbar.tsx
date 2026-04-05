"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On homepage, navbar is invisible until scrolled (hero has its own top row)
  if (isHome && !scrolled) {
    return (
      <nav className="fixed top-0 right-0 z-50 p-4">
        <ThemeToggle />
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-jakarta-var)] text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          ayman <span className="text-text-secondary">/ home</span>
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
