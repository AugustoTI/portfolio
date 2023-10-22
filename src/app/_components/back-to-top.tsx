'use client'

import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'
import { AnimatePresence, motion } from 'framer-motion'

export function BackToTop() {
  const [show, setShow] = useState(false)

  const scrollToTop = () => globalThis.scrollTo({ top: 0 })

  const handleScroll = useCallback(() => {
    setShow(() => window.scrollY > 500)
  }, [])

  useEffect(() => {
    globalThis.addEventListener('scroll', handleScroll)

    return () => globalThis.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
          className="fixed bottom-4 right-4 z-20"
        >
          <Button onClick={scrollToTop} className="shadow-lg shadow-emerald-400/20">
            <TbArrowNarrowUp size={24} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
