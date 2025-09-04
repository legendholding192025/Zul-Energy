import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative text-white mt-24">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.legendholding.com/videos/video_cdn_68b92423aaf8e3.75400146_20250904_053115.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 md:py-56">
        <div className="text-right">
          <h1 className="font-headline mb-0 text-white">
            CRAFTSMANSHIP
          </h1>
          <h2 className="font-headline mb-0 text-zul-yellow">
            IN OIL&GAS
          </h2>
          <p className="font-headline mb-0 text-zul-yellow">
            ENGINEERED
          </p>
          <p className="font-headline text-white">
            IN THE UAE
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
