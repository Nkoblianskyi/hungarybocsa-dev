'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { Metadata } from 'next'

// Note: metadata export only works in server components, so we keep the page simple
// and define metadata in a separate server wrapper if needed. For now, client page.

function ContactForm() {
  const [form, setForm] = useState({ nev: '', email: '', uzenet: '', hozzajarulas: false })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.hozzajarulas) {
      setError('Az adatkezelési tájékoztató elfogadása kötelező.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nev-rolunk" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Nev</label>
          <input
            id="nev-rolunk"
            type="text"
            required
            className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            value={form.nev}
            onChange={e => setForm(f => ({ ...f, nev: e.target.value }))}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email-rolunk" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">E-mail</label>
          <input
            id="email-rolunk"
            type="email"
            required
            className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="uzenet-rolunk" className="font-sans text-xs tracking-wider uppercase text-muted-foreground">Uzenet</label>
          <textarea
            id="uzenet-rolunk"
            required
            rows={5}
            className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            value={form.uzenet}
            onChange={e => setForm(f => ({ ...f, uzenet: e.target.value }))}
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            id="hozzajarulas"
            type="checkbox"
            className="mt-0.5 w-4 h-4 accent-primary cursor-pointer"
            checked={form.hozzajarulas}
            onChange={e => setForm(f => ({ ...f, hozzajarulas: e.target.checked }))}
          />
          <label htmlFor="hozzajarulas" className="font-sans text-xs leading-relaxed text-muted-foreground cursor-pointer">
            Elfogadom az{' '}
            <a href="/adatvedelmi" className="text-primary hover:underline">adatkezelési tájékoztatót</a>
            {' '}és hozzájárulok adataim kezeléséhez a kapcsolatfelvétel céljából.
          </label>
        </div>

        {error && (
          <p className="font-sans text-xs text-destructive">{error}</p>
        )}

        <button
          type="submit"
          className="self-start bg-primary text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 hover:opacity-80 transition-opacity"
        >
          Uzenet kuldese
        </button>
      </form>

      {/* Success popup */}
      {sent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
          onClick={() => setSent(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Uzenet elkuldve"
        >
          <div
            className="bg-background p-12 max-w-sm w-full mx-6 text-center"
            onClick={e => e.stopPropagation()}
          >
            <svg className="mx-auto mb-6" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
            </svg>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Koszonjuk!</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">
              Uzeneted megerkezett. Hamarosan felvesszuk veled a kapcsolatot.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-8 font-sans text-xs tracking-[0.2em] uppercase border border-border px-6 py-3 hover:bg-secondary transition-colors text-foreground"
            >
              Bezaras
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default function RolunkPage() {
  return (
    <div className="bg-background">
      {/* Page header */}
      <div className="pt-32 pb-16 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-4">Bemutatkozas</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] text-balance">
            Rolunk
          </h1>
        </div>
      </div>

      {/* Mission */}
      <section className="py-24 border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Kuldetesunk</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-balance text-foreground mb-6">
                A bocsa sport<br />
                <em className="font-normal italic">kozossege Magyarorszagon</em>
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                Ez az oldal a bocsa sport hazai rajongoinak, jatekosainak es erdeklodoknek szol. Celunk, hogy megbizhatо, magyarnyelvű forrasot biztositsunk a sport minden aspektusahoz: tortenethez, szabalyokhoz, technikahoz es versenyekhez.
              </p>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                Nem kepviselunk egyetlen klubot vagy szervezetet sem. Fuggetlen informacios feluletkent mukodunk, amelynek kozeppontjaban maga a sport all.
              </p>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                Ha kerdésed van, vagy szeretnel hozzajarulni a tartalom bovitesehez, keress minket az alabb talalhato kapcsolatfelveteli urlap segitsegevel.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about-bocsa.png"
                alt="Bocsa palya Magyarorszagon"
                width={620}
                height={460}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12">Ertekeink</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: 'Pontossag',
                desc: 'Minden informaciot gondosan ellenorzunk es frissitunk. A sportra vonatkozo tartalmaink megbizhatoak es naprakeszek.',
              },
              {
                title: 'Függetlenseg',
                desc: 'Nem allunk egyetlen szponzor, klub vagy szovetseg hataskoreben sem. Az olvasok erdeke az egyetlen vezerlő elvunk.',
              },
              {
                title: 'Kozosseg',
                desc: 'A bocsa sport ereje a kozossegben rejlik. Platformunk segit osszekapcsolni a hazai sportolokat es erdeklodőket.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-background p-10">
                <div className="w-8 h-px bg-accent mb-6" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">{v.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Kapcsolatfelvetel</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-balance text-foreground mb-6">
                Irj nekunk
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8">
                Kerdessel, javaslattal, vagy tartalmi hozzajarulassel fordulj hozzank. Altalaban 48 oran belul valaszolunk.
              </p>
              <a
                href="mailto:info@hungarybocsa.com"
                className="link-underline font-sans text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                info@hungarybocsa.com
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
