import type { Todo } from "@msky/shared"

interface TodoItemProps {
  todo: Todo
  index: number
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  loading?: boolean
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 12.5 3.6 3.6L18 7.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TodoItem({
  todo,
  index,
  onToggle,
  onDelete,
  loading,
}: TodoItemProps) {
  return (
    <article
      className={`todo-item${todo.completed ? " is-complete" : ""}`}
      style={{ opacity: loading ? 0.5 : 1 }}
    >
      <span className="todo-index">{String(index + 1).padStart(2, "0")}</span>

      <button
        type="button"
        className="todo-toggle"
        onClick={() => onToggle(todo.id)}
        aria-label={`Toggle task: ${todo.title}`}
      >
        {todo.completed && <CheckIcon />}
      </button>

      <span className="todo-title">{todo.title}</span>

      <button
        type="button"
        className="todo-remove"
        onClick={() => onDelete(todo.id)}
        aria-label={`Remove task: ${todo.title}`}
      >
        <span aria-hidden="true">×</span>
      </button>
    </article>
  )
}
