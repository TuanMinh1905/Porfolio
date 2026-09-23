import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phạm Tuấn Minh – Full-Stack Developer Portfolio",
  description:
    "Portfolio of Phạm Tuấn Minh – Full-Stack Developer specializing in React, Next.js, Nuxt.js, and AI integration. View projects including Petpet.vn and AI Virtual Fitting Room (KLTN).",
  keywords: [
    "Phạm Tuấn Minh",
    "Full-Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Nuxt.js",
    "Frontend",
    "Vietnam",
    "AI Virtual Fitting Room",
    "TailorNet",
    "SMPL",
  ],
  authors: [{ name: "Phạm Tuấn Minh" }],
  openGraph: {
    title: "Phạm Tuấn Minh – Full-Stack Developer",
    description: "Full-Stack Developer với kinh nghiệm thực chiến tại Petpet.vn và dự án KLTN AI Virtual Fitting Room.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0a0a0f] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
