/* eslint-disable @typescript-eslint/no-unnecessary-condition */

export default function Footer() {
  return (
    <div className="bg-[#EB3349]/20 text-gray-600 py-6 overflow-hidden relative h-96 pointer-events-none">
      <div className="w-full flex items-baseline overflow-x-hidden h-full">
        <div className="animate-footer-scroll whitespace-nowrap flex items-end h-full">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="press md:text-[250px] text-[180px] font-bold px-6 text-[#EB3349] leading-none"
            >
              RankForge <span className="text-[#EB3349] rotate-45">*</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes footer-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-footer-scroll {
          display: inline-block;
          animation: footer-scroll 80s linear infinite;
        }
      `}</style>
    </div>
  )
}
