import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '会社のこと',
  description: 'STORY&Co.の会社情報。ミッション・ビジョン・バリュー、代表メッセージ、メンバー紹介、会社概要。',
}

const members = [
  { name: '細川 拓', role: '代表取締役', photo: '/images/ceo-hosokawa.png', bio: '代表メッセージ・プロフィール文が入ります。' },
  // 追加メンバーは写真素材が揃い次第追加
]

export default function CompanyPage() {
  return (
    <>
      {/* Page header */}
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <h1 className="font-serif text-[clamp(48px,8vw,100px)] font-bold mt-12">
          <span className="text-[#00B8CC]">C</span>
          <span className="text-[#1A1A1A]">o</span>
          <span className="text-[#8B5CF6]">m</span>
          <span className="text-[#EF4444]">p</span>
          <span className="text-[#1A1A1A]">a</span>
          <span className="text-[#22C55E]">n</span>
          <span className="text-[#F59E0B]">y</span>
        </h1>
        <p className="text-sm text-[#666] mt-2">会社のこと</p>
      </div>

      {/* はじめに物語あり */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-lg font-bold mb-6">はじめに物語あり</h2>
            <div className="space-y-4 text-[#444] leading-relaxed text-sm">
              <p>どこにでも物語があった。</p>
              <p>生まれたこと。生きていること。<br />どんな服を着ていること。</p>
              <p>あなたを形作った出来事には、<br />あなたなりの物語がある。</p>
              <p>物語があって、コミュニティ（仲間）が生まれる。<br />仲間の間の関係性を深く、豊かに、<br />そしてどこまでも続くよう、さらに育てていく。</p>
              <p>そんな仲間たちの物語は、<br />愛着や誇りとなって結晶していく。</p>
              <p>さらに出発！物語よ、<br />あなたを大切にする人に届けれ。</p>
              <p>そうしていつか物語は、<br />あなたの大切な物語とかさなっていく。</p>
              <p className="font-bold">STORY&Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Value */}
      <section className="py-16 border-y border-[#D0C8B8] bg-white/30">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D0C8B8]">
          {[
            {
              label: 'Mission', sub: 'ミッション',
              text: '体験をデザインすることで人生に出会いと変化をもたらす。新しい物語を生み出すことに挑戦する。',
            },
            {
              label: 'Vision', sub: 'ビジョン',
              text: '体験を通じて人と人が繋がり、ともに前へ進める世界をつくる。\n・生活者が「自分らしい豊かさ」を育めるような体験を届けたい\n・企業と生活者とのあいだに新しい絆を生み出したい',
            },
            {
              label: 'Value', sub: 'バリュー',
              text: 'その一手を、いつものために全力でする。自分たちの本気と誠実さで信頼をつくる。',
            },
          ].map((item) => (
            <div key={item.label} className="py-8 px-8">
              <p className="font-serif text-2xl font-bold mb-1">{item.label}</p>
              <p className="text-xs text-[#999] mb-4">{item.sub}</p>
              <p className="text-sm text-[#444] leading-relaxed whitespace-pre-line">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About section */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <p className="text-sm text-[#666] mb-8">
          体験をデザインすることで人生に出会いと変化をもたらす企業です。
          STORY&Co.についての紹介文が入ります。どのような会社なのか、どのような思いで事業を展開しているのかをまとめた説明文が入ります。
        </p>
      </section>

      {/* CEO message */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <h2 className="text-sm font-medium text-[#666] mb-12">代表メッセージ</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-4 text-sm text-[#444] leading-relaxed">
            {Array(8).fill(0).map((_, i) => (
              <p key={i}>代表メッセージのテキストが入ります。代表メッセージのテキストが入ります。代表メッセージのテキストが入ります。代表メッセージのテキストが入ります。（350〜400字程度）</p>
            )).slice(0, 3)}
            <div className="pt-6 text-right">
              <p className="text-xs text-[#999]">株式会社ストーリーアンドカンパニー 代表取締役</p>
              <p className="font-serif text-xl mt-1">細川 拓</p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#E5DFD4]">
              <Image
                src="/images/ceo-hosokawa.png"
                alt="代表取締役 細川拓"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Members strip */}
      <section className="py-4 border-y border-[#D0C8B8] overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {['Members', 'Members', 'Members', 'Members', 'Members', 'Members'].map((t, i) => (
            <span key={i} className="text-sm tracking-widest text-[#666] shrink-0">{t} ·</span>
          ))}
        </div>
      </section>

      {/* Members */}
      <section className="py-24 px-6 max-w-[1200px] mx-auto">
        <p className="text-xs text-[#999] mb-8">メンバー紹介</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {members.map((m) => (
            <div key={m.name} className="flex flex-col items-center text-center gap-3">
              <div className="w-24 h-24 rounded-full overflow-hidden bg-[#E5DFD4] ring-2 ring-[#D0C8B8]">
                <Image src={m.photo} alt={m.name} width={96} height={96} className="object-cover object-top" />
              </div>
              <div>
                <p className="font-bold text-sm">{m.name}</p>
                <p className="text-xs text-[#999] mt-0.5">{m.role}</p>
              </div>
              <p className="text-xs text-[#666] leading-relaxed">{m.bio}</p>
            </div>
          ))}
          {/* placeholder for remaining members */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 opacity-30">
              <div className="w-24 h-24 rounded-full bg-[#D0C8B8]" />
              <div>
                <p className="font-bold text-sm">メンバー名</p>
                <p className="text-xs text-[#999] mt-0.5">役職</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company outline */}
      <section className="py-24 px-6 max-w-[800px] mx-auto">
        <h2 className="font-bold text-lg mb-8">Outline <span className="text-sm font-normal text-[#999]">会社概要</span></h2>
        <table className="w-full text-sm">
          <tbody className="divide-y divide-[#D0C8B8]">
            {[
              { label: '会社名', value: '株式会社ストーリーアンドカンパニー' },
              { label: '設立', value: '2016年' },
              { label: '代表取締役', value: '細川 拓' },
              { label: '資本金', value: '5,821,538円 / 払込資本 1,515,000円' },
              { label: '本社', value: '〒100-0005 東京都千代田区丸の内1-2-3 丸の内二重橋ビルディング3F' },
            ].map((row) => (
              <tr key={row.label}>
                <th className="py-4 pr-8 text-left text-[#999] font-normal w-32 align-top">{row.label}</th>
                <td className="py-4 text-[#1A1A1A] leading-relaxed">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}
