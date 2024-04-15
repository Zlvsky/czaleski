import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import ContentContainer from '@/components/layout/ContentContainer'
import PageWrap from '@/components/layout/PageWrap'
import About from '@/components/main-page/About'
import Contact from '@/components/main-page/Contact'
import Hero from '@/components/main-page/Hero'
import Offer from '@/components/main-page/Offer'
import Process from '@/components/main-page/Process'
import Testimonials from '@/components/main-page/Testimonials'
import Works from '@/components/main-page/Works'

export default function Home() {
  return (
    <PageWrap>
      <Header />
      <ContentContainer>
        <Hero />
        <Offer />
        <About />
        {/* <Stack /> */}
        <Works />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </ContentContainer>
    </PageWrap>
  )
}
