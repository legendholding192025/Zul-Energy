import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative text-white mt-24 sm:min-h-[calc(100svh-6rem)] lg:min-h-[calc(100vh-6rem)]">
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40 lg:py-56">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-headline mb-0 text-white font-bold">
            CRAFTSMANSHIP
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-headline mb-0 text-zul-yellow font-bold">
            IN OIL&GAS
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-headline mb-0 text-zul-yellow font-bold">
            ENGINEERED
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-headline text-white font-bold">
            IN THE UAE
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
