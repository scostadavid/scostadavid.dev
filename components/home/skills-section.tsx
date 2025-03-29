"use client";


import { SkillsGrid } from "@/components/skills-grid";
// import { BlogPreview } from "@/components/blog-preview"
import { useLanguage } from "@/context/language-context";
import { AWS, CSharp, Docker, DotNet, Linux, Mongodb, NodeJs, Postgres, ReactJS, Typescript } from "@/lib/icon";

export function SkillsSection() {
    const { t } = useLanguage();
    const skills = [
      { name: "AWS", icon: <AWS /> },
      { name: ".NET", icon: <DotNet /> },
      { name: "C#", icon: <CSharp /> },
      { name: "Node.js", icon: <NodeJs /> },            
      { name: "React Native", icon: <ReactJS /> },
      { name: "TypeScript", icon: <Typescript /> },
      { name: "PostgreSQL", icon: <Postgres /> },
      { name: "MongoDB", icon: <Mongodb /> },
      { name: "Docker", icon: <Docker /> },
      { name: "Linux", icon: <Linux /> },
    ];
  


    return (
      <section id="skills" className="py-32 relative bg-gradient-to-br from-zinc-900 to-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container relative z-10">
          <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
            &lt;{t.nav.skills.toLowerCase()}&gt;
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
            {t.skills.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mb-12">{t.skills.description}</p>
          <SkillsGrid skills={skills} />
          <div className="mt-12">
            <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
              &lt;/{t.nav.skills.toLowerCase()}&gt;
            </div>
          </div>
        </div>
      </section>
    )
}