import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Illustration behind hero content */}
      <div className="absolute inset-0 flex justify-center z-10 items-end pointer-events-none -z-1" aria-hidden="true">
        <svg className="w-full max-w-6xl h-auto" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1332" cy="248" r="118" />
            <circle cx="55" cy="443" r="84" />
          </g>
        </svg>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 z-0">
        <div className="pt-20 pb-8 md:pt-24 md:pb-14">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className='text-emerald-400'>Welcome</span> To The <span className='bg-blue-200 px-2  rounded-xl'>UI</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Heaven</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Seamless on all devices, set up once for everlasting beauty ,  Effortless elegance, endless allure. Simplify setup .</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
