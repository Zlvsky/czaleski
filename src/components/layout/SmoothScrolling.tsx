'use client'
import { IChildren } from '@/types/generalTypes'
import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScrolling({ children }: IChildren) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1, smoothWheel: true }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrolling
