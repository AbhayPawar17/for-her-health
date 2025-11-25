import FlyoutNav from "@/components/FlyoutNav"
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
    </>
  )
}

export default Home