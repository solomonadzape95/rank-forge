import React from 'react'
import { Button } from '../ui/button'
import Navbar from './Navbar'

const Hero: React.FC = () => {
  const profiles = Array(5)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="w-10 h-10 rounded-full bg-gray-200 -ml-2 first:ml-0 border-2 border-white "
      >
        <img
          src="https://avatar.iran.liara.run/public"
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>
    ))
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between bg-white overflow-x-hidden scrollbar-none">
      <Navbar />
      <div className="relative h-[100vh] w-full mr-auto mt-10 z-10 scrollbar-none">
        <div className="relative flex flex-col items-start justify-center text-left gap-6 md:gap-8 border-t-2 rounded-xl pr-6 pl-6 border-[#D6D6D6] h-1/3 max-w-7xl mx-auto">
          <h1 className=" leading-normal text-5xl md:text-6xl lg:text-7xl font-medium text-[#212529] lg:text-left text-center">
            Your Contributions Deserve the Spotlight
          </h1>
          <span className="absolute top-0 right-0 left-[62%] bottom-0 h-full border-r border-b  border-gray-200 rounded-tr-xl rounded-br-2xl pointer-events-none"></span>
        </div>
        <div className="flex flex-col md:flex-row justify-start items-start  w-[98%] h-1/2 left-0 scrollbar-none">
          <span className="w-full md:w-3/5 h-full flex justify-center items-center rounded-bl-none rounded-tl-none rounded-br-xl rounded-tr-xl ">
            <img src="/collabo.gif" alt="Hero" className="object-center" />
          </span>
          <div className="h-full flex flex-col justify-start text-left gap-6 md:gap-8 p-6">
            <div className="flex flex-wrap">{profiles}</div>
            <p className="text-[#212529] max-w-lg pr-6 mb-2 border-[#D6D6D6]">
              Log your GitHub contributions, earn XP, and climb the leaderboard.
              Compete, collaborate, and unlock achievements as you grow your
              impact.
            </p>
            <hr className="w-11/12" />
            <div className="flex gap-4 mt-2">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="ghost">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
