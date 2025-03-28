"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface SkillBadgeProps {
  name: string
  icon: ReactNode
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-primary/5">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-md text-primary">{icon}</div>
          <span className="font-medium">{name}</span>
        </CardContent>
      </Card>
    </motion.div>
  )
}

