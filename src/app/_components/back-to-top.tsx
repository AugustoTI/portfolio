'use client'

import { Button } from '@/components/ui/button'
import { useCallback, useEffect, useState } from 'react'
import { TbArrowNarrowUp } from 'react-icons/tb'

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
    show && (
      <div className="fixed bottom-4 right-4 z-20">
        <Button onClick={scrollToTop} className="shadow-lg shadow-emerald-400/20">
          <TbArrowNarrowUp size={24} />
        </Button>
      </div>
    )
  )
}
