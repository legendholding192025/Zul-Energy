'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const Header = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Header hide/show on scroll functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header className={`bg-white shadow-md fixed top-0 left-0 right-0 z-50 border-b-4 border-zul-yellow transition-transform duration-300 ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                     {/* Logo */}
           <div className="flex justify-start lg:w-0 lg:flex-1">
                           <img 
                src="/logo/ZUL_LOGO_HEADER.svg" 
                alt="ZUL ENERGY Logo" 
                className="h-12 w-auto cursor-pointer"
                onClick={() => window.location.href = '/'}
              />
           </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
                                      {/* Solutions Dropdown */}
                           <div 
                             className="relative group"
                             onMouseEnter={() => setIsSolutionsOpen(true)}
                             onMouseLeave={() => setIsSolutionsOpen(false)}
                           >
                                              <button
                   className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium flex items-center relative"
                 >
                   Solutions
                   <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
                   <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
               
                               {isSolutionsOpen && (
                   <div 
                     className="absolute top-full left-0 mt-0 w-[380px] bg-white rounded-lg shadow-lg border border-zul-green z-50"
                   >
                   <div className="flex">
                     {/* Industries Section */}
                     <div className="w-2/5 p-5 border-r border-zul-green">
                       <h3 className="text-sm font-semibold text-zul-green mb-3">Industries</h3>
                      <ul className="space-y-2">
                        <li>
                                                     <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Upstream
                           </a>
                         </li>
                         <li>
                           <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Production
                           </a>
                         </li>
                         <li>
                           <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Onshore
                           </a>
                         </li>
                         <li>
                           <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Offshore
                           </a>
                        </li>
                      </ul>
                    </div>
                    
                                         {/* Products Section */}
                     <div className="w-3/5 p-5">
                       <h3 className="text-sm font-semibold text-zul-green mb-3">Products</h3>
                      <ul className="space-y-2">
                        <li>
                                                     <a href="/products/drilling-mud-chemicals" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Drilling Mud Chemicals
                           </a>
                         </li>
                         <li>
                           <a href="/products/completion-fluids-additives" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Completion Fluids Additives
                           </a>
                         </li>
                         <li>
                           <a href="/products/cementing-additives" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Cementing Additives
                           </a>
                         </li>
                         <li>
                           <a href="/products/stimulation-chemicals" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Stimulation Chemicals
                           </a>
                         </li>
                         <li>
                           <a href="/products/production-chemicals" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Production Chemicals
                           </a>
                         </li>
                         <li>
                           <a href="/products/water-treatment-chemicals" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                             Water Treatment Chemicals
                           </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
                                      {/* Resources Dropdown */}
                           <div 
                             className="relative group"
                             onMouseEnter={() => setIsResourcesOpen(true)}
                             onMouseLeave={() => setIsResourcesOpen(false)}
                           >
                                              <button
                   className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium flex items-center relative"
                 >
                   Resources
                   <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
                   <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
               
                               {isResourcesOpen && (
                   <div 
                     className="absolute top-full left-0 mt-0 w-[140px] bg-white rounded-lg shadow-lg border border-zul-green z-50"
                   >
                   <div className="p-5">
                     <ul className="space-y-2">
                      <li>
                                               <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                         Datasheets
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                         Brochures
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                         Whitepapers
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                         Webinars
                       </a>
                     </li>
                     <li>
                       <a href="#" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">
                         Case Studies
                       </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            
                                      {/* R&D Direct Link */}
                           <a href="/rd" className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium relative group">
               R&D
               <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
             </a>
            
                                      {/* About Direct Link */}
                           <a href="/about" className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium relative group">
               About
               <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
             </a>
                         <a href="#news" className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium relative group">
               News
               <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
             </a>
             <a href="/contact" className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium relative group">
               Contact
               <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
             </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              
              {/* Mobile Solutions Menu */}
              <div>
                                 <button
                   onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                   className="w-full text-left text-zul-green hover:text-zul-green px-3 py-2 text-base font-medium flex items-center justify-between"
                 >
                   Solutions
                   <svg className={`ml-1 h-4 w-4 transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
                 {mobileSolutionsOpen && (
                   <div className="pl-6 space-y-2">
                     <div className="py-2">
                       <p className="text-sm font-semibold text-zul-green mb-2">Industries</p>
                       <div className="space-y-1">
                         <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Upstream</a>
                         <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Production</a>
                         <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Onshore</a>
                         <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Offshore</a>
                       </div>
                     </div>
                     <div className="py-2">
                       <p className="text-sm font-semibold text-zul-green mb-2">Products</p>
                       <div className="space-y-1">
                         <a href="/products/drilling-mud-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">DrillingMudChemicals</a>
                         <a href="/products/completion-fluids-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Completion Fluids Additives</a>
                         <a href="/products/cementing-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Cementing Additives</a>
                         <a href="/products/stimulation-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Stimulation Chemicals</a>
                         <a href="/products/production-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Production Chemicals</a>
                         <a href="/products/water-treatment-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Water Treatment Chemicals</a>
                       </div>
                     </div>
                   </div>
                 )}
              </div>

              {/* Mobile Resources Menu */}
              <div>
                                 <button
                   onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                   className="w-full text-left text-zul-green hover:text-zul-green px-3 py-2 text-base font-medium flex items-center justify-between"
                 >
                   Resources
                   <svg className={`ml-1 h-4 w-4 transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
                 {mobileResourcesOpen && (
                   <div className="pl-6 space-y-1">
                     <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Datasheets</a>
                     <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Brochures</a>
                     <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Whitepapers</a>
                     <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Webinars</a>
                     <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Case Studies</a>
                   </div>
                 )}
              </div>

              {/* Mobile R&D Direct Link */}
              <a href="/rd" className="text-zul-green hover:text-zul-green block px-3 py-2 text-base font-medium">
                R&D
              </a>

              {/* Mobile About Direct Link */}
              <a href="/about" className="text-zul-green hover:text-zul-green block px-3 py-2 text-base font-medium">
                About
              </a>

                             {/* Mobile Simple Links */}
               <a href="#news" className="text-zul-green hover:text-zul-green block px-3 py-2 text-base font-medium">
                 News
               </a>
               <a href="/contact" className="text-zul-green hover:text-zul-green block px-3 py-2 text-base font-medium">
                 Contact
               </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header