import React from "react";

export default function AboutTeam() {
  return (
    <section
      id="team"
      className="relative h-screen w-screen overflow-hidden flex flex-col items-center justify-start bg-[url('/BG.svg')] bg-cover bg-center bg-no-repeat font-[Poppins]"
    >
      <img
        src="/Group 9.svg"
        alt="Note"
        className="absolute top-1 sm:top-2 left-6 sm:left-10 w-64 sm:w-72 md:w-80 drop-shadow-md rotate-[-3deg] z-10"
      />
      <img
        src="/monument.svg"
        alt="India Gate"
        className="absolute bottom-[5%] left-[5%] w-24 sm:w-36 md:w-44 opacity-90 z-10"
      />
      <div className="relative w-full flex items-end justify-center mt-32 md:mt-36 z-20 translate-x-[4%]">
        <img
          src="/Group 2.svg"
          alt="Team"
          className="w-[55%] sm:w-[50%] md:w-[45%] mx-auto opacity-90 select-none"
        />
        <h3 className="absolute -top-12 sm:top-12 left-[18%] sm:left-[15%] text-xs sm:text-sm md:text-base italic text-gray-700">
          Branding Experts
        </h3>
        <img
          src="/Vector.svg"
          alt="Arrow Left"
          className="absolute top-[-0.5rem] sm:top-[0.5rem] left-[18%] sm:left-[25%] w-10 sm:w-14 md:w-16 rotate-[25deg]"
        />
        <h3 className="absolute -top-16 sm:-top-20 text-xs sm:text-sm md:text-base italic text-gray-700">
          Film Makers
        </h3>
        <img
          src="/Vector2.svg"
          alt="Arrow Right"
          className="absolute -top-12 sm:-top-16 right-[28%] sm:right-[46%] w-10 sm:w-14 md:w-16 rotate-[-10deg]"
        />
        
      </div>
      <div className="absolute bottom-[10%] text-center space-y-4 z-20">
        <h2 className="text-base sm:text-lg md:text-2xl text-gray-800">
          Take a closer look at the stories V bring to life.
        </h2>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm md:text-base hover:bg-orange-700 transition">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
