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
      {/* <CaseStudies /> */}
      {/* Industry Users Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Industry Users
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Three Industry Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Panel 1: Oil & Gas Production Facilities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp"
                  alt="Oil & Gas Production Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Oil & Gas Production Facilities
                </h3>
              </div>
            </div>
            
            {/* Panel 2: Drilling Operations */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565be7bb385.96776264_20250820_060550.webp"
                  alt="Drilling Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Drilling Operations
                </h3>
              </div>
            </div>
            
            {/* Panel 3: Well Completion & Workover */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565ececd456.31764651_20250820_060636.webp"
                  alt="Well Completion & Workover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Well Completion & Workover
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <OurClients />
      <ContactUs /> 
      <Footer />
    </main>
  )
}
