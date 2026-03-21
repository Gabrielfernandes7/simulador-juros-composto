import AdsenseAd from "@/components/ads/AdsenseAd"

type AdSlotProps = {
  pageType: "calculator" | "content"
}

const copyByPageType = {
  calculator: {
    title: "Anúncio exibido após a experiência principal",
    description:
      "Nas páginas de cálculo, o bloco de anúncio fica abaixo do simulador e dos links de navegação, preservando a tarefa principal."
  },
  content: {
    title: "Anúncio exibido após o conteúdo editorial",
    description:
      "Nas páginas de conteúdo, o anúncio aparece somente depois do artigo ou da listagem, evitando interromper a leitura."
  }
} as const

export default function AdSlot({ pageType }: AdSlotProps) {
  const copy = copyByPageType[pageType]

  return (
    <section
      className="mx-auto max-w-5xl px-6 pb-16"
      aria-label={copy.title}
      data-ad-policy={pageType}
    >
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
        Espaço publicitário
      </p>
      <p className="mb-4 text-sm text-slate-600">{copy.description}</p>
      <AdsenseAd />
    </section>
  )
}
