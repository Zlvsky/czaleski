'use client'
import { motion } from 'framer-motion'
import LinkSVG from '@/assets/icons/common/link.svg'
import BrowserSVG from '@/assets/icons/works/browser.svg'
import LockSVG from '@/assets/icons/works/lock.svg'
import Image from 'next/image'
import BigContainer from '../layout/BigContainer'

interface IProject {
  title: string
  description: string
  link: string
  linkText: string
  logo?: string
  progress: string
}

const projects = [
  {
    title: 'Visity',
    description:
      'Tool for creating simple landing pages in minutes, dedicated for small businesses.',
    link: 'https://visity.pl',
    linkText: 'visity.pl',
    logo: '/projects/visity.png',
    progress: 'Building'
  },
  {
    title: 'Realm of Dungeons',
    description: 'Web based, idle multiplayer retro game inspired by Shakes & Fidget',
    link: 'https://realmdungeons.web.app',
    linkText: 'realmdungeons.web.app',
    logo: '/projects/rod.png',
    progress: 'Building'
  },
  {
    title: 'One-place',
    description: `CRUD admin panel to manage business based on orders that don't need online shop.`,
    link: 'https://github.com/Zlvsky/one-place',
    linkText: 'github.com/zlvsky/one-place',
    progress: 'Abandoned'
  }
]

const BrowserSearch = () => {
  return (
    <div className="bg-[#0C0F12] gap-1.5 rounded-md flex flex-row items-center justify-center py-2 w-full max-w-xl">
      <LockSVG />
      <span className="text-white text-sm tracking-tight">kzaleski.pl/works</span>
    </div>
  )
}

const Project = ({ title, description, link, linkText, logo, progress }: IProject) => {
  const Progress = () => {
    return (
      <div className="flex items-center gap-2">
        <span
          className={`relative inline-flex rounded-full h-3 w-3  ${progress === 'Building' ? 'bg-green' : 'bg-dark48'} `}
        ></span>
        <span className="text-grayA1 text-medium tracking-tight">{progress}</span>
      </div>
    )
  }

  const Link = () => {
    return (
      <a
        href={link}
        target="_blank"
        className="flex flex-row px-3 py-1 gap-2 items-center text-grayA1 font-medium text-xs bg-grayE8 rounded-full"
      >
        <LinkSVG /> {linkText}
      </a>
    )
  }

  return (
    <div className="flex flex-row flex-start bg-dark26 border border-dark48 p-6 rounded-3xl">
      <div className="flex flex-col gap-2 items-start">
        <Progress />
        <h4 className="text-white font-semibold text-lg">{title}</h4>
        <p className="text-grayA1 font-medium text-sm mb-4">{description}</p>
        <Link />
      </div>
      {logo && (
        <Image src={logo} alt={title} width={200} height={200} className="w-10 h-10" />
      )}
    </div>
  )
}

function Works() {
  return (
    <BigContainer id="works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.35, ease: 'easeInOut' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }}
        className="z-10 -mt-32 w-full h-full ">
        <div className="flex items-center justify-between w-full rounded-t-[70px] bg-[#303030] pb-3 pt-4 px-20">
          <BrowserSVG className="hidden md:block" />
          <BrowserSearch />
          <div className="hidden md:block spacer"></div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto bg-[#232323] rounded-b-3xl md:rounded-b-3xl px-3 md:px-20 pt-8 md:pt-14 pb-8 md:pb-72">
          {projects.map((project, index) => (
            <Project key={'project_' + index} {...project} />
          ))}
        </div>
      </motion.div>
    </BigContainer>
  )
}

export default Works
