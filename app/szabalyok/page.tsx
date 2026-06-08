import Link from 'next/link'

export const metadata = {
  title: 'Szabályok — Hungary Bocsa',
  description: 'A bocsa sport teljes szabálykönyve: játékmenet, pontszámlálás, diszciplínák és versenyszabályok magyarul.',
}

const rules = [
  {
    chapter: 'I. fejezet',
    title: 'A játék célja és alapfogalmak',
    items: [
      { num: '1.1', rule: 'A bocsa célja', desc: 'A bocsa célja, hogy a játékos golyói a lehető legközelebb kerüljenek a pallino nevű kis célgolyóhoz, miközben az ellenfél golyóit igyekszik eltávolítani.' },
      { num: '1.2', rule: 'A pallino', desc: 'A pallino (más nevén jack vagy boccino) az a kis célgolyó, amelyet a forduló elején dobnak a pályára. Általában fehér vagy sárga, átmérője 40-60 mm.' },
      { num: '1.3', rule: 'A bocsa golyók', desc: 'Minden játékos vagy csapat meghatározott számú bocsa golyóval rendelkezik. A golyók mérete és tömege szabványosított, az adott diszciplína előírásai szerint.' },
      { num: '1.4', rule: 'Játékosok száma', desc: 'A bocsa játszható egyéni (1v1), páros (2v2) és csapat (3v3 vagy 4v4) formátumban. Minden formátumnak megvan a maga golyóelosztása.' },
    ],
  },
  {
    chapter: 'II. fejezet',
    title: 'Játékmenet és fordulók',
    items: [
      { num: '2.1', rule: 'A forduló kezdése', desc: 'A fordulót a pallino feldobásával indítják. A pallinót dobó csapat jogát sorsolással vagy az előző forduló nyertese kapja.' },
      { num: '2.2', rule: 'A pallino érvényes helyzete', desc: 'A pallino érvényes, ha legalább 13 méterre landol a dobóvonaltól, és nem éri el a pályavégi korlátot. Érvénytelen dobás esetén az ellenfél dobhatja a pallinót.' },
      { num: '2.3', rule: 'Golyók sorrendje', desc: 'Az első bocsa golyót mindig a pallino dobója veti. Ezután mindig az a csapat dobja a következő golyót, amelyiknek legjobb golyója távolabb van a pallinótól.' },
      { num: '2.4', rule: 'Az összes golyó eldobása', desc: 'A forduló addig tart, amíg mindkét csapat el nem dobja az összes golyóját. Az utolsó dobások után következik a pontozás.' },
      { num: '2.5', rule: 'A pálya elhagyása', desc: 'A pályáról kigurult golyókat érvénytelennek kell tekinteni, és ezeket el kell távolítani. A pálya szélét megjelölt vonalak és keretek határolják.' },
    ],
  },
  {
    chapter: 'III. fejezet',
    title: 'Pontszámlálás',
    items: [
      { num: '3.1', rule: 'Ki kap pontot', desc: 'Egy fordulóban csak az a csapat kap pontot, amelyiknek legalább egy golyója közelebb van a pallinóhoz az ellenfél legközelebbi golyójánál.' },
      { num: '3.2', rule: 'Hány pontot kap', desc: 'A nyertes csapat annyi pontot kap, ahány golyója közelebb van a pallinóhoz az ellenfél legjobb golyójánál.' },
      { num: '3.3', rule: 'Döntetlen helyzet', desc: 'Ha két golyó azonos távolságra van a pallinótól, nem ítélnek pontot egyik csapatnak sem. A fordulót elölről kezdik, a pallino dobása az eddigi dobóé marad.' },
      { num: '3.4', rule: 'Nyerési feltétel', desc: 'A mérkőzést az a csapat nyeri, amelyik elsőként éri el az előírt pontszámot (általában 12 vagy 13 pont) vagy a legtöbb pontot gyűjti az előírt fordulók alatt.' },
    ],
  },
  {
    chapter: 'IV. fejezet',
    title: 'Dobástechnikák és tiltott cselekmények',
    items: [
      { num: '4.1', rule: 'Raffa dobás', desc: 'A raffa a pontossági dobás alapformája, amellyel a pallino elé helyezik a golyót. A golyónak a talajon kell gördülnie, repíteni nem szabad.' },
      { num: '4.2', rule: 'Volo dobás', desc: 'A volo a lövéstechnika, amellyel az ellenfél golyóit el lehet találni. A golyót a levegőbe emelik és repítik, hogy az cél előtt érintse a talajt.' },
      { num: '4.3', rule: 'A dobóvonal', desc: 'A dobóvonalat mindkét lábbal el kell hagyni a dobás előtt, kivéve bizonyos versenykategóriákban engedélyezett módoknál. A vonalat átlépni dobás közben nem szabad.' },
      { num: '4.4', rule: 'Tiltott cselekmények', desc: 'Tilos a pálya szándékos megrongálása, az ellenfél zavarása és a golyók illegális módosítása. A szabályszegés büntetőpontot vagy kizárást vonhat maga után.' },
    ],
  },
  {
    chapter: 'V. fejezet',
    title: 'Diszciplínák',
    items: [
      { num: '5.1', rule: 'Egyéni kategória', desc: 'Két játékos versenyez egymás ellen. Minden játékos általában négy golyóval rendelkezik. Az egyéni mérkőzéseken a személyes pontosság és stratégia dönt.' },
      { num: '5.2', rule: 'Páros kategória', desc: 'Két kétfős csapat mérkőzik. Minden játékosnak két golyója van. A dobások sorrendjét a csapatstratégia határozza meg.' },
      { num: '5.3', rule: 'Csapat kategória', desc: 'Háromfős csapatok versenyeznek. Minden játékosnak két golyója van. A csapatjátékban a kommunikáció és a koordináció kulcsszerepet játszik.' },
      { num: '5.4', rule: 'Speciális kategóriák', desc: 'Egyes versenyeken korosztályos (junior, senior) és képességalapú kategóriák is szerepelnek. Ezek külön szabályrendszer szerint zajlanak.' },
    ],
  },
]

