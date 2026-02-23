interface ResultCardProps {
  label: string
  value: string
  extra?: React.ReactNode
}

export function ResultCard({ label, value, extra }: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>
        {extra && <div>{extra}</div>}
      </div>

      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  )
}