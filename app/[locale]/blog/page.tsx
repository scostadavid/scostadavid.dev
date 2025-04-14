// app/blog/page.tsx
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPostList } from "@/components/blog-post-list"
import { i18n } from "@/lib/i18n";

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const t = await i18n(params.locale);

  return (
    <main className="min-h-screen bg-black">
      <div className="container py-24">
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.blog.backToHome}
            </Button>
          </Link>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
          {t.blog.title}
        </h1>
        
        <p className="text-xl text-white/80 max-w-2xl mb-12">
          {t.blog.description}
        </p>

        {/* Lista completa de posts */}
        <BlogPostList locale={params.locale} />
      </div>
    </main>
  )
}