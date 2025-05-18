import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  TrophyIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const mockContributions = [
  {
    id: 1,
    title: 'Add OAuth to Login',
    project: 'RankForge Frontend',
    user: 'Alex Johnson',
    date: '2024-06-01',
    status: 'Pending',
    github: 'https://github.com/rankforge/pull/123',
    description: 'Implemented OAuth login for better security.',
    files: ['oauth.png'],
  },
  {
    id: 2,
    title: 'Improve Leaderboard UI',
    project: 'RankForge Frontend',
    user: 'Maria Lee',
    date: '2024-06-02',
    status: 'Pending',
    github: 'https://github.com/rankforge/pull/124',
    description: 'Refactored leaderboard for better UX.',
    files: [],
  },
]

const mockUsers = [
  {
    id: 1,
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    role: 'Contributor',
  },
  {
    id: 2,
    name: 'Maria Lee',
    email: 'maria.lee@example.com',
    role: 'Contributor',
  },
  { id: 3, name: 'Admin User', email: 'admin@rankforge.com', role: 'Admin' },
]

const criteria = [
  { key: 'documentation', label: 'Documentation Quality' },
  { key: 'readability', label: 'Code Readability' },
  { key: 'relevance', label: 'Relevance' },
]

export default function AdminDashboard() {
  const [selected, setSelected] = useState<
    null | (typeof mockContributions)[0]
  >(null)
  const [scores, setScores] = useState({
    documentation: 0,
    readability: 0,
    relevance: 0,
  })
  const [comment, setComment] = useState('')
  const [scoring, setScoring] = useState(false)
  const [userEdit, setUserEdit] = useState<null | (typeof mockUsers)[0]>(null)
  const [users, setUsers] = useState(mockUsers)

  function openScoreModal(contribution: (typeof mockContributions)[0]) {
    setSelected(contribution)
    setScores({ documentation: 0, readability: 0, relevance: 0 })
    setComment('')
  }
  function handleScoreChange(key: string, value: number) {
    setScores((prev) => ({ ...prev, [key]: value }))
  }
  function handleSubmitScore() {
    setScoring(true)
    setTimeout(() => {
      setScoring(false)
      setSelected(null)
    }, 1200)
  }
  function handleRemoveUser(id: number) {
    setUsers((prev) => prev.filter((u) => u.id !== id))
  }
  function handleEditUser(user: (typeof mockUsers)[0]) {
    setUserEdit(user)
  }
  function handleSaveUser() {
    setUserEdit(null)
  }

  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0)

  return (
    <div className="min-h-screen w-full bg-[#18181b] flex flex-col items-center pt-32 pb-16 px-2 md:px-0">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Pending Contributions */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">
            Pending Contributions
          </h2>
          <div className="flex flex-col gap-4">
            {mockContributions.map((c) => (
              <div
                key={c.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-[#232336] rounded-2xl shadow-lg p-6"
              >
                <div className="flex-1">
                  <div className="font-bold text-lg text-white mb-1">
                    {c.title}
                  </div>
                  <div className="text-gray-400 text-sm mb-1">
                    {c.project} • {c.user} • {c.date}
                  </div>
                  <div className="text-xs text-[#DAFF01] mb-1">{c.status}</div>
                  <div className="text-xs text-gray-400 truncate max-w-xs">
                    {c.github}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#DAFF01] text-black font-bold hover:bg-[#e6e600]"
                    onClick={() => openScoreModal(c)}
                  >
                    <EyeIcon className="w-5 h-5 mr-1" /> Review & Score
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* User Management */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Manage Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left bg-[#232336] rounded-2xl shadow-lg">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-700">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-800 last:border-0"
                  >
                    <td className="py-3 px-4 text-white font-semibold">
                      {user.name}
                    </td>
                    <td className="py-3 px-4 text-gray-300">{user.email}</td>
                    <td className="py-3 px-4 text-[#DAFF01] font-bold">
                      {user.role}
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#DAFF01] text-[#DAFF01] hover:bg-[#232336]"
                        onClick={() => handleEditUser(user)}
                      >
                        <PencilIcon className="w-4 h-4 mr-1" /> Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRemoveUser(user.id)}
                      >
                        <TrashIcon className="w-4 h-4 mr-1" /> Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
      {/* Modal for scoring */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#232336] rounded-2xl shadow-2xl p-8 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setSelected(null)}
            >
              <XCircleIcon className="w-7 h-7" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-2">
              Review & Score
            </h3>
            <div className="mb-2 text-gray-300 font-semibold">
              {selected.title}
            </div>
            <div className="mb-2 text-gray-400 text-sm">
              {selected.project} • {selected.user} • {selected.date}
            </div>
            <div className="mb-2 text-xs text-[#DAFF01]">{selected.github}</div>
            <div className="mb-4 text-gray-200 text-sm">
              {selected.description}
            </div>
            {selected.files.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {selected.files.map((file, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#18181b] text-[#DAFF01] rounded text-xs"
                  >
                    {file}
                  </span>
                ))}
              </div>
            )}
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                handleSubmitScore()
              }}
            >
              {criteria.map((c) => (
                <div key={c.key} className="flex flex-col gap-1">
                  <label className="text-gray-300 font-semibold mb-1">
                    {c.label}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={50}
                    step={5}
                    value={scores[c.key as keyof typeof scores]}
                    onChange={(e) =>
                      handleScoreChange(c.key, Number(e.target.value))
                    }
                    className="w-full accent-[#DAFF01]"
                  />
                  <div className="text-xs text-gray-400">
                    {scores[c.key as keyof typeof scores]} / 50
                  </div>
                </div>
              ))}
              <div>
                <label className="text-gray-300 font-semibold mb-1">
                  Admin Comments (optional)
                </label>
                <textarea
                  className="w-full px-3 py-2 rounded-lg bg-[#18181b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add any comments for the contributor..."
                />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DAFF01] text-black font-bold text-lg shadow">
                  <TrophyIcon className="w-5 h-5" />
                  {totalScore} pts
                </span>
                <Button
                  type="submit"
                  className="bg-[#DAFF01] text-black font-bold hover:bg-[#e6e600]"
                  disabled={scoring}
                >
                  {scoring ? 'Submitting...' : 'Submit Score'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Modal for editing user */}
      {userEdit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#232336] rounded-2xl shadow-2xl p-8 w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={() => setUserEdit(null)}
            >
              <XCircleIcon className="w-7 h-7" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">Edit User</h3>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault()
                handleSaveUser()
              }}
            >
              <div>
                <label className="block text-gray-300 mb-1 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-[#18181b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
                  value={userEdit.name}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#18181b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
                  value={userEdit.email}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1 font-semibold">
                  Role
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg bg-[#18181b] text-white focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
                  value={userEdit.role}
                  onChange={(e) =>
                    setUserEdit({ ...userEdit, role: e.target.value })
                  }
                >
                  <option value="Contributor">Contributor</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <Button
                type="submit"
                className="bg-[#DAFF01] text-black font-bold hover:bg-[#e6e600]"
              >
                Save
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
