import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogArticles } from '@/lib/blog-data'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) return { title: 'Nem talalhato | Hungary Bocsa' }
  return {
    title: `${article.title} | Hungary Bocsa Blog`,
    description: article.excerpt,
  }
}

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = blogArticles.find((a) => a.slug === slug)
  if (!article) notFound()

  const currentIndex = blogArticles.indexOf(article)
  const prev = blogArticles[currentIndex - 1] ?? null
  const next = blogArticles[currentIndex + 1] ?? null

  const paragraphs = article.content.split('\n\n').filter(Boolean)

  return (
    <div className="bg-background">
      {/* Header */}
      <div className="pt-32 pb-16 bg-foreground text-primary-foreground">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="font-sans text-xs tracking-[0.2em] uppercase text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
              Blog
            </Link>
            <span className="text-primary-foreground/20 text-xs">/</span>
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-accent">{article.topic}</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-bold leading-tight text-balance max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <article className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <p className="font-sans text-lg leading-relaxed text-muted-foreground mb-10 border-l-2 border-accent pl-6">
                {article.excerpt}
              </p>
              <div className="flex flex-col gap-6">
                {paragraphs.map((para, i) => (
                  <p key={i} className="font-sans text-base leading-relaxed text-foreground/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 flex flex-col gap-8">
                <div className="bg-secondary p-6">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Tema</p>
                  <p className="font-sans text-sm font-medium text-foreground">{article.topic}</p>
                </div>
                <div className="bg-secondary p-6">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Tovabbi cikkek</p>
                  <ul className="flex flex-col gap-3">
                    {blogArticles
                      .filter((a) => a.slug !== slug)
                      .slice(0, 4)
                      .map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/blog/${a.slug}`}
                            className="font-sans text-sm leading-snug text-foreground/70 hover:text-foreground transition-colors link-underline"
                          >
                            {a.title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Prev / Next */}
      <div className="border-t border-border">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 divide-x divide-border">
            <div className="py-10 pr-8">
              {prev && (
                <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-2">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Elozo</span>
                  <span className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug text-balance">
                    {prev.title}
                  </span>
                </Link>
              )}
            </div>
            <div className="py-10 pl-8 text-right">
              {next && (
                <Link href={`/blog/${next.slug}`} className="group flex flex-col gap-2 items-end">
                  <span className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground">Kovetkezo</span>
                  <span className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug text-balance">
                    {next.title}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
