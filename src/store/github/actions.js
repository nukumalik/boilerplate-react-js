import * as types from './types'
import axios from 'axios'

// Global Variables
const loading = (isLoading = true) => ({ type: types.LOADING, isLoading })

// Fetching Data
export const fetchData = () => async dispatch => {
  try {
    dispatch(loading())

    const options = {
      url: 'https://api.github.com/users',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }

    const result = await axios(options)
    const data = result?.data
    dispatch({ type: types.FETCHING, code: 200, data, message: '' })
    dispatch(loading(false))
  } catch (err) {
    const message = err?.response?.data?.message
    const code = err?.response?.data?.code
    dispatch({ type: types.FETCHING, code, data: [], message })
    dispatch(loading(false))
  }
}
