"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags?: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

interface ProjectShowcaseProps {
  projects: Project[]
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollXProgress } = useScroll({
    container: containerRef,
  })

  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [1, 0.95, 1])

  const handlePrevious = () => {
    if (!containerRef.current) return
    const itemWidth = containerRef.current.scrollWidth / projects.length
    const newIndex = Math.max(0, activeIndex - 1)
    containerRef.current.scrollTo({
      left: itemWidth * newIndex,
      behavior: "smooth",
    })
    setActiveIndex(newIndex)
  }

  const handleNext = () => {
    if (!containerRef.current) return
    const itemWidth = containerRef.current.scrollWidth / projects.length
    const newIndex = Math.min(projects.length - 1, activeIndex + 1)
    containerRef.current.scrollTo({
      left: itemWidth * newIndex,
      behavior: "smooth",
    })
    setActiveIndex(newIndex)
  }

  return (
    <div className="relative">
      {/* Desktop Navigation Controls */}
      <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10 px-4 md:px-12">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevious}
          disabled={activeIndex === 0}
          className="rounded-style border-white/20 bg-black/50 backdrop-blur-lg hover:bg-white/10"
        >
          <ArrowRight className="h-6 w-6 rotate-180" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          disabled={activeIndex === projects.length - 1}
          className="rounded-style border-white/20 bg-black/50 backdrop-blur-lg hover:bg-white/10"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>

      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none" }}
        onScroll={(e) => {
          if (!containerRef.current) return
          const scrollLeft = e.currentTarget.scrollLeft
          const itemWidth = e.currentTarget.scrollWidth / projects.length
          const index = Math.round(scrollLeft / itemWidth)
          setActiveIndex(index)
        }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="min-w-full h-[70vh] flex items-center justify-center snap-center px-4 md:px-0"
          >
            <motion.div
              className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              style={{ scale }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-4xl font-black tracking-tighter text-white">{project.title}</h3>
                <p className="text-white/70 text-lg">{project.description}</p>
                {
                  project.tags ?
                  <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="border-white/20 text-white/70 rounded-style">
                      {tag}
                    </Badge>
                  ))}
                </div> : null
                }
                <div className="flex gap-4 pt-4">
                  {
                    project.demoUrl ?
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" className="bg-primary hover:bg-primary/80 rounded-style">
                        Site <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link> : <Button variant="default" className="bg-primary hover:bg-primary/80 rounded-style">
                        Em breve
                    </Button>
                  }
                  {
                    project.githubUrl ?
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-style">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Button>
                    </Link> : null
                  }
                </div>
              </div>
              <div className="relative aspect-video rounded-style overflow-hidden border border-white/10 shadow-2xl order-1 md:order-2">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-style transition-colors ${
              index === activeIndex ? "bg-primary" : "bg-white/20"
            }`}
            onClick={() => {
              if (!containerRef.current) return
              const itemWidth = containerRef.current.scrollWidth / projects.length
              containerRef.current.scrollTo({
                left: itemWidth * index,
                behavior: "smooth",
              })
              setActiveIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

