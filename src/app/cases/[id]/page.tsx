import { client } from '@/lib/microcms'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const data = await client.get({ endpoint: 'cases', contentId: params.id })
    return { title: data.title, description: data.summary }
  } catch {
    return { title: '事例詳細' }
  }
}

export default async function CaseDetailPage({ params }: { params: { id: string } }) {
  let caseData: any = null
  try {
    caseData = await client.get({ endpoint: 'cases', contentId: params.id })
  } catch {
    return <div className="pt-[60px] p-24 text-center text-[#999]">事例が見つかりませんでした</div>
  }

  return (
    <>
      <div className="pt-[60px]">
        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-[#D0C8B8] text-xs text-[#999]">
          <span className="text-[#666]">プラットフォーム事業</span>
          <span className="mx-2">/</span>
          <span className="text-[#666]">{caseData.serviceCategory || 'AND STORY'}</span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[1fr_360px] gap-16">
            {/* Main content */}
            <div>
              {/* Hero image */}
              {caseData.thumbnail && (
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-[#E5DFD4] mb-8">
                  <img src={caseData.thumbnail.url} alt={caseData.title} className="w-full h-full object-cover" />
                </div>
              )}

              <h1 className="font-bold text-2xl leading-relaxed mb-6">{caseData.title}</h1>
              <p className="text-sm text-[#666] leading-relaxed mb-8">{caseData.summary}</p>

              {/* Rich text content - HTML rendered correctly */}
              {caseData.body && (
                <div
                  className="rich-content text-sm text-[#444] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: caseData.body }}
                />
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-[#D0C8B8] rounded-2xl p-6 text-sm sticky top-[80px]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs border border-[#D0C8B8] px-2 py-0.5 rounded">
                    {new Date(caseData.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                  </span>
                  <span className="text-xs border border-[#D0C8B8] px-2 py-0.5 rounded text-[#00B8CC]">
                    {caseData.serviceCategory || 'AND STORY'}
                  </span>
                </div>
                <h2 className="font-bold text-base leading-relaxed mb-4">{caseData.title}</h2>
                <div className="space-y-2 text-[#666]">
                  <div className="flex gap-2">
                    <span className="text-[#999] w-20 shrink-0">クライアント</span>
                    <span>{caseData.client || '—'}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-[#999] w-20 shrink-0">カテゴリ</span>
                    <span>{caseData.category || '—'}</span>
                  </div>
                </div>
                <Link
                  href={`/service/${caseData.serviceSlug || 'andstory'}`}
                  className="mt-6 flex items-center justify-between text-xs border-t border-[#D0C8B8] pt-4 hover:text-[#00B8CC] transition-colors"
                >
                  サービスサイトへ
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Back to cases */}
          <div className="mt-16 pt-8 border-t border-[#D0C8B8]">
            <Link
              href="/cases"
              className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#1A1A1A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              すべての事例を見る
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
