import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";
import { LanguageProvider } from "@/context/language-context";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

export const metadata: Metadata = {
  title: "David Costa | Software Developer",
  description:
    "Portfolio website of David Costa, a software developer specializing in creating exceptional digital experiences.",
  keywords: ["software developer", "web developer", "portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "David Costa" }],
  creator: "David Costa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scostadavid.dev",
    siteName: "David Costa Portfolio",
    title: "David Costa | Software Developer",
    description:
      "Portfolio website of David Costa, a software developer specializing in creating exceptional digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Costa Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Costa | Software Developer",
    description:
      "Portfolio website of David Costa, a software developer specializing in creating exceptional digital experiences.",
    creator: "@scostadavid",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      "en-US": "https://scostadavid.dev/en",
      "pt-BR": "https://scostadavid.dev/pt",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${dancingScript.variable}`}
    >
      <body className="font-sans bg-black text-white">
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
