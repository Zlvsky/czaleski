'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import PageWrap from '../layout/PageWrap'

const SubHeader = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        delay: 0.1,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}>
      <h2 className="flex items-center gap-1 text-base md:text-20 text-gray1 tracking-tight mb-2">
        Krzysztof Zaleski
      </h2>
    </motion.div>
  )
}

const MainHeader = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        delay: 0.3,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}>
      <h1 className="text-3xl md:text-[5rem] md:leading-[5rem] max-w-3xl font-medium text-white text-center tracking-tighter">
        Freelancing developer that gets work done.
      </h1>
    </motion.div>
  )
}

const Description = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 0.1,
        delay: 0.3,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
      className="text-gray1 text-center text-lg md:text-20 tracking-tight">
      <p className="max-w-xl">
        Seamlessly transitioning from crafting{' '}
        <span className="text-white">websites that fuel your growth </span>
        to developing{' '}
        <span className="text-white">apps that help you achieve your goals.</span>
      </p>
    </motion.div>
  )
}

function Hero() {
  const wrapper = useRef(null)
  const container = useRef(null)

  return (
    <PageWrap>
      <div ref={wrapper} className="relative w-full max-w-7xl px-4 mx-auto h-screen">
        <main
          className="px-1 flex flex-col items-center mt-40 md:mt-0 md:p-24"
          ref={container}>
          <SubHeader />
          <MainHeader />
          <Description />
        </main>
      </div>
    </PageWrap>
  )
}

export default Hero
