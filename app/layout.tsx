'use client'

import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CookieBanner from '@/components/cookie-banner'

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700', '900'],
  style: ['normal', 'italic'],
})

const navLinks = [
  { href: '/tortenet', label: 'Történet' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo wordmark */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Hungary Bocsa fooldal">
          {/* SVG emblem */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5"
              className={scrolled ? 'text-primary' : 'text-white'} />
            <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1"
              className={scrolled ? 'text-accent opacity-70' : 'text-white opacity-50'} />
            <circle cx="18" cy="18" r="4" fill="currentColor"
              className={scrolled ? 'text-primary' : 'text-white'} />
            <line x1="18" y1="1" x2="18" y2="8" stroke="currentColor" strokeWidth="1.5"
              className={scrolled ? 'text-primary' : 'text-white'} />
            <line x1="18" y1="28" x2="18" y2="35" stroke="currentColor" strokeWidth="1.5"
              className={scrolled ? 'text-primary' : 'text-white'} />
            <line x1="1" y1="18" x2="8" y2="18" stroke="currentColor" strokeWidth="1.5"
              className={scrolled ? 'text-primary' : 'text-white'} />
            <line x1="28" y1="18" x2="35" y2="18" stroke="currentColor" strokeWidth="1.5"
              className={scrolled ? 'text-primary' : 'text-white'} />
          </svg>
          <span className="flex flex-col leading-none">
            <span className={`font-serif text-lg tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Hungary
            </span>
            <span className={`font-sans text-xs tracking-[0.25em] uppercase transition-colors ${scrolled ? 'text-accent' : 'text-white/70'}`}>
              Bocsa
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Fo navigacio">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`link-underline font-sans text-sm tracking-wider uppercase transition-colors ${
                scrolled
                  ? 'text-foreground/70 hover:text-foreground'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu bezarasa' : 'Menu megnyitasa'}
          aria-expanded={open}
        >
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? 'bg-foreground' : 'bg-white'} ${open ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background border-t border-border ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-5" aria-label="Mobil navigáció">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-base font-400 tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

const footerLinks = [
  { href: '/tortenet', label: 'Történet' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/sutik', label: 'Sütik' },
  { href: '/adatvedelmi', label: 'Adatvédelem' },
]

function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground border-t border-primary-foreground/10">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        {/* Top row: logo + nav links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Hungary Bocsa fooldal">
            <svg width="24" height="24" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="1.5" className="text-primary-foreground/40" />
              <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1" className="text-accent opacity-60" />
              <circle cx="18" cy="18" r="4" fill="currentColor" className="text-primary-foreground/70" />
            </svg>
            <span className="font-serif text-sm tracking-widest text-primary-foreground/70">
              Hungary Bocsa
            </span>
          </Link>

          {/* Nav links */}
          <nav aria-label="Labléc navigáció">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-xs tracking-wider uppercase text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom row: copyright + email */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-sans text-xs text-primary-foreground/25">
            Bocsa Magyarország &copy; {new Date().getFullYear()}
          </p>
          <a
            href="mailto:info@hungarybocsa.com"
            className="font-sans text-xs text-primary-foreground/35 hover:text-primary-foreground/70 transition-colors"
          >
            info@hungarybocsa.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <head>
        <title>Hungary Bocsa | Bocsa Sport Magyarorszagon</title>
        <meta name="description" content="A bocsa sport magyarországi oldala. Történet, szabályok, technika, hírek és közösség." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2d4a30" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
