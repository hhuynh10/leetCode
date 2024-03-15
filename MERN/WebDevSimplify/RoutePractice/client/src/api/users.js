import { baseApi } from "./base";

export function getUsers(option) {
  return baseApi.get("users", option).then((res) => res.data);
}
