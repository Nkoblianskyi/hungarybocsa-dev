import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Technika és Tréning — Hungary Bocsa',
  description: 'Bocsa dobástechnikák, tréningtervek, taktikai tanácsok és fejlesztési módszerek minden szintű játékosnak.',
}

const techniques = [
  {
    id: '01',
    name: 'Alap pontossági dobás',
    sub: 'Raffa — Punto',
    desc: 'A bocsa alapdobása, amellyel a célgolyó elé kell juttatni a saját golyót. A kezet alulról kell lendíteni, a golyónak gördülve kell érkeznie a célhoz.',
    steps: [
      'Helyezd a lábad vállszélességű állásba, a domináns lábad kissé előre.',
      'Fogd a golyót lazán, az ujjak széttárva alátámasztva.',
      'A kart egyenesen, oldalirányú kitérés nélkül lendítsd le.',
      'Engedd el a golyót a kar legalsó pontján, az ujjak nyílásával.',
      'A kar kövesse a mozgást, ne álljon meg hirtelen.',
    ],
  },
  {
    id: '02',
    name: 'Lövéstechnika',
    sub: 'Volo',
    desc: 'A volo dobással a levegőn át repítjük a golyót, hogy az az ellenfél golyóját érintse. Pontosság és erőkontroll egyaránt szükséges.',
    steps: [
      'Emelkedet-fogás: a golyó tetején tartsd az ujjaid, az inga mozgása felfelé indul.',
      'A kart magasabban kell tartani, mint az alap dobásnál.',
      'A célpontot vizuálisan rögzítsd, mielőtt elindítod a mozdulatot.',
      'A golyó kiadásakor a csukló finoman gördüljön előre.',
      'A célt közvetlenül kell eltalálni, vagy a talaj elé kell dobni, hogy felugorkodjon.',
    ],
  },
  {
    id: '03',
    name: 'Elterelő dobás',
    sub: 'Spock',
    desc: 'Stratégiai dobás, amellyel az ellenfél golyóját kimozdítjuk a kedvező pozícióból, miközben saját golyónk a pallino közelébe kerül.',
    steps: [
      'Mérd fel pontosan az ellenfél golyójának pozícióját.',
      'Tervezd meg a szükséges szöget és erőt az érintkezéshez.',
      'A fogás és a kézelengedés az alapdobáséhoz hasonló, de az iránya más.',
      'Az erőszabályozás kulcsfontosságú: ha túl erősen dobod, saját golyód is kigurulhat.',
      'Gyakorolj célgolyók elhelyezésével, hogy pontosíts az érintkezési szögön.',
    ],
  },
]

const trainingPlans = [
  {
    level: 'Kezdő',
    weeks: '4 hét',
    sessions: 'Heti 3 alkalom',
    focus: 'Alapdobás, tartás, lendület',
    exercises: [
      '15 perc alap raffa dobás 8 méterre',
      '10 perc dobás változó távolságra (6-10 m)',
      '10 perc pallino megközelítési gyakorlat',
      '5 perc mérési és értékelési rutinok',
    ],
  },
  {
    level: 'Haladó',
    weeks: '6 hét',
    sessions: 'Heti 4 alkalom',
    focus: 'Pontosság, lövés, taktika',
    exercises: [
      '20 perc raffa pontossági edzés különböző távolságokra',
      '15 perc volo lövéstechnika',
      '10 perc összetett helyzetek szimulálása',
      '15 perc partner elleni edzőmérkőzés',
    ],
  },
  {
    level: 'Versenyző',
    weeks: 'Folyamatos',
    sessions: 'Heti 5 alkalom',
    focus: 'Mentális felkészülés, versenyrutinok',
    exercises: [
      '25 perc versenyszerű pontossági mérések',
      '20 perc célzott technikafejlesztés a gyenge pontokon',
      '20 perc taktikai edzés csapatban',
      '15 perc videóelemzés és visszajelzés',
    ],
  },
]

