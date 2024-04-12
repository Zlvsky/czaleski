'use client'
import { motion } from 'framer-motion'
import Connect from './_components/Connect'
import NavLinks from './_components/NavLinks'

function Header() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5}}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}
      className="absolute z-20 w-full max-w-4xl flex justify-between items-center border border-grayE8 bg-white shadow-sm rounded-2xl px-5 py-2.5 top-4">
      <NavLinks />
      <Connect />
    </motion.div>
  )
}

export default Header
