import { SETTINGS } from "../actions/ActionTypes"

const initialState = {}

export function settings(state = initialState, action) {
  const payload = action.payload
  switch(action.type) {
    case SETTINGS.ADD:
      return {
        ...state,
        ...obj
      }
    case SETTINGS.REMOVE:
      const current = {...state}
      current[payload.key] = undefined
      return current
    default:
      return state
  }
}