export default function SzabalyokPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="font-serif font-black text-[clamp(8rem,20vw,18rem)] text-primary-foreground/4 mx-8 leading-none select-none">
                SZABÁLYOK
              </span>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <Link href="/" className="link-underline font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 hover:text-primary-foreground/70 mb-8 inline-block">
            Vissza a főoldalra
          </Link>
          <h1 className="font-serif font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-primary-foreground mt-4">
            Szabály<br /><em className="font-normal italic">könyv</em>
          </h1>
          <p className="font-sans text-base leading-relaxed text-primary-foreground/60 max-w-lg mt-8">
            A bocsa sport hivatalos szabályainak és diszciplínáinak átfogó összefoglalója. Kezdőknek és tapasztalt játékosoknak egyaránt.
          </p>
        </div>
      </div>

      {/* QUICK RULES */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-8">Gyorsszabályok</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-primary-foreground/10">
            {[
              { n: '13m', label: 'Minimum pallinotávolság' },
              { n: '12p', label: 'Győzelemhez szükséges pont' },
              { n: '2-4', label: 'Golyó játékosonként' },
              { n: '4m', label: 'Pálya szélessége' },
            ].map((q) => (
              <div key={q.n} className="bg-primary-foreground/5 px-8 py-6">
                <p className="stat-num font-serif text-4xl font-bold text-primary-foreground mb-2">{q.n}</p>
                <p className="font-sans text-xs tracking-wider uppercase text-primary-foreground/50">{q.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL RULES */}
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col gap-20">
            {rules.map((chapter) => (
              <div key={chapter.chapter}>
                <div className="flex items-baseline gap-4 mb-10 pb-4 border-b border-border">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent">{chapter.chapter}</span>
                  <h2 className="font-serif text-2xl font-bold text-foreground">{chapter.title}</h2>
                </div>
                <div className="flex flex-col gap-6">
                  {chapter.items.map((item) => (
                    <div key={item.num} className="grid grid-cols-1 md:grid-cols-[6rem_1fr] gap-4 md:gap-10">
                      <span className="stat-num font-serif text-lg font-bold text-muted-foreground">{item.num}</span>
                      <div>
                        <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-foreground mb-2">{item.rule}</h3>
                        <p className="font-sans text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE FACTS */}
      <section className="py-24 bg-muted">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-3">Érdekességek</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Szabályok mögött
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'A mérés fontossága', text: 'A bocsa mérkőzéseken a mérőszalag az egyik legfontosabb eszköz. Szoros helyzetekben milliméterek döntenek, ezért a pontos mérés képessége és nyugodtsága versenyelőnyt jelent.' },
              { title: 'A pálya hatása', text: 'A pálya egyenetlenségei, gödrök és buckák stratégiai lehetőségeket nyitnak. Tapasztalt játékosok megismerik a pálya jellemzőit és azokat tudatosan beépítik a taktikájukba.' },
              { title: 'Szabályváltozások', text: 'A bocsa szabályrendszere folyamatosan finomodik. Az elmúlt évtizedekben számos pontosítást és kiegészítést vezettek be, hogy a sport minden szinten élvezetes és igazságos maradjon.' },
            ].map((f) => (
              <div key={f.title} className="border-t-2 border-primary pt-6">
                <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-foreground mb-3">{f.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
