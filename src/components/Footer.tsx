import Link from 'next/link'

const footerLinks = {
  main: [
    { label: 'トップページ', href: '/' },
    { label: '会社のこと', href: '/company' },
    { label: '事業のこと', href: '/service' },
    { label: '事例のご紹介', href: '/cases' },
    { label: 'お知らせ', href: '/news' },
    { label: '採用情報', href: '/recruit' },
    { label: 'お問い合わせ', href: '/contact' },
    { label: 'プライバシーポリシー', href: '/privacy' },
  ],
  services: [
    { label: 'プラットフォーム事業', href: '/service#platform', bullet: true },
    { label: 'AND STORY', href: '/service/andstory' },
    { label: 'コミュニティ事業', href: '/service#community', bullet: true },
    { label: 'NewMake', href: '/service/newmake' },
    { label: 'タワーのアワー', href: '/service/tower' },
    { label: 'ソリューション事業', href: '/service#solution', bullet: true },
    { label: 'コミュニティ開発', href: '/service/community-dev' },
    { label: '地域・イベントプロデュース', href: '/service/event' },
    { label: 'SDGs推進支援', href: '/service/sdgs' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#F5F0E8] border-t border-[#D0C8B8] pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo */}
          <div>
            <p className="font-serif text-[clamp(48px,6vw,80px)] font-bold leading-none text-[#1A1A1A]">
              STORY<br />& Co.
            </p>
          </div>

          {/* Main links */}
          <div>
            <ul className="space-y-2">
              {footerLinks.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#666666] hover:text-[#1A1A1A] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm hover:text-[#1A1A1A] transition-colors ${
                      item.bullet ? 'text-[#1A1A1A] font-medium flex items-center gap-1' : 'text-[#666666] pl-3'
                    }`}
                  >
                    {item.bullet && <span className="w-1.5 h-1.5 rounded-full bg-[#00B8CC] shrink-0" />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D0C8B8] pt-6">
          <p className="text-xs text-[#999]">© STORY&Co.</p>
        </div>
      </div>
    </footer>
  )
}
