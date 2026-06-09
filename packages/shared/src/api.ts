import type { Backend, ApiResponse, Todo } from "./types"

let resolveBaseUrl: ((backend: Backend) => string) | null = null

export function configureApi(resolver: (backend: Backend) => string) {
  resolveBaseUrl = resolver
}

function baseUrl(backend: Backend): string {
  if (resolveBaseUrl) return resolveBaseUrl(backend)
  return ""
}

async function request<T>(
  backend: Backend,
  path: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> {
  const start = performance.now()
  const res = await fetch(`${baseUrl(backend)}/api${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  })
  const duration = Math.round(performance.now() - start)

  if (!res.ok) {
    const text = await res.text().catch(() => "Unknown error")
    throw new Error(`API error (${res.status}): ${text}`)
  }

  if (res.status === 204) {
    return { data: undefined as T, duration }
  }

  const body = await res.json()
  return { data: body.data ?? body, duration }
}

export function fetchTodos(backend: Backend) {
  return request<Todo[]>(backend, "/todos")
}

export function createTodo(backend: Backend, title: string) {
  return request<Todo>(backend, "/todos", {
    method: "POST",
    body: JSON.stringify({ title }),
  })
}

export function toggleTodo(backend: Backend, id: number) {
  return request<Todo>(backend, `/todos/${id}`, { method: "PUT" })
}

export function deleteTodo(backend: Backend, id: number) {
  return request<void>(backend, `/todos/${id}`, { method: "DELETE" })
}
