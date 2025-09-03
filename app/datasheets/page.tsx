"use client"

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Product {
  id: string
  name: string
  category: string
  description: string
  pdfUrl: string
}

const products: Product[] = [
  {
    id: 'water-based-mud',
    name: 'Water Based Mud Additives',
    category: 'Upstream Chemical',
    description: 'Specialized chemical additives designed to enhance the performance of water-based drilling fluids.',
    pdfUrl: '/downloads/water-based-mud-datasheet.pdf'
  },
  {
    id: 'oil-based-mud',
    name: 'Oil Based Mud Additives',
    category: 'Upstream Chemical',
    description: 'Advanced oil-based drilling fluid additives for challenging drilling environments.',
    pdfUrl: '/downloads/oil-based-mud-datasheet.pdf'
  },
  {
    id: 'completion-fluids',
    name: 'Completion Fluids Additives',
    category: 'Upstream Chemical',
    description: 'Specialized chemicals for well completion operations and production optimization.',
    pdfUrl: '/downloads/completion-fluids-datasheet.pdf'
  },
  {
    id: 'stimulation-chemicals',
    name: 'Stimulation Chemicals',
    category: 'Upstream Chemical',
    description: 'Chemical solutions for well stimulation and enhanced oil recovery operations.',
    pdfUrl: '/downloads/stimulation-chemicals-datasheet.pdf'
  },
  {
    id: 'cementing-additives',
    name: 'Cementing Additives',
    category: 'Upstream Chemical',
    description: 'High-performance additives for well cementing and zonal isolation.',
    pdfUrl: '/downloads/cementing-additives-datasheet.pdf'
  },
  {
    id: 'production-chemicals',
    name: 'Production Chemicals',
    category: 'Upstream Chemical',
    description: 'Chemical solutions for production optimization and flow assurance.',
    pdfUrl: '/downloads/production-chemicals-datasheet.pdf'
  },
  {
    id: 'water-treatment-upstream',
    name: 'Water Treatment Chemicals',
    category: 'Upstream Chemical',
    description: 'Comprehensive water treatment solutions for upstream operations.',
    pdfUrl: '/downloads/water-treatment-upstream-datasheet.pdf'
  },
  {
    id: 'refining-chemicals',
    name: 'Refining Chemicals',
    category: 'Downstream Chemical',
    description: 'Specialized chemicals for petroleum refining and processing operations.',
    pdfUrl: '/downloads/refining-chemicals-datasheet.pdf'
  },
  {
    id: 'water-treatment-downstream',
    name: 'Water Treatment Chemicals',
    category: 'Downstream Chemical',
    description: 'Comprehensive water treatment solutions for downstream operations.',
    pdfUrl: '/downloads/water-treatment-downstream-datasheet.pdf'
  }
  
]

interface DatasheetForm {
  name: string
  email: string
  phone: string
  company: string
  message: string
  product: string
}

export default function DatasheetsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState<DatasheetForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: ''
  })

  const handleDownloadDatasheet = (product: Product) => {
    setSelectedProduct(product)
    setFormData(prev => ({ ...prev, product: product.name }))
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Datasheet Download Request:', formData)
    
    // Simulate download after form submission
    if (selectedProduct) {
      const link = document.createElement('a')
      link.href = selectedProduct.pdfUrl
      link.download = `${selectedProduct.name.replace(/\s+/g, '-').toLowerCase()}-datasheet.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    
    alert('Thank you! Your datasheet download will begin shortly.')
    setIsModalOpen(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      product: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <main className="overflow-x-hidden">
      <Header />
    
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-zul-green to-primary-900 text-white mt-24" style={{ height: '400px' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a5649f0a16b2.35673987_20250820_060103.webp")'
          }}
        >
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-left">
            <h1 className="font-headline mb-4 text-white">
              DATASHEETS
            </h1>
            <h2 className="font-headline mb-0 text-zul-yellow">
              TECHNICAL SPECIFICATIONS
            </h2>
            <p className="font-headline mb-0 text-white">
              DOWNLOAD PRODUCT DATASHEETS
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Product Datasheets
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto mb-8"></div>
          </div>

          <div className="space-y-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                                             <div className="mb-2">
                         <span className="inline-block bg-zul-green text-white text-xs px-2 py-1 rounded-full">
                           {product.category}
                         </span>
                       </div>
                      <h3 className="font-subhead text-zul-grey-dark mb-2">
                        {product.name}
                      </h3>
                      <p className="font-body text-zul-grey-dark text-sm leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className="md:ml-6">
                      <button
                        onClick={() => handleDownloadDatasheet(product)}
                        className="w-full md:w-auto bg-zul-yellow text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-colors whitespace-nowrap"
                      >
                        Request Datasheet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Form Modal */}
      {isModalOpen && (
                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
                      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto">
             <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-subhead text-zul-green">
                  Request Datasheet
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

              {selectedProduct && (
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-zul-green mb-2">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-sm text-zul-grey-dark">
                    {selectedProduct.description}
                  </p>
                </div>
              )}

                             <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                   <div>
                     <label htmlFor="name" className="block text-sm font-medium text-zul-grey-dark mb-1">
                       Full Name *
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
                       Email Address *
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

                   <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-zul-grey-dark mb-1">
                       Phone Number *
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

                   <div>
                     <label htmlFor="company" className="block text-sm font-medium text-zul-grey-dark mb-1">
                       Company *
                     </label>
                                            <input
                         type="text"
                         id="company"
                         name="company"
                         value={formData.company}
                         onChange={handleInputChange}
                         required
                         className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-yellow focus:border-transparent text-zul-grey-dark text-base"
                         placeholder="Enter your company name"
                       />
                   </div>
                 </div>

                 <div>
                   <label htmlFor="message" className="block text-sm font-medium text-zul-grey-dark mb-1">
                     Additional Message
                   </label>
                                        <textarea
                       id="message"
                       name="message"
                       value={formData.message}
                       onChange={handleInputChange}
                       rows={3}
                       className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-yellow focus:border-transparent text-zul-grey-dark text-base"
                       placeholder="Tell us about your specific requirements or questions..."
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
                     Request
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
