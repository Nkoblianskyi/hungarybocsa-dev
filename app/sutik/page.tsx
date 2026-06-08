import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sutikezeles | Hungary Bocsa',
  description: 'Tajekoztas a hungarybocsa.com oldalon alkalmazott sutikrol es azok kezeleserol.',
}

export default function SutikPage() {
  return (
    <div className="bg-background">
      <div className="pt-32 pb-16 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-4">Jogi tájékoztató</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] text-balance">
            Sütikezelési szabályzat
          </h1>
        </div>
      </div>

      <article className="py-20">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-10">

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Mi az a süti?</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              A süti (cookie) egy kis adatfájl, amelyet a weboldal a felhasználó böngészőjében tárol. A sütik segítségével a weboldal megjegyezheti a felhasználó beállításait, javíthatja a felhasználói élményt, és statisztikai adatokat gyűjthet a látogatókról.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Milyen sütiket használunk?</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Technikai sütik',
                  desc: 'Az oldal alapvető működéséhez szükséges sütik. Ezek nélkül az oldal egyes funkciói nem működnének megfelelően. Ezeket nem lehet letiltani.',
                },
                {
                  title: 'Preferencia sütik',
                  desc: 'Lehetővé teszik, hogy az oldal emlékezzen a felhasználó választásaira, például a cookie-hozzájárulás állapotára.',
                },
                {
                  title: 'Analitikai sütik',
                  desc: 'Anonim statisztikai adatokat gyűjtenek a látogatók számáról és viselkedéséről, amelyek segítségével az oldalt fejleszthetjük. Csak az Ön hozzájárulásával használjuk.',
                },
              ].map((s) => (
                <div key={s.title} className="border-l-2 border-accent pl-6">
                  <h3 className="font-sans text-sm font-medium tracking-wide uppercase text-foreground mb-2">{s.title}</h3>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Sütik kezelése és letiltása</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
              Az oldal első látogatásakor egy értesítő ablakban lehetőséget biztosítunk a sütik elfogadására vagy elutasítására. Döntését bármikor megváltoztathatja a böngészője beállításaiban, ahol törölheti a már tárolt sütiket, és beállíthatja, hogy böngészője blokkolja a sütik tárolását.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Kérjük, vegye figyelembe, hogy egyes sütik letiltása esetén az oldal bizonyos funkciói nem feltétlenül működnek megfelelően.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Harmadik féltől származó sütik</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Az oldal jelenleg nem alkalmaz harmadik féltől (hirdetési platformoktól, közösségi médiától) származó sütiket. Amennyiben ez a jövőben változik, a szabályzatot frissítjük, és az érintett felhasználóknak értesítést küldünk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Kapcsolat</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Ha kérdése van a sütikezeléssel kapcsolatban, kérjük, lépjen velünk kapcsolatba az alábbi e-mail-címen:{' '}
              <a href="mailto:info@hungarybocsa.com" className="text-primary hover:underline">
                info@hungarybocsa.com
              </a>
            </p>
          </section>

          <div className="border-t border-border pt-8">
            <p className="font-sans text-xs text-muted-foreground">
              Utolsó frissítés: 2026. A szabályzat változtatásának jogát fenntartjuk.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
