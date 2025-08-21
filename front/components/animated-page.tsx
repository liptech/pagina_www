"use client"

import type React from "react"

import { motion } from "framer-motion"
import { pageTransition } from "@/lib/animations"

interface AnimatedPageProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedPage({ children, className = "" }: AnimatedPageProps) {
  return (
    <motion.div
      className={className}
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  )
}
