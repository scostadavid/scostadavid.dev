"use client";


// import { BlogPreview } from "@/components/blog-preview"
import { useLanguage } from "@/context/language-context";

export function AboutSection() {
    const { t } = useLanguage();
    return (
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

    public string SayHello()
    {
        Console.WriteLine("Thanks for visiting my site!");
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
    )
}