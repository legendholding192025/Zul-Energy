import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhyUs from '@/components/WhyUs'
import Solutions from '@/components/Solutions'
import Capabilities from '@/components/Capabilities'
import Certifications from '@/components/Certifications'
import CaseStudies from '@/components/CaseStudies'
import OurClients from '@/components/OurClients'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <WhyUs />
      <Solutions />
      <Capabilities />
      <Certifications />
      <CaseStudies />
      <OurClients />
      <ContactUs /> 
      <Footer />
    </main>
  )
}
