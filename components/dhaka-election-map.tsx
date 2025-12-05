

"use client"

import { useState } from "react"
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

  // Form state for candidate submission modal
  const [candidateName, setCandidateName] = useState("")
  const [partyName, setPartyName] = useState("")
  const [seatNumber, setSeatNumber] = useState<number | "">("")

  const openModalFromMenu = () => {
    setIsMenuOpen(false)
    setIsModalOpen(true)
  }

  const handleSubmitCandidate = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just log the submitted values and close the modal
    // TODO: wire up to backend or Google Form if needed
    // eslint-disable-next-line no-console
    console.log({ candidateName, partyName, seatNumber })
    setIsModalOpen(false)
    setCandidateName("")
    setPartyName("")
    setSeatNumber("")
    alert("Candidate info submitted (local demo).")
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
    <div className="relative flex min-h-screen overflow-hidden bg-gray-50">
      {/* Left Menu Button */}
      <div className="fixed left-12 top-32 z-50">
        <div className="relative">
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            title="Menu"
          >
            <MoreVertical size={24} className="text-gray-700" />
          </button> */}
<div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <button
                onClick={openModalFromMenu}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                📝 Submit Candidate Info
              </button>
            </div>
          {/* Dropdown Menu */}
          {/* {isMenuOpen && (
            <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
              <button
                onClick={openModalFromMenu}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors first:rounded-t-lg last:rounded-b-lg"
              >
                📝 Submit Candidate Info
              </button>
            </div>
          )} */}
        </div>
      </div>

      {/* Main Map Area */}
      <div className="flex-1 flex flex-col">
        <header className="border-b border-gray-200 bg-white p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-orange-500">Dhaka Election Dashboard</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dhaka Election Heat Map</h1>
            </div>
            <div className="flex items-center gap-4">
              <Legend />
            </div>
          </div>
        </header>

        {/* Map Container */}
        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <div className="relative">
            {/* Hexagon Grid */}
            <HexagonGrid
              constituencies={constituencies}
              onHexagonClick={handleHexagonClick}
              selectedId={selectedConstituency?.id}
            />
          </div>
        </div>

        <footer className="border-t border-gray-200 bg-white p-4 lg:p-6">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-gray-900">20</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Total Seats</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-orange-500">Dhaka</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">District</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-gray-900">2026</p>
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
              <div>
                <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
                <input
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Party Name</label>
                <input
                  type="text"
                  value={partyName}
                  onChange={(e) => setPartyName(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Election Seat</label>
                <select
                  value={seatNumber}
                  onChange={(e) => setSeatNumber(Number(e.target.value))}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <option value="">Select seat</option>
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 rounded-md bg-gray-100">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 rounded-md bg-orange-600 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Candidate Panel Slider */}
      <CandidatePanel constituency={selectedConstituency} isOpen={isPanelOpen} onClose={handleClosePanel} />
    </div>
  )
}
