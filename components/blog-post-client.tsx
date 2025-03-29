"use client";

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Head from "next/head"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShareButtons } from "@/components/share-buttons"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { BlogPost } from "@/lib/posts"

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const router = useRouter()
  const { t, language } = useLanguage()
  const [url, setUrl] = useState("")

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  if (!post) {
    return (
      <main className="min-h-screen bg-black">
        <div className="container py-24">
          <div className="max-w-3xl mx-auto text-white">Post not found</div>
        </div>
      </main>
    )
  }

  console.log('post folder', `${post.coverImage}`);

  return (
    <main className="min-h-screen bg-black">
      <Head>
        <title>{post.title} | David Costa Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.coverImage && (
          <meta property="og:image" content={`/content/blog/posts/${post.slug}/${post.coverImage}`} />
        )}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.coverImage && (
          <meta name="twitter:image" content={`/content/blog/posts/${post.slug}/${post.coverImage}`} />
        )}
      </Head>

      <div className="container py-24">
        <div className="flex justify-between items-center mb-6">
          <Link href="/blog">
            <Button variant="ghost" className="text-white/70 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.blog.backToBlog}
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>

        <article className="max-w-3xl mx-auto">
          {post.coverImage && (
            <div className="relative aspect-video mb-8 overflow-hidden rounded-style border border-white/10">
              <Image
                src={`${post.coverImage}`}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 text-white/50 text-sm">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(language === "en" ? "en-US" : "pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-6">{post.title}</h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string, i: number) => (
                  <Badge key={i} variant="outline" className="border-white/20 text-white/70 rounded-style">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div 
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center">
            <ShareButtons title={post.title} url={url} />
          </div>
        </article>
      </div>
    </main>
  )
}