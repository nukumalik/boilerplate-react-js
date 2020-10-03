import * as types from './types'

const initialState = {
  code: 200,
  data: [],
  isLoading: false,
  message: '',
}

export default function (state = initialState, action) {
  const { code, data, isLoading, message, type } = action

  switch (type) {
    case types.FETCHING:
      return { ...state, code, data, message }
    case types.LOADING:
      return { ...state, isLoading }
    default:
      return state
  }
}
