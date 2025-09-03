import React from 'react'
import Link from 'next/link'

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-zul-grey-dark mb-4">
            Solutions
          </h2>
          {/* Yellow underline */}
          <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
        <div className="space-y-16">
                          {/* DrillingMudChemicals Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Image - Left Side */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative">
                      <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                        <img
                          src="https://cdn.legendholding.com/images/cdn_68a55d78eab5e0.45150741_20250820_053032.webp"
                          alt="Drilling Mud Chemicals"
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
                Engineered formulations to optimize drilling fluid performance and ensure efficient, safe wellbore operations.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Control viscosity, density, and rheology for stable circulation
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Reduce fluid loss and stabilize reactive shale formations
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Lubricate drill bits and drilling strings to minimize wear
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Prevent corrosion of downhole tools and casing
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Drilling contractors, oilfield service companies, E&P operators.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/drilling-fluid-chemicals/water-based-mud-additives"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Oil Based Mud Additives Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Image - Right Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp"
                    alt="Oil Based Mud Additives"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Oil Based Mud Additives
              </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Advanced oil-based drilling fluid additives designed for challenging drilling environments, providing superior performance in high-temperature and high-pressure conditions.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Superior shale inhibition and wellbore stability
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Excellent thermal stability in high-temperature environments
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Enhanced lubricity for reduced torque and drag
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Improved drilling efficiency and rate of penetration
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Drilling contractors, oilfield service companies, E&P operators in challenging environments.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/drilling-fluid-chemicals/oil-based-mud-additives"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Completion Fluids Additives Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55e06bcaa45.21764780_20250820_053254.webp"
                    alt="Completion Fluids Additives"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Completion Fluids Additives
              </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Advanced chemical solutions designed to optimize completion fluid performance and ensure successful well completion operations.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Enhance fluid stability and compatibility with formation fluids
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Improve wellbore cleaning and debris removal efficiency
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Optimize fluid rheology for various completion techniques
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Minimize formation damage and maintain permeability
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Completion service providers, well intervention teams, production engineers.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/completion-fluids-additives"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Stimulation Chemicals Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Image - Right Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55e2bda07d8.54791929_20250820_053331.webp"
                    alt="Stimulation Chemicals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Stimulation Chemicals
              </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                High-performance chemical solutions for well stimulation to enhance production and maximize reservoir recovery.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Enhance acid penetration and dissolution efficiency
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Control reaction rates for optimal stimulation results
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Prevent corrosion and scale formation in wellbore
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Improve fracture conductivity and production enhancement
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Stimulation service providers, production optimization teams, reservoir engineers.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/stimulation-chemicals"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Cementing Additives Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55dcf0f9b39.36102089_20250820_053159.webp"
                    alt="Cementing Additives"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Cementing Additives
              </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Specialized chemical solutions to enhance cement slurry performance and maintain long-term well integrity.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Control cement setting time for various operational needs
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Improve compressive strength and bonding with casing and formation
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Prevent gas migration and channeling during setting
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Enhance zonal isolation and durability of the cement sheath
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Cementing service providers, drilling contractors, well integrity teams.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/cementing-additives"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>         

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Production Chemicals Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Image - Right Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55e5cd63997.17536611_20250820_053420.webp"
                    alt="Production Chemicals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Production Chemicals
              </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Comprehensive chemical solutions to maintain optimal production rates and ensure long-term well performance.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Control paraffin and asphaltene deposition in production tubing
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Prevent scale formation and maintain flow assurance
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Enhance oil-water separation and emulsion breaking
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Optimize production rates and reduce operational costs
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Production operators, flow assurance teams, maintenance engineers.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/production-chemicals"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Water Treatment Chemicals Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55e06bcaa45.21764780_20250820_053254.webp"
                    alt="Water Treatment Chemicals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Water Treatment Chemicals
                </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Comprehensive range of industrial water treatment chemicals to protect systems and meet regulatory requirements.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Control scaling, fouling, and corrosion in water systems
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide microbial control with biocides and disinfectants
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Optimize performance of boilers, cooling towers, and injection systems
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ensure compliance with environmental discharge standards
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                  Industrial facility operators, utilities, water treatment contractors, oil & gas processing plants
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/upstream-chemicals/water-treatment-chemicals"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
              </div>
            </div>

          {/* Yellow separator line */}
          <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Refining Chemicals Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Image - Right Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55c335d1b45.35797777_20250820_052507.webp"
                    alt="Refining Chemicals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Left Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Refining Chemicals
              </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Advanced chemical solutions designed to optimize refinery operations, enhance product quality, and ensure operational efficiency across all refining processes.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Enhanced crude oil desalting and desulfurization processes
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Improved catalyst performance and longevity
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Advanced corrosion inhibition and protection systems
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                     Optimized heat transfer and fouling control
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                   Refineries, petrochemical plants, chemical processing facilities.
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/downstream-chemicals/refining-chemicals"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
            </div>
          </div>

           {/* Yellow separator line */}
           <div className="w-full h-px bg-zul-yellow my-8"></div>

          {/* Water Treatment Chemicals Section */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image - Left Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_68a55e06bcaa45.21764780_20250820_053254.webp"
                    alt="Water Treatment Chemicals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Content - Right Side */}
            <div className="w-full lg:w-1/2">
              <h3 className="font-subhead text-zul-green mb-6">
                Water Treatment Chemicals
                </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Comprehensive range of industrial water treatment chemicals to protect systems and meet regulatory requirements.
              </p>
              
                <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-3">Benefits</h4>
                 <ul className="space-y-2">
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Control scaling, fouling, and corrosion in water systems
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provide microbial control with biocides and disinfectants
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Optimize performance of boilers, cooling towers, and injection systems
                   </li>
                   <li className="font-body text-zul-grey-dark flex items-start">
                     <span className="w-2 h-2 bg-zul-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Ensure compliance with environmental discharge standards
                   </li>
                 </ul>
               </div>
               
               <div className="mb-6">
                 <h4 className="font-body helvetica-bold text-zul-green mb-2">Uses</h4>
                 <p className="font-body text-zul-grey-dark">
                  Industrial facility operators, utilities, water treatment contractors, oil & gas processing plants
                 </p>
               </div>
               
               <div className="mt-auto">
                 <Link 
                   href="/products&services/downstream-chemicals/water-treatment-chemicals"
                   className="inline-flex items-center px-4 py-2 bg-zul-green text-white text-sm font-body helvetica-bold rounded-lg hover:bg-zul-green-dark transition-colors duration-300"
                 >
                   Learn More
                 </Link>
               </div>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  )
}

export default Solutions
