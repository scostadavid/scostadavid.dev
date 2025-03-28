"use client"

import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import Image from "next/image"
import Head from "next/head"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function BlogPage() {
  const { t, language } = useLanguage()

  const blogPosts =
    language === "en"
      ? [
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
          {
            id: 4,
            title: "Creating Accessible Web Applications",
            excerpt: "Learn how to make your web applications accessible to all users.",
            content:
              "This is a placeholder for the full blog post content. In a real application, this would be loaded from a Markdown file or a CMS.",
            date: "2023-08-05",
            slug: "creating-accessible-web-applications",
            tags: ["Accessibility", "Web Development", "UX"],
            coverImage: "/placeholder.svg?height=400&width=800",
          },
          {
            id: 5,
            title: "Introduction to Server Components in Next.js",
            excerpt: "Explore the new Server Components feature in Next.js and how it can improve your applications.",
            content:
              "This is a placeholder for the full blog post content. In a real application, this would be loaded from a Markdown file or a CMS.",
            date: "2023-09-18",
            slug: "introduction-to-server-components",
            tags: ["Next.js", "React", "Server Components"],
            coverImage: "/placeholder.svg?height=400&width=800",
          },
          {
            id: 6,
            title: "State Management in 2023: Beyond Redux",
            excerpt: "A look at modern state management solutions for React applications.",
            content:
              "This is a placeholder for the full blog post content. In a real application, this would be loaded from a Markdown file or a CMS.",
            date: "2023-10-30",
            slug: "state-management-beyond-redux",
            tags: ["React", "State Management", "Redux"],
            coverImage: "/placeholder.svg?height=400&width=800",
          },
        ]
      : [
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
          {
            id: 4,
            title: "Criando Aplicações Web Acessíveis",
            excerpt: "Aprenda como tornar suas aplicações web acessíveis para todos os usuários.",
            content:
              "Este é um espaço reservado para o conteúdo completo do post do blog. Em uma aplicação real, isso seria carregado de um arquivo Markdown ou de um CMS.",
            date: "2023-08-05",
            slug: "creating-accessible-web-applications",
            tags: ["Acessibilidade", "Desenvolvimento Web", "UX"],
            coverImage: "/placeholder.svg?height=400&width=800",
          },
          {
            id: 5,
            title: "Introdução aos Componentes de Servidor no Next.js",
            excerpt:
              "Explore o novo recurso de Componentes de Servidor no Next.js e como ele pode melhorar suas aplicações.",
            content:
              "Este é um espaço reservado para o conteúdo completo do post do blog. Em uma aplicação real, isso seria carregado de um arquivo Markdown ou de um CMS.",
            date: "2023-09-18",
            slug: "introduction-to-server-components",
            tags: ["Next.js", "React", "Componentes de Servidor"],
            coverImage: "/placeholder.svg?height=400&width=800",
          },
          {
            id: 6,
            title: "Gerenciamento de Estado em 2023: Além do Redux",
            excerpt: "Um olhar sobre soluções modernas de gerenciamento de estado para aplicações React.",
            content:
              "Este é um espaço reservado para o conteúdo completo do post do blog. Em uma aplicação real, isso seria carregado de um arquivo Markdown ou de um CMS.",
            date: "2023-10-30",
            slug: "state-management-beyond-redux",
            tags: ["React", "Gerenciamento de Estado", "Redux"],
            coverImage: "/placeholder.svg?height=400&width=800",
          },
        ]

  return (
    <main className="min-h-screen bg-black">
      <Head>
        <title>Blog | David Costa</title>
        <meta
          name="description"
          content="Thoughts, ideas, and insights about software development, design, and technology."
        />
        <meta property="og:title" content="Blog | David Costa" />
        <meta
          property="og:description"
          content="Thoughts, ideas, and insights about software development, design, and technology."
        />
        <meta property="og:url" content="https://scostadavid.dev/blog" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="container py-24">
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> {t.blog.backToHome}
            </Button>
          </Link>
          <LanguageSwitcher />
        </div>
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 mb-6">
          {t.blog.title}
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mb-12">{t.blog.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="bg-zinc-900 border border-white/10 rounded-style p-6 h-full hover:bg-zinc-800 transition-colors duration-300">
                {post.coverImage && (
                  <div className="relative aspect-video mb-4 overflow-hidden rounded-style border border-white/10">
                    <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                )}
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
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-white/70 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-white/20 text-white/70 rounded-style">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

