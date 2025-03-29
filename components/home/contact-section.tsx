"use client";

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectShowcase } from "@/components/project-showcase"
import { SkillsGrid } from "@/components/skills-grid"
import { ContactList } from "@/components/contact-list"
// import { BlogPreview } from "@/components/blog-preview"
import { HeroCanvas } from "@/components/hero-canvas"
import { useToast } from "@/components/ui/use-toast"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"
import { AWS, CSharp, Docker, DotNet, Linux, Mongodb, NodeJs, Postgres, ReactJS, Typescript } from "@/lib/icon"
import { useIsMobile } from "@/hooks/use-mobile"
import { BlogPostList } from "@/components/blog-post-list"

export function ContactSection() {
    const { t } = useLanguage();

    return (
      <section id="contact" className="py-32 relative bg-gradient-to-br from-black to-zinc-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container relative z-10">
          <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
            &lt;{t.nav.contact.toLowerCase()}&gt;
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mb-12">{t.contact.description}</p>
          <ContactList />
          <div className="mt-12">
            <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
              &lt;/{t.nav.contact.toLowerCase()}&gt;
            </div>
          </div>
        </div>
      </section>
    )
}