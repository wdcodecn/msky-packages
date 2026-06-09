"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import {
  todosCopy,
  fetchTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
  type Backend,
  type Locale,
  type Todo,
} from "@msky/shared"
import { BackendSelector } from "./BackendSelector"
import { TodoItem } from "./TodoItem"

interface TodosWorkspaceProps {
  locale: Locale
}

export function TodosWorkspace({ locale }: TodosWorkspaceProps) {
  const t = todosCopy[locale]
  const [backend, setBackend] = useState<Backend>("java")
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState("")
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")
  const [listTime, setListTime] = useState<number | undefined>()
  const [mutatingIds, setMutatingIds] = useState<Set<number>>(new Set())
  const [adding, setAdding] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const doFetch = useCallback(async () => {
    setStatus("loading")
    try {
      const { data, duration } = await fetchTodos(backend)
      setTodos(data || [])
      setListTime(duration)
      setStatus("ready")
    } catch {
      setStatus("error")
    }
  }, [backend])

  useEffect(() => {
    doFetch()
  }, [doFetch])

  const add = async () => {
    const nextTitle = title.trim()
    if (!nextTitle || adding) return

    setAdding(true)
    try {
      const { data } = await createTodo(backend, nextTitle)
      setTodos((current) => [data, ...current])
      setTitle("")
      inputRef.current?.focus()
    } catch {
      /* ignore */
    } finally {
      setAdding(false)
    }
  }

  const toggle = async (id: number) => {
    setMutatingIds((prev) => new Set(prev).add(id))
    try {
      const { data } = await toggleTodo(backend, id)
      setTodos((current) =>
        current.map((todo) => (todo.id === id ? data : todo)),
      )
    } catch {
      /* ignore */
    } finally {
      setMutatingIds((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }
  }

  const remove = async (id: number) => {
    setMutatingIds((prev) => new Set(prev).add(id))
    try {
      await deleteTodo(backend, id)
      setTodos((current) => current.filter((todo) => todo.id !== id))
    } catch {
      /* ignore */
    } finally {
      setMutatingIds((prev) => {
        const next = new Set(prev)
        next.delete(id)
        return next
      })
    }
  }

  const active = todos.filter((item) => !item.completed).length
  const done = todos.length - active
  const completion = todos.length ? done / todos.length : 0

  return (
    <div className="todo-page">
      <div className="todo-layout">
        <aside className="todo-context">
          <p className="section-eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="todo-subtitle">{t.subtitle}</p>

          <div className="todo-focus-card">
            <div className="todo-focus-count">
              <span>{String(active).padStart(2, "0")}</span>
            </div>
            <div>
              <strong>{t.focus}</strong>
              <p>{t.focusBody}</p>
            </div>
          </div>

          <div className="todo-meter">
            <div className="todo-meter-copy">
              <span>
                {active} {t.active}
                {listTime !== undefined ? ` (${listTime}ms)` : ""}
              </span>
              <span>
                {done} {t.done}
              </span>
            </div>
            <div className="todo-meter-track">
              <span style={{ transform: `scaleX(${completion})` }} />
            </div>
          </div>

          <p className="todo-note">{t.note}</p>
        </aside>

        <section className="todo-workspace">
          <div className="todo-workspace-inner">
            <BackendSelector
              active={backend}
              onChange={setBackend}
              responseTime={listTime}
              label={t.backend}
            />

            <div className="todo-command">
              <input
                ref={inputRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && add()}
                placeholder={t.placeholder}
                aria-label={t.placeholder}
              />
              <button
                type="button"
                onClick={add}
                disabled={adding || !title.trim()}
              >
                <span>{adding ? "..." : t.add}</span>
                <i aria-hidden="true">+</i>
              </button>
            </div>

            <div className="todo-list">
              {status === "loading" && (
                <div className="todo-state">
                  <span className="todo-state-mark" />
                  <p>{t.loading}</p>
                </div>
              )}

              {status === "error" && (
                <div className="todo-state">
                  <span className="todo-error-mark">×</span>
                  <strong>{t.error}</strong>
                  <button type="button" onClick={doFetch}>
                    {t.retry}
                  </button>
                </div>
              )}

              {status === "ready" && todos.length === 0 && (
                <div className="todo-state">
                  <span className="todo-empty-field">
                    <i />
                    <i />
                  </span>
                  <strong>{t.emptyTitle}</strong>
                  <p>{t.emptyBody}</p>
                </div>
              )}

              {status === "ready" &&
                todos.map((todo, index) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    index={index}
                    onToggle={toggle}
                    onDelete={remove}
                    loading={mutatingIds.has(todo.id)}
                  />
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
