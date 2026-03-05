import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/microcms'

// Client logos - 26 companies
const clientLogos = [
  { name: 'adidas', file: 'adidas.svg' },
  { name: 'ADORE', file: 'adore.svg' },
  { name: 'allbirds', file: 'allbirds.svg' },
  { name: 'asahikawa', file: 'asahikawa.svg' },
  { name: 'ASICS', file: 'asics.svg' },
  { name: 'Brother', file: 'brother.svg' },
  { name: 'Coleman', file: 'coleman.svg' },
  { name: 'DESCENTE', file: 'descant.svg' },
  { name: 'kakimori', file: 'kakimori.svg' },
  { name: 'KEEN', file: 'keen.svg' },
  { name: 'KITAGAS', file: 'kitagus.svg' },
  { name: 'le coq sportif', file: 'lecoq.svg' },
  { name: 'Marubeni', file: 'marubeni.svg' },
  { name: 'MARGARET HOWELL', file: 'mh.svg' },
  { name: 'minne', file: 'minne.svg' },
  { name: 'NATURAL BEAUTY BASIC', file: 'naturalbasics.svg' },
  { name: 'New Balance', file: 'newbalance.svg' },
  { name: 'OLD ENGLAND', file: 'oldengland.svg' },
  { name: 'Osaka Metro Group', file: 'osakametro.svg' },
  { name: 'SMBC 三井住友カード', file: 'smbc.svg' },
  { name: 'Teva', file: 'teva.svg' },
  { name: '東京メトロ', file: 'tokyometro.svg' },
  { name: '東急不動産', file: 'tokyu.svg' },
  { name: 'WHOLE EARTH', file: 'wholeearth.svg' },
  { name: 'SUPER SPORTS XEBIO', file: 'xebio.svg' },
  { name: 'YKK', file: 'ykk.svg' },
]

async function getLatestCases() {
  try {
    const data = await client.get({
      endpoint: 'cases',
      queries: { limit: 6, orders: '-publishedAt' },
    })
    return data.contents
  } catch {
    return []
  }
}

async function getLatestNews() {
  try {
    const data = await client.get({
      endpoint: 'news',
      queries: { limit: 5, orders: '-publishedAt' },
    })
    return data.contents
  } catch {
    return []
  }
}

