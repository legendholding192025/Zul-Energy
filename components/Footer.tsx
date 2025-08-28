import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-black" style={{ backgroundColor: 'rgb(188, 190, 192)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Company Info - Spans 5 columns */}
          <div className="lg:col-span-5">
            <div className="mb-6">
              <Image 
                src="/logo/ZUL_LOGO_FOOTER.svg"
                alt="ZUL ENERGY Logo"
                width={200}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </div>
            <p className="text-gray-700 text-base leading-relaxed max-w-md font-body">
              Zul Energy is a subsidiary of Legend Holding Group, delivering innovative and sustainable chemical solutions for the Oil & Gas industry.
            </p>
          </div>
          
          {/* Quick Links - Spans 3 columns with left border */}
          <div className="lg:col-span-3 lg:relative">
            <div className="lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-px lg:bg-black"></div>
            <div className="lg:pl-8">
              <h4 className="text-lg font-semibold mb-6 font-subhead text-zul-green">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'R&D', href: '/rd' },
                  { name: 'About', href: '/about' },
                  { name: 'News', href: '/news' },
                  { name: 'Contact', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-zul-yellow transition-colors font-body text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Company Contact Info - Spans 4 columns with left border */}
          <div className="lg:col-span-4 lg:relative">
            <div className="lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-px lg:bg-black"></div>
            <div className="lg:pl-8">
              <h4 className="text-lg font-semibold mb-6 font-subhead text-zul-green">ZUL ENERGY MIDDLE EAST FZ LLC</h4>
              <ul className="space-y-3 mb-8">
                <li>
                  <span className="text-gray-700 font-body text-base">+971 7 236 2065</span>
                </li>
                <li>
                  <a href="mailto:info@zulenergy.com" className="text-gray-700 hover:text-zul-yellow transition-colors font-body text-base">
                    info@zulenergy.com
                  </a>
                </li>
                <li>
                  <span className="text-gray-700 font-body text-base">Corporate Office: Dubai, UAE</span>
                </li>
                <li>
                  <span className="text-gray-700 font-body text-base">Plant: Ras Al Khaimah, UAE</span>
                </li>
              </ul>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/19KowfbS7s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zul-grey-dark rounded-full flex items-center justify-center hover:bg-zul-green transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* X (Twitter) */}
                <a
                  href="https://x.com/ZulEnergy?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zul-grey-dark rounded-full flex items-center justify-center hover:bg-zul-green transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@zulenergy2618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zul-grey-dark rounded-full flex items-center justify-center hover:bg-zul-green transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/zul-energy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-zul-grey-dark rounded-full flex items-center justify-center hover:bg-zul-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm mb-4 md:mb-0 font-body">
            © 2024 ZUL ENERGY. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy-policy" className="text-gray-700 hover:text-zul-yellow transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-zul-yellow transition-colors font-body">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
