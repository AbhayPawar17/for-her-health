import FlyoutNav from "@/components/FlyoutNav"
import HealthCareSection from "@/components/HealthCareSection"
import HerHealthSection from "@/components/HerHealthSection"
import Hero from "@/components/Hero"
import ServicesSection from "@/components/ServicesSection"
import VideoSection from "@/components/VideoSection"

const Home = () => {
  return (
    <>
      <FlyoutNav />
      <Hero />
      <HerHealthSection />
      <ServicesSection/>
      <VideoSection />
      <HealthCareSection/>
    </>
  )
}

export default Home