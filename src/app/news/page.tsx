import Link from 'next/link'
import { client } from '@/lib/microcms'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お知らせ',
  description: 'STORY&Co.のお知らせ・プレスリリース・イベント情報。',
}

async function getNews() {
  try {
    const data = await client.get({ endpoint: 'news', queries: { limit: 50, orders: '-publishedAt' } })
    return data.contents
  } catch {
    return []
  }
}

export default async function NewsPage() {
  const news = await getNews()

  return (
    <>
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <h1 className="font-serif text-[clamp(48px,8vw,100px)] font-bold mt-12">
          <span className="text-[#F59E0B]">N</span>
          <span className="text-[#1A1A1A]">e</span>
          <span className="text-[#EF4444]">w</span>
          <span className="text-[#1A1A1A]">s</span>
        </h1>
        <p className="text-sm text-[#666] mt-2">お知らせ</p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        {/* Category filter */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {['お知らせ', 'プレス', 'メディア', 'イベント'].map((cat, i) => (
            <button
              key={cat}
              className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
                i === 0
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'border-[#D0C8B8] text-[#666] hover:border-[#1A1A1A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {news.length > 0 ? (
          <ul className="divide-y divide-[#D0C8B8]">
            {news.map((n: any) => (
              <li key={n.id}>
                <Link
                  href={`/news/${n.id}`}
                  className="flex gap-4 py-5 hover:text-[#00B8CC] transition-colors group items-baseline"
                >
                  <span className="text-sm text-[#999] shrink-0 w-28">
                    {new Date(n.publishedAt).toLocaleDateString('ja-JP', {
                      year: 'numeric', month: '2-digit', day: '2-digit'
                    }).replace(/\//g, '.')}
                  </span>
                  <span className="text-xs border border-[#D0C8B8] px-2 py-0.5 rounded shrink-0">
                    {n.category || 'お知らせ'}
                  </span>
                  <span className="text-sm group-hover:underline">{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-[#999] py-24">お知らせを準備中です</p>
        )}
      </div>
    </>
  )
}
