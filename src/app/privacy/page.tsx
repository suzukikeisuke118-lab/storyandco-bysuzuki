import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'プライバシーポリシー' }

export default function PrivacyPage() {
  return (
    <>
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <h1 className="font-serif text-[clamp(32px,5vw,72px)] font-bold mt-12">
          <span className="text-[#8B5CF6]">P</span>
          <span className="text-[#EF4444]">r</span>
          <span className="text-[#00B8CC]">i</span>
          <span className="text-[#1A1A1A]">v</span>
          <span className="text-[#22C55E]">a</span>
          <span className="text-[#1A1A1A]">cy </span>
          <span className="text-[#F59E0B]">p</span>
          <span className="text-[#EF4444]">o</span>
          <span className="text-[#1A1A1A]">l</span>
          <span className="text-[#8B5CF6]">i</span>
          <span className="text-[#22C55E]">c</span>
          <span className="text-[#1A1A1A]">y</span>
        </h1>
        <p className="text-sm text-[#666] mt-2">プライバシーポリシー</p>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-16 text-sm text-[#444] leading-relaxed">
        <p className="mb-8">補足が入ります。補足が入ります。補足が入ります。補足が入ります。補足が入ります。補足が入ります。補足が入ります。補足が入ります。（60字程度）</p>

        <h2 className="font-bold text-base mb-4">タイトル（H2）</h2>
        <p className="mb-8">プライバシーポリシーの本文が入ります。プライバシーポリシーの本文が入ります。プライバシーポリシーの本文が入ります。</p>

        <div className="text-right mt-16 text-xs text-[#999]">
          <p>制定：2017年4月1日</p>
          <p>改定：2023年3月1日</p>
          <p>株式会社ストーリーアンドカンパニー 代表取締役 細川拓</p>
        </div>
      </div>
    </>
  )
}
