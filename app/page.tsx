"use server";
// components/home-page.tsx
import { Navbar } from "@/components/home/navbar";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { SkillsSection } from "@/components/home/skills-section"
import BlogSection from "@/components/home/blog-section"
import { ContactSection } from "@/components/home/contact-section"
import { Footer } from "@/components/home/footer"

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { ProjectShowcase } from "@/components/project-showcase"
// import { SkillsGrid } from "@/components/skills-grid"
// import { ContactSection } from "@/components/contact-section"
// // import { BlogPreview } from "@/components/blog-preview"
// import { HeroCanvas } from "@/components/hero-canvas"
// import { useToast } from "@/components/ui/use-toast"
// import { LanguageSwitcher } from "@/components/language-switcher"
// import { useLanguage } from "@/context/language-context"
// import { AWS, CSharp, Docker, DotNet, Linux, Mongodb, NodeJs, Postgres, ReactJS, Typescript } from "@/lib/icon"
// import { useIsMobile } from "@/hooks/use-mobile"
// import { BlogPostList } from "@/components/blog-post-list"

// function Navbar({ t }: { t: any }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const isMobile = useIsMobile();

//   return (
//     <nav className="fixed top-8 w-full z-50">
//       <div className="container mx-auto px-4">
//         {/* Container principal alinhado */}
//         <div className="flex justify-between items-center">
//           {/* Espaço vazio para balancear com o botão mobile */}
//           <div className="md:hidden w-6"></div>

//           {/* Nav Desktop - Centralizado */}
//           <div className="hidden md:flex justify-center flex-1">
//             <div className="flex items-center gap-6 bg-black/30 backdrop-blur-lg p-4 rounded-style border border-white/20 shadow-lg">
//               <a href="#about" className="text-white hover:text-primary transition-colors">
//                 {t.nav.about}
//               </a>
//               <a href="#projects" className="text-white hover:text-primary transition-colors">
//                 {t.nav.projects}
//               </a>
//               <a href="#skills" className="text-white hover:text-primary transition-colors">
//                 {t.nav.skills}
//               </a>
//               <a href="#blog" className="text-white hover:text-primary transition-colors">
//                 {t.nav.blog}
//               </a>
//               <a href="#contact" className="text-white hover:text-primary transition-colors">
//                 {t.nav.contact}
//               </a>
//               <LanguageSwitcher />
//             </div>
//           </div>

//           {/* Mobile Button - Alinhado à direita */}
//           {isMobile && (
//             <div className="ml-auto">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-white bg-black/30 backdrop-blur-lg p-2 rounded-lg border border-white/20 shadow-lg"
//               >
//                 {isOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Mobile Menu Overlay */}
//         {isMobile && isOpen && (
//           <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90vw] bg-black/80 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-xl flex flex-col items-center gap-4">
//             <a onClick={() => setIsOpen(false)} href="#about" className="text-white hover:text-primary transition-colors">
//               {t.nav.about}
//             </a>
//             <a onClick={() => setIsOpen(false)} href="#projects" className="text-white hover:text-primary transition-colors">
//               {t.nav.projects}
//             </a>
//             <a onClick={() => setIsOpen(false)} href="#skills" className="text-white hover:text-primary transition-colors">
//               {t.nav.skills}
//             </a>
//             <a onClick={() => setIsOpen(false)} href="#blog" className="text-white hover:text-primary transition-colors">
//               {t.nav.blog}
//             </a>
//             <a onClick={() => setIsOpen(false)} href="#contact" className="text-white hover:text-primary transition-colors">
//               {t.nav.contact}
//             </a>
//             <LanguageSwitcher />
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default function Home() {
//   const { toast } = useToast()
//   const { t, language } = useLanguage()

//   // Fix for smooth scrolling
//   useEffect(() => {
//     // Handle all anchor links to use smooth scrolling
//     const handleAnchorClick = (e: MouseEvent) => {
//       e.preventDefault();
//       const anchor = e.currentTarget as HTMLAnchorElement;
//       const targetId = anchor.getAttribute("href");
      
//       if (targetId) {
//         const targetElement = document.querySelector(targetId);
  
//         if (targetElement) {
//           targetElement.scrollIntoView({
//             behavior: "smooth",
//           });
  
//           window.history.pushState(null, "", targetId);
//         }
//       }
//     };
  
//     const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
//     anchors.forEach((anchor) => {
//       anchor.addEventListener("click", handleAnchorClick);
//     });
  
//     return () => {
//       anchors.forEach((anchor) => {
//         anchor.removeEventListener("click", handleAnchorClick);
//       });
//     };
//   }, []);


//   const skills = [
//     { name: "AWS", icon: <AWS /> },
//     { name: ".NET", icon: <DotNet /> },
//     { name: "C#", icon: <CSharp /> },
//     { name: "Node.js", icon: <NodeJs /> },            
//     { name: "React Native", icon: <ReactJS /> },
//     { name: "TypeScript", icon: <Typescript /> },
//     { name: "PostgreSQL", icon: <Postgres /> },
//     { name: "MongoDB", icon: <Mongodb /> },
//     { name: "Docker", icon: <Docker /> },
//     { name: "Linux", icon: <Linux /> },
//   ];
  



//       {/* Skills Section with 3D Grid */}


//       {/* Blog Section */}
//       <section id="blog" className="py-32 relative bg-black">
//         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
//         <div className="container relative z-10">
//           <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
//             &lt;{t.nav.blog.toLowerCase()}&gt;
//           </div>
//           <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
//             {t.blog.title}
//           </h2>
//           <p className="text-xl text-white/80 max-w-2xl mb-12">{t.blog.description}</p>
//           <BlogPostList limit={3} />
//           <div className="mt-12">
//             <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
//               &lt;/{t.nav.blog.toLowerCase()}&gt;
//             </div>
//             <div className="mt-8">
//               <Link href="/blog" className="group">
//                 <Button variant="ghost" className="text-white/70 hover:text-white rounded-style">
//                   {t.blog.viewAll}{" "}
//                   <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-32 relative bg-gradient-to-br from-black to-zinc-900">
//         <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
//         <div className="container relative z-10">
//           <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
//             &lt;{t.nav.contact.toLowerCase()}&gt;
//           </div>
//           <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
//             {t.contact.title}
//           </h2>
//           <p className="text-xl text-white/80 max-w-2xl mb-12">{t.contact.description}</p>
//           <ContactSection />
//           <div className="mt-12">
//             <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
//               &lt;/{t.nav.contact.toLowerCase()}&gt;
//             </div>
//           </div>
//         </div>
//       </section>


//     </main>
//   )
// }

