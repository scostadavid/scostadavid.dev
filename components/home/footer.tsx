//       {/* Footer */}
//       <footer className="py-12 bg-black border-t border-white/10">
//         <div className="container">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//             <div className="flex flex-col items-center md:items-start gap-2">
//               <Link href="/" className="font-black text-2xl tracking-tighter">
//                 DAVID<span className="text-primary">COSTA</span>
//               </Link>
//               <p className="text-white/50 text-sm">
//                 © {new Date().getFullYear()} David Costa. {t.footer.rights}
//               </p>
//               <p className="text-white/50 text-sm max-w-md text-center md:text-left">{t.footer.experience}</p>
//             </div>
//             <div className="flex gap-4">
//               <Link href="https://linkedin.com/in/scostadavid" target="_blank" rel="noopener noreferrer">
//                 <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
//                   <Linkedin className="h-5 w-5" />
//                   <span className="sr-only">LinkedIn</span>
//                 </Button>
//               </Link>
//               <Link href="https://github.com/scostadavid" target="_blank" rel="noopener noreferrer">
//                 <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
//                   <Github className="h-5 w-5" />
//                   <span className="sr-only">GitHub</span>
//                 </Button>
//               </Link>
//               <Link href="https://x.com/scostadavid" target="_blank" rel="noopener noreferrer">
//                 <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
//                   <Twitter className="h-5 w-5" />
//                   <span className="sr-only">Twitter</span>
//                 </Button>
//               </Link>
//               <Link href="mailto:me@scostadavid.dev">
//                 <Button variant="ghost" size="icon" className="text-white/50 hover:text-white rounded-style">
//                   <Mail className="h-5 w-5" />
//                   <span className="sr-only">Email</span>
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </footer>
"use client";

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Code, ExternalLink, Github, Linkedin, Mail, Menu, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectShowcase } from "@/components/project-showcase"
import { SkillsGrid } from "@/components/skills-grid"
// import { BlogPreview } from "@/components/blog-preview"
import { HeroCanvas } from "@/components/hero-canvas"
import { useToast } from "@/components/ui/use-toast"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/context/language-context"
import { AWS, CSharp, Docker, DotNet, Linux, Mongodb, NodeJs, Postgres, ReactJS, Typescript } from "@/lib/icon"
import { useIsMobile } from "@/hooks/use-mobile"
import { BlogPostList } from "@/components/blog-post-list"

export function Footer() {
  const { t } = useLanguage();

  return (
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
  );
}
