"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useMemo } from "react"

interface Item {
  title: string
  thumbnail: string
  link: string
}

interface HeroParallaxProps {
  items: Item[]
}

export function HeroParallax({ items }: HeroParallaxProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const imageYs = useMemo(() => {
    const transforms = items.map((_, i) => {
      return useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? 100 : -100])
    })
    return transforms
  }, [items, scrollYProgress])

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <motion.div className="absolute inset-0 flex items-center justify-center" style={{ y, opacity }}>
        <div className="relative z-10 text-center space-y-6 px-4">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Crafting Digital <span className="text-primary">Experiences</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software developer specializing in creating exceptional digital experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="#contact">
              <motion.button
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Work Together
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-0" />

      <div className="grid grid-cols-3 gap-4 absolute inset-0 -z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative h-full w-full overflow-hidden rounded-lg opacity-40"
            style={{
              y: imageYs[i],
            }}
          >
            <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

