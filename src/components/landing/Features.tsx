import {
  ArchiveBoxIcon,
  BoltIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: <TrophyIcon className="w-10 h-10 text-[#EB3349]" />,
    title: 'Leaderboard for Social Ranking',
    description:
      'Compete with others and see your rank in real time on the global leaderboard.',
  },
  {
    icon: <BoltIcon className="w-10 h-10 text-[#EB3349]" />,
    title: 'Real-time Scoring',
    description:
      'Your contributions are scored instantly as you push code, open issues, or review PRs.',
  },
  {
    icon: <ArchiveBoxIcon className="w-10 h-10 text-[#EB3349]" />,
    title: 'Proper Storage of Logs',
    description:
      'All your contribution logs are securely stored and easily accessible for your records.',
  },
]

export default function Features() {
  return (
    <section className="mt-10 w-10/12 mx-auto flex flex-col items-center justify-center py-24">
      <h2 className="text-5xl md:text-6xl font-bold text-center mb-12">
        Features
      </h2>
      <div className="flex flex-col lg:flex-row w-full justify-between gap-10 items-center ">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center bg-white rounded-2xl p-8 w-full lg:w-1/3 shadow-[12px_12px_0_0_#e57368,0_8px_32px_0_rgba(244,92,67,0.25)] border border-[#f7b0a2] transition-all duration-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#e57368,0_1px_4px_0_rgba(244,92,67,0.18)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#e57368,0_1px_4px_0_rgba(244,92,67,0.18)] h-72"
          >
            <div className="mb-4 bg-red-50 p-4 rounded-full">{feature.icon}</div>
            <h3 className="text-[1.5rem] font-semibold mb-2 text-[#212529] text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
