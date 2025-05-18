import React from 'react'
import { RadioIcon } from '@heroicons/react/24/outline'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
  return (
    <nav className="z-50 fixed top-0 w-full flex items-center justify-center px-10 backdrop-blur-lg border-b border-gray-800 py-3">
      <div className="flex items-center justify-between w-11/12">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold font-mono">
            <RadioIcon className="w-6 h-6 text-[#DAFF01]" />
          </span>
          <span className="text-xl font-semibold font-mono">RankForge</span>
        </div>
        <div className="flex items-center gap-4 text-md">
          <a
            href="#leaderboard"
            className="hover:text-[#DAFF01] transition-all"
          >
            Leaderboard
          </a>
          <a
            href="#contributors"
            className="hover:text-[#DAFF01] transition-all"
          >
            Contributors
          </a>
        </div>
        <div>
          <Button size="default">
            <Link to="/login">Log in/Sign up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
