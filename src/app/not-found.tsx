import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-[60px] min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-[clamp(80px,15vw,180px)] font-bold leading-none">
        <span className="text-[#8B5CF6]">4</span>
        <span className="text-[#1A1A1A]">0</span>
        <span className="text-[#00B8CC]">4</span>
      </h1>
      <p className="font-bold text-lg mt-4 mb-2">ご指定のページが見つかりません</p>
      <p className="text-sm text-[#666] mb-8">
        ページが移動または削除されたか、URLの入力間違いの可能性があります。正しいURLをご指定いただくか、下記よりご覧になりたい情報をお探しください。
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 border border-[#1A1A1A] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors"
      >
        トップページへ
      </Link>
    </div>
  )
}
