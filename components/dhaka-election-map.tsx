

"use client"

import { useState } from "react"
import { toast } from "sonner"
import { HexagonGrid } from "./hexagon-grid"
import { CandidatePanel } from "./candidate-panel"
import { Legend } from "./legend"
import { constituencies } from "@/lib/election-data"
import type { Constituency } from "@/lib/election-data"
import { MoreVertical } from "lucide-react"

export function DhakaElectionMap() {
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)

  // Form state for candidate submission modal
  const [candidateName, setCandidateName] = useState("")
  const [partyName, setPartyName] = useState("")
  const [seatNumber, setSeatNumber] = useState<number | "">("")
  const [candidateFile, setCandidateFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")
  //  heatlevel functionalities
  const heatLevels = [
    { name: "Low", color: "bg-orange-100" },
    { name: "Medium", color: "bg-orange-300" },
    { name: "High", color: "bg-orange-500" },
    { name: "Very High", color: "bg-orange-700" },
  ]
  const openModalFromMenu = () => {
    setIsMenuOpen(false)
    setIsModalOpen(true)
  }

  const handleSubmitCandidate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const formData = new FormData()
      formData.append("candidateName", candidateName)
      formData.append("partyName", partyName)
      formData.append("seatNumber", String(seatNumber))
      if (candidateFile) {
        formData.append("file", candidateFile)
      }

      const response = await fetch("/api/submit-candidate", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Submission failed")
      }

      setIsModalOpen(false)
      setCandidateName("")
      setPartyName("")
      setSeatNumber("")
      setCandidateFile(null)
      toast.success("Candidate submitted successfully!", {
        description: `${candidateName} from ${partyName} - Seat ${seatNumber}`,
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "An error occurred"
      setSubmitError(errorMsg)
      console.error("Submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleHexagonClick = (constituency: Constituency) => {
    setSelectedConstituency(constituency)
    setIsPanelOpen(true)
  }

  const handleClosePanel = () => {
    setIsPanelOpen(false)
    setTimeout(() => setSelectedConstituency(null), 300)
  }

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-gray-50">
      {/* Left Menu Button */}
      <div className="fixed left-3 top-20 z-50 md:left-12 md:top-32">
        <div className="relative">
          <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
            <button
              onClick={openModalFromMenu}
              className="w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              📝 Submit Candidate Info
            </button>
          </div>
        </div>
      </div>

      {/* Heat Index card under the menu */}
      <div className="fixed left-3 top-44 z-40 md:left-12 md:top-52">
        <div className="w-56 bg-white rounded-lg shadow-sm border border-gray-200 p-3 z-40">
          <p className="text-xs text-gray-500 mb-2">Heat Index</p>
          <div className="flex items-center gap-1">
            {heatLevels.map((level, index) => (
              <div
                key={level.name}
                className={`w-6 h-3 ${level.color} ${index === 0 ? "rounded-l" : ""} ${index === heatLevels.length - 1 ? "rounded-r" : ""}`}
                title={level.name}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="border-b border-gray-200 bg-white p-2 md:p-4 lg:p-6 flex-shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-orange-500">Dhaka Election Dashboard</p>
              <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900">Dhaka Election Heat Map 2026</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">

              <Legend />
              <button onClick={() => setIsTermsModalOpen(true)} className="text-xs md:text-sm text-gray-600 hover:text-orange-600 ml-2 md:ml-4">Terms &amp; Conditions</button>
            </div>
          </div>
        </header>

        {/* Map Container */}
        <div className="flex-1 flex items-center justify-center p-2 md:p-4 lg:p-8 min-h-0 overflow-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Hexagon Grid */}
            <div className="w-full overflow-auto flex items-center justify-center">
              <HexagonGrid
                constituencies={constituencies}
                onHexagonClick={handleHexagonClick}
                selectedId={selectedConstituency?.id}
              />
            </div>
          </div>
        </div>

        <footer className="border-t border-gray-200 bg-white p-2 md:p-4 lg:p-6 flex-shrink-0">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 lg:gap-12">
            <div className="text-center">
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900">20</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Total Seats</p>
            </div>
            <div className="text-center">
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-orange-500">Dhaka</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">District</p>
            </div>
            <div className="text-center">
              <p className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900">2026</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Election Year</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsModalOpen(false)} />

          <form
            onSubmit={handleSubmitCandidate}
            className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 z-50"
            aria-label="Submit Candidate Info"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Submit Candidate Info</h3>
              <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-500">
                ✕
              </button>
            </div>

            <div className="space-y-4">
              {submitError && (
                <div className="p-3 rounded-md bg-red-50 border border-red-200">
                  <p className="text-sm text-red-700">{submitError}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
                <input
                  type="text"
                  placeholder="Enter Candidate Name"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Party Name</label>
                <input
                  type="text"
                  placeholder="Enter Party Name"
                  value={partyName}
                  onChange={(e) => setPartyName(e.target.value)}
                  disabled={isSubmitting}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Election Seat</label>
                <select
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(Number(e.target.value))}
                  disabled={isSubmitting}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300 disabled:bg-gray-100"
                >
                  <option value="">Select seat</option>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700 mb-1">Upload Candidate Image</span>
                <label
                  htmlFor="file-upload"
                  className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-orange-400 transition-colors cursor-pointer"
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <span className="font-medium text-orange-600">Upload a file</span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">JPG, PNG, JPEG up to 10MB</p>
                    {candidateFile && (
                      <p className="text-sm text-orange-600 font-medium mt-2">
                        ✓ {candidateFile.name}
                      </p>
                    )}
                  </div>
                </label>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null
                    if (file) {
                      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']
                      if (!allowedTypes.includes(file.type)) {
                        setSubmitError('Only JPG, JPEG, and PNG files are allowed.')
                        setCandidateFile(null)
                        e.target.value = ''
                        return
                      }
                      setSubmitError('')
                    }
                    setCandidateFile(file)
                  }}
                  accept=".jpg,.jpeg,.png"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={isSubmitting}
                className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Candidate Panel Slider */}
      <CandidatePanel constituency={selectedConstituency} isOpen={isPanelOpen} onClose={handleClosePanel} />

      {/* Terms & Conditions Modal */}
      {isTermsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsTermsModalOpen(false)} />

          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6 z-50 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Terms & Conditions</h3>
              <button type="button" onClick={() => setIsTermsModalOpen(false)} className="text-gray-500 text-xl">
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <h2 className="text-base font-semibold">Hi there!!!</h2>
              <p className="text-sm text-gray-700">
                This platform is created purely for educational and entertainment purposes.
                The data displayed may be incorrect, unverified, or user-submitted.
                Do not use this for political involvement, campaigning, or decision-making.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsTermsModalOpen(false)}
                className="px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
