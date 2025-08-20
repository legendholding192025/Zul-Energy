import React from 'react'

const WhyUs = () => {
  return (
    <section id="why-us" className="py-20 bg-zul-green relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a4821ed27210.20884102_20250819_135438.webp")'
        }}
      ></div>
      
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
                  src="https://cdn.legendholding.com/images/cdn_68a56f5396c753.74115752_20250820_064643.webp"
                  alt="Performance"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h3 className="font-body text-white text-xl">
              Performance
            </h3>
          </div>

          {/* Reliability */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a55c335d1b45.35797777_20250820_052507.webp"
                  alt="Reliability"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h3 className="font-body text-white text-xl">
              Reliability
            </h3>
          </div>

          {/* Compliance (ISO) */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a55cb497ddc2.47773592_20250820_052716.webp"
                  alt="Compliance (ISO)"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h3 className="font-body text-white text-xl">
              Compliance (ISO)
            </h3>
          </div>

          {/* Local Manufacturing */}
          <div className="text-center">
            <div className="relative mb-4">
              <div className="w-full h-80 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-[3.5rem] overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a2f85624b3b8.28018141_20250818_095430.webp"
                  alt="Local Manufacturing"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <h3 className="font-body text-white text-xl">
              Local Manufacturing
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
