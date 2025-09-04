"use client"

import React, { useState } from 'react'
import Image from 'next/image'

interface ContactUsProps {
  preSelectedProduct?: string
}

const ContactUs = ({ preSelectedProduct }: ContactUsProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    productOfInterest: preSelectedProduct || ''
  })

  const allProducts = [
    { value: 'water-based-mud-additives', label: 'Water Based Mud Additives' },
    { value: 'oil-based-mud-additives', label: 'Oil Based Mud Additives' },
    { value: 'completion-fluids-additives', label: 'Completion Fluids Additives' },
    { value: 'stimulation-chemicals', label: 'Stimulation Chemicals' },
    { value: 'cementing-additives', label: 'Cementing Additives' },
    { value: 'production-chemicals', label: 'Production Chemicals' },
    { value: 'water-treatment-chemicals-upstream', label: 'Water Treatment Chemicals (Upstream)' },
    { value: 'refining-chemicals', label: 'Refining Chemicals' },
    { value: 'water-treatment-chemicals-downstream', label: 'Water Treatment Chemicals (Downstream)' }
  ]

  // If a product is pre-selected, show only that product. Otherwise, show all products with a default option
  const products = preSelectedProduct 
    ? [allProducts.find(p => p.value === preSelectedProduct) || { value: preSelectedProduct, label: preSelectedProduct }]
    : [{ value: '', label: 'Select Product of Interest' }, ...allProducts]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.productOfInterest) {
      alert('Please fill in all required fields')
      return
    }
    
    if (formData.phoneNumber.length < 10) {
      alert('Please enter a valid phone number')
      return
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      productOfInterest: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-zul-grey-dark mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
        </div>
        
                {/* Mobile: Image First, Form Below */}
        <div className="block lg:hidden mb-12">
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <Image
                src="https://cdn.legendholding.com/images/cdn_68b95fdd9bc860.17055806_20250904_094605.webp"
                alt="ZUL Energy Building"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Desktop: Side by Side Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
                     {/* Left Side - Form */}
           <div className="bg-gray-200 rounded-xl p-6 shadow-sm">
            {/* Request A Quote Section */}
            <div className="mb-4">
              <h3 className="font-subhead text-zul-green mb-2">
                Request A Quote
              </h3>
              <p className="font-body text-zul-grey-dark mb-6">
                Reach Out To Us
              </p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                             <div>
                 <label htmlFor="fullName" className="block text-sm font-medium text-zul-grey-dark mb-1">
                   Full Name <span className="text-red-500">*</span>
                 </label>
                 <input
                   type="text"
                   id="fullName"
                   name="fullName"
                   value={formData.fullName}
                   onChange={handleInputChange}
                   placeholder="Your full name"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
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
                   placeholder="Your email"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div>
                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-zul-grey-dark mb-1">
                   Phone Number <span className="text-red-500">*</span> <span className="text-gray-500 text-xs">(e.g., +971 50 123 4567)</span>
                 </label>
                 <input
                   type="tel"
                   id="phoneNumber"
                   name="phoneNumber"
                   value={formData.phoneNumber}
                   onChange={handleInputChange}
                   placeholder="Phone number"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div>
                 <label htmlFor="productOfInterest" className="block text-sm font-medium text-zul-grey-dark mb-1">
                   Product of Interest <span className="text-red-500">*</span>
                 </label>
                 <select
                   id="productOfInterest"
                   name="productOfInterest"
                   value={formData.productOfInterest}
                   onChange={handleInputChange}
                   required
                   disabled={!!preSelectedProduct}
                   className={`w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body appearance-none text-zul-black ${
                     preSelectedProduct 
                       ? 'bg-gray-100 cursor-not-allowed' 
                       : 'bg-white cursor-pointer'
                   }`}
                   style={{
                     backgroundImage: preSelectedProduct 
                       ? 'none' 
                       : `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300954D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'right 1rem center',
                     backgroundSize: '1rem'
                   }}
                 >
                   {products.map((product) => (
                     <option key={product.value} value={product.value} disabled={product.value === ''}>
                       {product.label}
                     </option>
                   ))}
                 </select>
               </div>
             
              <button
                type="submit"
                className="w-full bg-zul-green text-white py-3 px-6 rounded-lg font-body font-medium hover:bg-zul-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
          
                     {/* Right Side - Building Image */}
           <div className="flex justify-center lg:justify-end items-stretch">
             <div className="w-full max-w-lg h-full">
               <Image
                 src="https://cdn.legendholding.com/images/cdn_68b95fdd9bc860.17055806_20250904_094605.webp"
                 alt="ZUL Energy Building"
                 width={500}
                 height={600}
                 className="w-full h-full rounded-lg shadow-lg object-cover"
                 priority
               />
             </div>
           </div>
        </div>

                 {/* Mobile: Form Below Image */}
         <div className="block lg:hidden">
           <div className="bg-gray-200 rounded-xl p-4 shadow-sm">
            {/* Request A Quote Section */}
            <div className="mb-4">
              <h3 className="font-subhead text-zul-green mb-2">
                Request A Quote
              </h3>
              <p className="font-body text-zul-grey-dark mb-6">
                Reach Out To Us
              </p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                             <div>
                 <label htmlFor="fullName" className="block text-sm font-medium text-zul-grey-dark mb-1">
                   Full Name <span className="text-red-500">*</span>
                 </label>
                 <input
                   type="text"
                   id="fullName"
                   name="fullName"
                   value={formData.fullName}
                   onChange={handleInputChange}
                   placeholder="Your full name"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
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
                   placeholder="Your email"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div>
                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-zul-grey-dark mb-1">
                   Phone Number <span className="text-red-500">*</span> <span className="text-gray-500 text-xs">(e.g., +971 50 123 4567)</span>
                 </label>
                 <input
                   type="tel"
                   id="phoneNumber"
                   name="phoneNumber"
                   value={formData.phoneNumber}
                   onChange={handleInputChange}
                   placeholder="Phone number"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div>
                 <label htmlFor="productOfInterest" className="block text-sm font-medium text-zul-grey-dark mb-1">
                   Product of Interest <span className="text-red-500">*</span>
                 </label>
                 <select
                   id="productOfInterest"
                   name="productOfInterest"
                   value={formData.productOfInterest}
                   onChange={handleInputChange}
                   required
                   disabled={!!preSelectedProduct}
                   className={`w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body appearance-none text-zul-black ${
                     preSelectedProduct 
                       ? 'bg-gray-100 cursor-not-allowed' 
                       : 'bg-white cursor-pointer'
                   }`}
                   style={{
                     backgroundImage: preSelectedProduct 
                       ? 'none' 
                       : `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300954D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'right 1rem center',
                     backgroundSize: '1rem'
                   }}
                 >
                   {products.map((product) => (
                     <option key={product.value} value={product.value} disabled={product.value === ''}>
                       {product.label}
                     </option>
                   ))}
                 </select>
               </div>
             
              <button
                type="submit"
                className="w-full bg-zul-green text-white py-3 px-6 rounded-lg font-body font-medium hover:bg-zul-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
