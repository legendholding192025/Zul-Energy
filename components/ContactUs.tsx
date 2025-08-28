"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+971',
    phoneNumber: '',
    productOfInterest: ''
  })

  const products = [
    { value: '', label: 'Select Product of Interest' },
    { value: 'drilling-fluids', label: 'Drilling Fluids Chemicals' },
    { value: 'completion-fluids', label: 'Completion Fluids Chemicals' },
    { value: 'stimulation-chemicals', label: 'Stimulation Chemicals' },
    { value: 'cementing-chemicals', label: 'Cementing Chemicals' },
    { value: 'production-chemicals', label: 'Production & Treatment Chemicals' },
    { value: 'water-treatment', label: 'Water Treatment Chemicals' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Phone number validation - only allow 9 digits
    if (name === 'phoneNumber') {
      const numbersOnly = value.replace(/\D/g, '')
      if (numbersOnly.length <= 9) {
        setFormData(prev => ({
          ...prev,
          [name]: numbersOnly
        }))
      }
      return
    }
    
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
    
    if (formData.phoneNumber.length !== 9) {
      alert('Phone number must be exactly 9 digits')
      return
    }
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      countryCode: '+971',
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
                src="https://cdn.legendholding.com/images/cdn_68a2f85624b3b8.28018141_20250818_095430.webp"
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
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                     {/* Left Side - Form */}
           <div className="bg-gray-200 rounded-xl p-8 shadow-sm">
            {/* Request A Quote Section */}
            <div className="mb-6">
              <h3 className="font-subhead text-zul-green mb-2">
                Request A Quote
              </h3>
              <p className="font-body text-zul-grey-dark mb-6">
                Reach Out To Us
              </p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                             <div>
                 <input
                   type="text"
                   name="fullName"
                   value={formData.fullName}
                   onChange={handleInputChange}
                   placeholder="Your full name"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div>
                 <input
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   placeholder="Your email"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div className="flex gap-4">
                 <div className="flex-shrink-0">
                   <select 
                     name="countryCode"
                     value={formData.countryCode}
                     onChange={handleInputChange}
                     className="px-3 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body bg-white text-zul-black"
                   >
                     <option value="+971">+971</option>
                     <option value="+1">+1</option>
                     <option value="+44">+44</option>
                     <option value="+91">+91</option>
                     <option value="+966">+966</option>
                     <option value="+974">+974</option>
                     <option value="+965">+965</option>
                   </select>
                 </div>
                 <div className="flex-1">
                   <input
                     type="tel"
                     name="phoneNumber"
                     value={formData.phoneNumber}
                     onChange={handleInputChange}
                     placeholder="Phone number"
                     maxLength={9}
                     required
                     className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                   />
                 </div>
               </div>
               
               <div>
                 <select
                   name="productOfInterest"
                   value={formData.productOfInterest}
                   onChange={handleInputChange}
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body bg-white appearance-none cursor-pointer text-zul-black"
                   style={{
                     backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300954D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
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
          <div className="flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-lg">
              <Image
                src="https://cdn.legendholding.com/images/cdn_68a2f85624b3b8.28018141_20250818_095430.webp"
                alt="ZUL Energy Building"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>

                 {/* Mobile: Form Below Image */}
         <div className="block lg:hidden">
           <div className="bg-gray-200 rounded-xl p-6 shadow-sm">
            {/* Request A Quote Section */}
            <div className="mb-6">
              <h3 className="font-subhead text-zul-green mb-2">
                Request A Quote
              </h3>
              <p className="font-body text-zul-grey-dark mb-6">
                Reach Out To Us
              </p>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                             <div>
                 <input
                   type="text"
                   name="fullName"
                   value={formData.fullName}
                   onChange={handleInputChange}
                   placeholder="Your full name"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div>
                 <input
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   placeholder="Your email"
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                 />
               </div>
               
               <div className="flex gap-4">
                 <div className="flex-shrink-0">
                   <select 
                     name="countryCode"
                     value={formData.countryCode}
                     onChange={handleInputChange}
                     className="px-3 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body bg-white text-zul-black"
                   >
                     <option value="+971">+971</option>
                     <option value="+1">+1</option>
                     <option value="+44">+44</option>
                     <option value="+91">+91</option>
                     <option value="+966">+966</option>
                     <option value="+974">+974</option>
                     <option value="+965">+965</option>
                   </select>
                 </div>
                 <div className="flex-1">
                   <input
                     type="tel"
                     name="phoneNumber"
                     value={formData.phoneNumber}
                     onChange={handleInputChange}
                     placeholder="Phone number"
                     maxLength={9}
                     required
                     className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                   />
                 </div>
               </div>
               
               <div>
                 <select
                   name="productOfInterest"
                   value={formData.productOfInterest}
                   onChange={handleInputChange}
                   required
                   className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body bg-white appearance-none cursor-pointer text-zul-black"
                   style={{
                     backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2300954D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
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
