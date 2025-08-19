import React from 'react'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import ContactUs from '../../../components/ContactUs'
import Footer from '../../../components/Footer'

export default function CementingAdditivesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      <section id="home" className="bg-gradient-to-r from-zul-green to-primary-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-56">
        <div className="text-left">
          <h1 className="font-headline mb-4">
            DRILLING MUD CHEMICALS
          </h1>
          <h2 className="font-headline mb-4 text-zul-yellow">
            OPTIMIZED PERFORMANCE
          </h2>
          <p className="font-headline mb-4 text-zul-yellow">
            FOR EFFICIENT
          </p>
          <p className="font-headline mb-8">
            SAFE DRILLING OPERATIONS
          </p>
          <button className="bg-zul-yellow text-white px-8 py-3 rounded-lg font-body font-medium hover:bg-yellow-400 transition-colors">
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
             {/* Panel 1: Drilling Contractors */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                 
               </div>
               <div className="bg-zul-green py-4">
                 <h3 className="text-white font-bold text-center font-body">
                   Drilling Contractors
                 </h3>
               </div>
             </div>
             
             {/* Panel 2: Oil Field Service Companies */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
               </div>
               <div className="bg-zul-green py-4">
                 <h3 className="text-white font-bold text-center font-body">
                   Oil Field Service Companies
                 </h3>
               </div>
             </div>
             
             {/* Panel 3: E&P Companies */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
               <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                 
               </div>
               <div className="bg-zul-green py-4">
                 <h3 className="text-white font-bold text-center font-body">
                   E&P Companies
                 </h3>
               </div>
             </div>
           </div>
         </div>
       </section>

       <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-zul-black mb-4">
            Product
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
                      <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="font-subhead text-zul-green mb-6">
                      Drilling Mud Chemicals
                    </h3>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                is an additive for improving drill mud performance, caused by instability and fluid loss, as Zul Energy custom additive package to stabilize shale and control viscosity, which improves an impact by less fluid loss on average of 30%, prevent corrosion and lubricate drill bits.
              </p>
            </div>
          </div>
        </div>
             </div>
     </section>

                                                                                               {/* New Section with CDN Image */}
         <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-24">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Method of Work
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="flex justify-center mb-16">
           <div className="relative">
             {/* R&D Formulation - Top Right */}
             <div className="absolute -top-16 -right-12 md:-top-16 md:-right-20 lg:-top-20 lg:-right-28 text-right max-w-24 md:max-w-40">
               <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">R&D Formulation</h4>
               <p className="text-[10px] md:text-xs text-zul-grey-dark">Develop solutions based on mud properties, required mud weight, and fluid loss limits</p>
             </div>

             {/* Mud Testing - Right Side */}
             <div className="absolute top-2/3 -right-16 md:top-2/3 md:-right-28 lg:-right-36 text-right max-w-24 md:max-w-40">
               <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Mud Testing</h4>
               <p className="text-[10px] md:text-xs text-zul-grey-dark">Mud Conditioning & Testing / Prepare and evaluate formulations at the mud plant or rig site</p>
             </div>

             {/* Tailor-Made Production - Bottom */}
             <div className="absolute -bottom-24 md:-bottom-28 lg:-bottom-32 left-1/2 transform -translate-x-1/2 text-center max-w-24 md:max-w-40">
               <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Tailor-Made Production</h4>
               <p className="text-[10px] md:text-xs text-zul-grey-dark">Manufacture customized chemical blends to meet specific customer requirements</p>
             </div>

             {/* Q&A Improvement - Left Side */}
             <div className="absolute top-2/3 -left-16 md:top-2/3 md:-left-28 lg:-left-36 text-left max-w-24 md:max-w-40">
               <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Q&A Improvement</h4>
               <p className="text-[10px] md:text-xs text-zul-grey-dark">Quality Control & Continuous Improvement / Monitor performance during operations and refine as needed for optimal results</p>
             </div>

             {/* Plant Visit - Top Left */}
             <div className="absolute -top-16 -left-12 md:-top-16 md:-left-20 lg:-top-20 lg:-left-28 text-left max-w-24 md:max-w-40">
               <h4 className="hidden md:block text-xs md:text-sm font-medium text-zul-green mb-1">Plant Visit</h4>
               <p className="text-[10px] md:text-xs text-zul-grey-dark">Site Visit & Sample Collection / Assess operational conditions and collect representative mud samples</p>
             </div>

             <img 
               src="https://cdn.legendholding.com/images/cdn_68a310e295aa74.07885346_20250818_113914.webp"
               alt="Drilling Mud Chemicals Product"
               className="max-w-full h-auto rounded-lg object-contain max-h-[250px] md:max-h-[400px] lg:max-h-[600px]"
               loading="eager"
             />
           </div>
         </div>
       </div>
     </section>

      <ContactUs />
      <Footer />
    </main>
  )
}
