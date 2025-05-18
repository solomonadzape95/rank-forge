import { RadioIcon } from '@heroicons/react/24/outline'
import { Link } from '@tanstack/react-router'
import { Button } from '../ui/button'

export default function Signup() {
  return (
    <div className="w-full h-screen flex items-center justify-between p-4">
      <section className="w-full md:w-1/2 h-full flex items-center justify-start px-4 md:px-16">
        <div className="h-10/12 w-sm flex flex-col gap-10 mx-auto">
          <div className="flex items-center gap-2 mb-10">
            <span className="text-xl font-semibold font-mono">
              <RadioIcon className="w-6 h-6 text-[#DAFF01]" />
            </span>
            <span className="text-xl font-semibold font-mono hover:cursor-pointer hover:text-[#DAFF01] transition-all">
              <Link to="/">RankForge</Link>
            </span>
          </div>
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold text-[#ebebeb]">
              Hello,
              <br />
              Nice to meet you
            </h1>
            <p className="text-gray-400">
              Create your RankForge account to start tracking your
              contributions.
            </p>
          </div>
          <section>
            <form className="flex flex-col gap-5 mb-10">
              <div>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md focus:border-gray-800 bg-[#18181b] px-4 py-2 focus:border-2 focus:outline-none"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-md focus:border-gray-800 bg-[#18181b] px-4 py-2 focus:border-2 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full rounded-md focus:border-gray-800 bg-[#18181b] px-4 py-2 focus:border-2 focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <Button type="submit">Sign Up</Button>
            </form>
            <span className="text-gray-400 text-sm hover:cursor-pointer">
              Already have an account?{' '}
              <Link to="/login" className="hover:text-[#DAFF01] transition-all">
                Log in
              </Link>
            </span>
          </section>
        </div>
      </section>
      <section className="w-1/2 h-full hidden md:flex items-center justify-center rounded-xl overflow-hidden">
        <img src="/auth.png" className="w-full h-full object-cover" />
      </section>
    </div>
  )
}
