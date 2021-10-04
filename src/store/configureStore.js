import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import contador from './contador'
import modal from './modal'
// import logger from './middleware/logger'
import localStorage from './middleware/localStorage'
import login from './login'

const middleware = [...getDefaultMiddleware(), localStorage]

const reducer = combineReducers({contador, modal, login})
const store = configureStore({ reducer, middleware })

export default store