import React from 'react'
import {
  Bars3BottomLeftIcon,
  RadioIcon,
} from '@heroicons/react/24/outline'
import { Link, useLocation } from '@tanstack/react-router'
import { Button } from '../ui/button'

const Navbar: React.FC = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <nav className="z-50 fixed top-0 w-full flex items-center justify-center px-10 backdrop-blur-lg border-b border-gray-800 py-3">
      <div className="flex items-center justify-between w-11/12">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold font-mono">
            <RadioIcon className="w-6 h-6 text-[#DAFF01]" />
          </span>
          <span className="text-xl font-semibold font-mono hover:cursor-pointer hover:text-[#DAFF01]">
            <Link to="/">RankForge</Link>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-md">
          <a
            href="/leaderboard"
            className={`hover:text-[#DAFF01] transition-all ${
              pathname === '/leaderboard' ? 'text-[#DAFF01]' : ''
            }`}
          >
            Leaderboard
          </a>
          <a
            href="/contributors"
            className={`hover:text-[#DAFF01] transition-all ${
              pathname === '/contributors' ? 'text-[#DAFF01]' : ''
            }`}
          >
            Contributors
          </a>
        </div>
        <div>
          <Button size="default" className="md:block hidden">
            <Link to="/login">Log in/Sign up</Link>
          </Button>
          <Button size="default" className="md:hidden">
            <Bars3BottomLeftIcon className="text-black" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
