import React from 'react'

export default function Hero() {
  return (
    <section
    id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20"
  >

<div className="flex-1 flex items-center justify-center relative">

  <img
  src="/mandala.svg"
  alt="Mandala"
  className="w-48 sm:w-64 md:w-[565px] opacity-70 animate-spin-anticlockwise mx-auto"
  loading="lazy"
/>


  <img
    src="/VFilm.png"
    alt="V Films Logo"
    className="absolute w-48 md:w-[388px] z-10"
  />
</div>


    <div className="flex-1 text-center md:text-left mt-10 md:mt-0 space-y-6">

      <h2 className="text-3xl md:text-4xl font-island leading-snug text-gray-800">
  Varnan is where stories find <br /> their voice and form
</h2>

<h3 className="text-lg tracking-wide text-[#ff5733] font-semibold">
  Films <span className="text-[#ff5733]">·</span> Brands{" "}
  <span className="text-[#ff5733]">·</span> Art
</h3>


      <p className="text-gray-700 max-w-lg leading-relaxed text-sm md:text-base">
        Since 2009, V’ve been telling stories — stories of people,
        their journeys, and the places that shape them. Some begin in
        polished boardrooms, others in humble village squares. But every
        story starts the same way — by listening with intention. V believes
        it takes trust, patience, and an eye for the unseen to capture what
        truly matters. V doesn’t just tell stories — V honors them.
      </p>
    </div>
  </section>
  )
}
