"use client"

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactUs from '@/components/ContactUs'

export default function WaterBasedMudAdditivesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
    
      <section id="home" className="relative bg-gradient-to-r from-zul-green to-primary-900 text-white mt-24" style={{ height: '672.25px' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68b93a39a18a08.05028364_20250904_070529.webp")'
          }}
        >
        </div>
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-left">
            <h1 className="font-headline mb-0 text-white">
              WATER BASED MUD ADDITIVES
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
            {/* Water Based Mud Additives Section */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image - Left Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative px-2 sm:px-0">
                  <div className="w-full max-w-[384px] h-72 sm:h-80 md:h-96 mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                    <img
                      src="https://cdn.legendholding.com/images/cdn_68a55d78eab5e0.45150741_20250820_053032.webp"
                      alt="Water Based Mud Additives Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content - Right Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-subhead text-zul-green mb-6">
                  Water Based Mud Additives
                </h3>
                <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                  Water-based drilling fluids are widely used due to their cost-effectiveness, environmental compliance, and ease of handling. Additives in water-based muds are designed to:
                </p>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Increase viscosity and density
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Control fluid loss
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Stabilize shale formations
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Reduce corrosion
                    </li>
                    <li className="font-body text-zul-grey-dark flex items-start">
                      <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enhance lubrication and drilling efficiency
                    </li>
                  </ul>
                </div>
                
                <p className="font-body text-zul-grey-dark leading-relaxed">
                  Zul Energy provides a full range of high-quality water-based additives, sourced from trusted global manufacturers. With robust warehousing and logistics, we ensure timely delivery, superior packaging, and reliable supply to meet your operational requirements.
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
                    Viscosifiers
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Weighting Materials
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Fluid Loss Reducers
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Mud Detergents
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
                    Defoamer - Antifoam Agents
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Wetting Agents
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Shale Stabilizers
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Lost Circulation Materials (LCM)
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Biocides
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div className="bg-zul-green rounded-3xl shadow-lg p-8 border border-gray-100">
                <ul className="space-y-2">
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Rig Wash
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Dispersants
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Deflocculants
                  </li>
                  <li className="font-body text-white flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
                    Water-Based Thinners
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

      <div id="contact">
        <ContactUs preSelectedProduct="water-based-mud-additives" />
      </div>
      
      <Footer />
    </main>
  )
}
