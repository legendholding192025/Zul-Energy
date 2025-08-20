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

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <section id="clients" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-zul-grey-dark mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
        {/* Infinite Scrolling Logo Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth">
              {duplicatedLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 p-3 sm:p-4 lg:p-6 flex items-center justify-center min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] min-h-[80px] sm:min-h-[90px] lg:min-h-[100px]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={50}
                    className="max-w-full max-h-full object-contain"
                    priority={index < 6} // Load first 6 logos with priority
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for seamless effect */}
          <div className="absolute left-0 top-0 w-16 sm:w-20 lg:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-20 lg:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Custom CSS for smooth infinite scroll */}
      <style jsx>{`
        @keyframes scroll-smooth {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-smooth {
          animation: scroll-smooth 12s linear infinite;
          will-change: transform;
        }
        
        /* Pause on hover for better UX */
        .animate-scroll-smooth:hover {
          animation-play-state: paused;
        }
        
        /* Ensure smooth animation on mobile */
        @media (max-width: 768px) {
          .animate-scroll-smooth {
            animation-duration: 8s;
          }
        }
      `}</style>
    </section>
  )
}

export default OurClients
