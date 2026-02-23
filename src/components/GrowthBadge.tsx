"use client"

type Props = {
  value: number
}

export function GrowthBadge({ value }: Props) {
  const isPositive = value >= 0

  return (
    <div
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        ${isPositive 
          ? "bg-emerald-100 text-emerald-700" 
          : "bg-red-100 text-red-700"}
      `}
    >
      {isPositive ? "+" : ""}
      {value.toFixed(2)}%
    </div>
  )
}