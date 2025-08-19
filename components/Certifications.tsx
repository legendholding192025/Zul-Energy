import React from 'react'
import Image from 'next/image'

const Certifications = () => {
	return (
		<section id="certifications" className="py-12 md:py-20 bg-white overflow-x-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Standard section heading */}
				<div className="text-center mb-16">
					<h2 className="font-headline text-zul-grey-dark mb-4">
						Certifications
					</h2>
					<div className="w-24 h-1 bg-zul-yellow mx-auto"></div>
				</div>
				{/* Top row: green title bar + grey capsule */}
				<div className="relative flex flex-col md:flex-row items-center">
					{/* Left green title bar */}
					<div className="bg-zul-green px-4 md:pl-8 md:pr-16 py-3 md:py-2 inline-flex items-center justify-center self-center w-full md:w-auto mb-4 md:mb-0" style={{ marginLeft: 'calc(50% - 50vw)', width: 'calc(50vw + 4px)' }}>
						<h2 className="font-headline text-white text-lg md:text-2xl lg:text-4xl" style={{ marginLeft: '2rem' }}>Quality Certifications</h2>
					</div>
					{/* Right grey capsule (overlaps green bar) */}
					<div className="flex-1 relative w-full">
						<div className="absolute inset-y-0 right-0 bg-[#7a7d81] rounded-l-[2rem] md:rounded-l-[8rem] z-10" style={{ right: 'calc(50% - 50vw)', left: -8 }} />
						{/* Image inside grey area */}
						<div className="relative z-20 w-full h-32 md:h-40 flex items-center justify-center px-4">
							<Image src="/logo/ISO.png" alt="ISO Certifications" width={900} height={160} className="max-h-28 md:max-h-36 w-auto h-auto object-contain" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Certifications
