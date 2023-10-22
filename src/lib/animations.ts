import { type MotionProps } from 'framer-motion'

export const badgeAnimation: MotionProps = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
}

export const fadeUpAnimation: MotionProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
}
