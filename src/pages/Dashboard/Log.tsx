import { useState } from 'react'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import { Button } from '@/components/ui/button'

export default function Log() {
  const [form, setForm] = useState({
    title: '',
    project: '',
    github: '',
    description: '',
    files: [] as Array<File>,
  })
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setForm({ ...form, files: Array.from(e.target.files) })
    }
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSuccess(true)
      setSubmitting(false)
      setForm({
        title: '',
        project: '',
        github: '',
        description: '',
        files: [],
      })
    }, 1200)
  }

  return (
    <div className="min-h-screen w-full bg-[#111113] flex flex-col items-center">
      <DashboardNavbar />
      <div className="w-full max-w-xl mt-5 bg-[#18181b] rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Log a New Contribution
        </h2>
        {success && (
          <div className="mb-4 p-3 rounded-lg bg-green-700/20 text-green-300 text-center font-semibold">
            Contribution submitted successfully!
          </div>
        )}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 mb-1 font-semibold">
              Contribution Title
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#232336] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
              placeholder="e.g. Add OAuth to Login"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-semibold">
              Project Name
            </label>
            <input
              type="text"
              name="project"
              value={form.project}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#232336] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
              placeholder="e.g. RankForge Frontend"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-semibold">
              GitHub Link
            </label>
            <input
              type="url"
              name="github"
              value={form.github}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-[#232336] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
              placeholder="e.g. https://github.com/your-repo/pull/123"
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-semibold">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-[#232336] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DAFF01]"
              placeholder="Describe your contribution..."
            />
          </div>
          <div>
            <label className="block text-gray-300 mb-1 font-semibold">
              Files/Images (optional)
            </label>
            <input
              type="file"
              name="files"
              multiple
              onChange={handleFileChange}
              className="w-full text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#232336] file:text-[#DAFF01] hover:file:bg-[#18181b]"
            />
            {form.files.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {form.files.map((file, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#232336] text-[#DAFF01] rounded text-xs"
                  >
                    {file.name}
                  </span>
                ))}
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="mt-2 bg-[#DAFF01] text-black font-bold hover:bg-[#e6e600]"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit Contribution'}
          </Button>
        </form>
      </div>
    </div>
  )
}
