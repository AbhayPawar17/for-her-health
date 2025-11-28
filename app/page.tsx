import FlyoutNav from "@/components/FlyoutNav"
import Footer from "@/components/Footer"
import HealthCareSection from "@/components/HealthCareSection"
import HerHealthSection from "@/components/HerHealthSection"
import Hero from "@/components/Hero"
import InfoSection from "@/components/InfoSection"
import ServicesSection from "@/components/ServicesSection"
import VideoSection from "@/components/VideoSection"
import ContactSection from "@/components/ContactSection"

const Home = () => {
  return (
    <>
      <FlyoutNav />
      <Hero />
      <HerHealthSection />
      <ServicesSection/>
      <VideoSection />
      <HealthCareSection/>
      <InfoSection />
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default Home