export default function TechnikaPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="font-serif font-black text-[clamp(8rem,18vw,16rem)] text-primary-foreground/4 mx-8 leading-none select-none">
                TECHNIKA
              </span>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <Link href="/" className="link-underline font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 hover:text-primary-foreground/70 mb-8 inline-block">
            Vissza a főoldalra
          </Link>
          <h1 className="font-serif font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-primary-foreground mt-4">
            Technika és<br /><em className="font-normal italic">fejlődés</em>
          </h1>
          <p className="font-sans text-base leading-relaxed text-primary-foreground/60 max-w-lg mt-8">
            Dobástechnikák, tréningtervek és taktikai útmutatók minden szintű játékosnak.
          </p>
        </div>
      </div>

      {/* HERO IMAGE */}
      <div className="relative h-[40vh] overflow-hidden">
        <Image src="/images/technique-bocsa.png" alt="Bocsa dobástechnika" fill className="object-cover" />
        <div className="absolute inset-0 bg-foreground/25" />
      </div>

      {/* TECHNIQUES */}
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-3">Dobástechnikák</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Az alapdobások részletesen
            </h2>
          </div>

          <div className="flex flex-col gap-20">
            {techniques.map((t, i) => (
              <div key={t.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="stat-num font-serif text-6xl font-bold text-border">{t.id}</span>
                    <div>
                      <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent">{t.sub}</p>
                      <h3 className="font-serif text-2xl font-bold text-foreground">{t.name}</h3>
                    </div>
                  </div>
                  <p className="font-sans text-base leading-relaxed text-muted-foreground mb-8">{t.desc}</p>
                </div>
                <div className="bg-muted p-8">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Lépésről lépésre</p>
                  <ol className="flex flex-col gap-4">
                    {t.steps.map((step, si) => (
                      <li key={si} className="flex gap-4">
                        <span className="stat-num font-serif font-bold text-accent shrink-0 w-5">{si + 1}.</span>
                        <p className="font-sans text-sm leading-relaxed text-muted-foreground">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING PLANS */}
      <section className="py-24 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 mb-3">Tréningtervek</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-primary-foreground">
              Szinthez igazított fejlesztés
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-primary-foreground/10">
            {trainingPlans.map((plan) => (
              <div key={plan.level} className="bg-primary-foreground/5 p-8">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">{plan.level}</h3>
                  <span className="font-sans text-xs tracking-wider uppercase text-primary-foreground/40">{plan.weeks}</span>
                </div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-accent mb-2">{plan.sessions}</p>
                <p className="font-sans text-sm text-primary-foreground/60 mb-6">Fókusz: {plan.focus}</p>
                <ul className="flex flex-col gap-3">
                  {plan.exercises.map((ex, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
                      <p className="font-sans text-sm leading-relaxed text-primary-foreground/50">{ex}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-24 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Taktika</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Taktikai tanácsok
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Pozíciójáték', text: 'Ne mindig a pallinot célozd. Néha stratégiailag előnyösebb a saját golyóidat olyan pozícióba helyezni, amely megnehezíti az ellenfél következő lépését.' },
              { title: 'A döntési fa', text: 'Minden dobás előtt mérlegelj: pontossági dobás vagy lövés? Az aktuális állás és az ellenfél elhelyezkedése határozza meg, melyik technika előnyösebb az adott pillanatban.' },
              { title: 'Csapatban való gondolkodás', text: 'Csapatjátékban a dobások sorrendje és stratégiai összehangolása döntő. Kommunikálj a csapattársaddal, egyeztesd a terveket és alkalmazkodj a változó helyzethez.' },
              { title: 'Nyomás alatt', text: 'Döntő szituációban ne változtass a bejáratott rutinon. A legegyszerűbb, legbiztosabb technikát alkalmazza ilyenkor a legtöbb tapasztalt játékos.' },
            ].map((tip) => (
              <div key={tip.title} className="border border-border p-6">
                <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-foreground mb-3">{tip.title}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE FACTS */}
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-3">Érdekes tények</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Technika és tudomány
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '45°', label: 'Optimális dobásszög', text: 'A kutatások szerint a 45 fokos szög közelében indított dobások a legtöbb esetben a legnagyobb pontosságot eredményezik.' },
              { num: '0.4s', label: 'Döntési ablak', text: 'A versenyszerű játékosok általában 0,4 másodpercen belül hozzák meg a dobástechnikai döntésüket, miután felmérték a helyzetet.' },
              { num: '200+', label: 'Ismétlés szükséges', text: 'Egy új dobástechnika automatikus mozgássorrá válásához átlagosan 200 tudatos, helyes ismétlés szükséges.' },
            ].map((f) => (
              <div key={f.num} className="border-t-2 border-primary pt-6">
                <p className="stat-num font-serif text-4xl font-bold text-primary mb-1">{f.num}</p>
                <p className="font-sans text-xs tracking-wider uppercase text-muted-foreground mb-3">{f.label}</p>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
