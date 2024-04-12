'use client'

import Hand from '@/assets/images/hand.png'
import memoji1 from '@/assets/images/memoji1.png'
import SomeWorksSVG from '@/assets/images/someworks.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useRef } from 'react'
import PageWrap from '../layout/PageWrap'
import { easeIn, motion } from 'framer-motion'

const SubHeader = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.1, type: "spring", damping: 10, stiffness: 100}}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}>
      <h2 className="flex items-center gap-1 text-base md:text-20 text-gray1 tracking-tight mb-2">
        Hi there <Image src={Hand.src} alt="👋" width={22} height={22} /> I&apos;m
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
      <h1 className="text-3xl md:text-40 font-medium text-black text-center tracking-tighter">
        Web & Frontend developer
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
        <span className="text-black">websites that fuel your growth </span>
        to developing{' '}
        <span className="text-black">apps that help you achieve your goals.</span>
      </p>
    </motion.div>
  )
}

const SomeWorks = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
      }}
      className="absolute right-0 2xl:right-64 bottom-96">
      <SomeWorksSVG />
    </motion.div>
  )
}

const Memoji = () => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.35, ease: 'easeInOut' }}
    variants={{
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 100 }
    }}
    className="hidden md:block absolute left-20 bottom-32">
    <Image
      src={memoji1.src}
      height={240}
      width={240}
      alt="memoji"
      className="w-36 h-36"
    />
  </motion.div>
)

function Hero() {
  const wrapper = useRef(null)
  const container = useRef(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper.current,
          start: 'top top',
          end: 'center+=100% center',
          scrub: true,
          pinSpacing: true
        }
      })
      tm.to(container.current, {
        scale: 0.85,
        opacity: 0.1,
        duration: 1,
        ease: 'none',
        transformOrigin: 'center bottom'
      })
    },
    { scope: container }
  )

  return (
    <PageWrap isGradient>
      <div ref={wrapper} className="relative w-full max-w-7xl px-4 mx-auto h-screen">
        <main
          className="fixed px-1 flex min-h-screen  flex-col items-center mt-72 md:mt-64 md:p-24 h-screen z-0 left-0 top-0 right-0"
          ref={container}
        >
          <SubHeader />
          <MainHeader />
          <Description />

          <SomeWorks />
        </main>
        <Memoji />
      </div>
    </PageWrap>
  )
}

export default Hero
