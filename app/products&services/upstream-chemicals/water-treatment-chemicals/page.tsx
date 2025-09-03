"use client"

import React from 'react'
import Header from '../../../../components/Header'
import Hero from '../../../../components/Hero'
import ContactUs from '../../../../components/ContactUs'
import Footer from '../../../../components/Footer'

export default function UpstreamWaterTreatmentChemicalsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      <section id="home" className="relative bg-gradient-to-r from-zul-green to-primary-900 text-white mt-24" style={{ height: '672.25px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a5649f0a16b2.35673987_20250820_060103.webp")'
          }}
        >
        </div>
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-left">
            <h1 className="font-headline mb-0 text-white">
              WATER TREATMENT CHEMICALS
            </h1>
            <h2 className="font-headline mb-0 text-zul-yellow">
              UPSTREAM SOLUTIONS
            </h2>
            <p className="font-headline mb-0 text-zul-yellow">
              FOR EFFICIENT
            </p>
            <p className="font-headline mb-8 text-white">
              OIL & GAS OPERATIONS
            </p>
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-zul-yellow text-white px-8 py-3 rounded-lg font-body font-medium hover:bg-yellow-400 transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>
      
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

      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Product
            </h2>
            {/* Yellow underline */}
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="space-y-16">
            {/* Water Treatment Chemicals Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image - Left Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="w-96 h-80 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.legendholding.com/images/cdn_68a55e06bcaa45.21764780_20250820_053254.webp"
                      alt="Upstream Water Treatment Chemicals Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-subhead text-zul-green mb-6">
                  Upstream Water Treatment Chemicals
                </h3>
                <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                  are specialized formulations designed for upstream oil and gas operations, including drilling, production, and well completion activities. These chemicals help manage water quality in drilling fluids, control scale and corrosion in production systems, and ensure optimal performance of water-based operations throughout the upstream value chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Section with CDN Image */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-24">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Method of Work
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="flex justify-center mb-16">
            <div className="relative">
              {/* R&D Formulation - Top Right */}
              <div className="absolute -top-16 -right-12 md:-top-16 md:-right-20 lg:-top-20 lg:-right-28 text-right max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">R&D Formulation</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Develop upstream water treatment solutions based on drilling conditions, water quality, and operational requirements</p>
              </div>

              {/* Water Testing - Right Side */}
              <div className="absolute top-2/3 -right-16 md:top-2/3 md:-right-28 lg:-right-36 text-right max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Water Testing</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Upstream water analysis & testing / Prepare and evaluate treatment formulations at drilling sites or production facilities</p>
              </div>

              {/* Tailor-Made Production - Bottom */}
              <div className="absolute -bottom-24 md:-bottom-28 lg:-bottom-32 left-1/2 transform -translate-x-1/2 text-center max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Tailor-Made Production</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Manufacture customized upstream water treatment chemical blends to meet specific drilling and production requirements</p>
              </div>

              {/* Q&A Improvement - Left Side */}
              <div className="absolute top-2/3 -left-16 md:top-2/3 md:-left-28 lg:-left-36 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Q&A Improvement</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Quality Control & Continuous Improvement / Monitor upstream water treatment performance and refine as needed for optimal results</p>
              </div>

              {/* Plant Visit - Top Left */}
              <div className="absolute -top-16 -left-12 md:-top-16 md:-left-20 lg:-top-20 lg:-left-28 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Plant Visit</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Site Visit & Sample Collection / Assess upstream water treatment conditions and collect representative water samples</p>
              </div>

              <img 
                src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp"
                alt="Upstream Water Treatment Chemicals Product"
                className="max-w-full h-auto rounded-lg object-contain max-h-[250px] md:max-h-[400px] lg:max-h-[600px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <ContactUs />
      </section>
      
      <Footer />
    </main>
  )
}
