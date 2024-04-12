'use client'

import AboutSVG from '@/assets/images/aboutme.svg'
import { motion } from 'framer-motion'
import React from 'react'
import BigContainer from '../layout/BigContainer'
interface IAboutBlock {
  title: string
  children: React.ReactNode
}

const AboutBlock = ({ title, children }: IAboutBlock) => (
  <div className="flex flex-col items-center border border-grayE8 rounded-3xl shadow-block justify-start gap-6 md:gap-10 md:aspect-square py-8 md:py-12 px-5">
    <h2 className="text-xl md:text-2xl text-black text-center tracking-tighter">
      {title}
    </h2>
    <div className="text-gray7B text-center text-base tracking-tight">{children}</div>
  </div>
)

function About() {
  return (
    <BigContainer id="about">
      <div className="flex flex-col items-center justify-center mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
          variants={{
            visible: { opacity: 1, x: 0, y: 0 },
            hidden: { opacity: 0, x: -20, y: -10 }
          }}
          className="">
          <AboutSVG className="md:-ml-40" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 mt-10">
          <AboutBlock title="As a Frontend Developer">
            From concept to completion, I specialize in{' '}
            <span className="text-black">end-to-end frontend development</span>, weaving
            together design and functionality to create well-written stable web apps.
          </AboutBlock>
          <AboutBlock title="As a Web Developer">
            I create <span className="text-black">conversion-designed</span>, custom-coded
            landing pages that are tailored to your brand. Converting browsers into
            clients
          </AboutBlock>
          <AboutBlock title="As an Indie Hacker">
            Fuelled by a <span className="text-black">passion for coding</span>, I&apos;m
            all about exploring new horizons, tinkering with ideas, and building cool
            stuff
          </AboutBlock>
        </div>
      </div>
    </BigContainer>
  )
}

export default About
