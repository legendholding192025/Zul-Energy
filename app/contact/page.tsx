import React from 'react'
import Header from '@/components/Header'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 min-h-[80vh] bg-gradient-to-br from-zul-green to-zul-green-dark">
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
            <h1 className="font-headline mb-4">
              CONTACT US
            </h1>
            {/* <h2 className="font-headline mb-4 text-zul-yellow">
              LABORATORY
            </h2> */}
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-zul-grey-dark mb-4">
              Contact & Booking
            </h2>
            <div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="font-subhead text-zul-green mb-2">
                  Make appointment
                </h3>
                <p className="font-body text-zul-grey-dark mb-6">
                  Get in touch with Zul Energy for inquiries, partnerships, and support.
                </p>
              </div>
              
              {/* Contact Form */}
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                  />
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <select className="px-3 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body bg-white text-zul-black">
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
                      placeholder="Phone number"
                      className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border-2 border-zul-green rounded-lg focus:outline-none focus:ring-2 focus:ring-zul-green focus:border-transparent font-body text-zul-black bg-white placeholder-zul-grey-dark"
                  />
                </div>
                
                <div>
                  <textarea
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

      {/* Location & Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Google Maps */}
            <div className="space-y-6">
              
              {/* Google Maps Embed */}
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
            
            {/* Right Column - Contact Information */}
            <div className="space-y-8">
              {/* Call Us */}
              <div>
                <h3 className="text-lg font-subhead text-zul-green mb-4">
                  Call Us
                </h3>
                <div className="space-y-2">
                  <p className="text-zul-grey-dark font-medium">
                    +971 4 272 7603
                  </p>
                </div>
              </div>
              
              {/* Mail Us */}
              <div>
                <h3 className="text-lg font-subhead text-zul-green mb-4">
                  Mail Us
                </h3>
                <div className="space-y-2">
                  <p className="text-zul-grey-dark">
                    <a href="mailto:info@zulenergy.com" className="hover:text-zul-green transition-colors">
                      info@zulenergy.com
                    </a>
                  </p>
                  <p className="text-zul-grey-dark">
                    <a href="mailto:marketing@zulenergy.com" className="hover:text-zul-green transition-colors">
                      marketing@zulenergy.com
                    </a>
                  </p>
                  <p className="text-zul-grey-dark">
                    <a href="mailto:procurement@zulenergy.com" className="hover:text-zul-green transition-colors">
                      procurement@zulenergy.com
                    </a>
                  </p>
                  <p className="text-zul-grey-dark">
                    <a href="mailto:careers@zulenergy.com" className="hover:text-zul-green transition-colors">
                      careers@zulenergy.com
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Office Address */}
              <div>
                <h3 className="text-lg font-subhead text-zul-green mb-4">
                  Office Address
                </h3>
                <p className="text-zul-grey-dark">
                  JBC 4 - Office No. 1903 - 19 Floor, Cluster N - Jumeirah Lake Towers, <br />Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
