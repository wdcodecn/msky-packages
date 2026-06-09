export type { Backend, Todo, ApiResponse } from "./types"
export type { Locale } from "./copy"
export { headerCopy, homeCopy, todosCopy } from "./copy"
export { configureApi, fetchTodos, createTodo, toggleTodo, deleteTodo } from "./api"
export {
  initApiConfig,
  proxyApiBase,
  resolveApiBase,
  type ApiUrlMap,
} from "./api-config"
