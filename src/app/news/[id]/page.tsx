import { client } from '@/lib/microcms'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  try {
    const data = await client.get({ endpoint: 'news', contentId: params.id })
    return { title: data.title }
  } catch {
    return { title: 'お知らせ' }
  }
}

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  let newsData: any = null
  try {
    newsData = await client.get({ endpoint: 'news', contentId: params.id })
  } catch {
    return <div className="pt-[60px] p-24 text-center text-[#999]">記事が見つかりませんでした</div>
  }

  return (
    <div className="pt-[60px]">
      <div className="max-w-[800px] mx-auto px-6 py-16">
        <div className="mb-8 flex items-center gap-3 text-sm text-[#999]">
          <span>
            {new Date(newsData.publishedAt).toLocaleDateString('ja-JP', {
              year: 'numeric', month: '2-digit', day: '2-digit'
            }).replace(/\//g, '.')}
          </span>
          <span className="border border-[#D0C8B8] px-2 py-0.5 rounded text-xs">
            {newsData.category || 'お知らせ'}
          </span>
        </div>

        <h1 className="font-bold text-2xl leading-relaxed mb-8">{newsData.title}</h1>

        {/* Rich text - HTML rendered correctly */}
        {newsData.body && (
          <div
            className="rich-content text-sm text-[#444] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: newsData.body }}
          />
        )}

        <div className="mt-16 pt-8 border-t border-[#D0C8B8]">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#1A1A1A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            お知らせ一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
