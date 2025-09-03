"use client"

import React from 'react'
import Header from '../../../../components/Header'
import Hero from '../../../../components/Hero'
import ContactUs from '../../../../components/ContactUs'
import Footer from '../../../../components/Footer'

export default function WaterTreatmentChemicalsPage() {
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
              OPTIMIZED PERFORMANCE
            </h2>
            <p className="font-headline mb-0 text-zul-yellow">
              FOR EFFICIENT
            </p>
            <p className="font-headline mb-8 text-white">
              SAFE WATER TREATMENT OPERATIONS
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
            {/* Panel 1: Water Treatment Facilities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp"
                  alt="Water Treatment Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Water Treatment Facilities
                </h3>
              </div>
            </div>
            
            {/* Panel 2: Industrial Plants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565be7bb385.96776264_20250820_060550.webp"
                  alt="Industrial Plants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Industrial Plants
                </h3>
              </div>
            </div>
            
            {/* Panel 3: Municipal Water Systems */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565ececd456.31764651_20250820_060636.webp"
                  alt="Municipal Water Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Municipal Water Systems
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
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
              {/* Content - Left Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-subhead text-zul-green mb-6">
                  Water Treatment Chemicals
                </h3>
                <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                  Water treatment chemicals are required for various operations in downstream industry such as refining, petrochemicals plants, storage terminals etc. Zul Energy can provide the chemicals required for these operations:
                </p>
              </div>
              
              {/* Image - Right Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="w-96 h-80 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.legendholding.com/images/cdn_68a55e06bcaa45.21764780_20250820_053254.webp"
                      alt="Water Treatment Chemicals Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Boiler Water Treatment */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zul-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-body helvetica-bold text-zul-green text-lg">Boiler Water Treatment</h4>
                </div>
                <ul className="space-y-2">
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Oxygen Scavengers
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Scale Inhibitors
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Alkalinity Builders
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Sludge Conditioners / Dispersants
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Condensate Line Corrosion Inhibitors
                  </li>
                </ul>
              </div>

              {/* Cooling Water Treatment */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zul-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h4 className="font-body helvetica-bold text-zul-green text-lg">Cooling Water Treatment</h4>
                </div>
                <ul className="space-y-2">
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Scale Inhibitors
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Corrosion Inhibitors
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Biocides
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Dispersants
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    pH Control Agents
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Defoamers / Antifoams
                  </li>
                </ul>
              </div>

              {/* Process Water Treatment */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zul-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="font-body helvetica-bold text-zul-green text-lg">Process Water Treatment</h4>
                </div>
                <p className="text-sm text-zul-grey-dark mb-3">(Refining / Petrochemicals)</p>
                <ul className="space-y-2">
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Demulsifiers
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Deoilers
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Coagulants
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Flocculants
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    pH Neutralizers
                  </li>
                </ul>
              </div>

              {/* Wastewater Treatment */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-zul-green rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h4 className="font-body helvetica-bold text-zul-green text-lg">Wastewater Treatment</h4>
                </div>
                <p className="text-sm text-zul-grey-dark mb-3">& Effluent Polishing</p>
                <ul className="space-y-2">
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Coagulants & Flocculants
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Activated Carbon / Adsorbents
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Heavy Metal Precipitants
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Nutrient Additives
                  </li>
                  <li className="font-body text-zul-grey-dark flex items-center">
                    <span className="w-2 h-2 bg-zul-green rounded-full mr-3 flex-shrink-0"></span>
                    Oxidizing Agents
                  </li>
                </ul>
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
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Develop water treatment solutions based on system requirements, water quality parameters, and treatment objectives</p>
              </div>

              {/* Water Testing - Right Side */}
              <div className="absolute top-2/3 -right-16 md:top-2/3 md:-right-28 lg:-right-36 text-right max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Water Testing</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Water quality analysis & testing / Prepare and evaluate treatment formulations at the facility or treatment plant</p>
              </div>

              {/* Tailor-Made Production - Bottom */}
              <div className="absolute -bottom-24 md:-bottom-28 lg:-bottom-32 left-1/2 transform -translate-x-1/2 text-center max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Tailor-Made Production</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Manufacture customized water treatment chemical blends to meet specific system requirements</p>
              </div>

              {/* Q&A Improvement - Left Side */}
              <div className="absolute top-2/3 -left-16 md:top-2/3 md:-left-28 lg:-left-36 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Q&A Improvement</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Quality Control & Continuous Improvement / Monitor treatment performance and refine as needed for optimal results</p>
              </div>

              {/* Plant Visit - Top Left */}
              <div className="absolute -top-16 -left-12 md:-top-16 md:-left-20 lg:-top-20 lg:-left-28 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Plant Visit</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Site Visit & Sample Collection / Assess water treatment conditions and collect representative water samples</p>
              </div>

              <img 
                src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp"
                alt="Water Treatment Chemicals Product"
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
