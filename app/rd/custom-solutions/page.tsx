import React from 'react'
import Header from '@/components/Header'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function CustomSolutionsPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zul-green to-zul-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-headline text-white mb-8 leading-tight">
              CUSTOM SOLUTIONS<br />
              TAILORED CHEMICAL FORMULATIONS<br />
              FOR YOUR UNIQUE REQUIREMENTS
            </h1>
            <p className="font-body text-white mb-8 max-w-3xl mx-auto text-lg">
              We develop bespoke chemical solutions that address your specific 
              operational challenges and deliver measurable performance improvements.
            </p>
            <button className="bg-zul-yellow text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300">
              Request Custom Solution
            </button>
          </div>
        </div>
      </section>

      {/* Custom Solutions Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-black mb-4">
              Our Custom Solutions Process
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Analysis */}
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Analysis</h3>
              <p className="text-zul-grey-dark text-sm">Comprehensive assessment of your operational needs and challenges</p>
            </div>
            
            {/* Step 2: Design */}
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Design</h3>
              <p className="text-zul-grey-dark text-sm">Custom formulation design based on specific requirements</p>
            </div>
            
            {/* Step 3: Development */}
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Development</h3>
              <p className="text-zul-grey-dark text-sm">Laboratory development and pilot-scale testing</p>
            </div>
            
            {/* Step 4: Implementation */}
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">4</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Implementation</h3>
              <p className="text-zul-grey-dark text-sm">Full-scale production and field deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-headline text-zul-black mb-6">
                Types of Custom Solutions
              </h2>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                From specialized drilling fluids to production optimization chemicals, 
                we create tailored solutions that address your unique operational 
                challenges and environmental conditions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">High-temperature resistant formulations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">Environmentally sensitive area solutions</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">Cost-optimized chemical blends</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">Regulatory compliance formulations</p>
                </div>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-zul-grey-dark text-lg">Custom Solutions Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zul-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="font-body text-white mb-8 max-w-2xl mx-auto">
            Let our expert team develop a tailored chemical solution that 
            perfectly fits your operational requirements and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-zul-yellow text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-zul-green transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  )
}
