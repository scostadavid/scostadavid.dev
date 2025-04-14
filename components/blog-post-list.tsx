"use server";
import Link from "next/link"
import { Calendar } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/posts"
import { Locale } from "@/i18n.config";

export async function BlogPostList({ 
  limit,
  locale
}: { 
  limit?: number,
  locale: Locale 
}) {
  const fullLocale = locale === 'pt' ? 'pt-BR' : 'en-US';
  const posts = await getAllPosts(fullLocale);
  const displayedPosts = limit ? posts.slice(0, limit) : posts

  return (
    <>
      {displayedPosts.length === 0 ? (
        <div className="text-white/80">No blog posts found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPosts.map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="group">
              <div className="bg-zinc-900 border border-white/10 rounded-style p-6 h-full hover:bg-zinc-800 transition-colors duration-300">
                {post.coverImage && (
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-style border border-white/10">
                    <Image 
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-2 mb-4 text-white/50 text-sm">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-white/70 mb-4">{post.excerpt}</p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="border-white/20 text-white/70 rounded-style">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}