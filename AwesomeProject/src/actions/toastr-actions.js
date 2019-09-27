import * as types from './action-types';

export const pop_toast = (data) => {
  return { type: types.POP_TOAST, data }
}

export const remove_toast = (data) => {
  return { type: types.REMOVE_TOAST, data }
}
