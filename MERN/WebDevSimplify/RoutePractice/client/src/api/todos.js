import { baseApi } from "./base";

export function getTodos(option) {
  return baseApi.get("todos", option).then((res) => res.data);
}