'use client'

import { cn } from '@/lib/utils'
import { type MotionProps, motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  const animeProps: MotionProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <motion.span
        {...animeProps}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-emerald-400"
      >{`../${subtitle}`}</motion.span>
      <motion.h2
        {...animeProps}
        className="text-3xl font-medium"
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}
