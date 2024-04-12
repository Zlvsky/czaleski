import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ContentContainer from '@/components/layout/ContentContainer'
import PageWrap from '@/components/layout/PageWrap'
import About from '@/components/main-page/About'
import Contact from '@/components/main-page/Contact'
import Hero from '@/components/main-page/Hero'
import Process from '@/components/main-page/Process'
import Stack from '@/components/main-page/Stack'
import Works from '@/components/main-page/Works'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <ContentContainer>
        <Hero />
        <Process />
        {/* <Works /> */}
        <Stack />
        <About />
        <Contact />
        <Footer />
      </ContentContainer>
    </PageWrap>
  )
}
