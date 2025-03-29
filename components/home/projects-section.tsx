"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectShowcase } from "@/components/project-showcase";
// import { BlogPreview } from "@/components/blog-preview"
import { useLanguage } from "@/context/language-context";

export function ProjectsSection() {
    const { t } = useLanguage();
    const projects = [
    {
      id: 1,
      title: "📦 Byte Kit",
      description: "Everyday developer tools to make your programming easier",
      image: "/bk.webp",
      // tags: ["React", "TypeScript", "Tailwind CSS"],
      demoUrl: "https://bytekit.xyz",
      // githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "🎱 The challengers",
      description: "Grab your cue and take part in a pool based challenge.",
      image: "/tc.webp",
      // tags: ["Next.js", "Node.js", "MongoDB"],
      // demoUrl: "#",
      // githubUrl: "#",
      featured: true,
    }
  ];

    return (
      <section id="projects" className="py-32 relative bg-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container relative z-10 mb-12">
          <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
            &lt;{t.nav.projects.toLowerCase()}&gt;
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
            {t.projects.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl">{t.projects.description}</p>
        </div>
        <ProjectShowcase projects={projects} />
        <div className="container relative z-10 mt-12">
          <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
            &lt;/{t.nav.projects.toLowerCase()}&gt;
          </div>
          <div className="mt-8">
            <Link
              href="https://github.com/scostadavid?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button variant="ghost" className="text-white/70 hover:text-white rounded-style">
                {t.projects.viewAll}{" "}
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    )
}