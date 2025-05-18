import { Link, useLocation } from '@tanstack/react-router'
import {
  CheckCircleIcon,
  HomeIcon,
  ListBulletIcon,
  RadioIcon,
} from '@heroicons/react/24/outline'

const links = [
  {
    icon: <HomeIcon className="w-6 h-6 " />,
    name: 'Home',
    url: '/dashboard',
  },
  {
    icon: <ListBulletIcon className="w-6 h-6 " />,
    name: 'Log',
    url: '/log',
  },
  {
    icon: <CheckCircleIcon className="w-6 h-6 " />,
    name: 'Contribution',
    url: '/contributions',
  },
]
export default function DashboardNavbar() {
  const pathname = useLocation().pathname
  return (
    <div className="sticky bg-[#111113] top-0 z-50 backdrop-blur-xl flex items-center justify-between w-full px-5 py-3">
      <div className="flex items-center gap-2 ">
        <span className="text-xl font-semibold font-mono">
          <RadioIcon className="w-6 h-6 text-[#DAFF01]" />
        </span>
        <span className="text-xl font-semibold font-mono hover:cursor-pointer hover:text-[#DAFF01]">
          <Link to="/">RankForge</Link>
        </span>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#232336] rounded-full flex p-1 gap-2">
          {links.map((link, i) => (
            <button
              key={i}
              className={`hover:cursor-pointer px-6 py-2 rounded-full font-semibold transition-all ${
                pathname.includes(link.url)
                  ? 'bg-[#DAFF01] text-black shadow'
                  : 'text-gray-400 hover:text-[#DAFF01]'
              }`}
            >
              <Link to={link.url} className="flex items-center gap-2">
                {link.icon}
                <span
                  className={`${pathname.includes(link.url) ? 'inline' : 'hidden'}`}
                >
                  {link.name}
                </span>
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center rounded-full overflow-hidden">
          <img src="/avatars/3.png" className="w-10 h-10" />
        </span>
      </div>
    </div>
  )
}
