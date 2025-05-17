import React from 'react'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-10/12 mx-auto px-6 py-3 flex items-center justify-between bg-transparent backdrop-blur-md rounded-2xl">
      <div className="flex items-center gap-3">
        <span className="text-[#212529] text-2xl font-bold tracking-tight font-mono">
          RankForge
        </span>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#leaderboard"
          className="text-[#212529] hover:text-red-400 transition font-medium"
        >
          Leaderboard
        </a>
        <a
          href="#contributors"
          className="text-[#212529] hover:text-red-400 transition font-medium"
        >
          Contributors
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Button size="default">Log in/Sign up</Button>
      </div>
    </nav>
  )
}

export default Navbar
