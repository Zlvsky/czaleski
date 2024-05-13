'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import PageWrap from '../layout/PageWrap'

import EmailSvg from '@/assets/icons/common/email.svg'
import StarSvg from '@/assets/icons/common/star.svg'
import client1 from '@/assets/images/clients/iwona.png'
import client2 from '@/assets/images/clients/pawel.png'
import client3 from '@/assets/images/clients/skrzynk.png'
import client4 from '@/assets/images/clients/tomaszmichno.png'
import client5 from '@/assets/images/clients/wbhale.png'
import Image, { StaticImageData } from 'next/image'

const ClientAvatar = ({ img }: { img: StaticImageData }) => {
  return (
    <Image
      src={img}
      alt="client"
      height={40}
      width={40}
      className="-ml-4 h-10 w-10  rounded-full border-2 border-black"
    />
  )
}

const Testimonials = () => {
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
      }}
    >
      <div className="flex flex-row items-center gap-1.5">
        <div className="ml-4 flex flex-row-reverse items-center">
          <ClientAvatar img={client1} />
          <ClientAvatar img={client2} />
          <ClientAvatar img={client3} />
          <ClientAvatar img={client4} />
          <ClientAvatar img={client5} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-0.5">
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
            <StarSvg />
          </div>
          <span className="text-sm tracking-tight text-white">trusted by clients</span>
        </div>
      </div>
    </motion.div>
  )
}

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
      }}
    >
      <h4 className="mb-4 mt-5 flex items-center text-center gap-1 rounded-lg border border-darkborder bg-dark26 px-1 py-1.5 text-base tracking-tight text-white/50">
        coded websites ◦ web apps ◦ outsourcing
      </h4>
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
      }}
    >
      <h1 className="max-w-3xl text-center text-3xl font-medium tracking-tighter text-white md:text-[5rem] md:leading-[5rem]">
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
      className="mt-8 text-center text-lg tracking-tight text-gray1 md:text-20"
    >
      <p className="max-w-xl">
        Seamlessly transitioning from crafting{' '}
        <span className="text-white">websites that fuel your growth </span>
        to developing{' '}
        <span className="text-white">apps that help you achieve your goals.</span>
      </p>
    </motion.div>
  )
}

const ContactButton = () => {
  return (
    <a href="mailto:zlvsky@icloud.com">
      <button className="mt-8 flex flex-row items-center rounded-2xl border border-darkborder bg-dark30/60 px-5 py-4">
        <EmailSvg className="-mt-1.5" />
        <span className="ml-2 text-20 tracking-tight text-white">Get In Touch</span>
      </button>
    </a>
  )
}

const PingDot = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-60 duration-150"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green"></span>
    </span>
  )
}

const Available = () => (
  <div className="mt-3 flex flex-row items-center">
    <PingDot />
    <span className="ml-3 text-sm text-white/50">Available Now</span>
  </div>
)

function Hero() {
  const wrapper = useRef(null)
  const container = useRef(null)

  return (
    <PageWrap>
      <div ref={wrapper} className="relative mx-auto  w-full max-w-7xl md:px-4">
        <main
          className=" mb-20 mt-20 flex flex-col items-center md:px-1 md:mb-0 md:mt-6 md:p-24"
          ref={container}
        >
          <Testimonials />
          <SubHeader />
          <MainHeader />
          <Description />
          <ContactButton />
          <Available />
        </main>
      </div>
    </PageWrap>
  )
}

export default Hero
