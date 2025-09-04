"use client"

import React, { useState, useEffect, useRef } from 'react'

const Capabilities = () => {
  const [counts, setCounts] = useState({
    rakPlanet: 0,
    productionCapacity: 0,
    manpower: 0,
    clients: 0
  })
  
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounts()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounts = () => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        rakPlanet: Math.floor(700 * progress),
        productionCapacity: Math.floor(6000 * progress),
        manpower: Math.floor(200 * progress),
        clients: Math.floor(50 * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        // Set final values to ensure accuracy
        setCounts({
          rakPlanet: 700,
          productionCapacity: 6000,
          manpower: 200,
          clients: 50
        })
      }
    }, stepDuration)
  }

  return (
    <section id="capabilities" className="py-12 sm:py-16 md:py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-headline text-zul-grey-dark mb-4 font-bold">
            Capabilities
          </h2>
          {/* Yellow underline */}
          <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
        {/* Stats section - matching the image design */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-center">
          {/* RAK Planet */}
          <div>
            <div className="text-sm sm:text-base text-zul-grey-dark font-semibold mb-2">
              RAK Planet
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zul-green mb-2">
              +{counts.rakPlanet}K
            </div>
            <div className="text-sm sm:text-base text-zul-yellow font-semibold">
              SQFT. Facility
            </div>
          </div>

          {/* Production capacity */}
          <div>
            <div className="text-sm sm:text-base text-zul-grey-dark font-semibold mb-2">
              Production capacity
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zul-green mb-2">
              {counts.productionCapacity.toLocaleString()}
            </div>
            <div className="text-sm sm:text-base text-zul-yellow font-semibold">
              55-Gal Drums/Month
            </div>
          </div>

          {/* Manpower */}
          <div>
            <div className="text-sm sm:text-base text-zul-grey-dark font-semibold mb-2">
              Manpower
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zul-green mb-2">
              +{counts.manpower}
            </div>
            <div className="text-sm sm:text-base text-zul-yellow font-semibold">
              Employees
            </div>
          </div>

          {/* Clients */}
          <div>
            <div className="text-sm sm:text-base text-zul-grey-dark font-semibold mb-2">
              Clients
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zul-green mb-2">
              +{counts.clients}
            </div>
            <div className="text-sm sm:text-base text-zul-yellow font-semibold">
              Employees
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities
