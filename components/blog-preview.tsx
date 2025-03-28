"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  slug: string
  tags: string[]
  coverImage?: string
}

interface BlogPreviewProps {
  posts: BlogPost[]
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={item} className="group">
          <Link href={`/blog/${post.slug}`}>
            <div className="bg-zinc-900 border border-white/10 rounded-style p-6 h-full hover:bg-zinc-800 transition-colors duration-300">
              {post.coverImage && (
                <div className="relative aspect-video mb-4 overflow-hidden rounded-style border border-white/10">
                  <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-white/70 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="border-white/20 text-white/70 rounded-style">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="ghost" className="p-0 text-primary hover:text-primary/80 hover:bg-transparent">
                Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

