import type { Metadata } from 'next'

export const metadata: Metadata = { title: '採用情報' }

export default function RecruitPage() {
  return (
    <>
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <div className="mt-12 overflow-hidden py-4">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {['Recruit ↗', 'Recruit ↗', 'Recruit ↗', 'Recruit ↗', 'Recruit ↗'].map((t, i) => (
              <span key={i} className="font-serif text-[clamp(36px,6vw,72px)] font-bold text-[#1A1A1A] shrink-0">{t}</span>
            ))}
          </div>
        </div>
        <p className="text-sm text-[#666] mt-4">採用情報</p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16">
        <p className="text-sm text-[#666] leading-relaxed mb-12">
          体験やコミュニティのデザインを通じて、人の暮らしを豊しくしていくことに同じ興味があると一緒に働いていきたいので、いろんな方々からのご応募をお待ちしております。
        </p>

        <div className="border border-[#D0C8B8] rounded-2xl p-8">
          <p className="text-sm text-[#999]">採用情報を準備中です。詳細はお問い合わせください。</p>
        </div>
      </div>
    </>
  )
}
