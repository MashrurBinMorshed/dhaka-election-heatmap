"use client"

import { useState } from "react"
import type { Constituency } from "@/lib/election-data"

interface HexagonProps {
  constituency: Constituency
  x: number
  y: number
  size: number
  onClick: () => void
  isSelected: boolean
}

const heatColors = [
  { fill: "#fef3e2", stroke: "#fcd9a8", hover: "#fde9cc" },
  { fill: "#fcd9a8", stroke: "#f9b866", hover: "#fce5c4" },
  { fill: "#f9b866", stroke: "#f97316", hover: "#facb8a" },
  { fill: "#f97316", stroke: "#ea580c", hover: "#fb923c" },
  { fill: "#c2410c", stroke: "#9a3412", hover: "#ea580c" },
]

export function Hexagon({ constituency, x, y, size, onClick, isSelected }: HexagonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const heatIndex = (constituency.seatNumber - 1) % heatColors.length
  const colors = heatColors[heatIndex]

  // Calculate hexagon points
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 6
    const px = x + size * Math.cos(angle)
    const py = y + size * Math.sin(angle)
    return `${px},${py}`
  }).join(" ")

  return (
    <g
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer transition-all duration-200"
      style={{
        transform: isHovered || isSelected ? "scale(1.08)" : "scale(1)",
        transformOrigin: `${x}px ${y}px`,
      }}
    >
      {/* Glow effect for selected */}
      {isSelected && (
        <polygon points={points} fill="none" stroke="#f97316" strokeWidth="4" opacity="0.6" className="animate-pulse" />
      )}

      {/* Main hexagon */}
      <polygon
        points={points}
        fill={isHovered || isSelected ? colors.hover : colors.fill}
        stroke={isHovered || isSelected ? "#f97316" : colors.stroke}
        strokeWidth="2"
        className="transition-all duration-200"
        style={{
          filter:
            isHovered || isSelected
              ? "drop-shadow(0 4px 12px rgba(249,115,22,0.3))"
              : "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
        }}
      />

      <text
        x={x}
        y={y - 6}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={heatIndex >= 3 ? "#fff" : "#1f2937"}
        fontSize="14"
        fontWeight="bold"
        className="pointer-events-none select-none"
      >
        {constituency.seatNumber}
      </text>

      <text
        x={x}
        y={y + 12}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={heatIndex >= 3 ? "rgba(255,255,255,0.9)" : "rgba(31,41,55,0.8)"}
        fontSize="9"
        className="pointer-events-none select-none"
      >
        {constituency.shortName}
      </text>
    </g>
  )
}
