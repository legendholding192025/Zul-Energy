"use client"

import React, { useState, useEffect } from 'react'

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const caseStudies = [
    {
      id: 1,
      title: "Drilling Fluids Chemicals",
      description: "A customer had an issue improving drill mud performance, due to instability and fluid loss causing high downtime, as Zul Energy custom additive package to stabilize shale and control viscosity, which had an impact 35% less fluid loss | 2.5 days less NPT"
    },
    {
      id: 2,
      title: "Completion Fluids Chemicals",
      description: "A customer had an area of improvement to eliminate Formation damage from existing completion fluids, as Zul Energy Low-solids, high-lubricity additive with advanced fluid loss control offered to the location, which resulted 18% higher production Zero formation damage No remedial acidizing"
    },
    {
      id: 3,
      title: "Stimulation Chemicals",
      description: "Customer experienced Poor acid penetration in carbonate reservoirs, as Zul Energy offered stimulation chemicals, by Acidizing blend with corrosion inhibitor, iron control, and diverter, resulting 40% deeper penetration 22% more production 50% less corrosion"
    },
    {
      id: 4,
      title: "Cementing Chemicals",
      description: "Customer experienced Gas migration compromising well integrity during cementing operations, As Zul Energy developed Gas-blocking and retarder additives for deepwater cement jobs, as it resulted Zero gas migration | Strong bond achieved"
    },
    {
      id: 5,
      title: "Production & Treatment Chemicals",
      description: "Customer experienced Frequent wax build-up in subsea pipelines, as Zul Energy site visit, they offered Pour point depressant and dispersant, continuous injection, which resulted Pigging reduction 4x lower"
    }
  ]

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const getVisibleCards = () => {
    const cards = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % caseStudies.length
      cards.push(caseStudies[index])
    }
    return cards
  }

  const getMobileCards = () => {
    return [caseStudies[currentIndex]]
  }

  const getTabletCards = () => {
    const cards = []
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i) % caseStudies.length
      cards.push(caseStudies[index])
    }
    return cards
  }

  return (
    <section id="case-studies" className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-zul-grey-dark mb-4">
            Case Studies
          </h2>
          <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative mx-auto max-w-6xl">
          <div className="overflow-hidden">
            {/* Mobile: 1 card */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 gap-4 px-4 min-h-[400px]">
                {getMobileCards().map((study, index) => (
                  <div 
                    key={`${study.id}-${currentIndex}`}
                    className="transform transition-all duration-500 ease-in-out"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[380px] border border-gray-100 flex flex-col">
                      {/* Image */}
                      <div className="h-40 rounded-t-xl overflow-hidden flex-shrink-0">
                        <img
                          src="https://cdn.legendholding.com/images/cdn_6846a1dd7894d5.04152247_20250609_085701.jpg"
                          alt="Case Study"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-subhead text-zul-green mb-3 text-sm flex-shrink-0">
                          {study.title}
                        </h3>
                        <p className="font-body text-zul-grey-dark leading-relaxed text-xs flex-1 overflow-hidden">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet: 2 cards */}
            <div className="hidden md:block lg:hidden">
              <div className="grid grid-cols-2 gap-4 px-4 min-h-[450px]">
                {getTabletCards().map((study, index) => (
                  <div 
                    key={`${study.id}-${currentIndex}`}
                    className="transform transition-all duration-500 ease-in-out"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[420px] border border-gray-100 flex flex-col">
                      {/* Image */}
                      <div className="h-44 rounded-t-xl overflow-hidden flex-shrink-0">
                        <img
                          src="https://cdn.legendholding.com/images/cdn_6846a1dd7894d5.04152247_20250609_085701.jpg"
                          alt="Case Study"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h3 className="font-subhead text-zul-green mb-3 text-sm flex-shrink-0">
                          {study.title}
                        </h3>
                        <p className="font-body text-zul-grey-dark leading-relaxed text-xs flex-1 overflow-hidden">
                          {study.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
        </div>
        
            {/* Desktop: 3 cards */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-3 gap-6 min-h-[500px]">
                {getVisibleCards().map((study, index) => (
                  <div 
                    key={`${study.id}-${currentIndex}`}
                    className="transform transition-all duration-500 ease-in-out"
                    style={{
                      transform: index === 0 ? 'translateX(0)' : 
                                index === 1 ? 'translateX(0)' : 
                                'translateX(0)',
                      opacity: 1
                    }}
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[480px] border border-gray-100 flex flex-col">
                      {/* Image */}
                      <div className="h-48 rounded-t-xl overflow-hidden flex-shrink-0">
                        <img
                          src="https://cdn.legendholding.com/images/cdn_6846a1dd7894d5.04152247_20250609_085701.jpg"
                          alt="Case Study"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-subhead text-zul-green mb-4 text-base flex-shrink-0">
                          {study.title}
                </h3>
                        <p className="font-body text-zul-grey-dark leading-relaxed text-sm flex-1 overflow-hidden">
                          {study.description}
                </p>
                </div>
              </div>
            </div>
          ))}
        </div>
            </div>
          </div>
          
          {/* Navigation Arrows - Responsive */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-8 lg:-translate-x-12 bg-white hover:bg-gray-50 text-zul-grey-dark p-2 md:p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110 border border-gray-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-8 lg:translate-x-12 bg-white hover:bg-gray-50 text-zul-grey-dark p-2 md:p-3 rounded-full shadow-lg z-20 transition-all hover:scale-110 border border-gray-200"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex 
                  ? 'bg-zul-green w-10 h-3' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
