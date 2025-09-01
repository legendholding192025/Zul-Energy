"use client"

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
  link: string
}

const products: Product[] = [
  {
    id: 'water-based-mud',
    name: 'Water Based Mud Additives',
    category: 'Upstream Chemical',
    description: 'Specialized chemical additives designed to enhance the performance of water-based drilling fluids.',
    image: 'https://cdn.legendholding.com/images/cdn_68a55d78eab5e0.45150741_20250820_053032.webp',
    link: '/products/water-based-mud-additives'
  },
  {
    id: 'oil-based-mud',
    name: 'Oil Based Mud Additives',
    category: 'Upstream Chemical',
    description: 'Advanced oil-based drilling fluid additives for challenging drilling environments.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp',
    link: '/products/oil-based-mud-additives'
  },
  {
    id: 'completion-fluids',
    name: 'Completion Fluid Chemicals',
    category: 'Upstream Chemical',
    description: 'Specialized chemicals for well completion operations and production optimization.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565be7bb385.96776264_20250820_060550.webp',
    link: '/products/completion-fluids-additives'
  },
  {
    id: 'stimulation-chemicals',
    name: 'Stimulation Chemicals',
    category: 'Upstream Chemical',
    description: 'Chemical solutions for well stimulation and enhanced oil recovery operations.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565ececd456.31764651_20250820_060636.webp',
    link: '/products/stimulation-chemicals'
  },
  {
    id: 'cementing-additives',
    name: 'Cementing Additives',
    category: 'Upstream Chemical',
    description: 'High-performance additives for well cementing and zonal isolation.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp',
    link: '/products/cementing-additives'
  },
  {
    id: 'production-chemicals',
    name: 'Production Chemicals',
    category: 'Upstream Chemical',
    description: 'Chemical solutions for production optimization and flow assurance.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565be7bb385.96776264_20250820_060550.webp',
    link: '/products/production-chemicals'
  },
  {
    id: 'water-treatment',
    name: 'Water Treatment Chemicals',
    category: 'Upstream & Downstream Chemical',
    description: 'Comprehensive water treatment solutions for both upstream and downstream operations.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565ececd456.31764651_20250820_060636.webp',
    link: '/products/water-treatment-chemicals'
  },
  {
    id: 'refining-chemicals',
    name: 'Refining Chemicals',
    category: 'Downstream Chemical',
    description: 'Specialized chemicals for petroleum refining and processing operations.',
    image: 'https://cdn.legendholding.com/images/cdn_68a565133a1568.04754394_20250820_060259.webp',
    link: '/products/refining-chemicals'
  }
]



export default function CaseStudiesPage() {




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
            <h2 className="font-headline mb-0 text-zul-yellow">
              REAL SUCCESS STORIES
            </h2>
            <p className="font-headline mb-0 text-white">
              FROM OUR PRODUCTS
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Case Studies
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                                     <div className="mb-2">
                     <span className="inline-block bg-zul-grey-dark text-white text-xs px-2 py-1 rounded-full">
                       {product.category}
                     </span>
                   </div>
                                     <h3 className="font-subhead text-zul-grey-dark mb-3">
                     {product.name}
                   </h3>
                  <p className="font-body text-zul-grey-dark mb-4 text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="flex space-x-3 mt-auto">
                    <a
                      href={product.link}
                      className="flex-1 bg-zul-green text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors text-center"
                    >
                      Learn More
                    </a>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>     
      <Footer />
    </main>
  )
}
