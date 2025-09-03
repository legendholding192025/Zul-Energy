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
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-12">
              {/* Content - Right Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-subhead text-zul-green mb-6">
                  Water Treatment Chemicals
                </h3>
                <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                  Water treatment chemicals are required for various operations in downstream industry such as refining, petrochemicals plants, storage terminals etc. Zul Energy can provide the chemicals required for these operations:
                </p>
              </div>
              
              {/* Image - Left Side */}
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
            <div className="space-y-8">
              {/* First Row - 3 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Boiler Water Treatment */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Boiler Water Treatment</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Oxygen Scavengers
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Scale Inhibitors
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Alkalinity Builders
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Sludge Conditioners / Dispersants
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Condensate Line Corrosion Inhibitors
                    </li>
                  </ul>
                </div>

                {/* Cooling Water Treatment */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Cooling Water Treatment</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Scale Inhibitors
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Corrosion Inhibitors
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Biocides
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Dispersants
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      pH Control Agents
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Defoamers / Antifoams
                    </li>
                  </ul>
                </div>

                {/* Process Water Treatment */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Process Water Treatment</h4>
                  </div>
                  <p className="text-sm text-white mb-3">(Refining / Petrochemicals)</p>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Demulsifiers
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Deoilers
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Coagulants
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Flocculants
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      pH Neutralizers
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Row - 2 Cards Centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ maxWidth: 'calc(66.666667% + 1rem)' }}>
                  {/* Wastewater Treatment */}
                  <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                    <div className="mb-6">
                      <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Wastewater Treatment & Effluent Polishing</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Coagulants & Flocculants
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Activated Carbon / Adsorbents
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Heavy Metal Precipitants
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Nutrient Additives
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Oxidizing Agents
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Defoamers / Odor Control Agents 
                      </li>
                    </ul>
                  </div>

                  {/* Specialty Chemicals */}
                  <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                    <div className="mb-6">
                      <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Specialty Chemicals</h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Reverse Osmosis (RO) Antiscalants & Cleaning Agents
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Membrane Biocides & Preservatives
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        H₂S Scavengers
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Hydrocarbon Dewatering Agents
                      </li>
                      <li className="font-body text-white flex items-center">
                        <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                        Corrosion Inhibitors (specific for refinery effluent systems)
                      </li>
                    </ul>
                  </div>
                </div>
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
      <section id="contact" className="bg-gray-50">
        <ContactUs />
      </section>
      
      <Footer />
    </main>
  )
}
