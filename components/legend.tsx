export function Legend() {
  const heatLevels = [
    { name: "Low", color: "bg-orange-100" },
    { name: "Medium", color: "bg-orange-300" },
    { name: "High", color: "bg-orange-500" },
    { name: "Very High", color: "bg-orange-700" },
  ]

  return (
    <div className="hidden md:flex items-center gap-1">
      <span className="text-xs text-gray-500 mr-2">Heat Index</span>
      <div className="flex items-center">
        {heatLevels.map((level, index) => (
          <div
            key={level.name}
            className={`w-8 h-4 ${level.color} ${index === 0 ? "rounded-l" : ""} ${index === heatLevels.length - 1 ? "rounded-r" : ""}`}
            title={level.name}
          />
        ))}
      </div>
      <div className="flex items-center gap-4 ml-4 text-xs text-gray-500">
        <span>Less</span>
        <span>More</span>
      </div>
    </div>
  )
}
