"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Head from "next/head"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShareButtons } from "@/components/share-buttons"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Update the blog post interface to include coverImage
interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  slug: string
  tags: string[]
  coverImage?: string
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const router = useRouter()
  const { t, language } = useLanguage()

  // Get the current URL for sharing
  const [url, setUrl] = useState("")
  const [post, setPost] = useState<BlogPost | undefined>(undefined)

  useEffect(() => {
    setUrl(typeof window !== "undefined" ? window.location.href : "")
  }, [])

  useEffect(() => {
    const fetchedPost = getBlogPostBySlug(params.slug, language)
    setPost(fetchedPost)

    if (!fetchedPost) {
      router.push("/blog")
    }
  }, [params.slug, language, router])

  if (!post) {
    return null
  }

  return (
    <main className="min-h-screen bg-black">
      <Head>
        <title>{post.title} | David Costa Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.coverImage && <meta name="twitter:image" content={post.coverImage} />}
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
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="border-white/20 text-white/70 rounded-style">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* In a real application, this would be rendered Markdown content */}
            <p className="text-white/80 leading-relaxed mb-6">{post.content}</p>
            <p className="text-white/80 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Section Heading</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <div className="relative aspect-video my-8 overflow-hidden rounded-style border border-white/10">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Example image within blog post"
                fill
                className="object-cover"
              />
            </div>
            <pre className="bg-zinc-800 p-4 rounded-style overflow-x-auto mb-6">
              <code className="text-white/90">
                {`function example() {
  console.log("Hello, world!");
  return true;
}`}
              </code>
            </pre>
            <p className="text-white/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <ShareButtons title={post.title} url={url} />
          </div>
        </article>
      </div>
    </main>
  )
}

// Update the getBlogPostBySlug function to include language support
function getBlogPostBySlug(slug: string, language: "en" | "pt") {
  const blogPosts = {
    en: [
      {
        id: 1,
        title: "Building Scalable React Applications",
        excerpt: "Learn how to structure your React applications for scalability and maintainability.",
        content:
          "This is a placeholder for the full blog post content. In a real application, this would be loaded from a Markdown file or a CMS.",
        date: "2023-05-15",
        slug: "building-scalable-react-applications",
        tags: ["React", "Architecture", "Best Practices"],
        coverImage: "/placeholder.svg?height=400&width=800",
      },
      {
        id: 2,
        title: "The Power of TypeScript in Modern Web Development",
        excerpt: "Discover how TypeScript can improve your development workflow and reduce bugs.",
        content:
          "This is a placeholder for the full blog post content. In a real application, this would be loaded from a Markdown file or a CMS.",
        date: "2023-06-22",
        slug: "power-of-typescript",
        tags: ["TypeScript", "JavaScript", "Development"],
        coverImage: "/placeholder.svg?height=400&width=800",
      },
      {
        id: 3,
        title: "Optimizing Next.js Applications for Performance",
        excerpt: "Practical tips and techniques to make your Next.js applications blazing fast.",
        content:
          "This is a placeholder for the full blog post content. In a real application, this would be loaded from a Markdown file or a CMS.",
        date: "2023-07-10",
        slug: "optimizing-nextjs-applications",
        tags: ["Next.js", "Performance", "Optimization"],
        coverImage: "/placeholder.svg?height=400&width=800",
      },
    ],
    pt: [
      {
        id: 1,
        title: "Construindo Aplicações React Escaláveis",
        excerpt: "Aprenda como estruturar suas aplicações React para escalabilidade e manutenibilidade.",
        content:
          "Este é um espaço reservado para o conteúdo completo do post do blog. Em uma aplicação real, isso seria carregado de um arquivo Markdown ou de um CMS.",
        date: "2023-05-15",
        slug: "building-scalable-react-applications",
        tags: ["React", "Arquitetura", "Boas Práticas"],
        coverImage: "/placeholder.svg?height=400&width=800",
      },
      {
        id: 2,
        title: "O Poder do TypeScript no Desenvolvimento Web Moderno",
        excerpt: "Descubra como o TypeScript pode melhorar seu fluxo de desenvolvimento e reduzir bugs.",
        content:
          "Este é um espaço reservado para o conteúdo completo do post do blog. Em uma aplicação real, isso seria carregado de um arquivo Markdown ou de um CMS.",
        date: "2023-06-22",
        slug: "power-of-typescript",
        tags: ["TypeScript", "JavaScript", "Desenvolvimento"],
        coverImage: "/placeholder.svg?height=400&width=800",
      },
      {
        id: 3,
        title: "Otimizando Aplicações Next.js para Performance",
        excerpt: "Dicas práticas e técnicas para tornar suas aplicações Next.js extremamente rápidas.",
        content:
          "Este é um espaço reservado para o conteúdo completo do post do blog. Em uma aplicação real, isso seria carregado de um arquivo Markdown ou de um CMS.",
        date: "2023-07-10",
        slug: "optimizing-nextjs-applications",
        tags: ["Next.js", "Performance", "Otimização"],
        coverImage: "/placeholder.svg?height=400&width=800",
      },
    ],
  }

  return blogPosts[language].find((post) => post.slug === slug)
}

