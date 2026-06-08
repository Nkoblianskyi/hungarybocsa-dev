import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek | Hungary Bocsa',
  description: 'Tajekoztas a hungarybocsa.com oldalon kezelt szemelyes adatokrol, azok celjairol es a felhasznalok jogairol.',
}

export default function AdatvedelmiPage() {
  return (
    <div className="bg-background">
      <div className="pt-32 pb-16 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-4">Jogi tájékoztató</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] text-balance">
            Adatvédelmi irányelvek
          </h1>
        </div>
      </div>

      <article className="py-20">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-10">

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Az adatkezelő</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Az oldal üzemeltetője (a továbbiakban: Adatkezelő) felelős a hungarybocsa.com weboldalon gyűjtött személyes adatok kezeléséért. Az adatkezeléssel kapcsolatos kérdésekkel az{' '}
              <a href="mailto:info@hungarybocsa.com" className="text-primary hover:underline">info@hungarybocsa.com</a>{' '}
              e-mail-címen lehet felvenni velünk a kapcsolatot.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Gyűjtött adatok köre</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
              A kapcsolatfelvételi urlap kitöltésekor az alábbi személyes adatokat kezeljük:
            </p>
            <ul className="flex flex-col gap-2 pl-4">
              {['Teljes név', 'E-mail-cím', 'Az üzenet tartalma'].map((item) => (
                <li key={item} className="flex items-start gap-3 font-sans text-base text-muted-foreground">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-sans text-base leading-relaxed text-muted-foreground mt-4">
              Az oldal böngészésekor automatikusan naplózzuk a látogató IP-címét és a látogatás időpontját a rendszerbiztonság érdekében. Ezeket az adatokat személyes azonosításra nem használjuk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Az adatkezelés célja és jogalapja</h2>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Kapcsolatfelvétel',
                  desc: 'A megadott adatokat kizárólag az Ön megkeresésének megválaszolásához használjuk. Jogalapja: az érintett hozzájárulása (GDPR 6. cikk (1) a) pont).',
                },
                {
                  title: 'Rendszerbiztonság',
                  desc: 'A naplóadatokat az oldal biztonságos üzemeltetése és visszaélések megelőzése céljából tároljuk. Jogalapja: jogos érdek (GDPR 6. cikk (1) f) pont).',
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
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Adattárolás időtartama</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              A kapcsolatfelvételi üzeneteket a megkeresés lezárástól számított 12 hónapig tároljuk, azt követően töröljük. A rendszernaplókat legfeljebb 30 napig őrizzük meg.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Az Ön jogai</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground mb-4">
              Az alkalmazandó adatvédelmi jogszabályok alapján Önnek joga van:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Hozzáférési jog', desc: 'Tájékoztatást kérhet az Önről kezelt adatokról.' },
                { title: 'Helyesbítési jog', desc: 'Kérheti pontatlan adatai helyesbítését.' },
                { title: 'Törlési jog', desc: 'Kérheti adatai törlését, ha az adatkezelés feltételei már nem állnak fenn.' },
                { title: 'Tiltakozási jog', desc: 'Tiltakozhat jogos érdeken alapuló adatkezelés ellen.' },
              ].map((r) => (
                <div key={r.title} className="bg-secondary p-5">
                  <h3 className="font-sans text-xs tracking-wider uppercase text-foreground mb-2">{r.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="font-sans text-base leading-relaxed text-muted-foreground mt-6">
              Jogai gyakorlásához, valamint panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (naih.hu) fordulhat.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Adatbiztonság</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Minden szükséges technikai és szervezési intézkedést megteszünk a személyes adatok biztonsága érdekében. Az adatokat titkosított kapcsolaton (HTTPS) keresztül gyűjtjük, és az azokhoz való hozzáférést korlátozzuk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Sütik</h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Az oldalon alkalmazott sütikről részletes tájékoztatást a{' '}
              <a href="/sutik" className="text-primary hover:underline">sütikezelési szabályzatban</a>{' '}
              talál.
            </p>
          </section>

          <div className="border-t border-border pt-8">
            <p className="font-sans text-xs text-muted-foreground">
              Utolsó frissítés: 2026. A tájékoztató tartalmát fenntartjuk módosítani.
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}
