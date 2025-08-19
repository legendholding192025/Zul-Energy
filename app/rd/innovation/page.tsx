import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function InnovationPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-32 min-h-[70vh] bg-gradient-to-br from-zul-green to-zul-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-16">
            <h1 className="font-headline mb-4">
              R&D AND
            </h1>
            <h2 className="font-headline mb-4 text-zul-yellow">
              LABORATORY
            </h2>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* In-house Laboratory Testing */}
            <div className="text-center">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a2f85624b3b8.28018141_20250818_095430.webp" 
                  alt="Oil drilling rig at sunset" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-zul-green mb-2 font-semibold">
                In-house Laboratory Testing
              </h3>
              <p className="text-zul-grey-dark text-xs">
                Advanced equipment to replicate downhole conditions (temperature, pressure, salinity)
              </p>
            </div>
            
            {/* Custom Formulation */}
            <div className="text-center">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp" 
                  alt="Oil pumpjack in snowy landscape" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-zul-green mb-2 font-semibold">
                Custom Formulation
              </h3>
              <p className="text-zul-grey-dark text-xs">
                Developing chemicals suited to unique field challenges
              </p>
            </div>
            
            {/* Field Simulation */}
            <div className="text-center">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a2f85624b3b8.28018141_20250818_095430.webp" 
                  alt="Offshore oil rig in ocean" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-zul-green mb-2 font-semibold">
                Field Simulation
              </h3>
              <p className="text-zul-grey-dark text-xs">
                Testing in controlled environments before deployment
              </p>
            </div>
            
            {/* Rapid Response */}
            <div className="text-center">
              <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp" 
                  alt="Underwater pipeline on seabed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg text-zul-green mb-2 font-semibold">
                Rapid Response
              </h3>
              <p className="text-zul-grey-dark text-xs">
                Fast turnaround for urgent operational needs
              </p>
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
                    <span className="block lg:hidden">Develop prototype solutions<br />and test in lab/field</span>
                    <span className="hidden lg:block">Develop prototype solutions and test in lab/field</span>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center relative">
              <img 
                src="/logo/benefits.png" 
                alt="Customer Benefits" 
                className="w-full h-56 sm:h-56 md:h-64 lg:h-72 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words -mt-11 -ml-12 sm:-mt-8 sm:-ml-9 lg:-mt-10 lg:-ml-12">
                  <p className="text-[clamp(9px,3vw,12px)] sm:text-sm lg:text-xs text-zul-grey-dark font-semibold">
                    <span className="block lg:hidden">Faster response to<br />operational challenges</span>
                    <span className="hidden lg:block">Faster response to<br />operational challenges</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center relative">
              <img 
                src="/logo/benefits.png" 
                alt="Customer Benefits" 
                className="w-full h-56 sm:h-56 md:h-64 lg:h-72 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words -mt-11 -ml-12 sm:-mt-8 sm:-ml-9 lg:-mt-10 lg:-ml-12">
                  <p className="text-[clamp(9px,3vw,12px)] sm:text-sm lg:text-xs text-zul-grey-dark font-semibold">
                    <span className="block lg:hidden">Reduced downtime<br />& NPT</span>
                    <span className="hidden lg:block">Reduced downtime<br />& NPT</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center relative">
              <img 
                src="/logo/benefits.png" 
                alt="Customer Benefits" 
                className="w-full h-56 sm:h-56 md:h-64 lg:h-72 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words -mt-11 -ml-12 sm:-mt-8 sm:-ml-9 lg:-mt-10 lg:-ml-12">
                  <p className="text-[clamp(9px,3vw,12px)] sm:text-sm lg:text-xs text-zul-grey-dark font-semibold">
                    <span className="block lg:hidden">Increased well<br />performance and<br />productivity</span>
                    <span className="hidden lg:block">Increased well<br />performance and<br />productivity</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center relative">
              <img 
                src="/logo/benefits.png" 
                alt="Customer Benefits" 
                className="w-full h-56 sm:h-56 md:h-64 lg:h-72 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words -mt-11 -ml-12 sm:-mt-8 sm:-ml-9 lg:-mt-10 lg:-ml-12">
                  <p className="text-[clamp(9px,3vw,12px)] sm:text-sm lg:text-xs text-zul-grey-dark font-semibold">
                    <span className="block lg:hidden">Cost savings per<br />barrel produced</span>
                    <span className="hidden lg:block">Cost savings per<br />barrel produced</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center relative">
              <img 
                src="/logo/benefits.png" 
                alt="Customer Benefits" 
                className="w-full h-56 sm:h-56 md:h-64 lg:h-72 object-contain"
              />
              <div className="absolute inset-0 grid place-items-center p-2 sm:p-4 lg:p-6">
                <div className="max-w-[70%] sm:max-w-[80%] px-2 text-center leading-tight break-words -mt-11 -ml-12 sm:-mt-8 sm:-ml-9 lg:-mt-10 lg:-ml-12">
                  <p className="text-[clamp(9px,3vw,12px)] sm:text-sm lg:text-xs text-zul-grey-dark font-semibold">
                    Lower HSE risks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
