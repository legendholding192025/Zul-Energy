import React from 'react'
import Header from '../../../components/Header'
import Hero from '../../../components/Hero'
import ContactUs from '../../../components/ContactUs'
import Footer from '../../../components/Footer'

export default function CompletionFluidsAdditivesPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zul-green to-zul-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-left">
              <h1 className="font-headline text-white mb-8 leading-tight">
                COMPLETION FLUIDS ADDITIVES<br />
                ENHANCED PERFORMANCE FOR<br />
                OPTIMAL WELL COMPLETION<br />
                OPERATIONS
              </h1>
              <button className="bg-zul-yellow text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300">
                Request a Quote
              </button>
            </div>
            
            {/* Image Placeholder - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center">
                <span className="text-zul-grey-dark text-lg">Completion Fluids Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Users Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-black mb-4">
              Industry Users
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drilling Contractors */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Drilling Contractors</h3>
              <p className="text-zul-grey-dark text-sm">Specialized completion fluids for drilling operations</p>
            </div>
            
            {/* Oil Field Service Companies */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">OF</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Oil Field Service Companies</h3>
              <p className="text-zul-grey-dark text-sm">Comprehensive completion solutions and support</p>
            </div>
            
            {/* E&P Companies */}
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">EP</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">E&P Companies</h3>
              <p className="text-zul-grey-dark text-sm">Exploration and production optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="font-headline text-zul-black mb-6">
                Completion Fluids Additives
              </h2>
              <p className="font-body text-zul-grey-dark mb-6 leading-relaxed">
                Advanced chemical additives designed to enhance completion fluid performance, 
                ensuring optimal wellbore stability and production efficiency. Our formulations 
                provide superior control over fluid properties and well integrity.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">Enhanced fluid stability and control</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">Improved wellbore integrity</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-zul-yellow rounded-full mt-2 mr-3"></div>
                  <p className="text-zul-grey-dark">Optimized production performance</p>
                </div>
              </div>
            </div>
            
            {/* Technical Specifications */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="font-subhead text-zul-green mb-6">Technical Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-zul-grey-dark">pH Range</span>
                  <span className="text-zul-black">6.5 - 8.5</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-zul-grey-dark">Density</span>
                  <span className="text-zul-black">8.5 - 18.0 ppg</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="font-medium text-zul-grey-dark">Temperature</span>
                  <span className="text-zul-black">Up to 350°F</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-zul-grey-dark">Compatibility</span>
                  <span className="text-zul-black">Multi-fluid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-black mb-4">
              Applications
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">U</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Upstream</h3>
              <p className="text-zul-grey-dark text-sm">Drilling and completion operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">O</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Offshore</h3>
              <p className="text-zul-grey-dark text-sm">Deepwater and platform operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">H</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Horizontal</h3>
              <p className="text-zul-grey-dark text-sm">Extended reach drilling</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zul-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <h3 className="font-subhead text-zul-green mb-2">Shale</h3>
              <p className="text-zul-grey-dark text-sm">Unconventional formations</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zul-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-white mb-6">
            Ready to Optimize Your Completion Operations?
          </h2>
          <p className="font-body text-white mb-8 max-w-2xl mx-auto">
            Get expert consultation and customized completion fluids additives for your specific well requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-zul-yellow text-white px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300">
              Request Quote
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-zul-green transition-colors duration-300">
              Download Datasheet
            </button>
          </div>
        </div>
      </section>

      <ContactUs />
      <Footer />
    </main>
  )
}
