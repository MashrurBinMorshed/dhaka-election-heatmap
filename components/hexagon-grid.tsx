

"use client"

import { Hexagon } from "./hexagon"
import type { Constituency } from "@/lib/election-data"

interface HexagonGridProps {
  constituencies: Constituency[]
  onHexagonClick: (constituency: Constituency) => void
  selectedId?: number
}

export function HexagonGrid({ constituencies, onHexagonClick, selectedId }: HexagonGridProps) {
  // Arrange hexagons in a pattern resembling Dhaka's shape
  const hexSize = 50
  const hexWidth = hexSize * 2
  const hexHeight = Math.sqrt(3) * hexSize

  // Grid positions for 20 hexagons arranged in a Dhaka-like pattern
  const gridPositions = [
    // Row 1 (top)
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    // Row 2
    { row: 1, col: 0 },
    { row: 1, col: 1 },
    { row: 1, col: 2 },
    { row: 1, col: 3 },
    // Row 3
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
    { row: 2, col: 3 },
    // Row 4
    { row: 3, col: 0 },
    { row: 3, col: 1 },
    { row: 3, col: 2 },
    { row: 3, col: 3 },
    // Row 5
    { row: 4, col: 1 },
    { row: 4, col: 2 },
    { row: 4, col: 3 },
    // Row 6 (bottom)
    { row: 5, col: 1 },
    { row: 5, col: 2 },
    { row: 5, col: 3 },
  ]

  const getHexPosition = (index: number) => {
    const pos = gridPositions[index]
    const xOffset = pos.row % 2 === 0 ? hexWidth * 0.75 : 0
    const x = pos.col * hexWidth * 1.5 + xOffset
    const y = pos.row * hexHeight * 0.87
    return { x, y }
  }

  // Calculate grid dimensions
  const maxCol = Math.max(...gridPositions.map((p) => p.col))
  const maxRow = Math.max(...gridPositions.map((p) => p.row))
  const gridWidth = (maxCol + 2) * hexWidth * 1.5
  const gridHeight = (maxRow + 1) * hexHeight

  return (
    <svg
      width={gridWidth}
      height={gridHeight + 40}
      viewBox={`-10 -10 ${gridWidth + 20} ${gridHeight + 60}`}
      className="max-w-full h-auto"
    >
      {constituencies.map((constituency, index) => {
        const { x, y } = getHexPosition(index)
        return (
          <Hexagon
            key={constituency.id}
            constituency={constituency}
            x={x + hexSize}
            y={y + hexSize}
            size={hexSize}
            onClick={() => onHexagonClick(constituency)}
            isSelected={selectedId === constituency.id}
          />
        )
      })}
    </svg>
  )
}
