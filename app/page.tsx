'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { blogArticles } from '@/lib/blog-data'

function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nev: '', email: '', uzenet: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kapcsolat" className="py-24 bg-secondary">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Kapcsolat</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-balance text-foreground mb-6">
              Írj nekünk,<br />
              <em className="font-normal italic">válaszolunk</em>
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground max-w-sm">
              Kérdésed van a bocsa sporttal kapcsolatban? Lépj kapcsolatba velünk bátran. Általában 48 órán belül válaszolunk.
            </p>
            <div className="mt-8">
              <a href="mailto:info@hungarybocsa.com" className="link-underline font-sans text-sm text-foreground/70 hover:text-foreground">
                info@hungarybocsa.com
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground" htmlFor="nev-home">Név</label>
                <input id="nev-home" type="text" required
                  className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  value={form.nev} onChange={e => setForm(f => ({ ...f, nev: e.target.value }))} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground" htmlFor="email-home">E-mail</label>
                <input id="email-home" type="email" required
                  className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs tracking-wider uppercase text-muted-foreground" htmlFor="uzenet-home">Üzenet</label>
              <textarea id="uzenet-home" required rows={5}
                className="bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                value={form.uzenet} onChange={e => setForm(f => ({ ...f, uzenet: e.target.value }))} />
            </div>
            <button type="submit"
              className="self-start bg-primary text-primary-foreground font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 hover:opacity-80 transition-opacity">
              Üzenet küldése
            </button>
          </form>
        </div>
      </div>

      {sent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm"
          onClick={() => setSent(false)}>
          <div className="bg-background p-12 max-w-sm w-full mx-6 text-center" onClick={e => e.stopPropagation()}>
            <svg className="mx-auto mb-6" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" className="text-primary" />
              <path d="M12 20l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
            </svg>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-2">Köszönjük!</h3>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed">Üzeneted megérkezett. Hamarosan felvesszük veled a kapcsolatot.</p>
            <button onClick={() => setSent(false)}
              className="mt-8 font-sans text-xs tracking-[0.2em] uppercase border border-border px-6 py-3 hover:bg-secondary transition-colors text-foreground">
              Bezárás
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-bocsa.png" alt="Bocsa golyók a pályán" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-foreground/55" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-serif font-black text-[clamp(6rem,18vw,16rem)] text-primary-foreground/5 mx-8 leading-none select-none">BOCSA</span>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 pb-20 pt-40 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-12">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-6">Bocsa Sport — Magyarország</p>
              <h1 className="font-serif font-black text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] text-primary-foreground text-balance">
                A pontosság<br /><em className="font-normal italic">sportja</em>
              </h1>
            </div>
            <div className="flex flex-col gap-6 lg:pb-2">
              <p className="font-sans text-base leading-relaxed text-primary-foreground/70 max-w-sm">
                A bocsa a stratégia, a koncentráció és a finom kézügyesség találkozása. Fedezd fel Magyarország bocsa közösségét.
              </p>
              <div className="flex gap-6 items-center">
                <Link href="/tortenet"
                  className="font-sans text-xs tracking-[0.2em] uppercase border border-primary-foreground/40 text-primary-foreground px-6 py-3 hover:bg-primary-foreground hover:text-foreground transition-all">
                  Ismerj meg
                </Link>
                <Link href="#kapcsolat"
                  className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors py-3">
                  Kapcsolat
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-px bg-primary-foreground/10">
            {[
              { num: '1938', label: 'Első hazai verseny' },
              { num: '24+', label: 'Aktív terep' },
              { num: '3', label: 'Fődiszciplína' },
            ].map((s) => (
              <div key={s.num} className="bg-primary-foreground/5 backdrop-blur-sm px-6 py-5">
                <p className="stat-num font-serif font-bold text-2xl text-primary-foreground">{s.num}</p>
                <p className="font-sans text-xs tracking-wider uppercase text-primary-foreground/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORY PREVIEW */}
      <section className="py-28 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image src="/images/history-bocsa.png" alt="A bocsa sport történelme" width={620} height={480}
                className="w-full h-[420px] object-cover" />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 hidden lg:block">
                <p className="font-serif text-4xl font-bold">86</p>
                <p className="font-sans text-xs tracking-wider uppercase mt-1 opacity-60">év Magyarországon</p>
              </div>
            </div>
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Történet</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-balance text-foreground mb-6">
                Gyökerek a mediterrán tradícióban
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                A bocsa sportja évezredes múltra tekint vissza. Az ókori Görögország és Róma kődobós játékaiból egyenes ág vezet a mai modern versenysport felé. Magyarországon a 20. század elején jelent meg, és azóta folyamatosan fejlődik.
              </p>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8">
                A hazai bajnoki rendszer kiépülése, az első szervezett versenyek, a sport terjedése vidéken és városokban egyaránt.
              </p>
              <Link href="/tortenet" className="link-underline font-sans text-sm tracking-wider uppercase text-primary font-medium">
                Teljes történet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-3">Diszciplínák</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-balance">A bocsa három arca</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10">
            {[
              { title: 'Pontosság', sub: 'Raffa', desc: 'A pallino megközelítése és a pontosság mestersége. A játékos célja, hogy golyói a legközelebb kerüljenek a célgolyóhoz.' },
              { title: 'Lövés', sub: 'Volo', desc: 'A repülő dobás technikája, amellyel az ellenfél golyóit el lehet találni és kiszorítani a pályáról.' },
              { title: 'Csapatjáték', sub: 'Terna', desc: 'Háromfős csapatok versenyeznek egymás ellen, ahol a stratégia és a kommunikáció éppoly fontos, mint az egyéni tudás.' },
            ].map((d) => (
              <div key={d.title} className="bg-primary-foreground/5 p-10 hover:bg-primary-foreground/10 transition-colors">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent mb-6">{d.sub}</p>
                <h3 className="font-serif text-3xl font-bold text-primary-foreground mb-4">{d.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-primary-foreground/50">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="py-28 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Eredmények</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-balance text-foreground mb-10">
                Magyar sikerek a bocsa sportban
              </h2>
              <div className="flex flex-col divide-y divide-border">
                {[
                  { year: '2019', event: 'Közép-európai Bajnokság', result: '2. hely, csapat' },
                  { year: '2017', event: 'Balkáni Meghívásos Verseny', result: 'Arany, egyéni' },
                  { year: '2015', event: 'Európai Nyílt Bajnokság', result: 'Bronz, páros' },
                  { year: '2012', event: 'Mediterrán Nyílt Torna', result: 'Ezüst, csapat' },
                ].map((a) => (
                  <div key={a.year} className="flex items-center justify-between py-5">
                    <div className="flex items-center gap-6">
                      <span className="stat-num font-serif text-xl font-bold text-accent min-w-[3.5rem]">{a.year}</span>
                      <span className="font-sans text-sm text-foreground/70">{a.event}</span>
                    </div>
                    <span className="font-sans text-xs tracking-wider text-muted-foreground">{a.result}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:pl-8">
              <Image src="/images/achievements-bocsa.png" alt="Magyar eredmények" width={560} height={460}
                className="w-full h-[380px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE FACTS */}
      <section className="py-24 bg-muted">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Tudtad?</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-balance text-foreground">
              Különleges tények a bocsáról
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '5000+', fact: 'éves múltra tekint vissza a golyódobás hagyománya az ókori mediterrán kultúrákban.' },
              { num: '107 mm', fact: 'az átlagos bocsa golyó átmérője, amelynek anyaga általában acél vagy gyanta.' },
              { num: '13 m', fact: 'a pallino és a játékos közötti minimális távolság az általános versenyrendszerben.' },
              { num: '92+', fact: 'ország rendelkezik aktív bocsa szövetséggel és versenyrendszerrel világszerte.' },
            ].map((f) => (
              <div key={f.num} className="border-t-2 border-primary pt-6">
                <p className="stat-num font-serif font-bold text-4xl text-primary mb-3">{f.num}</p>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{f.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RULES PREVIEW */}
      <section className="py-28 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Szabályok</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-balance text-foreground mb-6">
                A játék logikája
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8">
                A bocsa szabályrendszere egyszerre egyszerű és mély. Az alapokat percek alatt el lehet sajátítani, de az igazi mesterség megköveteli a részletes ismeretét.
              </p>
              <Link href="/szabalyok" className="link-underline font-sans text-sm tracking-wider uppercase text-primary font-medium">
                Teljes szabálykönyv
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { n: '01', title: 'A pallino feldobása', desc: 'A forduló a pallino (kis célgolyó) feldobásával kezdődik. A pallino legalább 13 méterre kell essen a dobóvonaltól.' },
                { n: '02', title: 'Golyók dobása', desc: 'Mindkét csapat váltakozva dobja golyóit. Mindig az a csapat következik, amelyiknek golyói távolabb vannak a pallinótól.' },
                { n: '03', title: 'Pontszámlálás', desc: 'Egy fordulóban csak az egyik csapat kaphat pontot: annyi pontot, ahány golyójuk közelebb van a pallinóhoz az ellenfél legjobb golyójánál.' },
              ].map((r) => (
                <div key={r.n} className="flex gap-6 p-6 border border-border hover:border-primary transition-colors">
                  <span className="font-serif font-bold text-3xl text-border shrink-0 leading-none">{r.n}</span>
                  <div>
                    <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-foreground mb-2">{r.title}</h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT */}
      <section className="py-24 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Felszerelés</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-balance text-foreground">
              Eszközök és felszerelés
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Image src="/images/equipment-bocsa.png" alt="Bocsa felszerelés" width={600} height={440}
              className="w-full h-[380px] object-cover" />
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Bocsa golyó', desc: 'Acélból vagy gyantából készült, szabványos tömegű és méretű golyók.' },
                { title: 'Pallino', desc: 'A kis célgolyó. Általában fehér vagy sárga, kisebb méretű, könnyebb golyó.' },
                { title: 'Mérőszalag', desc: 'A golyók távolságának méréséhez elengedhetetlen versenyen.' },
                { title: 'A pálya', desc: 'Tömörített homokos, salacos vagy füves felület. Mérete diszciplínánként változó.' },
              ].map((e) => (
                <div key={e.title} className="border-l-2 border-accent pl-4">
                  <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-foreground mb-2">{e.title}</h3>
                  <p className="font-sans text-xs leading-relaxed text-muted-foreground">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNIQUE PREVIEW */}
      <section className="py-28 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">Technika</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-balance text-foreground mb-6">
                Tréning és<br /><em className="font-normal italic">fejlődés</em>
              </h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
                A bocsa technikájának elsajátítása fokozatos folyamat. Az alapdobástól az összetett taktikai lépésekig minden szintnek megvan a maga fejlesztési útja.
              </p>
              <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8">
                Tréningtervek, edzésgyakorlatok és verseny-előkészítési módszerek tapasztalt játékosoktól.
              </p>
              <Link href="/technika" className="link-underline font-sans text-sm tracking-wider uppercase text-primary font-medium">
                Tréning és taktika
              </Link>
            </div>
            <div className="relative">
              <Image src="/images/technique-bocsa.png" alt="Bocsa dobástechnika" width={600} height={460}
                className="w-full h-[400px] object-cover" />
              <div className="absolute top-6 left-6 bg-background p-5 border border-border">
                <p className="font-serif font-bold text-3xl text-primary mb-1">3</p>
                <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground">alapdobás-típus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-3">Blog</p>
              <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-primary-foreground">Cikkek és írások</h2>
            </div>
            <Link href="/blog" className="link-underline font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60 hover:text-primary-foreground hidden md:block">
              Minden cikk
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10">
            {blogArticles.slice(0, 3).map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`}
                className="bg-foreground p-8 hover:bg-primary-foreground/5 transition-colors group block">
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-4">{a.topic}</p>
                <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3 leading-snug group-hover:opacity-80 transition-opacity">
                  {a.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-primary-foreground/50">{a.excerpt}</p>
                <p className="font-sans text-xs tracking-wider uppercase text-primary-foreground/30 mt-6 group-hover:text-primary-foreground/60 transition-colors">
                  Tovabb
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <Link href="/blog" className="link-underline font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60">
              Minden cikk
            </Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  )
}
