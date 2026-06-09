import type { Backend } from "./types"
import { configureApi } from "./api"

/** Same-origin BFF prefix, e.g. `/api/java` → backend `/api/todos` */
export function proxyApiBase(backend: Backend): string {
  return `/api/${backend}`
}

export type ApiUrlMap = Partial<Record<Backend, string | undefined>>

export function resolveApiBase(
  backend: Backend,
  directUrls?: ApiUrlMap,
): string {
  const direct = directUrls?.[backend]?.trim()
  if (direct) return direct.replace(/\/$/, "")
  return proxyApiBase(backend)
}

/** Wire shared API client. Direct URLs win; otherwise use same-origin `/api/{backend}`. */
export function initApiConfig(directUrls?: ApiUrlMap): void {
  configureApi((backend) => resolveApiBase(backend, directUrls))
}
