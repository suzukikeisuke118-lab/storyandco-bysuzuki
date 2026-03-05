import Link from 'next/link'
import { client } from '@/lib/microcms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '事例のご紹介',
  description: 'STORY&Co.の事例紹介。コミュニティ開発・地域イベントプロデュース・SDGs推進支援などの実績をご紹介します。',
}

const tabs = ['すべて', 'コミュニティ開発', '地域・イベントプロデュース', 'SDGs推進支援']

async function getCases() {
  try {
    const data = await client.get({ endpoint: 'cases', queries: { limit: 20 } })
    return data.contents
  } catch {
    return []
  }
}

export default async function CasesPage() {
  const cases = await getCases()

  return (
    <>
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <h1 className="font-serif text-[clamp(48px,8vw,100px)] font-bold mt-12">
          <span className="text-[#EF4444]">C</span>
          <span className="text-[#1A1A1A]">a</span>
          <span className="text-[#22C55E]">s</span>
          <span className="text-[#00B8CC]">e</span>
          <span className="text-[#8B5CF6]">s</span>
        </h1>
        <p className="text-sm text-[#666] mt-2">事例のご紹介</p>
      </div>

      {/* Category tabs */}
      <div className="sticky top-[60px] z-30 bg-[#F5F0E8] border-b border-[#D0C8B8]">
        <div className="max-w-[1200px] mx-auto px-6 flex gap-0 overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`px-6 py-4 text-sm whitespace-nowrap border-b-2 transition-colors ${
                i === 0
                  ? 'border-[#1A1A1A] font-medium text-[#1A1A1A]'
                  : 'border-transparent text-[#666] hover:text-[#1A1A1A]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {cases.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c: any) => (
              <Link
                key={c.id}
                href={`/cases/${c.id}`}
                className="group border border-[#D0C8B8] rounded-2xl overflow-hidden hover:border-[#00B8CC] transition-colors"
              >
                <div className="aspect-[3/2] overflow-hidden bg-[#E5DFD4]">
                  {c.thumbnail ? (
                    <img
                      src={c.thumbnail.url}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#999] text-sm">写真</div>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-[#00B8CC] font-medium mb-2">{c.category || 'コミュニティ開発'}</p>
                  <h2 className="font-bold text-sm leading-relaxed line-clamp-2 mb-2">{c.title}</h2>
                  <p className="text-xs text-[#999] line-clamp-3 leading-relaxed">{c.summary}</p>
                  <p className="text-xs text-[#999] mt-3 font-medium">{c.client || 'AND STORY'}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-[#999] py-24">事例を準備中です</p>
        )}
      </div>
    </>
  )
}
