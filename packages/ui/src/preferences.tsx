"use client"

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import type { Locale } from "@msky/shared"

export type Theme = "light" | "dark"

interface Preferences {
  locale: Locale
  theme: Theme
  setLocale: (locale: Locale) => void
  setTheme: (theme: Theme) => void
}

const PreferencesContext = createContext<Preferences | null>(null)

function persistPreference(name: string, value: string) {
  if (typeof document === "undefined") return
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`
  try {
    localStorage.setItem(`msky-${name}`, value)
  } catch {}
}

function readStoredPreference(name: string): string | undefined {
  if (typeof window === "undefined") return undefined
  try {
    return localStorage.getItem(`msky-${name}`) ?? undefined
  } catch {
    return undefined
  }
}

export function PreferencesProvider({
  children,
  initialLocale = "en",
  initialTheme = "dark",
}: {
  children: ReactNode
  initialLocale?: Locale
  initialTheme?: Theme
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [theme, setThemeState] = useState<Theme>(initialTheme)

  useEffect(() => {
    const storedLocale = readStoredPreference("locale")
    const storedTheme = readStoredPreference("theme")
    if (storedLocale === "en" || storedLocale === "zh") setLocaleState(storedLocale)
    if (storedTheme === "light" || storedTheme === "dark") setThemeState(storedTheme)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en"
  }, [locale])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const value = useMemo<Preferences>(
    () => ({
      locale,
      theme,
      setLocale(nextLocale) {
        setLocaleState(nextLocale)
        persistPreference("locale", nextLocale)
      },
      setTheme(nextTheme) {
        setThemeState(nextTheme)
        persistPreference("theme", nextTheme)
      },
    }),
    [locale, theme],
  )

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = useContext(PreferencesContext)
  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider")
  }
  return context
}
