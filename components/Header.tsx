'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState({
    main: false,
    upstream: false,
    downstream: false,
    drilling: false
  })
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [nestedDropdowns, setNestedDropdowns] = useState({
  drilling: false,
  completion: false,
  cementing: false
})
const [subNestedDropdowns, setSubNestedDropdowns] = useState({
  drillingSub: false
})

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(path)
  }

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
                                    {/* About Direct Link */}
                           <a 
                             href="/about" 
                             className={`px-3 py-2 text-sm font-medium relative group transition-colors ${
                               isActive('/about') 
                                 ? 'text-zul-yellow' 
                                 : 'text-zul-green hover:text-zul-green'
                             }`}
                             onMouseEnter={() => {
                               setIsSolutionsOpen(false)
                               setNestedDropdowns(prev => ({ 
                                 drilling: false, 
                                 completion: false, 
                                 cementing: false 
                               }))
                               setSubNestedDropdowns(prev => ({ 
                                 drillingSub: false 
                               }))
                             }}
                           >
               About
               <div className={`absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transition-transform duration-300 ${
                 !isActive('/about') ? 'scale-x-0 group-hover:scale-x-100' : 'scale-x-0'
               } origin-left`}></div>
             </a>
            
                                    {/* Products & Services Dropdown */}
                           <div 
                             className="relative group"
                             onMouseEnter={() => setIsSolutionsOpen(true)}
                             onMouseLeave={() => {
                               setIsSolutionsOpen(false)
                               // Close all nested dropdowns when main dropdown closes
                               setNestedDropdowns(prev => ({ 
                                 drilling: false, 
                                 completion: false, 
                                 cementing: false 
                               }))
                               setSubNestedDropdowns(prev => ({ 
                                 drillingSub: false 
                               }))
                             }}
                           >
                                              <button
                   className="text-zul-green hover:text-zul-green px-3 py-2 text-sm font-medium flex items-center relative"
                 >
                   Products & Services
                   <div className="absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"></div>
                   <svg className={`ml-1 h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
               
                               {isSolutionsOpen && (
                   <div 
                     className="absolute top-full left-0 mt-0 w-[220px] bg-white rounded-lg shadow-lg border border-zul-green z-50"
                   >
                   <div className="p-5">
                      <ul className="space-y-2">
                       <li className="relative group">
                         <div 
                           className="flex items-center justify-between"
                           onMouseEnter={() => setNestedDropdowns(prev => ({ 
                             drilling: true, 
                             completion: false, 
                             cementing: false 
                           }))}
                         >
                           <span className="text-sm block py-1 text-gray-600 hover:text-zul-yellow transition-colors flex-1 cursor-pointer">
                             Upstream Chemical
                           </span>
                           <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${nestedDropdowns.drilling ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                         </div>
                         {nestedDropdowns.drilling && (
                           <div 
                             className="absolute left-full top-0 ml-1 w-[220px] bg-white rounded-lg shadow-lg border border-zul-green z-50"
                             onMouseEnter={() => setNestedDropdowns(prev => ({ ...prev, drilling: true }))}
                             onMouseLeave={() => {
                               setTimeout(() => {
                                 setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))
                               }, 150)
                             }}
                           >
                             <div className="p-3">
                               <ul className="space-y-1">
                                                                                                    <li className="relative group">
                                    <div 
                                      className="flex items-center justify-between"
                                      onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: true }))}
                                    >
                                      <span className="text-sm text-gray-600 hover:text-zul-yellow block py-1 flex-1 cursor-pointer">Drilling Fluid Chemicals</span>
                                      <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${subNestedDropdowns.drillingSub ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                      </svg>
                                    </div>
                                   {subNestedDropdowns.drillingSub && (
                                                                        <div 
                                     className="absolute left-full top-0 ml-1 w-[220px] bg-white rounded-lg shadow-lg border border-zul-green z-50"
                                     onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: true }))}
                                     onMouseLeave={() => {
                                       setTimeout(() => {
                                         setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))
                                       }, 150)
                                     }}
                                   >
                                                                               <div className="p-3">
                                          <ul className="space-y-1">
                                            <li><a href="/products/water-based-mud-additives" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">Water Based Mud Additives</a></li>
                                            <li><a href="/products/oil-based-mud-additives" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">Oil Based Mud Additives</a></li>
                                          </ul>
                                        </div>
                                     </div>
                                   )}
                         </li>
                                 <li><a 
                                   href="/products/completion-fluids-additives" 
                                   className="text-sm text-gray-600 hover:text-zul-yellow block py-1"
                                   onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))}
                                 >Completion Fluid Chemicals</a></li>
                                 <li><a 
                                   href="/products/stimulation-chemicals" 
                                   className="text-sm text-gray-600 hover:text-zul-yellow block py-1"
                                   onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))}
                                 >Stimulation Chemicals</a></li>
                                 <li><a 
                                   href="/products/cementing-additives" 
                                   className="text-sm text-gray-600 hover:text-zul-yellow block py-1"
                                   onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))}
                                 >Cementing Chemicals</a></li>
                                 <li><a 
                                   href="/products/production-chemicals" 
                                   className="text-sm text-gray-600 hover:text-zul-yellow block py-1"
                                   onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))}
                                 >Production Chemicals</a></li>
                                 <li><a 
                                   href="/products/water-treatment-chemicals" 
                                   className="text-sm text-gray-600 hover:text-zul-yellow block py-1"
                                   onMouseEnter={() => setSubNestedDropdowns(prev => ({ ...prev, drillingSub: false }))}
                                 >Water Treatment Chemicals</a></li>
                      </ul>
                    </div>
                           </div>
                         )}
                        </li>
                       <li className="relative group">
                         <div 
                           className="flex items-center justify-between"
                           onMouseEnter={() => setNestedDropdowns(prev => ({ 
                             drilling: false, 
                             completion: true, 
                             cementing: false 
                           }))}
                         >
                           <span className="text-sm block py-1 text-gray-600 hover:text-zul-yellow transition-colors flex-1 cursor-pointer">
                             Downstream Chemical
                           </span>
                           <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${nestedDropdowns.completion ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                           </svg>
                         </div>
                                                    {nestedDropdowns.completion && (
                             <div 
                               className="absolute left-full top-0 ml-1 w-[220px] bg-white rounded-lg shadow-lg border border-zul-green z-50"
                               onMouseEnter={() => setNestedDropdowns(prev => ({ ...prev, completion: true }))}
                               onMouseLeave={() => {
                                 setTimeout(() => {
                                   setNestedDropdowns(prev => ({ ...prev, completion: false }))
                                 }, 150)
                               }}
                             >
                                                               <div className="p-3">
                                                                                                      <ul className="space-y-1">
                                    <li><a href="/products/refining-chemicals" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">Refining Chemicals</a></li>
                                    <li><a href="/products/water-treatment-chemicals" className="text-sm text-gray-600 hover:text-zul-yellow block py-1">Water Treatment Chemicals</a></li>
                                  </ul>
                    </div>
                             </div>
                           )}
                       </li>
                       

                     </ul>
                  </div>
                </div>
              )}
            </div>
            
                                   {/* R&D Direct Link */}
                          <a 
                            href="/rd" 
                            className={`px-3 py-2 text-sm font-medium relative group transition-colors ${
                              isActive('/rd') 
                                ? 'text-zul-yellow' 
                                : 'text-zul-green hover:text-zul-green'
                            }`}
                            onMouseEnter={() => {
                              setIsSolutionsOpen(false)
                              setNestedDropdowns(prev => ({ 
                                drilling: false, 
                                completion: false, 
                                cementing: false 
                              }))
                              setSubNestedDropdowns(prev => ({ 
                                drillingSub: false 
                              }))
                            }}
                          >
              R&D
              <div className={`absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transition-transform duration-300 ${
                !isActive('/rd') ? 'scale-x-0 group-hover:scale-x-100' : 'scale-x-0'
              } origin-left`}></div>
            </a>
            
                                      {/* Resources Dropdown */}
                           <div 
                             className="relative group"
                             onMouseEnter={() => {
                               setIsResourcesOpen(true)
                               setIsSolutionsOpen(false)
                               setNestedDropdowns(prev => ({ 
                                 drilling: false, 
                                 completion: false, 
                                 cementing: false 
                               }))
                               setSubNestedDropdowns(prev => ({ 
                                 drillingSub: false 
                               }))
                             }}
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
                         <a href="/news" className={`text-sm block py-1 transition-colors ${
                           isActive('/news') 
                             ? 'text-zul-yellow' 
                             : 'text-gray-600 hover:text-zul-yellow'
                         }`}>
                           News
                         </a>
                       </li>
                       <li>
                         <a 
                           href="/downloads/Zul-Energy-Digital-Brochure.pdf" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-sm text-gray-600 hover:text-zul-yellow block py-1"
                         >
                           Brochures
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
            
                                      {/* Contact Direct Link */}
                           <a 
                             href="/contact" 
                             className={`px-3 py-2 text-sm font-medium relative group transition-colors ${
                               isActive('/contact') 
                                 ? 'text-zul-yellow' 
                                 : 'text-zul-green hover:text-zul-green'
                             }`}
                             onMouseEnter={() => {
                               setIsSolutionsOpen(false)
                               setNestedDropdowns(prev => ({ 
                                 drilling: false, 
                                 completion: false, 
                                 cementing: false 
                               }))
                               setSubNestedDropdowns(prev => ({ 
                                 drillingSub: false 
                               }))
                             }}
                           >
               Contact
               <div className={`absolute bottom-0 left-3 right-3 h-1 bg-zul-yellow transition-transform duration-300 ${
                 !isActive('/contact') ? 'scale-x-0 group-hover:scale-x-100' : 'scale-x-0'
               } origin-left`}></div>
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
                   onClick={() => setMobileSolutionsOpen(prev => ({ ...prev, main: !prev.main }))}
                   className="w-full text-left text-zul-green hover:text-zul-green px-3 py-2 text-base font-medium flex items-center justify-between"
                 >
                   Products & Services
                   <svg className={`ml-1 h-4 w-4 transform ${mobileSolutionsOpen.main ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                   </svg>
                 </button>
                 {mobileSolutionsOpen.main && (
                   <div className="pl-6 space-y-2">
                     <div className="py-2">
                       <div className="space-y-1">
                         {/* Upstream Chemical */}
                         <div>
                           <button
                             onClick={() => setMobileSolutionsOpen(prev => ({ ...prev, upstream: !prev.upstream }))}
                             className="w-full text-left text-zul-grey-dark hover:text-zul-green py-1 flex items-center justify-between"
                           >
                             <span className="text-sm">Upstream Chemical</span>
                             <svg className={`w-3 h-3 transition-transform duration-200 ${mobileSolutionsOpen.upstream ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                             </svg>
                           </button>
                           {mobileSolutionsOpen.upstream && (
                             <div className="pl-4 space-y-1 mt-2">
                                                                <div>
                                   <button
                                     onClick={() => setMobileSolutionsOpen(prev => ({ ...prev, drilling: !prev.drilling }))}
                                     className="w-full text-left text-zul-grey-dark hover:text-zul-green py-1 flex items-center justify-between"
                                   >
                                     <span className="text-sm">Drilling Fluid Chemicals</span>
                                     <svg className={`w-3 h-3 transition-transform duration-200 ${mobileSolutionsOpen.drilling ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                     </svg>
                                   </button>
                                                                       {mobileSolutionsOpen.drilling && (
                                      <div className="pl-4 space-y-1 mt-2">
                                        <a href="/products/water-based-mud-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Water Based Mud Additives</a>
                                        <a href="/products/oil-based-mud-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Oil Based Mud Additives</a>
                                      </div>
                                    )}
                                 </div>
                                 <a href="/products/completion-fluids-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Completion Fluid Chemicals</a>
                                 <a href="/products/cementing-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Cementing Chemicals</a>
                               <a href="/products/stimulation-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Stimulation Chemicals</a>
                               <a href="/products/production-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Production Chemicals</a>
                               <a href="/products/water-treatment-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Water Treatment Chemicals</a>
                       </div>
                           )}
                     </div>
                         
                         {/* Downstream Chemical */}
                         <div>
                           <button
                             onClick={() => setMobileSolutionsOpen(prev => ({ ...prev, downstream: !prev.downstream }))}
                             className="w-full text-left text-zul-grey-dark hover:text-zul-green py-1 flex items-center justify-between"
                           >
                             <span className="text-sm">Downstream Chemical</span>
                             <svg className={`w-3 h-3 transition-transform duration-200 ${mobileSolutionsOpen.downstream ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                             </svg>
                           </button>
                                                       {mobileSolutionsOpen.downstream && (
                              <div className="pl-4 space-y-1 mt-2">
                                <a href="/products/refining-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Refining Chemicals</a>
                                <a href="/products/water-treatment-chemicals" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Water Treatment Chemicals</a>
                              </div>
                            )}
                         </div>
                         
                         {/* Solid Control Equipment */}
                         <a href="/products/cementing-additives" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Solid Control Equipment</a>
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
                     <a 
                       href="/news" 
                       className={`block text-sm py-1 transition-colors ${
                         isActive('/news') 
                           ? 'text-zul-yellow bg-zul-yellow bg-opacity-10 px-2 rounded' 
                           : 'text-zul-grey-dark hover:text-zul-green'
                       }`}
                     >
                       News
                     </a>
                     <a 
                       href="/downloads/Zul-Energy-Digital-Brochure.pdf" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="block text-sm text-zul-grey-dark hover:text-zul-green py-1"
                     >
                       Brochures
                     </a>
                     <a href="#" className="block text-sm text-zul-grey-dark hover:text-zul-green py-1">Case Studies</a>
                   </div>
                 )}
              </div>

              {/* Mobile R&D Direct Link */}
              <a 
                href="/rd" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/rd') 
                    ? 'text-zul-yellow bg-zul-yellow bg-opacity-10' 
                    : 'text-zul-green hover:text-zul-green'
                }`}
              >
                R&D
              </a>

              {/* Mobile About Direct Link */}
              <a 
                href="/about" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-zul-yellow bg-zul-yellow bg-opacity-10' 
                    : 'text-zul-green hover:text-zul-green'
                }`}
              >
                About
              </a>

                            {/* Mobile Simple Links */}
               <a 
                 href="/contact" 
                 className={`block px-3 py-2 text-base font-medium transition-colors ${
                   isActive('/contact') 
                     ? 'text-zul-yellow bg-zul-yellow bg-opacity-10' 
                     : 'text-zul-green hover:text-zul-green'
                 }`}
               >
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