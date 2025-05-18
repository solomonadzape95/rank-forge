import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import { leaderboard as leaderboardData } from '@/lib/data'

export default function Ranks() {
  const [tab, setTab] = useState('daily')

  const topUsers = leaderboardData.slice(0, 3)
  const rest = leaderboardData.slice(3)
  return (
    <div className="min-h-screen w-full bg-[#111113] flex flex-col items-center">
      <DashboardNavbar />
      <section className="px-5 w-full mt-8 flex-1 overflow-hidden h-11/12">
        <div className="w-full mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#232336] rounded-full flex p-1 gap-2">
              <button
                className={`hover:cursor-pointer px-6 py-2 rounded-full font-semibold transition-all ${
                  tab === 'daily'
                    ? 'bg-[#DAFF01] text-black shadow'
                    : 'text-gray-400 hover:text-[#DAFF01]'
                }`}
                onClick={() => setTab('daily')}
              >
                Daily
              </button>
              <button
                className={`hover:cursor-pointer px-6 py-2 rounded-full font-semibold transition-all ${
                  tab === 'monthly'
                    ? 'bg-[#DAFF01] text-black shadow'
                    : 'text-gray-400 hover:text-[#DAFF01]'
                }`}
                onClick={() => setTab('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
          {/* Podium */}
          <div className="mx-auto w-10/12 md:w-3xl flex flex-col md:flex-row justify-center md:items-end gap-4 mb-10">
            {/* 2nd Place */}
            <div className="flex-1 flex flex-col items-center bg-[#232336] rounded-2xl p-6 shadow-lg">
              <div className="relative">
                <img
                  src={topUsers[1].imageUrl}
                  alt={topUsers[1].fullName}
                  className="w-20 h-20 rounded-full border-4 border-[#7F4A8E] object-cover mb-2"
                />
                <span className="absolute -top-2 -left-2 bg-[#DAFF01] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-white text-lg">
                  2
                </span>
              </div>
              <div className="text-lg font-semibold text-white hover:cursor-pointer hover:text-[#DAFF01] transition-all">
                <Link to="/profile">{topUsers[1].fullName}</Link>
              </div>
              <div className="text-gray-400 text-sm mb-2">
                {topUsers[1].totalScore} points
              </div>
            </div>
            {/* 1st Place */}
            <div className="flex-1 flex flex-col items-center bg-[#232336] rounded-2xl p-8 shadow-2xl scale-110 z-10">
              <div className="relative">
                <img
                  src={topUsers[0].imageUrl}
                  alt={topUsers[0].fullName}
                  className="w-24 h-24 rounded-full border-4 border-[#7F4A8E] object-cover mb-2"
                />
                <span className="absolute -top-3 -left-3 bg-[#DAFF01] text-black font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white text-2xl">
                  1
                </span>
              </div>
              <div className="text-lg font-semibold text-white hover:cursor-pointer hover:text-[#DAFF01] transition-all">
                <Link to="/profile">{topUsers[0].fullName}</Link>
              </div>
              <div className="text-gray-400 text-sm mb-2">
                {topUsers[0].totalScore} points
              </div>
            </div>
            {/* 3rd Place */}
            <div className="flex-1 flex flex-col items-center bg-[#232336] rounded-2xl p-6 shadow-lg">
              <div className="relative">
                <img
                  src={topUsers[2].imageUrl}
                  alt={topUsers[2].fullName}
                  className="w-20 h-20 rounded-full border-4 border-[#7F4A8E] object-cover mb-2"
                />
                <span className="absolute -top-2 -left-2 bg-[#DAFF01] text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg border-2 border-white text-lg">
                  3
                </span>
              </div>
              <div className="text-lg font-semibold text-white hover:cursor-pointer hover:text-[#DAFF01] transition-all">
                <Link to="/profile">{topUsers[2].fullName}</Link>
              </div>
              <div className="text-gray-400 text-sm mb-2">
                {topUsers[2].totalScore} points
              </div>
            </div>
          </div>
          {/* Leaderboard Table */}
          <div className="bg-[#232336] rounded-2xl shadow-lg overflow-x-auto w-full">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-700">
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-4 px-6">Username</th>
                  <th className="py-3 px-4">Contributions</th>
                  <th className="py-3 px-4">Points</th>
                </tr>
              </thead>
              <tbody>
                {rest.map((user) => (
                  <tr
                    key={user.rank}
                    className="border-b border-gray-800 last:border-0"
                  >
                    <td className="py-3 px-4 text-[#DAFF01] font-bold">
                      {user.rank}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={user.imageUrl}
                          alt={user.fullName}
                          className="w-12 h-12 rounded-full border-2 border-[#7F4A8E] "
                        />
                        <span className="flex flex-col items-start gap-1 min-w-[120px]">
                          <span className="font-semibold hover:cursor-pointer hover:text-[#DAFF01] transition-all">
                            <Link to="/profile">{user.fullName}</Link>
                          </span>
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-white">
                      {user.contributions.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-white">
                      {user.totalScore.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
