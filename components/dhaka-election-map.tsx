"use client"

import { useState } from "react"
import { HexagonGrid } from "./hexagon-grid"
import { CandidatePanel } from "./candidate-panel"
import { Legend } from "./legend"
import { constituencies } from "@/lib/election-data"
import type { Constituency } from "@/lib/election-data"

export function DhakaElectionMap() {
  const [selectedConstituency, setSelectedConstituency] = useState<Constituency | null>(null)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

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
      {/* Main Map Area */}
      <div className="flex-1 flex flex-col">
        <header className="border-b border-gray-200 bg-white p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-orange-500">Election Dashboard</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dhaka Heat Map</h1>
            </div>
            <div className="flex items-center gap-4">
              <Legend />
            </div>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
          <HexagonGrid
            constituencies={constituencies}
            onHexagonClick={handleHexagonClick}
            selectedId={selectedConstituency?.id}
          />
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
              <p className="text-2xl lg:text-3xl font-bold text-gray-900">2024</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Election Year</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Candidate Panel Slider */}
      <CandidatePanel constituency={selectedConstituency} isOpen={isPanelOpen} onClose={handleClosePanel} />
    </div>
  )
}
