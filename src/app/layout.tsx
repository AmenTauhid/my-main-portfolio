import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  Crimson_Pro,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import CursorGlow from "@/components/CursorGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-var",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta-var",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const crimson = Crimson_Pro({
  variable: "--font-crimson-var",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["italic", "normal"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-var",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aymantauhid.com"),
  title: "Ayman Tauhid | a builder",
  description: "Full stack, mobile, and ML. I like building the whole thing.",
  openGraph: {
    title: "Ayman Tauhid | a builder",
    description: "Full stack, mobile, and ML. I like building the whole thing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${crimson.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" className="pt-16">{children}</main>
          <Footer />
          <CommandPalette />
          <CursorGlow />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
