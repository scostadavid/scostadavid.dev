'use client';

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  t: any;
};

export function Footer({t}: Props) {
  return (
      <footer className="mt-8 pt-8 bg-black border-t border-white/10">
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
