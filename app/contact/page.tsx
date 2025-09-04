import React from 'react'
import Header from '@/components/Header'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 min-h-[50vh] bg-gradient-to-br from-zul-green to-zul-green-dark">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a56a7eb153f2.65627368_20250820_062606.webp")'
          }}
        >
        </div>
        
        {/* Content Overlay */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mt-16">
            <h1 className="font-headline mb-0 text-white">
              Reach Out To Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          {/* <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div> */}
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Form */}
            <div className="bg-gray-200 rounded-xl p-6 shadow-sm">
              <div className="mb-6">
                <h3 className="font-subhead text-zul-green mb-2">
                  Make an appointment
                </h3>
                <p className="font-body text-zul-grey-dark mb-6">
                  Get in touch with Zul Energy for inquiries, partnerships, and support.
                </p>
              </div>
              
              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-zul-grey-dark mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Your full name"
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
                    placeholder="Your email"
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
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zul-grey-dark mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zul-grey-dark mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-zul-green text-white py-3 px-6 rounded-lg font-body font-medium hover:bg-zul-green-light transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
            
            {/* Right Column - Promotional Content */}
            <div className="p-8 rounded-lg flex items-start justify-center min-h-[400px] relative overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_68a56983066904.95341207_20250820_062155.webp")',
                  backgroundPosition: 'right center'
                }}
              >
              </div>
              
              {/* Content Overlay */}
              <div className="relative text-left text-white z-10">
                <h3 className="text-xl font-semibold mb-2">
                  Kickstart your project with our expertise
                </h3>
                <h2 className="text-3xl font-bold mb-4">
                  Book Now with Zul Energy
                </h2>
                <p className="text-white/90">
                  Connect with Zul Energy for inquiries, partnerships, and support. Our team is ready to assist you with innovative energy solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Maps Section - Full Width */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Map - Our Location */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Office Location</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8474567890123!2d55.136225!3d25.0626488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69587889e31d%3A0xe99198d629887eb4!2sZul%20Energy!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zul Energy Location"
                ></iframe>
              </div>
            </div>

            {/* Right Map - Area Overview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-emerald-600 mb-4">Plant Location</h3>
              <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.8474567890123!2d55.9766868!3d25.4131601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5c708833273ff%3A0x347483e5eb4c7510!2sAl%20Ghayl%20-%20Ras%20Al%20Khaimah!5e0!3m2!1sen!2sae!4v1234567891"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Ghayl - Ras Al Khaimah Plant Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details Section - Below Maps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Call Us */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-4">Call Us</h3>
            <div className="space-y-2">
              <p className="text-gray-700 font-medium">
                <a href="tel:+97142727603" className="hover:text-emerald-600 transition-colors">
                  Dubai - 04 272 7603
                </a>
              </p>
              <p className="text-gray-700 font-medium">
                <a href="tel:+97172362065" className="hover:text-emerald-600 transition-colors">
                  Ras Al Khaimah - 07 236 2065
                </a>
              </p>
            </div>
          </div>

          {/* Mail Us */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-4">Email Us</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <a href="mailto:info@zulenergy.com" className="hover:text-emerald-600 transition-colors">
                  info@zulenergy.com
                </a>
              </p>
              <p className="text-gray-700">
                <a href="mailto:marketing@zulenergy.com" className="hover:text-emerald-600 transition-colors">
                  marketing@zulenergy.com
                </a>
              </p>
              <p className="text-gray-700">
                <a href="mailto:procurement@zulenergy.com" className="hover:text-emerald-600 transition-colors">
                  procurement@zulenergy.com
                </a>
              </p>
              <p className="text-gray-700">
                <a href="mailto:careers@zulenergy.com" className="hover:text-emerald-600 transition-colors">
                  careers@zulenergy.com
                </a>
              </p>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-4">Address</h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Office: </strong>
              Dubai
              <br />
              JLT, Cluster N, 19th Floor<br />
              Office No. 1903 - JBC 4
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Plant: </strong>
              Ras Al Khaimah - Al Ghayl
            </p>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-600 mb-4">Office Hours</h3>
            <div className="space-y-1 text-gray-700">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </main>
  )
}
