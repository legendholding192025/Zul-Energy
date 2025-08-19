import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative text-white mt-24">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://cdn.legendholding.com/images/cdn_683e9e33367140.14677364_20250603_070315.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-zul-green/80 to-primary-900/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-56">
        <div className="text-right">
          <h1 className="font-headline mb-4">
            CRAFTSMANSHIP
          </h1>
          <h2 className="font-headline mb-4 text-zul-yellow">
            IN OIL&GAS
          </h2>
          <p className="font-headline mb-4 text-zul-yellow">
            ENGINEERED
          </p>
          <p className="font-headline">
            IN THE UAE
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
