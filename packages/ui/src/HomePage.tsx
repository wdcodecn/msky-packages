import { homeCopy, type Locale } from "@msky/shared"
import type { MskyLink } from "./types"

interface HomePageProps {
  locale: Locale
  Link: MskyLink
  imageBase?: string
}

export function HomePage({
  locale,
  Link,
  imageBase = "/images",
}: HomePageProps) {
  const t = homeCopy[locale]

  return (
    <div className="msky-home">
      <section className="msky-hero">
        <div className="msky-hero-copy">
          <p className="msky-label">{t.heroLabel}</p>
          <h1>{t.heroTitle}</h1>
          <p className="msky-hero-body">{t.heroBody}</p>
          <Link href="/todos" className="msky-primary-link">
            {t.open}
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <figure className="msky-hero-figure">
          <img
            src={`${imageBase}/msky-desk.png`}
            alt={t.imageAlt}
            width={1448}
            height={1086}
            loading="eager"
            decoding="async"
          />
          <figcaption>
            <span>01</span>
            <p>{t.imageCaption}</p>
          </figcaption>
        </figure>
      </section>

      <section id="method" className="msky-method">
        <div className="msky-method-intro">
          <h2>{t.methodTitle}</h2>
          <p>{t.methodBody}</p>
        </div>

        <div className="msky-step-list">
          {t.steps.map((step, index) => (
            <article key={step.title} className="msky-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="vision" className="msky-specimen">
        <div className="msky-specimen-copy">
          <h2>{t.specimenTitle}</h2>
          <p>{t.specimenBody}</p>
          <dl>
            <div>
              <dt>{t.active}</dt>
              <dd>03</dd>
            </div>
            <div>
              <dt>{t.done}</dt>
              <dd>01</dd>
            </div>
          </dl>
        </div>

        <div className="msky-product">
          <div className="msky-product-top">
            <span>MSKY</span>
            <span>06.06.26</span>
          </div>
          <div className="msky-compose">
            <span>{t.input}</span>
            <b>{t.add}</b>
          </div>
          <div className="msky-tasks">
            {t.sampleTasks.map((task, index) => (
              <div key={task}>
                <span className="msky-check" />
                <p>{task}</p>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
            ))}
          </div>
          <div className="msky-product-footer">
            <span>{t.active}</span>
            <i />
            <span>{t.done}</span>
          </div>
        </div>
      </section>

      <section className="msky-closing">
        <figure>
          <img
            src={`${imageBase}/msky-notes.png`}
            alt={t.notesAlt}
            width={1122}
            height={1402}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="msky-closing-copy">
          <blockquote>{t.quote}</blockquote>
          <p>{t.quoteBody}</p>
          <Link href="/todos" className="msky-text-link">
            {t.finalTitle}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <footer className="msky-footer">
        <span>{t.footer}</span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
