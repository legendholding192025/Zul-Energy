import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RDPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 min-h-[80vh] bg-gradient-to-br from-zul-green to-zul-green-dark">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a5676a4b2db6.53893410_20250820_061258.webp")'
          }}
        >
        </div>
        
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-16">
            <h1 className="font-headline mb-0 text-white">R&D AND</h1>
            <h2 className="font-headline mb-4 text-zul-yellow">LABORATORY</h2>
          </div>
        </div>
      </section>

      {/* R&D Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
                R&D Capabilities
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* In-house Laboratory Testing */}
                         <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[380px] border border-gray-100 flex flex-col">
              {/* Image */}
              <div className="h-64 rounded-t-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a5617350c1c8.45219062_20250820_054731.webp" 
                  alt="In-house Laboratory Testing" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-subhead text-zul-green mb-2 text-base flex-shrink-0">
                  In-house Laboratory Testing
                </h3>
                <p className="font-body text-zul-grey-dark leading-relaxed text-sm flex-1 overflow-hidden">
                  Advanced equipment to replicate downhole conditions (temperature, pressure, salinity)
                </p>
              </div>
            </div>
            
            {/* Custom Formulation */}
                         <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[380px] border border-gray-100 flex flex-col">
              {/* Image */}
              <div className="h-64 rounded-t-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a561d2b95ad5.26167432_20250820_054906.webp" 
                  alt="Custom Formulation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-subhead text-zul-green mb-2 text-base flex-shrink-0">
                  Custom Formulation
                </h3>
                <p className="font-body text-zul-grey-dark leading-relaxed text-sm flex-1 overflow-hidden">
                  Developing chemicals suited to unique field challenges
                </p>
              </div>
            </div>
            
            {/* Field Simulation */}
                         <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[380px] border border-gray-100 flex flex-col">
              {/* Image */}
              <div className="h-64 rounded-t-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a563173006d7.16515658_20250820_055431.webp" 
                  alt="Field Simulation" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-subhead text-zul-green mb-2 text-base flex-shrink-0">
                  Field Simulation
                </h3>
                <p className="font-body text-zul-grey-dark leading-relaxed text-sm flex-1 overflow-hidden">
                  Testing in controlled environments before deployment
                </p>
              </div>
            </div>
            
            {/* Rapid Response */}
                         <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-[380px] border border-gray-100 flex flex-col">
              {/* Image */}
              <div className="h-64 rounded-t-xl overflow-hidden flex-shrink-0">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a56344f16dc0.38864538_20250820_055516.webp" 
                  alt="Rapid Response" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-subhead text-zul-green mb-2 text-base flex-shrink-0">
                  Rapid Response
                </h3>
                <p className="font-body text-zul-grey-dark leading-relaxed text-sm flex-1 overflow-hidden">
                  Fast turnaround for urgent operational needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method of Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Method of Work
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {/* Sample Collection & Analysis */}
            <div className="text-center relative">
              <img 
                src="/logo/method.png" 
                alt="Method of Work" 
                className="w-full h-48 sm:h-48 md:h-56 lg:h-64 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words mt-4 lg:mt-5">
                  <h3 className="text-[clamp(10px,3.2vw,12px)] sm:text-sm lg:text-sm text-zul-green font-semibold mb-1 sm:mb-2">
                    <span className="block lg:hidden">Sample Collection<br />& Analysis</span>
                    <span className="hidden lg:block">Sample Collection & Analysis</span>
                  </h3>
                  <p className="text-[clamp(9px,3vw,12px)] text-zul-grey-dark">
                    <span className="block lg:hidden">Collect fluids and formation<br />samples from the site</span>
                    <span className="hidden lg:block">Collect fluids and formation samples from the site</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Problem Identification */}
            <div className="text-center relative">
              <img 
                src="/logo/method.png" 
                alt="Method of Work" 
                className="w-full h-48 sm:h-48 md:h-56 lg:h-64 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words mt-4 lg:mt-5">
                  <h3 className="text-[clamp(10px,3.2vw,12px)] sm:text-sm lg:text-sm text-zul-green font-semibold mb-1 sm:mb-2">
                    <span className="block lg:hidden">Problem<br />Identification</span>
                    <span className="hidden lg:block">Problem Identification</span>
                  </h3>
                  <p className="text-[clamp(9px,3vw,12px)] text-zul-grey-dark">
                    <span className="block lg:hidden">Evaluate mud weight,<br />rheology, and fluid limits</span>
                    <span className="hidden lg:block">Evaluate mud weight, rheology, and fluid limits</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Formulation & Testing */}
            <div className="text-center relative">
              <img 
                src="/logo/method.png" 
                alt="Method of Work" 
                className="w-full h-48 sm:h-48 md:h-56 lg:h-64 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words mt-4 lg:mt-5">
                  <h3 className="text-[clamp(10px,3.2vw,12px)] sm:text-sm lg:text-sm text-zul-green font-semibold mb-1 sm:mb-2">
                    <span className="block lg:hidden">Formulation &<br />Testing</span>
                    <span className="hidden lg:block">Formulation & Testing</span>
                  </h3>
                  <p className="text-[clamp(9px,3vw,12px)] text-zul-grey-dark">
                    <span className="block lg:hidden">Develop prototype solutions<br />and test in lab-field</span>
                    <span className="hidden lg:block">Develop prototype solutions and test in lab-field</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Pilot Application */}
            <div className="text-center relative">
              <img 
                src="/logo/method.png" 
                alt="Method of Work" 
                className="w-full h-48 sm:h-48 md:h-56 lg:h-64 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words mt-4 lg:mt-5">
                  <h3 className="text-[clamp(10px,3.2vw,12px)] sm:text-sm lg:text-sm text-zul-green font-semibold mb-1 sm:mb-2">
                    <span className="block lg:hidden">Pilot<br />Application</span>
                    <span className="hidden lg:block">Pilot Application</span>
                  </h3>
                  <p className="text-[clamp(9px,3vw,12px)] text-zul-grey-dark">
                    <span className="block lg:hidden">Controlled field trials<br />with operator feedback</span>
                    <span className="hidden lg:block">Controlled field trials with operator feedback</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Optimization & Scale-up */}
            <div className="text-center relative">
              <img 
                src="/logo/method.png" 
                alt="Method of Work" 
                className="w-full h-48 sm:h-48 md:h-56 lg:h-64 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words mt-4 lg:mt-5">
                  <h3 className="text-[clamp(10px,3.2vw,12px)] sm:text-sm lg:text-sm text-zul-green font-semibold mb-1 sm:mb-2">
                    <span className="block lg:hidden">Optimization &<br />Scale-up</span>
                    <span className="hidden lg:block">Optimization &<br />Scale-up</span>
                  </h3>
                  <p className="text-[clamp(9px,3vw,12px)] text-zul-grey-dark">
                    <span className="block lg:hidden">Refine and mass-produce<br />proven formulations</span>
                    <span className="hidden lg:block">Refine and mass-produce proven formulations</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Customer Benefits
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Five Cards Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1: Faster Response */}
            <div className="bg-zul-green p-6 rounded-lg text-center flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-lg text-white font-bold mb-2">
                Faster Response
              </h3>
              <p className="text-white text-sm">
                Faster response to operational challenges
              </p>
            </div>
            
            {/* Card 2: Reduced Downtime */}
            <div className="bg-white border border-zul-grey-dark p-6 rounded-lg text-center flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-zul-green cursor-pointer">
              <h3 className="text-lg text-zul-green font-bold mb-2">
                Reduced Downtime
              </h3>
              <p className="text-zul-grey-dark text-sm">
                Reduced downtime & NPT
              </p>
            </div>
            
            {/* Card 3: Increased Performance */}
            <div className="bg-zul-grey-dark p-6 rounded-lg text-center flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-lg text-white font-bold mb-2">
                Increased Performance
              </h3>
              <p className="text-white text-sm">
                Increased well performance and productivity
              </p>
            </div>
            
            {/* Card 4: Cost Savings */}
            <div className="bg-zul-yellow p-6 rounded-lg text-center flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-lg text-zul-grey-dark font-bold mb-2">
                Cost Savings
              </h3>
              <p className="text-zul-grey-dark text-sm">
                Cost savings per barrel produced
              </p>
            </div>
            
            {/* Card 5: Lower HSE Risks */}
            <div className="bg-zul-green p-6 rounded-lg text-center flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
              <h3 className="text-lg text-white font-bold mb-2">
                Lower HSE Risks
              </h3>
              <p className="text-white text-sm">
                Lower HSE risks
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
