'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('bocsa-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('bocsa-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('bocsa-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-foreground text-primary-foreground border-t border-primary-foreground/10"
      role="dialog"
      aria-label="Sütik kezelése"
      aria-live="polite"
    >
      <div className="max-w-screen-xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
        <p className="font-sans text-sm leading-relaxed text-primary-foreground/70 max-w-2xl">
          Ez az oldal sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében.
          A sütikről részletes tájékoztatást az{' '}
          <Link href="/adatvedelmi" className="text-accent hover:text-primary-foreground transition-colors underline underline-offset-2">
            adatvédelmi irányelvekben
          </Link>{' '}
          és a{' '}
          <Link href="/sutik" className="text-accent hover:text-primary-foreground transition-colors underline underline-offset-2">
            sütikezelési szabályzatban
          </Link>{' '}
          találsz.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-xs tracking-[0.15em] uppercase text-primary-foreground/50 hover:text-primary-foreground transition-colors px-4 py-2.5 border border-primary-foreground/20 hover:border-primary-foreground/50"
          >
            Elutasít
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs tracking-[0.15em] uppercase bg-accent text-accent-foreground px-5 py-2.5 hover:opacity-80 transition-opacity"
          >
            Elfogad
          </button>
        </div>
      </div>
    </div>
  )
}
