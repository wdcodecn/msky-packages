import type { Backend } from "@msky/shared"

interface BackendSelectorProps {
  active: Backend
  onChange: (backend: Backend) => void
  responseTime?: number
  label?: string
}

const variants: { value: Backend; label: string }[] = [
  { value: "java", label: "Java" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
]

export function BackendSelector({
  active,
  onChange,
  responseTime,
  label = "Backend",
}: BackendSelectorProps) {
  return (
    <div className="backend-bar">
      <span className="backend-bar-label">{label}</span>
      {variants.map((variant) => (
        <button
          key={variant.value}
          type="button"
          data-backend={variant.value}
          className={`backend-pill${active === variant.value ? " is-active" : ""}`}
          onClick={() => onChange(variant.value)}
        >
          {variant.label}
        </button>
      ))}
      {responseTime !== undefined && (
        <span className="backend-bar-time">
          <span className="backend-dot" />
          {responseTime}ms
        </span>
      )}
    </div>
  )
}
