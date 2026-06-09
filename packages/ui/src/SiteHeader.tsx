import { headerCopy, type Locale } from "@msky/shared"
import type { MskyLink } from "./types"
import type { Theme } from "./preferences"

interface SiteHeaderProps {
  locale: Locale
  theme: Theme
  onToggleLocale: () => void
  onToggleTheme: () => void
  Link: MskyLink
}

export function SiteHeader({
  locale,
  theme,
  onToggleLocale,
  onToggleTheme,
  Link,
}: SiteHeaderProps) {
  const t = headerCopy[locale]
  const isDark = theme === "dark"

  return (
    <header className="site-header">
      <div className="site-nav">
        <Link href="/" className="brand-mark" aria-label="msky home">
          <span className="brand-symbol">m</span>
          <span>msky</span>
        </Link>

        <nav aria-label="Primary navigation" className="site-links">
          <Link href="/#method">{t.method}</Link>
          <Link href="/#vision">{t.vision}</Link>
        </nav>

        <div className="site-actions">
          <button
            type="button"
            className="preference-button language-button"
            onClick={onToggleLocale}
            aria-label={t.language}
          >
            {locale === "en" ? "中" : "EN"}
          </button>
          <button
            type="button"
            className="preference-button"
            onClick={onToggleTheme}
            aria-label={isDark ? t.light : t.dark}
          >
            {isDark ? "LT" : "DK"}
          </button>
          <Link href="/todos" className="nav-cta">
            <span>{t.open}</span>
            <span className="nav-cta-icon" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
