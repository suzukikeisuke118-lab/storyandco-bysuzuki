import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '事業のこと',
  description: 'STORY&Co.の3つの事業：プラットフォーム事業（AND STORY）、コミュニティ事業（NewMake・タワーのアワー）、ソリューション事業。',
}

const services = [
  {
    num: '01',
    category: 'プラットフォーム事業',
    sub: 'STORY &Co.が展開する',
    color: '#00B8CC',
    items: [
      {
        name: 'AND STORY',
        href: '/service/andstory',
        logo: 'AND STORY',
        desc: 'AND STORYについての短い説明文が入ります。短い説明文が入ります。短い説明文が入ります。（50字程度）',
      },
    ],
  },
  {
    num: '02',
    category: 'コミュニティ事業',
    sub: 'STORY &Co.が展開する',
    color: '#8B5CF6',
    items: [
      {
        name: 'NewMake',
        href: '/service/newmake',
        logo: 'NM NewMake',
        desc: 'NewMakeについての短い説明文が入ります。短い説明文が入ります。短い説明文が入ります。（50字程度）',
      },
      {
        name: 'タワーのアワー',
        href: '/service/tower',
        logo: 'タワー の アワー HOUR OF TOWER',
        desc: 'タワーのアワーについての短い説明文が入ります。短い説明文が入ります。（50字程度）',
      },
    ],
  },
  {
    num: '03',
    category: 'ソリューション事業',
    sub: '課題解決を提供する',
    color: '#22C55E',
    items: [
      {
        name: 'コミュニティ開発',
        href: '/service/community-dev',
        logo: null,
        desc: 'コミュニティ開発についての短い説明文が入ります。短い説明文が入ります。（50字程度）',
      },
      {
        name: '地域・イベントプロデュース',
        href: '/service/event',
        logo: null,
        desc: '地域・イベントプロデュースについての短い説明文が入ります。（50字程度）',
      },
      {
        name: 'SDGs推進支援',
        href: '/service/sdgs',
        logo: null,
        desc: 'SDGs推進支援についての短い説明文が入ります。短い説明文が入ります。（50字程度）',
      },
    ],
  },
]

export default function ServicePage() {
  return (
    <>
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <h1 className="font-serif text-[clamp(48px,8vw,100px)] font-bold mt-12">
          <span className="text-[#22C55E]">S</span>
          <span className="text-[#1A1A1A]">e</span>
          <span className="text-[#8B5CF6]">r</span>
          <span className="text-[#EF4444]">v</span>
          <span className="text-[#1A1A1A]">i</span>
          <span className="text-[#00B8CC]">c</span>
          <span className="text-[#F59E0B]">e</span>
          <span className="text-[#1A1A1A]">s</span>
        </h1>
        <p className="text-sm text-[#666] mt-2">事業のこと</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-24 space-y-24">
        {services.map((block) => (
          <section key={block.num} id={block.num}>
            <div className="grid md:grid-cols-[240px_1fr] gap-12">
              <div>
                <p className="text-xs text-[#999] mb-1">({block.num})</p>
                <p className="text-xs text-[#999] mb-2">{block.sub}</p>
                <h2 className="font-bold text-xl leading-tight">{block.category}</h2>
                <p className="text-sm text-[#666] mt-4 leading-relaxed">
                  事業に関する説明文が入ります。事業に関する説明文が入ります。事業に関する説明文が入ります。（60字程度）
                </p>
              </div>
              <div className="space-y-6">
                {block.items.map((item) => (
                  <div key={item.name} className="border border-[#D0C8B8] rounded-2xl p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {item.logo && (
                          <p className="text-xs text-[#999] mb-1 font-medium tracking-wide">{item.logo}</p>
                        )}
                        <h3 className="font-bold text-lg">{item.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-[#666] leading-relaxed mb-6">{item.desc}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm border-b border-[#1A1A1A] pb-0.5 hover:gap-4 transition-all"
                    >
                      {item.name}について知る
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
