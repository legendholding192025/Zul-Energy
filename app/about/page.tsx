import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 min-h-[80vh] bg-gradient-to-br from-zul-green to-zul-green-dark">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a56983066904.95341207_20250820_062155.webp")'
          }}
        >
        </div>
        
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-16">
            <h1 className="font-headline mb-0">
              ZUL Energy is a manufacturer of premium quality chemical additives for every stage of
            </h1>
            <h2 className="font-headline mb-4 text-zul-yellow">
              Oil & Gas field applications
            </h2>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Company Name */}
          <h3 className="font-headline text-zul-green mb-6 text-left">
            Zul Energy
          </h3>
          
          {/* Two Column Layout: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6 text-left">
              <p className="text-zul-grey-dark leading-relaxed text-base">
                With a manufacturing plant in UAE, ZUL Energy is a manufacturer of premium quality chemical additives for every stage of Oil & Gas field applications. Our commitment to provide quality products, outstanding service, and zero compromises, as complemented by our business values, has seen us growing rapidly to become the preferred vendor for National and International Oil Companies and other international services providers.
              </p>
              
              <p className="text-zul-grey-dark leading-relaxed text-base">
                Our commitment to quality chemical production and following environment regulations have been well acknowledged by the ISO 9001-2015, ISO 14001-2015 and ISO 45001-2018 certifications. Currently, ZUL Energy is also expanding its footprint to new Energy sectors.
              </p>
            </div>
            
                        {/* Right Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md -mt-8">
                <div className="bg-gradient-to-br from-zul-green/10 to-primary-900/10 rounded-lg p-4">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a5649f0a16b2.35673987_20250820_060103.webp"
                    alt="ZUL Energy Manufacturing Plant"
                    className="w-full h-80 rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Our Pillars
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Subtitle and Description */}
          <div className="text-left mb-16 max-w-4xl">
            <h3 className="font-subhead text-zul-grey-dark mb-4">
              Driving Innovation in Energy Solutions
            </h3>
            <p className="text-zul-grey-dark leading-relaxed">
              We strive to deliver innovative, sustainable, and high-quality chemical solutions, ensuring efficiency, reliability, and environmental responsibility in the energy sector.
            </p>
          </div>
          
          {/* Three Pillars Layout */}
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Responsive Images */}
            <img 
              src="/logo/pillars.png" 
              alt="Our Pillars - Mission, Vision, and Values" 
              className="w-full h-auto object-contain hidden lg:block"
            />
            <img 
              src="/logo/pillars-mobile.png" 
              alt="Our Pillars - Mission, Vision, and Values" 
              className="w-full h-auto object-contain lg:hidden"
            />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Why Us
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Five Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1: Comprehensive Portfolio */}
            <div className="bg-zul-green p-6 rounded-lg text-left">
              <h3 className="text-lg text-white font-bold mb-2">
                Comprehensive Portfolio
              </h3>
              <p className="text-white text-sm">
                Over 100 products across six major categories
              </p>
            </div>
            
            {/* Card 2: In-House R&D */}
            <div className="bg-white border border-zul-grey-dark p-6 rounded-lg text-left">
              <h3 className="text-lg text-zul-green font-bold mb-2">
                In-House R&D
              </h3>
              <p className="text-zul-grey-dark text-sm">
                Custom formulations and problem-solving expertise
              </p>
            </div>
            
            {/* Card 3: Quality & Safety */}
            <div className="bg-zul-grey-dark p-6 rounded-lg text-left">
              <h3 className="text-lg text-white font-bold mb-2">
                Quality & Safety
              </h3>
              <p className="text-white text-sm">
                ISO 9001 - ISO 14001 ISO 45001, API-compliant
              </p>
            </div>
            
            {/* Card 4: Local Advantage */}
            <div className="bg-zul-yellow p-6 rounded-lg text-left">
              <h3 className="text-lg text-zul-grey-dark font-bold mb-2">
                Local Advantage
              </h3>
              <p className="text-zul-grey-dark text-sm">
                UAE-based facility for faster delivery and regional support
              </p>
            </div>
            
            {/* Card 5: Global Reach */}
            <div className="bg-zul-green p-6 rounded-lg text-left">
              <h3 className="text-lg text-white font-bold mb-2">
                Global Reach
              </h3>
              <p className="text-white text-sm">
                Trusted by 50+ corporations worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
