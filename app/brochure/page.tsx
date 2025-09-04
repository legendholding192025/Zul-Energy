"use client"

import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

interface BrochureForm {
  name: string
  email: string
  phone: string
}

export default function BrochureFlipbookPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pageFlipRef = useRef<any>(null)
  const [pdfJsReady, setPdfJsReady] = useState(false)
  const [pageFlipReady, setPageFlipReady] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showIframeFallback, setShowIframeFallback] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<BrochureForm>({
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!initialized) {
        setShowIframeFallback(true)
      }
    }, 8000) // Reduced timeout for faster fallback
    return () => clearTimeout(timeout)
  }, [initialized])

  useEffect(() => {
    const run = async () => {
      if (!pdfJsReady || !pageFlipReady || initialized || !containerRef.current) return

      try {
        const w: any = window as any
        const pdfjsLib = w.pdfjsLib
        const PageFlipClass = w.PageFlip || (w.pageFlip && w.pageFlip.PageFlip) || (w.St && w.St.PageFlip)
        if (!pdfjsLib || !PageFlipClass) {
          setError('Viewer not available. Please refresh the page.')
          return
        }

        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'

                 const tryRender = async (pdfUrl: string) => {
           const loadingTask = pdfjsLib.getDocument(pdfUrl)
           const pdf = await loadingTask.promise

           const images: string[] = []
           // Use lower scale for faster loading
           const scale = 1.2
           
           for (let i = 1; i <= pdf.numPages; i++) {
             const page = await pdf.getPage(i)
             const viewport = page.getViewport({ scale })
             const canvas = document.createElement('canvas')
             const context = canvas.getContext('2d')!
             canvas.width = viewport.width
             canvas.height = viewport.height
             await page.render({ canvasContext: context, viewport }).promise
             images.push(canvas.toDataURL('image/jpeg', 0.8)) // Use JPEG with compression for smaller file size
           }

           const viewer = new PageFlipClass(containerRef.current, {
             width: 900,
             height: 640,
             size: 'stretch',
             minWidth: 400,
             maxWidth: 1400,
             minHeight: 300,
             maxHeight: 1000,
             showCover: true,
             mobileScrollSupport: true,
             flippingTime: 600, // Faster page flip animation
             usePortrait: true,
           })

           // Store the PageFlip instance in ref for button access
           pageFlipRef.current = viewer
           viewer.loadFromImages(images)
         }

        try {
          // Try local PDF first for faster loading
          await tryRender('/downloads/Zul-Energy-Digital-Brochure.pdf')
          setError(null)
        } catch (e) {
          try {
            await tryRender('/api/brochure')
            setError(null)
          } catch (e2) {
            throw e2
          }
        }

        setInitialized(true)
        setShowIframeFallback(false)
      } catch (e) {
        setError('Failed to render brochure. Showing fallback viewer.')
        setShowIframeFallback(true)
      }
    }

    run()
  }, [pdfJsReady, pageFlipReady, initialized])

  const handleDownloadClick = () => {
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Brochure Download Request:', formData)
    
    // Simulate download after form submission
    const link = document.createElement('a')
    link.href = '/downloads/Zul-Energy-Digital-Brochure.pdf'
    link.download = 'Zul-Energy-Digital-Brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    alert('Thank you! Your brochure download will begin shortly.')
    setIsModalOpen(false)
    setFormData({
      name: '',
      email: '',
      phone: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* External libs */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"
        strategy="afterInteractive"
        onLoad={() => setPdfJsReady(true)}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/page-flip/dist/js/page-flip.browser.min.js"
        strategy="afterInteractive"
        onLoad={() => setPageFlipReady(true)}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/page-flip/dist/css/page-flip.css"
      />

      <section className="pt-28 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h1 className="font-headline text-zul-grey-dark">Brochure</h1>
            <p className="font-body text-zul-grey-dark">Interactive flipbook</p>
          </div>

          {!initialized && !showIframeFallback && (
            <div className="text-center text-zul-grey-dark mb-4 font-body">Loading viewer…</div>
          )}
          {error && !showIframeFallback && (
            <div className="text-center text-red-600 mb-4 font-body">{error}</div>
          )}

          <div className="flex justify-center">
            {!showIframeFallback ? (
              <div
                ref={containerRef}
                className="w-full max-w-[1800px] h-[78vh] rounded-lg shadow-lg bg-gray-100"
              />
            ) : (
              <iframe
                src="/api/brochure"
                className="w-full max-w-[1800px] h-[78vh] rounded-lg shadow-lg bg-gray-100"
              />
            )}
          </div>

                     <div className="text-center mt-6 space-y-4">
             {/* Navigation Buttons */}
             <div className="flex justify-center space-x-4">
               <button
                 onClick={() => {
                   if (pageFlipRef.current) {
                     try {
                       pageFlipRef.current.flipPrev()
                     } catch (e) {
                       try {
                         pageFlipRef.current.turnToPrevPage()
                       } catch (e2) {
                         try {
                           pageFlipRef.current.prev()
                         } catch (e3) {
                           console.log('Previous page navigation failed')
                         }
                       }
                     }
                   }
                 }}
                 className="flex items-center space-x-2 bg-zul-grey-dark text-white px-4 py-2 rounded-lg font-body hover:bg-zul-grey-light transition-colors"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
                 <span>Previous</span>
               </button>
               
               <button
                 onClick={() => {
                   if (pageFlipRef.current) {
                     try {
                       pageFlipRef.current.flipNext()
                     } catch (e) {
                       try {
                         pageFlipRef.current.turnToNextPage()
                       } catch (e2) {
                         try {
                           pageFlipRef.current.next()
                         } catch (e3) {
                           console.log('Next page navigation failed')
                         }
                       }
                     }
                   }
                 }}
                 className="flex items-center space-x-2 bg-zul-grey-dark text-white px-4 py-2 rounded-lg font-body hover:bg-zul-grey-light transition-colors"
               >
                 <span>Next</span>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
               </button>
             </div>
             
             {/* Download Button */}
             <div>
               <button
                 onClick={handleDownloadClick}
                 className="inline-block bg-zul-green text-white px-6 py-3 rounded-lg font-body hover:bg-zul-green-light transition-colors"
               >
                 Download PDF
               </button>
             </div>
           </div>
        </div>
      </section>

      {/* Download Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg max-w-lg w-full mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-subhead text-zul-green">
                  Download Brochure
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-zul-green mb-2">
                  Zul Energy Digital Brochure
                </h4>
                <p className="text-sm text-zul-grey-dark">
                  Complete overview of our products and services in the energy sector.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zul-grey-dark mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-yellow focus:border-transparent text-zul-grey-dark text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zul-grey-dark mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-yellow focus:border-transparent text-zul-grey-dark text-base"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zul-grey-dark mb-1">
                    Phone Number <span className="text-red-500">*</span> <span className="text-gray-500 text-xs">(e.g., +971 50 123 4567)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-yellow focus:border-transparent text-zul-grey-dark text-base"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:flex-1 bg-gray-300 text-gray-700 px-4 py-3 sm:py-2 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:flex-1 bg-zul-yellow text-white px-4 py-3 sm:py-2 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}


