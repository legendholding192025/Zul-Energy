"use client"

import React from 'react'
import Image from 'next/image'

const OurClients = () => {
  const logos = [
    { src: "/logo/logo-01.svg", alt: "Client Logo 1" },
    { src: "/logo/logo-02.svg", alt: "Client Logo 2" },
    { src: "/logo/logo-03.svg", alt: "Client Logo 3" },
    { src: "/logo/logo-04.svg", alt: "Client Logo 4" },
    { src: "/logo/logo-05.svg", alt: "Client Logo 5" },
    { src: "/logo/logo-06.svg", alt: "Client Logo 6" },
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section id="clients" className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-zul-grey-dark mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
        {/* Moving Logo Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-48 h-24 mx-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 12s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default OurClients
