import React from 'react'

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-zul-green relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-headline text-white mb-4">
            Why Us
          </h2>
          {/* Yellow underline */}
          <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Performance */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_683e9dd2a74833.63027495_20250603_070138.jpg"
                  alt="Performance"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-subhead text-white">
              Performance
            </h3>
          </div>

          {/* Reliability */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_683e9ef4bd30c8.05897688_20250603_070628.jpg"
                  alt="Reliability"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-subhead text-white">
              Reliability
            </h3>
          </div>

          {/* Compliance (ISO) */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_683e9c69623805.82335206_20250603_065537.jpg"
                  alt="Compliance (ISO)"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-subhead text-white">
              Compliance (ISO)
            </h3>
          </div>

          {/* Local Manufacturing */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_6846a246859468.98501177_20250609_085846.jpg"
                  alt="Local Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-subhead text-white">
              Local Manufacturing
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
