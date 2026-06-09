export type Backend = "java" | "rust" | "go"

export interface Todo {
  id: number
  title: string
  completed: boolean
  createdAt: string
}

export interface ApiResponse<T> {
  data: T
  duration: number
}
