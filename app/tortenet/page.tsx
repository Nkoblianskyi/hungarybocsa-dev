import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Történet — Hungary Bocsa',
  description: 'A bocsa sport magyarországi és európai történelme, gyökerei és fejlődése az ókortól napjainkig.',
}

const timeline = [
  {
    era: 'Ókor',
    period: 'Kr. e. 5000',
    title: 'Az ősök játéka',
    text: 'A golyódobás legkorábbi nyomait az ókori Egyiptomban találták. A faragott kövek és agyaggolyók kiszorítása, célba juttatása az emberiség egyik legősibb játékösztönéből fakad. A mediterrán kultúrák mindegyikében megjelent valamilyen formában a precíziós dobás hagyománya.',
  },
  {
    era: 'Görög-Római kor',
    period: 'Kr. e. 600',
    title: 'A kődobás kultúrája',
    text: 'Az ókori görögök rendszeresen versengtek kődobásban, amelyet sportolók és katonák egyaránt gyakoroltak. A rómaiak egy lépéssel tovább mentek: bevezették a pallino célgolyót és meghatározták az első játékszabályokat. A sport a Birodalom terjedésével együtt jutott el Európa különböző szegleteibe.',
  },
  {
    era: 'Középkor',
    period: '12. század',
    title: 'Tiltott és engedélyezett játék',
    text: 'A középkorban a bocsa elődei egyszerre élveztek népszerűséget és szenvedtek hatósági tiltás alatt. Az angol és francia királyok időnként betiltották a labdajátékokat, hogy a katonák az íjászatra koncentráljanak. Ennek ellenére az itáliai városállamokban a bocsa virágzott, és fokozatosan versenysporttá szerveződött.',
  },
  {
    era: 'Reneszánsz',
    period: '15-16. század',
    title: 'Fejedelmi sportból népi hagyomány',
    text: 'Az itáliai reneszánsz idején a bocsa a nemesek és a közemberek körében egyaránt elterjedt. A Florence-i és Velencei köztársaságban szervezett tornákat rendeztek, szabályokat fektettek le. A sport lassan átszivárgott a közép-európai területekre az itáliai kereskedők és vándorló mesteremberek közvetítésével.',
  },
  {
    era: 'Modern kor',
    period: '19. század',
    title: 'Szabályok és szövetségek',
    text: 'A 19. század második felében az Itáliában honos bocsa szabályrendszere egységesedett. Az első formális szövetség 1873-ban alakult meg Génuában. A sport neve ebben az időszakban szilárdult meg, és a versenyrendszer alapjai lerakódtak.',
  },
  {
    era: 'Magyarország',
    period: '1920-as évek',
    title: 'Megjelenés a Kárpát-medencében',
    text: 'Magyarországra a bocsa az itáliai és dél-európai vendégmunkások révén érkezett a 20. század elején. Az ipari városok munkásnegyedeiben gyorsan megtalálta a maga közösségét. Az első informális mérkőzések az 1920-as évek végén játszódtak.',
  },
  {
    era: 'Szervezett sport',
    period: '1938',
    title: 'Első hazai bajnokság',
    text: 'Az első szervezett hazai versenyre 1938-ban kerül sor. A bajnokságon induló csapatok elsősorban a nagyvárosokból érkeztek, de a vidéki közösségek is egyre aktívabban kapcsolódtak be. Ekkor alakultak meg az első bocsa szakosztályok.',
  },
  {
    era: 'Újjáéledés',
    period: '1980-as évek',
    title: 'Reneszánsz és szervezetfejlesztés',
    text: 'A második világháborút követő szünet után a bocsa az 1980-as évektől újult erővel éledt újjá. Az újjáalakuló szövetség keretet adott a versenyrendszernek, és a sport az egész ország területén elkezdett terjeszkedni.',
  },
  {
    era: 'Jelen',
    period: '2000-es évektől',
    title: 'Korszerű infrastruktúra és eredmények',
    text: 'A 21. század elején megkezdődött a hazai pályainfrastruktúra korszerűsítése. Magyarország rendszeres résztvevője a közép-európai és kontinentális versenyeknek, és több egyéni és csapat eredménnyel is büszkélkedhet a nemzetközi mezőnyben.',
  },
]

