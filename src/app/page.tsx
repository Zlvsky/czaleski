import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import PageWrap from '@/components/layout/PageWrap'
import About from '@/components/main-page/About'
import Contact from '@/components/main-page/Contact'
import Hero from '@/components/main-page/Hero'
import Stack from '@/components/main-page/Stack'
import Works from '@/components/main-page/Works'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <Hero />
      <div className="w-full bg-white z-10">
        <Works />
        <Stack />
        <About />
        <Contact />
        <Footer />
      </div>
    </PageWrap>
  )
}
