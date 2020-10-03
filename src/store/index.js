import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import Github from './github/reducer'

// Root Reducer
const reducers = combineReducers({ Github })

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
