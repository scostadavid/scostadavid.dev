"use client";

import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogSectionClient({ children }: { children: React.ReactNode }) {
  const { t } = useLanguage();

  return (
    <>
      <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono mb-4">
        &lt;{t.nav.blog.toLowerCase()}&gt;
      </div>
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
        {t.blog.title}
      </h2>
      <p className="text-xl text-white/80 max-w-2xl mb-12">{t.blog.description}</p>

      {children}

      <div className="mt-12">
        <div className="inline-block rounded-style bg-primary/10 px-3 py-1 text-sm text-primary font-mono">
          &lt;/{t.nav.blog.toLowerCase()}&gt;
        </div>
        <div className="mt-8">
          <Link href="/blog" className="group">
            <Button variant="ghost" className="text-white/70 hover:text-white rounded-style">
              {t.blog.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
