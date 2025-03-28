"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectShowcase } from "@/components/project-showcase"
import { SkillsGrid } from "@/components/skills-grid"
import { ContactSection } from "@/components/contact-section"
// import { BlogPreview } from "@/components/blog-preview"
import { HeroCanvas } from "@/components/hero-canvas"
import { useToast } from "@/components/ui/use-toast"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"
import { AWS, CSharp, Docker, DotNet, Linux, Mongodb, NodeJs, Postgres, ReactJS, Typescript } from "@/lib/icon"
import { useIsMobile } from "@/hooks/use-mobile"

function Navbar({ t }: { t: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="fixed top-8 w-full z-50">
      <div className="container mx-auto px-4">
        {/* Container principal alinhado */}
        <div className="flex justify-between items-center">
          {/* Espaço vazio para balancear com o botão mobile */}
          <div className="md:hidden w-6"></div>

          {/* Nav Desktop - Centralizado */}
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex items-center gap-6 bg-black/30 backdrop-blur-lg p-4 rounded-style border border-white/20 shadow-lg">
              <a href="#about" className="text-white hover:text-primary transition-colors">
                {t.nav.about}
              </a>
              <a href="#projects" className="text-white hover:text-primary transition-colors">
                {t.nav.projects}
              </a>
              <a href="#skills" className="text-white hover:text-primary transition-colors">
                {t.nav.skills}
              </a>
              <a href="#blog" className="text-white hover:text-primary transition-colors">
                {t.nav.blog}
              </a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">
                {t.nav.contact}
              </a>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Button - Alinhado à direita */}
          {isMobile && (
            <div className="ml-auto">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white bg-black/30 backdrop-blur-lg p-2 rounded-lg border border-white/20 shadow-lg"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobile && isOpen && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90vw] bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-4">
            <a onClick={() => setIsOpen(false)} href="#about" className="text-white hover:text-primary transition-colors">
              {t.nav.about}
            </a>
            <a onClick={() => setIsOpen(false)} href="#projects" className="text-white hover:text-primary transition-colors">
              {t.nav.projects}
            </a>
            <a onClick={() => setIsOpen(false)} href="#skills" className="text-white hover:text-primary transition-colors">
              {t.nav.skills}
            </a>
            <a onClick={() => setIsOpen(false)} href="#blog" className="text-white hover:text-primary transition-colors">
              {t.nav.blog}
            </a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="text-white hover:text-primary transition-colors">
              {t.nav.contact}
            </a>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </nav>
  );
}

export default function Home() {
  const { toast } = useToast()
  const { t, language } = useLanguage()

  // Fix for smooth scrolling
  useEffect(() => {
    // Handle all anchor links to use smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href");
      
      if (targetId) {
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
  
          window.history.pushState(null, "", targetId);
        }
      }
    };
  
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });
  
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

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
  ]

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

  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: language === "en" ? "Building Scalable React Applications" : "Construindo Aplicações React Escaláveis",
  //     excerpt:
  //       language === "en"
  //         ? "Learn how to structure your React applications for scalability and maintainability."
  //         : "Aprenda como estruturar suas aplicações React para escalabilidade e manutenibilidade.",
  //     date: "2023-05-15",
  //     slug: "building-scalable-react-applications",
  //     tags: ["React", "Architecture", language === "en" ? "Best Practices" : "Boas Práticas"],
  //   },
  //   {
  //     id: 2,
  //     title:
  //       language === "en"
  //         ? "The Power of TypeScript in Modern Web Development"
  //         : "O Poder do TypeScript no Desenvolvimento Web Moderno",
  //     excerpt:
  //       language === "en"
  //         ? "Discover how TypeScript can improve your development workflow and reduce bugs."
  //         : "Descubra como o TypeScript pode melhorar seu fluxo de desenvolvimento e reduzir bugs.",
  //     date: "2023-06-22",
  //     slug: "power-of-typescript",
  //     tags: ["TypeScript", "JavaScript", language === "en" ? "Development" : "Desenvolvimento"],
  //   },
  //   {
  //     id: 3,
  //     title:
  //       language === "en"
  //         ? "Optimizing Next.js Applications for Performance"
  //         : "Otimizando Aplicações Next.js para Performance",
  //     excerpt:
  //       language === "en"
  //         ? "Practical tips and techniques to make your Next.js applications blazing fast."
  //         : "Dicas práticas e técnicas para tornar suas aplicações Next.js extremamente rápidas.",
  //     date: "2023-07-10",
  //     slug: "optimizing-nextjs-applications",
  //     tags: ["Next.js", "Performance", language === "en" ? "Optimization" : "Otimização"],
  //   },
  // ]

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen w-full">
      {/* Floating Navigation with Glass Effect */}
      <Navbar t={t} />

      {/* Hero Section with Canvas Animation */}
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

      {/* About Section with Diagonal Layout */}
      <section id="about" className="py-32 relative bg-gradient-to-br from-black to-zinc-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
                &lt;{t.nav.about.toLowerCase()}&gt;
              </div>
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {t.about.title}
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">{t.about.paragraph1}</p>
              <p className="text-xl text-white/80 leading-relaxed">{t.about.paragraph2}</p>
              <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
                &lt;/{t.nav.about.toLowerCase()}&gt;
              </div>
            </div>
            <div className="relative">
              <div className="code-window bg-zinc-950 border border-zinc-800 rounded-style p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-sm md:text-base font-mono text-white/90 overflow-x-auto">
                  <code>
                    {`public class David
{
    public string[] Skills { get; } = new string[] 
    { 
        "C#", "TypeScript", "NodeJS", ".NET", "And more" 
    };
    
    public string[] Focus { get; } = new string[] 
    { 
        "Clean Code", "Problem Solving" 
    };
    
    public string CurrentlyLearning { get; } = "Always something new";
    
    public string SayHello()
    {
        Console.WriteLine("Thanks for visiting my portfolio!");
        return "Let's build something amazing together.";
    }
}`}
                  </code>
                </pre>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section with Horizontal Scroll */}
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

      {/* Skills Section with 3D Grid */}
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

      {/* Blog Section */}
      {/* <section id="blog" className="py-32 relative bg-black">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
        <div className="container relative z-10">
          <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
            &lt;{t.nav.blog.toLowerCase()}&gt;
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
            {t.blog.title}
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mb-12">{t.blog.description}</p>
          <BlogPreview posts={blogPosts} />
          <div className="mt-12">
            <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
              &lt;/{t.nav.blog.toLowerCase()}&gt;
            </div>
            <div className="mt-8">
              <Link href="/blog" className="group">
                <Button variant="ghost" className="text-white/70 hover:text-white rounded-style">
                  {t.blog.viewAll}{" "}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
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
          <ContactSection />
          <div className="mt-12">
            <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
              &lt;/{t.nav.contact.toLowerCase()}&gt;
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <Link href="/" className="font-black text-2xl tracking-tighter">
                DAVID<span className="text-primary">COSTA</span>
              </Link>
              <p className="text-white/50 text-sm">
                © {new Date().getFullYear()} David Costa. {t.footer.rights}
              </p>
              <p className="text-white/50 text-sm max-w-md text-center md:text-left">{t.footer.experience}</p>
            </div>
            <div className="flex gap-4">
              <Link href="https://linkedin.com/in/scostadavid" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://github.com/scostadavid" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://x.com/scostadavid" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="mailto:me@scostadavid.dev">
                <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

