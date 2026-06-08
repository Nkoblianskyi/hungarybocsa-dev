import Link from 'next/link'
import { blogArticles } from '@/lib/blog-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Hungary Bocsa',
  description: 'Cikkek, elemzések és hasznos ismeretek a bocsa sportról. Technika, versenyrendszer, historia es tippek minden szintu jatekosnak.',
}

export default function BlogPage() {
  const featured = blogArticles[0]
  const rest = blogArticles.slice(1)

  return (
    <div className="bg-background">
      {/* Page header */}
      <div className="pt-32 pb-16 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-primary-foreground/40 mb-4">Tudástár</p>
          <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.95] text-balance">
            Blog
          </h1>
          <p className="font-sans text-base leading-relaxed text-primary-foreground/50 mt-6 max-w-lg">
            Cikkek, technikák, szakmai tippek és a bocsa sport világa egy helyen.
          </p>
        </div>
      </div>

      {/* Featured article */}
      <section className="py-20 border-b border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-5 gap-0 bg-secondary hover:bg-muted transition-colors overflow-hidden">
            <div className="lg:col-span-3 p-10 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent">{featured.topic}</span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-tight text-balance text-foreground mt-4 mb-6 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
              </div>
              <div className="mt-10">
                <span className="link-underline font-sans text-sm tracking-wider uppercase text-primary font-medium">
                  Olvasd el
                </span>
              </div>
            </div>
            <div className="lg:col-span-2 bg-foreground/10 min-h-[280px] lg:min-h-0 flex items-center justify-center">
              <div className="opacity-20 select-none" aria-hidden="true">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="1" />
                  <circle cx="40" cy="40" r="8" fill="currentColor" />
                  <line x1="40" y1="2" x2="40" y2="16" stroke="currentColor" strokeWidth="2" />
                  <line x1="40" y1="64" x2="40" y2="78" stroke="currentColor" strokeWidth="2" />
                  <line x1="2" y1="40" x2="16" y2="40" stroke="currentColor" strokeWidth="2" />
                  <line x1="64" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Article grid */}
      <section className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-10">Tovabbi cikkek</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-background p-8 hover:bg-secondary transition-colors flex flex-col gap-4"
              >
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent">{article.topic}</span>
                <h3 className="font-serif text-xl font-bold leading-snug text-balance text-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-muted-foreground flex-1">
                  {article.excerpt}
                </p>
                <span className="link-underline font-sans text-xs tracking-wider uppercase text-primary font-medium self-start mt-2">
                  Tovabb
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
