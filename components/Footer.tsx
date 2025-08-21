import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#1f2e3c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image 
                src="/logo/ZUL_LOGO_FOOTER.svg"
                alt="ZUL ENERGY Logo"
                width={200}
                height={64}
                className="h-16 w-auto"
                priority
              />
            </div>
            <p className="text-zul-grey-light mb-6 max-w-md font-body">
              Zul Energy is a subsidiary of Legend Holding Group, delivering innovative and sustainable chemical solutions for the Oil & Gas industry.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-subhead text-zul-green">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'R&D', href: '/rd' },
                { name: 'About', href: '/about' },
                { name: 'News', href: '/news' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zul-grey-light hover:text-zul-yellow transition-colors font-body"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4 font-subhead text-zul-green">Services</h4>
            <ul className="space-y-2">
              {[
                'Solar Energy', 'Wind Power', 'Energy Storage', 'Smart Grid',
                'Consulting', 'Maintenance', 'Installation', 'Monitoring'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-zul-grey-light hover:text-zul-yellow transition-colors font-body">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-subhead text-zul-green">ZUL ENERGY MIDDLE EAST FZ LLC</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <span className="text-zul-grey-light font-body">+971 7 236 2065</span>
              </li>
              <li>
                <a href="mailto:info@zulenergy.com" className="text-zul-grey-light hover:text-zul-yellow transition-colors font-body">
                  info@zulenergy.com
                </a>
              </li>
              <li>
                <span className="text-zul-grey-light font-body">Corporate Office: Dubai, UAE</span>
              </li>
              <li>
                <span className="text-zul-grey-light font-body">Plant: Ras Al Khaimah, UAE</span>
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
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
        
        {/* Newsletter Signup */}
        {/* <div className="border-t border-zul-grey-dark mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 font-subhead text-zul-green">Stay Updated</h4>
              <p className="text-zul-grey-light font-body">Subscribe to our newsletter for the latest energy insights</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-zul-grey-dark text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-zul-green font-body"
              />
              <button className="bg-zul-green hover:bg-zul-green-light px-6 py-2 rounded-r-lg transition-colors font-body helvetica-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        
        {/* Bottom Bar */}
        <div className="border-t border-zul-grey-dark mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zul-grey-light text-sm mb-4 md:mb-0 font-body">
            © 2024 ZUL ENERGY. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-zul-grey-light hover:text-zul-yellow transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-zul-grey-light hover:text-zul-yellow transition-colors font-body">
              Terms of Service
            </a>
            <a href="#" className="text-zul-grey-light hover:text-zul-yellow transition-colors font-body">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
