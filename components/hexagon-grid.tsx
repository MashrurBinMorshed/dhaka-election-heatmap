"use client"

import { Hexagon } from "./hexagon"
import type { Constituency } from "@/lib/election-data"

interface HexagonGridProps {
  constituencies: Constituency[]
  onHexagonClick: (constituency: Constituency) => void
  selectedId?: number
}

export function HexagonGrid({ constituencies, onHexagonClick, selectedId }: HexagonGridProps) {
  const hexSize = 32

  const hexPositions = [
    // Top region (North Dhaka)
    { x: 180, y: 80 }, // Seat 1 - Uttara area
    { x: 240, y: 70 }, // Seat 2 - Tongi area
    { x: 300, y: 90 }, // Seat 3 - Northeast

    // Upper-middle region
    { x: 120, y: 150 }, // Seat 4 - Mirpur north
    { x: 180, y: 140 }, // Seat 5 - Pallabi
    { x: 240, y: 135 }, // Seat 6 - Cantonment
    { x: 320, y: 155 }, // Seat 7 - Badda area

    // Central region (Core Dhaka)
    { x: 100, y: 220 }, // Seat 8 - Mirpur south
    { x: 160, y: 210 }, // Seat 9 - Mohammadpur
    { x: 230, y: 200 }, // Seat 10 - Tejgaon
    { x: 295, y: 215 }, // Seat 11 - Gulshan
    { x: 360, y: 230 }, // Seat 12 - Khilkhet

    // Lower-middle region
    { x: 120, y: 290 }, // Seat 13 - Dhanmondi
    { x: 185, y: 280 }, // Seat 14 - Ramna
    { x: 255, y: 280 }, // Seat 15 - Motijheel
    { x: 330, y: 305 }, // Seat 16 - Rampura

    // South region
    { x: 175, y: 360 }, // Seat 17 - Old Dhaka west
    { x: 250, y: 355 }, // Seat 18 - Old Dhaka east
    { x: 325, y: 380 }, // Seat 19 - Demra
    { x: 390, y: 430 }, // Seat 20 - Narayanganj border
  ]

  const dhakaBoundaryPath = `
    M 140,30 
    L 175,22 L 220,18 L 270,22 L 320,35 L 360,60 L 390,95 
    L 415,135 L 430,180 L 435,230 L 430,280 L 420,325 
    L 415,370 L 430,420 L 440,470 L 425,510 L 390,535 
    L 340,545 L 285,530 L 230,505 L 175,480 L 125,450 
    L 85,410 L 60,365 L 45,315 L 38,260 L 42,200 
    L 52,150 L 70,105 L 95,65 L 120,42 L 140,30 Z
  `

  const riverPath = `
    M 38,410 Q 100,400 180,435 Q 260,470 340,455 Q 400,445 440,490
  `

  return (
    <svg width="520" height="580" viewBox="-10 -10 530 600" className="max-w-full h-auto">
      <path
        d={dhakaBoundaryPath}
        fill="#FDDCBD"
        fillOpacity="0.9"
        stroke="#2d2d2d"
        strokeWidth="3"
        className="drop-shadow-md"
      />

      {/* River */}
      <path d={riverPath} fill="none" stroke="#60A5FA" strokeWidth="10" strokeLinecap="round" opacity="0.8" />

      {/* Hexagons positioned inside Dhaka boundary */}
      {constituencies.map((constituency, index) => {
        if (index >= hexPositions.length) return null
        const pos = hexPositions[index]
        return (
          <Hexagon
            key={constituency.id}
            constituency={constituency}
            x={pos.x}
            y={pos.y}
            size={hexSize}
            onClick={() => onHexagonClick(constituency)}
            isSelected={selectedId === constituency.id}
          />
        )
      })}
    </svg>
  )
}
