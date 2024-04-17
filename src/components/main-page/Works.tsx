'use client'
import LinkSVG from '@/assets/icons/common/link.svg'
import BigContainer from '../layout/BigContainer'
import SectionHeader from '../common/SectionHeader'

interface IProject {
  title: string
  description: string
  link?: string
  linkText?: string
  logo?: string
  stack: string[]
}

const projects = [
  // {
  //   title: 'Erevie @ goodsoft.pl',
  //   description:
  //     'As the sole frontend developer, I led the development of a web platform for the Polish real estate market. Collaborating with backend and mobile teams. I actively participated in discussions and problem-solving sessions to ensure seamless integration and functionality across all facets of the platform. My role encompassed not only the technical implementation but also the strategic alignment of frontend features.',
  //   link: 'https://app.erevie.pl',
  //   linkText: 'erevie.pl',
  //   logo: '/projects/visity.png',
  //   stack: ['React', 'Redux', 'TailwindCSS', 'Firebase', 'ReactPDF']
  // },
  // {
  //   title: 'Successio @ goodsoft.pl',
  //   description:
  //     'I led frontend development for Successio, a web app aiding market professionals in inheritance planning and personal finance management. Collaborating across teams, I ensured seamless integration and functionality, contributing to discussions for enhanced effectiveness.',
  //   link: 'https://app.successio.pl',
  //   linkText: 'app.successio.pl',
  //   logo: '/projects/visity.png',
  //   stack: ['React', 'Redux', 'TailwindCSS', 'Firebase', 'Agora.io']
  // },
  {
    title: 'Visity',
    description:
      'Designed and developed whole frontend & backend using Next.js and Node.js. Visity is SaaS app for creating simple landing pages in minutes for shareable link, dedicated for small businesses to include information like; services, pricing, gallery and most important info about business.',
    link: 'https://visity.pl',
    linkText: 'visity.pl',
    logo: '/projects/visity.png',
    stack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'MongoDB']
  },
  {
    title: 'Realm of Dungeons',
    description:
      'Developed MVP for Web based, idle multiplayer retro game inspired by Shakes & Fidget. Including landing page, game mechanics, user authentication, assets and game content.',
    link: 'https://realmofdungeons.pages.dev/',
    linkText: 'realmofdungeons.pages.dev',
    logo: '/projects/rod.png',
    stack: ['React', 'Node.js', 'Express', 'PIXI.js', 'MongoDB', 'Docker']
  },
  {
    title: 'One-place',
    description: `CRUD admin panel to manage business based on orders that don't need online shop. Reached 26+ stars on GitHub.`,
    link: 'https://github.com/Zlvsky/one-place',
    linkText: 'github.com/zlvsky/one-place',
    stack: ['React', 'Node.js', 'Express', 'MySQL']
  },
  {
    title: 'Automation Bot',
    description: `Custom-made bot that automates the insertion of ads on a portal with orders in the IT industry. Written in Puppeteer`,
    stack: ['Node.js', 'Puppeteer']
  }
]

const Project = ({ title, description, link, linkText, logo, stack }: IProject) => {
  const Link = () => {
    return (
      <a
        href={link}
        target="_blank"
        className="flex flex-row items-center gap-2 rounded-full bg-grayE8 px-3 py-1 text-xs font-medium text-grayA1"
      >
        <LinkSVG /> {linkText}
      </a>
    )
  }

  const Stack = () => (
    <div className="mb-6 flex flex-row flex-wrap items-center gap-3">
      {stack.map((item, index) => (
        <span
          key={index}
          className="rounded-md border border-[#39513e] bg-[#2d5134]/20 px-2 py-1 text-xs font-medium text-[#a2cead]"
        >
          {item}
        </span>
      ))}
    </div>
  )

  return (
    <div className="flex-start flex flex-row rounded-3xl border border-darkborder bg-dark26/60 p-4 md:p-10">
      <div className="flex flex-col items-start gap-2">
        <h4 className="text-2xl font-medium tracking-tighter text-white">{title}</h4>
        <p className="mb-4 text-base text-white/60">{description}</p>
        <Stack />
        {(link && linkText) && <Link />}
      </div>
    </div>
  )
}

function Works() {
  return (
    <BigContainer id="works">
      <div className="mt-20 md:mt-28"></div>
      <SectionHeader title="Featured projects" subtitle={'Works'} />
      <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2 md:px-3 ">
        {projects.map((project, index) => (
          <Project key={'project_' + index} {...project} />
        ))}
      </div>
    </BigContainer>
  )
}

export default Works
