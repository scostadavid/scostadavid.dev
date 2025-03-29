"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
// import { BlogPreview } from "@/components/blog-preview"
import { HeroCanvas } from "@/components/hero-canvas";
import { useLanguage } from "@/context/language-context";

export function HeroSection() {
    const { t } = useLanguage();
    return (
        <section className="h-screen relative overflow-hidden">
        <HeroCanvas />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
            <div className="glitch-wrapper mb-6">
              <h1
                className="glitch text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter"
                data-text="DAVID COSTA"
              >
                DAVID COSTA
              </h1>
            </div>
            <div className="typewriter mb-8">
              <p className="text-lg sm:text-xl md:text-2xl font-mono">{t.hero.subtitle}</p>
            </div>
            <div className="mt-8 mb-6">
              <a href="#contact">
                <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-5 text-lg rounded-style">
                  {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <Link href="https://github.com/scostadavid" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-black/20 backdrop-blur-lg hover:bg-white/10 rounded-style"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/scostadavid" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-black/20 backdrop-blur-lg hover:bg-white/10 rounded-style"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://x.com/scostadavid" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-black/20 backdrop-blur-lg hover:bg-white/10 rounded-style"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:me@scostadavid.dev">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 bg-black/20 backdrop-blur-lg hover:bg-white/10 rounded-style"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <a 
          href="#about" 
          className="absolute bottom-10 left-0 right-0 mx-auto w-8 h-8 z-10 animate-bounce flex justify-center"
        >
          <ArrowRight className="h-8 w-8 rotate-90 text-white/70 hover:text-white cursor-pointer" />
        </a>
      </section>
    )
}