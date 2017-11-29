import { SETTINGS } from "./ActionTypes"

export function add(obj) {
  return {
    type: SETTINGS.ADD,
    payload: { obj }
  }
}

export function remove(key) {
  return {
    type: SETTINGS.REMOVE,
    payload: { key }
  }
}