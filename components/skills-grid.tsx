"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  icon: ReactNode
}

interface SkillsGridProps {
  skills: Skill[]
}

export function SkillsGrid({ skills }: SkillsGridProps) {
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
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="group"
          variants={item}
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="relative bg-zinc-900 border border-white/10 rounded-style p-6 h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="bg-white/10 p-3 rounded-style text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="font-bold text-white group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

