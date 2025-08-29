"use client"

import React from 'react'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import ContactUs from '../../../components/ContactUs'
import Footer from '../../../components/Footer'

export default function RefiningChemicalsPage() {
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
            {/* Panel 1: Refineries */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp"
                  alt="Refineries"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Refineries
                </h3>
              </div>
            </div>
            
            {/* Panel 2: Petrochemical Plants */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565be7bb385.96776264_20250820_060550.webp"
                  alt="Petrochemical Plants"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Petrochemical Plants
                </h3>
              </div>
            </div>
            
            {/* Panel 3: Chemical Processing Facilities */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a565ececd456.31764651_20250820_060636.webp"
                  alt="Chemical Processing Facilities"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-zul-green py-4">
                <h3 className="text-white font-bold text-center font-body">
                  Chemical Processing Facilities
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <h2 className="font-headline text-zul-grey-dark mb-6">
                Advanced Refining Chemical Solutions
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive range of refining chemicals is designed to optimize refinery operations, enhance product quality, and ensure operational efficiency. From crude oil processing to final product refinement, our solutions address the complex challenges faced by modern refineries.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With over 10+ years of experience in the industry, we provide innovative chemical solutions that improve yield, reduce energy consumption, and maintain the highest standards of safety and environmental compliance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zul-green rounded-full mr-3"></div>
                  <span className="text-gray-700">Enhanced crude oil desalting and desulfurization</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zul-green rounded-full mr-3"></div>
                  <span className="text-gray-700">Improved catalyst performance and longevity</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zul-green rounded-full mr-3"></div>
                  <span className="text-gray-700">Advanced corrosion inhibition and protection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-zul-green rounded-full mr-3"></div>
                  <span className="text-gray-700">Optimized heat transfer and fouling control</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a55c335d1b45.35797777_20250820_052507.webp"
                  alt="Refining Chemical Solutions"
                  className="w-full h-80 rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Method of Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Our Method of Work
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-zul-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-body font-semibold text-zul-grey-dark mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of refinery processes and chemical requirements
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-zul-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-body font-semibold text-zul-grey-dark mb-2">Solution Design</h3>
              <p className="text-gray-600 text-sm">
                Custom chemical formulations tailored to specific refinery needs
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-zul-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-body font-semibold text-zul-grey-dark mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Professional deployment and monitoring of chemical solutions
              </p>
            </div>
            
            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-zul-green rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-body font-semibold text-zul-grey-dark mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous improvement and performance enhancement
              </p>
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
