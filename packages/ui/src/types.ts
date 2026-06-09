import type { ReactNode } from "react"

export type MskyLinkProps = {
  href: string
  className?: string
  children: ReactNode
  "aria-label"?: string
}

export type MskyLink = (props: MskyLinkProps) => ReactNode
