
"use client"

import { X, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { Constituency } from "@/lib/election-data"

interface CandidatePanelProps {
  constituency: Constituency | null
  isOpen: boolean
  onClose: () => void
}

const partyNames = {
  green: "Green Party",
  bnp: "Bangladesh Nationalist Party",
  blue: "Blue Party",
  orange: "Orange Party",
  independent: "Independent",
}

const partyLogos = {
  green: "/images/green-leaf-party-logo.jpg",
  bnp: "/images/bnp.png",
  blue: "/images/blue-star-party-logo.jpg",
  orange: "/images/orange-sun-party-logo.jpg",
  independent: "/images/placeholder.svg",
}

export function CandidatePanel({ constituency, isOpen, onClose }: CandidatePanelProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-[400px] lg:w-[420px] bg-white border-l border-border shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {constituency && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border p-4 lg:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-orange-500 mb-1">Constituency</p>
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-900">{constituency.name}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-500">Seat #{constituency.seatNumber}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-900 hover:bg-orange-50"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="p-4 lg:p-6 space-y-6">
              {/* Candidates List */}
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 delay-100">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-orange-500" />
                  <h3 className="font-semibold text-gray-900">Candidates</h3>
                </div>

                <div className="space-y-4">
                  {constituency.candidates.map((candidate, index) => (
                    <div
                      key={candidate.id}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-orange-300 hover:bg-orange-50/50 transition-all duration-200 animate-in fade-in slide-in-from-right-2"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      {/* Candidate Info Row */}
                      <div className="flex items-center gap-4">
                        {/* Candidate Photo */}
                        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 ring-2 ring-orange-200">
                          {
                            (() => {
                              // Normalize photo path: ensure leading slash and strip query params
                              const raw = candidate.photo || "/images/placeholder.svg"
                              const path = raw.split("?")[0]
                              const src = path.startsWith("/") ? path : `/${path}`
                              return (
                                <img
                                  src={src}
                                  alt={candidate.name}
                                  onError={(e) => {
                                    ;(e.currentTarget as HTMLImageElement).src = "/images/placeholder.svg"
                                  }}
                                  className="w-full h-full object-cover"
                                />
                              )
                            })()
                          }
                        </div>

                        {/* Candidate Name */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-lg text-gray-900">{candidate.name}</h4>
                          <p className="text-sm text-gray-500 mt-1">Candidate</p>
                        </div>
                      </div>

                      <Separator className="my-4 bg-gray-200" />

                      {/* Party Info Row */}
                      <div className="flex items-center gap-4">
                        {/* Party Logo */}
                        <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden flex-shrink-0 flex items-center justify-center">
                          <img
                            src={
                              (partyLogos[candidate.party as keyof typeof partyLogos] || "/images/placeholder.svg").split("?")[0]
                            }
                            alt={partyNames[candidate.party as keyof typeof partyNames]}
                            onError={(e) => {
                              ;(e.currentTarget as HTMLImageElement).src = "/images/placeholder.svg"
                            }}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Party Name */}
                        <div className="flex-1">
                          <p className="text-xs text-gray-500 uppercase tracking-wider">Party</p>
                          <p className="font-medium text-gray-900">
                            {partyNames[candidate.party as keyof typeof partyNames]}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
