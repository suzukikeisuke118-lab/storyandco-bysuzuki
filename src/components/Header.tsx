'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: '会社のこと', href: '/company' },
  { label: '事業のこと', href: '/service' },
  { label: '事例のご紹介', href: '/cases' },
  { label: 'お知らせ', href: '/news' },
  { label: '採用情報', href: '/recruit', external: true },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#F5F0E8] border-b border-[#D0C8B8]' : 'bg-[#F5F0E8] border-b border-[#D0C8B8]'
      }`}
    >
      <div className="flex items-center justify-between px-6 h-[60px] max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <StoryLogo />
          <span className="font-serif text-xl font-bold text-[#1A1A1A] tracking-tight">
            STORY & Co.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors relative ${
                  isActive
                    ? 'text-[#1A1A1A] font-medium'
                    : 'text-[#666666] hover:text-[#1A1A1A]'
                }`}
              >
                {isActive && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#00B8CC]" />
                )}
                {item.label}
                {item.external && (
                  <svg className="inline-block ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Contact button */}
        <div className="hidden lg:flex items-center gap-2">
          <Link
            href="/contact"
            className="flex items-center gap-3 border border-[#1A1A1A] rounded-full px-5 py-2 text-sm font-medium hover:bg-[#1A1A1A] hover:text-white transition-colors overflow-hidden"
          >
            <span className="whitespace-nowrap animate-marquee-text">
              お問い合わせ <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-1 align-middle" /> お問い合わせ <span className="inline-block w-1.5 h-1.5 rounded-full bg-current mx-1 align-middle" />
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1A1A1A] text-white">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-4 text-sm border-b border-white/10 hover:bg-white/5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block px-6 py-4 text-sm hover:bg-white/5 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      )}
    </header>
  )
}

function StoryLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stacked lines icon based on logo PDF */}
      <rect x="0" y="3" width="12" height="2" rx="1" fill="#9CA3AF" />
      <rect x="0" y="7" width="18" height="2" rx="1" fill="#9CA3AF" />
      <rect x="0" y="11" width="14" height="2" rx="1" fill="#1A1A1A" />
      <rect x="0" y="15" width="18" height="2" rx="1" fill="#9CA3AF" />
      <rect x="0" y="19" width="10" height="2" rx="1" fill="#9CA3AF" />
      <rect x="16" y="3" width="12" height="2" rx="1" fill="#1A1A1A" />
      <rect x="20" y="7" width="8" height="2" rx="1" fill="#9CA3AF" />
      <rect x="16" y="11" width="12" height="2" rx="1" fill="#9CA3AF" />
      <rect x="20" y="15" width="8" height="2" rx="1" fill="#9CA3AF" />
      <rect x="16" y="19" width="12" height="2" rx="1" fill="#9CA3AF" />
    </svg>
  )
}
