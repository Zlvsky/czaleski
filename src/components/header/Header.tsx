'use client'
import { motion } from 'framer-motion'
import Connect from './_components/Connect'
import NavLinks from './_components/NavLinks'

function Header() {
  return (
    <motion.div
      initial="visible"
      transition={{ duration: 0.6, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}
      className="top-4 z-20 my-4 flex w-full max-w-4xl items-center justify-between rounded-2xl border border-grayE8 bg-white px-5 py-1 shadow-sm"
    >
      <NavLinks />
      <Connect />
    </motion.div>
  )
}

export default Header
