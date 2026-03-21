interface ResultCardProps {
  label: string
  value: string
  extra?: React.ReactNode
  description?: string
}

export function ResultCard({ label, value, extra, description }: ResultCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-slate-500">{label}</p>
        {extra && <div>{extra}</div>}
      </div>

      <p className="text-2xl font-semibold mt-2">{value}</p>

      {description && (
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      )}
    </div>
  )
}
