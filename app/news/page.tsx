"use client"

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NewsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      <section className="relative pt-24 pb-16 min-h-[50vh] bg-gradient-to-br from-zul-green to-zul-green-dark">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a5649f0a16b2.35673987_20250820_060103.webp")'
          }}
        >
        </div>
        
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-16">
            <h1 className="font-headline mb-0 text-white">
              Latest News
            </h1>
            <h2 className="font-headline mb-4 text-zul-yellow">
              And Updates
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            
            {/* Featured News - Left Side */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src="https://cdn.legendholding.com/images/cdn_686fae2d662f82.66311670_20250710_121229.jpg"
                    alt="Featured News - ZUL Energy Manufacturing Expansion"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-zul-green/10 text-zul-green px-4 py-2 rounded-full text-sm font-medium">
                      Featured Story
                    </span>
                    <span className="text-zul-grey-dark text-sm">07/09/2025</span>
                  </div>
                  <h3 className="text-3xl text-zul-grey-dark font-bold mb-6 leading-tight">
                    Legend Holding Group Unveils New Kaiyi Showroom in UAE
                  </h3>
                  <p className="text-zul-grey-dark text-lg leading-relaxed mb-6">
                  Legend Holding Group proudly announces the opening of its newest automotive destination, a state-of-the-art Kaiyi showroom under the Legend Motors Dealerships network. This launch marks a significant milestone in Kaiyi’s expansion in the UAE and reflects the brand’s dynamic evolution in design, technology, and customer experience.
                  </p>
                  <p className="text-zul-grey-dark text-lg leading-relaxed mb-8">
                    Located at the heart of the UAE’s automotive hub, the new showroom is more than a retail space; it is a bold expression of Kaiyi’s renewed brand philosophy. The showroom is designed to showcase the brand’s commitment to innovation, sustainability, and customer experience.
                  </p>
                                     <button className="bg-zul-green text-white px-6 py-3 rounded-xl font-semibold hover:bg-zul-green-dark transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                     Read Full Article →
                   </button>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="xl:col-span-1 space-y-8">
              
                             {/* Newsletter Subscription */}
               <div className="bg-gradient-to-br from-zul-green to-zul-green-dark rounded-2xl shadow-xl p-6 text-white sticky top-24">
                 <div className="text-center mb-6">
                   <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <h3 className="text-2xl font-bold mb-2">
                     Stay Updated
                   </h3>
                   <p className="text-white/90 text-base leading-relaxed">
                     Subscribe for latest industry insights and company updates delivered to your inbox.
                   </p>
                 </div>
                 <div className="space-y-4">
                   <input
                     type="email"
                     placeholder="Enter your email address"
                     className="w-full px-4 py-3 border border-white/30 rounded-xl bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-base"
                   />
                   <button className="w-full bg-zul-yellow text-zul-green px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                     Subscribe Now
                   </button>
                 </div>
               </div>

               {/* Latest News Section */}
               <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h4 className="text-2xl font-bold text-zul-grey-dark mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-zul-yellow rounded-full"></div>
                  Latest News
                </h4>
                <div className="space-y-6">
                  
                                                        {/* Latest News Card 1 */}
                   <div className="group cursor-pointer">
                     <div className="flex gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300">
                       <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden rounded-lg flex-shrink-0">
                         <img
                           src="https://cdn.legendholding.com/images/cdn_68a561d2b95ad5.26167432_20250820_054906.webp"
                           alt="Latest News 1"
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                         />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="text-zul-green text-xs font-medium mb-0.5">Dec 10, 2024</div>
                         <h5 className="text-zul-grey-dark font-semibold mb-0.5 leading-tight text-sm group-hover:text-zul-green transition-colors">
                           New Eco-Friendly Chemical Formulations
                         </h5>
                         <p className="text-zul-grey-dark text-xs leading-relaxed line-clamp-2">
                           Our R&D team develops breakthrough environmentally friendly solutions for offshore drilling operations.
                         </p>
                       </div>
                     </div>
                   </div>

                   {/* Latest News Card 2 */}
                   <div className="group cursor-pointer">
                     <div className="flex gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300">
                       <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden rounded-lg flex-shrink-0">
                         <img
                           src="https://cdn.legendholding.com/images/cdn_68a563173006d7.16515658_20250820_055431.webp"
                           alt="Latest News 2"
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                         />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="text-zul-green text-xs font-medium mb-0.5">Dec 5, 2024</div>
                         <h5 className="text-zul-grey-dark font-semibold mb-0.5 leading-tight text-sm group-hover:text-zul-green transition-colors">
                           Strategic Partnership with Global Energy Leaders
                         </h5>
                         <p className="text-zul-grey-dark text-xs leading-relaxed line-clamp-2">
                           ZUL Energy forms strategic partnerships with leading international energy companies.
                         </p>
                       </div>
                     </div>
                   </div>

                   {/* Latest News Card 3 */}
                   <div className="group cursor-pointer">
                     <div className="flex gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300">
                       <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden rounded-lg flex-shrink-0">
                         <img
                           src="https://cdn.legendholding.com/images/cdn_68a56344f16dc0.38864538_20250820_055516.webp"
                           alt="Latest News 3"
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                         />
                       </div>
                       <div className="flex-1 min-w-0">
                         <div className="text-zul-green text-xs font-medium mb-0.5">Nov 28, 2024</div>
                         <h5 className="text-zul-grey-dark font-semibold mb-0.5 leading-tight text-sm group-hover:text-zul-green transition-colors">
                           Advanced Drilling Technology Integration
                         </h5>
                         <p className="text-zul-grey-dark text-xs leading-relaxed line-clamp-2">
                           ZUL Energy integrates cutting-edge drilling technology with our chemical solutions.
                         </p>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Other News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-6 text-4xl md:text-5xl">
              More News & Updates
            </h2>
            <div className="w-32 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* News Item 1 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a561d2b95ad5.26167432_20250820_054906.webp"
                  alt="Sustainability News"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-zul-green text-sm font-medium">December 10, 2024</span>
                  <span className="w-2 h-2 bg-zul-green rounded-full"></span>
                  <span className="text-zul-grey-dark text-sm">Sustainability</span>
                </div>
                <h3 className="text-xl text-zul-grey-dark font-bold mb-3 group-hover:text-zul-green transition-colors">
                  New Eco-Friendly Chemical Formulations
                </h3>
                <p className="text-zul-grey-dark text-base leading-relaxed mb-4">
                  Our R&D team develops breakthrough environmentally friendly chemical solutions for offshore drilling operations.
                </p>
                <button className="text-zul-green hover:text-zul-green-dark font-semibold text-base group-hover:translate-x-2 transition-all duration-300">
                  Read More →
                </button>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a563173006d7.16515658_20250820_055431.webp"
                  alt="Industry Partnership News"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-zul-green text-sm font-medium">December 5, 2024</span>
                  <span className="w-2 h-2 bg-zul-green rounded-full"></span>
                  <span className="text-zul-grey-dark text-sm">Partnerships</span>
                </div>
                <h3 className="text-xl text-zul-grey-dark font-bold mb-3 group-hover:text-zul-green transition-colors">
                  Strategic Partnership with Global Energy Leaders
                </h3>
                <p className="text-zul-grey-dark text-base leading-relaxed mb-4">
                  ZUL Energy forms strategic partnerships with leading international energy companies to expand market presence.
                </p>
                <button className="text-zul-green hover:text-zul-green-dark font-semibold text-base group-hover:translate-x-2 transition-all duration-300">
                  Read More →
                </button>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                <img
                  src="https://cdn.legendholding.com/images/cdn_68a56344f16dc0.38864538_20250820_055516.webp"
                  alt="Technology Innovation News"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-zul-green text-sm font-medium">November 28, 2024</span>
                  <span className="w-2 h-2 bg-zul-green rounded-full"></span>
                  <span className="text-zul-grey-dark text-sm">Technology</span>
                </div>
                <h3 className="text-xl text-zul-grey-dark font-bold mb-3 group-hover:text-zul-green transition-colors">
                  Advanced Drilling Technology Integration
                </h3>
                <p className="text-zul-grey-dark text-base leading-relaxed mb-4">
                  ZUL Energy integrates cutting-edge drilling technology with our chemical solutions for enhanced performance.
                </p>
                <button className="text-zul-green hover:text-zul-green-dark font-semibold text-base group-hover:translate-x-2 transition-all duration-300">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
