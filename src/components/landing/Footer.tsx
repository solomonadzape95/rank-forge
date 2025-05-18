

export default function Footer() {
  return (
    <footer className="bg-[#18181b] text-gray-400 px-6 md:px-16 lg:px-32 py-12 h-[70vh]">
      <div className="max-w-7xl mx-auto">
        {/* Logo and copyright */}
        <div className="mb-8">
          <img
            src="/footer_logo.svg"
            alt="RankForge Logo"
            className="h-8 mb-2"
          />
          <div className="text-sm">
            &copy; 2025 RankForge. All rights reserved.
          </div>
        </div>
        {/* Footer links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-3">Product</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  How it works
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-3">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Status
                </a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-3">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#DAFF01]">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
