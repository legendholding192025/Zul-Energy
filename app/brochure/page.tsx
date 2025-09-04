"use client"

import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export default function BrochureFlipbookPage() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const pageFlipRef = useRef<any>(null)
  const [pdfJsReady, setPdfJsReady] = useState(false)
  const [pageFlipReady, setPageFlipReady] = useState(false)
  const [initialized, setInitialized] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showIframeFallback, setShowIframeFallback] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!initialized) {
        setShowIframeFallback(true)
      }
    }, 12000)
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
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i)
            const viewport = page.getViewport({ scale: 1.8 })
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')!
            canvas.width = viewport.width
            canvas.height = viewport.height
            await page.render({ canvasContext: context, viewport }).promise
            images.push(canvas.toDataURL('image/png'))
          }

                     const viewer = new PageFlipClass(containerRef.current, {
             width: 1024,
             height: 720,
             size: 'stretch',
             minWidth: 540,
             maxWidth: 1800,
             minHeight: 360,
             maxHeight: 1300,
             showCover: true,
             mobileScrollSupport: true,
           })

           // Store the PageFlip instance in ref for button access
           pageFlipRef.current = viewer
           viewer.loadFromImages(images)
        }

        try {
          await tryRender('/api/brochure')
          setError(null)
        } catch (e) {
          await tryRender('/downloads/Zul-Energy-Digital-Brochure.pdf')
          setError(null)
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
               <a
                 href="/downloads/Zul-Energy-Digital-Brochure.pdf"
                 download="Zul-Energy-Digital-Brochure.pdf"
                 className="inline-block bg-zul-green text-white px-6 py-3 rounded-lg font-body hover:bg-zul-green-light transition-colors"
               >
                 Download PDF
               </a>
             </div>
           </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


