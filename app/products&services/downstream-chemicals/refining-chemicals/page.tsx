"use client"

import React from 'react'
import Header from '../../../../components/Header'
import Hero from '../../../../components/Hero'
import ContactUs from '../../../../components/ContactUs'
import Footer from '../../../../components/Footer'

export default function RefiningChemicalsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      <section id="home" className="relative bg-gradient-to-r from-zul-green to-primary-900 text-white mt-24" style={{ height: '672.25px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68b93ae3077948.01873894_20250904_070819.webp")'
          }}
        >
        </div>
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-left">
            <h1 className="font-headline mb-0 text-white">
              REFINING CHEMICALS
            </h1>
            <h2 className="font-headline mb-0 text-zul-yellow">
              ADVANCED SOLUTIONS
            </h2>
            <p className="font-headline mb-0 text-zul-yellow">
              FOR OPTIMAL
            </p>
            <p className="font-headline mb-8 text-white">
              REFINERY OPERATIONS
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
            {/* Refining Chemicals Section */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-12">
              {/* Content - Right Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-subhead text-zul-green mb-6">
                  Refining Chemicals
                </h3>
                <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                  Petroleum refining is the process of converting crude oil into useful petroleum products such as gasoline, diesel, kerosene, jet fuel, lubricants, and petrochemical feedstocks. The refining process involves physical separation (distillation), chemical conversion (cracking, reforming, alkylation), and treatment steps (desulfurization, hydrotreating) to remove impurities and improve product quality. Chemicals play a vital role in enhancing efficiency, protecting equipment, ensuring compliance with environmental regulations, and maximizing yields.
                </p>
              </div>
              
              {/* Image - Left Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="w-96 h-80 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.legendholding.com/images/cdn_68a55c335d1b45.35797777_20250820_052507.webp"
                      alt="Refining Chemicals Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product List Heading */}
            <div className="text-center mb-16">
              <h3 className="font-subhead text-zul-grey-dark mb-4">
                Product List
              </h3>
              {/* Yellow underline */}
              <div className="w-16 h-1 bg-zul-yellow mx-auto"></div>
            </div>

            {/* Product Categories Grid */}
            <div className="space-y-8">
              {/* First Row - 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Catalysts */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Catalysts</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Fluid catalytic cracking (FCC) catalysts
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Hydrocracking catalysts
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Reforming catalysts (platinum, rhenium on alumina)
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Alkylation catalysts (sulfuric acid, hydrofluoric acid)
                    </li>
                  </ul>
                </div>

                {/* Process Chemicals */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Process Chemicals</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Sulfuric acid & hydrofluoric acid – alkylation units
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Amine solutions (DEA, MDEA, MEA) – for acid gas removal (CO₂, H₂S)
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Caustic soda (NaOH) – for acid gas scrubbing and neutralization
                    </li>
                  </ul>
                </div>
              </div>

              {/* Second Row - 2 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Water Treatment & Utility Chemicals */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Water Treatment & Utility Chemicals</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Oxygen scavengers
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Biocides
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Scale inhibitors
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Corrosion inhibitors
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Demulsifiers
                    </li>
                  </ul>
                </div>

                {/* Additives & Specialty Chemicals */}
                <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                  <div className="mb-6">
                    <h4 className="font-body helvetica-bold text-zul-yellow text-lg">Additives & Specialty Chemicals</h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Pour point depressants
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Antioxidants
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Metal deactivators
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Octane boosters
                    </li>
                    <li className="font-body text-white flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                      Cetane improvers
                    </li>
                  </ul>
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
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Develop water-based solutions based on mud properties, required mud weight, and fluid loss limits</p>
              </div>

              {/* Mud Testing - Right Side */}
              <div className="absolute top-2/3 -right-16 md:top-2/3 md:-right-28 lg:-right-36 text-right max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Mud Testing</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Water-based mud conditioning & testing / Prepare and evaluate formulations at the mud plant or rig site</p>
              </div>

              {/* Tailor-Made Production - Bottom */}
              <div className="absolute -bottom-24 md:-bottom-28 lg:-bottom-32 left-1/2 transform -translate-x-1/2 text-center max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Tailor-Made Production</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Manufacture customized water-based chemical blends to meet specific customer requirements</p>
              </div>

              {/* Q&A Improvement - Left Side */}
              <div className="absolute top-2/3 -left-16 md:top-2/3 md:-left-28 lg:-left-36 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Q&A Improvement</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Quality Control & Continuous Improvement / Monitor performance during operations and refine as needed for optimal results</p>
              </div>

              {/* Plant Visit - Top Left */}
              <div className="absolute -top-16 -left-12 md:-top-16 md:-left-20 lg:-top-20 lg:-left-28 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Plant Visit</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Site Visit & Sample Collection / Assess operational conditions and collect representative water-based mud samples</p>
              </div>

              <img 
                src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp"
                alt="Water Based Mud Additives Product"
                className="max-w-full h-auto rounded-lg object-contain max-h-[250px] md:max-h-[400px] lg:max-h-[600px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="bg-gray-50">
        <ContactUs preSelectedProduct="refining-chemicals" />
      </section>
      
      <Footer />
    </main>
  )
}
