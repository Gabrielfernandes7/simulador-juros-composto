interface ResultCardProps {
  label: string
  value: string
}

export function ResultCard({ label, value }: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}