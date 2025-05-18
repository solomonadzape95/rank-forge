import { Button } from '../ui/button'

export default function CTA() {
  return (
    <div className="w-10/12 h-96 mx-auto flex justify-center items-center my-10">
      <div className="w-full bg-gradient-to-r from-[#c05342] to-[#ca3f51] rounded-lg relative overflow-hidden h-full backdrop-blur-3xl flex justify-center items-center">
        <div className="relative z-10 rounded-xl backdrop-blur-2xl w-full  mx-auto flex flex-col items-start h-full text-center bg-[#06091f]/20 p-12">
          <h2 className="text-gray-50 text-5xl font-bold w-full my-4 text-center ">
            Start Your Journey Today
          </h2>
          <p className="text-gray-50 text-lg mb-8 max-w-2xl mx-auto">
            Log your GitHub contributions, earn XP, and climb the leaderboard.
            Compete, collaborate, and unlock achievements as you grow your
            impact.
          </p>
          <div className="flex flex-wrap gap-4 mx-auto">
            <Button size="lg">Get Started</Button>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