export default async function HomePage() {
  const [cases, news] = await Promise.all([getLatestCases(), getLatestNews()])

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center pt-[60px] bg-[#F5F0E8] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00B8CC] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#8B5CF6] blur-3xl" />
        </div>
        <div className="relative px-6 md:px-12 max-w-[1200px] mx-auto w-full">
          <p className="text-sm text-[#666] mb-4">体験を通じて、新しい物語を生み出す。</p>
          <h1 className="font-serif text-[clamp(40px,7vw,100px)] font-bold leading-[1.05] tracking-tight">
            <span className="text-[#1A1A1A]">N</span>
            <span className="text-[#22C55E]">e</span>
            <span className="text-[#1A1A1A]">w </span>
            <span className="text-[#EF4444]">E</span>
            <span className="text-[#00B8CC]">n</span>
            <span className="text-[#1A1A1A]">c</span>
            <span className="text-[#8B5CF6]">o</span>
            <span className="text-[#F59E0B]">u</span>
            <span className="text-[#1A1A1A]">nters,</span>
            <br />
            <span className="text-[#1A1A1A]">N</span>
            <span className="text-[#8B5CF6]">e</span>
            <span className="text-[#22C55E]">w </span>
            <span className="text-[#EF4444]">S</span>
            <span className="text-[#00B8CC]">t</span>
            <span className="text-[#1A1A1A]">o</span>
            <span className="text-[#EF4444]">r</span>
            <span className="text-[#8B5CF6]">i</span>
            <span className="text-[#22C55E]">e</span>
            <span className="text-[#1A1A1A]">s.</span>
          </h1>
          <div className="absolute bottom-12 flex items-center gap-2 text-sm text-[#666]">
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m0 0l-3-3m3 3l3-3" />
            </svg>
            Scroll down to explore
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-sm font-medium text-[#666] mb-2">About our business</h2>
        <p className="text-xs text-[#999] mb-12">事業のこと</p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-2xl font-bold leading-relaxed mb-6">
              体験をデザインすることで<br />
              人生に出会いと変化をもたらす企業です。
            </p>
            <p className="text-[#666] leading-relaxed mb-8">
              STORY&Co.についての紹介文が入ります。どのような会社なのか、どのような思いで事業を展開しているのかを短くまとめた説明文が入ります。
            </p>
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-sm text-[#1A1A1A] border-b border-[#1A1A1A] pb-0.5 hover:gap-4 transition-all"
            >
              事業について詳しく
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'プラットフォーム事業', num: '01', color: '#00B8CC' },
              { label: 'コミュニティ事業', num: '02', color: '#8B5CF6' },
              { label: 'ソリューション事業', num: '03', color: '#22C55E' },
            ].map((item) => (
              <div key={item.num} className="flex flex-col items-center gap-2">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: item.color }}
                >
                  {item.num}
                </div>
                <p className="text-xs text-[#666] leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients - with real logos */}
      <section className="py-16 border-t border-[#D0C8B8]">
        <div className="px-6 mb-8">
          <p className="text-sm font-medium text-[#666]">Our clients お取引先</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos].map((logo, i) => (
              <div
                key={i}
                className="shrink-0 flex items-center justify-center h-12 w-32"
              >
                <img
                  src={`/images/clients/${logo.file}`}
                  alt={logo.name}
                  className="max-h-10 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services marquee strip */}
      <section className="py-4 bg-[#1A1A1A] text-white overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {['Our Services', 'Our Services', 'Our Services', 'Our Services', 'Our Services', 'Our Services'].map((t, i) => (
            <span key={i} className="text-sm tracking-widest shrink-0">{t} ·</span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              num: '01',
              category: 'プラットフォーム事業',
              sub: 'STORY &Co.が展開する',
              services: [
                { name: 'AND STORY', href: '/service/andstory', icon: '🏠' },
              ],
            },
            {
              num: '02',
              category: 'コミュニティ事業',
              sub: 'STORY &Co.が展開する',
              services: [
                { name: 'NewMake', href: '/service/newmake', icon: '♻️' },
                { name: 'タワーのアワー', href: '/service/tower', icon: '🗼' },
              ],
            },
            {
              num: '03',
              category: 'ソリューション事業',
              sub: '課題解決を提供する',
              services: [
                { name: 'コミュニティ開発', href: '/service/community-dev', icon: '🤝' },
                { name: '地域・イベントプロデュース', href: '/service/event', icon: '🎪' },
                { name: 'SDGs推進支援', href: '/service/sdgs', icon: '🌱' },
              ],
            },
          ].map((block) => (
            <div key={block.num} className="border border-[#D0C8B8] rounded-2xl p-8">
              <p className="text-xs text-[#999] mb-1">{block.sub}</p>
              <h3 className="font-bold text-lg mb-6">{block.category}</h3>
              <ul className="space-y-3">
                {block.services.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="flex items-center justify-between py-3 border-t border-[#D0C8B8] text-sm hover:text-[#00B8CC] transition-colors group"
                    >
                      <span>{svc.name}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Create your own story */}
      <section className="py-24 px-6 text-center bg-[#1A1A1A]">
        <h2 className="font-serif text-[clamp(36px,6vw,80px)] font-bold">
          <span className="text-[#EF4444]">C</span>
          <span className="text-[#F59E0B]">r</span>
          <span className="text-[#22C55E]">e</span>
          <span className="text-[#00B8CC]">a</span>
          <span className="text-white">te </span>
          <span className="text-[#8B5CF6]">y</span>
          <span className="text-[#EF4444]">o</span>
          <span className="text-[#F59E0B]">u</span>
          <span className="text-white">r</span>
          <br />
          <span className="text-[#22C55E]">o</span>
          <span className="text-white">wn </span>
          <span className="text-[#EF4444]">s</span>
          <span className="text-[#8B5CF6]">t</span>
          <span className="text-[#F59E0B]">o</span>
          <span className="text-[#00B8CC]">r</span>
          <span className="text-white">y.</span>
        </h2>
      </section>

      {/* Cases strip */}
      <section className="py-4 border-y border-[#D0C8B8] overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {['Cases', 'Cases', 'Cases', 'Cases', 'Cases', 'Cases'].map((t, i) => (
            <span key={i} className="text-sm tracking-widest text-[#666] shrink-0">{t} ·</span>
          ))}
        </div>
      </section>

      {/* Cases */}
      {cases.length > 0 && (
        <section className="py-24 px-6 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c: any) => (
              <Link
                key={c.id}
                href={`/cases/${c.id}`}
                className="group border border-[#D0C8B8] rounded-2xl overflow-hidden hover:border-[#00B8CC] transition-colors"
              >
                {c.thumbnail && (
                  <div className="aspect-[3/2] overflow-hidden bg-[#E5DFD4]">
                    <img
                      src={c.thumbnail.url}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs text-[#00B8CC] font-medium mb-2">{c.category || 'コミュニティ開発'}</p>
                  <h3 className="font-bold text-sm leading-relaxed line-clamp-2">{c.title}</h3>
                  <p className="text-xs text-[#999] mt-2 line-clamp-3">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* News strip */}
      <section className="py-4 border-y border-[#D0C8B8] overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {['News', 'News', 'News', 'News', 'News', 'News'].map((t, i) => (
            <span key={i} className="text-sm tracking-widest text-[#666] shrink-0">{t} ·</span>
          ))}
        </div>
      </section>

      {/* News */}
      {news.length > 0 && (
        <section className="py-24 px-6 max-w-[1200px] mx-auto">
          <ul className="divide-y divide-[#D0C8B8]">
            {news.map((n: any) => (
              <li key={n.id}>
                <Link
                  href={`/news/${n.id}`}
                  className="flex gap-4 py-5 hover:text-[#00B8CC] transition-colors group"
                >
                  <span className="text-sm text-[#999] shrink-0 w-28">
                    {new Date(n.publishedAt).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                  </span>
                  <span className="text-xs border border-[#D0C8B8] px-2 py-0.5 rounded shrink-0 h-fit">{n.category || 'お知らせ'}</span>
                  <span className="text-sm group-hover:underline">{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Contact */}
      <section className="py-24 px-6 text-center border-t border-[#D0C8B8]">
        <h2 className="font-serif text-[clamp(40px,6vw,80px)] font-bold mb-4">
          <span className="text-[#00B8CC]">C</span>
          <span className="text-[#1A1A1A]">o</span>
          <span className="text-[#8B5CF6]">n</span>
          <span className="text-[#EF4444]">t</span>
          <span className="text-[#1A1A1A]">a</span>
          <span className="text-[#22C55E]">c</span>
          <span className="text-[#F59E0B]">t</span>
        </h2>
        <p className="text-[#666] mb-8">お気軽にお問い合わせください</p>
        <p className="text-sm text-[#666] mb-8 max-w-lg mx-auto">
          少しでもご興味持っていただけたら、何でもそらそこから考えてみますので。まずはお問い合わせをいただけると嬉しいです
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-3 border border-[#1A1A1A] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
        >
          お問い合わせ
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </section>

      {/* Recruit strip */}
      <section className="py-4 bg-[#1A1A1A] overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {['Recruit ↗', 'Recruit ↗', 'Recruit ↗', 'Recruit ↗', 'Recruit ↗', 'Recruit ↗'].map((t, i) => (
            <span key={i} className="text-sm text-white tracking-widest shrink-0">{t}</span>
          ))}
        </div>
      </section>
    </>
  )
}
