"use client"

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'

export default function OilBasedMudAdditivesPage() {
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
              OIL BASED MUD ADDITIVES
            </h1>
            <h2 className="font-headline mb-0 text-zul-yellow">
              OPTIMIZED PERFORMANCE
            </h2>
            <p className="font-headline mb-0 text-zul-yellow">
              FOR EFFICIENT
            </p>
            <p className="font-headline mb-8 text-white">
              SAFE DRILLING OPERATIONS
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
            {/* Oil Based Mud Additives Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image - Left Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="w-96 h-80 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.legendholding.com/images/cdn_68a55d78eab5e0.45150741_20250820_053032.webp"
                      alt="Oil Based Mud Additives Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-subhead text-zul-green mb-6">
                  Oil Based Mud Additives
                </h3>
                <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                  Oil-based drilling fluids are essential for challenging formations where high-temperature stability, shale inhibition, and superior lubrication are required. Additives in oil-based muds are engineered to:
                </p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide exceptional shale inhibition
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enhance lubrication and reduce torque
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Control fluid loss in high-pressure zones
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Protect downhole tools and tubulars from corrosion
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Maintain rheological properties under extreme conditions
                    </li>
                  </ul>
                </div>
                
                <p className="font-body text-zul-grey-dark leading-relaxed">
                  Zul Energy supplies premium oil-based drilling fluid additives, ensuring consistent quality, tailored solutions, and reliable supply across the MENA region.
                </p>
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

            {/* Product List Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                <ul className="space-y-2">
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Primary Emulsifiers
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Secondary Emulsifiers
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Emulsifiers
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Lubricants
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                <ul className="space-y-2">
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Fluid Loss Reducers (OBM-specific)
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Wetting Agents
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Defoamer / Antifoam Agents
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Shale Stabilizers
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                <ul className="space-y-2">
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Lost Circulation Materials (LCM)
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Biocides
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Oil-Based Thinners
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
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Develop oil-based solutions based on mud properties, required mud weight, and fluid loss limits</p>
              </div>

              {/* Mud Testing - Right Side */}
              <div className="absolute top-2/3 -right-16 md:top-2/3 md:-right-28 lg:-right-36 text-right max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Mud Testing</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Oil-based mud conditioning & testing / Prepare and evaluate formulations at the mud plant or rig site</p>
              </div>

              {/* Tailor-Made Production - Bottom */}
              <div className="absolute -bottom-24 md:-bottom-28 lg:-bottom-32 left-1/2 transform -translate-x-1/2 text-center max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Tailor-Made Production</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Manufacture customized oil-based chemical blends to meet specific customer requirements</p>
              </div>

              {/* Q&A Improvement - Left Side */}
              <div className="absolute top-2/3 -left-16 md:top-2/3 md:-left-28 lg:-left-36 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Q&A Improvement</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Quality Control & Continuous Improvement / Monitor performance during operations and refine as needed for optimal results</p>
              </div>

              {/* Plant Visit - Top Left */}
              <div className="absolute -top-16 -left-12 md:-top-16 md:-left-20 lg:-top-20 lg:-left-28 text-left max-w-24 md:max-w-40">
                <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Plant Visit</h4>
                <p className="text-[10px] md:text-xs text-zul-grey-dark">Site Visit & Sample Collection / Assess operational conditions and collect representative oil-based mud samples</p>
              </div>

              <img 
                src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp"
                alt="Oil Based Mud Additives Product"
                className="max-w-full h-auto rounded-lg object-contain max-h-[250px] md:max-h-[400px] lg:max-h-[600px]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactUs />
      </div>
      
      <Footer />
    </main>
  )
}
