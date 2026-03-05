import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'STORY&Co.へのお問い合わせはこちらから。',
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-[60px] pb-16 px-6 text-center border-b border-[#D0C8B8]">
        <h1 className="font-serif text-[clamp(48px,8vw,100px)] font-bold mt-12">
          <span className="text-[#00B8CC]">C</span>
          <span className="text-[#1A1A1A]">o</span>
          <span className="text-[#8B5CF6]">n</span>
          <span className="text-[#EF4444]">t</span>
          <span className="text-[#1A1A1A]">a</span>
          <span className="text-[#22C55E]">c</span>
          <span className="text-[#F59E0B]">t</span>
        </h1>
        <p className="text-sm text-[#666] mt-2">お問い合わせ</p>
      </div>

      <div className="max-w-[600px] mx-auto px-6 py-16">
        <p className="text-sm text-[#666] leading-relaxed mb-12">
          少しでもご興味持っていただけたら、何でもそらそこから考えてみますので。まずはお問い合わせをいただけると嬉しいです
        </p>

        <form className="space-y-8">
          {[
            { label: 'お名前', id: 'name', placeholder: '山田 太郎', required: true },
            { label: 'フリガナ', id: 'kana', placeholder: 'ヤマダ タロウ', required: true },
            { label: 'メールアドレス', id: 'email', placeholder: 'sample@storyandco.co', required: true, type: 'email' },
            { label: '電話番号', id: 'tel', placeholder: '03-0000-0000', type: 'tel' },
            { label: '会社・組織名', id: 'company', placeholder: '株式会社ストーリーアンドカンパニー' },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium mb-2">
                {field.label}
                {field.required && <span className="text-[#EF4444] ml-1 text-xs">＊必須</span>}
              </label>
              <input
                id={field.id}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full border-b border-[#D0C8B8] bg-transparent py-3 text-sm placeholder-[#C0B8A8] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
            </div>
          ))}

          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-2">
              お問い合わせ種別<span className="text-[#EF4444] ml-1 text-xs">＊必須</span>
            </label>
            <select
              id="category"
              required
              className="w-full border-b border-[#D0C8B8] bg-transparent py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
            >
              <option value="">選択してください</option>
              <option>AND STORYについて</option>
              <option>NewMakeについて</option>
              <option>コミュニティ開発・ソリューションについて</option>
              <option>採用について</option>
              <option>取材・メディアについて</option>
              <option>その他</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              お問合せ内容<span className="text-[#EF4444] ml-1 text-xs">＊必須</span>
            </label>
            <textarea
              id="message"
              required
              rows={6}
              placeholder="記入してください"
              className="w-full border-b border-[#D0C8B8] bg-transparent py-3 text-sm placeholder-[#C0B8A8] focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
            />
          </div>

          <div className="pt-4">
            <p className="text-xs text-[#666] mb-4">
              個人情報の取り扱いについて、詳しくは弊社の
              <a href="/privacy" className="text-[#00B8CC] underline">プライバシーポリシー</a>
              をご覧ください。
            </p>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input type="checkbox" required className="w-4 h-4 accent-[#1A1A1A]" />
              プライバシーポリシーに同意して送信する
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-between border-t border-[#1A1A1A] pt-4 text-sm font-medium hover:text-[#00B8CC] transition-colors group"
          >
            送信する
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <p className="text-xs text-[#999]">確認画面は表示されません。上記内容にて送信されますのでご注意ください。</p>
        </form>
      </div>
    </>
  )
}