export default function TortenetPage() {
  return (
    <>
      {/* PAGE HERO */}
      <div className="relative pt-32 pb-20 bg-foreground overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="font-serif font-black text-[clamp(8rem,20vw,18rem)] text-primary-foreground/4 mx-8 leading-none select-none">
                TÖRTÉNET
              </span>
            ))}
          </div>
        </div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <Link href="/" className="link-underline font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 hover:text-primary-foreground/70 mb-8 inline-block">
            Vissza a főoldalra
          </Link>
          <h1 className="font-serif font-black text-[clamp(3rem,8vw,7rem)] leading-[0.9] text-primary-foreground mt-4">
            A bocsa<br /><em className="font-normal italic">történelme</em>
          </h1>
          <p className="font-sans text-base leading-relaxed text-primary-foreground/60 max-w-lg mt-8">
            Egy sport útja az ókori Mediterráneumtól a Kárpát-medencéig. Ötezer év precíziós öröksége.
          </p>
        </div>
      </div>

      {/* INTRO IMAGE */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image src="/images/history-bocsa.png" alt="Bocsa történelme" fill className="object-cover" />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* TIMELINE */}
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-16">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-3">Kronológia</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Korok és fordulópontok
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[2.5rem] top-0 bottom-0 w-px bg-border hidden md:block" aria-hidden="true" />

            <div className="flex flex-col gap-0">
              {timeline.map((t, i) => (
                <div key={i} className="relative grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-6 md:gap-12 pb-14 group">
                  {/* Dot */}
                  <div className="hidden md:flex flex-col items-center pt-1">
                    <div className="w-3 h-3 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors shrink-0 z-10" />
                  </div>
                  <div className="border-b border-border pb-14 md:border-0 md:pb-0">
                    <div className="flex items-baseline gap-4 mb-4">
                      <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent">{t.era}</span>
                      <span className="stat-num font-serif text-lg font-bold text-muted-foreground">{t.period}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{t.title}</h3>
                    <p className="font-sans text-base leading-relaxed text-muted-foreground max-w-2xl">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section className="py-24 bg-secondary">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Büszkeség</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Magyar eredmények a bocsa sportban
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {[
              { year: '2019', event: 'Közép-európai Bajnokság', result: '2. hely, csapat', detail: 'Erős mezőnyben szerzett ezüstérem a csapatversenyen.' },
              { year: '2017', event: 'Balkáni Meghívásos Verseny', result: 'Arany, egyéni', detail: 'Egyéni kategóriában nyert aranyérem, rendkívüli pontossági teljesítménnyel.' },
              { year: '2015', event: 'Európai Nyílt Bajnokság', result: 'Bronz, páros', detail: 'Páros kategóriában szerzett bronz, a hazai bocsa történetének egyik kiemelkedő pillanata.' },
              { year: '2012', event: 'Mediterrán Nyílt Torna', result: 'Ezüst, csapat', detail: 'A csapatverseny döntőjéig jutottunk, ezüstérmet szerezve a mezőny legjobbjaitól.' },
            ].map((a) => (
              <div key={a.year} className="bg-secondary p-8">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="stat-num font-serif text-3xl font-bold text-accent">{a.year}</span>
                  <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground">{a.result}</span>
                </div>
                <h3 className="font-sans text-sm font-semibold tracking-wider uppercase text-foreground mb-2">{a.event}</h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground">{a.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="py-24 bg-background">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="mb-14">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-accent mb-3">Különleges tények</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-foreground">
              Amit kevesen tudnak a bocsáról
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'A pallino neve', text: 'A kis célgolyót különböző nyelveken és régiókban másként nevezik: pallino, jack, boccino, cochonnet. Mindegyik ugyanazt a célt jelöli: ez az a pont, amelyet el kell érni.' },
              { title: 'Olimpiai törekvések', text: 'A bocsa sport hosszú ideje küzd az olimpiai felvételért. Bár számos alkalommal bemutatósportként szerepelt, a teljes körű befogadás eddig várat magára.' },
              { title: 'Korosztályok fölött', text: 'A bocsa az egyik leginkább korosztály-független sport. Nyolcévesektől kilencvenévesekig mindenki versenyezhet, és a különböző korosztályok közös pályákon is játszhatnak.' },
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
