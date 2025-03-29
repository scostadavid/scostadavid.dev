// app/blog/page.tsx
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BlogPostList } from "@/components/blog-post-list"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container py-24">
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
          Blog
        </h1>
        
        <p className="text-xl text-white/80 max-w-2xl mb-12">
          Thoughts, ideas, and insights about software development, design, and technology.
        </p>

        {/* Lista completa de posts */}
        <BlogPostList />
      </div>
    </main>
  )
}